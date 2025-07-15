// 404.js - redirect only valid routes to hash-based SPA
(function() {
  // If not already a hash route, redirect to hash route
  if (!window.location.hash || !window.location.hash.startsWith('#/')) {
    // Prevent infinite redirect loop: only redirect if already on 404.html
    if (window.location.pathname.endsWith('404.html')) return;
    var path = window.location.pathname.replace(/^\//, '');
    var normalizedPath = path.replace(/\/$/, '');
    // Only redirect if path is a valid route
    var validRoutes = ['about', 'projects', 'blog', 'contact'];
    if (validRoutes.includes(normalizedPath)) {
      window.location.replace(window.location.origin + '/#/' + normalizedPath + window.location.search + window.location.hash);
      return;
    } else if (normalizedPath.startsWith('post')) {
      // Accept both /post and /post/
      var postName = normalizedPath.length > 4 ? normalizedPath.slice(5) : '';
      if (!postName) {
        // If just /post or /post/, redirect to blog
        window.location.replace(window.location.origin + '/#/blog');
        return;
      }
      var mdUrl = window.location.origin + '/blog/posts/' + postName + '.md';
      fetch(mdUrl, { method: 'HEAD' })
        .then(function(res) {
          if (res.ok) {
            window.location.replace(window.location.origin + '/#/post/' + postName + window.location.search + window.location.hash);
          } else {
            window.location.replace(window.location.origin + '/#/blog');
          }
        }, function() {
          window.location.replace(window.location.origin + '/#/blog');
        });
      return;
    } else {
      // For all other invalid routes, redirect to home and update the URL
      window.location.replace(window.location.origin + '/');
      return;
    }
    // Otherwise, do not redirect (show 404)
  }
})();
