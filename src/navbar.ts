import navbarPortalVertWGSL from '/scenes/navbar_portal/navbar_portal.vert.wgsl?raw';
import navbarPortalFragWGSL from '/scenes/navbar_portal/navbar_portal.frag.wgsl?raw';

let clickCount = 0;

export function pronunce(): void {
    const audio1 = document.getElementById('pronunce-Bloin') as HTMLAudioElement;
    const audio2 = document.getElementById('pronunce-Rickroll') as HTMLAudioElement;

    if (!audio1 || !audio2) return;

    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;

    clickCount++;

    if (clickCount > 1 && clickCount % 3 === 0) {
        audio2.play();
    } else {
        audio1.play();
    }
}

export function updateActiveNavLink(hash: string): void {
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('#navbar a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === hash) {
            link.classList.add('nav-active');
        } else {
            link.classList.remove('nav-active');
        }
    });
}

export async function loadShangrilaPortal(): Promise<void> {
    if (!navigator.gpu) {
        console.error('WebGPU not supported');
        return;
    }

    const adapter = await navigator.gpu.requestAdapter({
        featureLevel: "compatibility" as any
    });

    if (!adapter) {
        console.error('WebGPU adapter not available');
        return;
    }

    const device = await adapter.requestDevice();
    const devicePixelRatio = window.devicePixelRatio || 1;

    const canvas = document.querySelector<HTMLCanvasElement>('.portal-container');

    if (!canvas) {
        console.error('Portal canvas not found');
        return;
    }

    const context = canvas.getContext('webgpu') as GPUCanvasContext | null;

    if (!context) {
        console.error('Could not get WebGPU context');
        return;
    }

    canvas.width = canvas.clientWidth * devicePixelRatio;
    canvas.height = canvas.clientHeight * devicePixelRatio;
    const presentationFormat = navigator.gpu!.getPreferredCanvasFormat();

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
        if (!context) return;

        const renderPassDescriptor: GPURenderPassDescriptor = {
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
        const commandEncoder = device.createCommandEncoder();
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        passEncoder.setPipeline(pipeline);
        passEncoder.draw(6, 1, 0, 0);
        passEncoder.end();
        device.queue.submit([commandEncoder.finish()]);
        requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
}

// Make pronunce available globally for inline HTML onclick handlers
(window as any).pronunce = pronunce;
