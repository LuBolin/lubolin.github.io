import { updateActiveNavLink } from './navbar';
import { initializeBlogList, renderBlogPost } from './blog';
import './navbar_portal';

// Load navbar HTML
fetch('/pages/navbar.html')
    .then(response => response.text())
    .then(data => {
        const navbarElem = document.getElementById('navbar');
        if (navbarElem) {
            navbarElem.innerHTML = data;
        }
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
        navbar.addEventListener('click', function (e) {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A') {
                let href = target.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    if (!href.startsWith('#/')) {
                        href = href.replace(/^#/, '#/');
                    }
                    window.location.hash = href;
                }
            }
        });

        navbar.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link => {
            let href = link.getAttribute('href');
            if (href && !href.startsWith('#/')) {
                link.setAttribute('href', href.replace(/^#/, '#/'));
            }
        });
    }
});

function loadContentByHash(hash: string): void {
    let contentFile = hash ? hash.replace(/^#\/?/, '') : 'home';

    if (contentFile.startsWith('post/')) {
        fetch('/pages/blog.html')
            .then(response => response.text())
            .then(data => {
                const mainElem = document.querySelector('main');
                if (mainElem) {
                    mainElem.innerHTML = data;
                    updateActiveNavLink('#blog');

                    // Use dynamic import instead of script injection
                    const slug = contentFile.replace('post/', '');
                    renderBlogPost(slug);
                }
            });
        return;
    }

    // Hardcoded for now
    if (contentFile === 'shangrila') {
        fetch('/scenes/shangrila.html')
            .then(response => response.text())
            .then(data => {
                const mainElem = document.querySelector('main');
                if (mainElem) {
                    mainElem.innerHTML = data;
                    updateActiveNavLink('#' + contentFile);
                }
            })
            .catch(err => {
                console.error('Failed to load Shangri-La:', err);
            });
        return;
    }

    let filePath = `/pages/${contentFile}.html`;

    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            const mainElem = document.querySelector('main');
            if (mainElem) {
                mainElem.innerHTML = data;
                updateActiveNavLink('#' + contentFile);

                if (contentFile === 'blog') {
                    // Initialize blog list instead of injecting script
                    initializeBlogList();
                }
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
