"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, ShieldAlert, ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const OperationalGaps = () => {
  const gaps = [
    {
      icon: Clock,
      title: "Inquiries Sitting Unanswered for Hours",
      metric: "4.2 Hours Avg Latency",
      desc: "Prospects fill out landing page forms, but inquiries sit in shared inboxes until sales reps manually review them—costing up to 70% of lead conversion potential.",
      solution: "Instant &lt;30s Webhook Triage & Auto-Response",
    },
    {
      icon: AlertTriangle,
      title: "Dirty Data & Duplicate CRM Entries",
      metric: "32% CRM Friction",
      desc: "Repetitive form submissions create duplicate contact cards, overwrite active deal histories, and confuse sales account assignments across pipelines.",
      solution: "Real-Time Email & Phone Hash Duplicate Filter",
    },
    {
      icon: ShieldAlert,
      title: "Unqualified Calls Wasting Partner Time",
      metric: "14+ Hrs/Wk Lost",
      desc: "Senior partners spend hours on discovery calls with low-budget prospects who were never qualified before booking a calendar slot.",
      solution: "AI Intent & Fit Decisioning via OpenAI API",
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-line/80 overflow-hidden" id="gaps">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-cobalt px-3.5 py-1.5 rounded-full bg-white border border-cobalt/20 shadow-xs animate-gentle-float inline-block">
            OPERATIONAL BOTTLENECKS WE ELIMINATE
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0F172A] mt-4 tracking-tight">
            Stop Revenue Leaking From Your Operations
          </h2>
          <p className="text-ink-soft text-sm sm:text-base mt-3">
            High-growth service businesses lose 20-35% of pipeline value to manual coordination and memory-based execution.
          </p>
        </motion.div>

        {/* 3 Bento Gap Cards with Clean Warm Slate Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gaps.map((gap, idx) => {
            const Icon = gap.icon;
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
              >
                <SpotlightCard className="rounded-2xl p-7 flex flex-col justify-between h-full group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shadow-2xs animate-gentle-float">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200 shadow-2xs">
                        {gap.metric}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#0F172A] group-hover:text-cobalt transition-colors">
                        {gap.title}
                      </h3>
                      <p className="text-xs text-ink-soft leading-relaxed mt-2">
                        {gap.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-line/60 mt-6 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cobalt font-bold block">
                      HOW NITIN SYSTEMS FIXES THIS:
                    </span>
                    <div className="flex items-center justify-between text-xs font-semibold text-[#0F172A]">
                      <span dangerouslySetInnerHTML={{ __html: gap.solution }}></span>
                      <ArrowRight className="w-3.5 h-3.5 text-cobalt raycast-arrow-icon shrink-0" />
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
