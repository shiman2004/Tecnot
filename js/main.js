// ═══════════════════════════════════════════════════════════════════
// TECNOT - Main JavaScript (FINAL + MOBILE SMOOTH)
// ═══════════════════════════════════════════════════════════════════

function toggleMobileMenu() {
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');
  const icon = document.getElementById('mobileToggle').querySelector('i');

  if (nav.classList.contains('active')) {
    closeMobileMenu();
  } else {
    nav.classList.add('active');
    overlay.classList.add('active');
    icon.classList.replace('fa-bars', 'fa-times');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');
  const icon = document.getElementById('mobileToggle').querySelector('i');

  nav.classList.remove('active');
  overlay.classList.remove('active');
  icon.classList.replace('fa-times', 'fa-bars');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {

  /* ───────── Mobile Menu Overlay ───────── */
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.id = 'overlay';
  document.body.appendChild(overlay);

  document.getElementById('mobileToggle')?.addEventListener('click', toggleMobileMenu);
  overlay.addEventListener('click', closeMobileMenu);

  document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) closeMobileMenu();
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMobileMenu();
  });

  /* ───────── Smooth Anchor Scroll ───────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });

  /* ───────── Contact Form Feedback ───────── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const ok = [...form.querySelectorAll('input, textarea')].every(i => i.value.trim());
      if (!ok) return;

      const msg = document.getElementById('successMessage');
      msg.classList.add('show');
      setTimeout(() => msg.classList.remove('show'), 3000);
      form.reset();
    });
  }

  /* ───────── ABOUT: Reveal Animation ───────── */
  const reveals = document.querySelectorAll('#about .reveal-up');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view'));
    }, { threshold: 0.14 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in-view'));
  }

  /* ───────── FEATURES: 3D Carousel ───────── */
  const carousel = document.getElementById('cardsCarousel');
  const caption = document.getElementById('carouselCaption');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (carousel && caption && prevBtn && nextBtn) {
    const cards = [...carousel.children];
    const positions = ['far-left', 'left', 'center', 'right', 'far-right'];
    let index = 0;
    let autoPlay;

    const isMobile = window.matchMedia('(max-width: 520px)').matches;

    const update = () => {
      cards.forEach((c, i) => {
        let pos = i - index;
        if (pos < -2) pos += cards.length;
        if (pos > 2) pos -= cards.length;
        c.dataset.position = positions[pos + 2] || 'far-right';
      });

      caption.style.opacity = 0;
      setTimeout(() => {
        caption.textContent = cards[index].dataset.caption;
        caption.style.opacity = 1;
      }, 120);
    };

    const next = () => { index = (index + 1) % cards.length; update(); };
    const prev = () => { index = (index - 1 + cards.length) % cards.length; update(); };

    nextBtn.onclick = () => { stop(); next(); start(); };
    prevBtn.onclick = () => { stop(); prev(); start(); };

    cards.forEach(card => {
      card.onclick = () => {
        if (card.dataset.position === 'left') prev();
        if (card.dataset.position === 'right') next();
      };
    });

    const start = () => {
      if (!isMobile) autoPlay = setInterval(next, 4000);
    };
    const stop = () => clearInterval(autoPlay);

    update();
    start();
  }

  /* ───────── TEAM: Smooth Native Scroll ───────── */
  const team = document.getElementById('teamScroll');
  const prev = document.getElementById('teamPrev');
  const next = document.getElementById('teamNext');
  const bar = document.getElementById('teamProgressBar');

  if (team && prev && next) {

    const step = () => {
      const card = team.querySelector('.team-item');
      const gap = parseFloat(getComputedStyle(team).gap || 0);
      return card ? card.offsetWidth + gap : 320;
    };

    prev.onclick = () => team.scrollBy({ left: -step(), behavior: 'smooth' });
    next.onclick = () => team.scrollBy({ left: step(), behavior: 'smooth' });

    const updateBar = () => {
      const max = team.scrollWidth - team.clientWidth;
      bar.style.width = max <= 0 ? '100%' : `${(team.scrollLeft / max) * 100}%`;
    };

    team.addEventListener('scroll', updateBar, { passive: true });
    window.addEventListener('resize', updateBar);
    updateBar();

    /* Desktop drag only (mobile uses native swipe) */
    let down = false, x = 0, left = 0;

    team.addEventListener('mousedown', e => {
      down = true;
      team.classList.add('dragging');
      x = e.pageX;
      left = team.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      down = false;
      team.classList.remove('dragging');
    });

    window.addEventListener('mousemove', e => {
      if (!down) return;
      team.scrollLeft = left - (e.pageX - x);
    });
  }
});
