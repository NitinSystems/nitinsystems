"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, BookOpen, Calendar, Mail, ShieldCheck, Download } from "lucide-react";

export default function ThankYouPage() {
  const [intentCohort, setIntentCohort] = useState<"high" | "medium" | "low">("high");
  const [serviceTypeLabel, setServiceTypeLabel] = useState("");

  useEffect(() => {
    // Load Cal.com embed script dynamically
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if ((window as any).Cal) {
        (window as any).Cal("init", { origin: "https://app.cal.com" });
        (window as any).Cal("ui", {
          cssVarsPerTheme: { light: { "cal-brand": "#2F5FD0" }, dark: { "cal-brand": "#2F5FD0" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      }
    };

    // Intent routing logic extracted from script.js & thank-you.html
    try {
      const stored = sessionStorage.getItem("submitted_service_type") || "";
      setServiceTypeLabel(stored);

      const highIntent = [
        "Lead Capture & Intake",
        "CRM Setup & Organization",
        "Follow-Up Automation",
        "Lead Routing & Qualification",
        "Booking & Intake Workflows",
        "Integration / Workflow Support",
        "Process Optimization",
      ];
      const lowIntent = ["Not Sure, Need Guidance"];

      if (highIntent.includes(stored)) {
        setIntentCohort("high");
      } else if (lowIntent.includes(stored)) {
        setIntentCohort("low");
      } else {
        setIntentCohort("medium");
      }
    } catch (e) {
      setIntentCohort("high");
    }
  }, []);

  return (
    <div className="py-16 bg-dot-grid min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-paper border border-line rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 inline-block">
            INTAKE RECEIVED — DIAGNOSTIC IN PROGRESS
          </span>

          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-ink tracking-tight">
            Thanks — Your Operational Intake Request Has Been Received
          </h1>

          <p className="text-ink-soft text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Your details have been submitted successfully. Nitin Mishra will personally review your operational bottlenecks and tech stack requirements before our call.
          </p>

          <div className="text-xs font-semibold text-ink-soft/80 bg-cloud py-2 px-4 rounded-lg inline-block border border-line/60">
            Expected Diagnostic turnaround: <span className="text-ink font-bold">Within 24 Hours</span>
          </div>

          {/* Dynamic Intent-Based Action Card */}
          <div className="py-6 border-y border-line space-y-4 max-w-md mx-auto">
            {intentCohort === "high" ? (
              <div className="space-y-3">
                <p className="text-xs text-ink font-medium">
                  High-Priority Intake Detected. Schedule your 15-minute diagnostic session directly below:
                </p>
                <button
                  data-cal-link="nitinmishra/30min"
                  data-cal-config='{"layout":"month_view"}'
                  className="w-full py-3.5 px-6 rounded-full bg-cobalt hover:bg-cobalt-dark text-paper font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book 15-Min Discovery Call (Cal.com)</span>
                </button>
                <p className="text-[11px] text-ink-soft">
                  Or Nitin Mishra will review your intake details and email you first.
                </p>
              </div>
            ) : intentCohort === "medium" ? (
              <div className="space-y-3">
                <a
                  href="mailto:NitinSystems@outlook.com?subject=Additional%20System%20Details"
                  className="w-full py-3.5 px-6 rounded-full bg-cobalt hover:bg-cobalt-dark text-paper font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email NitinSystems@outlook.com Additional Details</span>
                </a>
                <p className="text-[11px] text-ink-soft">
                  Nitin Mishra will review your submission and reach out directly.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-ink font-medium">
                  Nitin Mishra will review your submission and reach out within 24 hours.
                </p>
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/systems"
                className="w-full sm:w-auto px-5 py-2 rounded-xl bg-cloud border border-line text-ink hover:text-cobalt text-xs font-semibold transition-colors"
              >
                Explore Systems Library
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto px-5 py-2 rounded-xl bg-paper border border-line text-ink-soft hover:text-ink text-xs font-semibold transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="text-[11px] text-ink-soft/70 uppercase tracking-widest font-mono">
            Nitin Systems • Solo Practice • Direct Architect Access
          </div>
        </div>
      </div>
    </div>
  );
}
