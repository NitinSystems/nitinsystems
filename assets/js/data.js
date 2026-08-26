/* ==========================================================================
   CONTENT DATA — NITIN SYSTEMS
   ========================================================================== */

const SITE_DATA = {
  brand: {
    name: 'Nitin Systems',
    founder: 'Nitin Mishra',
    role: 'B2B Automation Infrastructure Specialist',
    email: 'NitinSystems@outlook.com',
    status: 'Operational · Solo Practice',
    socials: {
      beehiiv: 'https://nitinmishra.beehiiv.com/',
      makeAcademy: 'https://www.make.com/en/academy',
      hubspotAcademy: 'https://academy.hubspot.com/'
    }
  },

  stats: [
    { value: 'Real-Time', label: 'Form-to-Workflow Triggering' },
    { value: 'Structured', label: 'CRM Stage Management' },
    { value: 'Automated', label: 'Duplicate Detection & Validation' },
    { value: 'Frictionless', label: 'Qualification & Booking' }
  ],

  systems: [
    {
      id: 'sys-1',
      slug: 'workflow-automation',
      title: 'Workflow Automation',
      shortDesc: 'Connect repetitive processes, route data across business tools, and eliminate manual copy-paste execution.',
      category: 'Core Automation',
      tools: ['Make.com', 'Zapier', 'Webhooks', 'REST APIs'],
      icon: '⚡',
      latency: 'Event-Driven'
    },
    {
      id: 'sys-2',
      slug: 'crm-data-workflows',
      title: 'CRM & Data Workflows',
      shortDesc: 'Structure, synchronize, and maintain operational data across HubSpot, GoHighLevel, and Airtable databases.',
      category: 'CRM Architecture',
      tools: ['HubSpot CRM', 'GoHighLevel', 'Airtable', 'Make.com'],
      icon: '🗂️',
      latency: 'Instant Sync'
    },
    {
      id: 'sys-3',
      slug: 'lead-booking-systems',
      title: 'Lead & Booking Systems',
      shortDesc: 'Connect intake forms, qualification filters, calendar bookings, automated notifications, and reminder sequences.',
      category: 'Intake & Scheduling',
      tools: ['GoHighLevel', 'Cal.com', 'Google Calendar', 'Gmail'],
      icon: '📅',
      latency: 'Two-Way Sync'
    },
    {
      id: 'sys-4',
      slug: 'lifecycle-recovery-workflows',
      title: 'Lifecycle & Recovery Workflows',
      shortDesc: 'Monitor journey states, flag stalled inquiries, and trigger structured follow-up sequences to recover pipeline interest.',
      category: 'Lifecycle Operations',
      tools: ['Make.com', 'Airtable', 'Twilio', 'Email'],
      icon: '🔁',
      latency: 'Trigger-Based'
    },
    {
      id: 'sys-5',
      slug: 'system-integrations',
      title: 'System Integrations',
      shortDesc: 'Connect forms, relational databases, CRMs, calendars, email platforms, and internal business tools into a unified flow.',
      category: 'Integrations',
      tools: ['Make.com', 'Zapier', 'Webhooks', 'JSON API'],
      icon: '🔗',
      latency: 'Reliable Delivery'
    }
  ],

  projects: [
    {
      id: 'proj-1',
      slug: 'lead-capture-to-booking-system',
      title: 'Lead Capture to Booking System',
      badge: 'Client Implementation',
      badgeClass: 'badge-emerald',
      category: 'Client Project',
      isFlagship: true,
      shortDesc: 'A live system implementation for an active service business connecting website intake forms, SMS/email notifications, and calendar scheduling.',
      outcome: 'Established structured automated inquiry routing, instant calendar booking confirmation, and pre-meeting reminder sequences.',
      techStack: ['GoHighLevel', 'Google Calendar', 'Gmail'],
      pdfUrl: 'projects/lead-capture-to-booking-system/case-study/lead-capture-booking-system-case-study.pdf',
      coverImage: 'projects/ai-customer-journey-operations-and-recovery-system/cover-page/featured-project-cover-card-lead recovery-system.png',
      evidenceType: 'Real Company Implementation'
    },
    {
      id: 'proj-2',
      slug: 'lead-intake-duplicate-verification',
      title: 'Lead Intake & Duplicate Verification System',
      badge: 'Portfolio System',
      badgeClass: 'badge-cobalt',
      category: 'Portfolio Build',
      isFlagship: false,
      shortDesc: 'A verified technical portfolio architecture evaluating incoming webhook payloads against an Airtable database to eliminate duplicate CRM records.',
      outcome: 'Demonstrates real-time hash lookups, record deduplication logic, and clean stage synchronization with CRM pipelines.',
      techStack: ['Make.com', 'Airtable', 'HubSpot CRM', 'Webhooks'],
      pdfUrl: 'projects/lead-intake-duplicate-verification/case-study/systems-that-scale.pdf',
      coverImage: 'projects/ai-customer-journey-operations-and-recovery-system/cover-page/featured-project-cover-card-lead recovery-system.png',
      evidenceType: 'Portfolio Build'
    },
    {
      id: 'proj-3',
      slug: 'ai-customer-journey-operations-and-recovery-system',
      title: 'AI Customer Journey Operations & Recovery System',
      badge: 'Portfolio / Experimental',
      badgeClass: 'badge-cobalt',
      category: 'Portfolio Architecture',
      isFlagship: false,
      shortDesc: 'A portfolio architecture exploring how AI-assisted decision logic can monitor lifecycle states, identify recovery opportunities, and route actions across CRM and automation workflows.',
      outcome: 'Demonstrates 5 interconnected Make.com scenarios, 5 relational Airtable tables, and prompt-driven journey state triage.',
      techStack: ['Make.com (5 Scenarios)', 'Airtable (5 Sheets)', 'AI Agent'],
      pdfUrl: 'projects/ai-customer-journey-operations-and-recovery-system/case-study/ai-customer-journey-operations-&-recovery-system.pdf',
      coverImage: 'projects/ai-customer-journey-operations-and-recovery-system/cover-page/featured-project-cover-card-lead recovery-system.png',
      evidenceType: 'Concept / Architecture'
    }
  ],

    credentials: [
    {
      id: 'cred-1',
      title: 'Make.com Foundation Certification',
      issuer: 'Make Academy',
      date: 'Verified Active',
      image: 'assets/certifications/make_foundation_certificate.png',
      badgeCode: 'MAKE-FOUNDATION-CERT',
      description: 'Advanced webhook configuration, JSON payload mapping, and multi-module API orchestration.'
    },
    {
      id: 'cred-2',
      title: 'Building Intermediate Zaps',
      issuer: 'Zapier University',
      date: 'Verified Active',
      image: 'assets/certifications/building-intermediate-zaps.png',
      badgeCode: 'ZAPIER-INTERMEDIATE-CERT',
      description: 'Complex conditional logic, data formatting, and multi-step workflow automation in Zapier.'
    },
    {
      id: 'cred-3',
      title: 'Building AI Agents',
      issuer: 'Zapier / AI Learning',
      date: 'Verified Active',
      image: 'assets/certifications/building-ai-agents.png',
      badgeCode: 'ZAPIER-AI-AGENT-CERT',
      description: 'Modern LLM-assisted workflow automation and AI agent design for business operations.'
    },
    {
      id: 'cred-4',
      title: 'HubSpot Sales Hub Software Certified',
      issuer: 'HubSpot Academy',
      date: 'Verified Active',
      image: 'assets/certifications/hubspot_sales hub_software_certified.png',
      badgeCode: 'HUBSPOT-SALES-HUB-CERT',
      description: 'CRM pipeline operations, deal stage architecture, and database schema engineering.'
    },
    {
      id: 'cred-5',
      title: 'HubSpot Email Marketing Certified',
      issuer: 'HubSpot Academy',
      date: 'Verified Active',
      image: 'assets/certifications/email_Marketing_certificate_hubspot.png',
      badgeCode: 'HUBSPOT-EMAIL-CERT',
      description: 'Lifecycle communications, automated trigger workflows, and email deliverability.'
    },
    {
      id: 'cred-6',
      title: 'Google Prompting Essentials',
      issuer: 'Google',
      date: 'Verified Active',
      image: 'assets/certifications/google-prompting-essentials.png',
      badgeCode: 'GOOGLE-PROMPTING-CERT',
      description: 'Advanced prompt engineering, context structuring, and LLM behavior control.'
    },
    {
      id: 'cred-7',
      title: 'Google AI Essentials',
      issuer: 'Google',
      date: 'Verified Active',
      image: 'assets/certifications/google-ai-essential-certification.png',
      badgeCode: 'GOOGLE-AI-ESSENTIALS',
      description: 'AI implementation strategy, ethical AI operations, and workflow compliance.'
    },
    {
      id: 'cred-8',
      title: 'AI Capabilities & Limitations Certification',
      issuer: 'Anthropic / Foundation AI',
      date: 'Verified Active',
      image: 'assets/certifications/ai-capabilites-and-limitation.png',
      badgeCode: 'AI-CAPABILITIES-LIMITATIONS',
      description: 'System boundaries, model capabilities, prompt failure modes, and edge-case mitigation.'
    }
  ],

  faqs: [
    {
      id: 'faq-1',
      question: 'What types of systems do you build?',
      answer: 'I specialize in end-to-end B2B operational infrastructure: lead capture and instant triage pipelines, automated CRM lifecycle stage transitions, calendar booking & intake workflows, AI-assisted lead scoring, and automated client onboarding handoffs.'
    },
    {
      id: 'faq-2',
      question: 'Do you build from scratch or improve our existing tools?',
      answer: 'Both. Most clients already pay for tools like HubSpot, Make, Zapier, GoHighLevel, or Airtable that are only 30% utilized or configured inefficiently. I perform a deep-dive audit to clean up and connect your existing tech stack first, only introducing new tools when strictly necessary.'
    },
    {
      id: 'faq-3',
      question: 'Which platforms and automation stacks do you support?',
      answer: 'My core ecosystem includes GoHighLevel, Make.com, Airtable, Zapier, and HubSpot CRM. I integrate AI reasoning agents with Google AI Studio, NotebookLM, and OpenAI, connecting external software via custom REST API webhooks.'
    },
    {
      id: 'faq-4',
      question: 'What does a typical best-fit client look like?',
      answer: 'B2B service businesses, agencies, consulting firms, and high-ticket service providers doing $10k–$100k+/month with existing lead flow who are suffering from manual follow-up delays, unorganized CRM pipelines, or dropped leads due to fragmented processes.'
    },
    {
      id: 'faq-5',
      question: 'How do we plan, scope, and test the implementation?',
      answer: 'Every project starts with a 15-minute diagnostic audit. We then map out a visual system schematic before writing a single automation module. Once built, every scenario undergoes rigorous stress testing for edge-case errors before live handoff accompanied by complete Loom video documentation.'
    }
  ]
};
