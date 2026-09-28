"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  Zap,
  Unplug,
  Check
} from "lucide-react";

interface BusinessFragment {
  id: string;
  name: { en: string; bn: string };
  category: { en: string; bn: string };
  desc: { en: string; bn: string };
  // Scattered / Disconnected offsets for desktop
  scatterX: number;
  scatterY: number;
  scatterRotate: number;
  scatterScale: number;
  // Unified grid alignment
  unifiedRow: number;
  unifiedCol: number;
  accentColor: string;
}

const BUSINESS_FRAGMENTS: BusinessFragment[] = [
  {
    id: "products",
    name: { en: "PRODUCTS", bn: "প্রোডাক্টস" },
    category: { en: "Material Sourcing", bn: "কাঁচামাল ও সাপ্লাই" },
    desc: { en: "Raw materials & bulk stock", bn: "কাঁচামাল ও পাইকারি পণ্য" },
    scatterX: -260,
    scatterY: -110,
    scatterRotate: -8,
    scatterScale: 0.92,
    unifiedRow: 0,
    unifiedCol: 0,
    accentColor: "#0ea5e9"
  },
  {
    id: "suppliers",
    name: { en: "SUPPLIERS", bn: "সাপ্লায়ার্স" },
    category: { en: "Manufacturing", bn: "ফ্যাক্টরি নেটওয়ার্ক" },
    desc: { en: "500+ verified factories", bn: "ভেরিফাইড উৎপাদনকারী" },
    scatterX: -80,
    scatterY: -145,
    scatterRotate: 5,
    scatterScale: 1.04,
    unifiedRow: 0,
    unifiedCol: 1,
    accentColor: "#3b82f6"
  },
  {
    id: "website",
    name: { en: "WEBSITE", bn: "ওয়েবসাইট" },
    category: { en: "Digital Presence", bn: "ডিজিটাল প্ল্যাটফর্ম" },
    desc: { en: "Next.js portals & app stores", bn: "আধুনিক ওয়েব ও মোবাইল পোর্টাল" },
    scatterX: 110,
    scatterY: -135,
    scatterRotate: -6,
    scatterScale: 0.95,
    unifiedRow: 0,
    unifiedCol: 2,
    accentColor: "#8b5cf6"
  },
  {
    id: "digital-tools",
    name: { en: "DIGITAL TOOLS", bn: "ডিজিটাল টুলস" },
    category: { en: "Automation", bn: "বিজনেস অটোমেশন" },
    desc: { en: "Live ERP & cloud POS", bn: "ইআরপি ও ইনভেন্টরি অটোমেশন" },
    scatterX: 270,
    scatterY: -95,
    scatterRotate: 7,
    scatterScale: 0.9,
    unifiedRow: 0,
    unifiedCol: 3,
    accentColor: "#06b6d4"
  },
  {
    id: "workspace",
    name: { en: "WORKSPACE", bn: "ওয়ার্কস্পেস" },
    category: { en: "Commercial Hub", bn: "বাণিজ্যিক স্পেস" },
    desc: { en: "Office leases & interiors", bn: "অফিস স্পেস ও ইন্টেরিয়র" },
    scatterX: -270,
    scatterY: 95,
    scatterRotate: 7,
    scatterScale: 0.92,
    unifiedRow: 1,
    unifiedCol: 0,
    accentColor: "#f59e0b"
  },
  {
    id: "logistics",
    name: { en: "LOGISTICS", bn: "লজিস্টিকস" },
    category: { en: "Distribution", bn: "ডিস্ট্রিবিউশন" },
    desc: { en: "64-district delivery", bn: "সারাদেশে নিরাপদ ডেলিভারি" },
    scatterX: -90,
    scatterY: 135,
    scatterRotate: -5,
    scatterScale: 1.02,
    unifiedRow: 1,
    unifiedCol: 1,
    accentColor: "#10b981"
  },
  {
    id: "marketing",
    name: { en: "MARKETING", bn: "মার্কেটিং" },
    category: { en: "Acquisition", bn: "গ্রাহক বৃদ্ধি" },
    desc: { en: "Paid ads & creative media", bn: "টার্গেটেড অ্যাড ও মিডিয়া" },
    scatterX: 95,
    scatterY: 145,
    scatterRotate: 6,
    scatterScale: 0.92,
    unifiedRow: 1,
    unifiedCol: 2,
    accentColor: "#ec4899"
  },
  {
    id: "growth",
    name: { en: "GROWTH", bn: "গ্রোথ" },
    category: { en: "Scale & Revenue", bn: "বিজনেস স্কেলিং" },
    desc: { en: "Audit & legal compliance", bn: "কর্পোরেট অডিট ও কমপ্লায়েন্স" },
    scatterX: 260,
    scatterY: 105,
    scatterRotate: -7,
    scatterScale: 1.06,
    unifiedRow: 1,
    unifiedCol: 3,
    accentColor: "#6366f1"
  }
];

