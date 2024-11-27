const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    initDarkTheme3D();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
        initDarkTheme3D();
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
        removeDarkTheme3D();
    }
});

function initDarkTheme3D() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.animation = 'darkFloat 6s ease-in-out infinite';
    
    // Add glow effect to text
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    heroTitle.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
    heroSubtitle.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.3)';
    
    // Update particles for dark theme
    if (window.pJSDom && window.pJSDom[0]) {
        const particlesJS = window.pJSDom[0].pJS;
        particlesJS.particles.color.value = '#ffffff';
        particlesJS.particles.line_linked.color = '#ffffff';
        particlesJS.fn.particlesRefresh();
    }
}

function removeDarkTheme3D() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.animation = 'float 6s ease-in-out infinite';
    
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    heroTitle.style.textShadow = 'none';
    heroSubtitle.style.textShadow = 'none';
    
    // Update particles for light theme
    if (window.pJSDom && window.pJSDom[0]) {
        const particlesJS = window.pJSDom[0].pJS;
        particlesJS.particles.color.value = '#000000';
        particlesJS.particles.line_linked.color = '#000000';
        particlesJS.fn.particlesRefresh();
    }
}