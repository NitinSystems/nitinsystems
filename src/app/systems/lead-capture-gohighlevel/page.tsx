"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/projectsData";
import { PdfModal } from "@/components/ui/PdfModal";
import { ArrowLeft, Download, CheckCircle2, ShieldCheck, Cpu, Zap, Calendar, Database, Filter } from "lucide-react";

export default function GoHighLevelProjectPage() {
  const project = PROJECTS[0]; // Lead Capture GoHighLevel
  const [isPdfOpen, setIsPdfOpen] = useState(false);

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

        {/* Header */}
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

        {/* System Architecture Steps */}
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
                  <h3 className="font-serif font-bold text-lg text-ink">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack & Outcome */}
        <div className="bg-cloud border border-line rounded-2xl p-8 mb-12 space-y-6">
          <div>
            <h3 className="font-serif font-bold text-lg text-ink mb-3">
              Tools & Native Integrations
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-paper border border-line text-ink text-xs font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-line/60">
            <h3 className="font-serif font-bold text-lg text-ink mb-2">
              Verified Business Impact
            </h3>
            <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center bg-cobalt text-paper rounded-2xl p-8 shadow-xl space-y-4">
          <h3 className="font-serif font-bold text-2xl">
            Want to Deploy This Lead Capture Infrastructure?
          </h3>
          <p className="text-xs sm:text-sm text-paper/80 max-w-xl mx-auto">
            Book a 15-minute diagnostic audit. We will evaluate your current lead response latency and map a customized workflow schematic.
          </p>
          <Link
            href="/audit"
            className="inline-block px-8 py-3.5 rounded-full bg-paper text-cobalt hover:bg-cloud font-semibold text-xs transition-colors shadow-md"
          >
            Book System Audit Now
          </Link>
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
