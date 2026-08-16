import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 1500;
const PINK: [number, number, number] = [1.0, 0.33, 0.64];

// Shapes morph in this order across the full scroll of the page.
const SHAPE_ORDER = ['sphere', 'sphereChaos', 'cube', 'cubeChaos', 'plane', 'ring', 'empty'] as const;
type ShapeName = (typeof SHAPE_ORDER)[number];
const FLAT_SHAPES = new Set<ShapeName>(['plane', 'ring', 'empty']);

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function buildShapes(n: number): Record<ShapeName, Float32Array> {
  const sphere = new Float32Array(n * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    sphere[i * 3] = Math.cos(theta) * r * 2.6;
    sphere[i * 3 + 1] = y * 2.6;
    sphere[i * 3 + 2] = Math.sin(theta) * r * 2.6;
  }

  const sphereChaos = new Float32Array(n * 3);
  for (let i = 0; i < n * 3; i++) sphereChaos[i] = sphere[i] + rand(-0.9, 0.9);

  const cube = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const face = Math.floor(rand(0, 6));
    const s = 2.2;
    let x = rand(-s, s), y = rand(-s, s), z = rand(-s, s);
    if (face === 0) x = s; else if (face === 1) x = -s;
    else if (face === 2) y = s; else if (face === 3) y = -s;
    else if (face === 4) z = s; else z = -s;
    cube[i * 3] = x; cube[i * 3 + 1] = y; cube[i * 3 + 2] = z;
  }

  const cubeChaos = new Float32Array(n * 3);
  for (let i = 0; i < n * 3; i++) cubeChaos[i] = cube[i] + rand(-0.7, 0.7);

  const plane = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    plane[i * 3] = rand(-4.2, 4.2);
    plane[i * 3 + 1] = rand(-2.6, 2.6);
    plane[i * 3 + 2] = rand(-0.15, 0.15);
  }

  const ring = new Float32Array(n * 3);
  const tilt = 1.05; // radians
  for (let i = 0; i < n; i++) {
    const angle = rand(0, Math.PI * 2);
    const radius = 2.5 + rand(-0.35, 0.35);
    const x = Math.cos(angle) * radius;
    const yFlat = Math.sin(angle) * radius;
    ring[i * 3] = x;
    ring[i * 3 + 1] = yFlat * Math.cos(tilt);
    ring[i * 3 + 2] = yFlat * Math.sin(tilt);
  }

  const empty = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const dir = [rand(-1, 1), rand(-1, 1), rand(-1, 1)];
    const len = Math.hypot(dir[0], dir[1], dir[2]) || 1;
    const radius = rand(9, 16);
    empty[i * 3] = (dir[0] / len) * radius;
    empty[i * 3 + 1] = (dir[1] / len) * radius;
    empty[i * 3 + 2] = (dir[2] / len) * radius;
  }

  return { sphere, sphereChaos, cube, cubeChaos, plane, ring, empty };
}

function mat4Perspective(fovy: number, aspect: number, near: number, far: number) {
  const f = 1.0 / Math.tan(fovy / 2);
  const nf = 1 / (near - far);
  return new Float32Array([
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (far + near) * nf, -1,
    0, 0, 2 * far * near * nf, 0,
  ]);
}

function mat4RotateYTranslate(angle: number, tz: number) {
  const c = Math.cos(angle), s = Math.sin(angle);
  // rotateY then translate along Z (camera pushback), column-major
  return new Float32Array([
    c, 0, -s, 0,
    0, 1, 0, 0,
    s, 0, c, 0,
    0, 0, tz, 1,
  ]);
}

function mat4Multiply(a: Float32Array, b: Float32Array) {
  const out = new Float32Array(16);
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 4; row++) {
      let sum = 0;
      for (let k = 0; k < 4; k++) sum += a[k * 4 + row] * b[col * 4 + k];
      out[col * 4 + row] = sum;
    }
  }
  return out;
}

const VERTEX_SRC = `
attribute vec3 aFrom;
attribute vec3 aTo;
attribute float aPhase;
uniform mat4 uMVP;
uniform float uMorph;
uniform float uTime;
uniform float uPixelRatio;
varying float vAlpha;

void main() {
  vec3 pos = mix(aFrom, aTo, uMorph);
  float breathe = sin(uTime * (0.7 + fract(aPhase * 0.37) * 0.9) + aPhase * 6.2831) * 0.08;
  vec3 n = length(pos) > 0.001 ? normalize(pos) : vec3(0.0);
  pos += n * breathe;

  vec4 clipPos = uMVP * vec4(pos, 1.0);
  gl_Position = clipPos;

  float dist = max(clipPos.w, 0.6);
  gl_PointSize = (20.0 + sin(uTime * 1.4 + aPhase * 10.0) * 4.0) * uPixelRatio * (7.0 / dist);
  vAlpha = clamp(1.6 - dist / 11.0, 0.18, 1.0);
}
`;

