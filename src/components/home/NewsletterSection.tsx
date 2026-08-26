"use client";

import React, { useState } from "react";
import { Mail, ArrowRight, ExternalLink, CheckCircle2, BookOpen } from "lucide-react";

export const NewsletterSection = () => {
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

  return (
    <section className="py-20 bg-paper border-b border-line" id="newsletter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-cloud border border-line rounded-3xl p-8 sm:p-12 shadow-card flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Content side */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cobalt/10 text-cobalt flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-cobalt">
                THE BUILDER'S LOG
              </span>
            </div>

            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-ink tracking-tight">
              B2B Automation Playbooks & Architecture Breakdown
            </h3>

            <p className="text-ink-soft text-sm leading-relaxed mt-3">
              Join technical founders and operators receiving transparent playbooks, workflow error post-mortems, and practical system architecture breakdowns.
            </p>

            <div className="mt-4 flex items-center gap-4 text-xs text-ink-soft">
              <span className="flex items-center gap-1 font-medium text-ink">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Weekly Insights
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium text-ink">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Zero Hype / Pure Systems
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium text-ink">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 1-Click Unsubscribe
              </span>
            </div>
          </div>

          {/* Form & External Beehiiv trigger */}
          <div className="w-full lg:max-w-md bg-paper border border-line rounded-2xl p-6 shadow-xs">
            {subscribed ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-ink text-lg">You're Subscribed!</h4>
                <p className="text-xs text-ink-soft">
                  Redirecting you to the full publication archive on Beehiiv...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                    Subscribe to The Builder's Log
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-ink-soft absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="enter your work email..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-cloud border border-line focus:border-cobalt focus:bg-paper focus:outline-none text-ink text-xs transition-all"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cobalt hover:bg-cobalt-dark text-paper text-xs font-semibold shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Subscribe to Newsletter</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="pt-2 border-t border-line/60 text-center">
                  <a
                    href="https://nitinmishra.beehiiv.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cobalt hover:text-cobalt-dark font-medium transition-colors"
                  >
                    <span>Read archives on Beehiiv</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
