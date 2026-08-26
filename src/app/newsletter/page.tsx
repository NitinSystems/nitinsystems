"use client";

import React, { useState } from "react";
import { Mail, ExternalLink, CheckCircle2, BookOpen, ArrowRight } from "lucide-react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setTimeout(() => {
        window.open("https://nitinmishra.beehiiv.com/", "_blank");
      }, 1200);
    }
  };

  const archives = [
    {
      issue: "Issue #014",
      title: "Why Most Make.com Scenarios Fail Silently (And How to Fix Webhook Error Handlers)",
      date: "August 2026",
      desc: "An architectural guide on error directives, rollback strategies, and Slack alerts for mission-critical webhooks.",
    },
    {
      issue: "Issue #013",
      title: "Designing a Clean HubSpot Deal Schema That Sales Reps Actually Follow",
      date: "July 2026",
      desc: "How to enforce mandatory property fields at stage transitions without slowing down your closing team.",
    },
    {
      issue: "Issue #012",
      title: "Building an AI Lead Qualification Triage Engine with OpenAI API & Airtable",
      date: "July 2026",
      desc: "Step-by-step breakdown of prompt engineering, scoring rubrics, and automated rejection sequences.",
    },
  ];

  return (
    <div className="py-12 bg-dot-grid min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-cobalt px-3 py-1 rounded-full bg-cobalt-light border border-cobalt/20">
            THE BUILDER'S LOG
          </span>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-ink mt-4 tracking-tight">
            Transparent Automation & Systems Playbooks
          </h1>
          <p className="text-ink-soft text-base sm:text-lg mt-3 leading-relaxed">
            Weekly deep-dives into B2B operational architecture, webhook resilience, and mistake-prevention guides for technical operators.
          </p>
        </div>

        {/* Subscription Box */}
        <div className="bg-paper border border-line rounded-3xl p-8 sm:p-10 shadow-card">
          {subscribed ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-ink">You're Subscribed!</h3>
              <p className="text-xs text-ink-soft">
                Opening the complete archive on Beehiiv...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-xl mx-auto space-y-4">
              <div>
                <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2 text-center">
                  Join Technical Founders Receiving The Builder's Log
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-ink-soft absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email address..."
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-cloud border border-line focus:border-cobalt focus:bg-paper text-sm text-ink focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-cobalt hover:bg-cobalt-dark text-paper font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Subscribe to Newsletter</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-center">
                <a
                  href="https://nitinmishra.beehiiv.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-cobalt hover:underline font-semibold"
                >
                  <span>Or read and subscribe directly on Beehiiv</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Recent Issue Archives */}
        <div className="space-y-6">
          <h2 className="font-serif font-bold text-2xl text-ink">
            Recent Playbooks & Archive Previews
          </h2>

          <div className="space-y-4">
            {archives.map((item, idx) => (
              <div
                key={idx}
                className="bg-cloud border border-line rounded-2xl p-6 hover:border-cobalt/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-paper border border-line text-cobalt">
                      {item.issue}
                    </span>
                    <span className="text-xs text-ink-soft/70">{item.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-ink">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ink-soft mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <a
                  href="https://nitinmishra.beehiiv.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-paper border border-line text-ink hover:text-cobalt text-xs font-semibold shrink-0 transition-colors inline-flex items-center gap-1"
                >
                  <span>Read Issue</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
