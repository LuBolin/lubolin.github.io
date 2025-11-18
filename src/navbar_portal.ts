import navbarPortalVertWGSL from '/scenes/navbar_portal/navbar_portal.vert.wgsl?raw';
import navbarPortalFragWGSL from '/scenes/navbar_portal/navbar_portal.frag.wgsl?raw';

class NavbarPortal extends HTMLElement {
  private canvas!: HTMLCanvasElement;
  private device!: GPUDevice;
  private context!: GPUCanvasContext;
  private pipeline!: GPURenderPipeline;
  private texture!: GPUTexture;
  private view!: GPUTextureView;
  private animationFrameId: number | null = null;

  async connectedCallback() {
    // Create and append canvas
    this.canvas = document.createElement('canvas');
    this.appendChild(this.canvas);

    // Wait for styles to load and layout to settle
    await new Promise(resolve => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(resolve));
      } else {
        requestAnimationFrame(resolve);
      }
    });

    // Initialize WebGPU
    const adapter = await navigator.gpu?.requestAdapter();
    if (!adapter) {
      console.error('WebGPU not supported');
      return;
    }

    this.device = (await adapter.requestDevice())!;
    this.context = this.canvas.getContext('webgpu')!;

    const devicePixelRatio = window.devicePixelRatio;
    this.canvas.width = this.canvas.clientWidth * devicePixelRatio;
    this.canvas.height = this.canvas.clientHeight * devicePixelRatio;

    const presentationFormat = navigator.gpu.getPreferredCanvasFormat();

    this.context.configure({
      device: this.device,
      format: presentationFormat,
    });

    const sampleCount = 4;

    this.pipeline = this.device.createRenderPipeline({
      layout: 'auto',
      vertex: {
        module: this.device.createShaderModule({
          code: navbarPortalVertWGSL,
        }),
      },
      fragment: {
        module: this.device.createShaderModule({
          code: navbarPortalFragWGSL,
        }),
        targets: [
          {
            format: presentationFormat,
          },
        ],
      },
      primitive: {
        topology: 'triangle-list',
      },
      multisample: {
        count: sampleCount,
      },
    });

    this.texture = this.device.createTexture({
      size: [this.canvas.width, this.canvas.height],
      sampleCount,
      format: presentationFormat,
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
    });
    this.view = this.texture.createView();

    // Add click handler
    this.canvas.addEventListener('click', () => {
      window.location.hash = '#/shangrila';
    });

    // Add pointer cursor on hover
    this.canvas.style.cursor = 'pointer';

    this.startAnimation();
  }

  disconnectedCallback() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private startAnimation() {
    const frame = () => {
      const commandEncoder = this.device.createCommandEncoder();

      const renderPassDescriptor: GPURenderPassDescriptor = {
        colorAttachments: [
          {
            view: this.view,
            resolveTarget: this.context.getCurrentTexture().createView(),
            clearValue: [0, 0, 0, 0], // Clear to transparent
            loadOp: 'clear',
            storeOp: 'discard',
          },
        ],
      };

      const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
      passEncoder.setPipeline(this.pipeline);
      passEncoder.draw(6);
      passEncoder.end();

      this.device.queue.submit([commandEncoder.finish()]);
      this.animationFrameId = requestAnimationFrame(frame);
    };

    this.animationFrameId = requestAnimationFrame(frame);
  }
}

customElements.define('navbar-portal', NavbarPortal);
