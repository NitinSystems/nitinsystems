"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, FileCode2, Cpu, RefreshCw, CheckCircle2 } from "lucide-react";

export const ExecutionRoadmap = () => {
  const steps = [
    {
      num: "01",
      title: "15-Min Operational Audit",
      desc: "We diagnose your lead intake, CRM stage hygiene, and manual bottlenecks to map your operational gap analysis.",
      icon: Search,
    },
    {
      num: "02",
      title: "Architecture Schematic Blueprint",
      desc: "Before writing any code or scenario logic, we map out your exact data flows, webhook triggers, and edge-case fallbacks.",
      icon: FileCode2,
    },
    {
      num: "03",
      title: "Build & Integration Sprint",
      desc: "We engineer scenarios in Make.com/Zapier, structure CRM deal stages, and connect webhooks with fail-open security.",
      icon: Cpu,
    },
    {
      num: "04",
      title: "Closed-Loop Audit & Handoff",
      desc: "We execute live scenario testing, deliver comprehensive Loom video documentation, and provide ongoing system maintenance.",
      icon: RefreshCw,
    },
  ];

  return (
    <section className="py-20 bg-[#0F172A] text-paper border-b border-ink-soft/30 overflow-hidden" id="process">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-cobalt-light px-3.5 py-1.5 rounded-full bg-paper/10 border border-paper/20 animate-gentle-float inline-block">
            AUDIT-FIRST METHODOLOGY
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-paper mt-4 tracking-tight">
            Our 4-Stage Execution Roadmap
          </h2>
          <p className="text-paper/70 text-sm sm:text-base mt-3">
            Zero code or scenario building begins until we agree on your visual architecture blueprint.
          </p>
        </motion.div>

        {/* 4 Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-paper/5 backdrop-blur-md border border-paper/15 hover:border-cobalt/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:bg-paper/10 transition-all duration-300 group raycast-hover"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cobalt-light bg-cobalt/20 px-3 py-1 rounded-md border border-cobalt/40">
                      STAGE {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-paper/10 border border-paper/20 flex items-center justify-center text-cobalt-light group-hover:scale-110 transition-transform animate-gentle-float">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-lg text-paper group-hover:text-cobalt-light transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-paper/70 leading-relaxed mt-2">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-paper/10 mt-6 flex items-center gap-2 text-[11px] font-mono text-paper/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Standardized Handoff</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
