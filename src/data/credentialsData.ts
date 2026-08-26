export interface Credential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verifyUrl: string;
  badgeCode: string;
  description: string;
}

export const CREDENTIALS: Credential[] = [
  {
    id: "cred-1",
    title: "Make.com Foundation Certification",
    issuer: "Make Academy",
    date: "Verified Active",
    verifyUrl: "https://www.make.com/en/academy",
    badgeCode: "MAKE-FOUNDATION-CERT",
    description: "Official accreditation in Make.com visual automation scenario building, error handling directives, and webhook triggers."
  },
  {
    id: "cred-2",
    title: "HubSpot Sales Hub Software Certified",
    issuer: "HubSpot Academy",
    date: "Verified Active",
    verifyUrl: "https://academy.hubspot.com/",
    badgeCode: "HUBSPOT-SALES-HUB-CERT",
    description: "Certified proficiency in HubSpot CRM pipeline architecture, deal stage structuring, and automated sales workflows."
  },
  {
    id: "cred-3",
    title: "Google AI Essentials Certification",
    issuer: "Google",
    date: "Verified Active",
    verifyUrl: "https://coursera.org/verify/google-ai",
    badgeCode: "GOOGLE-AI-ESSENTIALS",
    description: "Official accreditation from Google in applied AI fundamentals, prompt engineering strategies, and workflow decisioning."
  },
  {
    id: "cred-4",
    title: "Building AI Agents Certification",
    issuer: "AI Learning Systems",
    date: "Verified Active",
    verifyUrl: "https://coursera.org/",
    badgeCode: "AI-AGENTS-CERT",
    description: "Specialized certification in designing, prompting, and deploying autonomous AI reasoning agents for business workflows."
  },
  {
    id: "cred-5",
    title: "Zapier Basic & Intermediate Zaps Certification",
    issuer: "Zapier University",
    date: "Verified Active",
    verifyUrl: "https://zapier.com/university",
    badgeCode: "ZAPIER-INTERMEDIATE-CERT",
    description: "Verified accreditation in multi-step Zapier workflows, conditional filters, paths, and app integration mapping."
  },
  {
    id: "cred-6",
    title: "HubSpot Email Marketing Certification",
    issuer: "HubSpot Academy",
    date: "Verified Active",
    verifyUrl: "https://academy.hubspot.com/",
    badgeCode: "HUBSPOT-EMAIL-MKTG-CERT",
    description: "Certified expertise in automated lifecycle email nurturing, deliverability protocols, and lead re-engagement."
  }
];
