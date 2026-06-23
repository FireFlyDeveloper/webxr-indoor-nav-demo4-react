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
      };
    }

    // Track user's estimated current waypoint for re-routing.
    let currentWaypointId = WAYPOINTS[0].id; // start at Lobby
    let imageTrackingCalibrated = false;

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
    // Deferred until the next XR frame so we have a valid pose.
    let pendingCalibrate = false;
    window.__onCalibrate = () => { pendingCalibrate = true; };

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

    // A simple perspective camera. The XR module will replace its matrices
    // each frame from the viewer pose.
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

    // WebXR session lifecycle: hide skybox in immersive mode, restore on end.
    const onSessionEnded = () => {
      if (ctx.skybox) ctx.skybox.visible = true;
      if (xrButtonRef.current) xrButtonRef.current.setSession(null);
      xrSessionRef.current = null;
    };

    const onRequestSession = () => {
      if (!navigator.xr) return;
      navigator.xr
        .requestSession('immersive-ar', {
          optionalFeatures: ['local-floor'],
        })
        .then((session) => {
          xrSessionRef.current = session;
          if (xrButtonRef.current) xrButtonRef.current.setSession(session);
          // Hide the skybox once we are in immersive-ar.
          if (ctx.skybox) ctx.skybox.visible = false;
          session.addEventListener('end', onSessionEnded);
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

    // Expose handlers to the React-rendered button via the ref.
    xrButtonRef.current = {
      onRequestSession,
      onEndSession,
      setSession: (s) => {
        void s;
      },
    };

    // Render loop. THREE.WebGLRenderer.setAnimationLoop is XR-aware and
    // hands us a frame + XR camera when in an immersive session.
    renderer.setAnimationLoop((_t, frame) => {
      ctx.update(0);

      // --- Origin calibration (deferred to frame) ---
      if (pendingCalibrate && frame) {
        ctx.calibrateOrigin(frame);
        pendingCalibrate = false;
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

            // Check if user is within 1m of the current target waypoint.
            if (dist < 1.0) {
              const nextStep = step + 1;
              if (nextStep >= path.length) {
                // Arrived at final destination!
                window.__navState.currentStep = nextStep;
                window.__navState.distance = 0;
                window.__navState.arrived = true;
                window.__navState.navigating = false;
              } else {
                // Advance to next waypoint.
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
    };
  }, []);

  // Bridge the imperative renderer-side handlers into the React button.
  React.useEffect(() => {
    // Re-bind once after mount in case the order changes.
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
            passthrough XR device. The logic is largely the same as the
            corresponding VR sample, with the primary difference being that
            no background is rendered.{' '}
            <a className="back" href="./">
              Back
            </a>
          </p>
        </details>
        <WebXRButtonWithBridge ref={xrButtonRef} onClickBridge={handleButtonClick} />
      </header>
      <Navigation />
    </>
  );
}

/**
 * Thin wrapper around WebXRButton that wires the imperative XR handlers
 * (held in xrButtonRef by App) to the button's click logic.
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
