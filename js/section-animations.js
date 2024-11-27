import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// About section animations
export function initAboutAnimations() {
    const aboutStats = gsap.utils.toArray('.stat-item');
    aboutStats.forEach((stat, index) => {
        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.2
        });
    });

    // 3D tilt effect for about text
    const aboutText = document.querySelector('.about-text');
    aboutText.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = aboutText.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        gsap.to(aboutText, {
            rotateY: x * 10,
            rotateX: -y * 10,
            duration: 0.5,
            ease: 'power2.out'
        });
    });

    aboutText.addEventListener('mouseleave', () => {
        gsap.to(aboutText, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
}

// Skills section animations
export function initSkillsAnimations() {
    const skillCards = gsap.utils.toArray('.skill-card');
    
    skillCards.forEach((card, index) => {
        const progressBar = card.querySelector('.progress-bar');
        
        ScrollTrigger.create({
            trigger: card,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(progressBar, {
                    scaleX: 1,
                    duration: 1.5,
                    ease: 'power2.out'
                });
                
                gsap.from(card, {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    delay: index * 0.2
                });
            },
            onLeaveBack: () => {
                gsap.to(progressBar, {
                    scaleX: 0,
                    duration: 1.5
                });
            }
        });
    });
}

// Projects section animations
export function initProjectsAnimations() {
    const projectCards = gsap.utils.toArray('.project-card');
    
    projectCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.2
        });
    });

    // Hover animations
    projectCards.forEach(card => {
        const image = card.querySelector('img');
        const content = card.querySelector('.project-content');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(image, {
                scale: 1.1,
                duration: 0.4
            });
            gsap.to(content, {
                y: -10,
                duration: 0.4
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(image, {
                scale: 1,
                duration: 0.4
            });
            gsap.to(content, {
                y: 0,
                duration: 0.4
            });
        });
    });
}