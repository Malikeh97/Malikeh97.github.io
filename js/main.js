/**
 * Personal Website - Main JavaScript
 * Handles navigation, smooth scrolling, and interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile Navigation Toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Smooth Scroll for Navigation Links
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only handle internal links (starting with #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const navHeight = navbar ? navbar.offsetHeight : 70;
                    const targetPosition = targetElement.offsetTop - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Navbar Background Change on Scroll
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(30, 58, 95, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }

    window.addEventListener('scroll', updateNavbar);
    updateNavbar();

    // Active Navigation Link Highlighting
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navHeight = navbar ? navbar.offsetHeight : 70;

        let currentSection = '';

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(function(link) {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection();

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.research-card, .publication, .talk, .service-card, .interest-item, .teaching-category'
    );

    animatedElements.forEach(function(element) {
        element.classList.add('animate-on-scroll');
        observer.observe(element);
    });

    // Add CSS for animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .animate-on-scroll.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .nav-link.active {
            color: var(--color-burgundy);
        }
        .nav-link.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);

    // Persian Music Player
    const musicToggle = document.getElementById('music-toggle');
    const persianMusic = document.getElementById('persian-music');

    if (musicToggle && persianMusic) {
        let isPlaying = false;

        musicToggle.addEventListener('click', function() {
            if (isPlaying) {
                persianMusic.pause();
                musicToggle.classList.remove('playing');
                musicToggle.querySelector('.music-text').textContent = 'Play Persian Music';
            } else {
                persianMusic.volume = 0.3; // Soft background volume
                persianMusic.play().catch(function(e) {
                    console.log('Audio play failed:', e);
                });
                musicToggle.classList.add('playing');
                musicToggle.querySelector('.music-text').textContent = 'Pause Music';
            }
            isPlaying = !isPlaying;
        });
    }
});
