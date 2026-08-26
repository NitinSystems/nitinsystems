"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, UserCheck, Calendar } from "lucide-react";

export const ScarcityBanner = () => {
  return (
    <section className="py-20 bg-[#F3F6FA] border-b border-line overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring", stiffness: 70, damping: 15 }}
          className="bg-gradient-to-br from-ink via-[#0F172A] to-cobalt/30 text-paper rounded-3xl p-8 sm:p-12 shadow-2xl border border-cobalt/30 relative overflow-hidden text-center space-y-6"
        >
          {/* Ambient Glow Effects */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-cobalt/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cobalt-light/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper/10 border border-paper/20 text-xs font-semibold uppercase tracking-widest text-cobalt-light shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>DIRECT FOUNDER BUILD • 1-ON-1 EXECUTION</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-paper tracking-tight max-w-2xl mx-auto leading-tight">
            Work 1-on-1 With Nitin Mishra
          </h2>

          <p className="text-paper/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
            No middle management, no junior handoffs, no corporate fluff. I personally design, build, test, and document every automation system for your business.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/audit"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-cobalt hover:bg-cobalt-dark text-paper font-semibold text-sm shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>Book 15-Min System Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="mailto:NitinSystems@outlook.com?subject=Solo%20Practice%20Inquiry"
              className="w-full sm:w-auto px-6 py-4 rounded-full border border-paper/30 text-paper hover:bg-paper/10 font-semibold text-sm transition-all"
            >
              Email NitinSystems@outlook.com
            </a>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-paper/70 font-medium">
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-emerald-400" />
              <span>Direct Founder Communication</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Audit-First Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>Loom Video Walkthrough Included</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
