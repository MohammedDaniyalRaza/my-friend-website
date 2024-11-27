const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Add specific animations for project cards
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
            }
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .skill-card, .project-card').forEach(element => {
    observer.observe(element);
});

// Enhanced animations for project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.2}s`;
    
    // Hover animations
    card.addEventListener('mouseenter', () => {
        const image = card.querySelector('img');
        const content = card.querySelector('.project-content');
        const links = card.querySelector('.project-links');
        
        if (image) image.style.transform = 'scale(1.1) rotate(2deg)';
        if (content) content.style.transform = 'translateY(-10px)';
        if (links) {
            links.style.transform = 'translateY(0)';
            links.style.opacity = '1';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const image = card.querySelector('img');
        const content = card.querySelector('.project-content');
        const links = card.querySelector('.project-links');
        
        if (image) image.style.transform = 'scale(1) rotate(0)';
        if (content) content.style.transform = 'translateY(0)';
        if (links) {
            links.style.transform = 'translateY(20px)';
            links.style.opacity = '0';
        }
    });
});