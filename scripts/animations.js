function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small delay for staggered effect if multiple items reveal at once
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initRevealAnimations();
});
