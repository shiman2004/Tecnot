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

document.addEventListener('DOMContentLoaded', function () {

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
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) closeMobileMenu();
    });
  });

  // Contact form handling
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name && email && message) {
        const successMsg = document.getElementById('successMessage');
        if (successMsg) {
          successMsg.classList.add('show');
          setTimeout(() => successMsg.classList.remove('show'), 3000);
        }
        this.reset();
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

  // Handle window resize
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) closeMobileMenu();
  });

  // ═══════════════════════════════════════════════════════════════════
  // 3D Cards Carousel
  // ═══════════════════════════════════════════════════════════════════
  const carousel = document.getElementById('cardsCarousel');
  const caption = document.getElementById('carouselCaption');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (carousel && caption && prevBtn && nextBtn) {
    const cards = carousel.querySelectorAll('.carousel-card');
    const positions = ['far-left', 'left', 'center', 'right', 'far-right'];
    let currentIndex = 0;
    let autoPlayInterval;

    function updatePositions() {
      cards.forEach((card, index) => {
        let posIndex = index - currentIndex;

        if (posIndex < -2) posIndex += cards.length;
        if (posIndex > 2) posIndex -= cards.length;

        const posName = positions[posIndex + 2] || 'far-right';
        card.setAttribute('data-position', posName);
      });

      const centerCard = cards[currentIndex];
      if (centerCard) {
        caption.style.opacity = '0';
        setTimeout(() => {
          caption.textContent = centerCard.getAttribute('data-caption');
          caption.style.opacity = '1';
        }, 150);
      }
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % cards.length;
      updatePositions();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updatePositions();
    }

    function startAutoPlay() {
      autoPlayInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }

    nextBtn.addEventListener('click', () => {
      stopAutoPlay();
      nextSlide();
      startAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
      stopAutoPlay();
      prevSlide();
      startAutoPlay();
    });

    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const position = card.getAttribute('data-position');
        if (position === 'left') {
          stopAutoPlay(); prevSlide(); startAutoPlay();
        } else if (position === 'right') {
          stopAutoPlay(); nextSlide(); startAutoPlay();
        }
      });
    });

    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    updatePositions();
    startAutoPlay();
  }

  // --- Features Scroll Logic ---
  const featureBlocks = document.querySelectorAll('.feature-text-block');
  const featureVisuals = document.querySelectorAll('.feature-visual');

  const featureObserverOptions = {
    root: null,
    rootMargin: '-30% 0px -30% 0px',
    threshold: 0.1
  };

  if ('IntersectionObserver' in window && featureBlocks.length && featureVisuals.length) {
    const featureObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const featureId = entry.target.getAttribute('data-feature');

          featureVisuals.forEach(visual => visual.classList.remove('active'));

          const activeVisual = document.querySelector(`.feature-visual[data-feature="${featureId}"]`);
          if (activeVisual) activeVisual.classList.add('active');
        }
      });
    }, featureObserverOptions);

    featureBlocks.forEach(block => featureObserver.observe(block));
  }
});
