import React from 'react';

/**
 * Minimal React-native WebXRButton.
 * API mirrors the original webxr-button.js class:
 *   new WebXRButton({ onRequestSession, onEndSession,
 *                     textEnterXRTitle, textXRNotFoundTitle, textExitXRTitle })
 * exposes .domElement, .enabled, .setSession(null).
 *
 * Renders a <button> with the same "barebones-button" styling as the
 * original. Text cycles: enter title -> exit title -> not-found title.
 */
export default class WebXRButton extends React.Component {
  constructor(props) {
    super(props);
    const {
      onRequestSession,
      onEndSession,
      textEnterXRTitle = 'START XR',
      textXRNotFoundTitle = 'XR NOT FOUND',
      textExitXRTitle = 'EXIT  XR',
    } = props;

    this.onRequestSession = onRequestSession;
    this.onEndSession = onEndSession;
    this.textEnterXRTitle = textEnterXRTitle;
    this.textXRNotFoundTitle = textXRNotFoundTitle;
    this.textExitXRTitle = textExitXRTitle;

    this.state = {
      enabled: false,
      label: textEnterXRTitle,
      immersive: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  get domElement() {
    return this.buttonRef.current;
  }

  get enabled() {
    return this.state.enabled;
  }

  set enabled(v) {
    this.setState({ enabled: v, label: v ? this.textEnterXRTitle : this.textXRNotFoundTitle });
  }

  setSession(session) {
    if (session) {
      this.setState({ immersive: true, label: this.textExitXRTitle });
    } else {
      this.setState({ immersive: false, label: this.textEnterXRTitle });
    }
  }

  handleClick() {
    if (!this.state.enabled) return;
    if (this.state.immersive) {
      this.onEndSession && this.onEndSession();
    } else {
      this.onRequestSession && this.onRequestSession();
    }
  }

  render() {
    return (
      <button
        ref={this.buttonRef}
        className="barebones-button"
        disabled={!this.state.enabled}
        onClick={this.handleClick}
      >
        {this.state.label}
      </button>
    );
  }
}

WebXRButton.prototype.buttonRef = React.createRef();
