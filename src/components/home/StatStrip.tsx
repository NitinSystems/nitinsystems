"use client";

import React from "react";
import { motion } from "framer-motion";

export const StatStrip = () => {
  const stats = [
    { label: "Form Ingestion Latency", value: "< 500ms" },
    { label: "CRM Stage Hygiene", value: "100%" },
    { label: "Duplicate Entry Rate", value: "0%" },
    { label: "Qualified Lead Booking Lift", value: "+38%" },
  ];

  return (
    <section className="py-10 bg-ink text-paper border-y border-ink-soft/30 shadow-md overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 14,
                delay: idx * 0.1,
              }}
              className="p-4 rounded-xl bg-paper/5 border border-paper/10 hover:border-cobalt/50 transition-colors"
            >
              <span className="font-serif font-bold text-2xl sm:text-3xl text-cobalt-light block tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] font-mono font-medium text-paper/70 uppercase tracking-wider block mt-1">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
