# Nitin Systems — Permanent Decisions & Knowledge Log
> This file is the single source of truth for all approved decisions made during the build of Nitin Systems website.
> Every important decision, copy approval, design rule, data fact, and "never do this" rule is recorded here.
> Read this file at the start of every session before making any changes.

---

## PROJECT BASICS

- **Project Name:** Nitin Systems
- **Folder Name:** Nitin Systems – Founder-led business
- **Owner:** Nitin Mishra
- **Type:** Solo-led B2B automation systems practice
- **Primary Email:** NitinSystems@outlook.com
- **Website Platform:** Static HTML/CSS/JS (no framework dependency)
- **Deployment Target:** Netlify
- **GitHub/Netlify Username Convention:** `nitinsystems` (NO hyphen. Never use nitin-systems.)
- **Console Label to Use:** `nitinsystems / live-pipeline` (not nitin-systems)

---

## APPROVED COPY — HEADLINES & POSITIONING

### Hero Headline (APPROVED, DO NOT CHANGE WITHOUT EXPLICIT PERMISSION)
> I Build Automation Systems That Keep Leads From Dying in Your Inbox.

### Audience Qualifier (APPROVED)
> SERVING FOUNDERS & SMALL B2B BUSINESSES IN INDIA, US, UK & EUROPE

### Hero Subheadline (APPROVED)
> I design and build CRM-connected workflows, integrations, and automation systems that capture, route, organize, and follow up with leads without relying on manual coordination.

### Primary CTA (APPROVED, STANDARDIZED ACROSS ALL PAGES)
> Discuss a Project →

### Secondary CTA (APPROVED)
> Explore Systems ↗

### Eyebrow Badge (APPROVED)
> B2B AUTOMATION SPECIALIST · NITIN MISHRA

---

## APPROVED COPY — SECTION LABELS

- Founder badge label: **"DIRECT DELIVERY MODEL"** (NOT "Solo Practice Lead", NOT "Founder-Led Practice")
- About page eyebrow: **"ABOUT NITIN MISHRA"** (NOT "About the Practice")
- About page subtitle: **"B2B automation systems specialist. Independently architecting and delivering systems for small business operations."** (NO "practice" word)
- "Who I Work With" section eyebrow: **"CLIENT FIT"**
- Fits label for B2B Service Businesses card: **"Fits: Small & Mid-Size Agencies · Boutique Consultancies · Startups & Growing B2B Service Firms"**
- Fits label for Founder-Led card paragraph: **"Founders who want one specialist doing the work directly, not an agency assigning it to a junior."**

---

## COPY RULES (NEVER VIOLATE)

- **NO em dashes (—).** They look AI-generated. Use commas, periods, or colons instead.
- **NO "practice"** word anywhere on the site. Replace with "operation", "work", "build", or rephrase.
- **NO inflated seniority language** unless it is 100% accurate. Nitin is a solo builder starting out. Honest positioning only.
- **NO vague B2B labels** without size qualifiers. Always say small/mid-size/boutique.
- **NO raw file paths** visible to visitors (e.g., in modals or PDF titles).
- **NO fake blog posts or "Coming Soon" labels.** Either have real content or don't have the section.
- Copy must be **Clear > Clever. Specific > Vague. Benefit-driven > Feature-only.**

---

## SELF-IDENTITY / POSITIONING

- **Model:** Nitin Mishra operates Nitin Systems as a **Solo Builder** — direct, hands-on delivery.
- **NOT a CEO title.** NOT a "senior VP" level. Honest, current positioning.
- **NOT an agency.** No junior staff, no account managers. The person you talk to is the person who builds.
- **Core philosophy:** "Automation is not the goal. Reliable execution is."

---

## APPROVED COLOR PALETTE

| Token | Value | Usage |
|---|---|---|
| `--cobalt` | `#2563EB` | Primary brand blue, CTAs, active states |
| `--cobalt-dark` | `#1D4ED8` | Button hover |
| `--cobalt-light` | `#EFF6FF` | Badge backgrounds, tag chips |
| `--ink` | `#0F172A` | Primary text |
| `--ink-soft` | `#475569` | Secondary text, captions |
| `--paper` | `#FFFFFF` | Card backgrounds |
| `--cloud` | `#F8FAFC` | Section alternating backgrounds |
| `--canvas` | `#EAF3FC` | Hero background, founder section bg |
| `--emerald` | `#10B981` | Success states, verified badges |
| `--rose` | `#F43F5E` | Error states, before/manual state |
| Dark Navy | `#0B132B` | Final CTA panel, tool marquee background |

**Color Rule:** Do NOT use rainbow colors. Max 2 accent colors per section. Sky blue (`--canvas`) for founder section background. Dark navy for final CTA.

---

