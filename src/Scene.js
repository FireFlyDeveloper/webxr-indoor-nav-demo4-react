import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Builds the Three.js scene:
 *   - skybox: back-side sphere textured with milky-way-4k.png (inline view only)
 *   - solar system: glTF at media/gltf/space/space.gltf, scaled 0.1
 *
 * Exposes:
 *   scene            the THREE.Scene
 *   skybox           the THREE.Mesh for the skybox (toggle .visible)
 *   solarSystemRoot  the THREE.Object3D holding the glTF
 *   update(dt)       per-frame update hook
 */
export function buildScene() {
  const scene = new THREE.Scene();

  // --- Skybox (inline view only; hidden during immersive-ar) ---
  const skyGeo = new THREE.SphereGeometry(500, 60, 40);
  const skyTex = new THREE.TextureLoader().load('media/textures/milky-way-4k.png');
  skyTex.colorSpace = THREE.SRGBColorSpace;
  const skyMat = new THREE.MeshBasicMaterial({
    map: skyTex,
    side: THREE.BackSide,
    depthWrite: false,
  });
  const skybox = new THREE.Mesh(skyGeo, skyMat);
  scene.add(skybox);

  // --- Solar system glTF (scale 0.1 per the original sample) ---
  const solarSystemRoot = new THREE.Object3D();
  solarSystemRoot.scale.set(0.1, 0.1, 0.1);
  scene.add(solarSystemRoot);

  const loader = new GLTFLoader();
  loader.load(
    'media/gltf/space/space.gltf',
    (gltf) => {
      solarSystemRoot.add(gltf.scene);
    },
    undefined,
    (err) => {
      console.error('Failed to load space.gltf', err);
    }
  );

  // Subtle ambient so the planets are not pitch black in inline view.
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);
  const sun = new THREE.DirectionalLight(0xffffff, 1.0);
  sun.position.set(5, 5, 5);
  scene.add(sun);

  return {
    scene,
    skybox,
    solarSystemRoot,
    update(_dt) {
      // The glTF itself contains its own animation tracks; nothing to do here.
    },
  };
}
