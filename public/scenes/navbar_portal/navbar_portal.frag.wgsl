struct Uniforms { // alignment: multiples of largest member (k * 8 bytes)
  resolution: vec2f, // 8 bytes
  time: f32,       // 4 bytes
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

const border_color: vec4f = vec4f(0.0, 0.0, 0.0, 1.0); // Black
// inner colors
const base_color: vec3f = vec3f(0.494, 0.878, 0.855); // Light cyan
const wave_color: vec3f = vec3f(0.114, 0.8, 0.502); // Teal

const animation_speed: f32 = 0.5;

// Hash function for pseudo-random numbers
fn hash(p: vec2f) -> f32 {
  let p3 = fract(vec3f(p.x, p.y, p.x) * 0.13);
  let dot_result = dot(p3, vec3f(p3.y, p3.z, p3.x) + 3.333);
  return fract((p3.x + p3.y) * dot_result);
}

@fragment
fn main(@builtin(position) fragCoord: vec4f) -> @location(0) vec4f {
  // Normalized coordinates (0 to 1)
  let uv = fragCoord.xy / uniforms.resolution;


  // 4 wide, 5 tall, just like minecraft. inner: 2 ：3
  let is_border: bool =
    (uv.x < 1.0 / 4.0 || uv.x > 3.0 / 4.0) ||
    (uv.y < 1.0 / 5.0 || uv.y > 4.0 / 5.0);


  var color: vec4f = vec4f(0.0, 0.0, 0.0, 0.0);
  if (is_border) {
    color = border_color;
    color.a = 1.0; // Set alpha to fully opaque
  } else {
    let animation_time = uniforms.time * animation_speed;

    // Portal wave effect, multiple sine waves for complex motion
    let wave1 = sin(uv.y * 10.0 + animation_time * 2.0) * 0.5 + 0.5;
    let wave2 = sin(uv.y * 15.0 - animation_time * 3.0 + uv.x * 5.0) * 0.5 + 0.5;
    let wave3 = sin(uv.x * 8.0 + animation_time * 1.5) * 0.5 + 0.5;
    let overall_wave = (wave1 + wave2 + wave3) / 3.0;
    // Mix colors based on wave intensity
    let color3f: vec3f = mix(base_color, wave_color, overall_wave);
    color = vec4f(color3f, 1.0);
  }

  return color;
}