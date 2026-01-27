// Custom Cursor Logic
const cursorBrush = document.createElement('img');
cursorBrush.src = 'assets/paintbrush.svg';
cursorBrush.className = 'cursor-brush';
cursorBrush.alt = 'Paintbrush Cursor';

// Create 3 Paint Drops
const drops = [];
for (let i = 0; i < 3; i++) {
    const drop = document.createElement('div');
    drop.className = 'paint-drop';
    // Stagger sizes
    const size = 8 - (i * 2); // 8px, 6px, 4px
    drop.style.width = `${size}px`;
    drop.style.height = `${size}px`;

    // Initial opacity 0
    drop.style.opacity = '0';

    // Add transition for trail effect (lag)
    // More delay = further back in trail
    drop.style.transition = `left ${0.1 + (i * 0.05)}s ease-out, top ${0.1 + (i * 0.05)}s ease-out`;

    document.body.appendChild(drop);
    drops.push(drop);
}

// Initially hide until movement
cursorBrush.style.opacity = '0';
document.body.appendChild(cursorBrush);

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Show components
    cursorBrush.style.opacity = '1';
    drops.forEach(d => d.style.opacity = '0.6');

    // Move Brush (instant or very fast)
    cursorBrush.style.left = `${posX}px`;
    cursorBrush.style.top = `${posY}px`;

    // Move Drops (CSS transition handles the lag/trail)
    drops.forEach(drop => {
        drop.style.left = `${posX}px`;
        drop.style.top = `${posY}px`;
    });
});

// Hide when leaving window
document.addEventListener('mouseout', (e) => {
    if (!e.relatedTarget && !e.toElement) {
        cursorBrush.style.opacity = '0';
        drops.forEach(d => d.style.opacity = '0');
    }
});

document.addEventListener('mouseenter', () => {
    cursorBrush.style.opacity = '1';
});

// Event Delegation for Hover Effects
// This prevents duplicate listeners and handles dynamic content automatically
document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('a, button, .art-card, .lightbox-close, input, textarea, .filter-btn');
    if (target) {
        cursorBrush.style.transform = 'translate(-50%, -50%) scale(1.2)'; // Simple scale, no rotation
    }
});

document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('a, button, .art-card, .lightbox-close, input, textarea, .filter-btn');
    if (target) {
        cursorBrush.style.transform = 'translate(-50%, -50%) scale(1)'; // Reset
    }
});

// Deprecated: explicit bind function no longer needed due to delegation
function refreshCursorTargets() {
    // No-op
}
