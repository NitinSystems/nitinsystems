"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FAQS } from "@/data/faqData";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FAQAccordion = () => {
  // CLOSED BY DEFAULT: set to null
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-cloud/70 border-b border-line overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-cobalt px-3 py-1 rounded-full bg-cobalt-light border border-cobalt/20">
            COMMON QUESTIONS
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-ink mt-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-ink-soft text-sm mt-3">
            Clear answers about planning, tech compatibility, and execution standards.
          </p>
        </motion.div>

        {/* Accordion Container with Wave Stagger */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  type: "spring",
                  stiffness: 75,
                  damping: 14,
                  delay: index * 0.08,
                }}
                className="bg-paper border border-line hover:border-cobalt/30 rounded-xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-ink group-hover:text-cobalt transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-cloud border border-line flex items-center justify-center text-ink shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-cobalt text-paper border-cobalt shadow-xs" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-ink-soft text-xs sm:text-sm leading-relaxed border-t border-line/50 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
