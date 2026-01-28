// Dark Mode Theme Toggle
(function () {
    const THEME_KEY = 'ellemendoza-theme';

    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem(THEME_KEY) || 'light';

    // Apply theme immediately to prevent flash
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function () {
        initThemeToggle();
    });

    function initThemeToggle() {
        // Create toggle button
        const toggle = document.createElement('button');
        toggle.className = 'theme-toggle';
        toggle.setAttribute('aria-label', 'Toggle dark mode');
        toggle.innerHTML = currentTheme === 'dark'
            ? '<span class="theme-icon">☀️</span>'
            : '<span class="theme-icon">🌙</span>';

        // Add to header
        const header = document.querySelector('header .header-inner');
        if (header) {
            header.appendChild(toggle);
        }

        // Toggle theme on click
        toggle.addEventListener('click', function () {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            // Update theme
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem(THEME_KEY, newTheme);

            // Update icon
            toggle.innerHTML = newTheme === 'dark'
                ? '<span class="theme-icon">☀️</span>'
                : '<span class="theme-icon">🌙</span>';
        });
    }
})();
