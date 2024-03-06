let clickCount = 0;

function pronunce() {
    const audio1 = document.getElementById('pronunce-Bloin');
    const audio2 = document.getElementById('pronunce-Rickroll');
    
    // Stop both audios if they are playing
    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
    
    clickCount++;

    if (clickCount > 1 && clickCount  % 3 === 0) {
        audio2.play();
    } else {
        audio1.play();
    }
}

// Update active nav link based on current url hash
function updateActiveNavLink(hash) {
    const navLinks = document.querySelectorAll('#navbar a'); // Select all nav links
    navLinks.forEach(link => {
      if (link.getAttribute('href') === hash) {
        link.classList.add('nav-active'); // Add active class if hash matches
      } else {
        link.classList.remove('nav-active'); // Remove active class from other links
      }
    });
}