"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  Layers,
  Check,
  Building2,
  FileSpreadsheet,
  MessageSquareWarning,
  Flame,
  ShieldCheck,
  Zap,
  RotateCcw
} from "lucide-react";

interface VendorWorkloadItem {
  id: string;
  category: { en: string; bn: string };
  title: { en: string; bn: string };
  vendorType: { en: string; bn: string };
  painPoint: { en: string; bn: string };
  briizzBenefit: { en: string; bn: string };
  // Chaos coordinates (stacking, competing, slight tilt)
  chaosX: number;
  chaosY: number;
  chaosRotate: number;
  chaosScale: number;
  chaosZIndex: number;
  // Unified clean coordinates (perfect editorial columns)
  unifiedCol: number;
  accentColor: string;
}

const WORKLOAD_ITEMS: VendorWorkloadItem[] = [
  {
    id: "suppliers",
    category: { en: "SUPPLIER", bn: "সাপ্লায়ার" },
    title: { en: "Factory Sourcing & Audits", bn: "ফ্যাক্টরি সোর্সিং ও অডিট" },
    vendorType: { en: "Vendor 1: Local Broker", bn: "ভেন্ডর ১: মধ্যস্বত্বভোগী" },
    painPoint: { en: "Unverified factory quality, price markup & hidden fees", bn: "অনিশ্চিত মান ও অতিরিক্ত দালালি খরচ" },
    briizzBenefit: { en: "500+ direct verified factories with escrow protection", bn: "৫০০+ সরাসরি ভেরিফাইড ফ্যাক্টরি ও এসক্রো নিরাপত্তা" },
    chaosX: -240,
    chaosY: -110,
    chaosRotate: -7,
    chaosScale: 0.95,
    chaosZIndex: 10,
    unifiedCol: 0,
    accentColor: "#38bdf8"
  },
  {
    id: "products",
    category: { en: "PRODUCT", bn: "প্রোডাক্ট" },
    title: { en: "Bulk Materials & Samples", bn: "কাঁচামাল ও স্যাম্পলিং" },
    vendorType: { en: "Vendor 2: Wholesale Market", bn: "ভেন্ডর ২: পাইকারি বাজার" },
    painPoint: { en: "Repeated sampling delays & irregular fabric stocks", bn: "স্যাম্পলিং বিলম্ব ও স্টকের অনিশ্চয়তা" },
    briizzBenefit: { en: "Verified standardized material catalogs on demand", bn: "মানসম্মত কাঁচামাল ক্যাটালগ ও নিশ্চিত ডেলিভারি" },
    chaosX: -100,
    chaosY: -140,
    chaosRotate: 4,
    chaosScale: 1.02,
    chaosZIndex: 15,
    unifiedCol: 1,
    accentColor: "#3b82f6"
  },
  {
    id: "website",
    category: { en: "WEBSITE", bn: "ওয়েবসাইট" },
    title: { en: "Web Portal & Checkout", bn: "ই-কমার্স পোর্টাল" },
    vendorType: { en: "Vendor 3: Freelance Dev", bn: "ভেন্ডর ৩: ফ্রিল্যান্স ডেভেলপার" },
    painPoint: { en: "Slow loading, buggy payment APIs & missing support", bn: "স্লো লোডিং, পেমেন্ট বাগ ও দেরিতে ডেলিভারি" },
    briizzBenefit: { en: "Next.js cloud portal with instant bKash/Card checkout", bn: "হাই-স্পিড নেক্সট.জেএস ওয়েব ও পেমেন্ট ইন্টিগ্রেশন" },
    chaosX: 120,
    chaosY: -120,
    chaosRotate: -5,
    chaosScale: 0.98,
    chaosZIndex: 12,
    unifiedCol: 2,
    accentColor: "#8b5cf6"
  },
  {
    id: "workspace",
    category: { en: "WORKSPACE", bn: "ওয়ার্কস্পেস" },
    title: { en: "Office Space & Interiors", bn: "অফিস স্পেস ও ইন্টেরিয়র" },
    vendorType: { en: "Vendor 4: Real Estate Agent", bn: "ভেন্ডর ৪: প্রপার্টি ব্রোকার" },
    painPoint: { en: "High security deposits & lengthy renovation hassles", bn: "উচ্চ ডিপোজিট ও দীর্ঘ ডেকোরেশন ঝামেলা" },
    briizzBenefit: { en: "Turnkey prime commercial leases with architectural fitouts", bn: "রেডি কমার্শিয়াল স্পেস লিজ ও দ্রুত অফিস সেটআপ" },
    chaosX: 250,
    chaosY: -70,
    chaosRotate: 6,
    chaosScale: 0.94,
    chaosZIndex: 11,
    unifiedCol: 3,
    accentColor: "#f59e0b"
  },
  {
    id: "logistics",
    category: { en: "LOGISTICS", bn: "লজিস্টিকস" },
    title: { en: "Freight & Delivery", bn: "ডেলিভারি ও ওয়্যারহাউস" },
    vendorType: { en: "Vendor 5: Courier Company", bn: "ভেন্ডর ৫: থার্ড-পার্টি কুরিয়ার" },
    painPoint: { en: "Delayed deliveries, lost packages & fragmented tracking", bn: "দেরিতে ডেলিভারি, পার্সেল ক্ষতি ও ট্র্যাকিং সমস্যা" },
    briizzBenefit: { en: "64-district integrated distribution with live telemetry", bn: "৬৪ জেলায় ইন্টিগ্রেটেড ডিস্ট্রিবিউশন ও লাইভ ট্র্যাকিং" },
    chaosX: -200,
    chaosY: 90,
    chaosRotate: 6,
    chaosScale: 0.96,
    chaosZIndex: 14,
    unifiedCol: 0,
    accentColor: "#10b981"
  },
  {
    id: "digital",
    category: { en: "DIGITAL SERVICES", bn: "ডিজিটাল টুলস" },
    title: { en: "Inventory & POS ERP", bn: "ইনভেন্টরি ও ক্লাউড ইআরপি" },
    vendorType: { en: "Vendor 6: SaaS Tool", bn: "ভেন্ডর ৬: আলাদা সফটওয়্যার" },
    painPoint: { en: "Isolated spreadsheets, manual entry & data mismatch", bn: "আলাদা এক্সেল ফাইল ও তথ্যের অমিল" },
    briizzBenefit: { en: "Unified inventory synchronization across all branches", bn: "সব শাখার জন্য কেন্দ্রীয় ক্লাউড ইনভেন্টরি সিঙ্ক" },
    chaosX: -30,
    chaosY: 120,
    chaosRotate: -4,
    chaosScale: 1.04,
    chaosZIndex: 16,
    unifiedCol: 1,
    accentColor: "#06b6d4"
  },
  {
    id: "marketing",
    category: { en: "MARKETING", bn: "মার্কেটিং" },
    title: { en: "Paid Ads & Content Reels", bn: "বিজ্ঞাপন ও কনটেন্ট" },
    vendorType: { en: "Vendor 7: Ad Agency", bn: "ভেন্ডর ৭: মার্কেটিং এজেন্সি" },
    painPoint: { en: "High retainer fees without guaranteed revenue return", bn: "উচ্চ রিটেইনার ফি কিন্তু কাঙ্ক্ষিত বিক্রির নিশ্চয়তা নেই" },
    briizzBenefit: { en: "Performance-targeted acquisition mapped to inventory", bn: "টার্গেটেড অ্যাকুইজিশন ও সেলস-ড্রিভেন ক্যাম্পেইন" },
    chaosX: 180,
    chaosY: 100,
    chaosRotate: -6,
    chaosScale: 0.95,
    chaosZIndex: 13,
    unifiedCol: 2,
    accentColor: "#ec4899"
  }
];

