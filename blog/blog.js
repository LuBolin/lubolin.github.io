(function() {
    console.log('[blog.js] script running immediately');
    const postListElem = document.getElementById('post-list');
    const postContent = document.getElementById('post-content');
    // Hide post-content when showing the list
    if (postContent) postContent.classList.add('hidden');
    if (!postListElem) {
        console.log('[blog.js] #post-list not found');
        return;
    }
    console.log('[blog.js] #post-list found, fetching posts...');

    fetch('../blog/posts.json')
        .then(res => {
            console.log('[blog.js] Fetched posts.json, status:', res.status);
            if (!res.ok) throw new Error('Failed to fetch posts.json');
            return res.json();
        })
        .then(posts => {
            function renderList() {
                postListElem.innerHTML = '';
                // Sort posts by date descending
                posts.sort((a, b) => {
                    const dateA = new Date(a.meta.date.split(' ')[0].replace(/\//g, '-'));
                    const dateB = new Date(b.meta.date.split(' ')[0].replace(/\//g, '-'));
                    return dateB - dateA;
                });
                posts.forEach(post => {
                    // Container for post entry
                    const li = document.createElement('li');
                    li.className = 'post-list-entry';
                    li.tabIndex = 0; // Make focusable for keyboard
                    li.setAttribute('role', 'link');
                    li.setAttribute('aria-label', post.meta.title);
                    // Use #/post/... for all post links
                    const postUrl = `#/post/${post.file.replace(/\.md$/, '')}`;
                    li.addEventListener('click', () => {
                        window.location.hash = postUrl;
                    });
                    li.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            window.location.hash = postUrl;
                        }
                    });

                    // Title row (make it a link for correct CSS targeting)
                    const titleRow = document.createElement('div');
                    titleRow.className = 'post-title-row';
                    const titleLink = document.createElement('a');
                    titleLink.href = postUrl;
                    titleLink.textContent = post.meta.title;
                    titleLink.addEventListener('click', function(e) {
                        e.preventDefault();
                        window.location.hash = postUrl;
                    });
                    titleRow.appendChild(titleLink);
                    li.appendChild(titleRow);

                    // Meta row (tags and date)
                    const metaRow = document.createElement('div');
                    metaRow.className = 'post-meta-row';

                    // Tag row
                    const tagRow = document.createElement('div');
                    tagRow.className = 'post-meta-tags';
                    let tags = post.meta.tags.replace(/\[|\]/g, '').split(',').map(t => t.trim());
                    const tagList = document.createElement('span');
                    tagList.className = 'post-meta-tags-list';
                    tagList.innerText = tags.join(', ');
                    tagRow.appendChild(tagList);
                    metaRow.appendChild(tagRow);

                    // Date row
                    const dateRow = document.createElement('div');
                    dateRow.className = 'post-meta-date';
                    dateRow.innerText = post.meta.date || '';
                    metaRow.appendChild(dateRow);

                    li.appendChild(metaRow);

                    // Abstract row
                    const abstractRow = document.createElement('div');
                    abstractRow.className = 'post-meta-abstract';
                    abstractRow.innerHTML = window.marked ? window.marked.parse(post.meta.abstract || '') : (post.meta.abstract || '');
                    li.appendChild(abstractRow);

                    postListElem.appendChild(li);
                });
            }
            if (!window.marked) {
                const markedScript = document.createElement('script');
                markedScript.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
                markedScript.onload = renderList;
                document.head.appendChild(markedScript);
            } else {
                renderList();
            }
        })
        .catch(err => {
            console.error('[blog.js] Error loading posts:', err);
        });
})();

window.renderBlogPost = function(slug) {
    function ensurePostCssLoaded() {
      if (![...document.styleSheets].some(s => s.href && s.href.endsWith('post.css'))) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'pages/post.css';
        document.head.appendChild(link);
      }
    }
    ensurePostCssLoaded();

    const tagBar = document.getElementById('tag-bar');
    const postList = document.getElementById('post-list');
    const postContent = document.getElementById('post-content');
    if (tagBar) tagBar.style.display = 'none';
    if (postList) postList.style.display = 'none';
    // Show post-content when displaying a post
    if (postContent) postContent.classList.remove('hidden');

    // Helper to render markdown with metadata
    function renderMarkdown(md) {
      // Split metadata (YAML frontmatter style or header block)
      let meta = {};
      let body = md;
      // Try to extract metadata from the top of the file
      if (md.startsWith('---')) {
        // YAML frontmatter
        const end = md.indexOf('---', 3);
        if (end !== -1) {
          const metaBlock = md.slice(3, end).trim();
          body = md.slice(end + 3).trim();
          metaBlock.split(/\r?\n/).forEach(line => {
            const [k, ...rest] = line.split(':');
            if (k && rest.length) meta[k.trim()] = rest.join(':').trim();
          });
        }
      } else if (md.startsWith('title:')) {
        // Simple header block
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
        body = lines.slice(i + 1).join('\n');
      }
      // Build metadata HTML
      let metaHtml = '<div class="post-meta">';
      metaHtml += '<div class="post-meta-row">';

      // Tags left
      metaHtml += '<div class="post-meta-tags">';
      if (meta.tags) {
        let tags = meta.tags.replace(/\[|\]/g, '').split(',').map(t => t.trim());
        metaHtml += `<span class="post-meta-tags-list">${tags.join(', ')}</span>`;
      }
      metaHtml += '</div>'; // .post-meta-tags

      // Date right
      metaHtml += '<div class="post-meta-date">';
      if (meta.date) metaHtml += meta.date;
      metaHtml += '</div>'; // .post-meta-date

      metaHtml += '</div>'; // .post-meta-row

      if (meta.abstract) metaHtml += `<div class="post-meta-abstract">${window.marked.parse(meta.abstract)}</div>`;

      // End of meta
      metaHtml += '<hr class="post-meta-separator">';

      metaHtml += '</div>';
      let bodyHtml = window.marked.parse(body);
      if (meta.title) {
        bodyHtml = bodyHtml.replace(new RegExp(`<h1[^>]*>\\s*${meta.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*<\\/h1>`, 'i'), '');
        const blogTitleElem = document.getElementById('blog-title');
        if (blogTitleElem) blogTitleElem.textContent = meta.title;
      }
      const html = metaHtml + '<div class="post-body">' + bodyHtml + '</div>';
      const postContent = document.getElementById('post-content');
      if (postContent) {
        postContent.innerHTML = html;
      }
    }
    // Helper to load marked if needed
    function loadMarkedAndRender(md) {
      if (window.marked) {
        renderMarkdown(md);
      } else {
        const markedScript = document.createElement('script');
        markedScript.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
        markedScript.onload = () => renderMarkdown(md);
        document.head.appendChild(markedScript);
      }
    }
    // Fetch and render markdown
    const mdPath = `blog/posts/${slug}.md`;
    fetch(mdPath)
      .then(res => {
        if (!res.ok) throw new Error('Markdown not found');
        return res.text();
      })
      .then(md => {
        loadMarkedAndRender(md);
      })
      .catch(err => {
        const postContent = document.getElementById('post-content');
        if (postContent) {
          postContent.innerHTML = '<p>Post not found.</p>';
        }
        console.error('[blog.js] Error loading markdown:', err);
      });
};
