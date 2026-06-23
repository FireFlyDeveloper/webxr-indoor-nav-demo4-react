import * as THREE from 'three';

// Shared reference space for user-position queries.
let _localRefSpace = null;

/**
 * Builds the Three.js scene:
 *   - skybox: back-side sphere textured with milky-way-4k.png (inline view only)
 *   - navArrowGroup: holds AR navigation arrows / path tube
 *
 * Exposes:
 *   scene            the THREE.Scene
 *   skybox           the THREE.Mesh for the skybox (toggle .visible)
 *   navArrowGroup    the THREE.Group holding nav visuals
 *   update(dt)       per-frame update hook
 *   setNavPath(wpts) draw (or clear) navigation arrows along a path
 *   getUserPosition(frame)  returns {x, y, z} from XR viewer pose
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
  const navArrowGroup = new THREE.Group();
  navArrowGroup.name = 'navArrowGroup';
  scene.add(navArrowGroup);

  // --- Floor grid (visual anchor so arrows don't appear to float) ---
  const gridHelper = new THREE.GridHelper(14, 14, 0x444444, 0x222222);
  gridHelper.position.y = 0.005;
  scene.add(gridHelper);

  // --- Origin calibration ---
  let originOffset = new THREE.Vector3(); // applied to navArrowGroup

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
   * Returns the user's floor-level position from the XR frame.
   * Falls back to THREE.Vector3(0,0,0) if no pose is available.
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
      // Return position in waypoint-local space (world pos minus origin offset).
      return new THREE.Vector3(pos.x - originOffset.x, 0, pos.z - originOffset.z);
    }

    return new THREE.Vector3(0, 0, 0);
  }

  // ------------------------------------------------------------------
  //  ORIGIN CALIBRATION
  // ------------------------------------------------------------------

  /**
   * Offsets the navigation group so waypoint 0 (Lobby) aligns with the
   * user's current floor position. Call this when the user is standing
   * at the physical origin point.
   */
  function calibrateOrigin(frame) {
    if (!frame) return;
    const userPos = getUserPosition(frame);
    // First waypoint is at (0,0,0). Shift navArrowGroup so that
    // (0,0,0) in waypoint space maps to userPos in world space.
    originOffset.copy(userPos);
    navArrowGroup.position.copy(originOffset);
    // Also shift the grid to stay under the path.
    gridHelper.position.set(userPos.x, 0.005, userPos.z);
  }

  return {
    scene,
    skybox,
    navArrowGroup,
    update(_dt) {
      // nothing to do per-frame
    },
    setNavPath,
    getUserPosition,
    calibrateOrigin,
  };
}
