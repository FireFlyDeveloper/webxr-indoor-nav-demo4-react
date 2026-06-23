import React from 'react';
import * as THREE from 'three';
import WebXRButton from './WebXRButton.jsx';
import { buildScene } from './Scene.js';

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
        .requestSession('immersive-ar', { optionalFeatures: ['local-floor'] })
        .then((session) => {
          xrSessionRef.current = session;
          if (xrButtonRef.current) xrButtonRef.current.setSession(session);
          // Hide the skybox once we are in immersive-ar.
          ctx.skybox.visible = false;
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
        // no-op; the React button reads XR state via props in real use.
        // (kept for API parity with the original class)
        void s;
      },
    };

    // Render loop. THREE.WebGLRenderer.setAnimationLoop is XR-aware and
    // hands us a frame + XR camera when in an immersive session.
    renderer.setAnimationLoop((_t, frame) => {
      ctx.update(0);
      if (frame) {
        // XR: let three.js handle pose-derived camera via renderer.xr.
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
    };
  }, []);

  // Bridge the imperative renderer-side handlers into the React button.
  // We do this by re-rendering with a key once handlers are ready; the
  // button reads handlers from a ref we keep up to date.
  React.useEffect(() => {
    // Re-bind once after mount in case the order changes.
  }, []);

  // We use a small wrapper that defers to xrButtonRef for the click logic.
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
