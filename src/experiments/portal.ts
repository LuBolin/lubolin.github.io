class NavbarPortal extends HTMLElement {
  private canvas?: HTMLCanvasElement;
  private gl?: WebGL2RenderingContext;
  private program?: WebGLProgram;
  private time?: WebGLUniformLocation;
  private resolution?: WebGLUniformLocation;
  private frame?: number;
  private started = performance.now();
  private visible = true;
  private reducedMotion = false;
  private resizeObserver?: ResizeObserver;
  private intersectionObserver?: IntersectionObserver;
  private events?: AbortController;

  connectedCallback() {
    this.canvas = this.querySelector('canvas') ?? undefined;
    if (!this.canvas) return;
    try {
      this.initialize();
    } catch (error) {
      console.warn('Portal shader fallback:', error);
      this.canvas.hidden = true;
    }
  }

  disconnectedCallback() {
    this.stop();
    this.resizeObserver?.disconnect();
    this.intersectionObserver?.disconnect();
    this.events?.abort();
    if (this.gl && this.program) this.gl.deleteProgram(this.program);
  }

  private initialize() {
    const gl = this.canvas?.getContext('webgl2', { alpha: true, antialias: true });
    if (!gl || !this.canvas) throw new Error('WebGL 2 is unavailable');
    this.gl = gl;
    const vertex = this.compile(gl.VERTEX_SHADER, `#version 300 es
      in vec2 position;
      void main() { gl_Position = vec4(position, 0.0, 1.0); }`);
    const fragment = this.compile(gl.FRAGMENT_SHADER, `#version 300 es
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      out vec4 color;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x),
                   mix(hash(i + vec2(0, 1)), hash(i + vec2(1)), f.x), f.y);
      }

      void main() {
        vec2 p = gl_FragCoord.xy / resolution * 2.0 - 1.0;
        float radius = length(vec2(p.x * 0.68, p.y));

        float angle = atan(p.y, p.x);
        float t = time * 0.16;
        float turbulence = noise(vec2(angle * 1.8 + t, radius * 6.0 - t));
        float spiral = sin(angle * 5.0 - radius * 18.0 + t * 7.0 + turbulence * 3.0);
        float threads = smoothstep(-0.3, 0.85, spiral) * (1.0 - radius);
        float core = exp(-radius * 4.2);
        float depth = smoothstep(1.25, 0.05, radius);

        vec3 deep = vec3(0.015, 0.09, 0.075);
        vec3 jade = vec3(0.16, 0.55, 0.42);
        vec3 light = vec3(0.62, 0.88, 0.70);
        vec3 rgb = mix(deep, jade, depth * 0.62 + threads * 0.2);
        rgb = mix(rgb, light, core * (0.48 + 0.12 * sin(time * 0.7)));
        rgb *= 0.82 + 0.18 * noise(p * 7.0 + t);
        rgb *= 0.72 + 0.28 * smoothstep(1.35, 0.35, radius);

        color = vec4(rgb, 1.0);
      }`);
    const program = gl.createProgram();
    if (!program) throw new Error('Could not create portal shader');
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.bindAttribLocation(program, 0, 'position');
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program) ?? 'Portal shader link failed');
    this.program = program;
    this.time = gl.getUniformLocation(program, 'time') ?? undefined;
    this.resolution = gl.getUniformLocation(program, 'resolution') ?? undefined;

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.useProgram(program);

    this.events = new AbortController();
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    this.reducedMotion = motion.matches;
    motion.addEventListener('change', (event) => {
      this.reducedMotion = event.matches;
      this.sync();
    }, { signal: this.events.signal });
    document.addEventListener('visibilitychange', () => this.sync(), { signal: this.events.signal });
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this);
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting;
      this.sync();
    });
    this.intersectionObserver.observe(this);
    this.resize();
    this.sync();
  }

  private compile(type: number, source: string) {
    const shader = this.gl?.createShader(type);
    if (!this.gl || !shader) throw new Error('Could not create portal shader');
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) throw new Error(this.gl.getShaderInfoLog(shader) ?? 'Portal shader compile failed');
    return shader;
  }

  private resize() {
    if (!this.canvas || !this.gl) return;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round(this.clientWidth * dpr));
    const height = Math.max(1, Math.round(this.clientHeight * dpr));
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
      this.gl.viewport(0, 0, width, height);
    }
    this.draw();
  }

  private sync() {
    if (this.visible && !document.hidden && !this.reducedMotion) {
      if (this.frame === undefined) this.frame = requestAnimationFrame(this.draw);
    } else {
      this.stop();
      if (this.reducedMotion) this.draw();
    }
  }

  private stop() {
    if (this.frame !== undefined) cancelAnimationFrame(this.frame);
    this.frame = undefined;
  }

  private draw = () => {
    this.frame = undefined;
    if (!this.canvas || !this.gl || !this.program) return;
    this.gl.useProgram(this.program);
    this.gl.uniform1f(this.time ?? null, (performance.now() - this.started) / 1000);
    this.gl.uniform2f(this.resolution ?? null, this.canvas.width, this.canvas.height);
    this.gl.clearColor(0, 0, 0, 0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
    if (!this.reducedMotion) this.sync();
  };
}

if (!customElements.get('navbar-portal')) customElements.define('navbar-portal', NavbarPortal);