const FRAGMENT_SRC = `
precision mediump float;
varying float vAlpha;
uniform vec3 uColor;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float glow = smoothstep(0.5, 0.0, d);
  float a = glow * vAlpha;
  gl_FragColor = vec4(uColor * a * 1.7, a);
}
`;

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    // eslint-disable-next-line no-console
    console.error('shader compile error', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function ParticleCloud() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { antialias: true, alpha: true, powerPreference: 'low-power', preserveDrawingBuffer: true });
    if (!gl) return;

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SRC);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SRC);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      // eslint-disable-next-line no-console
      console.error('program link error', gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const shapes = buildShapes(PARTICLE_COUNT);

    const phase = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) phase[i] = Math.random() * 100;

    const fromBuffer = gl.createBuffer();
    const toBuffer = gl.createBuffer();
    const phaseBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, fromBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, shapes[SHAPE_ORDER[0]], gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, toBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, shapes[SHAPE_ORDER[1]], gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, phaseBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, phase, gl.STATIC_DRAW);

    const aFrom = gl.getAttribLocation(program, 'aFrom');
    const aTo = gl.getAttribLocation(program, 'aTo');
    const aPhase = gl.getAttribLocation(program, 'aPhase');

    const uMVP = gl.getUniformLocation(program, 'uMVP');
    const uMorph = gl.getUniformLocation(program, 'uMorph');
    const uTime = gl.getUniformLocation(program, 'uTime');
    const uPixelRatio = gl.getUniformLocation(program, 'uPixelRatio');
    const uColor = gl.getUniformLocation(program, 'uColor');

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.disable(gl.DEPTH_TEST);

    let raf = 0;
    const startTime = performance.now();
    let smoothedP = 0;
    let lastIdx = -1;
    let rotationAngle = 0;
    let rotationSpeed = 0.15;
    let spinOffset = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      const w = Math.floor(window.innerWidth * dpr);
      const h = Math.floor(window.innerHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    let targetP = 0;
    const updateScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      targetP = scrollable > 0 ? Math.max(0, Math.min(1, window.scrollY / scrollable)) : 0;
    };

    let lastFrameTime = startTime;

    const render = (now: number) => {
      const dt = Math.min((now - lastFrameTime) / 1000, 0.05);
      lastFrameTime = now;
      resize();

      smoothedP += (targetP - smoothedP) * 0.05;
      const scaled = smoothedP * (SHAPE_ORDER.length - 1);
      const idx = Math.min(Math.floor(scaled), SHAPE_ORDER.length - 2);
      const frac = Math.max(0, Math.min(1, scaled - idx));

      if (idx !== lastIdx) {
        gl.bindBuffer(gl.ARRAY_BUFFER, fromBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, shapes[SHAPE_ORDER[idx]], gl.DYNAMIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, toBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, shapes[SHAPE_ORDER[idx + 1]], gl.DYNAMIC_DRAW);
        if (lastIdx !== -1) spinOffset += Math.PI * 0.5;
        lastIdx = idx;
      }

      const fromFlat = FLAT_SHAPES.has(SHAPE_ORDER[idx]);
      const toFlat = FLAT_SHAPES.has(SHAPE_ORDER[idx + 1]);
      const targetSpeed = fromFlat && toFlat ? 0.015 : fromFlat || toFlat ? 0.07 : 0.2;
      rotationSpeed += (targetSpeed - rotationSpeed) * 0.02;
      rotationAngle += rotationSpeed * dt;
      spinOffset *= 0.92;

      const aspect = window.innerWidth / window.innerHeight;
      const proj = mat4Perspective(Math.PI / 4, aspect, 0.1, 100);
      const view = mat4RotateYTranslate(rotationAngle + spinOffset, -7);
      const mvp = mat4Multiply(proj, view);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.bindBuffer(gl.ARRAY_BUFFER, fromBuffer);
      gl.enableVertexAttribArray(aFrom);
      gl.vertexAttribPointer(aFrom, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, toBuffer);
      gl.enableVertexAttribArray(aTo);
      gl.vertexAttribPointer(aTo, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, phaseBuffer);
      gl.enableVertexAttribArray(aPhase);
      gl.vertexAttribPointer(aPhase, 1, gl.FLOAT, false, 0, 0);

      gl.uniformMatrix4fv(uMVP, false, mvp);
      gl.uniform1f(uMorph, frac);
      gl.uniform1f(uTime, (now - startTime) / 1000);
      gl.uniform1f(uPixelRatio, dpr);
      gl.uniform3f(uColor, PINK[0], PINK[1], PINK[2]);

      gl.drawArrays(gl.POINTS, 0, PARTICLE_COUNT);
      raf = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', updateScroll, { passive: true });
    resize();
    updateScroll();
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    />
  );
}
