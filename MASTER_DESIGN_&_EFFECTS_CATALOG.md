# Nitin Systems — Master Design, Motion & Effects Catalog
**Document ID:** `NS-SPEC-2026-V5`  
**Status:** Active Master Specification (100% Synchronized with Production)  
**Last Verified:** September 20, 2026  

---

## 1. Executive Brand & Design System

Nitin Systems is engineered as a high-authority, founder-led B2B automation systems website. The visual language is disciplined, minimalist, and technical—inspired by the precision of Linear, Apple, and Stripe.

### Core Visual Principles:
1. **Light Page Environment with Deep Technical Contrast:** Crisp, ultra-clean white and light slate canvases paired with deep slate text and high-contrast cobalt accents.
2. **Intentional Depth over Decoration:** Subtle border strokes (`1px solid #E2E8F0`), micro frosted-glass cards, and restrained elevation shadows (`0 8px 30px rgba(0,0,0,0.03)`).
3. **Restrained, Single-Pass Motion:** Every animation serves an orientation purpose. Zero continuous distracting animations, zero looping banner text, and zero reverse-scroll content flashing.
4. **Pure Vector Iconography:** Strict zero-emoji policy. Every icon is an inline monochrome SVG.

---

## 2. Color Palette & Token System

All active components inherit directly from the CSS variables defined in `assets/css/style-working.css`:

```css
:root {
  /* Primary Brand Tokens */
  --cobalt: #2563EB;             /* Primary Brand Accent (Buttons, Highlights, Badges) */
  --cobalt-hover: #1D4ED8;       /* Primary Hover & Active Tab Color */
  --cobalt-light: rgba(37, 99, 235, 0.08); /* Badge & Icon Container Background */
  --cobalt-border: rgba(37, 99, 235, 0.20);/* Accent Card Borders */

  /* Neutral Surface Tokens */
  --paper: #FFFFFF;              /* Pure White (Card Surfaces & Light Stage) */
  --cloud: #F8FAFC;              /* Light Slate Surface (Section Alternations & Card Insets) */
  --line: #E2E8F0;               /* Universal Border Line (Dividers, Outer Card Borders) */

  /* Semantic Typography Tokens */
  --ink: #0F172A;                /* Slate 900 (High-Contrast Primary Headings & Bold Text) */
  --ink-soft: #475569;           /* Slate 600 (Subheadlines, Card Descriptions, Body Copy) */
  --ink-muted: #94A3B8;          /* Slate 400 (Timestamps, Meta Information, Footnotes) */

  /* Status & Functional Accents */
  --emerald: #10B981;            /* Verified Build & Live Intake Success */
  --emerald-light: #ECFDF5;      /* Verified Badge Background */
  --emerald-border: #A7F3D0;     /* Verified Badge Stroke */
  --amber: #D97706;              /* CRM & Middleware Indicator */
  --purple: #7C3AED;             /* AI & Advanced Logic Indicator */
  --orange: #FB923C;             /* Live Webhook / Simulation Accent */
}
```

---

## 3. Typography & Punctuation System

### Font Stacks
*   **Serif Headings (Authority & Editorial Polish):** `'Lora', Georgia, serif`
*   **Body & UI Elements (Readability & Interface Precision):** `'Inter', -apple-system, sans-serif`
*   **Technical Badges, Step Numbers & Telemetry:** `'JetBrains Mono', 'SF Mono', monospace`

### Typography Scale & Hierarchy
*   **H1 Hero Title (Home - 2 Lines):** `clamp(2.05rem, 4.3vw, 3.35rem)` | `line-height: 1.2` | `font-weight: 700` | `.hero-title-home`
*   **H1 Hero Title (Subpages - 1 Line):** `clamp(2.2rem, 4.5vw, 3.3rem)` | `line-height: 1.2` | `font-weight: 700` | `.hero-title-single`
*   **H1 Hero Title (About Page - Grid):** `clamp(2.2rem, 4.5vw, 3.2rem)` | `line-height: 1.15` | `font-weight: 800` | `.hero-title-about`
*   **H1 Case Study Titles (System Pages):** `clamp(2.1rem, 4.2vw, 3.0rem)` | `line-height: 1.2` | `font-weight: 700` | `.hero-title-system`
*   **H2 Section Titles:** `clamp(1.85rem, 3.5vw, 2.5rem)` | `line-height: 1.25` | `font-weight: 700`
*   **H3 Card Titles:** `1.15rem - 1.35rem` | `line-height: 1.3` | `font-weight: 700`
*   **Body Copy:** `0.85rem - 1.02rem` | `line-height: 1.65 - 1.75`
*   **Mono Badges / Microcopy:** `0.65rem - 0.75rem` | `letter-spacing: 0.04em - 0.08em`

