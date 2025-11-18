// 404.ts - Simple redirect: if not already a hash route, make it one
(function() {
  // If not already a hash route and not on 404.html, convert to hash route
  if (!window.location.hash.startsWith('#/') && !window.location.pathname.endsWith('404.html')) {
    const path = window.location.pathname.replace(/^\/+|\/$/g, ''); // Remove leading/trailing slashes

    // Special handling for /post cases
    if (path.startsWith('post')) {
      const postName = path.length > 4 ? path.slice(5) : '';
      if (!postName) {
        // /post or /post/ with no post name -> redirect to blog
        window.location.replace(window.location.origin + '/#/blog');
        return;
      }
      // Check if post exists
      const mdUrl = window.location.origin + '/blog/posts/' + postName + '.md';
      fetch(mdUrl, { method: 'HEAD' })
        .then(function(res) {
          if (!res.ok) {
            // Post doesn't exist, redirect to blog
            window.location.replace(window.location.origin + '/#/blog');
          } else {
            // Post exists, convert to hash route
            window.location.replace(window.location.origin + '/#/' + path + window.location.search + window.location.hash);
          }
        }, function() {
          // Error checking post, redirect to blog
          window.location.replace(window.location.origin + '/#/blog');
        });
      return;
    }

    // For all other paths, simply add /#/ in front
    window.location.replace(window.location.origin + '/#/' + path + window.location.search + window.location.hash);
  }
})();
