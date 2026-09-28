"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Repeat,
  Radio,
  Activity,
  Package,
  Factory,
  Building2,
  Settings2,
  Globe,
  Cpu,
  TrendingUp
} from "lucide-react";

interface TransitRoute {
  id: string;
  name: { en: string; bn: string };
  category: { en: string; bn: string };
  tagline: { en: string; bn: string };
  deliverable: { en: string; bn: string };
  sla: { en: string; bn: string };
  metric: { en: string; bn: string };
  icon: React.ElementType;
  color: string;
  side: "left" | "right";
  y: number; // Y position in 600px grid
  link: string;
  features: { en: string; bn: string }[];
}

const LEFT_ROUTES: TransitRoute[] = [
  {
    id: "products",
    name: { en: "PRODUCTS", bn: "প্রোডাক্টস" },
    category: { en: "Raw Materials & Bulk Supply", bn: "কাঁচামাল ও পাইকারি পণ্য" },
    tagline: { en: "Factory-direct materials & bulk inventory", bn: "কাঁচামাল ও সরাসরি কারখানা সোর্সিং" },
    deliverable: { en: "Direct global factory procurement with verified quality inspections", bn: "সরাসরি কারখানা আমদানি ও কোয়ালিটি নিশ্চয়তা" },
    sla: { en: "Guaranteed Wholesale Rates", bn: "পাইকারি মূল্যের নিশ্চয়তা" },
    metric: { en: "500+ Factories", bn: "৫০০+ ফ্যাক্টরি" },
    icon: Package,
    color: "#0ea5e9", // Sky
    side: "left",
    y: 80,
    link: "/solutions?category=wholesale",
    features: [
      { en: "Direct China / Global Sourcing", bn: "চীন ও আন্তর্জাতিক সরাসরি সোর্সিং" },
      { en: "Industrial Hardware & Textiles", bn: "ইন্ডাস্ট্রিয়াল কাঁচামাল ও ফেব্রিক" },
      { en: "Custom Packaging & Pallets", bn: "কাস্টম প্যাকেজিং ও ওয়্যারহাউজিং" }
    ]
  },
  {
    id: "suppliers",
    name: { en: "SUPPLIERS", bn: "সাপ্লায়ার্স" },
    category: { en: "Verified Partner Network", bn: "ভেরিফাইড পার্টনার নেটওয়ার্ক" },
    tagline: { en: "500+ pre-screened manufacturers across 64 districts", bn: "৬৪ জেলায় ৫০০+ ভেরিফাইড প্রস্তুতকারক" },
    deliverable: { en: "Escrow milestone protection with zero broker overhead", bn: "দালালমুক্ত সরাসরি কারখানা সংযোগ ও মাইলস্টোন নিরাপত্তা" },
    sla: { en: "100% Escrow Protected", bn: "১০০% এসক্রো সুরক্ষিত" },
    metric: { en: "64 Districts", bn: "৬৪ জেলা" },
    icon: Factory,
    color: "#3b82f6", // Blue
    side: "left",
    y: 220,
    link: "/solutions?category=wholesale",
    features: [
      { en: "Rigorous Due Diligence", bn: "কঠোর ব্যাকগ্রাউন্ড ভেরিফিকেশন" },
      { en: "Tier-1 Trade Agreements", bn: "টপ-টিয়ার চুক্তি ও গ্যারান্টি" },
      { en: "Dedicated Account Coordinator", bn: "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার" }
    ]
  },
  {
    id: "workspace",
    name: { en: "WORKSPACE", bn: "ওয়ার্কস্পেস" },
    category: { en: "Commercial Real Estate & Fitouts", bn: "বাণিজ্যিক স্পেস ও ইন্টেরিয়র" },
    tagline: { en: "Prime office leasing & turnkey interior fitouts", bn: "অফিস স্পেস লিজ ও নান্দনিক ইন্টেরিয়র" },
    deliverable: { en: "Acoustic layouts, executive furniture, lighting & legal tenancy", bn: "ফার্নিচার, লাইটিং ও সম্পূর্ণ অফিস অবকাঠামো" },
    sla: { en: "Turnkey Ready in 21 Days", bn: "২১ দিনে প্রস্তুত" },
    metric: { en: "Turnkey Setup", bn: "টার্নকি সেটআপ" },
    icon: Building2,
    color: "#f59e0b", // Amber
    side: "left",
    y: 360,
    link: "/solutions?category=real-estate",
    features: [
      { en: "Verified Commercial Leases", bn: "বাণিজ্যিক স্পেস সোর্সিং" },
      { en: "Architectural Interior Fitouts", bn: "টার্নকি ইন্টেরিয়র ডেকোরেশন" },
      { en: "Ergonomic Workstations", bn: "এক্সিকিউটিভ ফার্নিচার ও লাইটিং" }
    ]
  },
  {
    id: "support",
    name: { en: "BUSINESS SUPPORT", bn: "বিজনেস সাপোর্ট" },
    category: { en: "Corporate Legal & Talent", bn: "কর্পোরেট আইনি ও জনবল" },
    tagline: { en: "RJSC incorporation, trade licensing, tax/VAT & talent", bn: "ট্রেড লাইসেন্স, কোম্পানি রেজিস্ট্রেশন ও ট্যাক্স" },
    deliverable: { en: "Continuous legal counsel, annual audit filings & executive staffing", bn: "আইনি অনুমোদন, কমপ্লায়েন্স ও দক্ষ জনবল" },
    sla: { en: "Full Legal Compliance", bn: "সম্পূর্ণ আইনি কমপ্লায়েন্স" },
    metric: { en: "100% Compliant", bn: "১০০% বৈধ" },
    icon: Settings2,
    color: "#10b981", // Emerald
    side: "left",
    y: 500,
    link: "/solutions?category=business",
    features: [
      { en: "RJSC, TIN/BIN & Licenses", bn: "আরজেএসসি, ট্রেড লাইসেন্স ও ট্যাক্স" },
      { en: "Ongoing VAT & Audit Filing", bn: "ভ্যাট রিটার্ন ও বার্ষিক অডিট" },
      { en: "Sales & Executive Recruiting", bn: "দক্ষ জনবল ও সেলস টিম নিয়োগ" }
    ]
  }
];

