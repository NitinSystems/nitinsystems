"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-cloud border-t border-line text-ink py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-line">
          {/* Brand & Solo Practice Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 min-w-[32px] min-h-[32px] rounded-lg bg-cloud border border-line flex items-center justify-center p-1 shadow-xs overflow-hidden">
                <img
                  src="/brand/personal-mark-blue.svg"
                  alt="Nitin Systems Brand Mark"
                  className="brand-logo-img"
                  style={{ width: "32px", height: "32px", minWidth: "32px", minHeight: "32px", objectFit: "contain" }}
                />
              </div>
              <span className="font-serif font-bold text-xl text-ink tracking-tight">
                Nitin Systems
              </span>
            </div>
            <p className="text-ink-soft text-sm leading-relaxed max-w-md">
              B2B operational systems consulting practice led solo by Nitin Mishra. Designing, architecting, and maintaining fault-tolerant automation pipelines for scaling service businesses with direct founder-level access.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="mailto:NitinSystems@outlook.com"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-paper border border-line text-xs font-semibold text-ink hover:text-cobalt hover:border-cobalt/30 transition-all shadow-2xs"
              >
                <Mail className="w-4 h-4 text-cobalt" />
                <span>NitinSystems@outlook.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-serif font-bold text-ink text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-ink-soft">
              <li>
                <Link href="/" className="hover:text-cobalt transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/systems" className="hover:text-cobalt transition-colors">
                  Systems Library & Blueprints
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cobalt transition-colors">
                  About Founder Nitin Mishra
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:text-cobalt transition-colors">
                  The Builder's Log (Newsletter)
                </Link>
              </li>
              <li>
                <Link href="/audit" className="hover:text-cobalt transition-colors">
                  System Diagnostic Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Flagship Architectures Column */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="font-serif font-bold text-ink text-sm uppercase tracking-wider">
              Flagship Architecture
            </h4>
            <ul className="space-y-2 text-xs font-medium text-ink-soft">
              <li>
                <Link
                  href="/systems/lead-capture-to-booking-systems"
                  className="hover:text-cobalt transition-colors flex items-center justify-between group"
                >
                  <span>GoHighLevel Lead Capture System</span>
                  <span className="text-[10px] text-cobalt group-hover:translate-x-0.5 transition-transform">↗</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/systems/ai-customer-journey-operations-and-recovery-system"
                  className="hover:text-cobalt transition-colors flex items-center justify-between group"
                >
                  <span>AI Customer Journey Operations System</span>
                  <span className="text-[10px] text-cobalt group-hover:translate-x-0.5 transition-transform">↗</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/systems/lead-intake-duplicate-verification"
                  className="hover:text-cobalt transition-colors flex items-center justify-between group"
                >
                  <span>Lead Intake & Duplicate Verification</span>
                  <span className="text-[10px] text-cobalt group-hover:translate-x-0.5 transition-transform">↗</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Back-To-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-soft">
          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} Nitin Systems. Solo Practice led by Nitin Mishra.</p>
            <span className="text-line">|</span>
            <Link href="/privacy" className="hover:text-ink transition-colors">
              Privacy Policy
            </Link>
            <span className="text-line">|</span>
            <Link href="/terms" className="hover:text-ink transition-colors">
              Terms of Service
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-paper border border-line hover:border-ink-soft/40 text-ink text-xs font-medium transition-all shadow-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cobalt" />
          </button>
        </div>
      </div>
    </footer>
  );
};
