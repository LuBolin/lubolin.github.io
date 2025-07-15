// 404.js - redirect only valid routes to hash-based SPA
(function() {
  // If not already a hash route, redirect to hash route
  if (!window.location.hash || !window.location.hash.startsWith('#/')) {
    // Prevent infinite redirect loop: only redirect if already on 404.html
    if (window.location.pathname.endsWith('404.html')) return;
    var path = window.location.pathname.replace(/^\//, '');
    // Only redirect if path is a valid route
    var validRoutes = ['about', 'projects', 'blog', 'contact'];
    if (validRoutes.includes(path)) {
      window.location.replace(window.location.origin + '/#/' + path + window.location.search + window.location.hash);
      return;
    } else if (path.startsWith('post/')) {
      var postName = path.slice(5);
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
    } else if (path === 'blog' || path === 'blog/') {
      // Special case: /blog or /blog/ should redirect to /#/blog
      window.location.replace(window.location.origin + '/#/blog');
      return;
    } else {
      // For all other invalid routes, redirect to home and update the URL
      window.location.replace(window.location.origin + '/');
      return;
    }
    // Otherwise, do not redirect (show 404)
  }
})();
