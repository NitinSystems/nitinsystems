// Native browser scroll restoration for trackpad back-swipe and history navigation
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'auto';
}

function initSmoothScroll() {
  // Smooth scrolling is managed by Lenis momentum engine; native fallback kept auto to prevent dual-interpolation jitter
  if (typeof Lenis === 'undefined') {
    document.documentElement.style.scrollBehavior = 'smooth';
  }
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
      const customGlow = card.getAttribute('data-spotlight-color');
      if (customGlow === 'none') {
        spotlight.style.background = 'transparent';
      } else {
        const glowColor = customGlow || 'rgba(37, 99, 235, 0.08)';
        spotlight.style.background = `radial-gradient(400px circle at ${x}px ${y}px, ${glowColor}, transparent 80%)`;
      }
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

// Mobile Menu Handlers (Refined with Smooth CSS Transition & Flexbox Preservation)
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  if (!drawer) return;
  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    closeMobileMenu();
  } else {
    drawer.style.display = 'flex';
    void drawer.offsetWidth; // Force reflow for smooth CSS entrance
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  if (drawer) {
    drawer.classList.remove('open');
    setTimeout(() => {
      if (!drawer.classList.contains('open')) {
        drawer.style.display = 'none';
      }
    }, 260);
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
  initSystemsFilter();
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

  // Universal Escape Key listener: close drawers, modals, lightboxes, and open dropdowns
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      if (typeof closeMobileMenu === 'function') closeMobileMenu();
      if (typeof closePdfModal === 'function') closePdfModal();
      if (typeof closeImgModal === 'function') closeImgModal();
      if (typeof closeCertLightbox === 'function') closeCertLightbox();
      // Close any active navigation dropdown
      document.querySelectorAll('.dropdown-menu.active, .nav-dropdown-menu.active').forEach(m => m.classList.remove('active'));
    }
  });

  // Dynamic ResizeObserver / Window Resize listener to clean up drawer if viewport expands to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMobileMenu();
    }
  }, { passive: true });
});

// Form Submission & Webhook Handler for Audit / Written Inquiry with Triple-Layer Anti-Duplicate Shield
async function handleAuditSubmit(e) {
  if (e) e.preventDefault();

  const form = document.getElementById('audit-form');
  const submitBtn = form?.querySelector('button[type="submit"]');
  const serviceEl = document.getElementById('audit-service');
  const nameEl = document.getElementById('audit-name');
  const emailEl = document.getElementById('audit-email');
  const industryEl = document.getElementById('audit-industry');
  const stackEl = document.getElementById('audit-stack');
  const bottleneckEl = form?.querySelector('textarea[name="operational_bottleneck"]');

  const name = nameEl?.value?.trim() || '';
  const email = emailEl?.value?.trim() || '';
  const service = serviceEl?.value || '';
  const industry = industryEl?.value?.trim() || '';
  const techStack = stackEl?.value?.trim() || '';
  const bottleneck = bottleneckEl?.value?.trim() || '';

  if (!name || !email) {
    alert('Please fill in required fields (Full Name & Work Email).');
    return false;
  }

  // LAYER 1: Button Lock & Click Debounce
  if (submitBtn) {
    if (submitBtn.disabled) return false;
    submitBtn.disabled = true;
    submitBtn.dataset.originalHtml = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Processing Details...</span> <span class="animate-pulse">●</span>';
    submitBtn.style.opacity = '0.75';
    submitBtn.style.cursor = 'not-allowed';
  }

  // LAYER 2: Browser Session Idempotency Guard (5-minute deduplication cache)
  const submissionSignature = 'lead_sub_' + btoa(unescape(encodeURIComponent(email.toLowerCase() + '_' + service))).replace(/[^a-zA-Z0-9]/g, '').slice(0, 32);
  const previousSubmissionTime = sessionStorage.getItem(submissionSignature);
  const now = Date.now();

  if (previousSubmissionTime && (now - parseInt(previousSubmissionTime, 10)) < 300000) {
    console.info('[Nitin Systems] Duplicate submission prevented by browser session guard.');
    window.location.href = 'thank-you.html';
    return false;
  }

  // Generate unique idempotency key for this transmission
  const idempotencyKey = 'sub_' + now + '_' + Math.random().toString(36).substring(2, 9);
  
  // Mark in sessionStorage before sending
  sessionStorage.setItem(submissionSignature, now.toString());

  // LAYER 3: Structured Payload with Idempotency Token
  const payload = {
    event: 'audit_form_submission',
    idempotency_key: idempotencyKey,
    submitted_at: new Date().toISOString(),
    source_page: window.location.href || 'https://nitinsystems.com/audit.html',
    lead_data: {
      service_interest: service,
      full_name: name,
      work_email: email,
      industry_type: industry,
      current_tech_stack: techStack,
      operational_bottleneck: bottleneck
    }
  };

  const WEBHOOK_URL = 'https://hook.eu1.make.com/3ydi2fjlxni7qlpdtut2r8phkqinyizp';

  // 4-Second Timeout Guard with AbortController
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4000);

    let isSuccess = false;

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    if (res.ok || res.status === 200 || res.status === 204) {
      isSuccess = true;
    } else {
      console.warn('[Nitin Systems Webhook Non-200 Status]', res.status);
    }
  } catch (err) {
    console.warn('[Nitin Systems Webhook]', err);
  } finally {
    clearTimeout(timeoutId);
    if (isSuccess) {
      try { localStorage.removeItem('nitin_pending_lead'); } catch(e) {}
      window.location.href = 'thank-you.html';
    } else {
      // Offline-Resilient Lead Queue & Email Failover Guard
      try {
        localStorage.setItem('nitin_pending_lead', JSON.stringify(payload));
      } catch(e) {}

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = submitBtn.dataset.originalHtml || '<span>Send Project Details</span> <span class="arrow-icon">→</span>';
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'pointer';
      }

      const fallbackCard = document.getElementById('audit-fallback-card');
      const emailBtn = document.getElementById('audit-fallback-email-btn');
      if (fallbackCard) {
        fallbackCard.style.display = 'block';
        if (emailBtn) {
          const subject = encodeURIComponent('Project Scope Inquiry: ' + service);
          const body = encodeURIComponent(
            'Hi Nitin,\n\nI submitted my project scope through your website, but the webhook timed out. Here are my preserved details:\n\n' +
            'Full Name: ' + name + '\n' +
            'Work Email: ' + email + '\n' +
            'Service Needed: ' + service + '\n' +
            'Company / Industry: ' + industry + '\n' +
            'Current Tech Stack: ' + techStack + '\n' +
            'Operational Bottleneck: ' + bottleneck + '\n\n' +
            'Submitted at: ' + new Date().toISOString()
          );
          emailBtn.href = 'mailto:NitinSystems@outlook.com?subject=' + subject + '&body=' + body;
        }
      }
    }
  }

  return false;
}

