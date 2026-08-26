/* ==========================================================================
   INTERACTIONS & MOTION ENGINE — NITIN SYSTEMS
   ========================================================================== */

let lenisInstance = null;

function initSmoothScroll() {
  // Use native smooth scrolling for instant, silky-smooth responsiveness without wheel lag
  document.documentElement.style.scrollBehavior = 'smooth';
}

function initWaveScrollReveals() {
  // 1. Automatically assign staggered wave delays to grid cards
  document.querySelectorAll('.grid, [style*="grid-template-columns"]').forEach(grid => {
    const children = Array.from(grid.children);
    children.forEach((child, idx) => {
      child.classList.add('wave-reveal');
      const delayClass = `wave-delay-${(idx % 4) + 1}`;
      child.classList.add(delayClass);
    });
  });

  // 2. Add wave-reveal to section headers & cards
  document.querySelectorAll('.section-header, .glass-card, .accordion-item, .workflow-console').forEach(el => {
    if (!el.classList.contains('wave-reveal') && !el.closest('#hero')) {
      el.classList.add('wave-reveal');
    }
  });

  const reveals = document.querySelectorAll('.wave-reveal, .reveal, .shimmer-sweep-title');
  if (!reveals.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => {
      el.classList.add('in-view');
      el.classList.add('visible');
    });
  }
}

function initScrollNavbar() {
  const navbarInner = document.getElementById('navbar-inner');
  if (!navbarInner) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbarInner.classList.add('scrolled');
    } else {
      navbarInner.classList.remove('scrolled');
    }
  }, { passive: true });
}

function initMobileMenu() {
  const btn = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('mobile-drawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) drawer.classList.remove('open');
}

function initSpotlightCards() {
  const cards = document.querySelectorAll('[data-spotlight]');
  cards.forEach(card => {
    const spotlight = card.querySelector('.spotlight');
    if (!spotlight) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.14), transparent 70%)`;
    });
  });
}

function openPdfModal(title, url) {
  const modal = document.getElementById('pdf-modal');
  const titleEl = document.getElementById('modal-pdf-title');
  const openLink = document.getElementById('modal-pdf-open');
  const downloadLink = document.getElementById('modal-pdf-download');
  if (titleEl) titleEl.textContent = title || 'Architecture Blueprint';
  if (openLink) openLink.href = url || '#';
  if (downloadLink) downloadLink.href = url || '#';
  if (modal) modal.classList.add('open');
}

function closePdfModal(e) {
  const modal = document.getElementById('pdf-modal');
  if (!modal) return;
  if (!e || e.target === modal || e.currentTarget.classList.contains('modal-close-btn')) {
    modal.classList.remove('open');
  }
}

function openImgModal(title, src) {
  const modal = document.getElementById('img-modal');
  const titleEl = document.getElementById('modal-img-title');
  const imgEl = document.getElementById('modal-img-src');

  if (titleEl) titleEl.textContent = title;
  if (imgEl) imgEl.src = src;
  if (modal) modal.classList.add('open');
}

function closeImgModal(e) {
  const modal = document.getElementById('img-modal');
  if (!modal) return;
  if (!e || e.target === modal || e.currentTarget.classList.contains('modal-close-btn')) {
    modal.classList.remove('open');
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const pdfModal = document.getElementById('pdf-modal');
    if (pdfModal) pdfModal.classList.remove('open');
    const imgModal = document.getElementById('img-modal');
    if (imgModal) imgModal.classList.remove('open');
  }
});

function handleIntakeFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = '✓ Submitting Diagnostic Intake...';
    submitBtn.style.background = 'var(--emerald)';
  }

  setTimeout(() => {
    window.location.href = 'thank-you.html';
  }, 600);
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const emailInput = form.querySelector('input[type="email"]');
  const successBox = document.getElementById('newsletter-success');

  if (emailInput && emailInput.value.includes('@')) {
    if (form) form.style.display = 'none';
    if (successBox) successBox.style.display = 'block';
    setTimeout(() => {
      window.open('https://nitinmishra.beehiiv.com/', '_blank');
    }, 1200);
  }
}

// Mobile Hamburger Menu Toggle
window.toggleMobileMenu = function() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('hamburger-btn');
  if (!menu) return;
  menu.classList.toggle('open');
  if (btn) {
    btn.innerHTML = menu.classList.contains('open') ? '✕' : '☰';
  }
};
