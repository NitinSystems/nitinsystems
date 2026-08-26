/* ==========================================================================
   COMPONENT RENDERERS — NITIN SYSTEMS
   ========================================================================== */

function renderCapabilities(targetId = 'capabilities-grid') {
  const container = document.getElementById(targetId) || document.getElementById('caps-grid');
  if (!container || !SITE_DATA.systems) return;

  container.innerHTML = SITE_DATA.systems.map((s, i) => `
    <div class="glass-card reveal" data-spotlight style="transition-delay: ${i * 0.05}s;">
      <div class="spotlight"></div>
      <div class="card-inner" style="padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
            <div class="animate-float" style="width: 40px; height: 40px; border-radius: 10px; background: var(--cobalt-light); border: 1px solid var(--cobalt-border); color: var(--cobalt); display: flex; align-items: center; justify-content: center; font-size: 1.15rem;">
              ${s.icon}
            </div>
            <span style="font-size: 0.65rem; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.07em; color: var(--ink-soft); background: var(--cloud); padding: 0.2rem 0.6rem; border-radius: 6px; border: 1px solid var(--line);">
              ${s.category}
            </span>
          </div>
          <h3 style="font-size: 1.05rem; margin-bottom: 0.4rem;">${s.title}</h3>
          <p style="font-size: 0.8rem; line-height: 1.6;">${s.shortDesc}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.85rem;">
            ${s.tools.slice(0, 3).map(t => `<span style="font-size: 0.62rem; font-family: var(--font-mono); padding: 0.2rem 0.55rem; border-radius: 4px; background: var(--cloud); border: 1px solid var(--line); color: var(--ink-soft);">${t}</span>`).join('')}
          </div>
        </div>
        <div style="padding-top: 1.25rem; border-top: 1px solid var(--line); margin-top: 1.25rem;">
          <a href="systems.html" style="display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.78rem; font-weight: 600; color: var(--cobalt);">
            View System Blueprint ↗
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCredentials(targetId = 'credentials-grid', maxItems = null) {
  const container = document.getElementById(targetId) || document.getElementById('creds-grid');
  if (!container || !SITE_DATA.credentials) return;

  // If already pre-rendered statically in HTML, don't thrash DOM
  if (container.children.length === 0) {
    const list = maxItems ? SITE_DATA.credentials.slice(0, maxItems) : SITE_DATA.credentials;
    container.innerHTML = list.map((c, i) => `
      <div class="glass-card reveal" data-spotlight style="transition-delay: ${i * 0.05}s;">
        <div class="spotlight"></div>
        <div class="card-inner" style="padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
              <span style="font-size: 0.68rem; font-family: var(--font-mono); font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: var(--cobalt);">${c.issuer}</span>
              <span style="font-size: 0.62rem; font-weight: 600; color: #065F46; background: #D1FAE5; border: 1px solid #A7F3D0; padding: 0.1rem 0.45rem; border-radius: 4px;">✓ ${c.date}</span>
            </div>
            <h3 style="font-size: 1rem; margin-bottom: 0.35rem;">${c.title}</h3>
            <p style="font-size: 0.78rem; line-height: 1.6; color: var(--ink-soft);">${c.description}</p>
            ${c.image ? `<div data-img="${c.image}" data-img-title="${c.title}" class="cert-thumb" style="margin-top: 0.85rem; border-radius: 6px; overflow: hidden; border: 1px solid var(--line); height: 110px; background: #F8FAFC; cursor: pointer;">
              <img src="${c.image}" alt="${c.title}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; object-position: center top; transition: transform 0.3s ease;" />
            </div>` : ''}
          </div>
          <div style="padding-top: 0.85rem; border-top: 1px solid var(--line); margin-top: 0.85rem; display: flex; align-items: center; justify-content: space-between;">
            <span style="font-size: 0.62rem; font-family: var(--font-mono); color: var(--ink-soft);">${c.badgeCode}</span>
            <button data-img="${c.image}" data-img-title="${c.title}" class="cert-thumb btn btn-secondary raycast-hover" style="padding: 0.35rem 0.75rem; font-size: 0.72rem; border-radius: 0.5rem; color: var(--cobalt);">View Certificate 🔍</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Event delegation for cert lightbox
  container.addEventListener('click', function(e) {
    const trigger = e.target.closest('[data-img]');
    if (!trigger) return;
    const imgSrc = trigger.getAttribute('data-img');
    const imgTitle = trigger.getAttribute('data-img-title');
    if (imgSrc) openImgModal(imgTitle || 'Certificate', imgSrc);
  });
}

// PDF modal via event delegation (call once on DOMContentLoaded)
function initPdfTriggers() {
  document.addEventListener('click', function(e) {
    const trigger = e.target.closest('.pdf-trigger');
    if (!trigger) return;
    const title = trigger.getAttribute('data-pdf-title') || 'Blueprint PDF';
    const url = trigger.getAttribute('data-pdf-url') || '#';
    openPdfModal(title, url);
  });
}

function renderFAQ(targetId = 'faq-accordion') {
  const container = document.getElementById(targetId) || document.getElementById('faq-list');
  if (!container || !SITE_DATA.faqs) return;

  container.innerHTML = SITE_DATA.faqs.map(f => `
    <div class="accordion-item reveal" id="${f.id}">
      <button class="accordion-btn" onclick="toggleFaqItem('${f.id}')" aria-expanded="false">
        <span class="question">${f.question}</span>
        <div class="accordion-icon">▾</div>
      </button>
      <div class="accordion-content">
        <p>${f.answer}</p>
      </div>
    </div>
  `).join('');
}

function toggleFaqItem(id) {
  const item = document.getElementById(id);
  if (!item) return;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.accordion-item').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.accordion-btn')?.setAttribute('aria-expanded', 'false');
  });
  if (!wasOpen) {
    item.classList.add('open');
    item.querySelector('.accordion-btn')?.setAttribute('aria-expanded', 'true');
  }
}
