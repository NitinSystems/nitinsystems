"use client";

import React, { useState } from "react";
import { CheckCircle2, Cpu, Zap, Calendar, Database, Filter, ArrowRight, Activity } from "lucide-react";

export const WorkflowConsole = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 0,
      title: "01. Multi-Channel Ingestion",
      tag: "Lead Ingest",
      tool: "Webhooks / Make / Zapier",
      icon: Filter,
      metric: "< 500ms Latency",
      desc: "Captures prospect inquiries from forms, ads, and emails, normalizing data into structured JSON objects.",
    },
    {
      id: 1,
      title: "02. AI Qualification & Triage",
      tag: "Qualification Engine",
      tool: "OpenAI API / Custom Logic",
      icon: Cpu,
      metric: "96% Accuracy",
      desc: "Scores intent, budget, and service fit instantly. Filters spam and tags VIP high-ticket accounts.",
    },
    {
      id: 2,
      title: "03. CRM Stage Sync",
      tag: "CRM Pipeline",
      tool: "HubSpot / GoHighLevel / Airtable",
      icon: Database,
      metric: "100% Data Hygiene",
      desc: "Creates or updates deal records, sets property schemas, and assigns sales owners dynamically.",
    },
    {
      id: 3,
      title: "04. Multi-Touch Nurture",
      tag: "Lifecycle Trigger",
      tool: "Twilio / SendGrid / Automation",
      icon: Zap,
      metric: "Instant Delivery",
      desc: "Triggers personalized SMS/Email re-engagement sequences and diagnostic value drops.",
    },
    {
      id: 4,
      title: "05. Confirmed Scheduling",
      tag: "Booked Call",
      tool: "Cal.com / Google Calendar",
      icon: Calendar,
      metric: "+38% Conversion",
      desc: "Frictionless calendar booking with automated pre-meeting intake questionnaire enrichment.",
    },
  ];

  return (
    <div className="w-full bg-paper border border-line rounded-2xl p-6 sm:p-8 shadow-card relative overflow-hidden">
      {/* Console Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
            Live Architecture Schematic
          </span>
          <span className="text-xs px-2 py-0.5 rounded bg-cobalt/10 text-cobalt font-mono font-medium">
            System Status: Optimal
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-ink-soft">
          <Activity className="w-3.5 h-3.5 text-cobalt" />
          <span>Interactive Diagram — Click Nodes to Inspect</span>
        </div>
      </div>

      {/* SVG Diagram Canvas */}
      <div className="py-8 my-2 overflow-x-auto">
        <div className="min-w-[640px] flex items-center justify-between relative px-4">
          {/* Connecting Line Background */}
          <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-line -translate-y-1/2 z-0"></div>

          {/* Animated Glow Flow Line */}
          <div
            className="absolute top-1/2 left-10 h-0.5 bg-cobalt -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 80 + 5}%` }}
          ></div>

          {/* Workflow Step Nodes */}
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            const isPassed = activeStep >= idx;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`relative z-10 flex flex-col items-center group focus:outline-none`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 border ${
                    isSelected
                      ? "bg-cobalt text-paper border-cobalt shadow-md scale-110 ring-4 ring-cobalt/20"
                      : isPassed
                      ? "bg-paper text-cobalt border-cobalt shadow-sm"
                      : "bg-cloud text-ink-soft border-line hover:border-ink-soft/40"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={`mt-3 text-xs font-semibold tracking-tight transition-colors ${
                    isSelected ? "text-cobalt font-bold" : "text-ink-soft"
                  }`}
                >
                  {step.tag}
                </span>
                <span className="text-[10px] text-ink-soft/70 font-mono">Node 0{idx + 1}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Node Detail Card */}
      <div className="mt-4 bg-cloud border border-line/80 rounded-xl p-5 transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-line/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cobalt"></span>
            <h4 className="font-serif font-bold text-ink text-base">
              {steps[activeStep].title}
            </h4>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="px-2.5 py-1 rounded-md bg-paper border border-line text-ink-soft font-mono font-medium">
              Stack: {steps[activeStep].tool}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/60">
              {steps[activeStep].metric}
            </span>
          </div>
        </div>
        <p className="mt-3 text-ink-soft text-xs sm:text-sm leading-relaxed">
          {steps[activeStep].desc}
        </p>

        <div className="mt-4 flex items-center justify-between text-xs pt-2">
          <button
            onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
            className="text-ink-soft hover:text-ink font-medium"
          >
            ← Previous Node
          </button>
          <div className="flex gap-1">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${i === activeStep ? "bg-cobalt" : "bg-line"}`}
              ></span>
            ))}
          </div>
          <button
            onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
            className="text-cobalt hover:text-cobalt-dark font-semibold flex items-center gap-1"
          >
            <span>Next Node</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
