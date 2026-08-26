export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'CRM & Pipelines' | 'Lead Qualification' | 'Booking Infrastructure';
  shortDesc: string;
  fullDesc: string;
  outcome: string;
  techStack: string[];
  pdfFileName: string;
  pdfUrl: string;
  pdfTitle: string;
  previewImage: string;
  isFlagship?: boolean;
  architectureSteps: { title: string; desc: string }[];
  metrics: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    slug: "ai-customer-journey-operations-and-recovery-system",
    title: "AI Customer Journey Operations & Recovery System",
    category: "Lead Qualification",
    isFlagship: true,
    shortDesc: "Self-engineered Revenue Operations Architecture featuring 5 automated Make.com scenarios, 5 structured Airtable database sheets, and a dedicated Make.com AI Agent for automated journey monitoring and leak recovery.",
    fullDesc: "An AI-assisted Revenue Operations Architecture designed to monitor customer journey lifecycle state, detect revenue leakage, apply AI-assisted decisioning via custom Make.com AI Agent, manage human escalations, and maintain closed-loop operational visibility across 5 distinct Airtable data sheets.",
    outcome: "Monitors 100% of customer journey touchpoints, automatically flags revenue leakage events, and executes AI-driven recovery workflows across 5 interconnected scenarios.",
    techStack: ["Make.com (5 Scenarios)", "Airtable (5 Sheets)", "Make.com AI Agent"],
    pdfFileName: "ai-customer-journey-operations-&-recovery-system.pdf",
    pdfUrl: "/projects/ai-customer-journey-operations-and-recovery-system/case-study/ai-customer-journey-operations-&-recovery-system.pdf",
    pdfTitle: "AI Customer Journey Operations & Recovery System Case Study (PDF)",
    previewImage: "/projects/ai-customer-journey-operations-and-recovery-system/cover-page/featured-project-cover-card-lead recovery-system.png",
    architectureSteps: [
      { title: "01. Intake & Journey Event Listener", desc: "Scenario 00 & 01 ingest customer touchpoints and log real-time journey state into Airtable Sheet 1 & 2." },
      { title: "02. Make.com AI Reasoning Agent", desc: "Scenario 02 evaluates customer delay or drop-off events against a custom AI agent reasoning rubric." },
      { title: "03. Recovery Execution Engine", desc: "Scenario 03 & 04 execute re-engagement triggers and escalate critical edge cases into Airtable Sheet 3 & 4." },
      { title: "04. Outcome Evaluation & Closed-Loop Audit", desc: "Scenario 05 logs recovery metrics into Airtable Sheet 5 for total operational visibility." }
    ],
    metrics: [
      { label: "Make Scenarios", value: "5 Active" },
      { label: "Airtable Sheets", value: "5 Tables" },
      { label: "AI Agent Triage", value: "Automated" }
    ]
  },
  {
    id: "proj-2",
    slug: "lead-capture-to-booking-systems",
    title: "Lead Capture to Booking System",
    category: "Booking Infrastructure",
    isFlagship: false,
    shortDesc: "Standardized lead acquisition and appointment scheduling system built inside GoHighLevel for a real business to structure inquiry collection and synchronize calendar availability.",
    fullDesc: "A complete lead acquisition and appointment coordination system implemented inside a real production business environment. Combines structured GoHighLevel lead capture, automated responses, Google two-way calendar sync, and follow-up workflows.",
    outcome: "Eliminated manual lead copy-pasting, reduced initial response latency to under 30 seconds, and increased qualified booking conversion by 38%.",
    techStack: ["GoHighLevel", "Gmail", "Google Two-Way Calendar Sync"],
    pdfFileName: "lead-capture-booking-system-case-study.pdf",
    pdfUrl: "/projects/lead-capture-to-booking-system/case-study/lead-capture-booking-system-case-study.pdf",
    pdfTitle: "Lead Capture to Booking System Architecture Case Study",
    previewImage: "/projects/lead-capture-to-booking-system/gohighlevel-screenshots/booking-calendar.png",
    architectureSteps: [
      { title: "Multi-Channel Lead Ingestion", desc: "Captures prospect inquiries from forms, ads, and landing pages directly into GoHighLevel." },
      { title: "Instant Notification & Qualification", desc: "Triggers instant Gmail notifications and evaluates lead details." },
      { title: "Google Two-Way Calendar Sync", desc: "Synchronizes booking availability seamlessly across sales calendars with automated reminders." }
    ],
    metrics: [
      { label: "Response Latency", value: "< 30 Sec" },
      { label: "Booking Lift", value: "+38%" },
      { label: "Calendar Sync", value: "Two-Way" }
    ]
  },
  {
    id: "proj-3",
    slug: "lead-intake-duplicate-verification",
    title: "Lead Intake & Duplicate Verification System",
    category: "CRM & Pipelines",
    isFlagship: false,
    shortDesc: "Real portfolio-grade intake system that validates form submissions, checks for duplicate leads in real time, routes data to Airtable & HubSpot CRM, and triggers intent-based routing.",
    fullDesc: "A fault-tolerant intake pipeline built specifically for Nitin Systems to eliminate dirty CRM data and duplicate records. Validates incoming payloads, executes real-time phone/email duplicate verification against Airtable, updates HubSpot deal properties, and triggers instant owner notification.",
    outcome: "100% data hygiene, zero duplicate contact creation, and automated deal stage sync across sales and operations.",
    techStack: ["Make.com", "Airtable", "HubSpot CRM", "Cal.com", "Webhooks"],
    pdfFileName: "systems-that-scale.pdf",
    pdfUrl: "/projects/lead-intake-duplicate-verification/case-study/systems-that-scale.pdf",
    pdfTitle: "Lead Intake & Duplicate Verification Technical Blueprint",
    previewImage: "/images/lead-intake-blueprint.png",
    architectureSteps: [
      { title: "Real-Time Payload Validation", desc: "Filters incomplete submissions and validates email format before database execution." },
      { title: "Airtable Duplicate Lookup", desc: "Checks existing records by email and phone hash to prevent duplicate CRM entry." },
      { title: "HubSpot Deal Stage Sync", desc: "Updates deal properties, sets owner assignment, and logs audit timestamps." },
      { title: "Intent Routing Trigger", desc: "Directs qualified prospects to custom intake questionnaires and Cal.com booking slots." }
    ],
    metrics: [
      { label: "Duplicate Entry", value: "0%" },
      { label: "Data Hygiene", value: "100%" },
      { label: "Processing Speed", value: "Real-Time" }
    ]
  }
];
