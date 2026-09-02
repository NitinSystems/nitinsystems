# Nitin Systems — Technical Documentation

> **Complete Infrastructure Blueprint & Architecture Specifications**

---

## 1. Repository Structure & File Hierarchy

```text
├── index.html                           # Production Homepage
├── systems.html                         # Production Systems Directory & R&D Lab
├── system-lead-capture.html             # Case Study: Lead Capture to Booking System
├── system-lead-intake.html              # Case Study: Lead Intake & Qualification Pipeline
├── system-ai-journey.html               # Case Study: AI Customer Journey Operations
├── approach.html                        # Systems Methodology & Process
├── about.html                           # Founder Bio & Sanskrit Name Origin Story
├── insights.html                        # Technical Insights & Articles
├── audit.html                           # Project Inquiry & Audit Request Form
├── privacy.html                         # Privacy Policy
├── terms.html                           # Terms of Service
├── thank-you.html                       # Inquiry Confirmation Page
├── *-working.html                       # Isolated Working Sandbox Files
├── sitemap.xml                          # XML Search Index Map
├── robots.txt                           # Search Crawler Directives
├── netlify.toml                         # Netlify CDN Caching & Header Rules
├── .nojekyll                            # Bypass Jekyll processing on GitHub Pages
├── .gitignore                           # Git Repository Ignore List
└── assets/
    ├── css/style.css                    # Production CSS Design System
    ├── js/main.js                       # Core JavaScript Logic
    ├── js/interactions.js               # Interactive UI Scripts & Modal Controllers
    ├── images/nitin-mishra-image.webp   # WebP Profile Image (40.7 KB)
    ├── logo/nav-logo.webp               # WebP Brand Vector Logo
    └── tools/*.svg                      # Authentic Tool Vectors (Make, GHL, Airtable, etc.)
```

---

## 2. Image & Asset Optimization Rules
- All raster images must use WebP compression.
- Maximum payload limit for profile images: **< 50 KB**.
- Vector tool icons must be authentic SVGs placed in `assets/tools/*.svg`.

---

## 3. Heading & Accessibility Rules
- Heading hierarchy must follow strict sequential order: `H1` → `H2` → `H3` (no skipping levels).
- Mobile drawer navigation must set `display: none` when collapsed to prevent focusable hidden elements.

---

© 2026 Nitin Systems - Founder-Led B2B Automation & Operations Infrastructure.
