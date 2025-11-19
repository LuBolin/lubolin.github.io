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
  private uniformBuffer!: GPUBuffer;
  private bindGroup!: GPUBindGroup;
  private startTime: number = Date.now();
  public onClick?: () => void;
  private resizeObserver!: ResizeObserver;
  private presentationFormat!: GPUTextureFormat;
  private sampleCount: number = 4;

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

    this.presentationFormat = navigator.gpu.getPreferredCanvasFormat();

    this.context.configure({
      device: this.device,
      format: this.presentationFormat,
    });

    const devicePixelRatio = window.devicePixelRatio;
    this.canvas.width = this.canvas.clientWidth * devicePixelRatio;
    this.canvas.height = this.canvas.clientHeight * devicePixelRatio;

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
            format: this.presentationFormat,
          },
        ],
      },
      primitive: {
        topology: 'triangle-list',
      },
      multisample: {
        count: this.sampleCount,
      },
    });

    this.texture = this.device.createTexture({
      size: [this.canvas.width, this.canvas.height],
      sampleCount: this.sampleCount,
      format: this.presentationFormat,
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
    });
    this.view = this.texture.createView();

    // Create uniform buffer
    this.uniformBuffer = this.device.createBuffer({
      size: 16,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });


    // Connecting JS-side buffer to WGSL-side variable
    this.bindGroup = this.device.createBindGroup({
      layout: this.pipeline.getBindGroupLayout(0),
      entries: [
        {
          binding: 0,
          resource: {
            buffer: this.uniformBuffer,
          },
        },
      ],
    });

    // Add click handler
    this.canvas.addEventListener('click', () => {
      if (this.onClick) {
        this.onClick();
      } else {
        // Default behavior if no callback is provided
        window.location.hash = '#/shangrila';
      }
    });

    this.canvas.style.cursor = 'pointer';

    // Set up resize observer
    this.resizeObserver = new ResizeObserver(() => {
      this.handleResize();
    });
    this.resizeObserver.observe(this.canvas);

    this.startAnimation();
  }

  disconnectedCallback() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private handleResize() {
    const devicePixelRatio = window.devicePixelRatio;
    const newWidth = this.canvas.clientWidth * devicePixelRatio;
    const newHeight = this.canvas.clientHeight * devicePixelRatio;

    // Only resize if dimensions actually changed
    if (this.canvas.width !== newWidth || this.canvas.height !== newHeight) {
      this.canvas.width = newWidth;
      this.canvas.height = newHeight;

      // Recreate texture with new size
      this.texture.destroy();
      this.texture = this.device.createTexture({
        size: [this.canvas.width, this.canvas.height],
        sampleCount: this.sampleCount,
        format: this.presentationFormat,
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
      });
      this.view = this.texture.createView();
    }
  }

  private startAnimation() {
    const frame = () => {
      // Update uniforms
      const time = (Date.now() - this.startTime) / 1000; // Time in seconds
      // 16 bytes: vec2f (8 bytes) + f32 (4 bytes) + padding (4 bytes)
      // order of data matters
      // "struct-ness" doesnt, vec2f is unknown by js/ts
      // wgsl just expects 16 bytes, and just reads in order
      const uniformData = new Float32Array([
        this.canvas.width,   // resolution.x
        this.canvas.height,  // resolution.y
        time,                // time
        0,                   // padding
      ]);
      this.device.queue.writeBuffer(this.uniformBuffer, 0, uniformData);

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
      passEncoder.setBindGroup(0, this.bindGroup);
      passEncoder.draw(6);
      passEncoder.end();

      this.device.queue.submit([commandEncoder.finish()]);
      this.animationFrameId = requestAnimationFrame(frame);
    };

    this.animationFrameId = requestAnimationFrame(frame);
  }
}

customElements.define('navbar-portal', NavbarPortal);
