"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, ArrowRight, ShieldCheck, AlertCircle, CheckCircle2 } from "lucide-react";

export const IntakeForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business_type: "",
    service_type: "Lead Capture & Intake",
    operational_challenge: "",
    current_tools: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Please enter a valid work email address.");
      return;
    }
    if (!formData.operational_challenge.trim()) {
      setError("Please describe what is currently breaking in your operations.");
      return;
    }

    setLoading(true);

    try {
      const normalizedEmail = formData.email.trim().toLowerCase();
      
      // Store service_type in sessionStorage for intent routing on thank-you page
      try {
        sessionStorage.setItem("submitted_service_type", formData.service_type);
      } catch (err) {}

      // Configured Make.com Webhook Endpoints from script.js
      const webhookUrl = "https://hook.eu1.make.com/f94swjs7bo3239k6bszr9e5x7uorhepc";
      const checkEmailUrl = "https://hook.eu1.make.com/m7rmq58ynkjl9pwic5w8edv4ya39f5dt";

      let duplicateDecision = "New Entry";
      let checkSource = "Make.com Live Lookup";

      // 24-Hour Duplicate Lookup Check
      try {
        const checkRes = await fetch(`${checkEmailUrl}?email=${encodeURIComponent(normalizedEmail)}`, {
          method: "GET",
        });
        if (checkRes.ok) {
          const checkData = await checkRes.json();
          if (checkData.exists) {
            duplicateDecision = "Resubmitted (<24h)";
          }
        }
      } catch (checkErr) {
        console.warn("Duplicate lookup failed, failing open:", checkErr);
      }

      // Build payload matching exact script.js schema
      const payload: Record<string, string> = {
        name: formData.name.trim(),
        email: normalizedEmail,
        business_type: formData.business_type.trim() || "Not Specified",
        service_type: formData.service_type,
        operational_challenge: formData.operational_challenge.trim(),
        current_tools: formData.current_tools.trim() || "None Specified",
        submission_id: `SUB-${Date.now()}`,
        duplicate_decision: duplicateDecision,
        duplicate_check_source: checkSource,
        browser_information: typeof navigator !== "undefined" ? navigator.userAgent : "NextJS App Router",
        submission_timestamp: new Date().toISOString(),
        source_page: "/audit",
      };

      // Convert payload to URLSearchParams to bypass CORS preflight
      const urlEncodedPayload = new URLSearchParams();
      Object.keys(payload).forEach((key) => urlEncodedPayload.append(key, payload[key]));

      // Submit payload to Make.com webhook & local API route in parallel
      await Promise.allSettled([
        fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: urlEncodedPayload,
        }),
        fetch("/api/intake", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
      ]);

      setLoading(false);
      router.push("/thank-you");
    } catch (err: any) {
      console.error("Intake submission error:", err);
      setLoading(false);
      router.push("/thank-you");
    }
  };

  return (
    <section className="py-20 bg-cloud/40 border-b border-line" id="audit">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-paper border border-line rounded-3xl p-6 sm:p-10 shadow-xl">
          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-cobalt px-3 py-1 rounded-full bg-cobalt-light border border-cobalt/20">
              15-MINUTE SYSTEM DIAGNOSTIC
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-ink mt-4 tracking-tight">
              Book Your Operational System Audit
            </h2>
            <p className="text-ink-soft text-xs sm:text-sm mt-3">
              Fill out this quick intake diagnostic. Nitin Mishra will review your stack and prepare a personalized Loom video breakdown before your call.
            </p>
          </div>

          {/* Validation Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          {/* Intake Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                  Full Name <span className="text-cobalt">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-3 rounded-xl bg-cloud border border-line focus:border-cobalt focus:bg-paper focus:outline-none text-ink text-sm transition-all"
                  required
                />
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                  Work Email <span className="text-cobalt">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="sarah@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-cloud border border-line focus:border-cobalt focus:bg-paper focus:outline-none text-ink text-sm transition-all"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Business Type */}
              <div>
                <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                  Business Type / Industry
                </label>
                <input
                  type="text"
                  name="business_type"
                  value={formData.business_type}
                  onChange={handleChange}
                  placeholder="e.g. B2B Consulting / Agency"
                  className="w-full px-4 py-3 rounded-xl bg-cloud border border-line focus:border-cobalt focus:bg-paper focus:outline-none text-ink text-sm transition-all"
                />
              </div>

              {/* Service / Primary Need */}
              <div>
                <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                  Primary System Need <span className="text-cobalt">*</span>
                </label>
                <select
                  name="service_type"
                  value={formData.service_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-cloud border border-line focus:border-cobalt focus:bg-paper focus:outline-none text-ink text-sm transition-all"
                >
                  <option value="Lead Capture & Intake">Lead Capture & Ingestion Automation</option>
                  <option value="CRM Setup & Organization">CRM Pipeline Setup & Stage Hygiene</option>
                  <option value="Follow-Up Automation">Lifecycle Follow-Up Automation</option>
                  <option value="Lead Routing & Qualification">Lead Qualification & Intent Triage</option>
                  <option value="Booking & Intake Workflows">Booking & Intake Workflows</option>
                  <option value="Integration / Workflow Support">Cross-Platform Integration (Make/Zapier)</option>
                  <option value="Process Optimization">Full Operational Process Rebuild</option>
                  <option value="Not Sure, Need Guidance">Not Sure, Need Guidance</option>
                </select>
              </div>
            </div>

            {/* Operational Bottleneck */}
            <div>
              <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                What is breaking in your operations right now? <span className="text-cobalt">*</span>
              </label>
              <textarea
                name="operational_challenge"
                rows={3}
                value={formData.operational_challenge}
                onChange={handleChange}
                placeholder="e.g. Inquiries are sitting in shared inboxes; our team is manually copy-pasting lead details into spreadsheets."
                className="w-full px-4 py-3 rounded-xl bg-cloud border border-line focus:border-cobalt focus:bg-paper focus:outline-none text-ink text-sm transition-all"
                required
              ></textarea>
            </div>

            {/* Current Tech Stack */}
            <div>
              <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                Current Software Stack (Optional)
              </label>
              <input
                type="text"
                name="current_tools"
                value={formData.current_tools}
                onChange={handleChange}
                placeholder="e.g. HubSpot, Make.com, GoHighLevel, Airtable, Cal.com"
                className="w-full px-4 py-3 rounded-xl bg-cloud border border-line focus:border-cobalt focus:bg-paper focus:outline-none text-ink text-sm transition-all"
              />
            </div>

            {/* Action Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-ink-soft">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct Founder Access. 100% Data Confidentiality.</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cobalt hover:bg-cobalt-dark text-paper font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Executing Diagnostic Submission...</span>
                ) : (
                  <>
                    <span>Submit Intake & Request Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Direct Email Contact Alternative (Standardized NitinSystems@outlook.com) */}
          <div className="mt-8 pt-6 border-t border-line/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-soft">
            <span>Prefer direct email communication?</span>
            <a
              href="mailto:NitinSystems@outlook.com?subject=System%20Audit%20Inquiry"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cloud border border-line text-ink hover:text-cobalt hover:border-cobalt/30 font-semibold transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-cobalt" />
              <span>Email NitinSystems@outlook.com Direct</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
