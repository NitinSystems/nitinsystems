import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { WorkflowConsole } from "@/components/home/WorkflowConsole";
import { StatStrip } from "@/components/home/StatStrip";
import { OperationalGaps } from "@/components/home/OperationalGaps";
import { CapabilitiesGrid } from "@/components/home/CapabilitiesGrid";
import { ExecutionRoadmap } from "@/components/home/ExecutionRoadmap";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ScarcityBanner } from "@/components/home/ScarcityBanner";
import { VerifiedCredentials } from "@/components/home/VerifiedCredentials";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { IntakeForm } from "@/components/home/IntakeForm";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section — Grid Pattern Used ONLY Here for Technical Identity */}
      <section className="relative pt-12 pb-24 overflow-hidden bg-gradient-to-b from-[#EAF3FC] via-white to-white bg-pattern-grid-light border-b border-line">
        {/* Subtle Ambient Accent Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cobalt/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cobalt/30 text-xs font-bold uppercase tracking-widest text-cobalt shadow-2xs animate-gentle-float">
              <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse"></span>
              <span>B2B AUTOMATION SPECIALIST • NITIN MISHRA</span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-[1.15]">
              I Build the Automation Infrastructure That{" "}
              <span className="text-cobalt italic underline decoration-cobalt/30 underline-offset-8">Stops Leads From Dying</span> in Your Inbox
            </h1>

            {/* Subtitle */}
            <p className="text-ink-soft text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              I personally design, build, and test custom automation systems for B2B service practices. No junior handoffs, no corporate fluff—just clean, reliable operational workflows.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
              <Link
                href="/audit"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-cobalt hover:bg-cobalt-dark text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group raycast-hover"
              >
                <span>Book 15-Min System Audit</span>
                <ArrowRight className="w-4 h-4 raycast-arrow-icon" />
              </Link>
              <Link
                href="/systems"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-line hover:border-cobalt text-[#0F172A] hover:text-cobalt text-sm font-semibold shadow-xs transition-all flex items-center justify-center gap-2 raycast-hover"
              >
                <span>Explore Systems Catalog</span>
                <ArrowUpRight className="w-4 h-4 raycast-arrow-icon" />
              </Link>
            </div>

            {/* Micro-Copy Trust Disclaimer */}
            <p className="text-xs text-ink-soft font-medium flex items-center justify-center gap-1.5 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>No commitment. 15-minute diagnostic. Uncover operational bottlenecks before they cost you leads.</span>
            </p>
          </div>

          {/* Interactive SVG Console Diagram in Hero */}
          <div className="mt-14 max-w-5xl mx-auto">
            <WorkflowConsole />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <StatStrip />

      {/* Operational Gaps We Solve (3 Bento Cards) */}
      <OperationalGaps />

      {/* Core Capabilities (6 Numbered Grid Items) */}
      <CapabilitiesGrid />

      {/* 4-Stage Execution Roadmap */}
      <ExecutionRoadmap />

      {/* Featured Projects / Case Studies Showcase */}
      <FeaturedProjects />

      {/* Direct Founder Banner */}
      <ScarcityBanner />

      {/* Verified Credentials & Certifications */}
      <VerifiedCredentials />

      {/* Accordion FAQ */}
      <FAQAccordion />

      {/* Qualifying Intake Diagnostic Form */}
      <IntakeForm />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
