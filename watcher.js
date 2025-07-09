const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, 'blog', 'posts');
const POSTS_JSON = path.join(__dirname, 'blog', 'posts.json');

function parseMeta(md) {
  let meta = {};
  if (md.startsWith('---')) {
    const end = md.indexOf('---', 3);
    if (end !== -1) {
      const metaBlock = md.slice(3, end).trim();
      metaBlock.split(/\r?\n/).forEach(line => {
        const [k, ...rest] = line.split(':');
        if (k && rest.length) meta[k.trim()] = rest.join(':').trim();
      });
    }
  } else if (md.startsWith('title:')) {
    const lines = md.split(/\r?\n/);
    let metaLines = [];
    let i = 0;
    for (; i < lines.length; i++) {
      if (!lines[i].trim()) break;
      metaLines.push(lines[i]);
    }
    metaLines.forEach(line => {
      const [k, ...rest] = line.split(':');
      if (k && rest.length) meta[k.trim()] = rest.join(':').trim();
    });
  }
  return meta;
}

function loadPostsJson() {
  if (!fs.existsSync(POSTS_JSON)) return [];
  try {
    return JSON.parse(fs.readFileSync(POSTS_JSON, 'utf8'));
  } catch (e) {
    return [];
  }
}

function savePostsJson(posts) {
  fs.writeFileSync(POSTS_JSON, JSON.stringify(posts, null, 2));
}

function updatePostEntry(file) {
  const posts = loadPostsJson();
  const fileName = path.basename(file);
  if (!fs.existsSync(file)) {
    // Remove entry if file deleted
    const newPosts = posts.filter(p => p.file !== fileName);
    savePostsJson(newPosts);
    console.log(`[watcher] Removed ${fileName} from posts.json`);
    return;
  }
  // Add or update entry
  const md = fs.readFileSync(file, 'utf8');
  const meta = parseMeta(md);
  let found = false;
  const newPosts = posts.map(p => {
    if (p.file === fileName) {
      found = true;
      return { file: fileName, meta };
    }
    return p;
  });
  if (!found) newPosts.push({ file: fileName, meta });
  savePostsJson(newPosts);
  console.log(`[watcher] Updated ${fileName} in posts.json`);
}

function resyncAll() {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  const posts = files.map(f => {
    const md = fs.readFileSync(path.join(POSTS_DIR, f), 'utf8');
    return { file: f, meta: parseMeta(md) };
  });
  savePostsJson(posts);
  console.log('[watcher] Resynced all posts.');
}

// Initial sync
resyncAll();

const watcher = chokidar.watch(path.join(POSTS_DIR, '*.md'), { ignoreInitial: true });

watcher
  .on('add', updatePostEntry)
  .on('change', updatePostEntry)
  .on('unlink', updatePostEntry);

console.log('[watcher] Watching for changes in blog/posts/*.md'); 