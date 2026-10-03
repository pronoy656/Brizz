"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  Package,
  Factory,
  Building2,
  Settings2,
  Globe,
  Cpu,
  TrendingUp,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
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
    link: "/solutions?category=wholesale"
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
    link: "/solutions?category=wholesale"
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
    link: "/solutions?category=real-estate"
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
    link: "/solutions?category=business"
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
    link: "/solutions?category=tech"
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
    link: "/solutions?category=tech"
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
    link: "/solutions?category=business"
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
  const effectiveActiveId = hoveredRouteId || activeRouteId;
  const activeRoute = ALL_ROUTES.find((r) => r.id === effectiveActiveId) || ALL_ROUTES[0];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#fafbfc] dark:bg-[#06070a] text-gray-900 dark:text-white relative overflow-hidden border-t border-gray-200/80 dark:border-white/10 transition-colors duration-500">
      
      {/* Background Precision Transit Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:36px_36px] opacity-60 dark:opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.15] mb-6"
          >
            {t("Your Ultimate", "আপনার পূর্ণাঙ্গ")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-indigo-600 to-teal-600 dark:from-brand-400 dark:via-teal-300 dark:to-indigo-300">
              {t("One-Stop Solution", "ওয়ান-স্টপ সমাধান")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            {t(
              "You bring the idea. We connect everything you need to build, launch and grow your business.",
              "আপনি নিয়ে আসুন আপনার আইডিয়া। ব্যবসা গড়া, শুরু করা ও বড় করার প্রতিটি ধাপ যুক্ত করবে BRIIZZ।"
            )}
          </motion.p>
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
                      from="300"
                      to="0"
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
                      from="300"
                      to="0"
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
                {t("ONE STOP", "ওয়ান-স্টপ")}
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
        {/* MOBILE & TABLET RESPONSIVE INTERACTIVE TRANSIT SYSTEM (< lg screens) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden w-full space-y-6">

          {/* Active Route Central Feature Card */}
          <div
            className="relative overflow-hidden rounded-3xl p-5 sm:p-7 border transition-all duration-500 shadow-lg bg-white dark:bg-[#10131d]"
            style={{ borderColor: `${activeRoute.color}45` }}
          >
            {/* Ambient Glow */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-20"
              style={{ backgroundColor: activeRoute.color }}
            />

            {/* Top Row: Central Hub Badge + Active Route Name */}
            <div className="flex items-start justify-between gap-3 mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0 transition-transform duration-300"
                  style={{ backgroundColor: activeRoute.color }}
                >
                  <activeRoute.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-brand-700 dark:text-brand-300 uppercase font-bold block">
                    {language === "bn" ? activeRoute.category.bn : activeRoute.category.en}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                    {language === "bn" ? activeRoute.name.bn : activeRoute.name.en}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-[11px] font-bold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10 shrink-0">
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: activeRoute.color }} />
                <span>{language === "bn" ? activeRoute.metric.bn : activeRoute.metric.en}</span>
              </div>
            </div>

            {/* Deliverable & Description */}
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
              {language === "bn" ? activeRoute.deliverable.bn : activeRoute.deliverable.en}
            </p>

            {/* Meta SLA Banner & CTA Button */}
            <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {language === "bn" ? activeRoute.sla.bn : activeRoute.sla.en}
                </span>
              </div>

              <Link
                href={activeRoute.link}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02] w-full sm:w-auto"
                style={{ backgroundColor: activeRoute.color }}
              >
                <span>{t("Explore This Solution", "এই সমাধান দেখুন")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Station Selector Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {ALL_ROUTES.map((route) => {
              const isSelected = effectiveActiveId === route.id;
              const Icon = route.icon;
              return (
                <button
                  type="button"
                  key={route.id}
                  onClick={() => {
                    setActiveRouteId(route.id);
                    setHoveredRouteId(null);
                  }}
                  className={`w-full p-3.5 rounded-2xl cursor-pointer transition-all duration-300 border text-left flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-white dark:bg-[#181820] border-brand-500 shadow-md ring-2 ring-brand-500/20 scale-[1.01]"
                      : "bg-white/80 dark:bg-white/[0.03] border-gray-200/80 dark:border-white/10 hover:border-gray-300 hover:bg-white dark:hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "text-white shadow-sm"
                          : "bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300"
                      }`}
                      style={{ backgroundColor: isSelected ? route.color : undefined }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: route.color }}
                        />
                        <span
                          className={`text-xs font-black tracking-wide truncate ${
                            isSelected ? "text-brand-700 dark:text-brand-300" : "text-gray-900 dark:text-white"
                          }`}
                        >
                          {language === "bn" ? route.name.bn : route.name.en}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate mt-0.5">
                        {language === "bn" ? route.tagline.bn : route.tagline.en}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isSelected
                        ? "border-transparent text-white"
                        : "border-gray-200 dark:border-white/10 text-gray-400"
                    }`}
                    style={{ backgroundColor: isSelected ? route.color : undefined }}
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
