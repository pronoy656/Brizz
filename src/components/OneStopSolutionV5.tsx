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
  Lightbulb,
  Package,
  Globe,
  Building2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Zap,
  ChevronRight,
  Layers,
  ArrowUpRight
} from "lucide-react";

interface EvolutionStep {
  id: string;
  stepNumber: string;
  badge: { en: string; bn: string };
  title: { en: string; bn: string };
  description: { en: string; bn: string };
  accentColor: string;
  // Discrete modules visible in this stage with clean dedicated positions
  metrics: { label: { en: string; bn: string }; val: string }[];
  features: { en: string; bn: string }[];
}

const EVOLUTION_STEPS: EvolutionStep[] = [
  {
    id: "idea",
    stepNumber: "01",
    badge: { en: "GENESIS", bn: "সূচনা" },
    title: { en: "A Pure Business Idea", bn: "একটি মৌলিক আইডিয়া" },
    description: {
      en: "Every enterprise begins as a single raw concept. No team, no inventory, no digital setup — just a clear vision waiting for execution.",
      bn: "প্রতিটি বড় প্রতিষ্ঠানের শুরু একটি ভাবনা দিয়ে। কোনো ফ্যাক্টরি বা প্ল্যাটফর্ম ছাড়া শুধুই একটি সম্ভাবনাময় স্বপ্ন।"
    },
    accentColor: "#38bdf8",
    metrics: [
      { label: { en: "EXECUTION READINESS", bn: "বাস্তবায়ন প্রস্তুতি" }, val: "0% → 100%" },
      { label: { en: "INITIAL CAPITAL RISK", bn: "মূলধনী ঝুঁকি" }, val: "Minimal" }
    ],
    features: [
      { en: "Concept validation & feasibility", bn: "কনসেপ্ট যাচাই ও সম্ভাব্যতা বিশ্লেষণ" },
      { en: "Market requirement mapping", bn: "বাজার চাহিদা ও মার্কেট ম্যাপিং" }
    ]
  },
  {
    id: "product",
    stepNumber: "02",
    badge: { en: "MATERIALIZATION", bn: "পণ্য উৎপাদন" },
    title: { en: "Product & Factory Sourcing", bn: "কাঁচামাল ও ফ্যাক্টরি নেটওয়ার্ক" },
    description: {
      en: "BRIIZZ matches your concept with 500+ verified manufacturing factories, converting raw specs into verified physical inventory.",
      bn: "BRIIZZ ৫০০+ ভেরিফাইড ফ্যাক্টরির সাথে যুক্ত করে কাঁচামাল থেকে প্রস্তুত করে পাইকারি পণ্য।"
    },
    accentColor: "#0ea5e9",
    metrics: [
      { label: { en: "VERIFIED SUPPLIERS", bn: "ভেরিফাইড সাপ্লায়ার" }, val: "500+ Factories" },
      { label: { en: "QC VERIFICATION", bn: "কোয়ালিটি কন্ট্রোল" }, val: "100% Inspected" }
    ],
    features: [
      { en: "Direct-to-factory bulk pricing", bn: "সরাসরি ফ্যাক্টরি রেটে সোর্সিং" },
      { en: "Milestone-escrow payment protection", bn: "নিরাপদ এসক্রো পেমেন্ট প্রোটেকশন" }
    ]
  },
  {
    id: "digital",
    stepNumber: "03",
    badge: { en: "DIGITAL PORTAL", bn: "ডিজিটাল প্ল্যাটফর্ম" },
    title: { en: "Storefront & Digital Engine", bn: "ওয়েবসাইট ও অনলাইন উপস্থিতি" },
    description: {
      en: "A blazing-fast Next.js digital portal, mobile storefront, and automated payment gateway seamlessly construct around your products.",
      bn: "আপনার পণ্যের জন্য স্বয়ংক্রিয়ভাবে তৈরি হয় আল্ট্রা-ফাস্ট ওয়েবসাইট ও অনলাইন পেমেন্ট সিস্টেম।"
    },
    accentColor: "#8b5cf6",
    metrics: [
      { label: { en: "PAGE LOAD SPEED", bn: "সাইট স্পিড" }, val: "99.8/100" },
      { label: { en: "PAYMENT INTEGRATION", bn: "পেমেন্ট গেটওয়ে" }, val: "bKash/Cards" }
    ],
    features: [
      { en: "High-conversion checkout flows", bn: "দ্রুততম চেকআউট ও অর্ডার কনভার্শন" },
      { en: "Real-time mobile & desktop responsive", bn: "সকল ডিভাইসে স্মুথ ইন্টারফেস" }
    ]
  },
  {
    id: "operations",
    stepNumber: "04",
    badge: { en: "INFRASTRUCTURE", bn: "অপারেশনস ও স্পেস" },
    title: { en: "Workspace & 64-District Logistics", bn: "অফিস স্পেস ও দেশব্যাপী লজিস্টিকস" },
    description: {
      en: "Prime commercial office leasing, architectural interiors, and nationwide freight distribution activate to support real daily operations.",
      bn: "বাণিজ্যিক অফিস স্পেস লিজ, আধুনিক ইন্টেরিয়র এবং ৬৪ জেলায় নিরাপদ ডেলিভারি চ্যানেল সক্রিয় হয়।"
    },
    accentColor: "#10b981",
    metrics: [
      { label: { en: "LOGISTICS COVERAGE", bn: "লজিস্টিকস কাভারেজ" }, val: "64 Districts" },
      { label: { en: "COMMERCIAL HUBS", bn: "কমার্শিয়াল স্পেস" }, val: "Dhaka & Nationwide" }
    ],
    features: [
      { en: "Custom interior architectural build", bn: "কাস্টম নান্দনিক অফিস ইন্টেরিয়র" },
      { en: "Same-day warehouse dispatch", bn: "ওয়্যারহাউস ও দ্রুত পণ্য খালাস" }
    ]
  },
  {
    id: "scale",
    stepNumber: "05",
    badge: { en: "MATURE ECOSYSTEM", bn: "পূর্ণাঙ্গ প্রতিষ্ঠান" },
    title: { en: "Enterprise Growth & Scalability", bn: "অটোমেশন ও আনলিমিটেড স্কেলিং" },
    description: {
      en: "Enterprise cloud ERP automation, targeted acquisition marketing, corporate compliance, and expansion capital unify into one self-running business.",
      bn: "ক্লাউড ইআরপি অটোমেশন, টার্গেটেড বিজ্ঞাপন ও কর্পোরেট অডিট সমন্বয়ে গড়ে ওঠে এক স্বয়ংসম্পূর্ণ প্রতিষ্ঠান।"
    },
    accentColor: "#6366f1",
    metrics: [
      { label: { en: "CONNECTED CAPABILITIES", bn: "সংযুক্ত সেবা" }, val: "All-in-One" },
      { label: { en: "MANAGEMENT VENDORS", bn: "ভেন্ডর সংখ্যা" }, val: "Only BRIIZZ (1)" }
    ],
    features: [
      { en: "Automated multi-branch accounting", bn: "মাল্টি-ব্রাঞ্চ অ্যাকাউন্টিং অটোমেশন" },
      { en: "Autonomous business scale & expansion", bn: "নিরবচ্ছিন্ন ব্যবসা সম্প্রসারণ" }
    ]
  }
];

