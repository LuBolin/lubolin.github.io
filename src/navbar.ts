let clickCount = 0;

export function pronunce(): void {
    const audio1 = document.getElementById('pronunce-Bloin') as HTMLAudioElement;
    const audio2 = document.getElementById('pronunce-Rickroll') as HTMLAudioElement;

    if (!audio1 || !audio2) return;

    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;

    clickCount++;

    if (clickCount > 1 && clickCount % 3 === 0) {
        audio2.play();
    } else {
        audio1.play();
    }
}

export function updateActiveNavLink(hash: string): void {
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('#navbar a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === hash) {
            link.classList.add('nav-active');
        } else {
            link.classList.remove('nav-active');
        }
    });
}

export function setupPortalClickHandler(): void {
    customElements.whenDefined('navbar-portal').then(() => {
        const portal = document.querySelector('navbar-portal') as any;
        if (portal) {
            portal.onClick = () => {
                // Toggle between shangrila and home
                if (window.location.hash === "#/shangrila") {
                    window.location.hash = "#/home";
                } else {
                    window.location.hash = "#/shangrila";
                }
            };
        }
    });
}

export function setupPronunciationHandler(): void {
    const pronounceIcon = document.querySelector('.pronunce-icon');
    if (pronounceIcon) {
        pronounceIcon.addEventListener('click', pronunce);
    }
}
