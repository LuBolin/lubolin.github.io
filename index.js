fetch('./pages/navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;
});

window.addEventListener('load', () => {
loadContentByHash(window.location.hash);
});

window.addEventListener('hashchange', () => {
loadContentByHash(window.location.hash);
});

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                let href = e.target.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    if (!href.startsWith('#/')) {
                        href = href.replace(/^#/, '#/');
                    }
                    window.location.hash = href;
                }
            }
        });
        navbar.querySelectorAll('a[href^="#"]').forEach(link => {
            let href = link.getAttribute('href');
            if (href && !href.startsWith('#/')) {
                link.setAttribute('href', href.replace(/^#/, '#/'));
            }
        });
    }
});

function loadContentByHash(hash) {
    let contentFile = hash ? hash.replace(/^#\/?/, '') : 'home';

    if (contentFile.startsWith('post/')) {
        fetch('./pages/blog.html')
          .then(response => response.text())
          .then(data => {
            document.querySelector('main').innerHTML = data;
            updateActiveNavLink('#blog');
            const script = document.createElement('script');
            script.src = './blog/blog.js';
            script.onload = () => {
              const slug = contentFile.replace('post/', '');
              if (window.renderBlogPost) window.renderBlogPost(slug);
            };
            document.querySelector('main').appendChild(script);
          });
        return;
    }

    if (contentFile === 'shangrila') {
        fetch('./scenes/shangrila/index.html')
          .then(response => response.text())
          .then(data => {
            document.querySelector('main').innerHTML = data;
            updateActiveNavLink('#' + contentFile);
          })
          .catch(err => {
            console.error('Failed to load Shangri-La:', err);
          });
        return;
    }

    let filePath = `./pages/${contentFile}.html`; 

    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.querySelector('main').innerHTML = data;
        updateActiveNavLink('#' + contentFile);
        if (contentFile === 'blog') {
          const script = document.createElement('script');
          script.src = './blog/blog.js';
          document.querySelector('main').appendChild(script);
        }
      })
      .catch(err => {
        console.error('Failed to load the content:', err);
        let currentLocationWithoutParams = window.location.protocol + "//"
          + window.location.host
          + window.location.pathname;
        window.location.assign(currentLocationWithoutParams);
    });
}