struct Uniforms { // alignment: multiples of largest member (k * 8 bytes)
  resolution: vec2f, // 8 bytes
  time: f32,       // 4 bytes
}

// 4 : 5, similar to minecraft's nether portal
const aspect: f32 = 4.0 / 5.0; // width / height
const height: f32 = 2.0; // -1.0 to 1.0 in NDC

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

@vertex
fn main(
  @builtin(vertex_index) VertexIndex : u32
) -> @builtin(position) vec4f {
  let canvasAspect: f32 = uniforms.resolution.x / uniforms.resolution.y;
  let halfHeight: f32 = height / 2.0;
  let halfWidth: f32 = halfHeight * aspect / canvasAspect;
  var pos = array<vec2f, 6>(
    vec2f(-halfWidth, -halfHeight),  // Bottom-left
    vec2f( halfWidth, -halfHeight),  // Bottom-right
    vec2f(-halfWidth,  halfHeight),  // Top-left
    vec2f(-halfWidth,  halfHeight),  // Top-left
    vec2f( halfWidth, -halfHeight),  // Bottom-right
    vec2f( halfWidth,  halfHeight)   // Top-right
  );

  return vec4f(pos[VertexIndex], 0.0, 1.0);
}