## APPROVED TOOL STACK MARQUEE ORDER (Priority: strongest first)
1. GoHighLevel
2. Make.com
3. Airtable
4. Zapier
5. HubSpot
6. OpenAI
7. Google AI / Gemini
8. NotebookLM
9. Slack

**Removed:** Zoho, Mailchimp (not core tools)

---

## PROJECT DATA — VERIFIED & APPROVED FACTS

### Project 1: Lead Capture to Booking System
- **Type:** Client Implementation (Real Business Delivery)
- **Tools Used:** GoHighLevel ONLY + Google Calendar + Gmail
- **Make.com: NOT used in this project. NEVER add it.**
- **System Architecture:** Instant form webhook → GHL pipeline update → 2-way Google Calendar booking → SMS/email reminders
- **PDF:** `projects/lead-capture-to-booking-system/case-study/lead-capture-booking-system-case-study.pdf`

### Project 2: Lead Intake & Duplicate Verification System
- **Type:** Portfolio System (Technical Demonstration)
- **Tools Used:** Make.com · Airtable · HubSpot CRM · Webhooks
- **System Architecture:** Webhook listener → Email/Phone normalization → Airtable hash query → Conditional HubSpot sync
- **PDF:** `projects/lead-intake-duplicate-verification/case-study/systems-that-scale.pdf`

### Project 3: AI Customer Journey Operations & Recovery System
- **Type:** Portfolio / Experimental Architecture
- **Tools Used:** Make.com (5 Scenarios) · Airtable (5 Sheets) · Make.com AI Agent
- **NOTE:** Outlook and Gmail are used internally for notifications but are communication tools, not core automation tools. Do NOT list them in the tech stack display.
- **System Architecture:** 5 linked Make.com scenarios + relational Airtable database + AI reasoning agent triage
- **PDF:** `projects/ai-customer-journey-operations-and-recovery-system/case-study/ai-customer-journey-operations-&-recovery-system.pdf`
- **Make.com Scenarios (8 screenshots):** `automation-scenarios/`
- **Airtable Sheets (5 screenshots):** `airtable-screenshots/`

---

## CERTIFICATIONS — APPROVED LIST & ORDER

**Display Order (automation-first):**
1. **Make.com Foundation** — Advanced webhook, JSON, and API orchestration
   - Image: `assets/certifications/make_foundation_certificate.png`
2. **Zapier Intermediate Zaps** — Complex conditional logic, data formatting, and multi-step workflows
   - Image: `assets/certifications/building-intermediate-zaps.png`
3. **Building AI Agents** — Modern LLM-assisted workflow automation
   - Image: `assets/certifications/building-ai-agents.png`
4. **HubSpot Sales Hub Software** — CRM pipeline operations and database schema engineering
   - Image: `assets/certifications/hubspot_sales hub_software_certified.png`
5. **HubSpot Email Marketing** — Lifecycle communications and automated trigger workflows
   - Image: `assets/certifications/email_Marketing_certificate_hubspot.png`
6. **Google Prompting Essentials** — Advanced prompt engineering, context structuring, and LLM behavior control
   - Image: `assets/certifications/google-prompting-essentials.png`
7. **Google AI Essentials** — AI implementation strategy and operational compliance
   - Image: `assets/certifications/google-ai-essential-certification.png`

**REMOVED:** Accenture "AI Capabilities & Limitations" — too basic, does not represent automation expertise.

**Homepage Rule:** Show only TOP 3 certs (Make, Zapier, Building AI Agents). Button: "View Full Credential Vault →" links to About page.
**About Page:** Show all 7 with full lightbox modal on click.

---

## ASSETS & FILE NAMING

- Founder photo: `assets/images/nitin-mishra-image.png` (renamed from wine-suit-image.png)
- Logo folder: `assets/logo/`
- Tools folder: `assets/tools/`
- Certifications folder: `assets/certifications/`

---

## DESIGN RULES

- **Section backgrounds must alternate** — never two identical adjacent sections.
- **Founder section background:** Sky blue `#EAF3FC` gradient behind the card.
- **No "everything white"** — use cloud, canvas, and dark navy to break monotony.
- **Spacing scale:** Section padding 3.5rem–5rem. Element spacing 1rem/1.5rem/2rem.
- **Max container width:** 1100px–1200px (use 960px for narrow content sections).
- **Mobile first.** All buttons min 44px height. Full-width buttons on mobile.
- **Certification cards:** Show thumbnail image preview. Click opens fullscreen lightbox modal. No external links.

---

## NAVIGATION STRUCTURE (APPROVED)

```
Logo [Nitin Systems · Operational · Solo Builder]
Home | Systems ▾ | Approach | About | Insights
                    ↓ DROPDOWN
                    Lead Capture to Booking (Client Implementation)
                    Lead Intake & Deduplication (Portfolio System)
                    AI Customer Journey Ops (Experimental Architecture)
                    → View All Systems & Blueprints
[✉ Email icon] [Discuss a Project →]
```

