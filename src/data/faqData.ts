export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What types of systems do you build?",
    answer: "I specialize in end-to-end B2B operational infrastructure: lead capture and instant triage pipelines, automated CRM lifecycle stage transitions, calendar booking & intake workflows, AI-assisted lead scoring, and automated client onboarding handoffs."
  },
  {
    id: "faq-2",
    question: "Do you build from scratch or improve our existing tools?",
    answer: "Both. Most clients already pay for tools like HubSpot, Make, Zapier, GoHighLevel, or Airtable that are only 30% utilized or configured inefficiently. I perform a deep-dive audit to clean up and connect your existing tech stack first, only introducing new tools when strictly necessary."
  },
  {
    id: "faq-3",
    question: "Which platforms and automation stacks do you support?",
    answer: "My core ecosystem includes Make (Integromat), Zapier, HubSpot CRM, GoHighLevel, Zoho, Airtable, Slack API, Google Workspace, OpenAI API, and custom REST API webhooks."
  },
  {
    id: "faq-4",
    question: "What does a typical best-fit client look like?",
    answer: "B2B service businesses, agencies, consulting firms, and high-ticket service providers doing $10k–$100k+/month with existing lead flow who are suffering from manual follow-up delays, unorganized CRM pipelines, or dropped leads due to fragmented processes."
  },
  {
    id: "faq-5",
    question: "How do we plan, scope, and test the implementation?",
    answer: "Every project starts with a 15-minute diagnostic audit. We then map out a visual system schematic before writing a single automation module. Once built, every scenario undergoes rigorous stress testing for edge-case errors before live handoff accompanied by complete Loom video documentation."
  }
];
