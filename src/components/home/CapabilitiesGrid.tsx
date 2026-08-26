"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CORE_SYSTEMS } from "@/data/systemsData";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ArrowUpRight, Filter, Database, Zap, Cpu, Calendar, Layers } from "lucide-react";

export const CapabilitiesGrid = () => {
  const iconMap: Record<string, any> = {
    "sys-1": Filter,
    "sys-2": Database,
    "sys-3": Zap,
    "sys-4": Cpu,
    "sys-5": Calendar,
    "sys-6": Layers,
  };

  return (
    <section className="py-20 bg-white border-b border-line overflow-hidden" id="capabilities">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-cobalt px-3.5 py-1.5 rounded-full bg-cloud border border-cobalt/20 shadow-xs animate-gentle-float inline-block">
            CORE OPERATIONAL CAPABILITIES
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#0F172A] mt-4 tracking-tight">
            6 Core Operational Systems We Architect
          </h2>
          <p className="text-ink-soft text-sm sm:text-base mt-3 font-normal">
            Standardized operational capabilities designed to eliminate manual bottlenecks, structure CRM deal flow, and automate client acquisition pipelines.
          </p>
        </motion.div>

        {/* 6 Dedicated Core Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SYSTEMS.map((system, idx) => {
            const IconComponent = iconMap[system.id] || Layers;
            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard className="rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-cloud border border-cobalt/20 flex items-center justify-center text-cobalt shadow-2xs group-hover:bg-cobalt group-hover:text-white transition-colors animate-gentle-float">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded-md bg-cloud border border-line text-ink-soft shadow-2xs">
                        {system.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#0F172A] group-hover:text-cobalt transition-colors">
                        {system.title}
                      </h3>
                      <p className="text-xs text-ink-soft leading-relaxed mt-2">
                        {system.shortDesc}
                      </p>
                    </div>

                    {/* Tool Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {system.tools.slice(0, 3).map((tool, index) => (
                        <span
                          key={index}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-cloud border border-line/60 text-ink-soft shadow-2xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-line/60 mt-6">
                    <Link
                      href={`/systems/${system.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cobalt hover:underline"
                    >
                      <span>View System Blueprint</span>
                      <ArrowUpRight className="w-3.5 h-3.5 raycast-arrow-icon" />
                    </Link>
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
