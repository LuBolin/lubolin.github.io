import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

const lastMousePos = {
    x: 0,
    y: 0
}

let cameraAzimuth = 0; // Horizontal rotation angle
let cameraPolar = Math.PI / 4; // Vertical angle (starts at 45 degrees)

const camMinDist = 500;
const camMaxDist = 2000;
const camDefaultDist = 1000;

// 0 is straight up, π/2 is horizontal, π is straight down
const camMinAngle = Math.PI / 8; // 22.5 degrees from up
const camMaxAngle = (Math.PI / 2) + (Math.PI / 8); // 90 + 22.5 = 112.5 degrees (can look slightly below horizontal)

const cameraLerpFactor = 0.1;
const cameraZoomSpeed = 0.1;
const cameraRotationSpeed = 0.005; // Radians per pixel

let mainCamera: THREE.PerspectiveCamera;
let targetCameraPosition: THREE.Vector3;
let leftClickHeld: boolean = false;

function loadModel(url: string): Promise<THREE.Group> {
  const fbxLoader = new FBXLoader();
  return new Promise((resolve, reject) => {
    fbxLoader.load(
      url,
      (fbx) => resolve(fbx),
      undefined,
      (error) => reject(error)
    );
  });
}

function clampTargetPosition() {
  // Clamp only the distance, not the angle (angle is already clamped via cameraPolar)
  const distance = targetCameraPosition.length();
  const clampedDistance = Math.max(camMinDist, Math.min(camMaxDist, distance));

  // If distance needs adjustment, scale the position vector
  if (distance !== clampedDistance) {
    targetCameraPosition.normalize().multiplyScalar(clampedDistance);
  }
}

export async function initShangriLa(): Promise<void> {
  const canvas = document.getElementById('shangrila-canvas') as HTMLCanvasElement;
  if (!canvas) {
    console.error('Canvas element not found');
    return;
  }

  const container = canvas.parentElement;
  if (!container) {
    console.error('Canvas container not found');
    return;
  }
  const width = container.clientWidth;
  const height = container.clientHeight;


  // Create scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87ceeb); // Sky blue


  // Create camera
  mainCamera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);

  // Set initial position using camDefaultDist
  const initialAngle = Math.PI / 4; // 45 degrees from horizontal
  const horizontalDist = camDefaultDist * Math.cos(initialAngle);
  const verticalDist = camDefaultDist * Math.sin(initialAngle);
  mainCamera.position.set(0, verticalDist, horizontalDist);
  targetCameraPosition = mainCamera.position.clone();
  mainCamera.lookAt(0, 0, 0);


  // Create renderer
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(width, height);


  // Add lighting
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 10, 0); // Top-down light
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft ambient light
  scene.add(ambientLight);

  // Add axis helpers (500 unit length)
  const axisHelper = new THREE.AxesHelper(500);
  (axisHelper.material as THREE.LineBasicMaterial).transparent = true;
  (axisHelper.material as THREE.LineBasicMaterial).opacity = 0.8;
  scene.add(axisHelper);
  // Red = X axis, Green = Y axis, Blue = Z axis


  // Load 3D model
  try {
    const islandModel = await loadModel('/assets/models/lighthouse_island.fbx');
    console.log('Model loaded successfully', islandModel);

    // Calculate bounding box to understand model size
    const box = new THREE.Box3().setFromObject(islandModel);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    console.log('Model size:', size);
    console.log('Model center:', center);

    // Center the model at the origin
    islandModel.position.set(-center.x, -center.y, -center.z);


    // Scale the model
    // const maxDim = Math.max(size.x, size.y, size.z);
    // const scale = 10 / maxDim; // Adjust 10 to desired size
    // islandModel.scale.setScalar(scale);

    scene.add(islandModel);
  } catch (error) {
    console.error('Error loading model:', error);
  }

  window.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
      leftClickHeld = true;
      lastMousePos.x = event.clientX;
      lastMousePos.y = event.clientY;
    }
  })

  window.addEventListener('mouseup', (event) => {
    if (event.button === 0) { leftClickHeld = false; }
  })

  window.addEventListener('mousemove', (event) => {
    if (leftClickHeld) {
      const deltaX = event.clientX - lastMousePos.x;
      const deltaY = event.clientY - lastMousePos.y;

      // Update rotation based on delta
      cameraAzimuth -= deltaX * cameraRotationSpeed; // Horizontal rotation
      cameraPolar -= deltaY * cameraRotationSpeed; // Vertical rotation

      // Clamp polar angle
      cameraPolar = Math.max(camMinAngle, Math.min(camMaxAngle, cameraPolar));

      // Update last mouse position
      lastMousePos.x = event.clientX;
      lastMousePos.y = event.clientY;
    }
  })

  // Scroll to zoom
  window.addEventListener('wheel', (event) => {
    event.preventDefault();

    const delta = event.deltaY > 0 ? 1 + cameraZoomSpeed : 1 - cameraZoomSpeed;

    // Scale target camera position (zooming in/out from origin)
    targetCameraPosition.multiplyScalar(delta);

    clampTargetPosition();
  }, { passive: false })

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Calculate camera position from spherical coordinates
    const distance = targetCameraPosition.length();

    // Spherical to Cartesian
    targetCameraPosition.x = distance * Math.sin(cameraPolar) * Math.sin(cameraAzimuth);
    targetCameraPosition.y = distance * Math.cos(cameraPolar);
    targetCameraPosition.z = distance * Math.sin(cameraPolar) * Math.cos(cameraAzimuth);

    clampTargetPosition();

    mainCamera.position.lerp(targetCameraPosition, cameraLerpFactor);

    mainCamera.lookAt(0, 0, 0);

    renderer.render(scene, mainCamera);
  }
  animate();

  
  // Handle window resizing
  window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    mainCamera.aspect = width / height;
    mainCamera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });
}
