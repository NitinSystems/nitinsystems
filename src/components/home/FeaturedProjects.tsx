"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS, Project } from "@/data/projectsData";
import { PdfModal } from "@/components/ui/PdfModal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ArrowUpRight, Download, Star } from "lucide-react";

export const FeaturedProjects = () => {
  const [selectedPdfProject, setSelectedPdfProject] = useState<Project | null>(null);

  return (
    <section className="py-24 bg-[#F1F5F9] border-b border-line overflow-hidden" id="case-studies">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-cobalt px-3.5 py-1.5 rounded-full bg-white border border-cobalt/20 shadow-xs animate-gentle-float inline-block">
            SYSTEM ARCHITECTURE SHOWCASE
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0F172A] mt-4 tracking-tight">
            Standardized Operational Systems
          </h2>
          <p className="text-ink-soft text-sm sm:text-base mt-3">
            Production operational blueprints engineered for high-intent B2B service practices. Includes live scenario workflows, database schemas, and downloadable case study PDFs.
          </p>
        </motion.div>

        {/* Dedicated Full-Width Project Showcases */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <SpotlightCard
                className={`rounded-3xl p-8 sm:p-10 relative overflow-hidden group ${
                  project.isFlagship ? "border-cobalt/40 ring-1 ring-cobalt/20" : "border-line"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Visual Media & Architecture Cover Preview (Left Col 7) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center justify-between">
                      {/* ONLY render Flagship Pill for AI Customer Journey */}
                      {project.isFlagship ? (
                        <div className="flex items-center gap-2 animate-gentle-float">
                          <span className="w-2.5 h-2.5 rounded-full bg-cobalt animate-ping"></span>
                          <span className="text-xs font-mono font-bold text-cobalt uppercase tracking-wider flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-cobalt/20 shadow-2xs">
                            <Star className="w-3.5 h-3.5 fill-cobalt text-cobalt" />
                            THE FLAGSHIP SYSTEM
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-ink-soft"></span>
                          <span className="text-xs font-mono font-bold text-ink-soft uppercase tracking-wider">
                            PRODUCTION SYSTEM
                          </span>
                        </div>
                      )}
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white text-ink-soft border border-line shadow-2xs">
                        {project.category}
                      </span>
                    </div>

                    {/* High-Impact Presentation Cover Viewport */}
                    <div className="bg-white border border-line rounded-2xl p-4 overflow-hidden relative group/visual shadow-2xs">
                      {project.isFlagship ? (
                        /* Cover 1: Official Project Folder Cover Image */
                        <div className="aspect-video rounded-xl bg-white border border-line overflow-hidden relative flex items-center justify-center">
                          <img
                            src={encodeURI(project.previewImage)}
                            alt="AI Customer Journey Operations & Recovery System Featured Project Cover Card"
                            className="w-full h-full object-cover object-top group-hover/visual:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent flex items-end p-4">
                            <span className="text-xs font-mono text-white font-semibold bg-[#0F172A]/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/20">
                              Official Project Cover & Architecture Blueprint
                            </span>
                          </div>
                        </div>
                      ) : index === 1 ? (
                        /* Cover 2: Custom Landscape Architecture Cover for Lead Capture to Booking */
                        <div className="aspect-video rounded-xl bg-gradient-to-br from-white via-cloud to-cobalt-light/30 border border-line p-6 flex flex-col justify-between relative overflow-hidden group-hover/visual:border-cobalt/40 transition-colors">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono font-bold text-cobalt uppercase tracking-widest px-2.5 py-1 rounded bg-white border border-cobalt/20">
                              ARCHITECTURE BLUEPRINT COVER
                            </span>
                            <span className="text-[10px] font-mono text-ink-soft">
                              GoHighLevel + Gmail + Calendar
                            </span>
                          </div>

                          <div className="my-auto space-y-3 py-2 text-center sm:text-left">
                            <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#0F172A] tracking-tight">
                              Lead Capture & Booking System
                            </h4>
                            <div className="grid grid-cols-4 gap-2 pt-1">
                              <div className="bg-white p-2 rounded-lg border border-line text-center shadow-2xs">
                                <span className="text-[9px] font-mono font-bold text-cobalt block">01 INGEST</span>
                                <span className="text-[8px] text-ink-soft block mt-0.5">Form / Meta Ads</span>
                              </div>
                              <div className="bg-white p-2 rounded-lg border border-line text-center shadow-2xs">
                                <span className="text-[9px] font-mono font-bold text-cobalt block">02 TRIAGE</span>
                                <span className="text-[8px] text-ink-soft block mt-0.5">Auto Scoring</span>
                              </div>
                              <div className="bg-white p-2 rounded-lg border border-line text-center shadow-2xs">
                                <span className="text-[9px] font-mono font-bold text-cobalt block">03 SYNC</span>
                                <span className="text-[8px] text-ink-soft block mt-0.5">Two-Way Calendar</span>
                              </div>
                              <div className="bg-white p-2 rounded-lg border border-line text-center shadow-2xs">
                                <span className="text-[9px] font-mono font-bold text-emerald-700 block">04 BOOKED</span>
                                <span className="text-[8px] text-ink-soft block mt-0.5">Reminders Set</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[10px] font-mono text-ink-soft border-t border-line/60 pt-2">
                            <span>Status: Verified Production Blueprint</span>
                            <span className="text-cobalt font-semibold">Latency: &lt; 30s</span>
                          </div>
                        </div>
                      ) : (
                        /* Cover 3: System Architecture Blueprint Card for Lead Intake & Duplicate Verification */
                        <div className="aspect-video rounded-xl bg-gradient-to-br from-white via-cloud to-white border border-line p-6 flex flex-col justify-between relative overflow-hidden">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono font-bold text-ink-soft uppercase tracking-widest px-2.5 py-1 rounded bg-white border border-line">
                              PORTFOLIO INTAKE BLUEPRINT
                            </span>
                            <span className="text-[10px] font-mono text-emerald-700 font-semibold">
                              100% Data Hygiene
                            </span>
                          </div>

                          <div className="my-auto space-y-3 text-center sm:text-left py-2">
                            <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#0F172A] tracking-tight">
                              Lead Intake & Duplicate Verification
                            </h4>
                            <p className="text-xs text-ink-soft leading-relaxed max-w-md">
                              Real-time phone & email hash lookup engine protecting Airtable & HubSpot CRM from duplicate contact creation.
                            </p>
                          </div>

                          <div className="flex items-center justify-between text-[10px] font-mono text-ink-soft border-t border-line/60 pt-2">
                            <span>Architecture: Make.com + Airtable + HubSpot</span>
                            <span className="text-cobalt font-semibold">Duplicate Entry: 0%</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* System Specifications & Content (Right Col 5) */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="font-serif font-bold text-2xl text-[#0F172A] tracking-tight group-hover:text-cobalt transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mt-3">
                        {project.fullDesc}
                      </p>
                    </div>

                    {/* Hard Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2 bg-white/90 p-3.5 rounded-xl border border-line/60 shadow-2xs">
                      {(project.metrics || []).map((m, i) => (
                        <div key={i} className="text-center">
                          <span className="font-serif font-bold text-cobalt text-sm block">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-ink-soft block mt-0.5 font-medium">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {(project.techStack || []).map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-white/90 text-[#0F172A] font-medium border border-line/60 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Group */}
                    <div className="pt-4 border-t border-line/60 flex flex-col sm:flex-row items-center gap-3">
                      <Link
                        href={`/systems/${project.slug}`}
                        className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-cobalt hover:bg-cobalt-dark text-white text-xs font-semibold shadow-xs transition-colors text-center flex items-center justify-center gap-1.5"
                      >
                        <span>Explore Blueprint</span>
                        <ArrowUpRight className="w-3.5 h-3.5 raycast-arrow-icon" />
                      </Link>

                      <button
                        onClick={() => setSelectedPdfProject(project)}
                        className="w-full sm:w-auto py-3 px-4 rounded-xl bg-white border border-line hover:border-cobalt/40 text-[#0F172A] hover:text-cobalt text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                      >
                        <Download className="w-3.5 h-3.5 text-cobalt" />
                        <span>Download PDF ↗</span>
                      </button>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PDF Download Modal */}
      <PdfModal
        project={selectedPdfProject}
        isOpen={!!selectedPdfProject}
        onClose={() => setSelectedPdfProject(null)}
      />
    </section>
  );
};