### Headline Framing Architecture (Rule of Line Density)
*   **Short Titles (under 6 words):** Strictly **Single-Line** on desktop (`services.html`, `systems.html`, `approach.html`, `insights.html`, `audit.html`). Zero `<br>` tags. Keeps concept unified and prevents dangling fragments.
*   **Long Value Propositions (6+ words):** Deliberate **Two-Line** break (`index.html`). Breaks naturally at punctuation or phrase boundaries for effortless reading.

### Punctuation Standard (Rule 8.2)
*   **Prohibited:** Em-dashes (`—` or `&mdash;`) and unencoded en-dashes (`–`).
*   **Required:** Use standard colons `:`, hyphens `-`, or middle dots ` · ` for clean, readable technical formatting.

---

## 4. Choreographed Motion & Keyframe Catalog

All animations utilize the custom cubic-bezier easing curve `cubic-bezier(0.16, 1, 0.3, 1)` (Apple and Linear deceleration standard) for natural, silky-smooth motion.

### 4.1 Hero Choreography (Above the Fold)

| CSS Class | Animation Name | Duration | Delay | Keyframe Effect |
| :--- | :--- | :--- | :--- | :--- |
| `.animate-hero-nav` | `heroNavDrop` | `1.35s` | `0.15s` | `translateY(-30px)` -> `translateY(0)`, opacity `0` -> `1` |
| `.badge-pill` | `heroBadgeEntrance` + `badgePillSilkyFloat` | `1.15s` / `5.6s` | `0.15s` / `1.3s` | Entrance scale + infinite 60fps ambient float |
| `.animate-hero-title` | `none` (neutralized) | `0s` | `0s` | Static parent container to prevent mid-flight text freezing |
| `h1.air-wave-target .air-word-inner` | `heroAirWaveRise` | `1.15s` | `var(--air-delay)` | Pure CSS GPU wave rise from frame 0 (zero JS dependency) |
| `.animate-hero-sub` | `heroSubFloat` | `1.35s` | `0.65s` | `translateY(24px)` -> `translateY(0)`, opacity `0` -> `1` |
| `.animate-hero-cta` | `heroCtaFloat` | `1.30s` | `0.85s` | `translateY(20px)` -> `translateY(0)`, opacity `0` -> `1` |
| `.animate-hero-console` | `heroConsoleExpand` | `1.55s` | `1.05s` | `translateY(36px) scale(0.95)` -> `translateY(0) scale(1)` |
| `.animate-hero-glow` | `heroGlowBloom` | `1.90s` | `0.40s` | Scale `0.7` -> `1.0`, opacity `0` -> `0.95` |

### 4.2 Pure CSS GPU Air-Wave Engine (`h1.air-wave-target`)

Hero H1 headlines run directly on the browser GPU compositor thread from frame 0. Zero JavaScript script execution or DOMContentLoaded waiting required:

```css
@keyframes heroAirWaveRise {
  0% {
    transform: translateY(115%) rotate(1.5deg);
    opacity: 0;
  }
  100% {
    transform: translateY(0%) rotate(0deg);
    opacity: 1;
  }
}

h1.air-wave-target .air-word-inner {
  display: inline-block;
  color: var(--ink, #0F172A) !important;
  -webkit-text-fill-color: var(--ink, #0F172A) !important;
  animation: heroAirWaveRise 1.45s cubic-bezier(0.12, 1, 0.25, 1) both !important;
  animation-delay: var(--air-delay, 0s) !important;
  will-change: transform, opacity;
}
```


### 4.3 Continuous Liquid Specular Shimmer Engine (`.air-word-inner.air-word-gradient`)

Applied to accented keywords (words 3 through 9 on Hero H1, and the second half of section titles) to produce an oscillating liquid specular light wave:

```css
.air-word-inner.air-word-gradient {
  background: linear-gradient(115deg, #0F172A 5%, #2563EB 35%, #38BDF8 55%, #60A5FA 70%, #0F172A 95%) !important;
  background-size: 250% 100% !important;
  background-clip: text !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  animation: heroAirWaveRise 1.45s cubic-bezier(0.12, 1, 0.25, 1) both,
             continuousSpecularShimmer 4.0s ease-in-out infinite alternate !important;
  will-change: background-position;
}

@keyframes continuousSpecularShimmer {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
```

### 4.4 Subpage Specular Shimmer Headings (`.shimmer-sweep-title`)

Applied to dedicated case studies and secondary page sub-headers for single-pass entry:

```css
.shimmer-sweep-title {
  opacity: 0;
  transform: translateY(24px);
  background: linear-gradient(105deg, #0F172A 0%, #0F172A 35%, #2563EB 50%, #38BDF8 58%, #0F172A 70%, #0F172A 100%);
  background-size: 260% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: opacity 0.95s cubic-bezier(0.16, 1, 0.3, 1), transform 0.95s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform, background-position;
}

.shimmer-sweep-title.in-view {
  opacity: 1;
  transform: translateY(0);
  animation: specularShimmer 2.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
}

@keyframes specularShimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0% 0;
  }
}
```

---

## 5. Single-Pass Scroll Physics & Performance Engine

### 5.1 Elimination of Reverse-Scroll Jitter (Rule 8.4)
*   **The Law of Lock-on-Enter:** Once an element enters the viewport and `.is-visible` / `.in-view` is applied, the JavaScript IntersectionObserver immediately calls `observer.unobserve(entry.target)`.
*   **Prohibition:** Never remove reveal classes on reverse scroll. Content must stay permanently locked in its resting state.

### 5.2 Lenis Inertial Scroll Configuration (`motion-engine.js`)
*   `duration: 1.0` (Snap response, zero rubber-banding lag on Windows mice).
*   `wheelMultiplier: 1.0` (Direct tactile feedback).
*   `smoothWheel: true`, `smoothTouch: false` (Preserves native trackpad and mobile swipe physics).

### 5.3 Offscreen CPU/GPU Throttling (`assets/js/pipeline-console.js`)
*   The SVG packet animation loop (`requestAnimationFrame(animatePacket)`) is monitored by an `IntersectionObserver`.
*   When the console scrolls offscreen, the loop **halts completely**, reserving 100% of GPU rendering power for seamless page scrolling.

---

## 6. Iconography & Telemetry Standards (Rule 8.1)

1.  **Zero Unicode Emojis:**
    *   No `⚡`, `🚀`, `🔥`, `📅`, or consumer emojis anywhere in HTML, JS, buttons, or badges.
    *   All icons must be semantic inline SVGs (`stroke-width: 2` to `2.5`, `stroke-linecap: round`, `stroke-linejoin: round`).
2.  **Structured System Logs:**
    *   Telemetry and system logs must use technical bracketed notation:
        `[SIMULATED INBOUND LEAD]` or `[NODE 01: CAPTURE]`.

---

## 7. Operational Architecture: Console vs. Case Studies

To prevent future AI confusion, the site maintains strict boundary separation:
1.  **The 4 Homepage Console Modes (Universal B2B Automation Engines):**
    *   `intake`: Lead Capture & Booking Pipeline
    *   `dedup`: Inbound Deduplication & CRM Hygiene Pipeline
    *   `followup`: Zero-Drop Follow-Up & Retention Pipeline
    *   `ai`: AI Lead Reactivation & Intent Scoring Pipeline
2.  **The 3 Documented Project Deep-Dives (Client & Self-Initiated Builds):**
    *   `system-lead-capture.html`: Inbound Capture to Calendar Booking
    *   `system-lead-intake.html`: Webhook Deduplication & Database Sync
    *   `system-ai-journey.html`: 7-Scenario Gemini AI Lifecycle Operations

---

## 8. Unified Geographic & Operational Footer Architecture (Rule 8.3)

Standard unified footer brand block across all templates:

```html
<p style="font-size:0.72rem;font-family:var(--font-mono);font-weight:700;color:var(--cobalt);text-transform:uppercase;letter-spacing:0.08em;margin-top:0.65rem;margin-bottom:0;line-height:1.45;">
  BASED IN DELHI NCR, INDIA &middot; OPERATING ON IST (UTC+5:30)
</p>
<p style="font-size:0.75rem;color:var(--ink-soft);margin-top:0.35rem;margin-bottom:0;line-height:1.5;">
  Serving B2B founders and growing teams across India, US, UK &amp; Europe.
</p>
```

---

## 9. Architectural Rule: Strict Separation of Concerns (Rule 9.1)

To ensure long-term stability and eliminate code overlapping:

1. **HTML Files (`*.html`):** Semantic structure and text content ONLY.
   * Prohibited: Inline typography or layout `style="..."` attributes on headings, hero wrappers, or layout grids.
   * Required: Semantic utility classes (e.g. `.hero-title-home`, `.hero-title-single`).
2. **CSS Files (`assets/css/style.css`):** 100% of presentation, typography scales, colors, gradients, layout grids, and keyframe animations.
   * Prohibited: Splitting core typography rules into local `<style>` blocks in HTML head.
   * Required: All scale modifications occur in the centralized CSS token catalog.
3. **JavaScript Files (`assets/js/main.js`):** Interactive event handlers, console simulators, and drawer navigation ONLY.
   * Prohibited: Adding classes or styles that hero headlines must wait for during page load.
   * Required: Above-the-fold entrance effects must be pure CSS GPU compositor animations running from frame 0.