export default function OneStopSolutionV4() {
  const { t, language } = useLanguage();
  
  // Quick intuitive state: "disconnected" vs "unified"
  const [activeState, setActiveState] = useState<"disconnected" | "unified">("unified");
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [hoveredFragId, setHoveredFragId] = useState<string | null>(null);
  const [progressKey, setProgressKey] = useState<number>(0);

  // Snappy auto-play loop (3.2s cycle so user sees both states quickly without delay)
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveState((prev) => (prev === "disconnected" ? "unified" : "disconnected"));
      setProgressKey((k) => k + 1);
    }, 3200);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleManualToggle = (state: "disconnected" | "unified") => {
    setIsAutoPlaying(false);
    setActiveState(state);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying((prev) => !prev);
    setProgressKey((k) => k + 1);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#fcfcfd] dark:bg-[#07090e] text-gray-900 dark:text-white relative overflow-hidden border-t border-gray-200/80 dark:border-white/10 transition-colors duration-500 select-none">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:36px_36px] opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-white/5 border border-brand-200/70 dark:border-white/10 text-brand-700 dark:text-brand-400 text-xs font-semibold mb-4 uppercase tracking-wider backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400 animate-pulse" />
            <span>{t("CINEMATIC VISUAL REORGANIZATION", "সমন্বিত ভিজ্যুয়াল রিঅর্গানাইজেশন")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.2] mb-4"
          >
            {t("Your Ultimate", "আপনার পূর্ণাঙ্গ")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-indigo-600 to-teal-600 dark:from-brand-400 dark:via-teal-300 dark:to-indigo-300">
              {t("One-Stop Solution", "ওয়ান-স্টপ সমাধান")}
            </span>{" "}
            <span className="text-lg sm:text-xl font-bold text-gray-400 dark:text-gray-500 font-mono">
              ({t("Version 4", "ভার্সন ৪")})
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            {t(
              "Instead of managing 8 isolated vendors, see how BRIIZZ intelligently pulls every business requirement into one cohesive operating environment.",
              "আলাদা ৮টি ভেন্ডর খোঁজার জটিলতা বনাম BRIIZZ-এর মাধ্যমে এক সুতোয় গাঁথা পূর্ণাঙ্গ ইকোসিস্টেমের সহজ রূপান্তর দেখুন।"
            )}
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* USER-FRIENDLY INTERACTIVE CONTROLLER (NO CONFUSION, INSTANT ACTION) */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center justify-center gap-3 mb-8">
          
          <div className="p-1.5 rounded-2xl bg-white/90 dark:bg-gray-900/90 border border-gray-200/80 dark:border-white/10 shadow-lg shadow-gray-200/50 dark:shadow-none flex items-center gap-2 backdrop-blur-xl">
            
            {/* Without BRIIZZ (Disconnected) Button */}
            <button
              onClick={() => handleManualToggle("disconnected")}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeState === "disconnected"
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/25 scale-[1.02]"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
              }`}
            >
              <Unplug className="w-4 h-4" />
              <span>{t("Without BRIIZZ (8 Disconnected Vendors)", "BRIIZZ ছাড়া (৮টি বিচ্ছিন্ন ভেন্ডর)")}</span>
            </button>

            {/* With BRIIZZ (Unified) Button */}
            <button
              onClick={() => handleManualToggle("unified")}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeState === "unified"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-[1.02]"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>{t("With BRIIZZ (1 Connected Solution)", "BRIIZZ সহ (১টি সমন্বিত সমাধান)")}</span>
            </button>

            {/* Auto-Play Toggle */}
            <div className="h-6 w-px bg-gray-200 dark:bg-white/10 mx-1 hidden sm:block" />

            <button
              onClick={toggleAutoPlay}
              title={isAutoPlaying ? "Pause auto-loop" : "Resume auto-loop"}
              className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                isAutoPlaying
                  ? "bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-500/20"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
              }`}
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden md:inline text-[11px] font-mono">
                {isAutoPlaying ? "AUTO" : "MANUAL"}
              </span>
            </button>
          </div>

          {/* Snappy Timeline Progress Indicator */}
          {isAutoPlaying && (
            <div className="w-48 h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
              <motion.div
                key={progressKey}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.2, ease: "linear" }}
                className={`h-full ${
                  activeState === "disconnected" ? "bg-rose-500" : "bg-emerald-500"
                }`}
              />
            </div>
          )}

          {/* Dynamic Status Pill */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wide">
            {activeState === "disconnected" ? (
              <span className="inline-flex items-center gap-1.5 text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 px-3.5 py-1 rounded-full border border-rose-200/80 dark:border-rose-500/20">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping shrink-0" />
                {t("PROBLEM: Scattered contracts, separate logins, zero data harmony", "সমস্যা: বিচ্ছিন্ন চুক্তি, আলাদা লগইন ও সমন্বয়ের অভাব")}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-200/80 dark:border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                {t("SOLUTION: Everything aligned and orchestrated directly by BRIIZZ", "সমাধান: সমস্ত কার্যক্রম BRIIZZ-এর মাধ্যমে এক ছাতার নিচে")}
              </span>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CINEMATIC SPATIAL MATTER CANVAS (PURE ARCHITECTURE — NO CARDS) */}
        {/* ========================================================================= */}
        <div className="relative w-full max-w-[1040px] min-h-[440px] mx-auto my-3 flex items-center justify-center">
          
          {/* Central BRIIZZ Nexus Core */}
          <motion.div
            animate={{
              scale: activeState === "disconnected" ? 0.92 : 1,
              opacity: activeState === "disconnected" ? 0.75 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute z-20 pointer-events-none flex flex-col items-center justify-center"
          >
            {/* Ambient Concentric Light Ring */}
            <div
              className={`absolute w-56 h-56 rounded-full border transition-all duration-700 ${
                activeState === "unified"
                  ? "border-brand-500/30 dark:border-brand-400/30 scale-105"
                  : "border-gray-300/30 dark:border-white/10 scale-95"
              }`}
            />
            
            <div
              className={`px-6 py-4 rounded-3xl backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center text-center ${
                activeState === "unified"
                  ? "bg-white/95 dark:bg-gray-900/95 border-2 border-brand-500/50 shadow-2xl shadow-brand-500/20 ring-4 ring-brand-500/10"
                  : "bg-white/80 dark:bg-gray-900/80 border-2 border-gray-200 dark:border-white/10 shadow-lg"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-brand-600 dark:text-brand-400 font-bold uppercase">
                  {activeState === "unified" ? t("ORCHESTRATING HUB", "সেন্ট্রাল হাব") : t("WAITING TO CONNECT", "কানেকশনের অপেক্ষায়")}
                </span>
              </div>
              <span className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                BRIIZZ
              </span>
              <span className="text-[9.5px] font-mono text-gray-400 dark:text-gray-500 uppercase mt-0.5">
                {activeState === "unified" ? "1 Single Window Solution" : "8 Disconnected Entities"}
              </span>
            </div>
          </motion.div>

          {/* 8 Business Matter Fragments */}
          <div className="relative w-full h-[440px] flex items-center justify-center">
            {BUSINESS_FRAGMENTS.map((frag) => {
              const isHovered = hoveredFragId === frag.id;

              // Desktop Grid placement when unified: 4 columns x 2 rows
              // Row 0 Y: -125px, Row 1 Y: 125px
              // Col 0: -375px, Col 1: -125px, Col 2: 125px, Col 3: 375px
              const unifiedX = -375 + frag.unifiedCol * 250;
              const unifiedY = frag.unifiedRow === 0 ? -125 : 125;

              // Disconnected coordinates
              const targetX = activeState === "disconnected" ? frag.scatterX : unifiedX;
              const targetY = activeState === "disconnected" ? frag.scatterY : unifiedY;
              const targetRotate = activeState === "disconnected" ? frag.scatterRotate : 0;
              const targetScale = isHovered
                ? 1.08
                : activeState === "disconnected"
                ? frag.scatterScale
                : 1;

              return (
                <motion.div
                  key={frag.id}
                  onMouseEnter={() => setHoveredFragId(frag.id)}
                  onMouseLeave={() => setHoveredFragId(null)}
                  animate={{
                    x: targetX,
                    y: targetY,
                    rotate: targetRotate,
                    scale: targetScale,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 24,
                    mass: 0.75
                  }}
                  className="absolute cursor-pointer z-30 group"
                >
                  <div
                    className={`transition-all duration-300 px-3.5 py-2.5 rounded-2xl backdrop-blur-xl border ${
                      activeState === "unified"
                        ? "bg-white/95 dark:bg-gray-900/95 border-gray-200/90 dark:border-white/15 hover:border-brand-500 shadow-md hover:shadow-xl dark:shadow-none"
                        : "bg-white/70 dark:bg-white/[0.05] border-rose-200/60 dark:border-rose-500/20 shadow-sm"
                    }`}
                    style={{ minWidth: "170px" }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: frag.accentColor }}
                        />
                        <span className="text-xs sm:text-sm font-black tracking-wider text-gray-900 dark:text-white">
                          {language === "bn" ? frag.name.bn : frag.name.en}
                        </span>
                      </div>
                      
                      {activeState === "unified" ? (
                        <Check className="w-3 h-3 text-emerald-500 shrink-0 opacity-80 group-hover:opacity-100" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                      )}
                    </div>

                    <span className="text-[9.5px] font-mono text-gray-400 dark:text-gray-500 uppercase block mt-0.5">
                      {language === "bn" ? frag.category.bn : frag.category.en}
                    </span>

                    <p className="text-[10.5px] text-gray-600 dark:text-gray-300 mt-1 leading-tight font-normal">
                      {language === "bn" ? frag.desc.bn : frag.desc.en}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* CLOSING CONVERGENCE STATEMENT & ONE-CLICK ACTION */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 lg:mt-16 pt-8 border-t border-gray-200/80 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-600 dark:text-brand-400 uppercase font-bold block mb-1">
              {t("ONE-STOP SOLUTION", "ওয়ান-স্টপ সমাধান")}
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
              {t("Everything your business needs, connected.", "আপনার ব্যবসার প্রতিটি প্রয়োজন, সংযুক্ত।")}
            </h4>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/needs/new"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-teal-500 dark:from-brand-500 dark:to-teal-400 text-white dark:text-gray-950 font-black text-sm hover:brightness-110 transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2 group"
            >
              <span>{t("Start with BRIIZZ", "BRIIZZ দিয়ে শুরু করুন")}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/solutions"
              className="px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-800 dark:text-white font-bold text-sm border border-gray-200 dark:border-white/10 transition-all"
            >
              <span>{t("Explore All Capabilities", "সকল সুবিধা দেখুন")}</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
