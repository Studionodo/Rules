// Applica i profili pellicola al video in tempo reale con WebGL 1 (massima compatibilità).

const VERT = `
attribute vec2 aPos;
uniform float uMirror;
varying vec2 vUV;
varying vec2 vPos;
void main() {
  vec2 uv = vec2(aPos.x * 0.5 + 0.5, 0.5 - aPos.y * 0.5);
  vPos = uv;
  vUV = vec2(mix(uv.x, 1.0 - uv.x, uMirror), uv.y);
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform sampler2D uTex;
uniform float uSat, uContrast, uBright, uTemp, uTint, uFade, uGrain, uVignette, uMono, uSeed;
uniform vec3 uMonoMix, uShadow, uHigh;
varying vec2 vUV;
varying vec2 vPos;

float hash(vec2 p) {
  p = fract(p * vec2(0.1031, 0.1030));
  p += dot(p, p.yx + 33.33);
  return fract((p.x + p.y) * p.x);
}

void main() {
  vec3 c = texture2D(uTex, vUV).rgb;
  c.r += uTemp * 0.08;
  c.b -= uTemp * 0.08;
  c.g += uTint * 0.05;
  c *= uBright;
  c = (c - 0.5) * uContrast + 0.5;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(vec3(l), c, uSat);
  float m = dot(c, uMonoMix);
  c = mix(c, vec3(m), uMono);
  l = clamp(dot(c, vec3(0.2126, 0.7152, 0.0722)), 0.0, 1.0);
  c += uShadow * (1.0 - l) + uHigh * l;
  c = uFade + c * (1.0 - uFade);
  vec2 d = vPos - 0.5;
  c *= 1.0 - uVignette * dot(d, d) * 2.0;
  float n = hash(gl_FragCoord.xy + uSeed) - 0.5;
  c += n * uGrain;
  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}`;

function compile(gl, type, src) {
  const sh = gl.createShader(type);
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(sh);
    gl.deleteShader(sh);
    throw new Error('Shader: ' + log);
  }
  return sh;
}

export class FilmRenderer {
  constructor(canvas, { preserve = false } = {}) {
    const gl = canvas.getContext('webgl', {
      premultipliedAlpha: false, antialias: false, preserveDrawingBuffer: preserve
    });
    if (!gl) throw new Error('WebGL non disponibile');
    this.gl = gl;
    this.canvas = canvas;

    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    gl.useProgram(prog);
    this.prog = prog;

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    this.u = {};
    ['uTex', 'uSat', 'uContrast', 'uBright', 'uTemp', 'uTint', 'uFade', 'uGrain', 'uVignette',
      'uMono', 'uSeed', 'uMonoMix', 'uShadow', 'uHigh', 'uMirror']
      .forEach((n) => { this.u[n] = gl.getUniformLocation(prog, n); });
    gl.uniform1i(this.u.uTex, 0);
  }

  setProfile(p) {
    const { gl, u } = this;
    gl.uniform1f(u.uSat, p.sat);
    gl.uniform1f(u.uContrast, p.contrast);
    gl.uniform1f(u.uBright, p.bright);
    gl.uniform1f(u.uTemp, p.temp);
    gl.uniform1f(u.uTint, p.tint);
    gl.uniform1f(u.uFade, p.fade);
    gl.uniform1f(u.uGrain, p.grain);
    gl.uniform1f(u.uVignette, p.vignette);
    gl.uniform1f(u.uMono, p.mono);
    gl.uniform3fv(u.uMonoMix, p.monoMix);
    gl.uniform3fv(u.uShadow, p.shadow);
    gl.uniform3fv(u.uHigh, p.high);
  }

  render(source, { mirror = false } = {}) {
    const { gl, u, canvas } = this;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform1f(u.uMirror, mirror ? 1 : 0);
    gl.uniform1f(u.uSeed, Math.random() * 1000);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, source);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  destroy() {
    const ext = this.gl.getExtension('WEBGL_lose_context');
    if (ext) ext.loseContext();
  }
}

// Scatto a piena risoluzione del sensore, con lo stesso profilo dell'anteprima.
export function captureFrame(video, params, mirror) {
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const r = new FilmRenderer(canvas, { preserve: true });
  r.setProfile(params);
  r.render(video, { mirror });
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      r.destroy();
      blob ? resolve(blob) : reject(new Error('Scatto non riuscito'));
    }, 'image/jpeg', 0.92);
  });
}
