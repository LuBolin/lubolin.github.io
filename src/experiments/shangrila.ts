import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const mountShangriLa = () => {
  const root = document.querySelector<HTMLElement>('[data-shangrila]');
  if (!root || root.dataset.shangrilaInitialized) return;
  root.dataset.shangrilaInitialized = 'true';
  void initialize(root);
};

mountShangriLa();
document.addEventListener('astro:page-load', mountShangriLa);

async function initialize(root: HTMLElement) {
  const canvas = root.querySelector<HTMLCanvasElement>('#shangrila-canvas');
  const status = root.querySelector<HTMLElement>('[data-shangrila-status]');
  const message = root.querySelector<HTMLElement>('[data-shangrila-message]');
  if (!canvas || !status || !message) return;

  const showError = (error: unknown) => {
    console.error('Shangri-La:', error);
    message.textContent = 'The island could not load on this device. You can still return to the rest of the site.';
    status.classList.remove('pointer-events-none', 'hidden');
  };

  let renderer: THREE.WebGLRenderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true }); }
  catch (error) { showError(error); return; }

  const scene = new THREE.Scene();
  const skyBlue = new THREE.Color(0x87ceeb);
  scene.background = skyBlue;
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 10000);
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  const sunLight = new THREE.DirectionalLight(0xffffff, 3);
  const sunGeometry = new THREE.SphereGeometry(50, 16, 16);
  const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const sun = new THREE.Mesh(sunGeometry, sunMaterial);
  scene.add(ambientLight, sunLight, sun);

  const events = new AbortController();
  const reducedMotionQuery = matchMedia('(prefers-reduced-motion: reduce)');
  let reducedMotion = reducedMotionQuery.matches;
  let animationFrame = 0;
  let disposed = false;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let azimuth = -(Math.PI / 2) * 0.7;
  let polar = (Math.PI / 2) * 0.8;
  let radius = 1000;
  const targetPosition = new THREE.Vector3();
  const east = new THREE.Vector3(1, 0, 1).normalize();
  const dayLength = 60000;
  const pageStart = performance.now() - dayLength / (24 / 7);

  const resize = () => {
    const width = Math.max(1, root.clientWidth);
    const height = Math.max(1, root.clientHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  const updateCamera = (immediate = false) => {
    targetPosition.set(radius * Math.sin(polar) * Math.sin(azimuth), radius * Math.cos(polar), radius * Math.sin(polar) * Math.cos(azimuth));
    if (immediate) camera.position.copy(targetPosition); else camera.position.lerp(targetPosition, 0.04);
    camera.lookAt(0, 0, 0);
  };
  const render = (time = performance.now()) => {
    if (disposed) return;
    const timeOfDay = ((time - pageStart) % dayLength) / dayLength;
    const ambientIntensity = 0.2 + 0.8 * Math.max(0, Math.cos((timeOfDay - 0.5) * 2 * Math.PI));
    ambientLight.intensity = ambientIntensity;
    scene.background = new THREE.Color(0x000000).lerp(skyBlue, ambientIntensity);
    const angle = timeOfDay * 2 * Math.PI;
    const sunDirection = new THREE.Vector3(east.x * Math.sin(angle), -Math.cos(angle), east.z * Math.sin(angle)).normalize();
    sunLight.position.copy(sunDirection).multiplyScalar(2000);
    sun.position.copy(sunLight.position);
    sun.visible = sunLight.position.y > 0;
    updateCamera();
    renderer.render(scene, camera);
    if (!reducedMotion && !document.hidden) animationFrame = requestAnimationFrame(render);
  };
  const renderOnce = () => { cancelAnimationFrame(animationFrame); render(); };
  const startAnimation = () => { cancelAnimationFrame(animationFrame); if (reducedMotion || document.hidden) renderOnce(); else animationFrame = requestAnimationFrame(render); };

  const resizeObserver = new ResizeObserver(() => { resize(); renderOnce(); });
  resizeObserver.observe(root);
  reducedMotionQuery.addEventListener('change', (event) => { reducedMotion = event.matches; startAnimation(); }, { signal: events.signal });
  document.addEventListener('visibilitychange', startAnimation, { signal: events.signal });
  canvas.addEventListener('pointerdown', (event) => { if (event.button === 0) { dragging = true; lastX = event.clientX; lastY = event.clientY; canvas.setPointerCapture(event.pointerId); } }, { signal: events.signal });
  canvas.addEventListener('pointermove', (event) => { if (dragging) { azimuth -= (event.clientX - lastX) * 0.005; polar = THREE.MathUtils.clamp(polar - (event.clientY - lastY) * 0.005, Math.PI / 8, Math.PI / 2 + Math.PI / 8); lastX = event.clientX; lastY = event.clientY; if (reducedMotion) renderOnce(); } }, { signal: events.signal });
  canvas.addEventListener('pointerup', () => { dragging = false; }, { signal: events.signal });
  canvas.addEventListener('pointercancel', () => { dragging = false; }, { signal: events.signal });
  canvas.addEventListener('wheel', (event) => { event.preventDefault(); radius = THREE.MathUtils.clamp(radius * (event.deltaY > 0 ? 1.1 : 0.9), 500, 2000); if (reducedMotion) renderOnce(); }, { passive: false, signal: events.signal });

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://unpkg.com/three@0.181.2/examples/jsm/libs/draco/');
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  loader.setDRACOLoader(dracoLoader);

  try {
    const modelUrl = new URLSearchParams(location.search).get('model') === 'failure' ? '/assets/models/model-load-failure.glb' : '/assets/models/island_hunyuan3d.glb';
    const gltf = await loader.loadAsync(modelUrl);
    const model = gltf.scene;
    const originalSize = new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
    model.scale.setScalar(800 / Math.max(originalSize.x, originalSize.y, originalSize.z));
    const center = new THREE.Box3().setFromObject(model).getCenter(new THREE.Vector3());
    model.position.sub(center);
    scene.add(model);
    resize();
    updateCamera(true);
    status.classList.add('hidden');
    startAnimation();
  } catch (error) { showError(error); }

  const cleanup = () => {
    disposed = true;
    cancelAnimationFrame(animationFrame);
    events.abort();
    resizeObserver.disconnect();
    dracoLoader.dispose();
    scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      object.geometry.dispose();
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      for (const material of materials) {
        for (const value of Object.values(material)) if (value instanceof THREE.Texture) value.dispose();
        material.dispose();
      }
    });
    renderer.dispose();
    renderer.forceContextLoss();
  };
  addEventListener('pagehide', cleanup, { once: true, signal: events.signal });
}
