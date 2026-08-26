import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="py-12 bg-paper min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-ink-soft hover:text-cobalt transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-3 border-b border-line pb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-cobalt px-3 py-1 rounded-full bg-cobalt-light border border-cobalt/20">
            OPERATIONAL AGREEMENT
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-ink tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-ink-soft">Effective Date: August 2026</p>
        </div>

        <div className="space-y-6 text-ink-soft text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-ink">1. Consulting Engagements</h2>
            <p>
              Nitin Systems provides B2B automation infrastructure design, CRM pipeline structuring, and operational consulting services led by Nitin Mishra. All bespoke project engagements are governed by individual Master Services Agreements (MSA) and Statements of Work (SOW).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-ink">2. Intellectual Property & Handoff</h2>
            <p>
              Upon complete settlement of project invoices, clients retain full ownership of all custom workflow scenarios, database schemas, and documentation created specifically for their business operations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-ink">3. Audit & Diagnostic Services</h2>
            <p>
              Initial 15-minute diagnostic calls and Loom video reviews are complimentary discovery sessions designed to assess fit and system compatibility.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-ink">4. Operational Contact</h2>
            <p>
              For inquiries regarding service terms, please contact{" "}
              <a href="mailto:NitinSystems@outlook.com" className="text-cobalt font-semibold hover:underline">
                NitinSystems@outlook.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
