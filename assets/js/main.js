/* ==========================================================================
   APP INITIALIZATION — NITIN SYSTEMS (APPLE HERO + WAVE SCROLL ENGINE)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lenis Inertial Smooth Scroll
  if (typeof initSmoothScroll === 'function') initSmoothScroll();

  // 2. Initialize Dynamic Components
  if (typeof renderCapabilities === 'function') renderCapabilities();

  // Homepage: show only top 3 certifications; About page: show all 8
  if (typeof renderCredentials === 'function') {
    const isHomepage = !!document.getElementById('credentials-grid');
    const isAboutPage = !!document.getElementById('creds-grid');
    if (isHomepage) renderCredentials('credentials-grid', 3);
    if (isAboutPage) renderCredentials('creds-grid', null);
  }

  if (typeof renderFAQ === 'function') renderFAQ();
  if (typeof initPdfTriggers === 'function') initPdfTriggers();

  // 3. Initialize Staggered Wave Scroll Reveals
  if (typeof initWaveScrollReveals === 'function') initWaveScrollReveals();

  // 4. Initialize UI & Micro-interactions
  if (typeof initScrollNavbar === 'function') initScrollNavbar();
  if (typeof initMobileMenu === 'function') initMobileMenu();
  if (typeof initSpotlightCards === 'function') initSpotlightCards();

  // Dynamic Year in Footer
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
