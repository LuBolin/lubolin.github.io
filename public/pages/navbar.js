let clickCount = 0;

function pronunce() {
    const audio1 = document.getElementById('pronunce-Bloin');
    const audio2 = document.getElementById('pronunce-Rickroll');

    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;

    clickCount++;

    if (clickCount > 1 && clickCount  % 3 === 0) {
        audio2.play();
    } else {
        audio1.play();
    }
}

function updateActiveNavLink(hash) {
    const navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(link => {
      if (link.getAttribute('href') === hash) {
        link.classList.add('nav-active');
      } else {
        link.classList.remove('nav-active');
      }
    });
}

import navbarPortalVertWGSL from '../scenes/navbar_portal/navbar_portal.vert.wgsl';
import navbarPortalFragWGSL from '../scenes/navbar_portal/navbar_portal.frag.wgsl';

async function loadShangrilaPortal() {

  const adapter = await navigator.gpu?.requestAdapter(
    { featureLevel: "compatibility" }
  );
  const device = await adapter?.requestDevice();
  const devicePixelRatio = window.devicePixelRatio || 1;

  const canvas = document.querySelector('.portal-container');

  const context = canvas.getContext('webgpu');
  canvas.width = canvas.clientWidth * devicePixelRatio;
  canvas.height = canvas.clientHeight * devicePixelRatio;
  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
  
  context.configure({
    device: device,
    format: presentationFormat,
    alphaMode: "premultiplied"
  });

  const sampleCount = 4;

  
  const pipeline = device.createRenderPipeline({
    layout: "auto",
    vertex: {
      module: device.createShaderModule({
        code: navbarPortalVertWGSL
      }),
    },
    fragment: {
      module: device.createShaderModule({
        code: navbarPortalFragWGSL
      }),
      targets: [
        { format: presentationFormat }
      ],
    },
    primitive: {
      topology: "triangle-list",
      cullMode: "none",
    },
    multisample: {
      count: sampleCount,
    },
  });

  const texture = device.createTexture({
    size: [canvas.width, canvas.height],
    sampleCount: sampleCount,
    format: presentationFormat,
    usage: GPUTextureUsage.RENDER_ATTACHMENT,
  });

  const view = texture.createView();

  function frame() {
    const commandEncoder = device.createCommandEncoder();
    const renderPassDescriptor = {
      colorAttachments: [
        {
          view: view,
          resolveTarget: context.getCurrentTexture().createView(),
          clearValue: { r: 0, g: 0, b: 0, a: 0 },
          loadOp: 'clear',
          storeOp: 'store',
        }
      ],
    };
    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(pipeline);
    passEncoder.draw(6, 1, 0, 0);
    passEncoder.end();
    device.queue.submit([commandEncoder.finish()]);
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}