/**
 * Nitin Systems — Laboratory Motion & Physics Engine v2.1
 * Features:
 * 1. Lenis Momentum Scroll (1.25s Deceleration Lerp)
 * 2. Bold 3-Stage Cascading Section Reveals (Badge -> H2 Lift & Lens Focus -> Subtitle)
 * 3. Word-by-Word Scroll-Driven Text Illumination (Make Waves / Apple Style)
 * 4. Parallax Multi-Speed Depth Glide on Architecture Cards
 * 5. Magnetic Button Physics
 * 6. Interactive 3D Card Tilt & Dynamic Spotlight Glow
 */

(function () {
  'use strict';

  // 1. INITIALIZE LENIS INERTIAL SMOOTH SCROLL
  let lenisInstance = null;

  function initLenis() {
    if (typeof Lenis === 'undefined') {
      console.warn('[MotionEngine] Lenis library not detected.');
      return;
    }

    // Touch devices (phones & tablets) have native 120Hz hardware momentum.
    // Bypass Lenis on touch to prevent loose inertia or overshoot on mobile flicks.
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth < 768);
    if (isTouch) {
      console.log('[MotionEngine] Touch device detected: using native hardware momentum scrolling.');
      return;
    }

    lenisInstance = new Lenis({
      duration: 1.0,
      wheelMultiplier: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1.0,
      infinite: false,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.documentElement.style.scrollBehavior = 'auto';

    // Integrate with native anchor jumps
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#' && document.querySelector(targetId)) {
          e.preventDefault();
          if (lenisInstance) {
            lenisInstance.scrollTo(targetId, { offset: -40, duration: 1.2 });
          } else {
            const targetEl = document.querySelector(targetId);
            if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    console.log('[MotionEngine] Lenis Momentum Scroll active.');
  }

  // 2. BOLD 3-STAGE CASCADING SECTION REVEALS (SAFE GPU-ACCELERATED, ZERO BLANK FLASH)
  function initSectionHeaderReveals() {
    // Keep headers visible at paint time to prevent blank flicker or delayed pop-in on slow paint
    const headers = document.querySelectorAll('.section-header, .stage-header');
    headers.forEach((h) => {
      const badge = h.querySelector('.category-pill, .hero-status-pill, span[style*="font-mono"]');
      const h2 = h.querySelector('h2');
      const sub = h.querySelector('p');
      if (badge) { badge.style.opacity = '1'; }
      if (h2) { h2.style.opacity = '1'; h2.style.filter = 'none'; }
      if (sub) { sub.style.opacity = '1'; }
    });
  }

  // 3. WORD-BY-WORD SCROLL-DRIVEN TEXT ILLUMINATION (MAKE WAVES STYLE)
  function initWordScrub() {
    const scrubContainers = document.querySelectorAll('[data-text-scrub]');
    if (!scrubContainers.length) return;

    scrubContainers.forEach((container) => {
      const rawText = container.textContent.trim();
      const words = rawText.split(/\s+/);
      
      container.innerHTML = '';
      container.style.lineHeight = '1.7';

      words.forEach((word, idx) => {
        const span = document.createElement('span');
        span.className = 'scrub-word';
        span.textContent = word + ' ';
        span.style.transition = 'color 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
        span.style.color = 'var(--ink-soft, #475569)';
        span.style.opacity = '0.55';
        span.style.display = 'inline';
        span.dataset.index = idx;
        container.appendChild(span);
      });
    });

    function updateWordScrub() {
      const windowHeight = window.innerHeight;

      scrubContainers.forEach((container) => {
        const rect = container.getBoundingClientRect();
        const startTrigger = windowHeight * 0.85; // Start lighting when top reaches 85% screen
        const endTrigger = windowHeight * 0.30;   // Fully lit when bottom reaches 30% screen
        
        let progress = (startTrigger - rect.top) / (startTrigger - endTrigger);
        progress = Math.max(0, Math.min(1, progress));

        const words = container.querySelectorAll('.scrub-word');
        const activeWordCount = Math.floor(progress * words.length);

        words.forEach((word, idx) => {
          if (idx <= activeWordCount) {
            word.style.color = 'var(--ink, #0F172A)';
            word.style.opacity = '1';
          } else {
            word.style.color = 'var(--ink-soft, #475569)';
            word.style.opacity = '0.55';
          }
        });
      });
    }

    if (lenisInstance) {
      lenisInstance.on('scroll', updateWordScrub);
    } else {
      window.addEventListener('scroll', updateWordScrub, { passive: true });
    }
    updateWordScrub();
  }

  // 4. PARALLAX DEPTH GLIDE ON ARCHITECTURE CARDS
  function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    if (!parallaxElements.length) return;

    function updateParallax() {
      const windowHeight = window.innerHeight;

      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax')) || 0.08;
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;
        const distanceFromCenter = elementCenter - screenCenter;

        const translateY = distanceFromCenter * speed * -1;
        el.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
        el.style.willChange = 'transform';
      });
    }

    if (lenisInstance) {
      lenisInstance.on('scroll', updateParallax);
    } else {
      window.addEventListener('scroll', updateParallax, { passive: true });
    }
    updateParallax();
  }

  // 5. STABLE BUTTON HOVER DYNAMICS (No magnetic jitter)
  function initMagneticButtons() {
    // Magnetic cursor pull removed from primary CTA buttons to ensure rock-solid stability and zero click friction
  }

  // 6. ENTERPRISE CARD ELEVATION WITH DYNAMIC RADIAL SPOTLIGHT
  function init3DTiltCards() {
    const cards = document.querySelectorAll('.glass-card:not(.curved-3d-card):not(.animate-hero-console)');

    cards.forEach((card) => {
      // Exclude legal documents
      if (card.classList.contains('legal-card') || card.closest('.legal-card')) {
        return;
      }

      let spotlight = card.querySelector('.spotlight');
      if (!spotlight) {
        spotlight = document.createElement('div');
        spotlight.className = 'spotlight';
        card.appendChild(spotlight);
      }
      spotlight.style.pointerEvents = 'none';

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

        // Clean enterprise vertical lift and subtle shadow elevation (no 3D text warping)
        card.style.transform = 'translate3d(0, -3px, 0)';
        card.style.boxShadow = '0 16px 36px -8px rgba(0, 0, 0, 0.07)';
        card.style.transition = 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translate3d(0, 0, 0)';
        card.style.boxShadow = '';
        card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        spotlight.style.background = 'transparent';
      });
    });
  }

  
  // 6. INTERACTIVE HERO AMBIENT MESH GLOW (MOUSE SPRING FOLLOWER)
  function initHeroGlow() {
    const hero = document.getElementById('hero');
    const glow = hero ? hero.querySelector('.ambient-glow') : null;
    if (!hero || !glow) return;

    glow.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease';
    glow.style.pointerEvents = 'none';

    hero.addEventListener('mousemove', function(e) {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) - rect.width / 2;
      const y = (e.clientY - rect.top) - rect.height / 2;

      glow.style.transform = 'translate3d(calc(-50% + ' + (x * 0.10).toFixed(1) + 'px), ' + (y * 0.10).toFixed(1) + 'px, 0) scale(1.08)';
      glow.style.opacity = '0.85';
    });

    hero.addEventListener('mouseleave', function() {
      glow.style.transform = 'translate3d(-50%, 0, 0) scale(1.0)';
      glow.style.opacity = '0.6';
    });
  }

  // 7. ANIMATED PIPELINE NODE PULSE (LIVE EXECUTION SIMULATOR - EXECUTIVE PACE)
  function initPipelinePulse() {
    const nodes = document.querySelectorAll('.pipeline-flow-container .pipeline-node');
    if (!nodes.length) return;

    // Ensure all nodes have hardware-accelerated initial transform
    nodes.forEach(function(node) {
      node.style.transform = 'translate3d(0, 0, 0)';
      node.style.backfaceVisibility = 'hidden';
      node.style.webkitBackfaceVisibility = 'hidden';
      node.style.willChange = 'transform, border-color, box-shadow';
    });

    let currentNodeIndex = 0;

    setInterval(function() {
      nodes.forEach(function(node, idx) {
        if (idx === currentNodeIndex) {
          node.style.borderColor = 'var(--cobalt, #2563EB)';
          node.style.boxShadow = '0 0 20px rgba(37, 99, 235, 0.4)';
          node.style.transform = 'translate3d(0, -3px, 0)';
          node.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        } else {
          node.style.borderColor = 'rgba(255, 255, 255, 0.12)';
          node.style.boxShadow = 'none';
          node.style.transform = 'translate3d(0, 0, 0)';
          node.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        }
      });

      currentNodeIndex = (currentNodeIndex + 1) % nodes.length;
    }, 3000);
  }

  // MASTER INITIALIZATION
  function startEngine() {
    initLenis();
    initSectionHeaderReveals();
    initWordScrub();
    initParallax();
    initMagneticButtons();
    init3DTiltCards();
    initHeroGlow();
    initPipelinePulse();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startEngine);
  } else {
    startEngine();
  }
})();
