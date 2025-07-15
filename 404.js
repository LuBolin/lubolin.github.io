// 404.js - redirect only valid routes to hash-based SPA
(function() {
  // If not already a hash route, redirect to hash route
  if (!window.location.hash || !window.location.hash.startsWith('#/')) {
    var path = window.location.pathname.replace(/^\//, '');
    // Only redirect if path is a valid route
    var validRoutes = ['about', 'projects', 'blog', 'contact'];
    if (validRoutes.includes(path)) {
      window.location.replace(window.location.origin + '/#/' + path + window.location.search + window.location.hash);
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
        })
        .catch(function() {
          window.location.replace(window.location.origin + '/#/blog');
        });
      return;
    }
    // Otherwise, do not redirect (show 404)
  }
})();
