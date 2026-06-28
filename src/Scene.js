import * as THREE from 'three';

// Shared reference space for user-position queries.
let _localRefSpace = null;

/**
 * Builds the Three.js scene:
 *   - skybox: back-side sphere textured with milky-way-4k.png (inline view only)
 *   - navArrowGroup: holds AR navigation arrows / path tube
 *
 * Exposes:
 *   scene              the THREE.Scene
 *   skybox             the THREE.Mesh for the skybox (toggle .visible)
 *   navArrowGroup      the THREE.Group holding nav visuals
 *   update(dt)         per-frame update hook
 *   setNavPath(wpts)   draw (or clear) navigation arrows along a path
 *   getUserPosition(frame)  returns {x, y, z} from XR viewer pose
 *   calibrateOrigin(frame)  legacy viewer-pose snapshot calibration
 *   setReticlePose(matrix)  drive a reticle from the latest hit-test pose
 *   setReticleVisible(bool) show/hide the reticle
 *   getReticleMatrix()      return the most recent reticle matrix
 *   setAnchor(xrAnchor)     pin a WebXR XRAnchor as the scene origin
 *   updateAnchor(frame, space)  poll the anchor's pose each frame
 *   clearAnchor()           un-pin the anchor
 */
export function buildScene() {
  const scene = new THREE.Scene();

  // --- Skybox — disabled, no background rendered ---
  const skybox = null;

  // Ambient light — kept minimal for any lit materials added later.
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);
  const sun = new THREE.DirectionalLight(0xffffff, 1.0);
  sun.position.set(5, 5, 5);
  scene.add(sun);

  // --- Navigation arrows group ---
  // When an XRAnchor is set, navArrowGroup is parented to anchorObject3D
  // (a THREE.Object3D whose pose is updated each frame from
  // frame.getPose(xrAnchor.anchorSpace, refSpace)). This means the
  // navigation visuals stay pinned to the real-world location the
  // user tapped, even as they walk around.
  const navArrowGroup = new THREE.Group();
  navArrowGroup.name = 'navArrowGroup';
  const anchorObject3D = new THREE.Object3D();
  anchorObject3D.name = 'anchorObject3D';
  anchorObject3D.add(navArrowGroup);
  scene.add(anchorObject3D);

  // --- Floor grid (visual anchor so arrows don't appear to float) ---
  const gridHelper = new THREE.GridHelper(14, 14, 0x444444, 0x222222);
  gridHelper.position.y = 0.005;
  scene.add(gridHelper);

  // --- Reticle (white ring on a horizontal surface) ---
  // Driven by the hit-test loop. Visible only when a hit-test result
  // is available and the user hasn't yet placed an anchor.
  const reticle = new THREE.Mesh(
    new THREE.RingGeometry(0.12, 0.18, 32).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.85 })
  );
  reticle.matrixAutoUpdate = false;
  reticle.visible = false;
  scene.add(reticle);

  // Latest reticle pose (4x4 column-major matrix).
  let reticleMatrix = null;

  // --- Origin calibration state ---
  // originOffset is the world-space offset applied to navArrowGroup
  // when we're using the legacy viewer-pose snapshot (no anchor).
  let originOffset = new THREE.Vector3();
  let useAnchor = false;        // true once an XRAnchor is set
  let activeAnchor = null;      // the raw XRAnchor from the runtime

  // ------------------------------------------------------------------
  //  ARROW DRAWING HELPERS
  // ------------------------------------------------------------------

  const ARROW_COLOR = 0x00ff88;
  const DEST_COLOR = 0xff3333;
  const ARROW_SPACING = 0.5;  // meters between successive arrows
  const ARROW_HEIGHT = 0.3;   // total height of arrow geometry
  const FLOOR_OFFSET = 0.3;   // float above floor so arrows are visible

  /**
   * Create a single arrow mesh (cone tip + cylinder shaft).
   * @param {THREE.Vector3} position world-space position
   * @param {THREE.Vector3} direction unit vector pointing toward next waypoint
   * @param {number} zOffset tiny Y offset to prevent z-fighting between adjacent arrows
   */
  function createArrow(position, direction, zOffset = 0) {
    const group = new THREE.Group();
    group.position.copy(position);

    // Point the arrow's local +Y toward the direction vector.
    const quat = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      direction.clone().normalize()
    );
    group.quaternion.copy(quat);

    const mat = new THREE.MeshBasicMaterial({ color: ARROW_COLOR });

    // Cone tip (top half)
    const coneGeo = new THREE.ConeGeometry(0.06, ARROW_HEIGHT * 0.5, 8);
    const cone = new THREE.Mesh(coneGeo, mat);
    cone.position.y = ARROW_HEIGHT * 0.25;
    group.add(cone);

    // Cylinder shaft (bottom half)
    const cylGeo = new THREE.CylinderGeometry(0.03, 0.03, ARROW_HEIGHT * 0.5, 8);
    const cyl = new THREE.Mesh(cylGeo, mat);
    cyl.position.y = -ARROW_HEIGHT * 0.25;
    group.add(cyl);

    // Z-fighting guard: tiny Y bump per arrow
    group.position.y += zOffset;

    return group;
  }

  /**
   * Draw arrows along the full path (series of waypoints).
   * Spawns arrows at ARROW_SPACING intervals along each edge.
   * Also draws a tube line and a destination marker.
   * @param {Array<{id:number, x:number, y:number, z:number}>} wpts
   */
  function setNavPath(wpts) {
    // Clear previous
    while (navArrowGroup.children.length > 0) {
      const child = navArrowGroup.children[0];
      navArrowGroup.remove(child);
      disposeObject(child);
    }

    if (!wpts || wpts.length < 2) return;

    // -- Path tube (thin green, semi-transparent) --
    const pathPoints = wpts.map((wp) => new THREE.Vector3(wp.x, FLOOR_OFFSET, wp.z));
    const curve = new THREE.CatmullRomCurve3(pathPoints);
    const tubeGeo = new THREE.TubeGeometry(curve, wpts.length * 20, 0.02, 8, false);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: ARROW_COLOR,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    });
    const tube = new THREE.Mesh(tubeGeo, tubeMat);
    navArrowGroup.add(tube);

    // -- Arrows along each edge --
    let zFightIndex = 0;
    for (let i = 0; i < wpts.length - 1; i++) {
      const a = new THREE.Vector3(wpts[i].x, 0, wpts[i].z);
      const b = new THREE.Vector3(wpts[i + 1].x, 0, wpts[i + 1].z);
      const seg = b.clone().sub(a);
      const segLen = seg.length();
      const dir = seg.normalize();

      // Place arrows at regular intervals along the segment.
      const count = Math.max(1, Math.floor(segLen / ARROW_SPACING));
      for (let j = 0; j < count; j++) {
        const t = (j + 0.5) / count; // center arrow within each interval
        const pt = a.clone().addScaledVector(dir, t * segLen);
        pt.y = FLOOR_OFFSET;
        const zOff = zFightIndex * 0.005; // tiny incremental offset
        const arrow = createArrow(pt, dir, zOff);
        navArrowGroup.add(arrow);
        zFightIndex++;
      }
    }

    // -- Destination marker (red sphere) at final waypoint --
    const dest = wpts[wpts.length - 1];
    const destGeo = new THREE.SphereGeometry(0.15, 16, 16);
    const destMat = new THREE.MeshBasicMaterial({ color: DEST_COLOR });
    const destMarker = new THREE.Mesh(destGeo, destMat);
    destMarker.position.set(dest.x, FLOOR_OFFSET + 0.25, dest.z);
    navArrowGroup.add(destMarker);

    // -- Floating checkmark ring above destination --
    const ringGeo = new THREE.TorusGeometry(0.2, 0.04, 8, 16);
    const ringMat = new THREE.MeshBasicMaterial({ color: DEST_COLOR });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(dest.x, FLOOR_OFFSET + 0.5, dest.z);
    navArrowGroup.add(ring);
  }

  /**
   * Recursively dispose geometries and materials.
   */
  function disposeObject(obj) {
    obj.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => m.dispose());
        } else {
          child.material.dispose();
        }
      }
    });
  }

  // ------------------------------------------------------------------
  //  USER POSITION
  // ------------------------------------------------------------------

  /**
   * Returns the user's floor-level position. The result is in the
   * coordinate space of the navigation graph — i.e. relative to the
   * origin (anchor or snapshot).
   *
   * - If an XRAnchor is active, we transform the viewer pose through
   *   the anchor's inverse so the result is in waypoint-local space.
   * - Otherwise, we use the legacy snapshot offset.
   */
  function getUserPosition(frame) {
    if (!frame) return new THREE.Vector3(0, 0, 0);

    if (!_localRefSpace && frame.session) {
      frame.session
        .requestReferenceSpace('local-floor')
        .then((ref) => {
          _localRefSpace = ref;
        })
        .catch(() => {
          frame.session.requestReferenceSpace('viewer').then((ref) => {
            _localRefSpace = ref;
          });
        });
    }

    if (!_localRefSpace) return new THREE.Vector3(0, 0, 0);

    const pose = frame.getViewerPose(_localRefSpace);
    if (pose && pose.views && pose.views.length > 0) {
      const view = pose.views[0];
      const pos = view.transform.position;

      if (useAnchor && activeAnchor) {
        // Convert viewer-space position into the anchor's local frame.
        // The anchor's pose is already applied to anchorObject3D, so
        // we need the inverse of that pose to subtract it out.
        const anchorPos = anchorObject3D.position;
        return new THREE.Vector3(pos.x - anchorPos.x, 0, pos.z - anchorPos.z);
      }

      // Legacy snapshot path: subtract the captured origin offset.
      return new THREE.Vector3(pos.x - originOffset.x, 0, pos.z - originOffset.z);
    }

    return new THREE.Vector3(0, 0, 0);
  }

  // ------------------------------------------------------------------
  //  ORIGIN CALIBRATION (legacy / fallback)
  // ------------------------------------------------------------------

  /**
   * Offsets the navigation group so waypoint 0 (Lobby) aligns with the
   * user's current floor position. Call this when the user is standing
   * at the physical origin point.
   *
   * This is the FALLBACK when XRAnchor is not available. With an
   * anchor, the origin is set via setAnchor() instead.
   */
  function calibrateOrigin(frame) {
    if (!frame) return;
    const userPos = getUserPosition(frame);
    originOffset.copy(userPos);
    anchorObject3D.position.copy(originOffset);
    // Also shift the grid to stay under the path.
    gridHelper.position.set(userPos.x, 0.005, userPos.z);
  }

  // ------------------------------------------------------------------
  //  RETICLE (hit-test visualization)
  // ------------------------------------------------------------------

  function setReticlePose(matrix) {
    if (!matrix) return;
    // Copy into a stable array we can hand back to the caller.
    reticleMatrix = Array.from(matrix);
    reticle.matrix.fromArray(matrix);
    reticle.matrix.decompose(reticle.position, reticle.quaternion, reticle.scale);
    reticle.visible = true;
  }

  function setReticleVisible(v) {
    reticle.visible = !!v;
    if (!v) reticleMatrix = null;
  }

  function getReticleMatrix() {
    return reticleMatrix;
  }

  // ------------------------------------------------------------------
  //  ANCHOR (WebXR XRAnchor API)
  // ------------------------------------------------------------------
  // The anchor is the runtime-tracked XRAnchor. We attach it to
  // anchorObject3D by polling its pose every frame via
  // frame.getPose(xrAnchor.anchorSpace, refSpace). The WebXR runtime
  // (ARCore, ARKit) does the actual SLAM tracking; we just read the
  // updated matrix.
  //
  // Per the W3C WebXR Anchors Module:
  //   https://www.w3.org/TR/webxr-anchors-module/
  // An XRAnchor is a stable, trackable point in space. The pose of
  // an XRAnchor may change over time as the runtime refines its
  // understanding of the environment, but its world position is
  // preserved across frames.
  // ------------------------------------------------------------------

  function setAnchor(xrAnchor) {
    activeAnchor = xrAnchor;
    useAnchor = true;
    // Clear the snapshot offset — anchor's pose is the new origin.
    originOffset.set(0, 0, 0);
    anchorObject3D.position.set(0, 0, 0);
    anchorObject3D.quaternion.identity();
    gridHelper.position.set(0, 0.005, 0);
    // Hide the reticle once the anchor is placed.
    reticle.visible = false;
    reticleMatrix = null;
  }

  function clearAnchor() {
    activeAnchor = null;
    useAnchor = false;
    anchorObject3D.position.set(0, 0, 0);
    anchorObject3D.quaternion.identity();
    gridHelper.position.set(0, 0.005, 0);
  }

  function hasAnchor() {
    return useAnchor && activeAnchor != null;
  }

  /**
   * Per-frame: poll the anchor's current pose and apply it to the
   * anchorObject3D. This is how the WebXR runtime communicates the
   * SLAM-refined pose back to us.
   *
   * IMPORTANT: we update only the POSITION from the anchor's pose.
   * The rotation is kept at identity (world-aligned) so that the
   * navigation arrows point in real-world axes, not in whatever
   * direction the camera was facing when the user tapped. Without
   * this, the arrow orientation drifts as the camera was rotated at
   * tap time and the nav graph (defined in world XZ) misaligns.
   */
  function updateAnchor(frame, refSpace) {
    if (!useAnchor || !activeAnchor || !frame || !refSpace) return;
    const pose = frame.getPose(activeAnchor.anchorSpace, refSpace);
    if (!pose) return;
    // Position only — preserve identity rotation.
    const p = pose.transform.position;
    anchorObject3D.position.set(p.x, p.y, p.z);
    anchorObject3D.quaternion.identity();
    // Also keep the grid under the anchor for visual continuity.
    gridHelper.position.set(p.x, 0.005, p.z);
  }

  return {
    scene,
    skybox,
    navArrowGroup,
    anchorObject3D,
    update(_dt) {
      // nothing to do per-frame
    },
    setNavPath,
    getUserPosition,
    calibrateOrigin,
    setReticlePose,
    setReticleVisible,
    getReticleMatrix,
    setAnchor,
    clearAnchor,
    hasAnchor,
    updateAnchor,
  };
}
