// Native browser scroll restoration for trackpad back-swipe and history navigation
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'auto';
}

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
  const modal = document.getElementById('cert-lightbox') || document.getElementById('img-modal');
  const modalTitle = document.getElementById('lightbox-title') || document.getElementById('modal-img-title');
  const imgElement = document.getElementById('lightbox-img') || document.getElementById('modal-img-src');

  if (modalTitle && title) modalTitle.textContent = title;
  if (imgElement && imgSrc) imgElement.src = imgSrc;

  if (modal) {
    modal.classList.add('open');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeImgModal(e) {
  if (e && e.target && e.target !== e.currentTarget && !e.target.classList.contains('lightbox-close-btn') && !e.target.classList.contains('modal-close-btn') && !e.target.hasAttribute('onclick')) {
    return;
  }
  const modal = document.getElementById('cert-lightbox') || document.getElementById('img-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function closeCertLightbox() {
  const modal = document.getElementById('cert-lightbox') || document.getElementById('img-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// Mobile Menu Handlers
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  if (!drawer) return;
  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    drawer.classList.remove('open');
    drawer.removeAttribute("aria-hidden"); drawer.style.display = "none";
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  } else {
    drawer.classList.add('open');
    drawer.style.display = "block";
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  if (drawer) {
    drawer.classList.remove('open');
    drawer.removeAttribute("aria-hidden"); drawer.style.display = "none";
  }
  if (backdrop) {
    backdrop.classList.remove('open');
  }
  document.body.style.overflow = '';
}

// Desktop Systems Dropdown Persistent Hover Lock
function initNavDropdown() {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dd => {
    let timeout;
    const menu = dd.querySelector('.nav-dropdown-menu');
    if (!menu) return;

    const openMenu = () => {
      clearTimeout(timeout);
      dd.classList.add('is-open');
    };

    const closeMenu = () => {
      timeout = setTimeout(() => {
        dd.classList.remove('is-open');
      }, 300);
    };

    dd.addEventListener('mouseenter', openMenu);
    dd.addEventListener('mouseleave', closeMenu);
    menu.addEventListener('mouseenter', openMenu);
    menu.addEventListener('mouseleave', closeMenu);
  });
}

// Master Initialization
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initWaveScrollReveals();
  initScrollNavbar();
  initSpotlightCards();
  initAccordions();
  initNavDropdown();

  const hamburger = document.getElementById('hamburger-btn');
  if (hamburger) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  // Close drawer if user presses Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closePdfModal();
      closeImgModal();
    }
  });

  // Dynamic ResizeObserver / Window Resize listener to clean up drawer if viewport expands to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMobileMenu();
    }
  }, { passive: true });
});
