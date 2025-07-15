// Upon init, load the navbar and home page
fetch('./views/navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;
});

window.addEventListener('load', () => {
loadContentByHash(window.location.hash);
});





// Re-load content when URL hash changes
window.addEventListener('hashchange', () => {
loadContentByHash(window.location.hash);
});

// Navbar click listener
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                let href = e.target.getAttribute('href');
                if (href && href.startsWith('#')) {
                    // If not already #/, convert to #/
                    if (!href.startsWith('#/')) {
                        href = href.replace(/^#/, '#/');
                    }
                    window.location.hash = href;
                }
            }
        });
        // Update all nav links to use #/ instead of #
        navbar.querySelectorAll('a[href^="#"]').forEach(link => {
            let href = link.getAttribute('href');
            if (href && !href.startsWith('#/')) {
                link.setAttribute('href', href.replace(/^#/, '#/'));
            }
        });
    }
});




// updateActiveNavLink is defined in navbar.js

// Function to load content based on # value in url
function loadContentByHash(hash) {
    // Support #/route style hashes
    let contentFile = hash ? hash.replace(/^#\/?/, '') : 'home';

    // Handle post view: #post/<slug>
    if (contentFile.startsWith('post/')) {
        // Always load the blog view first
        fetch('./views/blog.html')
          .then(response => response.text())
          .then(data => {
            document.querySelector('main').innerHTML = data;
            updateActiveNavLink('#blog');
            // Dynamically load blog.js for post list and post rendering
            const script = document.createElement('script');
            script.src = './blog/blog.js';
            script.onload = () => {
              // Extract slug and call renderBlogPost
              const slug = contentFile.replace('post/', '');
              if (window.renderBlogPost) window.renderBlogPost(slug);
            };
            document.querySelector('main').appendChild(script);
          });
        return;
    }

    // Construct file path
    let filePath = `./views/${contentFile}.html`; 

    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.querySelector('main').innerHTML = data;
        updateActiveNavLink('#' + contentFile);
        // if blog, force load blog.js
        // embed in blog.html does not work, as html load does not reload the page
        if (contentFile === 'blog') {
          const script = document.createElement('script');
          script.src = './blog/blog.js';
          document.querySelector('main').appendChild(script);
        }
      })
      .catch(err => {
        console.error('Failed to load the content:', err);
        // Redirect if content fails to load
        let currentLocationWithoutParams = window.location.protocol + "//" 
          + window.location.host 
          + window.location.pathname;

        // assign acts similar to a href redirect
        // I rather use this than replace
        window.location.assign(currentLocationWithoutParams);
    });
}