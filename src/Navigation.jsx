import React from 'react';
import { WAYPOINTS, findPath, getWaypoint } from './MapData.js';

function initNavState() {
  if (!window.__navState) {
    window.__navState = {
      destinationId: null, path: [], currentStep: 0,
      distance: 0, arrived: false, navigating: false,
    };
  }
  return window.__navState;
}

export default function Navigation() {
  const [destId, setDestId] = React.useState(null);
  const [nav, setNav] = React.useState(initNavState());

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!window.__navState) return;
      const ns = window.__navState;
      setNav({
        destinationId: ns.destinationId,
        path: ns.path ? [...ns.path] : [],
        currentStep: ns.currentStep,
        distance: ns.distance,
        arrived: ns.arrived,
        navigating: ns.navigating,
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const handleGo = () => {
    if (destId === null) return;
    const fromId = nav.navigating && nav.path.length > 0
      ? nav.path[nav.path.length - 1]
      : WAYPOINTS[0].id;
    const path = findPath(fromId, destId);
    if (!path || path.length === 0) { alert('No path found.'); return; }
    window.__navState.destinationId = destId;
    window.__navState.path = path;
    window.__navState.currentStep = 0;
    window.__navState.distance = 0;
    window.__navState.arrived = false;
    window.__navState.navigating = true;
    if (typeof window.__onNavigate === 'function') window.__onNavigate(destId, path);
  };

  const handleCancel = () => {
    window.__navState.destinationId = null;
    window.__navState.path = [];
    window.__navState.currentStep = 0;
    window.__navState.distance = 0;
    window.__navState.arrived = false;
    window.__navState.navigating = false;
    setDestId(null);
    if (typeof window.__onNavigate === 'function') window.__onNavigate(null, []);
  };

  const destLabel = nav.destinationId !== null ? (getWaypoint(nav.destinationId) || {}).label || '' : '';
  let nextLabel = '';
  if (nav.path.length > 0 && nav.currentStep < nav.path.length) {
    nextLabel = (getWaypoint(nav.path[nav.currentStep]) || {}).label || '';
  }

  return (
    <div className="nav-panel">
      <div className="nav-title">Navigation</div>

      {!nav.navigating && !nav.arrived && (
        <>
          <select className="nav-select" value={destId ?? ''}
            onChange={(e) => setDestId(e.target.value ? Number(e.target.value) : null)}>
            <option value="">— Select Destination —</option>
            {WAYPOINTS.map((w) => (
              <option key={w.id} value={w.id}>{w.label}</option>
            ))}
          </select>
          <button className="nav-go-btn" disabled={destId === null} onClick={handleGo}>
            Go
          </button>
          <button className="nav-cancel-btn" onClick={() => {
            if (typeof window.__onCalibrate === 'function') window.__onCalibrate();
          }}>
            Set Origin
          </button>
          <div style={{ fontSize: 11, opacity: 0.5, marginTop: 6, textAlign: 'center', lineHeight: 1.5 }}>
            Stand at Lobby → Set Origin →<br />Select destination → Go → START AR
          </div>
        </>
      )}

      {nav.navigating && !nav.arrived && (
        <div className="nav-status">
          <div className="nav-next">→ {nextLabel}</div>
          <div className="nav-dist">{nav.distance.toFixed(1)} m</div>
          <div className="nav-dest">Destination: {destLabel}</div>
          <button className="nav-cancel-btn" onClick={handleCancel}>Cancel</button>
        </div>
      )}

      {nav.arrived && (
        <div className="nav-status nav-arrived">
          <div className="nav-check">Arrived at {destLabel}</div>
          <button className="nav-again-btn" onClick={handleCancel}>Navigate Again</button>
        </div>
      )}
    </div>
  );
}
