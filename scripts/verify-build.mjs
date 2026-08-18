import { access, readdir, readFile, stat } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const contentRoot = join(root, 'src', 'content', 'blog');
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const exists = async (path) => { try { await access(path); return true; } catch { return false; } };
const read = (path) => readFile(path, 'utf8');

if (!(await exists(dist))) throw new Error('dist/ does not exist. Run the build first.');

const postFiles = (await readdir(contentRoot)).filter((file) => extname(file) === '.md');
const posts = [];
for (const file of postFiles) {
  const source = await read(join(contentRoot, file));
  const slug = source.match(/^slug:\s*(.+)$/m)?.[1]?.trim();
  const draft = source.match(/^draft:\s*(.+)$/m)?.[1]?.trim() === 'true';
  assert(Boolean(slug), `${file} has no explicit slug`);
  if (slug) posts.push({ slug, draft });
}
assert(new Set(posts.map(({ slug }) => slug)).size === posts.length, 'Post slugs are not unique');

const required = [
  'index.html', 'about/index.html', 'projects/index.html', 'blog/index.html', 'contact/index.html',
  'others/index.html', 'translation-telephone/index.html', 'shangrila/index.html', '404.html', 'rss.xml',
  'sitemap-index.xml', 'robots.txt', '.nojekyll',
  'assets/models/island_hunyuan3d.glb',
];
for (const path of required) assert(await exists(join(dist, path)), `Missing dist/${path}`);

for (const { slug, draft } of posts) {
  const canonicalFile = join(dist, 'blog', slug, 'index.html');
  const redirectFile = join(dist, 'post', slug, 'index.html');
  if (draft) {
    assert(!(await exists(canonicalFile)), `Draft post emitted: ${slug}`);
    assert(!(await exists(redirectFile)), `Draft redirect emitted: ${slug}`);
    continue;
  }
  assert(await exists(canonicalFile), `Missing canonical post page: ${slug}`);
  assert(await exists(redirectFile), `Missing legacy redirect page: ${slug}`);
  if (await exists(canonicalFile)) {
    const html = await read(canonicalFile);
    assert(html.includes(`https://lubolin.github.io/blog/${slug}/`), `Wrong canonical URL for ${slug}`);
  }
  if (await exists(redirectFile)) {
    const html = await read(redirectFile);
    assert(/name="robots" content="noindex"/.test(html), `Legacy redirect lacks noindex: ${slug}`);
    assert(html.includes(`/blog/${slug}/`), `Legacy redirect lacks visible destination: ${slug}`);
  }
}

const indexHtml = await read(join(dist, 'index.html'));
for (const legacyHash of ['#/home', '#/about', '#/projects', '#/blog', '#/post/', '#/contact', '#/others', '#/translation-telephone', '#/shangrila']) {
  assert(indexHtml.includes(legacyHash), `Homepage hash bridge is missing ${legacyHash}`);
}

const rss = await read(join(dist, 'rss.xml'));
const publishedCount = posts.filter(({ draft }) => !draft).length;
assert((rss.match(/<item>/g) ?? []).length === publishedCount, `RSS item count does not match ${publishedCount} published posts`);
const sitemapIndex = await read(join(dist, 'sitemap-index.xml'));
assert(sitemapIndex.includes('sitemap-0.xml'), 'Sitemap index does not reference sitemap-0.xml');
const sitemap = await read(join(dist, 'sitemap-0.xml'));
assert(!sitemap.includes('/post/'), 'Legacy redirects leaked into the sitemap');
assert(!sitemap.includes('/404.html'), '404 leaked into the sitemap');

async function collectHtml(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectHtml(path));
    else if (entry.name.endsWith('.html')) files.push(path);
  }
  return files;
}

const linkPattern = /(?:href|src)="(\/[^"]*)"/g;
for (const htmlFile of await collectHtml(dist)) {
  const html = await read(htmlFile);
  for (const [, raw] of html.matchAll(linkPattern)) {
    const pathname = decodeURI(raw.split(/[?#]/, 1)[0]);
    if (pathname === '/') continue;
    const exact = join(dist, pathname);
    const directoryIndex = join(dist, pathname, 'index.html');
    assert(await exists(exact) || await exists(directoryIndex), `${relative(dist, htmlFile)} links to missing ${pathname}`);
  }
}

const assets = [];
async function collectAssets(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await collectAssets(path);
    else assets.push({ path, size: (await stat(path)).size });
  }
}
await collectAssets(join(dist, '_astro'));
const largest = assets.sort((a, b) => b.size - a.size)[0];

if (failures.length) {
  console.error(`Build verification failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log(`Build verification passed: ${publishedCount} posts, ${required.length} required outputs, and all root-relative links resolve.`);
if (largest) console.log(`Largest generated asset: ${relative(dist, largest.path)} (${(largest.size / 1024).toFixed(1)} KiB).`);
