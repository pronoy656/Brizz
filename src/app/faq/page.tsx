"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { HelpCircle, ChevronDown, Sparkles, ArrowRight } from "lucide-react";

export default function FAQPage() {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What exactly does BRIIZZ do?",
      a: "BRIIZZ is a single-partner execution platform. Instead of you hunting and managing 5 different vendors for IT, hardware, CCTV, branding, and marketing, BRIIZZ plans, quotes, assigns verified specialists, and guarantees the delivery under one contract.",
    },
    {
      q: "How does BRIIZZ select and vet its service partners?",
      a: "Every partner in our network undergoes portfolio verification, technical background screening, and track-record auditing. Work is released based on performance ratings and milestone satisfaction.",
    },
    {
      q: "Are services available in all 64 districts of Bangladesh?",
      a: "Yes! Digital and software services are delivered nationwide, and physical hardware/CCTV/networking support is coordinated via regional partner hubs across all 8 divisions.",
    },
    {
      q: "How does milestone payment and pricing work?",
      a: "Pricing is transparent and agreed before project kickoff. Payments are held in escrow and released to specialists only as agreed deliverables pass quality review.",
    },
    {
      q: "Can I request custom or unusual requirements not listed on the site?",
      a: "Absolutely! Custom requirements are one of our core strengths. Submit what you need on the 'Get a Solution' page and our solution engineers will structure the entire execution plan.",
    },
    {
      q: "How do I become a verified BRIIZZ partner?",
      a: "Agencies, freelancers, and suppliers can apply through our Partner Network page. Once vetted, you gain access to the Partner Dashboard and direct incoming client jobs.",
    },
    {
      q: "What is the Free Help Center?",
      a: "Our free public resources hub provides direct access to 24/7 national hotlines (999, 16263, 333), verified blood bank contacts, hospital directories, and citizen government portals without any charge.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-400">
            Everything you need to know about how BRIIZZ delivers solutions and coordinates partners.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-slate-900 dark:text-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-500 shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
            Have a different question?
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Our solution advisors are available 24/7 on WhatsApp.
          </p>
          <a
            href="https://wa.me/8801964468626"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
          >
            Chat with Advisor →
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}
