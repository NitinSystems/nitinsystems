import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nitin-systems.com"),
  title: {
    default: "Nitin Systems — B2B Automation Infrastructure & Operational Consulting",
    template: "%s | Nitin Systems",
  },
  description:
    "I design and build fault-tolerant B2B automation infrastructure, CRM deal pipelines, lead qualification engines, and lifecycle workflows for high-growth service businesses.",
  keywords: [
    "B2B Automation Consulting",
    "Nitin Mishra Automation",
    "HubSpot Automation Specialist",
    "Make.com Certified Partner",
    "GoHighLevel CRM Architect",
    "Lead Ingestion Pipelines",
    "CRM Deal Stage Structuring",
    "AI Lead Qualification Engine",
    "Operational Infrastructure Consulting",
    "Zapier Integration Systems",
  ],
  authors: [{ name: "Nitin Mishra", url: "https://nitin-systems.com/about" }],
  creator: "Nitin Mishra",
  publisher: "Nitin Systems",
  alternates: {
    canonical: "https://nitin-systems.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Nitin Systems — B2B Automation Infrastructure & Operational Consulting",
    description:
      "Stop leads from dying in your inbox. Fault-tolerant CRM pipelines, instant lead triage, and lifecycle automation engineered by Nitin Mishra.",
    url: "https://nitin-systems.com",
    siteName: "Nitin Systems",
    images: [
      {
        url: "https://nitin-systems.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nitin Systems Architecture & Infrastructure Blueprint",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitin Systems — B2B Automation Infrastructure",
    description:
      "Fault-tolerant B2B automation systems that eliminate dropped leads, clean up CRM pipelines, and automate prospect nurturing.",
    creator: "@NitinMishra",
    images: ["https://nitin-systems.com/og-image.jpg"],
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nitin-systems.com/#organization",
      name: "Nitin Systems",
      url: "https://nitin-systems.com",
      logo: "https://nitin-systems.com/logo.png",
      email: "NitinSystems@outlook.com",
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        name: "Nitin Mishra",
        jobTitle: "Founder & Principal Systems Architect",
        sameAs: ["https://nitinmishra.beehiiv.com/"],
      },
      description:
        "B2B operational systems consulting practice specializing in lead capture, CRM pipeline structuring, AI lead qualification, and lifecycle automation.",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://nitin-systems.com/#service",
      name: "Nitin Systems B2B Automation Consulting",
      url: "https://nitin-systems.com",
      provider: {
        "@id": "https://nitin-systems.com/#organization",
      },
      areaServed: "Worldwide",
      serviceType: [
        "B2B Automation Consulting",
        "CRM Pipeline Structuring",
        "Lead Qualification Engine Design",
        "Make.com & Zapier Integration",
        "Booking & Intake Infrastructure",
      ],
      priceRange: "$$$$",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-paper text-ink selection:bg-cobalt selection:text-paper antialiased">
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
