
const aspect: f32 = 3.0 / 4.0; // width / height
const height: f32 = 2.0; // -1.0 to 1.0 in NDC
const width: f32 = height * aspect;

@vertex
fn main(
  @builtin(vertex_index) VertexIndex : u32
) -> @builtin(position) vec4f {
  // rectangle
  const halfWidth: f32 = width / 2.0;
  const halfHeight: f32 = height / 2.0;
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