const RIGHT_ROUTES: TransitRoute[] = [
  {
    id: "website",
    name: { en: "WEBSITE", bn: "ওয়েবসাইট" },
    category: { en: "Digital Engineering & Apps", bn: "ওয়েব ও মোবাইল প্ল্যাটফর্ম" },
    tagline: { en: "High-speed Next.js portals & native apps", bn: "আধুনিক ওয়েবসাইট, ই-কমার্স ও অ্যাপ" },
    deliverable: { en: "Conversion-optimized UX, SEO architecture & payment gateways", bn: "সহজ চেকআউট ও অটোমেটেড পেমেন্ট গেটওয়ে" },
    sla: { en: "Ultra-Fast 99+ Core Web Vitals", bn: "আল্ট্রা-ফাস্ট পারফরম্যান্স" },
    metric: { en: "Next.js & Apps", bn: "নেক্সটজেএস ও অ্যাপ" },
    icon: Globe,
    color: "#8b5cf6", // Purple
    side: "right",
    y: 120,
    link: "/solutions?category=tech",
    features: [
      { en: "Custom Next.js & React Apps", bn: "কাস্টম নেক্সটজেএস ও ওয়েব পোর্টাল" },
      { en: "Instant Payment Gateway Setup", bn: "পেমেন্ট গেটওয়ে ইন্টিগ্রেশন" },
      { en: "iOS & Android Cross-Platform", bn: "আইওএস ও অ্যান্ড্রয়েড অ্যাপ" }
    ]
  },
  {
    id: "digital",
    name: { en: "DIGITAL SERVICES", bn: "ডিজিটাল সার্ভিসেস" },
    category: { en: "Enterprise Automation & ERP", bn: "এন্টারপ্রাইজ অটোমেশন ও সফটওয়্যার" },
    tagline: { en: "Enterprise ERP, multi-branch POS & inventory", bn: "ইআরপি, পিওএস ও লাইভ ইনভেন্টরি" },
    deliverable: { en: "Live multi-branch synchronization, accounting & cloud security", bn: "ক্লাউড সিকিউরিটি ও সেন্ট্রাল বিজনেস ট্র্যাকিং" },
    sla: { en: "99.9% Cloud Uptime", bn: "৯৯.৯% ক্লাউড আপটাইম" },
    metric: { en: "ERP & POS Sync", bn: "ইআরপি ও পিওএস" },
    icon: Cpu,
    color: "#06b6d4", // Cyan
    side: "right",
    y: 290,
    link: "/solutions?category=tech",
    features: [
      { en: "Multi-Store Inventory & Billing", bn: "মাল্টি-ব্রাঞ্চ স্টক ও বিলিং" },
      { en: "POS Hardware & Barcode Scanners", bn: "পিওএস টার্মিনাল সেটআপ" },
      { en: "Automated Financial Analytics", bn: "লাইভ ফিনান্সিয়াল অ্যানালিটিক্স" }
    ]
  },
  {
    id: "growth",
    name: { en: "GROWTH", bn: "গ্রোথ" },
    category: { en: "Performance Marketing & Scale", bn: "গ্রোথ মার্কেটিং ও বিস্তার" },
    tagline: { en: "Performance ads, high-ROAS funnels & expansion", bn: "টার্গেটেড বিজ্ঞাপন ও দেশব্যাপী বিস্তার" },
    deliverable: { en: "Data-driven Meta/Google funnels, 4K creative & 64-district scale", bn: "৬৪ জেলায় সরবরাহ ব্যবস্থা ও টেকসই প্রবৃদ্ধি" },
    sla: { en: "Maximum Return on Ad Spend", bn: "সর্বোচ্চ আরওএএস ফানেল" },
    metric: { en: "ROAS Scaling", bn: "আরওএএস গ্রোথ" },
    icon: TrendingUp,
    color: "#ec4899", // Pink
    side: "right",
    y: 460,
    link: "/solutions?category=business",
    features: [
      { en: "High-Converting Ad Campaigns", bn: "টার্গেটেড বিজ্ঞাপন ও বিক্রয় বৃদ্ধি" },
      { en: "4K Product Media & Video Reels", bn: "প্রোডাক্ট ফটোগ্রাফি ও ভিডিও" },
      { en: "64-District Distribution Plan", bn: "দেশব্যাপী ডিস্ট্রিবিউশন প্ল্যান" }
    ]
  }
];

