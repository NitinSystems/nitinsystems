import React from "react";
import Link from "next/link";
import { CREDENTIALS } from "@/data/credentialsData";
import { ArrowRight, ExternalLink, ShieldCheck, UserCheck, Award, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-12 bg-dot-grid min-h-screen space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-cobalt px-3 py-1 rounded-full bg-cobalt-light border border-cobalt/20">
            FOUNDER & PRINCIPAL ARCHITECT
          </span>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-ink mt-4 tracking-tight">
            Nitin Mishra
          </h1>
          <p className="text-ink-soft text-base sm:text-lg mt-3 leading-relaxed">
            Solo B2B Operational Systems Architect & Automation Specialist
          </p>
        </div>

        {/* Founder Bio Card */}
        <div className="bg-paper border border-line rounded-3xl p-8 sm:p-10 shadow-card space-y-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-line">
            <div className="w-28 h-28 rounded-2xl border-2 border-cobalt/30 overflow-hidden shadow-md shrink-0 bg-cloud">
              <img
                src="/wine-suit-image.png"
                alt="Nitin Mishra — Founder & Principal Architect"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-center sm:text-left space-y-2">
              <h2 className="font-serif font-bold text-2xl text-ink">
                Engineering Philosophy & Direct Partner Model
              </h2>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  🟢 Direct Founder Access
                </span>
                <span className="text-xs font-semibold text-cobalt bg-cobalt-light px-3 py-1 rounded-full border border-cobalt/20">
                  Solo-Led Practice
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-ink-soft text-sm sm:text-base leading-relaxed">
            <p>
              I build operational systems for B2B service practices that eliminate manual friction, enforce strict data hygiene, and automate high-value prospect pipelines.
            </p>
            <p>
              Most traditional agencies sell bloated retainers and delegate critical technical builds to junior account managers. I run Nitin Systems as a <strong>solo-led technical practice</strong>: when you hire Nitin Systems, you get direct, senior architect-level design, build, and ongoing support from me personally.
            </p>
            <p>
              Every workflow I architect adheres to an <strong>audit-first standard</strong>: zero code or scenario building begins until we map out your complete operational schematic and edge-case requirements together.
            </p>
          </div>

          <div className="pt-6 border-t border-line grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-cloud p-4 rounded-xl border border-line/60">
              <span className="font-serif font-bold text-ink text-sm block">100% Audit-First</span>
              <span className="text-xs text-ink-soft mt-1 block">Full visual schematic before building</span>
            </div>
            <div className="bg-cloud p-4 rounded-xl border border-line/60">
              <span className="font-serif font-bold text-ink text-sm block">Zero Junior Handoffs</span>
              <span className="text-xs text-ink-soft mt-1 block">Direct founder-level execution</span>
            </div>
            <div className="bg-cloud p-4 rounded-xl border border-line/60">
              <span className="font-serif font-bold text-ink text-sm block">Loom Documentation</span>
              <span className="text-xs text-ink-soft mt-1 block">Complete video handoff & training</span>
            </div>
          </div>
        </div>

        {/* Verified Credentials Showcase */}
        <div className="pt-8 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-serif font-bold text-2xl text-ink">
              Verified Platform Certifications
            </h2>
            <p className="text-xs text-ink-soft mt-1">
              Official accreditations from industry-leading software providers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.id}
                className="bg-paper border border-line rounded-xl p-5 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <span className="text-[10px] font-mono font-semibold text-cobalt uppercase block mb-1">
                    {cred.issuer}
                  </span>
                  <h3 className="font-serif font-bold text-base text-ink mb-1">
                    {cred.title}
                  </h3>
                  <p className="text-xs text-ink-soft leading-relaxed mb-3">
                    {cred.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-line/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-ink-soft">ID: {cred.badgeCode}</span>
                  <a
                    href={cred.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cobalt hover:underline"
                  >
                    <span>Verify ID</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-cloud border border-line rounded-2xl p-8 text-center space-y-4">
          <h3 className="font-serif font-bold text-2xl text-ink">
            Ready to Work Directly with Nitin Mishra?
          </h3>
          <p className="text-xs sm:text-sm text-ink-soft max-w-lg mx-auto">
            Book a 15-minute diagnostic audit. Find operational gaps in your business before they become problems.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/audit"
              className="px-8 py-3 rounded-full bg-cobalt hover:bg-cobalt-dark text-paper text-xs font-semibold shadow-md transition-colors"
            >
              Book System Audit
            </Link>
            <a
              href="mailto:NitinSystems@outlook.com"
              className="px-6 py-3 rounded-full bg-paper border border-line hover:border-cobalt/40 text-ink text-xs font-semibold transition-colors flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-cobalt" />
              <span>Email NitinSystems@outlook.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
