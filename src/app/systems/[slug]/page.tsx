"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PROJECTS, Project } from "@/data/projectsData";
import { CORE_SYSTEMS, CoreSystem } from "@/data/systemsData";
import { PdfModal } from "@/components/ui/PdfModal";
import { ArrowLeft, Download, CheckCircle2, ShieldCheck, Layers, Cpu, Activity } from "lucide-react";

export default function DynamicSystemPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // Search in PROJECTS first, then in CORE_SYSTEMS
  const projectMatch = PROJECTS.find((p) => p.slug === slug);
  const coreMatch = CORE_SYSTEMS.find((s) => s.slug === slug);

  const [isPdfOpen, setIsPdfOpen] = useState(false);

  // If matched to a flagship project
  if (projectMatch) {
    const project = projectMatch;
    return (
      <div className="py-12 bg-paper min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back Link */}
          <Link
            href="/systems"
            className="inline-flex items-center gap-2 text-xs font-semibold text-ink-soft hover:text-cobalt mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Systems Library</span>
          </Link>

          {/* Header Card */}
          <div className="bg-cloud border border-line rounded-3xl p-8 sm:p-10 mb-10 shadow-card">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-cobalt px-3 py-1 rounded-full bg-cobalt-light border border-cobalt/20">
                {project.category}
              </span>
              <button
                onClick={() => setIsPdfOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cobalt hover:bg-cobalt-dark text-paper text-xs font-semibold shadow-xs transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF Proof ↗</span>
              </button>
            </div>

            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-ink tracking-tight">
              {project.title}
            </h1>

            <p className="text-ink-soft text-base mt-4 leading-relaxed">
              {project.fullDesc}
            </p>

            <div className="mt-6 pt-6 border-t border-line/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, i) => (
                <div key={i} className="bg-paper p-4 rounded-xl border border-line/60">
                  <span className="font-serif font-bold text-2xl text-cobalt block">{m.value}</span>
                  <span className="text-xs text-ink-soft mt-1 block">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Steps */}
          <div className="space-y-8 mb-12">
            <h2 className="font-serif font-bold text-2xl text-ink">
              System Architecture & Logic Flow
            </h2>

            <div className="space-y-4">
              {project.architectureSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-cloud border border-line rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-cobalt text-paper font-bold flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-ink">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mt-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-cloud border border-line rounded-2xl p-8 mb-12 space-y-4">
            <h3 className="font-serif font-bold text-lg text-ink">
              Integrated Tech Stack Ecosystem
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-lg bg-paper border border-line text-xs font-mono font-medium text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="bg-cobalt/5 border border-cobalt/20 rounded-2xl p-8 text-center space-y-4">
            <h3 className="font-serif font-bold text-xl text-ink">
              Need a Similar System Built for Your Practice?
            </h3>
            <p className="text-xs text-ink-soft max-w-md mx-auto">
              Book a 15-minute diagnostic. Nitin Mishra will review your intake requirements and architect a custom implementation brief.
            </p>
            <div className="pt-2">
              <Link
                href="/audit"
                className="inline-block px-8 py-3 rounded-full bg-cobalt hover:bg-cobalt-dark text-paper text-xs font-semibold shadow-md transition-colors"
              >
                Book System Audit
              </Link>
            </div>
          </div>
        </div>

        <PdfModal
          project={project}
          isOpen={isPdfOpen}
          onClose={() => setIsPdfOpen(false)}
        />
      </div>
    );
  }

  // If matched to one of the 6 Core Systems
  if (coreMatch) {
    const sys = coreMatch;
    return (
      <div className="py-12 bg-paper min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/systems"
            className="inline-flex items-center gap-2 text-xs font-semibold text-ink-soft hover:text-cobalt mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Systems Library</span>
          </Link>

          <div className="bg-cloud border border-line rounded-3xl p-8 sm:p-10 mb-10 shadow-card space-y-6">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-cobalt px-3 py-1 rounded-full bg-cobalt-light border border-cobalt/20">
                CORE OPERATIONAL SYSTEM
              </span>
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-paper border border-line text-ink-soft">
                {sys.category}
              </span>
            </div>

            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-ink tracking-tight">
              {sys.title}
            </h1>

            <p className="text-ink-soft text-base leading-relaxed">
              {sys.fullDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-line/60">
              {sys.metrics.map((m, i) => (
                <div key={i} className="bg-paper p-4 rounded-xl border border-line/60">
                  <span className="font-serif font-bold text-2xl text-cobalt block">{m.value}</span>
                  <span className="text-xs text-ink-soft mt-1 block">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <h2 className="font-serif font-bold text-2xl text-ink">
              Core Technical Features & Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sys.features.map((feat, idx) => (
                <div key={idx} className="bg-cloud border border-line rounded-xl p-5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cobalt shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-ink font-medium leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-cloud border border-line rounded-2xl p-8 mb-12 space-y-4">
            <h3 className="font-serif font-bold text-lg text-ink">
              Supported Software Stack & Integrations
            </h3>
            <div className="flex flex-wrap gap-2">
              {sys.tools.map((t, i) => (
                <span key={i} className="px-3.5 py-1.5 rounded-lg bg-paper border border-line text-xs font-mono font-medium text-ink">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-cobalt/5 border border-cobalt/20 rounded-2xl p-8 text-center space-y-4">
            <h3 className="font-serif font-bold text-xl text-ink">
              Architect This System for Your Business
            </h3>
            <p className="text-xs text-ink-soft max-w-md mx-auto">
              Book a 15-minute diagnostic. Nitin Mishra will review your software stack and prepare a custom blueprint.
            </p>
            <div className="pt-2">
              <Link href="/audit" className="inline-block px-8 py-3 rounded-full bg-cobalt hover:bg-cobalt-dark text-paper text-xs font-semibold shadow-md transition-colors">
                Book System Audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Not found fallback
  return (
    <div className="py-24 text-center space-y-4">
      <h1 className="font-serif font-bold text-3xl text-ink">System Blueprint Not Found</h1>
      <p className="text-xs text-ink-soft">The requested system blueprint could not be located.</p>
      <Link href="/systems" className="inline-block px-6 py-2.5 rounded-full bg-cobalt text-paper text-xs font-semibold">
        Return to Systems Library
      </Link>
    </div>
  );
}
