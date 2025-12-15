// Mobile Navigation Toggle
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
        // Prevent body scroll when menu is open
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
    // Re-enable body scroll
    document.body.style.overflow = '';
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create overlay element for mobile menu
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay);
    
    // Set up mobile menu toggle
    const mobileToggle = document.getElementById('mobileToggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking overlay
    overlay.addEventListener('click', closeMobileMenu);
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('#nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
    
    // Sticky Header
    function handleScroll() {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
            header.style.background = 'rgba(255, 255, 255, 0.99)';
        } else {
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.97)';
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Form Validation and Submission
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                // Show success message
                const successMsg = document.getElementById('successMessage');
                if (successMsg) {
                    successMsg.classList.add('show');
                    
                    // Hide message after 3 seconds
                    setTimeout(() => {
                        successMsg.classList.remove('show');
                    }, 3000);
                    
                    // Reset form
                    this.reset();
                }
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
    
    // Animation on scroll
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements with animation classes
        document.querySelectorAll('.feature-card, .team-member, .about-card, .step, .reason').forEach(el => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
    
    // Handle resize to close menu
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
});