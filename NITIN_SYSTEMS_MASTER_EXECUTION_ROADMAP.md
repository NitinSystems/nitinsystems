# Nitin Systems — Master Phased Execution Roadmap
> **Synthesis Document:** Combines all verified requirements from `NITIN_SYSTEMS_FINAL_BUILD_SPECIFICATION.txt` (ChatGPT) and `Project Handoff Document` (Claude).

---

## 🗺️ Master Phased Roadmap

### 🔴 Phase 1: Mobile Responsiveness & Overflow Elimination (Immediate Priority)
1. **Mobile Navbar Collapse (< 900px):**
   * Hide desktop navigation pills (`.nav-links-wrap`) and desktop CTA (`.nav-actions-wrap`).
   * Show a clean, centered 2-element mobile header: Brand Logo (left) + Hamburger Icon `☰` (right).
   * Implement slide-out mobile drawer with 48px+ touch targets and smooth overlay.
2. **Horizontal Viewport Overflow Fix:**
   * Enforce `html, body { width: 100%; overflow-x: clip; }`.
   * Set `.container`, `.workflow-console`, `.marquee-container`, and `.grid` to `max-width: 100%` with responsive mobile padding.
3. **Modal & Lightbox Mobile Padding:**
   * Adjust `.modal-card` padding from `2.25rem` to `1rem` on screens `< 640px`.
   * Position close button `✕` cleanly in the top bar so certificate images scale to `100%` without clipping.

---

### 🟡 Phase 2: Component Fidelity & Visual Polish
1. **Tool Marquee Gradient Edge Masks:**
   * Add 80px CSS horizontal gradient fade masks (`mask-image: linear-gradient(...)`) on the marquee container so logos smoothly fade at screen boundaries.
   * Replace the temporary NotebookLM icon with a dedicated NotebookLM brand mark.
2. **Operational Pipeline Console SVG Connectors:**
   * Enhance the 5-stage pipeline console with animated SVG connector paths between the live status nodes (`01 Intake → 02 Logic → 03 Data → 04 Action → 05 Handoff`).
3. **Systems Navigation Dropdown:**
   * Implement the floating sub-menu on desktop for `Systems ▾` listing direct links to the 3 flagship case studies and Systems Library.
4. **"Who I Work With" Visual Elevation:**
   * Upgrade the 3 client-fit cards with distinct background tones and left-border cobalt accent lines.

---

### 🟢 Phase 3: Inner Pages Polish & Above-the-Fold Harmonization
1. **About Page 3-Tier Architecture:**
   * Tier 1 (Hero): Centered keynote hero (Badge $\rightarrow$ H1 $\rightarrow$ Subtitle).
   * Tier 2 (On Scroll): Two-column founder profile (Left: Portrait card with role/geography badges; Right: Direct delivery narrative + CTAs).
   * Tier 3 (On Scroll): Full 8-Certification Credential Vault with lightbox.
2. **Motion Parity Across All Pages:**
   * Verify all cards on `systems-working.html`, `approach-working.html`, and `insights-working.html` have `.glass-card` magnetic hover physics and staggered entrance sequence.
3. **Final Production Sync & Git Checkpoint:**
   * Sync all verified changes to main files and deploy to live Netlify URL.
