"use client";

import React, { useState } from "react";
import { IntakeForm } from "@/components/home/IntakeForm";
import { Calendar, FileText, CheckCircle2, ShieldCheck, Mail } from "lucide-react";

export default function AuditPage() {
  const [activeTab, setActiveTab] = useState<"form" | "calendar">("form");

  return (
    <div className="py-12 bg-dot-grid min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Tab Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-paper border border-line p-1 rounded-full shadow-xs flex items-center gap-1">
            <button
              onClick={() => setActiveTab("form")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === "form"
                  ? "bg-cobalt text-paper shadow-xs"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Diagnostic Intake Form</span>
            </button>

            <button
              onClick={() => setActiveTab("calendar")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === "calendar"
                  ? "bg-cobalt text-paper shadow-xs"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Direct Calendar Scheduler</span>
            </button>
          </div>
        </div>

        {activeTab === "form" ? (
          <IntakeForm />
        ) : (
          <div className="bg-paper border border-line rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6">
            <div className="max-w-xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-cobalt px-3 py-1 rounded-full bg-cobalt-light border border-cobalt/20">
                15-MIN DIAGNOSTIC CALENDAR
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-ink mt-4">
                Schedule Direct Diagnostic Session
              </h2>
              <p className="text-ink-soft text-xs sm:text-sm mt-3">
                Select a 15-minute diagnostic time slot directly on Nitin Mishra's calendar.
              </p>
            </div>

            {/* Embedded Calendar Widget Scaffolding */}
            <div className="bg-cloud border border-line rounded-2xl p-8 min-h-[400px] flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-paper border border-line flex items-center justify-center text-cobalt shadow-sm">
                <Calendar className="w-8 h-8" />
              </div>
              <div className="space-y-2 max-w-md">
                <h3 className="font-serif font-bold text-ink text-lg">
                  Cal.com / Google Calendar Integration Ready
                </h3>
                <p className="text-xs text-ink-soft leading-relaxed">
                  Interactive booking widget embeds directly here to let prospects pick time slots with zero back-and-forth email scheduling.
                </p>
              </div>
              <button
                onClick={() => setActiveTab("form")}
                className="px-6 py-2.5 rounded-full bg-cobalt text-paper text-xs font-semibold hover:bg-cobalt-dark transition-colors"
              >
                Or Fill Out Intake Diagnostic Form
              </button>
            </div>

            <div className="pt-4 border-t border-line text-xs text-ink-soft flex items-center justify-center gap-2">
              <Mail className="w-3.5 h-3.5 text-cobalt" />
              <span>Direct Inquiry Email: NitinSystems@outlook.com</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
