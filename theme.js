// Update CSS variables from configuration
function applyTheme() {
    const config = window.VALENTINE_CONFIG;
    const root = document.documentElement;

    // Apply colors
    root.style.setProperty('--background-color-1', config.colors.backgroundStart);
    root.style.setProperty('--background-color-2', config.colors.backgroundEnd);
    root.style.setProperty('--button-color', config.colors.buttonBackground);
    root.style.setProperty('--button-hover', config.colors.buttonHover);
    root.style.setProperty('--text-color', config.colors.textColor);
    root.style.setProperty('--background-image', url('https://res.cloudinary.com/dzemrc6gj/image/upload/v1739453746/dxl7v76mnftpufyq9h1l.jpg');

    // Apply animation settings
    root.style.setProperty('--float-duration', config.animations.floatDuration);
    root.style.setProperty('--float-distance', config.animations.floatDistance);
    root.style.setProperty('--bounce-speed', config.animations.bounceSpeed);
    root.style.setProperty('--heart-explosion-size', config.animations.heartExplosionSize);


}

// Apply theme when the page loads
window.addEventListener('DOMContentLoaded', applyTheme); 