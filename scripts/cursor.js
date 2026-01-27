// Custom Cursor Logic
const cursorBrush = document.createElement('img');
cursorBrush.src = 'assets/paintbrush.png';
cursorBrush.className = 'cursor-brush';
cursorBrush.alt = 'Paintbrush Cursor';

// Create 5 Paint Drops for a smoother trail
const drops = [];
for (let i = 0; i < 5; i++) {
    const drop = document.createElement('div');
    drop.className = 'paint-drop';
    const size = 10 - (i * 2);
    drop.style.width = `${size}px`;
    drop.style.height = `${size}px`;
    drop.style.opacity = '0';
    drop.style.transition = `left ${0.05 + (i * 0.03)}s var(--ease-out-expo), top ${0.05 + (i * 0.03)}s var(--ease-out-expo)`;
    document.body.appendChild(drop);
    drops.push(drop);
}

cursorBrush.style.opacity = '0';
document.body.appendChild(cursorBrush);

let lastX = 0;
let lastY = 0;

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorBrush.style.opacity = '1';
    drops.forEach(d => d.style.opacity = '0.4');

    cursorBrush.style.left = `${posX}px`;
    cursorBrush.style.top = `${posY}px`;

    // Add a slight rotation based on movement direction
    const deltaX = posX - lastX;
    const rotation = deltaX * 0.2;
    cursorBrush.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

    drops.forEach(drop => {
        drop.style.left = `${posX}px`;
        drop.style.top = `${posY}px`;
    });

    lastX = posX;
    lastY = posY;
});

document.addEventListener('mouseout', (e) => {
    if (!e.relatedTarget && !e.toElement) {
        cursorBrush.style.opacity = '0';
        drops.forEach(d => d.style.opacity = '0');
    }
});

document.addEventListener('mouseenter', () => {
    cursorBrush.style.opacity = '1';
});

document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, button, .art-card, .lightbox-close, input, textarea, .filter-btn, .image-frame');
    if (target) {
        cursorBrush.classList.add('cursor-hover');
    }
});

document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('a, button, .art-card, .lightbox-close, input, textarea, .filter-btn, .image-frame');
    if (target) {
        cursorBrush.classList.remove('cursor-hover');
    }
});

