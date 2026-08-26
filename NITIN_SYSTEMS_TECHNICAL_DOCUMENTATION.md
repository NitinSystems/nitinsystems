# Nitin Systems — Technical Architecture & Implementation Documentation

## 1. Technical Stack Overview
- **Architecture:** Pure Modular HTML5, CSS3, ES6+ JavaScript (Zero framework runtime overhead).
- **Styling Architecture:** Multi-file CSS tokenization (`tokens.css`, `reset.css`, `typography.css`, `layout.css`, `patterns.css`, `animations.css`, `components.css`, `style.css`).
- **Scripting Architecture:** Modular Vanilla JS (`data.js`, `components.js`, `interactions.js`, `main.js`).
- **Execution Mode:** Static execution capable of running via `file://` or static hosting (Netlify, Vercel, GitHub Pages, Cloudflare Pages, S3/CloudFront).

---

## 2. Navigation Stability & Layout Shift (CLS) Fixes
- **Root Cause Problem A (Content Flash):** Above-the-fold content was assigned `opacity: 0` awaiting asynchronous `IntersectionObserver` initialization. Fixed by rendering Hero and Navbar with `opacity: 1` immediately in CSS.
- **Root Cause Problem B (Navbar Shaking/Jumping):** `.nav-item.active` changed font weight and added box shadows dynamically, causing flexbox width recalculation across sibling links. Fixed by establishing a stable `height: 52px` constraint on `#navbar-inner`, stable line-height, and padding.
- **Scroll Smoothness:** Implemented buttery cubic-bezier easing with `scroll-margin-top: 88px` across all section targets to prevent the sticky navbar from obscuring section headings.

---

## 3. Form Handling & Security Architecture
- **Diagnostic Intake Form (`audit.html` & Home):**
  - Client-side validation: Required fields, email pattern, minimum textarea length.
  - Integration readiness: Standard `POST` action pluggable into GoHighLevel webhook, Make.com webhook URL, or Zapier catch hook.
  - Honeypot anti-spam field included.
- **Newsletter Subscription (`newsletter.html` & Home):**
  - Email sanitization and format verification.
  - Direct integration and 1-click redirect to Beehiiv publication endpoint.

---

## 4. Asset Structure
```
assets/
  ├── css/ (8 modular stylesheets)
  ├── js/ (4 modular scripts)
  └── logo/
       ├── nav-logo.png
       ├── favicon.png
       ├── favicon-32x32.png
       ├── apple-touch-icon.png
       └── social-graph-logo.png
```

---

## 5. Security & Privacy Headers
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy` ready: Allows Google Fonts, SVG rendering, and local static scripts without inline vulnerability vectors.