**Mobile:** Hamburger → Full drawer with same links + CTA button.
**Rule:** Dropdown must be present and functional on ALL pages. Sync navbar HTML across all working files.

---

## INSIGHTS / BLOG DECISION

- **Current status:** No published personal blog posts exist yet.
- **Decision:** Do NOT use "Coming Soon" or "Drafts in Progress" labels.
- **Approved approach:** Show a clean "Systems Notes" placeholder block with Beehiiv subscription CTA.
- **Future plan:** Write real dispatch notes from actual client or build experiences. Quality over quantity. One honest 1,200-word post from a real project beats 10 generic posts.
- **Blogs help SEO.** When written, they should be specific: "How I fixed lead leakage in GoHighLevel" — not generic automation advice.

---

## FUNCTIONAL RULES

- **PDF modals:** Title must show clean project name only. NEVER show internal file path.
- **Certification lightbox:** Use `data-img` and `data-title` attributes + event delegation. Do NOT use inline `onclick` with template literals (causes quote escaping bugs).
- **Tool marquee:** Double the track internally for seamless loop. Add `padding: 0 2rem` to container. `overflow: hidden` strictly enforced.
- **Smooth scroll:** Use CSS only (`html { scroll-behavior: smooth; }`). Do NOT add JS scroll listeners (causes page shake/jitter).
- **Navbar height:** Fixed at `52px`. `font-weight: 500` on all nav links always (no weight change on active state — causes layout shift).
- **Page scrollbar:** `html { overflow-y: scroll; }` always — prevents scrollbar pop.

---

---

## APPROVED MOTION DESIGN SYSTEM (LOCKED & PERMANENT)

- **Engine:** Lenis Inertial Smooth Scrolling (`assets/js/lenis.min.js`) with dynamic `ResizeObserver` sync.
- **Layer 1 (Hero Entrance):** 
  - Unhurried luxury pacing (`1.15s` duration, `cubic-bezier(0.16, 1, 0.3, 1)`).
  - Choreographed sequence: Navbar drop (`0.1s`) → Badge (`0.25s`) → Headline (`0.4s`) → Subheading (`0.6s`) → CTAs (`0.78s`) → Pipeline Console Expansion & Glow (`0.95s`).
- **Layer 2 (Scroll Wave Flow):**
  - Section elements enter with `.wave-reveal` and staggered delays (`0.08s` increments).
- **Layer 3 (Typography Reveal):**
  - Section headings use **Specular Gradient Scroll Sweep + Soft Blur Convergence** (`.shimmer-sweep-title`).
  - Text transitions from `blur(8px)` to `0px` with an optical cobalt/sky light beam sweeping left-to-right (`specularShimmer` 2.4s).
- **Layer 0 (Badge Balloon Levitation):** Ambient 4.5s organic zero-gravity bobbing on all section badges.
- **Layer 4 (3D Card Physics):**
  - All `.glass-card` elements feature **0.55s Magnetic Air-Cushion Hover Float** (`transform: translateY(-8px) scale(1.018)`, `box-shadow: 0 24px 48px -12px rgba(37,99,235,0.18)`, `border-color: rgba(37,99,235,0.5)`).
- **Layer 5 (Navbar Glass Aura):**
  - Frosted transparent crystal glass (`rgba(255, 255, 255, 0.65)`), deep `24px` backdrop blur, and floating ambient blue underglow aura (`box-shadow: 0 8px 32px rgba(37, 99, 235, 0.1)`).

---

## SAFETY & STAGING PROTOCOL

- **ALL builds go into `-working.html` files only.**
- **Main files (`index.html` etc.) are NEVER touched until explicit user approval.**
- **Backup snapshot:** `backups/snapshot-2026-08-25-pre-step1/` (full copy of all files before Step 1)
- **Before every major change:** Create a new timestamped backup in `backups/`.
- **Before/After report:** Always provided after every implementation pass.

---

## STEP PLAN STATUS

| Step | Description | Status |
|---|---|---|
| Step 1 | Hero, Tool Marquee, Dropdown Nav, Homepage Sections | COMPLETE (Motion & Styling Locked) |
| Step 2 | Homepage Visual Storytelling & Conversion Flow | READY TO PROCEED |
| Step 3 | Systems Library & Case Studies (systems-working.html) | NOT STARTED |
| Step 4 | Engineering Methodology Page (approach-working.html) | NOT STARTED |
| Step 5 | About Founder & Insights Journal | NOT STARTED |
| Step 6 | Full-Site QA & Stability Audit | NOT STARTED |

---

*Last updated: 2026-08-25 by Antigravity (AI assistant)*
*Next session: Read this file first before making any changes.*