const ALL_ROUTES = [...LEFT_ROUTES, ...RIGHT_ROUTES];
const HUB_CENTER_X = 500;
const HUB_CENTER_Y = 290;
const LEFT_ANCHOR_X = 260;
const RIGHT_ANCHOR_X = 740;

export default function OneStopSolutionV3() {
  const { t, language } = useLanguage();
  const [activeRouteId, setActiveRouteId] = useState<string>("products");
  const [hoveredRouteId, setHoveredRouteId] = useState<string | null>(null);
  const [flowDirection, setFlowDirection] = useState<"converge" | "deliver">("converge");

  const effectiveActiveId = hoveredRouteId || activeRouteId;
  const activeRoute = ALL_ROUTES.find((r) => r.id === effectiveActiveId) || ALL_ROUTES[0];

  return (
    <section className="py-24 lg:py-32 bg-[#fafbfc] dark:bg-[#06070a] text-gray-900 dark:text-white relative overflow-hidden border-t border-gray-200/80 dark:border-white/10 transition-colors duration-500">
      
      {/* Background Precision Transit Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:36px_36px] opacity-60 dark:opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Dynamic Ambient Glow Flash */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[150px] transition-all duration-700 pointer-events-none opacity-15 dark:opacity-25"
        style={{ backgroundColor: activeRoute.color }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-white/5 border border-brand-200/70 dark:border-white/10 text-brand-700 dark:text-brand-400 text-xs sm:text-sm font-semibold mb-6 uppercase tracking-wider backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-brand-500 dark:text-brand-400 animate-pulse" />
            <span>{t("THE LITERAL ONE STOP", "একক সেন্ট্রাল গন্তব্য")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.15] mb-6"
          >
            {t("Your Ultimate", "আপনার পূর্ণাঙ্গ")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-indigo-600 to-teal-600 dark:from-brand-400 dark:via-teal-300 dark:to-indigo-300">
              {t("One-Stop Solution", "ওয়ান-স্টপ সমাধান")}
            </span>{" "}
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 dark:text-gray-500 font-mono">
              ({t("Version 3", "ভার্সন ৩")})
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            {t(
              "A business owner should not need to visit dozens of fragmented vendors. Different business needs converge into one central destination: BRIIZZ.",
              "আলাদা আলাদা ডজনখানেক ভেন্ডরের পেছনে ছোটাছুটি করার দিন শেষ। ব্যবসার সকল প্রয়োজন এসে মিলেছে এক বিশ্বস্ত সেন্ট্রাল ঠিকানায়: BRIIZZ।"
            )}
          </motion.p>
        </div>

        {/* Direction Flow Toggle Pill (Convergence vs Delivery) */}
        <div className="flex items-center justify-center mb-8">
          <div className="p-1 rounded-2xl bg-white dark:bg-white/5 border border-gray-200/80 dark:border-white/10 flex items-center shadow-sm backdrop-blur-md">
            <button
              onClick={() => setFlowDirection("converge")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                flowDirection === "converge"
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-950 shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <Radio className={`w-3.5 h-3.5 ${flowDirection === "converge" ? "text-brand-400 dark:text-brand-600" : ""}`} />
              <span>{t("1. Needs Converge into BRIIZZ", "১. চাহিদাগুলো যুক্ত হয় BRIIZZ-এ")}</span>
            </button>

            <button
              onClick={() => setFlowDirection("deliver")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                flowDirection === "deliver"
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-950 shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <Repeat className={`w-3.5 h-3.5 ${flowDirection === "deliver" ? "text-brand-400 dark:text-brand-600" : ""}`} />
              <span>{t("2. BRIIZZ Delivers Solutions Back", "২. BRIIZZ সমাধান পৌঁছে দেয়")}</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP 3-COLUMN PERFECTLY BALANCED TRANSIT NEXUS (lg+ screens) */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative w-full max-w-[1060px] h-[580px] mx-auto my-4 select-none">
          
          {/* High-Precision SVG Canvas for S-Curve Convergence Rays */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            viewBox="0 0 1000 580"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="routeGlowV3Fixed" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Central Gyro Radar Rings */}
            <circle
              cx={HUB_CENTER_X}
              cy={HUB_CENTER_Y}
              r={120}
              fill="none"
              stroke="currentColor"
              className="text-gray-200 dark:text-white/[0.06]"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
            <circle
              cx={HUB_CENTER_X}
              cy={HUB_CENTER_Y}
              r={160}
              fill="none"
              stroke="currentColor"
              className="text-gray-200/80 dark:text-white/[0.04]"
              strokeWidth="1"
              strokeDasharray="2 6"
            />

            {/* Left Converging S-Curves: From Left Anchor (260, Y) to Center (500, 290) */}
            {LEFT_ROUTES.map((route) => {
              const isSelected = effectiveActiveId === route.id;
              const isAnyHovered = hoveredRouteId !== null;
              const pathD = `M ${LEFT_ANCHOR_X} ${route.y} C 380 ${route.y}, 380 ${HUB_CENTER_Y}, ${HUB_CENTER_X} ${HUB_CENTER_Y}`;

              return (
                <g key={`left-ray-${route.id}`}>
                  {/* Track line */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={
                      isSelected
                        ? route.color
                        : isAnyHovered
                        ? "rgba(156,163,175,0.12)"
                        : "rgba(156,163,175,0.35)"
                    }
                    strokeWidth={isSelected ? 3.5 : 1.5}
                    strokeDasharray={isSelected ? "none" : "4 6"}
                    className="transition-all duration-300"
                    filter={isSelected ? "url(#routeGlowV3Fixed)" : undefined}
                  />

                  {/* Flowing animated energy beam */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={route.color}
                    strokeWidth={isSelected ? 4 : 2}
                    strokeDasharray="16 140"
                    strokeDashoffset="0"
                    className={isSelected ? "animate-pulse" : ""}
                    style={{ opacity: isSelected ? 1 : isAnyHovered ? 0.15 : 0.6 }}
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from={flowDirection === "converge" ? "300" : "0"}
                      to={flowDirection === "converge" ? "0" : "300"}
                      dur={isSelected ? "1.2s" : "3.2s"}
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Station Anchor Point */}
                  <circle
                    cx={LEFT_ANCHOR_X}
                    cy={route.y}
                    r={isSelected ? 6 : 4}
                    fill={route.color}
                    className="transition-all duration-300"
                    style={{ opacity: isSelected ? 1 : 0.7 }}
                  />
                </g>
              );
            })}

            {/* Right Converging S-Curves: From Right Anchor (740, Y) to Center (500, 290) */}
            {RIGHT_ROUTES.map((route) => {
              const isSelected = effectiveActiveId === route.id;
              const isAnyHovered = hoveredRouteId !== null;
              const pathD = `M ${RIGHT_ANCHOR_X} ${route.y} C 620 ${route.y}, 620 ${HUB_CENTER_Y}, ${HUB_CENTER_X} ${HUB_CENTER_Y}`;

              return (
                <g key={`right-ray-${route.id}`}>
                  {/* Track line */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={
                      isSelected
                        ? route.color
                        : isAnyHovered
                        ? "rgba(156,163,175,0.12)"
                        : "rgba(156,163,175,0.35)"
                    }
                    strokeWidth={isSelected ? 3.5 : 1.5}
                    strokeDasharray={isSelected ? "none" : "4 6"}
                    className="transition-all duration-300"
                    filter={isSelected ? "url(#routeGlowV3Fixed)" : undefined}
                  />

                  {/* Flowing animated energy beam */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={route.color}
                    strokeWidth={isSelected ? 4 : 2}
                    strokeDasharray="16 140"
                    strokeDashoffset="0"
                    className={isSelected ? "animate-pulse" : ""}
                    style={{ opacity: isSelected ? 1 : isAnyHovered ? 0.15 : 0.6 }}
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from={flowDirection === "converge" ? "300" : "0"}
                      to={flowDirection === "converge" ? "0" : "300"}
                      dur={isSelected ? "1.2s" : "3.2s"}
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Station Anchor Point */}
                  <circle
                    cx={RIGHT_ANCHOR_X}
                    cy={route.y}
                    r={isSelected ? 6 : 4}
                    fill={route.color}
                    className="transition-all duration-300"
                    style={{ opacity: isSelected ? 1 : 0.7 }}
                  />
                </g>
              );
            })}
          </svg>

          {/* LEFT COLUMN: 4 Perfectly Aligned Transit Stations */}
          <div className="absolute left-0 top-0 bottom-0 w-[260px] flex flex-col justify-between py-2 z-20">
            {LEFT_ROUTES.map((route) => {
              const isSelected = effectiveActiveId === route.id;
              const isAnyHovered = hoveredRouteId !== null;
              const isDimmed = isAnyHovered && !isSelected;
              const Icon = route.icon;

              return (
                <div
                  key={route.id}
                  onClick={() => setActiveRouteId(route.id)}
                  onMouseEnter={() => setHoveredRouteId(route.id)}
                  onMouseLeave={() => setHoveredRouteId(null)}
                  className={`w-full p-3 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-white dark:bg-gray-900 border-brand-500 shadow-lg shadow-brand-500/10 ring-1 ring-brand-500/20 scale-102"
                      : isDimmed
                      ? "bg-white/40 dark:bg-white/[0.02] border-gray-200/50 dark:border-white/5 opacity-40"
                      : "bg-white/80 dark:bg-white/[0.04] border-gray-200/80 dark:border-white/10 hover:border-brand-400 hover:bg-white shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "text-white shadow-md"
                          : "bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300"
                      }`}
                      style={{ backgroundColor: isSelected ? route.color : undefined }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span
                        className={`text-xs font-black tracking-wider truncate transition-colors ${
                          isSelected ? "text-brand-700 dark:text-brand-300" : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {language === "bn" ? route.name.bn : route.name.en}
                      </span>
                      <span className="text-[10px] text-gray-500 dark:text-gray-400 truncate">
                        {language === "bn" ? route.tagline.bn : route.tagline.en}
                      </span>
                    </div>
                  </div>

                  {/* Indicator Dot on Connection Edge */}
                  <span
                    className={`w-2.5 h-2.5 rounded-full shrink-0 transition-transform ${
                      isSelected ? "scale-125 ring-4 ring-brand-500/20" : "opacity-60"
                    }`}
                    style={{ backgroundColor: route.color }}
                  />
                </div>
              );
            })}
          </div>

          {/* CENTER: Fixed Symmetrical Central ONE STOP Nexus */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center justify-center pointer-events-none">
            {/* Ambient Pulse Halo */}
            <div className="absolute w-56 h-56 rounded-full border border-brand-500/20 animate-ping opacity-25" />
            <div className="absolute w-44 h-44 rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-brand-500/5 backdrop-blur-md" />

            {/* Central Solid Hub Badge */}
            <div
              className="relative w-36 h-36 rounded-full bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-950 dark:to-black border-2 shadow-2xl flex flex-col items-center justify-center p-3 text-center transition-all duration-500"
              style={{ borderColor: activeRoute.color }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-950 shadow-md mb-1 transition-all"
                style={{ backgroundColor: activeRoute.color }}
              >
                <Sparkles className="w-4 h-4 font-bold text-white" />
              </div>
              
              <span className="text-lg font-black tracking-wider text-gray-900 dark:text-white">BRIIZZ</span>
              <span className="text-[9px] font-mono tracking-widest text-brand-700 dark:text-brand-300 uppercase font-bold">
                ONE STOP
              </span>
              
              <div className="mt-1 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-[8.5px] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 font-medium">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: activeRoute.color }} />
                <span>{language === "bn" ? activeRoute.metric.bn : activeRoute.metric.en}</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 3 Perfectly Aligned Transit Stations */}
          <div className="absolute right-0 top-0 bottom-0 w-[260px] flex flex-col justify-around py-4 z-20">
            {RIGHT_ROUTES.map((route) => {
              const isSelected = effectiveActiveId === route.id;
              const isAnyHovered = hoveredRouteId !== null;
              const isDimmed = isAnyHovered && !isSelected;
              const Icon = route.icon;

              return (
                <div
                  key={route.id}
                  onClick={() => setActiveRouteId(route.id)}
                  onMouseEnter={() => setHoveredRouteId(route.id)}
                  onMouseLeave={() => setHoveredRouteId(null)}
                  className={`w-full p-3 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-white dark:bg-gray-900 border-brand-500 shadow-lg shadow-brand-500/10 ring-1 ring-brand-500/20 scale-102"
                      : isDimmed
                      ? "bg-white/40 dark:bg-white/[0.02] border-gray-200/50 dark:border-white/5 opacity-40"
                      : "bg-white/80 dark:bg-white/[0.04] border-gray-200/80 dark:border-white/10 hover:border-brand-400 hover:bg-white shadow-sm"
                  }`}
                >
                  {/* Indicator Dot on Connection Edge */}
                  <span
                    className={`w-2.5 h-2.5 rounded-full shrink-0 transition-transform ${
                      isSelected ? "scale-125 ring-4 ring-brand-500/20" : "opacity-60"
                    }`}
                    style={{ backgroundColor: route.color }}
                  />

                  <div className="flex items-center gap-2.5 min-w-0 flex-1 justify-end text-right">
                    <div className="flex flex-col min-w-0">
                      <span
                        className={`text-xs font-black tracking-wider truncate transition-colors ${
                          isSelected ? "text-brand-700 dark:text-brand-300" : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {language === "bn" ? route.name.bn : route.name.en}
                      </span>
                      <span className="text-[10px] text-gray-500 dark:text-gray-400 truncate">
                        {language === "bn" ? route.tagline.bn : route.tagline.en}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "text-white shadow-md"
                          : "bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300"
                      }`}
                      style={{ backgroundColor: isSelected ? route.color : undefined }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE LIVE HUD TELEMETRY DRAWER (Desktop & Mobile) */}
        {/* ========================================================================= */}
        <motion.div
          key={activeRoute.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-6 p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-900/90 border border-gray-200/90 dark:border-white/10 shadow-xl relative overflow-hidden text-left"
        >
          <div
            className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none"
            style={{ backgroundColor: activeRoute.color }}
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Route Status Summary */}
            <div className="md:col-span-4 flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md font-bold"
                style={{ backgroundColor: activeRoute.color }}
              >
                {React.createElement(activeRoute.icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                    {language === "bn" ? activeRoute.category.bn : activeRoute.category.en}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    LIVE
                  </span>
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white">
                  {language === "bn" ? activeRoute.name.bn : activeRoute.name.en}
                </h3>
              </div>
            </div>

            {/* Core Capability Badges */}
            <div className="md:col-span-5 flex flex-wrap gap-2">
              {activeRoute.features.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 text-xs text-gray-700 dark:text-gray-300 font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />
                  <span>{language === "bn" ? feat.bn : feat.en}</span>
                </div>
              ))}
            </div>

            {/* Action Trigger */}
            <div className="md:col-span-3 flex md:justify-end">
              <Link
                href={`/needs/new?stream=${activeRoute.id}`}
                className="w-full md:w-auto px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-950 font-black text-xs sm:text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
              >
                <span>{t("Launch Stream via BRIIZZ", "BRIIZZ দিয়ে শুরু করুন")}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CLOSING CONVERGENCE STATEMENT */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 lg:mt-20 pt-10 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <span className="text-xs font-mono tracking-widest text-brand-600 dark:text-brand-400 uppercase font-semibold block mb-1">
              {t("EVERYTHING YOUR BUSINESS NEEDS.", "ব্যবসার প্রতিটি প্রয়োজন।")}
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
              {t("Connected through one place.", "একক সেন্ট্রাল গন্তব্যে যুক্ত।")}
            </h4>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/needs/new"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-teal-500 dark:from-brand-500 dark:to-teal-400 text-white dark:text-gray-950 font-black text-sm hover:brightness-110 transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2 group"
            >
              <span>{t("Post Your Business Need", "আপনার রিকোয়ারমেন্ট দিন")}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/solutions"
              className="px-6 py-3.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-800 dark:text-white font-bold text-sm border border-gray-200 dark:border-white/10 transition-all"
            >
              <span>{t("Explore Solutions", "সমাধানসমূহ দেখুন")}</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