// Systems Library Category Filter Engine
function initSystemsFilter() {
  const pills = document.querySelectorAll('.system-filter-pill');
  const cards = document.querySelectorAll('.system-card');
  if (!pills.length || !cards.length) return;

  function applyFilter(category) {
    pills.forEach(p => {
      if (p.getAttribute('data-filter') === category) {
        p.classList.add('active');
        p.style.background = 'var(--paper)';
        p.style.borderColor = 'var(--cobalt)';
      } else {
        p.classList.remove('active');
        p.style.background = '#FFFFFF';
        p.style.borderColor = 'var(--line)';
      }
    });

    cards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      if (category === 'all' || cardCat === category) {
        card.style.display = 'block';
        card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      } else {
        card.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(() => {
          if (card.getAttribute('data-category') !== category && category !== 'all') {
            card.style.display = 'none';
          }
        }, 220);
      }
    });
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const filter = pill.getAttribute('data-filter');
      applyFilter(filter);
    });
  });

  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    applyFilter(catParam);
  }
}


/* ==========================================================================
   GLOBAL BIDIRECTIONAL AIR-WAVEFORM & SPECULAR ENGINE (APPLE / LINEAR PHYSICS)
   ========================================================================== */
function initAirWaveformEngine() {
  const targets = document.querySelectorAll('.air-wave-target');
  if (!targets.length) return;

  targets.forEach(target => {
    if (target.querySelector('.air-word-outer')) return;
    const rawText = target.textContent.replace(/\s+/g, ' ').trim();
    if (!rawText) return;
    const words = rawText.split(' ');
    const speed = parseInt(target.getAttribute('data-air-speed') || '30', 10);
    const isHero = target.closest('#hero') !== null;
    
    let htmlBuilder = '';
    words.forEach((word, idx) => {
      const delay = (idx * (speed / 1000)).toFixed(3);
      // Hero H1 preserves exact index (idx >= 3)
      // Subpages & sub-sections accent second half
      const isAccent = isHero 
        ? (idx >= 3) 
        : (words.length <= 3 ? (idx === words.length - 1) : (idx >= Math.floor(words.length / 2)));
      const gradClass = isAccent ? 'air-word-gradient' : '';
      htmlBuilder += '<span class="air-word-outer"><span class="air-word-inner ' + gradClass + '" style="--air-delay: ' + delay + 's;">' + word + '</span></span>';
    });
    target.innerHTML = htmlBuilder;
  });

  // High-Performance Single-Pass Scroll Reveal Observer (Zero Jitter / Lock on Enter)
  const revealTargets = document.querySelectorAll('.air-wave-target, .animate-hero-console, .section-header, .glass-card');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  // Trigger hero/top headlines smoothly on load
  function triggerTopHeadlines() {
    requestAnimationFrame(() => {
      setTimeout(() => {
        document.querySelectorAll('section:first-of-type .air-wave-target, [class*="hero"] .air-wave-target, header + main section .air-wave-target, #hero .air-wave-target, #hero .animate-hero-console').forEach(el => {
          el.classList.add('is-visible');
        });
      }, 50);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', triggerTopHeadlines);
  } else {
    triggerTopHeadlines();
  }
  window.addEventListener('load', triggerTopHeadlines);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAirWaveformEngine);
} else {
  initAirWaveformEngine();
}
