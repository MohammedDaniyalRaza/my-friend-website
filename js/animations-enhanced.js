import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Typed from 'typed.js';
import AOS from 'aos';

gsap.registerPlugin(ScrollTrigger);

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Hero section animations
const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTimeline
    .to('.hero-title', { opacity: 1, y: 0, duration: 1 })
    .to('.hero-subtitle', { opacity: 1, duration: 1 }, '-=0.5')
    .to('.hero-description', { opacity: 1, duration: 1 }, '-=0.5')
    .to('.cta-container', { opacity: 1, duration: 1 }, '-=0.5')
    .to('.scroll-indicator', { opacity: 1, duration: 1 }, '-=0.5');

// Typing animation
new Typed('.typed-text', {
    strings: ['UI/UX Developer', 'Web Designer', 'Creative Thinker'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Scroll animations for sections
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Parallax effect for background elements
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    gsap.to('.parallax', {
        x: mouseX * 50,
        y: mouseY * 50,
        duration: 1
    });
});

// Form submission animation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    gsap.to(form, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
            // Add your form submission logic here
            form.reset();
            alert('Message sent successfully!');
        }
    });
});