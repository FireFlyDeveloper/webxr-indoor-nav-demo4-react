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
    //  WebXR session — no hit-test, no XRAnchor
    // ============================================================
    // Scene is pinned at world origin (0,0,0). Request 'local-floor'
    // so the camera's Y starts at floor height (~1.6m). No tap-to-place,
    // no calibration step. Just walk and the nav arrows stay anchored
    // in world space.
    // ============================================================

    const onSessionEnded = () => {
      if (xrButtonRef.current) xrButtonRef.current.setSession(null);
      xrSessionRef.current = null;
    };

    const onRequestSession = () => {
      if (!navigator.xr) return;
      navigator.xr
        .requestSession('immersive-ar', {
          requiredFeatures: ['local-floor'],
          optionalFeatures: ['dom-overlay'],
        })
        .then((session) => {
          xrSessionRef.current = session;
          if (xrButtonRef.current) xrButtonRef.current.setSession(session);
          session.addEventListener('end', onSessionEnded);

          // --- Visibility change: when the user backgrounds the AR
          //     view (notification, app switch, lock screen), the
          //     browser pauses rAF. When they come back, the first
          //     1-2 frames return a stale or zeroed viewer pose
          //     until tracking re-converges, which makes the nav
          //     arrow teleport and rotate. We drop those stale
          //     frames and re-acquire the ref space on return. ---
          session.addEventListener('visibilitychange', () => {
            if (session.visibilityState === 'visible') {
              // Flag the next frame in Scene.js to drop the stale
              // pose and re-acquire the ref space.
              session.__needsRefReset = true;
              if (session.__localFloorRef) {
                session.__localFloorRef = null;
              }
            }
          });

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
      ctx.update(0, frame);

      // --- Navigation update (when in AR and navigating) ---
      if (frame && window.__navState.navigating && !window.__navState.arrived) {
        const userPos = ctx.getUserPosition(frame);
        const path = window.__navState.path;
        const step = window.__navState.currentStep;

        if (userPos && path && step < path.length) {
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
