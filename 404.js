// 404.js - redirect only valid routes to hash-based SPA
(function() {
  // Always run redirect logic if on 404.html (GitHub Pages custom 404)
  var is404 = window.location.pathname.endsWith('404.html');
  var isRoot = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html');
  var isHashRoute = window.location.hash && window.location.hash.startsWith('#/');

  // Only skip redirect if already on a hash route and on root/index.html
  if (isHashRoute && (isRoot || is404)) {
    return;
  }

  // Use the path before 404.html if present (for GitHub Pages)
  var path = window.location.pathname.replace(/^\/+|\/404\.html$/g, '').replace(/^\/+|\/$/g, '');
  var normalizedPath = path;
  var validRoutes = ['about', 'projects', 'blog', 'contact'];
  if (validRoutes.includes(normalizedPath)) {
    window.location.replace(window.location.origin + '/#/' + normalizedPath + window.location.search + window.location.hash);
    return;
  } else if (normalizedPath.startsWith('post')) {
    // Accept both /post and /post/
    var postName = normalizedPath.length > 4 ? normalizedPath.slice(5) : '';
    if (!postName) {
      window.location.replace(window.location.origin + '/#/blog');
      return;
    }
    var mdUrl = window.location.origin + '/blog/posts/' + postName + '.md';
    fetch(mdUrl, { method: 'HEAD' })
      .then(function(res) {
        if (res.ok) {
          // Only redirect if not already on the hash route
          if (!window.location.hash.startsWith('#/post/')) {
            window.location.replace(window.location.origin + '/#/post/' + postName + window.location.search + window.location.hash);
          }
        } else {
          window.location.replace(window.location.origin + '/#/blog');
        }
      }, function() {
        window.location.replace(window.location.origin + '/#/blog');
      });
    return;
  } else {
    window.location.replace(window.location.origin + '/');
    return;
  }
  // Otherwise, do not redirect (show 404)
})();
