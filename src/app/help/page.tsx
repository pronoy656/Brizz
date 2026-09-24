"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  HeartHandshake,
  PhoneCall,
  AlertOctagon,
  HeartPulse,
  Droplets,
  GraduationCap,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  Search,
} from "lucide-react";
import { BRIZZ_HELP_SECTIONS, HelpCategory } from "@/lib/data";

export default function HelpPage() {
  const { language, t } = useLanguage();
  const [searchFilter, setSearchFilter] = useState("");

  const iconMap: Record<string, any> = {
    AlertOctagon,
    HeartPulse,
    Droplets,
    GraduationCap,
    Landmark,
  };

  const filteredSections = BRIZZ_HELP_SECTIONS.filter((sec) => {
    return (
      sec.en.toLowerCase().includes(searchFilter.toLowerCase()) ||
      sec.bn.includes(searchFilter) ||
      sec.itemsEn.some((i) => i.toLowerCase().includes(searchFilter.toLowerCase())) ||
      sec.itemsBn.some((i) => i.includes(searchFilter))
    );
  });

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-4 space-y-12">
        {/* Hero */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-950/40 via-slate-900/80 to-emerald-950/40 border border-emerald-500/20 backdrop-blur-xl text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{t("Free Community & Emergency Aid", "ফ্রি পাবলিক ও জরুরি সহায়তা")}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t("BRIIZZ Free Help Center", "ব্রিজ ফ্রি হেল্প ও জরুরি সার্ভিস")}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t(
              "Public resources, national 24/7 hotlines, verified blood banks, healthcare portals, and citizen government services—available free of cost to everyone across Bangladesh.",
              "জরুরি হেল্পলাইন ৯৯৯, ভেরিফায়েড ব্লাড ব্যাংক, ডাক্তার ও হাসপাতাল তথ্য, সরকারি অনলাইন সেবা—সবার জন্য উন্মুক্ত ও বিনামূল্যের তথ্যভাণ্ডার।"
            )}
          </p>

          <div className="pt-2 max-w-md mx-auto">
            <div className="flex items-center gap-2 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              <Search className="w-5 h-5 text-emerald-500 ml-2" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder={t("Search emergency, blood bank, doctor, NID...", "জরুরি নম্বর, রক্ত, ডাক্তার, পাসপোর্ট খুঁজুন...")}
                className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none px-2 py-1"
              />
            </div>
          </div>
        </div>

        {/* Emergency Quick Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { num: "999", title: "National Emergency", sub: "Police, Fire, Ambulance", color: "text-red-500 bg-red-500/10 border-red-500/30" },
            { num: "16263", title: "Health Hotline", sub: "24/7 Doctor Advice", color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30" },
            { num: "333", title: "Govt Info", sub: "Citizen Services", color: "text-blue-500 bg-blue-500/10 border-blue-500/30" },
            { num: "109", title: "Women Helpline", sub: "Immediate Support", color: "text-purple-500 bg-purple-500/10 border-purple-500/30" },
          ].map((h, i) => (
            <a
              key={i}
              href={`tel:${h.num}`}
              className={`p-5 rounded-2xl border ${h.color} flex flex-col justify-between hover:scale-105 transition-transform group`}
            >
              <div className="text-3xl font-black">{h.num}</div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">{h.title}</div>
                <div className="text-[10px] text-slate-400">{h.sub}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Categorized Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSections.map((sec) => {
            const Icon = iconMap[sec.icon] || HeartHandshake;

            return (
              <div
                key={sec.key}
                id={sec.key}
                className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                        {language === "bn" ? sec.bn : sec.en}
                      </h2>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500">
                      {sec.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {(language === "bn" ? sec.itemsBn : sec.itemsEn).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Contacts */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Hotlines & Direct Lines:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sec.contacts.map((c, i) => (
                      <a
                        key={i}
                        href={`tel:${c.number}`}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200 dark:border-slate-700 flex items-center justify-between transition-colors group"
                      >
                        <div>
                          <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-500">
                            {c.title}
                          </div>
                          <div className="text-[9px] text-slate-400">{c.type}</div>
                        </div>
                        <span className="font-mono text-xs font-bold text-emerald-500">{c.number}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
