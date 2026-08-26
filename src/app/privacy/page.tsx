import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail } from "lucide-react";

export default function PrivacyPage() {
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
            LEGAL FOUNDATIONS
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-ink tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-ink-soft">Effective Date: August 2026</p>
        </div>

        <div className="space-y-6 text-ink-soft text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-ink">1. Information We Collect</h2>
            <p>
              Nitin Systems collects information provided directly by clients and visitors through intake diagnostic forms, newsletter opt-in fields, and direct email communication (such as full names, work email addresses, business details, and operational technology stack information).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-ink">2. How Information Is Used</h2>
            <p>
              Information submitted via our intake forms is strictly used to evaluate operational bottlenecks, prepare custom diagnostic video assessments, schedule system audit sessions, and send requested newsletter playbooks. We never sell, rent, or trade your client data to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-ink">3. Data Security & Confidentiality</h2>
            <p>
              As a technical consulting practice, we adhere to high standards of client data security. All form payload transmissions are encrypted via standard SSL/TLS protocols.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-lg text-ink">4. Contact & Data Inquiries</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request data removal, please contact Nitin Systems directly at{" "}
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
