/**
 * MapData.js — Indoor navigation waypoint graph + A* pathfinding.
 *
 * Z is north, X is east, Y is up (Three.js convention).
 * All waypoints sit at y=0 (floor level).
 */
export const WAYPOINTS = [
  { id: 0, label: 'Lobby',        x: 0, y: 0, z: 0 },
  { id: 1, label: 'Reception',    x: 3, y: 0, z: 0 },
  { id: 2, label: 'Room 101',     x: 6, y: 0, z: 0 },
  { id: 3, label: 'Room 102',     x: 3, y: 0, z: 3 },
  { id: 4, label: 'Room 103',     x: 0, y: 0, z: 3 },
  { id: 5, label: 'Restroom',     x: 0, y: 0, z: 6 },
  { id: 6, label: 'Meeting Room', x: 3, y: 0, z: 6 },
  { id: 7, label: 'Cafeteria',    x: 6, y: 0, z: 3 },
];

/** Bidirectional edges (hallways). */
export const EDGES = [
  { from: 0, to: 1 },   // Lobby ↔ Reception
  { from: 1, to: 2 },   // Reception ↔ Room 101
  { from: 1, to: 3 },   // Reception ↔ Room 102
  { from: 0, to: 4 },   // Lobby ↔ Room 103
  { from: 4, to: 5 },   // Room 103 ↔ Restroom
  { from: 3, to: 6 },   // Room 102 ↔ Meeting Room
  { from: 2, to: 7 },   // Room 101 ↔ Cafeteria
  { from: 3, to: 7 },   // Room 102 ↔ Cafeteria (diagonal shortcut)
];

/** Build adjacency list from WAYPOINTS + EDGES. */
function buildAdjacency() {
  const adj = new Map();
  for (const wp of WAYPOINTS) adj.set(wp.id, []);
  for (const e of EDGES) {
    adj.get(e.from).push(e.to);
    adj.get(e.to).push(e.from);
  }
  return adj;
}

const ADJACENCY = buildAdjacency();

/** Quick lookup: waypoint id → {x,y,z} */
const WP_MAP = Object.fromEntries(WAYPOINTS.map((w) => [w.id, w]));

/** Euclidean distance between two waypoints. */
function dist(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = a.z - b.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * A* pathfinding.
 * @param {number} fromId — starting waypoint ID
 * @param {number} toId   — destination waypoint ID
 * @returns {number[]}     ordered array of waypoint IDs from start to dest,
 *                         or empty array if unreachable.
 */
export function findPath(fromId, toId) {
  if (fromId === toId) return [fromId];

  const goal = WP_MAP[toId];
  if (!goal) return [];

  // A* open set: nodes to explore, keyed by id → fScore
  const openSet = new Set([fromId]);

  const cameFrom = new Map();
  const gScore = new Map();
  const fScore = new Map();

  for (const w of WAYPOINTS) {
    gScore.set(w.id, Infinity);
    fScore.set(w.id, Infinity);
  }
  gScore.set(fromId, 0);
  fScore.set(fromId, dist(WP_MAP[fromId], goal));

  while (openSet.size > 0) {
    // Find node in openSet with lowest fScore
    let current = null;
    let bestF = Infinity;
    for (const id of openSet) {
      const f = fScore.get(id);
      if (f < bestF) {
        bestF = f;
        current = id;
      }
    }

    if (current === toId) {
      // Reconstruct path
      const path = [current];
      while (cameFrom.has(current)) {
        current = cameFrom.get(current);
        path.unshift(current);
      }
      return path;
    }

    openSet.delete(current);

    for (const neighbor of ADJACENCY.get(current) || []) {
      const tentativeG = gScore.get(current) + dist(WP_MAP[current], WP_MAP[neighbor]);
      if (tentativeG < gScore.get(neighbor)) {
        cameFrom.set(neighbor, current);
        gScore.set(neighbor, tentativeG);
        fScore.set(neighbor, tentativeG + dist(WP_MAP[neighbor], goal));
        openSet.add(neighbor);
      }
    }
  }

  return []; // no path found
}

/**
 * Returns the waypoint object for a given ID.
 */
export function getWaypoint(id) {
  return WP_MAP[id] || null;
}

/**
 * Returns a summary object for debugging/export.
 */
export function WAYPOINT_OBJ() {
  let totalDistance = 0;
  for (const e of EDGES) {
    totalDistance += dist(WP_MAP[e.from], WP_MAP[e.to]);
  }
  return {
    waypoints: WAYPOINTS,
    edges: EDGES,
    totalDistance: Math.round(totalDistance * 100) / 100,
    exportedAt: new Date().toISOString(),
  };
}