export default function OneStopSolutionV5() {
  const { t, language } = useLanguage();
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [progressKey, setProgressKey] = useState<number>(0);

  const step = EVOLUTION_STEPS[activeIdx];

  // Auto cycle every 4.2 seconds
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % EVOLUTION_STEPS.length);
      setProgressKey((k) => k + 1);
    }, 4200);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const handleStepClick = (idx: number) => {
    setIsAutoPlay(false);
    setActiveIdx(idx);
  };

  const togglePlay = () => {
    setIsAutoPlay((prev) => !prev);
    setProgressKey((k) => k + 1);
  };

  return (
    <section className="py-20 lg:py-32 bg-[#06080e] text-white relative overflow-hidden border-t border-white/10 select-none">
      
      {/* Dynamic Background Glow */}
      <motion.div
        animate={{
          backgroundColor: step.accentColor,
          opacity: 0.08
        }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] rounded-full blur-[200px] pointer-events-none"
      />
      
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:36px_36px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-brand-400 text-xs font-semibold mb-4 uppercase tracking-widest backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
            <span>{t("CINEMATIC BUSINESS EVOLUTION", "ব্যবসায়িক রূপান্তরের সিনেমাটিক গল্প")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4"
          >
            {t("Your Ultimate", "আপনার পূর্ণাঙ্গ")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-teal-300 to-indigo-300">
              {t("One-Stop Solution", "ওয়ান-স্টপ সমাধান")}
            </span>{" "}
            <span className="text-lg sm:text-xl font-bold text-gray-500 font-mono">
              ({t("Version 5", "ভার্সন ৫")})
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            {t(
              "Experience how BRIIZZ organically transforms a single idea into a full-scale operating business — step by step, without the clutter of multiple vendors.",
              "একটি সাধারণ আইডিয়া কীভাবে ধাপে ধাপে স্বয়ংসম্পূর্ণ প্রতিষ্ঠানে রূপান্তরিত হয় — BRIIZZ-এর সাথে সেই রূপান্তরের গল্প দেখুন।"
            )}
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* STEPPER CONTROLLER (CLEAR, PROPERLY ALIGNED, NON-COLLIDING) */}
        {/* ========================================================================= */}
        <div className="max-w-4xl mx-auto mb-10">
          
          {/* 5-Step Segment Navigation Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl">
            {EVOLUTION_STEPS.map((s, idx) => {
              const isActive = activeIdx === idx;

              return (
                <button
                  key={s.id}
                  onClick={() => handleStepClick(idx)}
                  className={`relative px-3.5 py-3 rounded-xl text-left transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? "bg-white/15 border border-white/25 shadow-lg text-white"
                      : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-brand-400">
                      STEP {s.stepNumber}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                    )}
                  </div>
                  
                  <span className="text-xs font-bold block truncate">
                    {language === "bn" ? s.badge.bn : s.badge.en}
                  </span>

                  {/* Auto-Play Progress Fill */}
                  {isActive && isAutoPlay && (
                    <motion.div
                      key={progressKey}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4.2, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-[2.5px] bg-brand-400"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Controller Status Bar */}
          <div className="flex items-center justify-between mt-3 px-2 text-xs font-mono text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-brand-400 font-bold">
                {step.stepNumber} / 05:
              </span>
              <span className="text-gray-200 uppercase tracking-wider font-semibold">
                {language === "bn" ? step.title.bn : step.title.en}
              </span>
            </div>

            <button
              onClick={togglePlay}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white cursor-pointer transition-colors"
            >
              {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isAutoPlay ? "PAUSE CINEMA" : "PLAY AUTO"}</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EVOLUTION THEATER (PROPER 2-COLUMN ALIGNED LAYOUT — ZERO TEXT OVERLAP) */}
        {/* ========================================================================= */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (5 Cols): Stage Narrative & Live Metrics */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono font-bold mb-3 uppercase">
                  <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                  <span>{language === "bn" ? step.badge.bn : step.badge.en}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-3">
                  {language === "bn" ? step.title.bn : step.title.en}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  {language === "bn" ? step.description.bn : step.description.en}
                </p>
              </div>

              {/* Verified Features Checklist */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                {step.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{language === "bn" ? feat.bn : feat.en}</span>
                  </div>
                ))}
              </div>

              {/* Live Metric Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {step.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white/[0.04] border border-white/10"
                  >
                    <span className="text-[10px] font-mono text-gray-400 block uppercase mb-0.5">
                      {language === "bn" ? m.label.bn : m.label.en}
                    </span>
                    <span className="text-sm font-black text-brand-300">
                      {m.val}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column (7 Cols): The Organic Visual Environment */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[380px] rounded-2xl bg-black/40 border border-white/10 p-6 flex flex-col justify-between overflow-hidden">
              
              {/* Background blueprint grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

              {/* Visual Environment Title */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1.5 text-brand-400 font-bold">
                  <Zap className="w-3.5 h-3.5" />
                  <span>BRIIZZ LIVING ECOSYSTEM</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px]">
                  PHASE 0{activeIdx + 1} OF 05
                </span>
              </div>

              {/* Dynamic Animated Core Stage */}
              <div className="relative w-full h-[240px] flex items-center justify-center my-auto">
                
                {/* Visual Representation for Stage 1 (IDEA) */}
                {activeIdx === 0 && (
                  <motion.div
                    key="stage-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-sky-500 to-cyan-300 p-0.5 shadow-2xl shadow-sky-500/40 animate-pulse">
                      <div className="w-full h-full bg-gray-950 rounded-[22px] flex flex-col items-center justify-center">
                        <Lightbulb className="w-10 h-10 text-sky-400 mb-1" />
                        <span className="text-[10px] font-mono font-black text-sky-300">IDEA SEED</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-gray-400 mt-4 uppercase tracking-wider">
                      {t("A single raw concept waiting for structure", "একটি অপ্রস্তুত মৌলিক আইডিয়া")}
                    </span>
                  </motion.div>
                )}

                {/* Visual Representation for Stage 2 (PRODUCT) */}
                {activeIdx === 1 && (
                  <motion.div
                    key="stage-1"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-md flex flex-col items-center"
                  >
                    <div className="w-full grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-2xl bg-sky-950/60 border border-sky-400/30 flex flex-col items-center text-center shadow-lg">
                        <Package className="w-8 h-8 text-sky-400 mb-2" />
                        <span className="text-xs font-bold text-white">Physical Sourcing</span>
                        <span className="text-[10px] font-mono text-sky-300 mt-1">Raw Fabrics & Specs</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-blue-950/60 border border-blue-400/30 flex flex-col items-center text-center shadow-lg">
                        <Building2 className="w-8 h-8 text-blue-400 mb-2" />
                        <span className="text-xs font-bold text-white">500+ Verified Mills</span>
                        <span className="text-[10px] font-mono text-blue-300 mt-1">Direct Factory Pricing</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-sky-300 mt-4 uppercase">
                      ✓ {t("BRIIZZ converts idea into physical matter", "আইডিয়া রূপান্তরিত বাস্তব পণ্যে")}
                    </span>
                  </motion.div>
                )}

                {/* Visual Representation for Stage 3 (DIGITAL) */}
                {activeIdx === 2 && (
                  <motion.div
                    key="stage-2"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-md rounded-2xl bg-gradient-to-b from-violet-950/80 to-purple-950/40 border border-violet-400/40 p-4 shadow-xl backdrop-blur-md"
                  >
                    {/* Simulated Browser Bar */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-violet-300 font-bold">yourbrand.com • LIVE</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <Globe className="w-5 h-5 text-violet-400 mx-auto mb-1" />
                        <span className="text-[11px] font-bold text-white block">Next.js Web Store</span>
                        <span className="text-[9px] font-mono text-gray-400">0.4s Global Edge</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <Zap className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                        <span className="text-[11px] font-bold text-white block">Instant Checkout</span>
                        <span className="text-[9px] font-mono text-gray-400">bKash / Nagad / Cards</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Visual Representation for Stage 4 (OPERATIONS) */}
                {activeIdx === 3 && (
                  <motion.div
                    key="stage-3"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-md grid grid-cols-2 gap-3"
                  >
                    <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-400/30 flex flex-col items-center text-center shadow-lg">
                      <Building2 className="w-8 h-8 text-emerald-400 mb-2" />
                      <span className="text-xs font-bold text-white">Commercial Space</span>
                      <span className="text-[10px] font-mono text-emerald-300 mt-1">Office Leasing & Interior</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-teal-950/60 border border-teal-400/30 flex flex-col items-center text-center shadow-lg">
                      <TrendingUp className="w-8 h-8 text-teal-400 mb-2" />
                      <span className="text-xs font-bold text-white">64-District Logistics</span>
                      <span className="text-[10px] font-mono text-teal-300 mt-1">Nationwide Hub Delivery</span>
                    </div>
                  </motion.div>
                )}

                {/* Visual Representation for Stage 5 (SCALE) */}
                {activeIdx === 4 && (
                  <motion.div
                    key="stage-4"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-md p-4 rounded-2xl bg-gradient-to-r from-indigo-950/80 via-blue-950/60 to-purple-950/80 border-2 border-indigo-400/50 shadow-2xl text-center"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-[10px] font-mono text-indigo-300 font-bold mb-3">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>MATURE SCALABLE ENTERPRISE</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2 rounded-xl bg-white/5">
                        <span className="text-[10px] font-mono text-gray-400 block">AUTOMATION</span>
                        <span className="text-xs font-bold text-white">Cloud ERP</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/5">
                        <span className="text-[10px] font-mono text-gray-400 block">GROWTH</span>
                        <span className="text-xs font-bold text-white">Scale Ads</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/5">
                        <span className="text-[10px] font-mono text-gray-400 block">GOVERNANCE</span>
                        <span className="text-xs font-bold text-white">Audit OK</span>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-emerald-400 font-bold block mt-3">
                      ✓ {t("Complete business ecosystem orchestrated by BRIIZZ", "BRIIZZ দ্বারা পরিচালিত সম্পূর্ণ ইকোসিস্টেম")}
                    </span>
                  </motion.div>
                )}

              </div>

              {/* Stage Navigation Arrows */}
              <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10">
                <button
                  onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : EVOLUTION_STEPS.length - 1))}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold cursor-pointer transition-colors"
                >
                  ← PREV STEP
                </button>

                <button
                  onClick={() => setActiveIdx((prev) => (prev + 1) % EVOLUTION_STEPS.length)}
                  className="px-4 py-1.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-gray-950 text-xs font-mono font-black cursor-pointer transition-colors flex items-center gap-1"
                >
                  <span>NEXT STEP</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* CLOSING MANIFESTO */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 lg:mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {t("From zero to what's next.", "শূণ্য থেকে অনন্ত সম্ভাবনায়।")}
            </h4>
            <p className="text-sm sm:text-base text-gray-400 mt-0.5">
              {t("One partner for the journey.", "আপনার পুরো যাত্রার একমাত্র বিশ্বস্ত অংশীদার।")}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/needs/new"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-teal-400 text-gray-950 font-black text-sm hover:brightness-110 transition-all shadow-lg shadow-brand-500/25 flex items-center gap-2 group"
            >
              <span>{t("Build with BRIIZZ", "BRIIZZ নিয়ে শুরু করুন")}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/solutions"
              className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm border border-white/10 transition-all"
            >
              <span>{t("Explore Journey", "সম্পূর্ণ জার্নি দেখুন")}</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
