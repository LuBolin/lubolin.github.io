import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';


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

const cameraLerpFactor = 0.04;
const cameraZoomSpeed = 0.1;
const cameraRotationSpeed = 0.005; // Radians per pixel

let mainCamera: THREE.PerspectiveCamera;
let targetCameraPosition: THREE.Vector3 = new THREE.Vector3();
let cameraRadius = camDefaultDist;
let leftClickHeld: boolean = false;

// Environment
const sunDirnLight: THREE.DirectionalLight = new THREE.DirectionalLight(0xffffff, 3);
const ambientLight: THREE.AmbientLight = new THREE.AmbientLight(0xffffff, 0.5);

const EAST = new THREE.Vector3(1, 0, 1).normalize();
const dayLengthMs = 60000; // 60 seconds for a full day-night cycle
const sceneStartTime = dayLengthMs / (24.0 / 7.0); // Start at 7 AM
let timeOfDay = sceneStartTime / dayLengthMs; // 0 -> 12 AM, 0.5 -> 12 PM, 1.0 -> 12 AM
let pageStartTime = Date.now() - sceneStartTime; // Initialize to sceneStartTime offset so we start at 8 AM

function loadModel(url: string): Promise<THREE.Group> {
  const modelLoader = new GLTFLoader(); // FBXLoader();
  modelLoader.setMeshoptDecoder(MeshoptDecoder);
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://unpkg.com/three@0.160.0/examples/jsm/libs/draco/');
  modelLoader.setDRACOLoader(dracoLoader);

  return new Promise((resolve, reject) => {
    modelLoader.load(
      url,
      (gltf) => resolve(gltf.scene),
      undefined,
      (error) => reject(error)
    );
  });
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
  const skyBlue = new THREE.Color(0x87ceeb);
  scene.background = skyBlue;


  // Create camera
  mainCamera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);

  // Set initial position using camDefaultDist
  const initialPitch = (Math.PI / 2.0) * 0.8; // 80% away from the vertical
  const initialYaw = - (Math.PI / 2.0) * 0.7; // 70% towards -X axis from +Z axis
  cameraAzimuth = initialYaw;
  cameraPolar = initialPitch;
  cameraRadius = camDefaultDist;
  const initialRadius = cameraRadius * 1.2; // Start slightly further out
  mainCamera.position.set(
    initialRadius * Math.sin(cameraPolar) * Math.sin(cameraAzimuth),
    initialRadius * Math.cos(cameraPolar),
    initialRadius * Math.sin(cameraPolar) * Math.cos(cameraAzimuth),
  );
  mainCamera.lookAt(0, 0, 0);


  // Create renderer
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(width, height);


  // Add lighting
  scene.add(sunDirnLight);
  scene.add(ambientLight);

  // Add axis helpers (500 unit length)
  const axisHelper = new THREE.AxesHelper(500);
  (axisHelper.material as THREE.LineBasicMaterial).transparent = true;
  (axisHelper.material as THREE.LineBasicMaterial).opacity = 0.8;
  scene.add(axisHelper);
  // Red = X axis, Green = Y axis, Blue = Z axis


  // Load 3D model
  try {
    // const islandModel = await loadModel('/assets/models/lighthouse_island.fbx');
    const islandModel = await loadModel('/assets/models/island_hunyuan3d.glb');
    console.log('Model loaded successfully', islandModel);

    // resize for better visibility
    const tempSize = (new THREE.Box3().setFromObject(islandModel)).getSize(new THREE.Vector3());
    const scalingFactor = 0.8 * camDefaultDist / Math.max(tempSize.x, tempSize.y, tempSize.z);
    islandModel.scale.setScalar(scalingFactor);

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

    cameraRadius *= delta;
    cameraRadius = Math.max(camMinDist, Math.min(camMaxDist, cameraRadius));

  }, { passive: false })


  function animateCamera() {
    // target position from spherical coords
    targetCameraPosition.set(
      cameraRadius * Math.sin(cameraPolar) * Math.sin(cameraAzimuth),
      cameraRadius * Math.cos(cameraPolar),
      cameraRadius * Math.sin(cameraPolar) * Math.cos(cameraAzimuth),
    );

    // smooth move current -> target
    mainCamera.position.lerp(targetCameraPosition, cameraLerpFactor);
    mainCamera.lookAt(0, 0, 0);
  }

  function animateAmbientLight() {
    // ambient brightness based on timeOfDay. 1.0 at noon, 0.2 at night
    const ambientIntensity = 0.2 + 0.8 * Math.max(0, Math.cos((timeOfDay - 0.5) * 2 * Math.PI));
    ambientLight.intensity = ambientIntensity;
    // background's blue brightness to match ambient light
    scene.background = new THREE.Color(0x000000).lerp(skyBlue, ambientIntensity);
  }

  function animateSunLight() {
    // As time pass, rise from my "EAST" towards zenith and set towards "WEST"
    const timeOfDayPi = timeOfDay * 2 * Math.PI;
    const targetSunSourceDirn = new THREE.Vector3(
      EAST.x * Math.sin(timeOfDayPi),
      - Math.cos(timeOfDayPi),
      EAST.z * Math.sin(timeOfDayPi)
    ).normalize();

    // set sun direction light position far away in that direction
    const debugScale = 2000;
    sunDirnLight.position.copy(targetSunSourceDirn.clone().multiplyScalar(debugScale));

    sunDirnLight.target.position.set(0, 0, 0);
    sunDirnLight.target.updateMatrixWorld();

    const sunSphereGeom = new THREE.SphereGeometry(50, 16, 16);
    const sunSphereMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sunSphere = new THREE.Mesh(sunSphereGeom, sunSphereMat);
    sunSphere.position.copy(sunDirnLight.position);
    scene.add(sunSphere);

    setTimeout(() => {
      scene.remove(sunSphere);
      sunSphere.geometry.dispose();
      (sunSphere.material as THREE.Material).dispose();
    }, 5);
  }

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    timeOfDay = ((Date.now() - pageStartTime) % dayLengthMs) / dayLengthMs;

    animateCamera();

    animateAmbientLight();

    animateSunLight();

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
