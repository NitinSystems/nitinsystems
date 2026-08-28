# Nitin Systems — Design System: Layout, Spacing, Grids & Viewport Safe Zones
> **Document Type:** Enterprise Layout & Spatial Specification (`Layout System & Spatial Rules`)  
> **Status:** Active Master Single-Source-of-Truth  
> **Applicability:** All web properties, responsive viewports, components, and templates across Nitin Systems.

---

## 1. Responsive Viewport Breakpoints & Device Targets

The spatial engine strictly adapts across 4 distinct viewport tiers. It does not merely scale; it restructures element flow:

| Device Tier | Viewport Range | Layout Configuration | Max Container Width | Nav Behavior |
|---|---|---|---|---|
| **Mobile (Primary)** | `320px` – `640px` | Single-column vertical stack, full-width touch targets | `100%` (padding: `1.25rem`) | 2-element bar: Logo + Hamburger (`☰`) |
| **Phablet & Tablet** | `641px` – `900px` | 2-column balanced grid, compact cards | `90%` of viewport | Collapsed drawer navigation |
| **Laptop / Desktop** | `901px` – `1280px` | 3-column / 4-column multi-grid, horizontal hierarchy | `1152px` | Pinned CSS Grid Navbar (`1fr auto 1fr`) |
| **Ultra-Wide Screens** | `1281px` – `2560px+`| Centered fixed-boundary presentation | `1152px` (Centered) | Fixed max-boundary floating navbar |

---

## 2. Spacing Scale & Spatial Math (8pt Mathematical Base)

All margins, paddings, gaps, and offsets strictly adhere to the unified 8pt spatial token scale:

```css
:root {
  /* Spatial Tokens */
  --space-3xs: 0.125rem; /* 2px  - Micro borders, hairline offsets */
  --space-2xs: 0.25rem;  /* 4px  - Inner chip padding, tight tag spacing */
  --space-xs:  0.5rem;   /* 8px  - Icon-to-label gaps, button inner horizontal */
  --space-sm:  0.75rem;  /* 12px - Input field vertical padding, badge spacing */
  --space-md:  1.0rem;   /* 16px - Base card padding (mobile), standard gap */
  --space-lg:  1.5rem;   /* 24px - Desktop card padding, section sub-headers */
  --space-xl:  2.0rem;   /* 32px - Grid gap separation, card group margin */
  --space-2xl: 3.0rem;   /* 48px - Intermediate section spacing, CTA margins */
  --space-3xl: 4.5rem;   /* 72px - Standard section vertical padding */
  --space-4xl: 6.0rem;   /* 96px - Hero section top padding, major transitions */
  --space-5xl: 8.0rem;   /* 128px- Hero offset to accommodate fixed navbar */
}
```

---

## 3. Container Widths & Horizontal Safe-Zones

To prevent layout stretching on wide screens and eliminate horizontal drag-spill on mobile devices:

1. **Master Container (`.container`):**
   * `max-width: 1152px;`
   * `margin-left: auto; margin-right: auto;`
   * `padding-left: 1.25rem; padding-right: 1.25rem;`
2. **Editorial / Narrow Container (`.container-narrow`):**
   * `max-width: 900px;` (Used for Background, About Narrative, Intake Forms, FAQ)
3. **Hero & Focus Container:**
   * `max-width: 960px;` (Used for Hero and Founder Spotlight)
4. **Mobile Horizontal Safe Zone:**
   * `html, body { width: 100%; overflow-x: clip; }`
   * **Rule:** Zero element may ever exceed `100vw`. Any marquee or animated track must have its parent set to `overflow: hidden; max-width: 100%;`.

---

## 4. Touch Targets & Interaction Boundaries

For touch screens (mobile and tablet):
* **Minimum Touch Target Height:** `48px` on all buttons, links, accordion triggers, and inputs.
* **Button Mobile Stacking:** When viewport is `< 640px`, CTA button groups stack vertically with `width: 100%;` and `margin-bottom: 0.75rem;`.
* **Form Inputs:** Minimum height `48px`, font-size `16px` (prevents automatic iOS Safari zooming on focus).

---

## 5. Border Radius Hierarchy

```css
:root {
  --radius-xs: 0.25rem;  /* 4px  - Small badges, code tags */
  --radius-sm: 0.375rem; /* 6px  - Logo box, micro badges */
  --radius-md: 0.75rem;  /* 12px - Accordion items, input fields */
  --radius-lg: 1.0rem;   /* 16px - Standard cards, profile containers */
  --radius-xl: 1.5rem;   /* 24px - Featured cards, pipeline console */
  --radius-full: 9999px; /* Pill shapes - Navbar inner, status tags, CTAs */
}
```

---

## 6. Z-Index Layer Stack & Elevation Architecture

To ensure overlays, glows, and fixed navigation never collide or obscure interactive elements:

| Layer Level | Z-Index Value | Element Description | Behavior Rule |
|---|---|---|---|
| **Layer 0 (Atmosphere)** | `z-index: 0` | `.ambient-glow`, background dot patterns | `pointer-events: none;` strictly enforced |
| **Layer 1 (Canvas Content)**| `z-index: 1–5`| Section text, cards, grids, buttons | Standard interactive content plane |
| **Layer 2 (Sticky Nav)** | `z-index: 1000`| `#navbar`, floating header bar | Fixed at top, `pointer-events: auto;` on inner |
| **Layer 3 (Drawers & Menus)**| `z-index: 1100`| `#mobile-drawer`, dropdown menus | Slide-out overlay below navbar |
| **Layer 4 (Modals & Lightbox)**| `z-index: 2000`| `#pdf-modal`, `#img-modal`, cert lightboxes | Fullscreen backdrop blur, trap focus |
| **Layer 5 (Toasts & Alerts)**| `z-index: 3000`| System notifications, copy confirmations | Top-level alert layer |
