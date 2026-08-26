"use client";

import React from "react";
import { CREDENTIALS } from "@/data/credentialsData";
import { ExternalLink, ShieldCheck, Award } from "lucide-react";

export const VerifiedCredentials = () => {
  return (
    <section className="py-20 bg-cloud/50 border-b border-line" id="credentials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-cobalt px-3 py-1 rounded-full bg-cobalt-light border border-cobalt/20">
            VERIFIED EXPERTISE
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-ink mt-4 tracking-tight">
            Certifications & Platform Credentials
          </h2>
          <p className="text-ink-soft text-sm sm:text-base mt-3">
            Verified platform mastery backed by official accreditation from industry-leading software providers.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CREDENTIALS.map((cred) => (
            <div
              key={cred.id}
              className="bg-paper border border-line rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-card hover:border-cobalt/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cobalt/10 text-cobalt flex items-center justify-center font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-cobalt block">
                        {cred.issuer}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        ✓ {cred.date}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-lg text-ink mb-2 group-hover:text-cobalt transition-colors">
                  {cred.title}
                </h3>
                <p className="text-xs text-ink-soft leading-relaxed mb-4">
                  {cred.description}
                </p>
              </div>

              <div className="pt-4 border-t border-line/60 flex items-center justify-between">
                <span className="text-[10px] font-mono text-ink-soft">
                  ID: {cred.badgeCode}
                </span>

                <a
                  href={cred.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cloud hover:bg-cobalt hover:text-paper text-cobalt text-xs font-semibold border border-line transition-all"
                >
                  <span>Verify ID</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
