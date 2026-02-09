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

  // ═══════════════════════════════════════════════════════════════════
  // TEAM: Premium reveal on scroll + hover tilt (ONLY TEAM)
  // ═══════════════════════════════════════════════════════════════════
  const teamItems = document.querySelectorAll('.team-animated-grid .team-item');

  if ('IntersectionObserver' in window && teamItems.length) {
    const teamObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.18 });

    teamItems.forEach(item => teamObserver.observe(item));
  } else {
    // fallback
    teamItems.forEach(item => item.classList.add('in-view'));
  }

  // Hover tilt + glow follow (mouse position) — subtle & premium
  teamItems.forEach((card) => {
    if (!card.hasAttribute('data-tilt')) return;

    const reset = () => {
      card.style.transform = '';
      card.style.setProperty('--mx', '50%');
      card.style.setProperty('--my', '30%');
    };

    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;

      const rx = ((y / r.height) - 0.5) * -6; // rotateX
      const ry = ((x / r.width) - 0.5) * 8;   // rotateY

      card.style.transform = `translateY(-10px) scale(1.01) rotateX(${rx}deg) rotateY(${ry}deg)`;
      card.style.setProperty('--mx', `${(x / r.width) * 100}%`);
      card.style.setProperty('--my', `${(y / r.height) * 100}%`);
    });

    card.addEventListener('mouseleave', reset);
  });

    // ═══════════════════════════════════════════════════════════════════
  // TEAM: Horizontal slider (3 visible) + arrows + drag + progress
  // ═══════════════════════════════════════════════════════════════════
  const teamScroll = document.getElementById('teamScroll');
  const teamPrev = document.getElementById('teamPrev');
  const teamNext = document.getElementById('teamNext');
  const teamProgressBar = document.getElementById('teamProgressBar');

  if (teamScroll && teamPrev && teamNext) {
    const getStep = () => {
      const card = teamScroll.querySelector('.team-item');
      if (!card) return 320;
      const gap = parseFloat(getComputedStyle(teamScroll).gap || '0') || 0;
      return card.getBoundingClientRect().width + gap;
    };

    const updateProgress = () => {
      if (!teamProgressBar) return;
      const max = teamScroll.scrollWidth - teamScroll.clientWidth;
      const pct = max <= 0 ? 100 : (teamScroll.scrollLeft / max) * 100;
      teamProgressBar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    };

    teamNext.addEventListener('click', () => {
      teamScroll.scrollBy({ left: getStep(), behavior: 'smooth' });
    });

    teamPrev.addEventListener('click', () => {
      teamScroll.scrollBy({ left: -getStep(), behavior: 'smooth' });
    });

    teamScroll.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();

    // Drag-to-scroll (mouse)
    let isDown = false;
    let startX = 0;
    let startLeft = 0;

    teamScroll.addEventListener('mousedown', (e) => {
      isDown = true;
      teamScroll.classList.add('dragging');
      startX = e.pageX;
      startLeft = teamScroll.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      isDown = false;
      teamScroll.classList.remove('dragging');
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      const dx = e.pageX - startX;
      teamScroll.scrollLeft = startLeft - dx;
    });

    // Drag-to-scroll (touch)
    let touchX = 0;
    let touchLeft = 0;

    teamScroll.addEventListener('touchstart', (e) => {
      touchX = e.touches[0].pageX;
      touchLeft = teamScroll.scrollLeft;
    }, { passive: true });

    teamScroll.addEventListener('touchmove', (e) => {
      const dx = e.touches[0].pageX - touchX;
      teamScroll.scrollLeft = touchLeft - dx;
    }, { passive: true });

    // Optional: keyboard support
    teamScroll.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') teamScroll.scrollBy({ left: getStep(), behavior: 'smooth' });
      if (e.key === 'ArrowLeft') teamScroll.scrollBy({ left: -getStep(), behavior: 'smooth' });
    });
  }

  // Hover tilt + glow follow (still premium)
  const teamCards = document.querySelectorAll('#teamScroll .team-item[data-tilt]');
  teamCards.forEach((card) => {
    const reset = () => {
      card.style.transform = '';
      card.style.setProperty('--mx', '50%');
      card.style.setProperty('--my', '30%');
    };

    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;

      const rx = ((y / r.height) - 0.5) * -5;
      const ry = ((x / r.width) - 0.5) * 7;

      card.style.transform = `translateY(-10px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      card.style.setProperty('--mx', `${(x / r.width) * 100}%`);
      card.style.setProperty('--my', `${(y / r.height) * 100}%`);
    });

    card.addEventListener('mouseleave', reset);
  });

