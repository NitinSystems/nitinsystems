# Nitin Systems — Pattern Craft & Geometric Background Design Catalog

> **Reference Repository & Asset Guide**  
> This file permanently documents the decorative, geometric, gradient, and motion patterns curated for **Nitin Systems**. It includes both original dark source snippets and their engineered, high-conversion light-theme enterprise counterparts.

---

## 1. Orbit Glow Motion Engines

### A. Original Dark Orbit Glow (React / Tailwind Snippet)
*Source: Pattern Craft collection*
```html
<div className="min-h-screen w-full bg-[#020617] relative">
  <style>{`
    @keyframes reactbd-orbit {
      0% { background-position: 10% 20%, 90% 80%, 50% 50%; }
      50% { background-position: 80% 30%, 20% 70%, 50% 50%; }
      100% { background-position: 10% 20%, 90% 80%, 50% 50%; }
    }
  `}</style>
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.32), transparent 28%),
        radial-gradient(circle at 80% 75%, rgba(99, 102, 241, 0.28), transparent 32%),
        radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.2), transparent 55%)
      `,
      backgroundSize: "140% 140%, 140% 140%, 100% 100%",
      animation: "reactbd-orbit 18s linear infinite",
    }}
  />
</div>
```

### B. Engineered Light-Theme Multi-Hue Orbit Glow (Production Ready)
*Best for: Hero Sections, Master Value Propositions*
```css
@keyframes nitin-orbit-light {
  0%   { background-position: 15% 25%, 85% 75%, 50% 50%; }
  50%  { background-position: 80% 35%, 20% 65%, 50% 50%; }
  100% { background-position: 15% 25%, 85% 75%, 50% 50%; }
}

.pattern-orbit-glow-light {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-color: #FFFFFF;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.14), transparent 32%),   /* Sky Blue */
    radial-gradient(circle at 80% 75%, rgba(129, 140, 248, 0.10), transparent 36%),  /* Soft Violet / Iris */
    radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.08), transparent 55%);   /* Luminous Cyan */
  background-size: 140% 140%, 140% 140%, 100% 100%;
  animation: nitin-orbit-light 22s ease-in-out infinite;
}
```

---

## 2. Radial Gradient Horizons & Blooms

### A. Bottom-Up Horizon Bloom (Transition into Conversion & Footers)
*Original snippet adaptation: `radial-gradient(125% 125% at 50% 90%, ...)`*
```css
/* Placed above CTA modules or footers to illuminate the bottom canvas */
.pattern-horizon-bloom {
  position: relative;
  background: 
    radial-gradient(110% 70% at 50% 100%, rgba(99, 102, 241, 0.11) 0%, rgba(56, 189, 248, 0.06) 45%, rgba(255, 255, 255, 0) 100%),
    #FFFFFF;
}
```

### B. Editorial Corner Glow (Asymmetrical Accent)
*Best for: About Page, Case Studies, Insights, Contact Headers*
```css
/* Subtle top-right or top-left luminous corner */
.pattern-corner-glow-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  height: 500px;
  pointer-events: none;
  background: radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.12), transparent 70%);
}

.pattern-corner-glow-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 500px;
  height: 500px;
  pointer-events: none;
  background: radial-gradient(circle at 20% 20%, rgba(129, 140, 248, 0.10), transparent 70%);
}
```

### C. Soft Blue Radial Spotlight (Central Reading Zone)
```css
.pattern-center-spotlight {
  background: 
    radial-gradient(circle at 50% 40%, rgba(37, 99, 235, 0.07) 0%, rgba(255, 255, 255, 0) 65%),
    #FFFFFF;
}
```

---

## 3. Geometric Blueprint Grids & Dashed Systems

### A. Dashed Center-Fade Grid (Architectural / High-Ticket)
*Best for: Problem Diagnostic Sections, Workflow Breakdowns, Tech Architecture*
```css
.pattern-dashed-center-fade {
  position: relative;
  background-color: #F8FAFC;
}

.pattern-dashed-center-fade::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: 
    linear-gradient(to right, rgba(30, 58, 138, 0.09) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(30, 58, 138, 0.09) 1px, transparent 1px);
  background-size: 48px 48px;
  /* Masks out the central reading area so text is 100% razor sharp */
  -webkit-mask-image: radial-gradient(ellipse 85% 75% at 50% 50%, #000 45%, transparent 95%);
  mask-image: radial-gradient(ellipse 85% 75% at 50% 50%, #000 45%, transparent 95%);
}
```

### B. Dashed Bottom-Fade Grid
*Best for: Hero Headers leading down to Metric counters or Partner bars*
```css
.pattern-dashed-bottom-fade {
  position: relative;
  background-color: #FFFFFF;
}

.pattern-dashed-bottom-fade::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: 
    linear-gradient(to right, rgba(30, 58, 138, 0.07) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(30, 58, 138, 0.07) 1px, transparent 1px);
  background-size: 40px 40px;
  -webkit-mask-image: linear-gradient(to bottom, #000 20%, transparent 85%);
  mask-image: linear-gradient(to bottom, #000 20%, transparent 85%);
}
```

### C. Precision Micro-Dotted Radial Canvas
*Best for: Clean Modern Enterprise Canvas (Single-layer, zero moiré)*
```css
.pattern-dots-radial-clean {
  position: relative;
  background-color: #FFFFFF;
}

.pattern-dots-radial-clean::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, rgba(30, 58, 138, 0.10) 1.2px, transparent 1.2px);
  background-size: 24px 24px;
  -webkit-mask-image: radial-gradient(ellipse 90% 80% at 50% 40%, #000 65%, transparent 95%);
  mask-image: radial-gradient(ellipse 90% 80% at 50% 40%, #000 65%, transparent 95%);
}
```

---

## 4. Enterprise Color Mixing Formula (Light Theme)

| Role | Color Name | Hex / RGBA | Strategic Application |
| :--- | :--- | :--- | :--- |
| **Primary Base** | Pure Crisp White | `#FFFFFF` | Core reading areas, card bodies, hero canvas |
| **Cool Accent Base** | High-Clarity Ice | `#F8FAFC` | Blueprint diagnostic sections (replaces dusty slate) |
| **Brand Royal Blue** | Deep Cobalt | `#1E3A8A` / `rgba(30, 58, 138, 0.10)` | Micro-dots, structural grid lines, architectural borders |
| **Luminous Ambient 1** | Sky Blue | `#38BDF8` / `rgba(56, 189, 248, 0.14)` | Primary moving sphere in hero orbit, corner blooms |
| **Luminous Ambient 2** | Soft Royal Iris / Violet | `#818CF8` / `rgba(129, 140, 248, 0.10)` | Secondary moving sphere in orbit, pre-footer horizon |
| **Luminous Ambient 3** | Electric Ice Cyan | `#06B6D4` / `rgba(6, 182, 212, 0.08)` | Center orbital diffuse light |

---

## 5. Deployment Mapping Rules

1. **Rule of Contrast:** Never let background grids exceed 12% opacity on light theme. Backgrounds must whisper; typography must speak.
2. **Rule of Singularity:** Never apply two different dotted patterns or two different grid sizes to the same container (prevents moiré distortion).
3. **Rule of Clean Transitions:** Always use radial or linear alpha masks (`-webkit-mask-image`) so decorative patterns softly dissolve into pure white before touching neighboring sections.
