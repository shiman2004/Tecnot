// ═══════════════════════════════════════════════════════════════════
// TECNOT - Main JavaScript
// Minimal, functional interactions
// ═══════════════════════════════════════════════════════════════════

// Mobile Navigation
function toggleMobileMenu() {
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('overlay');
    const icon = document.getElementById('mobileToggle').querySelector('i');

    if (nav.classList.contains('active')) {
        closeMobileMenu();
    } else {
        nav.classList.add('active');
        overlay.classList.add('active');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        document.body.style.overflow = 'hidden';
    }
}

function closeMobileMenu() {
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('overlay');
    const icon = document.getElementById('mobileToggle').querySelector('i');

    nav.classList.remove('active');
    overlay.classList.remove('active');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
    document.body.style.overflow = '';
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Create overlay for mobile menu
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.id = 'overlay';
    document.body.appendChild(overlay);

    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobileToggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }

    // Close menu on overlay click
    overlay.addEventListener('click', closeMobileMenu);

    // Close menu on link click (mobile)
    document.querySelectorAll('#nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });

    // Contact form handling
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                const successMsg = document.getElementById('successMessage');
                if (successMsg) {
                    successMsg.classList.add('show');

                    setTimeout(() => {
                        successMsg.classList.remove('show');
                    }, 3000);

                    this.reset();
                }
            }
        });
    }

    // Scroll-triggered animations
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Pause animations until in view
        document.querySelectorAll('.feature-card, .team-member, .about-card, .step, .reason').forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
