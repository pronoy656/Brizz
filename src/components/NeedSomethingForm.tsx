"use client";

import React, { useState } from "react";
import { ArrowRight, Search, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const SUGGESTIONS = [
  { en: "Web & Mobile App", bn: "ওয়েব ও মোবাইল অ্যাপ", query: "Web and mobile app development" },
  { en: "China & Pakistan Wholesale", bn: "চীন ও পাকিস্তান পাইকারি আমদানি", query: "Wholesale import and supply chain" },
  { en: "Office IT & Workstations", bn: "অফিস আইটি ও কম্পিউটার", query: "Office IT infrastructure and hardware" },
  { en: "Corporate Legal & Tax", bn: "ট্রেড লাইসেন্স ও ট্যাক্স", query: "Legal consulting and tax filing" },
];

export default function NeedSomethingForm() {
  const { t, language } = useLanguage();
  const [need, setNeed] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = need.trim();
    if (q) {
      router.push(`/needs/new?q=${encodeURIComponent(q)}`);
    } else {
      router.push(`/needs/new`);
    }
  };

  const handleTagClick = (tagQuery: string) => {
    setNeed(tagQuery);
    router.push(`/needs/new?q=${encodeURIComponent(tagQuery)}`);
  };

  return (
    <section className="w-full py-20 lg:py-28 bg-slate-50/70 dark:bg-[#060a17] border-y border-slate-200/70 dark:border-white/10 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle Ambient Light Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
          {t("Tell Us What You Need.", "আপনার কী প্রয়োজন বলুন।")}{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {t("We Handle the Rest.", "বাকিটা আমরা দেখছি।")}
          </span>
        </h2>

        {/* Clean Subtitle */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {t(
            "Share your requirement in plain words. Our concierge matching engine connects you directly with verified providers across 64 districts — no bidding wars, no delays.",
            "আপনার কী সেবা প্রয়োজন তা সহজ ভাষায় জানান। আমাদের প্ল্যাটফর্ম সরাসরি আপনাকে বিশ্বস্ত ও ভেরিফায়েড প্রোভাইডারের সাথে যুক্ত করবে — কোনো বাড়তি ঝামেলা ছাড়াই।"
          )}
        </p>

        {/* Direct Input Box - Spacious and Full Width */}
        <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 max-w-3xl mx-auto">
          <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white dark:bg-[#12182b] border-2 border-slate-200/90 dark:border-white/15 focus-within:border-blue-600 dark:focus-within:border-blue-500 rounded-2xl sm:rounded-full p-2 sm:p-2.5 shadow-lg shadow-blue-900/5 focus-within:shadow-[0_12px_36px_rgba(37,99,235,0.18)] transition-all">
            <div className="flex items-center gap-3 px-4 py-2.5 sm:py-0 flex-1">
              <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
              <input
                id="need-input"
                type="text"
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                placeholder={t(
                  "e.g. Need a mobile app developer, wholesale electronics from China, or office IT setup...",
                  "যেমন: মোবাইল অ্যাপ ডেভেলপার, পাইকারি পণ্য সরবরাহ, বা অফিস আইটি সেটআপ..."
                )}
                className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm sm:text-base outline-none font-medium"
              />
            </div>
            <button
              type="submit"
              className="mt-2 sm:mt-0 px-8 py-3.5 sm:py-3.5 rounded-xl sm:rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0 cursor-pointer"
            >
              <span>{t("Get Matched", "সমাধান পান")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Popular Suggestions */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
            {t("Popular:", "জনপ্রিয়:")}
          </span>
          {SUGGESTIONS.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleTagClick(item.query)}
              className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white hover:bg-blue-50 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer shadow-sm hover:shadow"
            >
              {language === "bn" ? item.bn : item.en}
            </button>
          ))}
        </div>

        {/* Minimal 3-Point Trust Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{t("Verified Providers Only", "১০০% ভেরিফাইড প্রোভাইডার")}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
            <span>{t("Fast 2-Hour Matching", "দ্রুত ২ ঘণ্টার মধ্যে ম্যাচিং")}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
            <span>{t("Milestone Escrow Protection", "নিরাপদ এসক্রো পেমেন্ট")}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
