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
    document.getElementById('navbar').addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
        e.preventDefault();
        let href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
            window.location.hash = href; // Change the hash
        }
        }
    });
});




// updateActiveNavLink is defined in navbar.js

// Function to load content based on # value in url
function loadContentByHash(hash) {
    // Default to 'home' if no hash
    let contentFile = hash ? hash.substring(1) : 'home';
    // Construct file path
    let filePath = `./views/${contentFile}.html`; 

    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.querySelector('main').innerHTML = data;
        updateActiveNavLink('#' + contentFile);
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