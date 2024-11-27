import './theme.js';
import './navbar.js';
import './loader.js';
import './animations.js';
import './particles-config.js';
import { initAboutAnimations, initSkillsAnimations, initProjectsAnimations } from './section-animations.js';
import './animations-enhanced.js';

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    initAboutAnimations();
    initSkillsAnimations();
    initProjectsAnimations();
});