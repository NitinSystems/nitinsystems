export interface CoreSystem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  tools: string[];
  features: string[];
  metrics: { label: string; value: string }[];
}

export const CORE_SYSTEMS: CoreSystem[] = [
  {
    id: "sys-1",
    slug: "lead-capture-ingestion",
    title: "Lead Capture & Ingestion System",
    shortDesc: "Automated webhook listeners and form handlers that capture prospect inquiries across landing pages, ads, and social channels without data loss.",
    fullDesc: "A fault-tolerant lead ingestion framework designed to standardize incoming form submissions, Meta/Google ad leads, and email inquiries into normalized JSON schemas before passing data to your database or CRM.",
    category: "Ingestion & Capture",
    tools: ["Make.com", "Zapier", "Webhooks", "GoHighLevel", "Typeform"],
    features: [
      "Sub-second webhook payload capture",
      "Email & phone validation before database entry",
      "UTM parameters & source attribution tracking",
      "Fail-open queue logging for 100% data preservation"
    ],
    metrics: [
      { label: "Capture Latency", value: "< 500ms" },
      { label: "Data Integrity", value: "100%" },
      { label: "Lead Drop Rate", value: "0%" }
    ]
  },
  {
    id: "sys-2",
    slug: "crm-pipeline-architecture",
    title: "CRM Pipeline & Stage Architecture",
    shortDesc: "Clean deal pipelines and custom property schemas that structure prospect progression and give full visibility across your sales pipeline.",
    fullDesc: "A standardized CRM architecture designed for HubSpot, GoHighLevel, or Airtable. Eliminates cluttered pipelines, enforces required deal properties at each stage, and automates owner assignment based on lead parameters.",
    category: "CRM Architecture",
    tools: ["HubSpot CRM", "GoHighLevel", "Airtable", "Make.com"],
    features: [
      "Enforced stage criteria & required properties",
      "Automated lead assignment & owner notification",
      "Stage movement audit logging & velocity tracking",
      "Custom views for sales reps & executive dashboards"
    ],
    metrics: [
      { label: "Pipeline Clarity", value: "100%" },
      { label: "Stale Lead Reduction", value: "85%" },
      { label: "Stage Velocity", value: "2.4x" }
    ]
  },
  {
    id: "sys-3",
    slug: "lifecycle-follow-up-automation",
    title: "Lifecycle & Re-Engagement Automation",
    shortDesc: "Multi-touch SMS, email, and task reminder sequences that nurture cold inquiries and bring lost deals back into active booking conversations.",
    fullDesc: "Automated lifecycle re-engagement systems that deliver targeted, value-driven SMS and email messages based on prospect stage, behavior, and activity timestamps.",
    category: "Lifecycle Nurture",
    tools: ["Twilio", "Gmail", "SendGrid", "GoHighLevel", "HubSpot"],
    features: [
      "Behavioral trigger sequences based on link clicks",
      "Automated SMS re-engagement for no-show prospects",
      "Dynamic personalization tokens & diagnostic value drops",
      "Unsubscribe compliance & deliverability protection"
    ],
    metrics: [
      { label: "Re-Engagement Rate", value: "24%" },
      { label: "No-Show Reduction", value: "42%" },
      { label: "Follow-Up Speed", value: "Automated" }
    ]
  },
  {
    id: "sys-4",
    slug: "ai-lead-qualification-engine",
    title: "AI Lead Qualification & Triage Engine",
    shortDesc: "Autonomous AI scoring logic that analyzes prospect intent, company size, and budget parameters to route VIP leads to senior partners.",
    fullDesc: "An AI-assisted qualification engine built with OpenAI API or Make.com AI Agents. Evaluates intake form answers against your custom buyer persona rubric to assign fit scores and trigger instant Slack alerts.",
    category: "AI Decisioning",
    tools: ["Make.com AI Agent", "OpenAI API", "Slack API", "Airtable"],
    features: [
      "Custom GPT-4o scoring rubric based on past client data",
      "Instant Slack alert for high-ticket qualified leads",
      "Automated self-serve resource routing for low-fit leads",
      "Reasoning transcript logging inside CRM properties"
    ],
    metrics: [
      { label: "Triage Speed", value: "Instant" },
      { label: "Scoring Accuracy", value: "96%" },
      { label: "Admin Time Saved", value: "14+ Hrs/Wk" }
    ]
  },
  {
    id: "sys-5",
    slug: "booking-intake-workflows",
    title: "Booking & Scheduling Workflows",
    shortDesc: "Two-way calendar synchronization, automated pre-call diagnostic intake questionnaires, and friction-free appointment coordination.",
    fullDesc: "Production booking workflows built with Cal.com or GoHighLevel. Ensures prospects complete required intake questions before securing a calendar slot, automatically syncing details to sales team calendars.",
    category: "Scheduling",
    tools: ["Cal.com", "Google Calendar", "GoHighLevel", "Webhooks"],
    features: [
      "Two-way Google & Outlook calendar synchronization",
      "Pre-call diagnostic questionnaire requirement",
      "Automated SMS & email appointment confirmations",
      "Timezone detection & buffer time enforcement"
    ],
    metrics: [
      { label: "Booking Conversion", value: "+38%" },
      { label: "No-Show Rate", value: "< 5%" },
      { label: "Calendar Conflicts", value: "0" }
    ]
  },
  {
    id: "sys-6",
    slug: "cross-platform-integrations",
    title: "Cross-Platform Workflow Integrations",
    shortDesc: "Custom webhooks and API connectors linking your CRM, databases, payment gateways, and communication channels into a unified ecosystem.",
    fullDesc: "Robust iPaaS scenario architectures built in Make.com and Zapier. Connects disparate software tools into a single operational data loop with automatic retries and error alert channels.",
    category: "Integrations",
    tools: ["Make.com", "Zapier", "REST APIs", "Webhooks", "JSON"],
    features: [
      "Multi-app data synchronization across stack",
      "Custom JSON transformation & array mapping",
      "Automatic scenario retry on API timeouts",
      "Slack error notification channel for instant maintenance"
    ],
    metrics: [
      { label: "System Uptime", value: "99.9%" },
      { label: "API Latency", value: "< 1s" },
      { label: "Manual Data Entry", value: "0%" }
    ]
  }
];
