"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS, Project } from "@/data/projectsData";
import { CORE_SYSTEMS } from "@/data/systemsData";
import { PdfModal } from "@/components/ui/PdfModal";
import { ArrowUpRight, Download, Star, Layers } from "lucide-react";

export default function SystemsLibraryPage() {
  const [selectedPdfProject, setSelectedPdfProject] = useState<Project | null>(null);

  return (
    <div className="py-12 bg-paper min-h-screen space-y-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-cobalt px-3 py-1 rounded-full bg-cobalt-light border border-cobalt/20">
            TECHNICAL BLUEPRINT CATALOG
          </span>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-ink mt-4 tracking-tight">
            Systems Library & Architecture Catalog
          </h1>
          <p className="text-ink-soft text-base mt-3 leading-relaxed">
            Standardized operational blueprints, database schemas, and automation workflows engineered for high-intent B2B service practices.
          </p>
        </div>

        {/* Section 1: Standardized Operational Systems (Projects Showcase) */}
        <div className="space-y-8 mb-20">
          <div className="flex items-center justify-between pb-4 border-b border-line">
            <h2 className="font-serif font-bold text-2xl text-ink">
              Production System Architectures
            </h2>
            <span className="text-xs font-mono text-ink-soft">
              {PROJECTS.length} Blueprints
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className={`bg-cloud/60 border rounded-2xl p-6 flex flex-col justify-between hover:bg-paper hover:shadow-card transition-all duration-300 ${
                  project.isFlagship ? "border-cobalt/40 ring-1 ring-cobalt/20" : "border-line"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    {project.isFlagship ? (
                      <span className="text-[10px] font-mono font-bold text-cobalt bg-cobalt-light px-2.5 py-1 rounded-md border border-cobalt/20 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-cobalt" />
                        THE FLAGSHIP SYSTEM
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono font-semibold text-ink-soft bg-paper px-2.5 py-1 rounded-md border border-line">
                        PRODUCTION SYSTEM
                      </span>
                    )}
                    <span className="text-[10px] font-semibold text-ink-soft uppercase">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-lg text-ink">
                      {project.title}
                    </h3>
                    <p className="text-xs text-ink-soft leading-relaxed mt-2">
                      {project.shortDesc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-2">
                    {project.techStack.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-paper border border-line/60 text-ink-soft">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-line/60 mt-6 flex items-center justify-between gap-2">
                  <Link
                    href={`/systems/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cobalt hover:underline"
                  >
                    <span>View Blueprint</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => setSelectedPdfProject(project)}
                    className="p-2 rounded-lg bg-paper border border-line text-ink hover:text-cobalt text-xs font-medium transition-colors"
                    title="Download PDF Case Study"
                  >
                    <Download className="w-3.5 h-3.5 text-cobalt" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: 6 Core Operational Systems */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-line">
            <h2 className="font-serif font-bold text-2xl text-ink">
              6 Core Operational Systems We Architect
            </h2>
            <span className="text-xs font-mono text-ink-soft">
              6 Core Systems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SYSTEMS.map((sys) => (
              <div
                key={sys.id}
                className="bg-cloud/60 border border-line rounded-2xl p-6 flex flex-col justify-between hover:bg-paper hover:shadow-card transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-2 h-2 rounded-full bg-cobalt"></span>
                    <span className="text-[10px] font-mono font-semibold text-ink-soft uppercase px-2.5 py-0.5 rounded bg-paper border border-line">
                      {sys.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-base text-ink">
                      {sys.title}
                    </h3>
                    <p className="text-xs text-ink-soft leading-relaxed mt-2">
                      {sys.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-line/60 mt-6">
                  <Link
                    href={`/systems/${sys.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cobalt hover:underline"
                  >
                    <span>View System Blueprint</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PdfModal
        project={selectedPdfProject}
        isOpen={!!selectedPdfProject}
        onClose={() => setSelectedPdfProject(null)}
      />
    </div>
  );
}
