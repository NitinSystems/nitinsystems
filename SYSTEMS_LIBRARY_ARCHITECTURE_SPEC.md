# Systems Library Architecture & Data-Driven Category Specification

**Entity:** Nitin Systems  
**Author:** Nitin Mishra  
**Standard Version:** 1.0 (Production Blueprint Standard)  
**Location:** `lab-prototypes/01-waves-motion-engine/SYSTEMS_LIBRARY_ARCHITECTURE_SPEC.md`

---

## 1. Architectural Philosophy

The **Systems Library** (`systems.html`) is the core technical demonstration hub for Nitin Systems. It operates as an interactive case study and blueprint registry.

To maintain scalability from 3 initial systems to 20+ client builds without visual clutter or breaking navigation:
* **The Hero section uses Universal Domain Filters** (not individual project buttons).
* **Project cards are categorized via HTML `data-category` attributes**.
* **Filtering happens client-side with zero page reloads and zero layout shifts**.

---

## 2. The 5 Universal Automation Categories

Every system or workflow built by Nitin Systems must belong to one of these 5 standard categories:

| Category Key (`data-category`) | Display Badge Label | Covered Scope & Use Cases |
| :--- | :--- | :--- |
| `all` | **All Architecture Blueprints** | Global view showing all published blueprints. |
| `intake` | **Inbound Intake & Booking** | Multi-channel intake forms, Cal.com scheduling, webhook listeners, automated reminder cadences (12h/1h/5m), anti-no-show flows. |
| `crm` | **CRM & Data Routing** | Make.com/Zapier logic, Airtable deduplication, HubSpot/GoHighLevel pipeline routing, deal stage syncing, schema normalization. |
| `ai-ops` | **AI Workflow Ops** | AI lead qualification, OpenAI/Claude payload analysis, meeting summary extraction, journey recovery, pipeline triage. |
| `growth` | **Outreach & Content Systems** | Automated multi-channel publishing, social triggers, cold email / CRM sync, notification alert bots (Slack/WhatsApp). |

---

## 3. How to Add a New Project Card

Whenever a new system or case study is added to `systems.html`, follow this exact structure:

```html
<!-- SYSTEM [NUMBER]: [TITLE] -->
<div class="glass-card reveal system-card" data-category="[CATEGORY_KEY]" style="padding: 2.5rem 2rem; border-top: 4px solid var(--[COLOR]);">
  <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
    <div style="display: flex; align-items: center; gap: 0.75rem;">
      <span style="font-size: 0.72rem; font-family: var(--font-mono); font-weight: 700; color: var(--[COLOR]); background: var(--[COLOR]-light); border: 1px solid var(--[COLOR]-border); padding: 0.25rem 0.75rem; border-radius: 9999px;">
        [Badge Type: Client Implementation / Architecture Blueprint]
      </span>
      <span style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--ink-soft);">
        [Operational Domain]
      </span>
    </div>
    <span style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--cobalt);">
      [Tech Stack: e.g. Make.com · Airtable · HubSpot · Webhooks]
    </span>
  </div>
  <h2 style="font-size: 1.4rem; color: var(--ink); margin-bottom: 0.6rem;">[System Title]</h2>
  <p style="font-size: 0.9rem; color: var(--ink-soft); line-height: 1.7; margin-bottom: 1.25rem;">
    [Benefit-driven problem statement and operational outcome description.]
  </p>
  <!-- Grid Matrix: Problem, Architecture, Deliverables -->
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; background: var(--cloud); padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem;">
    <div><span style="font-size: 0.68rem; font-family: var(--font-mono); color: var(--ink-soft); text-transform: uppercase;">Core Problem</span><div style="font-size: 0.8rem; font-weight: 600; color: var(--ink); margin-top: 0.25rem;">[Friction]</div></div>
    <div><span style="font-size: 0.68rem; font-family: var(--font-mono); color: var(--ink-soft); text-transform: uppercase;">System Architecture</span><div style="font-size: 0.8rem; font-weight: 600; color: var(--ink); margin-top: 0.25rem;">[Flow]</div></div>
    <div><span style="font-size: 0.68rem; font-family: var(--font-mono); color: var(--ink-soft); text-transform: uppercase;">Deliverable Artifacts</span><div style="font-size: 0.8rem; font-weight: 600; color: var(--ink); margin-top: 0.25rem;">[Artifacts]</div></div>
  </div>
  <!-- CTAs -->
  <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center;">
    <a href="[case-study-page.html]" class="btn btn-primary raycast-hover" style="font-size: 0.82rem; padding: 0.65rem 1.5rem;">
      <span>Read Full Case Study Breakdown →</span>
    </a>
  </div>
</div>
```

---

## 4. Filter Engine Integration (`interactions-working.js`)

The filter script operates using simple vanilla JavaScript:
1. Listens for clicks on any button with `.system-filter-pill`.
2. Reads `data-filter` from the button.
3. Iterates over all `.system-card` elements in `#catalog`:
   * If `filter === 'all'` or `card.getAttribute('data-category') === filter`, the card is visible (`display: block`, `opacity: 1`).
   * Otherwise, the card is hidden (`display: none`, `opacity: 0`).
4. Updates active pill visual styling.
5. If URL contains `?category=[KEY]`, automatically applies the filter on initial load.

---

## 5. Rules & Boundaries
* **DO NOT** hardcode individual project names as hero jump links.
* **DO NOT** add new category keys without updating this specification and the hero pills.
* **ALWAYS** ensure every card has a valid `data-category` attribute matching one of the 5 canonical keys.
