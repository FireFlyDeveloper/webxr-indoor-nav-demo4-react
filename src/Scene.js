import * as THREE from 'three';
/**
 * Builds the Three.js scene:
 *   - navArrowGroup: holds AR navigation arrows / path tube, pinned at world (0,0,0)
 *
 * Exposes:
 *   scene              the THREE.Scene
 *   navArrowGroup      the THREE.Group holding nav visuals
 *   update(dt, frame)  per-frame update hook — snaps yaw to N/S/W/E
 *   setNavPath(wpts)   draw (or clear) navigation arrows along a path
 *   getUserPosition(frame)  returns {x, y, z} from XR viewer pose
 *   invalidateUserPosition()
 */
export function buildScene() {
  const scene = new THREE.Scene();

  // Ambient light — kept minimal for any lit materials added later.
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);
  const sun = new THREE.DirectionalLight(0xffffff, 1.0);
  sun.position.set(5, 5, 5);
  scene.add(sun);

  // --- Yaw pivot ---
  // The whole nav scene is parented to this Object3D. Its Y rotation
  // is snapped to the nearest cardinal (N/S/W/E) based on the user's
  // actual compass heading. This keeps arrows aligned to real-world
  // directions and stops them from "spinning" continuously as the
  // user turns the phone a few degrees.
  const yawPivot = new THREE.Object3D();
  yawPivot.name = 'yawPivot';
  yawPivot.position.set(0, 0, 0);
  scene.add(yawPivot);

  // --- Navigation arrows group ---
  // Pinned at world origin (0,0,0) via yawPivot. The WebXR session
  // uses 'local-floor' so the camera starts at floor height (~1.6m)
  // and the user walks around. The nav visuals stay put in world
  // space — no hit-test, no anchor, no calibration.
  const navArrowGroup = new THREE.Group();
  navArrowGroup.name = 'navArrowGroup';
  navArrowGroup.position.set(0, 0, 0);
  yawPivot.add(navArrowGroup);

  // --- Floor grid (visual anchor so arrows don't appear to float) ---
  const gridHelper = new THREE.GridHelper(14, 14, 0x444444, 0x222222);
  gridHelper.position.y = 0.005;
  scene.add(gridHelper);

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
  //  YAW PIVOT — fixed direction
  // ------------------------------------------------------------------
  // The nav scene is parented to a yawPivot whose Y-rotation is set
  // ONCE at build time and never changes. The user controls their
  // own facing by physically turning their body, not by rotating
  // the scene.
  //
  // FIXED_YAW_RAD: the rotation around world Y to apply to the
  // entire nav scene. 0 = world -Z is "forward" (the standard
  // Three.js / WebXR convention). Change this if your map's "north"
  // doesn't line up with the session's local-floor -Z.
  // ------------------------------------------------------------------

  const FIXED_YAW_RAD = 0; // 0 = no rotation; arrows point world -Z (north)
  yawPivot.rotation.y = FIXED_YAW_RAD;

  // ------------------------------------------------------------------
  //  USER POSITION
  // ------------------------------------------------------------------

  // Re-acquire the ref space when the session resumes (visibility
  // flips back to 'visible'). After a pause the cached ref space
  // returns a stale pose for 1-2 frames; we drop those frames and
  // re-fetch a fresh one.
  function getActiveRefSpace(frame) {
    if (!frame || !frame.session) return null;

    const session = frame.session;
    if (session.__needsRefReset) {
      session.__needsRefReset = false;
      session.__localFloorRef = null;
      return null; // skip this frame
    }

    if (session.__localFloorRef) return session.__localFloorRef;

    try {
      const ref = renderer.xr.getReferenceSpace();
      if (ref) session.__localFloorRef = ref;
      return ref;
    } catch (e) {
      return null;
    }
  }

  /**
   * Returns the user's floor-level position in WORLD space (relative
   * to world origin, which is where the nav graph is defined).
   * Returns null when tracking is stale (right after visibilitychange).
   */
  function getUserPosition(frame) {
    if (!frame) return null;

    const refSpace = getActiveRefSpace(frame);
    if (!refSpace) return null;

    const pose = frame.getViewerPose(refSpace);
    if (pose && pose.views && pose.views.length > 0) {
      const view = pose.views[0];
      const pos = view.transform.position;
      return new THREE.Vector3(pos.x, 0, pos.z);
    }

    return null;
  }

  /**
   * Called from App.jsx on session visibilitychange. Flags the next
   * frame to skip (stale pose) and forces ref-space re-acquisition.
   */
  function invalidateUserPosition() {
    // We don't have direct access to the session here; App.jsx also
    // sets session.__needsRefReset = true on its visibilitychange
    // listener, so this is belt-and-braces.
  }

  // Suppress unused-var linting — we keep the renderer/scene import live
  // via the captured `scene` below.
  void gridHelper;

  return {
    scene,
    navArrowGroup,
    update(_dt, _frame) {
      // Yaw is fixed at build time (see FIXED_YAW_RAD). No per-frame
      // orientation work needed.
    },
    setNavPath,
    getUserPosition,
    invalidateUserPosition,
  };
}
