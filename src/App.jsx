import React from 'react';
import * as THREE from 'three';
import WebXRButton from './WebXRButton.jsx';
import { buildScene } from './Scene.js';
import { WAYPOINTS, findPath, getWaypoint } from './MapData.js';
import Navigation from './Navigation.jsx';

const QUERY_ARGS = (() => {
  const params = new URLSearchParams(window.location.search);
  const out = {};
  for (const [k, v] of params) out[k] = v;
  return out;
})();

function getBool(name, fallback) {
  const v = QUERY_ARGS[name];
  if (v === undefined) return fallback;
  return v === 'true' || v === '1';
}

export default function App() {
  const rendererRef = React.useRef(null);
  const sceneCtxRef = React.useRef(null);
  const cameraRef = React.useRef(null);
  const xrSessionRef = React.useRef(null);
  const xrButtonRef = React.useRef(null);

  // Mount: set up renderer + scene + XR.
  React.useEffect(() => {
    // --- Init global nav state ---
    if (!window.__navState) {
      window.__navState = {
        destinationId: null,
        path: [],
        currentStep: 0,
        distance: 0,
        arrived: false,
        navigating: false,
        anchorPlaced: false,
      };
    }

    // Track user's estimated current waypoint for re-routing.
    let currentWaypointId = WAYPOINTS[0].id; // start at Lobby

    // --- Navigation callback (called by Navigation.jsx) ---
    window.__onNavigate = (destId, path) => {
      const ctx = sceneCtxRef.current;
      if (!ctx) return;

      if (!path || path.length === 0) {
        ctx.setNavPath(null);
        return;
      }
      const waypointObjs = path.map((id) => getWaypoint(id)).filter(Boolean);
      ctx.setNavPath(waypointObjs);
    };

    // --- Calibration callback (called by Navigation.jsx's "Set Origin" button) ---
    let pendingCalibrate = false;
    window.__onCalibrate = () => { pendingCalibrate = true; };

    // --- Anchor reset (un-pin so the user can re-tap) ---
    window.__onAnchorReset = () => {
      const ctx = sceneCtxRef.current;
      if (!ctx) return;
      ctx.clearAnchor();
      if (window.__navState) window.__navState.anchorPlaced = false;
    };

    // Optional polyfill (default true), matching the original.
    if (getBool('usePolyfill', true)) {
      import('https://cdn.jsdelivr.net/npm/webxr-polyfill@latest/build/webxr-polyfill.module.js')
        .then((mod) => {
          const Polyfill = mod.default || mod.WebXRPolyfill || mod;
          new Polyfill();
        })
        .catch((err) => {
          console.warn('webxr-polyfill failed to load', err);
        });
    }

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      xrCompatible: true,
    });
    renderer.xr.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    document.body.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ctx = buildScene();
    sceneCtxRef.current = ctx;

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );
    camera.position.set(0, 1.6, 3);
    cameraRef.current = camera;

    // Resize handling.
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);
    onResize();

    // ============================================================
    //  WebXR Anchor + hit-test wiring
    // ============================================================
    // Pattern follows the canonical three.js webxr_ar_hittest example
    // (https://github.com/mrdoob/three.js/blob/r160/examples/webxr_ar_hittest.html)
    // and the W3C WebXR Anchors Module
    // (https://www.w3.org/TR/webxr-anchors-module/).
    //
    // Flow:
    //  1. Request session with requiredFeatures: ['hit-test'] and
    //     optionalFeatures: ['anchors', 'local-floor', 'dom-overlay'].
    //  2. Once the session is started, request a hit-test source in
    //     'viewer' reference space (the camera ray).
    //  3. Per frame, get the latest hit-test result and use it to
    //     position the reticle (visual feedback for the user).
    //  4. On user 'select' (tap), call frame.createAnchor(pose, refSpace)
    //     to create an XRAnchor at the hit-test pose. The anchor is
    //     tracked by the WebXR runtime relative to the real world.
    //  5. Per frame, getPose(xrAnchor.anchorSpace, refSpace) and apply
    //     it to the navArrowGroup so the navigation visuals stay pinned
    //     to the real-world location.
    //
    // three@0.160 does not export a THREE.XRAnchor class; we use the
    // raw WebXR API. The anchor is stored in scene context.
    // ============================================================

    let hitTestSource = null;
    let hitTestSourceRequested = false;
    let sessionEndListenerAttached = false;
    // The most recent XRFrame. Captured per animation frame and reused
    // in the 'select' event handler so we don't need the non-standard
    // XRSession.requestFrame() (which never made it into the spec).
    let latestFrame = null;

    const onSessionEnded = () => {
      if (ctx.skybox) ctx.skybox.visible = true;
      if (xrButtonRef.current) xrButtonRef.current.setSession(null);
      xrSessionRef.current = null;
      hitTestSource = null;
      hitTestSourceRequested = false;
      sessionEndListenerAttached = false;
      latestFrame = null;
      ctx.clearAnchor();
      if (window.__navState) window.__navState.anchorPlaced = false;
    };

    const onSelect = () => {
      // The 'select' event is fired by the session on user tap. We
      // use the most recent animation frame (which carries the latest
      // hit-test results) to build the anchor pose.
      if (!hitTestSource || !latestFrame) return;
      if (ctx.hasAnchor()) return; // one anchor per session

      const refSpace = renderer.xr.getReferenceSpace();
      if (!refSpace) return;

      const results = latestFrame.getHitTestResults(hitTestSource);
      if (results.length === 0) return;
      const pose = results[0].getPose(refSpace);
      if (!pose) return;

      // The hit-test result also has a convenience method that
      // creates the anchor directly from its own pose. We prefer
      // this when available because it preserves the precise
      // hit-test semantics (e.g. plane-vs-mesh distinction).
      let promise;
      if (typeof results[0].createAnchor === 'function') {
        promise = Promise.resolve(results[0].createAnchor());
      } else {
        promise = latestFrame.createAnchor(pose.transform, refSpace);
      }

      promise
        .then((xrAnchor) => {
          if (!xrAnchor) {
            console.warn('createAnchor returned null; falling back to snapshot.');
            pendingCalibrate = true;
            return;
          }
          ctx.setAnchor(xrAnchor);
          if (window.__navState) window.__navState.anchorPlaced = true;
          console.log('XRAnchor created and pinned.');
        })
        .catch((err) => {
          console.warn('createAnchor failed; using snapshot fallback:', err);
          // Graceful fallback: the device supports hit-test but not
          // anchors (e.g. some iOS builds). Use the legacy snapshot
          // path so the demo still works.
          pendingCalibrate = true;
        });
    };

    const onRequestSession = () => {
      if (!navigator.xr) return;
      navigator.xr
        .requestSession('immersive-ar', {
          requiredFeatures: ['hit-test'],
          optionalFeatures: ['anchors', 'local-floor', 'dom-overlay'],
        })
        .then((session) => {
          xrSessionRef.current = session;
          if (xrButtonRef.current) xrButtonRef.current.setSession(session);
          if (ctx.skybox) ctx.skybox.visible = false;
          session.addEventListener('end', onSessionEnded);
          // Attach the select handler immediately, synchronously.
          // This MUST happen inside the requestSession .then() so
          // it runs before the user can possibly tap.
          session.addEventListener('select', onSelect);
          renderer.xr.setSession(session);
        })
        .catch((err) => {
          console.warn('requestSession(immersive-ar) failed', err);
        });
    };

    const onEndSession = () => {
      const s = xrSessionRef.current;
      if (s) s.end();
    };

    xrButtonRef.current = {
      onRequestSession,
      onEndSession,
      setSession: (s) => { void s; },
    };

    // ============================================================
    //  Animation loop
    // ============================================================
    renderer.setAnimationLoop((_t, frame) => {
      ctx.update(0);
      latestFrame = frame;

      // --- Origin calibration (deferred to frame) — old snapshot path ---
      if (pendingCalibrate && frame) {
        ctx.calibrateOrigin(frame);
        pendingCalibrate = false;
      }

      // --- Hit-test + Anchor pipeline (only when in AR) ---
      if (frame) {
        const referenceSpace = renderer.xr.getReferenceSpace();

        // Lazy request the hit-test source the first time we have a frame.
        if (!hitTestSourceRequested) {
          const session = renderer.xr.getSession();
          if (session && typeof session.requestHitTestSource === 'function') {
            session
              .requestReferenceSpace('viewer')
              .then((viewerSpace) =>
                session.requestHitTestSource({ space: viewerSpace })
              )
              .then((source) => {
                hitTestSource = source;
              })
              .catch((err) => {
                console.warn('requestHitTestSource failed:', err);
              });
          }
          hitTestSourceRequested = true;
        }

        // Update reticle from latest hit-test result.
        if (hitTestSource) {
          const results = frame.getHitTestResults(hitTestSource);
          if (results.length > 0) {
            const hitPose = results[0].getPose(referenceSpace);
            if (hitPose) {
              ctx.setReticlePose(hitPose.transform.matrix);
            }
          } else {
            ctx.setReticleVisible(false);
          }
        }

        // Update the anchor (if one is pinned).
        ctx.updateAnchor(frame, referenceSpace);
      }

      // --- Navigation update (when in AR and navigating) ---
      if (frame && window.__navState.navigating && !window.__navState.arrived) {
        const userPos = ctx.getUserPosition(frame);
        const path = window.__navState.path;
        const step = window.__navState.currentStep;

        if (path && step < path.length) {
          const targetWp = getWaypoint(path[step]);
          if (targetWp) {
            const dx = userPos.x - targetWp.x;
            const dz = userPos.z - targetWp.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            window.__navState.distance = dist;

            if (dist < 1.0) {
              const nextStep = step + 1;
              if (nextStep >= path.length) {
                window.__navState.currentStep = nextStep;
                window.__navState.distance = 0;
                window.__navState.arrived = true;
                window.__navState.navigating = false;
              } else {
                window.__navState.currentStep = nextStep;
                currentWaypointId = path[nextStep];
              }
            }
          }
        }
      }

      // Render
      if (frame) {
        renderer.render(ctx.scene, renderer.xr.getCamera());
      } else {
        renderer.render(ctx.scene, camera);
      }
    });

    // Cleanup on unmount.
    return () => {
      renderer.setAnimationLoop(null);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      delete window.__onNavigate;
      delete window.__onCalibrate;
      delete window.__onAnchorReset;
    };
  }, []);

  const handleButtonClick = (immersive) => {
    if (immersive) {
      xrButtonRef.current && xrButtonRef.current.onEndSession();
    } else {
      xrButtonRef.current && xrButtonRef.current.onRequestSession();
    }
  };

  return (
    <>
      <header>
        <details open>
          <summary>Indoor Navigation Demo 4</summary>
          <p>
            This sample demonstrates how to use an &apos;immersive-ar&apos;
            XRSession to present a virtual object to a transparent or
            passthrough XR device.{' '}
            <a className="back" href="./">Back</a>
          </p>
        </details>
        <WebXRButtonWithBridge ref={xrButtonRef} onClickBridge={handleButtonClick} />
      </header>
      <Navigation />
    </>
  );
}

/**
 * Thin wrapper around WebXRButton that wires the imperative XR handlers.
 */
class WebXRButtonWithBridge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enabled: false, immersive: false, label: 'START AR' };
    this._xrButtonProps = props.xrButtonProps || {};
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (navigator.xr && navigator.xr.isSessionSupported) {
      navigator.xr
        .isSessionSupported('immersive-ar')
        .then((supported) => this.setState({ enabled: supported }))
        .catch(() => this.setState({ enabled: false }));
    }
  }
  setSession(session) {
    this.setState({
      immersive: !!session,
      label: session ? 'EXIT  AR' : 'START AR',
    });
  }
  handleClick() {
    if (!this.state.enabled) return;
    this.props.onClickBridge(this.state.immersive);
  }
  render() {
    return (
      <button
        className="barebones-button"
        disabled={!this.state.enabled}
        onClick={this.handleClick}
      >
        {this.state.enabled ? this.state.label : 'AR NOT FOUND'}
      </button>
    );
  }
}
