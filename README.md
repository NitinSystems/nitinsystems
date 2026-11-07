# Nitin Systems

> **Founder-Led B2B Automation & Operations Systems**

Nitin Systems is an independent systems practice founded and operated directly by **Nitin Mishra** (Founder & Automation Systems Specialist). We design, architect, and deliver custom automation workflows, CRM systems, AI-assisted tools, and operational applications for B2B service businesses.

---

## 1. Core Service Categories

1. **Lead & Customer Management Systems**  
   Lead capture, qualification, CRM workflows (GoHighLevel, HubSpot), two-way calendar booking, routing, and follow-up.
2. **Workflow & Operations Automation**  
   Business process automation, Make.com workflows, custom webhook pipelines, Airtable data management, and system integrations.
3. **AI-Assisted Operational Systems**  
   Custom on-site consultative AI agents, prompt routing, task assistance, and AI-supported workflow components.
4. **Custom Applications & Conversion Systems**  
   Client-facing booking applications, operational cockpits, internal dashboards, landing pages, and conversion funnels.

---

## 2. Systems Portfolio & Technical Classifications

To maintain factual integrity, all documented builds in this repository are classified according to their actual deployment status:

- **System 01: Lead Capture to Booking System (Real-World Implementation)**  
  A documented real-world implementation featuring lead form capture, two-way Google Calendar synchronization, automated email confirmations, and appointment reminders. The frontend landing page was developed and verified, while email notifications and calendar booking served as the operational core.
  - *Stack:* GoHighLevel, Google Calendar, Email Notification Triggers.

- **System 02: Lead Intake & Duplicate Verification System (Self-Initiated Architecture)**  
  A self-initiated Make.com ingestion architecture with exactly two scenarios. Features email normalization, deduplication checks against existing records, and selective CRM property synchronization.
  - *Stack:* Custom Webhooks, Make.com (2 Scenarios), Airtable, HubSpot CRM.

- **System 03: Customer Journey Operations System (Architecture Case Study)**  
  An architecture case study (not a client deployment) modeling a 7-scenario operational workflow in Make.com with relational Airtable tables, monitoring customer lifecycle status and triggering automated recovery actions.
  - *Stack:* Make.com, Airtable, Scenario Logic.

- **System 04: Consultative AI Systems Agent (Demonstrable On-Site Build)**  
  An on-site consultative AI agent live on `nitinsystems.com`. Built with a sliding-window token memory, strict qualification gate, and direct webhook dispatch to CRM.
  - *Stack:* Vercel Serverless Function (`/api/chat.js`), Gemini API, Make.com Dispatch Webhook.

- **Custom Application: Operations Cockpit (Active Development)**  
  A proprietary operational interface (`nitin-systems-operations-cockpit.vercel.app`) designed to visualize, monitor, and manage business workflows. Maintained as a custom application capability currently under active development.

---

## 3. Website Route Architecture (14 Production Templates)

The website is composed of 14 clean, standalone HTML templates:

- **Core Authority & Engagement Pages:**
  - `index.html`: Primary homepage establishing the B2B Automation & Operations Systems category.
  - `services.html`: Modular breakdown of the four core service capabilities.
  - `systems.html`: Complete directory of systems proof, case studies, and architecture blueprints.
  - `approach.html`: Documented 6-milestone engineering and delivery methodology.
  - `about.html`: Founder narrative, verified credentials, and solo delivery model.
  - `audit.html`: Diagnostic project scope submission and discovery scheduling.
  - `insights.html`: Technical dispatches and operational field notes.
- **Dedicated System Deep Dives:**
  - `system-lead-capture.html`: Implementation documentation for System 01.
  - `system-lead-intake.html`: Architecture documentation for System 02.
  - `system-ai-journey.html`: Case study documentation for System 03.
  - `system-ai-agent.html`: Case study documentation for System 04.
- **Utility & Compliance Pages:**
  - `privacy.html`: Data handling and client confidentiality standards.
  - `terms.html`: Commercial engagement terms.
  - `thank-you.html`: Post-submission confirmation.

---

## 4. Technology Stack & Runtime Standards

- **Frontend Architecture:** Semantic HTML5, CSS3 Custom Properties (Design Tokens), Vanilla JavaScript. Built without client-side framework overhead.
- **Asset Optimization:** Self-hosted preloaded WOFF2 fonts (Inter, Lora, JetBrains Mono) with `font-display: block`. WebP graphics for responsive image loading.
- **Serverless API Gateway:** `/api/chat.js` running on Vercel Node.js runtime with 30-second execution headroom.
- **Routing Rules:** Configured via `vercel.json` (`cleanUrls: true`, `trailingSlash: false`).

---

## 5. Analytics, Tag Management & Webhooks

- **Google Tag Platform:** Google Tag Manager container `GTM-N3SKJNR2` integrated across all 14 templates immediately after `<head>`.
- **Measurement Destination:** Google Analytics 4 Measurement ID `G-093KMV619R` pre-compiled and routed through GTM.
- **Form Dispatch:** Direct HTTPS POST routing to Make.com webhook endpoints with client-side payload normalization.

---

## 6. Hosting, DNS & Deployment Architecture

- **Primary Production Domain:** `https://www.nitinsystems.com`
- **Canonical Redirect:** Apex `nitinsystems.com` permanently redirects (308) to `www.nitinsystems.com`.
- **DNS Provider:** Cloudflare DNS (DNS-only / Grey Cloud mode pointing CNAME to Vercel).
- **Hosting Platform:** Vercel (Edge network, automated deployments triggered from the `main` Git branch).
- **Historical Note on GitHub Pages:** Legacy repository URLs (`nitinsystems.github.io/nitinsystems/` and `nitinsystems.github.io/nitinmishra/`) exist as earlier static staging mirrors and are not active production endpoints.

---

## 7. Maintenance & Code Standards

- **Character Encoding:** Strict UTF-8 without BOM. Zero non-ASCII corrupted characters.
- **Icons & Symbols:** Scalable inline SVGs or standard HTML character entities (`&rarr;`, `&check;`, `&#9662;`).
- **Deployment Protocol:**
  1. Test changes locally in a clean preview environment.
  2. Verify Git diffs to confirm zero unintentional modifications.
  3. Commit locally to `main`.
  4. Push origin to trigger the Vercel production deployment.
