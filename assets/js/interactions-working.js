/* ==========================================================================
   INTERACTIONS & MOTION ENGINE — NITIN SYSTEMS (STAGING ISOLATED)
   ========================================================================== */

function initSmoothScroll() {
  // Use native smooth scrolling for instant, silky-smooth responsiveness without wheel lag
  document.documentElement.style.scrollBehavior = 'smooth';
}

function initWaveScrollReveals() {
  // 1. Automatically assign staggered wave delays to grid cards
  document.querySelectorAll('.grid, [style*="grid-template-columns"]').forEach(grid => {
    const children = Array.from(grid.children);
    children.forEach((child, idx) => {
      if (!child.classList.contains('wave-reveal') && !child.closest('#hero')) {
        child.classList.add('wave-reveal');
        const delayClass = `wave-delay-${(idx % 4) + 1}`;
        child.classList.add(delayClass);
      }
    });
  });

  // 2. Add wave-reveal to section headers & cards
  document.querySelectorAll('.section-header, .glass-card, .accordion-item, .workflow-console, .stage-card, .capability-card, .insight-topic-card').forEach(el => {
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

function initSpotlightCards() {
  const cards = document.querySelectorAll('.glass-card');
  cards.forEach(card => {
    let spotlight = card.querySelector('.spotlight');
    if (!spotlight) {
      spotlight = document.createElement('div');
      spotlight.className = 'spotlight';
      card.appendChild(spotlight);
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(37, 99, 235, 0.08), transparent 80%)`;
    });
  });
}

function initAccordions() {
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');

      // Close all other items in the same container
      const parent = item.parentElement;
      if (parent) {
        parent.querySelectorAll('.accordion-item.open').forEach(openItem => {
          if (openItem !== item) openItem.classList.remove('open');
        });
      }

      item.classList.toggle('open', !isOpen);
    });
  });
}

// PDF Modal Handlers
function openPdfModal(title, pdfUrl) {
  const modal = document.getElementById('pdf-modal');
  const modalTitle = document.getElementById('modal-pdf-title');
  const openLink = document.getElementById('modal-pdf-open');
  const downloadLink = document.getElementById('modal-pdf-download');

  if (modalTitle && title) modalTitle.textContent = title;
  if (openLink && pdfUrl) openLink.href = pdfUrl;
  if (downloadLink && pdfUrl) downloadLink.href = pdfUrl;

  if (modal) modal.classList.add('open');
}

function closePdfModal(e) {
  if (e && e.target && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn')) {
    return;
  }
  const modal = document.getElementById('pdf-modal');
  if (modal) modal.classList.remove('open');
}

// Certificate / Image Lightbox Handlers
function openImgModal(title, imgSrc) {
  const modal = document.getElementById('img-modal') || document.getElementById('cert-lightbox');
  const modalTitle = document.getElementById('modal-img-title') || document.getElementById('lightbox-title');
  const imgElement = document.getElementById('modal-img-src') || document.getElementById('lightbox-img');

  if (modalTitle && title) modalTitle.textContent = title;
  if (imgElement && imgSrc) imgElement.src = imgSrc;

  if (modal) {
    modal.classList.add('open');
    modal.style.display = 'flex';
  }
}

function closeImgModal(e) {
  if (e && e.target && e.target !== e.currentTarget && !e.target.classList.contains('modal-close-btn') && !e.target.hasAttribute('onclick')) {
    return;
  }
  const modal = document.getElementById('img-modal') || document.getElementById('cert-lightbox');
  if (modal) {
    modal.classList.remove('open');
    modal.style.display = 'none';
  }
}

function closeCertLightbox() {
  closeImgModal();
}

// Mobile Menu Handlers
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.classList.toggle('open');
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.classList.remove('open');
  }
}

// Master Initialization
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initWaveScrollReveals();
  initScrollNavbar();
  initSpotlightCards();
  initAccordions();

  const hamburger = document.getElementById('hamburger-btn');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
  }
});