export default function OneStopSolutionV6() {
  const { t, language } = useLanguage();
  
  // States: "chaos" (juggling 7 vendors) vs "clarity" (1 unified BRIIZZ ecosystem)
  const [viewState, setViewState] = useState<"chaos" | "clarity">("clarity");
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [progressKey, setProgressKey] = useState<number>(0);

  // Fast, responsive 3.6s auto-cycle
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setViewState((prev) => (prev === "chaos" ? "clarity" : "chaos"));
      setProgressKey((k) => k + 1);
    }, 3600);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const toggleManual = (state: "chaos" | "clarity") => {
    setIsAutoPlay(false);
    setViewState(state);
  };

  const togglePlay = () => {
    setIsAutoPlay((prev) => !prev);
    setProgressKey((k) => k + 1);
  };

  return (
    <section className="py-24 lg:py-36 bg-[#fcfcfd] dark:bg-[#07090e] text-gray-900 dark:text-white relative overflow-hidden border-t border-gray-200/80 dark:border-white/10 transition-colors duration-500 select-none">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:40px_40px] opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-white/5 border border-brand-200/70 dark:border-white/10 text-brand-700 dark:text-brand-400 text-xs font-semibold mb-4 uppercase tracking-widest backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-500 dark:text-brand-400 animate-pulse" />
            <span>{t("CHAOS TO CLARITY", "বিশৃঙ্খলা থেকে সুস্পষ্ট সমাধান")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.15] mb-4"
          >
            {t("Stop juggling", "বন্ধ করুন")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-amber-600 to-rose-700 dark:from-rose-400 dark:via-amber-300 dark:to-orange-400">
              {t("dozens of vendors", "একাধিক ভেন্ডর")}
            </span>{" "}
            <span className="text-lg sm:text-xl font-bold text-gray-400 dark:text-gray-500 font-mono">
              ({t("Version 6", "ভার্সন ৬")})
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
              "Managing disconnected contractors creates immense cognitive overload. Watch the noise collapse into tranquil, unified execution.",
              "আলাদা ভেন্ডর, বিচ্ছিন্ন চুক্তি ও আলাদা মেসেজ থ্রেডের বিশৃঙ্খলা বনাম BRIIZZ-এর মাধ্যমে এক শান্ত, সুসংগঠিত বাস্তবায়ন।"
            )}
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE COMPARISON CONTROLLER */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center justify-center gap-3 mb-10">
          
          <div className="p-1.5 rounded-2xl bg-white/95 dark:bg-gray-900/95 border border-gray-200/80 dark:border-white/10 shadow-lg flex items-center gap-2 backdrop-blur-xl">
            
            {/* Chaos State Button */}
            <button
              onClick={() => toggleManual("chaos")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                viewState === "chaos"
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/30 scale-[1.02]"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>{t("1. The Problem: 7 Juggled Vendors", "১. সমস্যা: ৭টি ভিন্ন ভেন্ডরের চাপ")}</span>
            </button>

            {/* Clarity State Button */}
            <button
              onClick={() => toggleManual("clarity")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                viewState === "clarity"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-[1.02]"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{t("2. The Hero Moment: Unified BRIIZZ", "২. সমাধান: ১টি সমন্বিত BRIIZZ")}</span>
            </button>

            {/* Auto Play Toggle */}
            <div className="h-6 w-px bg-gray-200 dark:bg-white/10 mx-1 hidden sm:block" />

            <button
              onClick={togglePlay}
              title={isAutoPlay ? "Pause Auto Cycle" : "Play Auto Cycle"}
              className={`p-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                isAutoPlay
                  ? "bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-500/20"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
              }`}
            >
              {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden md:inline text-[11px] font-mono">
                {isAutoPlay ? "AUTO" : "MANUAL"}
              </span>
            </button>
          </div>

          {/* Progress Indicator */}
          {isAutoPlay && (
            <div className="w-52 h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
              <motion.div
                key={progressKey}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.6, ease: "linear" }}
                className={`h-full ${
                  viewState === "chaos" ? "bg-rose-500" : "bg-emerald-500"
                }`}
              />
            </div>
          )}

          {/* Dynamic Status Pill */}
          <div className="text-xs font-mono font-bold tracking-wide">
            {viewState === "chaos" ? (
              <span className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 px-4 py-1.5 rounded-full border border-rose-200/80 dark:border-rose-500/20">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping shrink-0" />
                {t("OVERLOAD: Stacking invoices, conflicting deadlines, 7 separate chat threads", "চাপ: ৭টি আলাদা চুক্তি, তথ্যের অমিল ও সমন্বয়ের অভাব")}
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-200/80 dark:border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                {t("TRANQUIL CLARITY: 1 Unified Single Window for your whole company", "শান্ত প্রশান্তি: সম্পূর্ণ ব্যবসায়ের জন্য ১টি মাত্র কেন্দ্রীয় সমাধান")}
              </span>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CINEMATIC HERO CANVAS: FROM CHAOS TO CLARITY (NO CARDS — PURE ARCHITECTURE) */}
        {/* ========================================================================= */}
        <div className="relative w-full max-w-[1040px] min-h-[460px] mx-auto my-4 flex items-center justify-center">
          
          {/* Central Calming BRIIZZ Nexus Presence */}
          <motion.div
            animate={{
              scale: viewState === "chaos" ? 0.88 : 1,
              opacity: viewState === "chaos" ? 0.5 : 1,
            }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="absolute z-20 pointer-events-none flex flex-col items-center justify-center text-center"
          >
            <div className="w-56 h-56 rounded-full border border-brand-500/20 animate-pulse absolute" />
            
            <div
              className={`px-7 py-4 rounded-3xl backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center ${
                viewState === "clarity"
                  ? "bg-white/95 dark:bg-gray-900/95 border-2 border-brand-500/60 shadow-2xl shadow-brand-500/20 ring-4 ring-brand-500/10"
                  : "bg-white/70 dark:bg-gray-900/70 border-2 border-gray-200 dark:border-white/10 shadow-lg"
              }`}
            >
              <span className="text-[10px] font-mono tracking-widest text-brand-600 dark:text-brand-400 font-bold uppercase mb-0.5">
                {viewState === "clarity" ? t("THE UNIFIED SYSTEM", "সমন্বিত সমাধান") : t("WAITING FOR ORDER", "অপেক্ষমান")}
              </span>
              <span className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                BRIIZZ
              </span>
              <span className="text-[9.5px] font-mono text-gray-400 dark:text-gray-500 uppercase mt-0.5">
                {viewState === "clarity" ? "Zero Vendor Juggling" : "7 Disconnected Channels"}
              </span>
            </div>
          </motion.div>

          {/* 7 Workload Entities (Transforms from Stacking Chaos into Pure Grid Balance) */}
          <div className="relative w-full h-[460px] flex items-center justify-center">
            {WORKLOAD_ITEMS.map((item, index) => {
              // Position calculation in clarity state (clean 3-on-top, 4-on-bottom layout)
              // Top Row (3 items): index 0, 1, 2
              // Bottom Row (4 items): index 3, 4, 5, 6
              const isTopRow = index < 3;
              const clarityX = isTopRow
                ? -280 + index * 280
                : -375 + (index - 3) * 250;
              const clarityY = isTopRow ? -135 : 135;

              const targetX = viewState === "chaos" ? item.chaosX : clarityX;
              const targetY = viewState === "chaos" ? item.chaosY : clarityY;
              const targetRotate = viewState === "chaos" ? item.chaosRotate : 0;
              const targetScale = viewState === "chaos" ? item.chaosScale : 1;
              const targetZ = viewState === "chaos" ? item.chaosZIndex : 10;

              return (
                <motion.div
                  key={item.id}
                  animate={{
                    x: targetX,
                    y: targetY,
                    rotate: targetRotate,
                    scale: targetScale,
                    zIndex: targetZ
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 22,
                    mass: 0.8
                  }}
                  className="absolute cursor-pointer"
                  style={{ width: "230px" }}
                >
                  <div
                    className={`transition-all duration-300 p-3.5 rounded-2xl backdrop-blur-xl border ${
                      viewState === "clarity"
                        ? "bg-white/95 dark:bg-gray-900/95 border-gray-200/90 dark:border-white/15 hover:border-brand-500 shadow-md hover:shadow-xl dark:shadow-none"
                        : "bg-white/80 dark:bg-white/[0.06] border-rose-300/70 dark:border-rose-500/30 shadow-xl"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                        {language === "bn" ? item.category.bn : item.category.en}
                      </span>

                      {viewState === "clarity" ? (
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-md">
                          <Check className="w-2.5 h-2.5" />
                          UNIFIED
                        </span>
                      ) : (
                        <span className="text-[9px] font-mono text-rose-500 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-500/10 px-2 py-0.5 rounded-md">
                          ISOLATED
                        </span>
                      )}
                    </div>

                    <h4 className="text-xs sm:text-sm font-black text-gray-900 dark:text-white leading-tight mb-1">
                      {language === "bn" ? item.title.bn : item.title.en}
                    </h4>

                    {/* Before / After Text */}
                    <p className="text-[10px] leading-tight text-gray-500 dark:text-gray-400 font-normal">
                      {viewState === "chaos"
                        ? language === "bn"
                          ? `⚠️ ${item.painPoint.bn}`
                          : `⚠️ ${item.painPoint.en}`
                        : language === "bn"
                        ? `✓ ${item.briizzBenefit.bn}`
                        : `✓ ${item.briizzBenefit.en}`}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* CLOSING MANIFESTO (EXACT COPY REQUESTED) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 pt-8 border-t border-gray-200/80 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-600 dark:text-brand-400 uppercase font-bold block mb-1">
              {t("ONE-STOP SOLUTION", "ওয়ান-স্টপ সমাধান")}
            </span>
            <h4 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
              {t("One place for everything your business needs.", "আপনার ব্যবসার সব প্রয়োজনের একটিই ঠিকানা।")}
            </h4>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/needs/new"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-teal-500 dark:from-brand-500 dark:to-teal-400 text-white dark:text-gray-950 font-black text-sm hover:brightness-110 transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2 group"
            >
              <span>{t("Unify with BRIIZZ", "BRIIZZ দিয়ে সহজ করুন")}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/solutions"
              className="px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-800 dark:text-white font-bold text-sm border border-gray-200 dark:border-white/10 transition-all"
            >
              <span>{t("Explore Capabilities", "সকল সুবিধা দেখুন")}</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
