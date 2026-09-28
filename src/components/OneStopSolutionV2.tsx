"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Package,
  Factory,
  Globe,
  Cpu,
  Building2,
  Settings2,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

interface EcosystemNode {
  id: string;
  name: { en: string; bn: string };
  tagline: { en: string; bn: string };
  description: { en: string; bn: string };
  category: { en: string; bn: string };
  icon: React.ElementType;
  angleDeg: number;
  color: string;
  gradient: string;
  link: string;
  keyPoints: { en: string; bn: string }[];
}

// 7 Connected Business Needs with calibrated orbital angles to eliminate crowding
const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: "suppliers",
    name: { en: "SUPPLIERS", bn: "সাপ্লায়ার্স" },
    tagline: {
      en: "Direct access to verified manufacturers and tier-1 trade partners across 64 districts.",
      bn: "দেশব্যাপী ৬৪ জেলার ভেরিফাইড প্রস্তুতকারক ও টপ-টিয়ার সাপ্লাই পার্টনারদের সরাসরি অ্যাক্সেস।"
    },
    description: {
      en: "Eliminate unreliable brokers. Work with pre-screened factories, distributors, and logistics partners under strict SLAs.",
      bn: "দালালমুক্ত সরাসরি কারখানা সংযোগ ও মাইলস্টোন নিরাপত্তা নিশ্চিত করে সাপ্লাই চেইন পরিচালনা।"
    },
    category: { en: "Verified Supplier Network", bn: "ভেরিফাইড সাপ্লায়ার নেটওয়ার্ক" },
    icon: Factory,
    angleDeg: -90, // Top Center (12 o'clock)
    color: "#3b82f6", // Blue
    gradient: "from-blue-500 to-indigo-400",
    link: "/solutions?category=wholesale",
    keyPoints: [
      { en: "500+ Verified Suppliers", bn: "৫০০+ ভেরিফাইড সাপ্লায়ার" },
      { en: "Quality Escrow Protection", bn: "কোয়ালিটি ও পেমেন্ট এসক্রো" },
      { en: "Nationwide Freight Delivery", bn: "দেশব্যাপী মালবাহী লজিস্টিকস" }
    ]
  },
  {
    id: "website",
    name: { en: "WEBSITE", bn: "ওয়েবসাইট" },
    tagline: {
      en: "From your first landing page to a complete digital platform.",
      bn: "প্রথম ল্যান্ডিং পেজ থেকে পূর্ণাঙ্গ ডিজিটাল প্ল্যাটফর্ম ও ই-কমার্স।"
    },
    description: {
      en: "Ultra-fast Next.js portals, seamless payment gateways, and custom mobile apps engineered for maximum conversion.",
      bn: "হাই-পারফরম্যান্স ওয়েবসাইট, মোবাইল অ্যাপ এবং স্বয়ংক্রিয় পেমেন্ট গেটওয়ে সলিউশন।"
    },
    category: { en: "Web & Digital Platforms", bn: "ওয়েব ও ডিজিটাল প্ল্যাটফর্ম" },
    icon: Globe,
    angleDeg: -35, // Top Right (~2 o'clock)
    color: "#8b5cf6", // Purple
    gradient: "from-purple-500 to-violet-400",
    link: "/solutions?category=tech",
    keyPoints: [
      { en: "Custom Next.js & React Apps", bn: "কাস্টম নেক্সটজেএস ও ওয়েব অ্যাপ" },
      { en: "E-Commerce & Payment Gateways", bn: "ই-কমার্স ও পেমেন্ট ইন্টিগ্রেশন" },
      { en: "iOS & Android Mobile Apps", bn: "মোবাইল অ্যাপ্লিকেশন" }
    ]
  },
  {
    id: "digital-tools",
    name: { en: "DIGITAL TOOLS", bn: "ডিজিটাল টুলস" },
    tagline: {
      en: "Automate your entire workflow with enterprise ERP, CRM, and cloud systems.",
      bn: "ইআরপি, সিআরএম এবং ক্লাউড অটোমেশনের মাধ্যমে ব্যবসায়ের প্রতিটি প্রক্রিয়া সহজ করুন।"
    },
    description: {
      en: "Synchronize inventory, automate POS billing, track multi-branch performance, and eliminate manual errors effortlessly.",
      bn: "মাল্টি-ব্রাঞ্চ স্টক ট্র্যাকিং, অটোমেটেড বিলিং এবং লাইভ রিপোর্টিং সিস্টেম।"
    },
    category: { en: "Enterprise Software & Automation", bn: "এন্টারপ্রাইজ সফটওয়্যার ও অটোমেশন" },
    icon: Cpu,
    angleDeg: 15, // Mid Right (~3:30 o'clock)
    color: "#06b6d4", // Cyan
    gradient: "from-cyan-500 to-teal-400",
    link: "/solutions?category=tech",
    keyPoints: [
      { en: "ERP, CRM & POS Automation", bn: "ইআরপি, সিআরএম ও পিওএস" },
      { en: "Live Multi-Branch Inventory", bn: "রিয়েল-টাইম স্টক সিঙ্ক" },
      { en: "Cloud Security & Scalability", bn: "ক্লাউড সিকিউরিটি ও ব্যাকআপ" }
    ]
  },
  {
    id: "workspace",
    name: { en: "WORKSPACE", bn: "ওয়ার্কস্পেস" },
    tagline: {
      en: "Prime commercial spaces, turnkey architectural interiors, and turnkey setup.",
      bn: "বাণিজ্যিক অফিস স্পেস, টার্নকি ইন্টেরিয়র ডিজাইন ও সম্পূর্ণ ওয়ার্কস্পেস বাস্তবায়ন।"
    },
    description: {
      en: "Source premium office leases, ergonomic corporate furniture, acoustic lighting, and complete physical infrastructure.",
      bn: "অফিস লিজ ভেরিফিকেশন, নান্দনিক ইন্টেরিয়র ডেকোরেশন এবং এক্সিকিউটিভ ফার্নিচার।"
    },
    category: { en: "Commercial Real Estate & Interiors", bn: "বাণিজ্যিক স্পেস ও ইন্টেরিয়র" },
    icon: Building2,
    angleDeg: 58, // Bottom Right (~5 o'clock - spaced wide from operations)
    color: "#f59e0b", // Amber
    gradient: "from-amber-500 to-orange-400",
    link: "/solutions?category=real-estate",
    keyPoints: [
      { en: "Commercial Space Leasing", bn: "বাণিজ্যিক স্পেস সোর্সিং" },
      { en: "Turnkey Interior Fitouts", bn: "টার্নকি অফিস ইন্টেরিয়র" },
      { en: "Acoustic & Hardware Setup", bn: "ফার্নিচার ও লাইটিং ইনস্টলেশন" }
    ]
  },
  {
    id: "operations",
    name: { en: "OPERATIONS", bn: "অপারেশনস" },
    tagline: {
      en: "Seamless legal compliance, trade licensing, tax filing, and team recruitment.",
      bn: "ট্রেড লাইসেন্স, আরজেএসসি কোম্পানি রেজিস্ট্রেশন, ট্যাক্স/ভ্যাট ও দক্ষ জনবল নিয়োগ।"
    },
    description: {
      en: "Protect and streamline your legal foundation. RJSC filings, trade licenses, continuous VAT compliance, and vetted staffing.",
      bn: "আইনি অনুমোদন, লাইসেন্সিং, অডিট কমপ্লায়েন্স এবং দক্ষ কর্মী রিক্রুটমেন্ট।"
    },
    category: { en: "Legal, Tax & Human Resources", bn: "আইনি, ট্যাক্স ও রিক্রুটমেন্ট" },
    icon: Settings2,
    angleDeg: 122, // Bottom Left (~7 o'clock - spaced wide from workspace)
    color: "#10b981", // Emerald
    gradient: "from-emerald-500 to-teal-400",
    link: "/solutions?category=business",
    keyPoints: [
      { en: "RJSC & Trade Licenses", bn: "আরজেএসসি ও ট্রেড লাইসেন্স" },
      { en: "Tax, VAT & Audit Compliance", bn: "ট্যাক্স, ভ্যাট ও অডিট" },
      { en: "Executive & Sales Recruitment", bn: "দক্ষ জনবল ও সেলস টিম নিয়োগ" }
    ]
  },
  {
    id: "growth",
    name: { en: "GROWTH", bn: "গ্রোথ" },
    tagline: {
      en: "Keep evolving and scaling revenue as your business expands.",
      bn: "ব্যবসার প্রসারের সাথে সাথে প্রতিনিয়ত বিক্রয় ও ব্র্যান্ডের বিস্তার বৃদ্ধি করুন।"
    },
    description: {
      en: "Data-driven performance marketing, high-ROAS sales funnels, corporate video production, and nationwide expansion.",
      bn: "টার্গেটেড ডিজিটাল মার্কেটিং, কনটেন্ট প্রোডাকশন এবং ৬৪ জেলায় সেলস ডিস্ট্রিবিউশন।"
    },
    category: { en: "Growth Marketing & Expansion", bn: "গ্রোথ মার্কেটিং ও এক্সপ্যানশন" },
    icon: TrendingUp,
    angleDeg: 165, // Mid Left (~8:30 o'clock)
    color: "#ec4899", // Pink
    gradient: "from-pink-500 to-rose-400",
    link: "/solutions?category=business",
    keyPoints: [
      { en: "Performance Marketing & ROAS", bn: "টার্গেটেড বিজ্ঞাপন ও আরওএএস" },
      { en: "Commercial Media Production", bn: "বিজ্ঞাপন ভিডিও ও ফটোগ্রাফি" },
      { en: "64-District Scale Advisory", bn: "দেশব্যাপী সম্প্রসারণ পরিকল্পনা" }
    ]
  },
  {
    id: "products",
    name: { en: "PRODUCTS", bn: "প্রোডাক্টস" },
    tagline: {
      en: "Connect with the products, materials and suppliers your business needs.",
      bn: "আপনার ব্যবসার প্রয়োজনীয় পণ্য, কাঁচামাল এবং নির্ভরযোগ্য সাপ্লায়ার সংযোগ।"
    },
    description: {
      en: "Source high-grade raw materials, inventory, and packaging with factory-direct pricing and guaranteed verification.",
      bn: "উচ্চমানের কাঁচামাল, ইনভেন্টরি ও প্যাকেজিং সরাসরি কারখানা থেকে সাশ্রয়ী মূল্যে সংগ্রহ করুন।"
    },
    category: { en: "Procurement & Raw Materials", bn: "কাঁচামাল ও প্রকিউরমেন্ট" },
    icon: Package,
    angleDeg: -145, // Top Left (~10 o'clock)
    color: "#0ea5e9", // Sky
    gradient: "from-sky-500 to-cyan-400",
    link: "/solutions?category=wholesale",
    keyPoints: [
      { en: "Raw Materials & Fabrics", bn: "কাঁচামাল ও ফ্যাব্রিক" },
      { en: "Bulk Wholesale Inventory", bn: "বাল্ক পাইকারি পণ্য" },
      { en: "Direct China/Global Sourcing", bn: "চায়না ও গ্লোবাল ইমপোর্ট" }
    ]
  }
];

// Precision Orbital Radii for spacious, non-overlapping canvas
const ORBITAL_RADIUS_X = 360; // Horizontal radius in px
const ORBITAL_RADIUS_Y = 255; // Vertical radius in px
const SVG_CENTER_X = 530;
const SVG_CENTER_Y = 360;

export default function OneStopSolutionV2() {
  const { t, language } = useLanguage();
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [activeMobileNodeId, setActiveMobileNodeId] = useState<string>("website");
  const containerRef = useRef<HTMLDivElement>(null);

  const activeNode =
    ECOSYSTEM_NODES.find((n) => n.id === (hoveredNodeId || activeMobileNodeId)) ||
    ECOSYSTEM_NODES[0];

  return (
    <section className="py-24 lg:py-32 bg-[#fafbfc] dark:bg-[#060709] text-gray-900 dark:text-white relative overflow-hidden border-t border-gray-200/80 dark:border-white/10 transition-colors duration-500">
      
      {/* Dynamic Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-70 dark:opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Dynamic Ambient Color Flash when hovering specific nodes */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] transition-all duration-700 pointer-events-none opacity-10 dark:opacity-20"
        style={{
          backgroundColor: hoveredNodeId ? activeNode.color : "transparent"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-white/5 border border-brand-200/70 dark:border-white/10 text-brand-700 dark:text-brand-400 text-xs sm:text-sm font-semibold mb-6 uppercase tracking-wider backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-brand-500 dark:text-brand-400 animate-pulse" />
            <span>{t("CENTRAL ECOSYSTEM BRIDGE", "সমন্বিত সেন্ট্রাল ইকোসিস্টেম")}</span>
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
              ({t("Version 2", "ভার্সন ২")})
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
              "What do you need for your business? BRIIZZ connects everything under one intelligent, verified ecosystem.",
              "আপনার ব্যবসার জন্য কী প্রয়োজন? BRIIZZ যুক্ত করে প্রতিটি সমাধান এক নির্ভরযোগ্য ইকোসিস্টেমে।"
            )}
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP INTERACTIVE RADIAL BRIDGE (lg+ screens) - SPACIOUS & NON-TOUCHING */}
        {/* ========================================================================= */}
        <div
          ref={containerRef}
          className="hidden lg:block relative w-full max-w-[1060px] h-[720px] mx-auto my-4 select-none"
        >
          {/* SVG Canvas for Dynamic Ray Lines & Flowing Particles */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            viewBox="0 0 1060 720"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="glowFilterV2" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Inner & Outer Concentric Ecosystem Guide Rings */}
            <circle
              cx={SVG_CENTER_X}
              cy={SVG_CENTER_Y}
              r={130}
              fill="none"
              stroke="currentColor"
              className="text-gray-200 dark:text-white/[0.06]"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
            <ellipse
              cx={SVG_CENTER_X}
              cy={SVG_CENTER_Y}
              rx={ORBITAL_RADIUS_X}
              ry={ORBITAL_RADIUS_Y}
              fill="none"
              stroke="currentColor"
              className="text-gray-200/90 dark:text-white/[0.05]"
              strokeWidth="1"
              strokeDasharray="2 4"
            />

            {/* Dynamic Connecting Lines from Center (SVG_CENTER_X, SVG_CENTER_Y) to each Node */}
            {ECOSYSTEM_NODES.map((node) => {
              const angleRad = (node.angleDeg * Math.PI) / 180;
              const targetX = SVG_CENTER_X + Math.cos(angleRad) * ORBITAL_RADIUS_X;
              const targetY = SVG_CENTER_Y + Math.sin(angleRad) * ORBITAL_RADIUS_Y;

              const isHovered = hoveredNodeId === node.id;
              const isAnyHovered = hoveredNodeId !== null;

              const pathD = `M ${SVG_CENTER_X} ${SVG_CENTER_Y} L ${targetX} ${targetY}`;

              return (
                <g key={`svg-line-${node.id}`}>
                  {/* Base Track Line */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={
                      isHovered
                        ? node.color
                        : isAnyHovered
                        ? "rgba(156,163,175,0.15)"
                        : "rgba(156,163,175,0.4)"
                    }
                    strokeWidth={isHovered ? 2.5 : 1.2}
                    strokeDasharray={isHovered ? "none" : "3 6"}
                    className="transition-all duration-300"
                    filter={isHovered ? "url(#glowFilterV2)" : undefined}
                  />

                  {/* Flowing animated particle beam on active line */}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={node.color}
                    strokeWidth={isHovered ? 3.5 : 1.5}
                    strokeDasharray="10 180"
                    strokeDashoffset={isHovered ? "0" : "50"}
                    className={isHovered ? "animate-pulse" : ""}
                    style={{
                      opacity: isHovered ? 1 : isAnyHovered ? 0.15 : 0.5
                    }}
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="300"
                      to="0"
                      dur={isHovered ? "1.5s" : "4.5s"}
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Pulsing Target Dot on Node Anchor */}
                  <circle
                    cx={targetX}
                    cy={targetY}
                    r={isHovered ? 5 : 3.5}
                    fill={node.color}
                    className="transition-all duration-300"
                    style={{
                      opacity: isHovered ? 1 : isAnyHovered ? 0.25 : 0.7
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Central BRIIZZ Core Bridge Hub (Centered at 50%, 50%) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center">
            {/* Ambient Pulse Rings */}
            <div className="absolute w-64 h-64 rounded-full border border-brand-500/20 animate-ping opacity-20 pointer-events-none" />
            <div className="absolute w-52 h-52 rounded-full border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-brand-500/5 backdrop-blur-md pointer-events-none" />

            {/* Central Solid Hub Badge */}
            <div className="relative w-40 h-40 rounded-full bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-950 dark:to-black border-2 border-gray-200 dark:border-white/20 shadow-xl dark:shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center p-4 text-center group cursor-default transition-transform duration-500 hover:scale-105">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-500 to-teal-400 flex items-center justify-center text-gray-950 shadow-md mb-1.5">
                <Sparkles className="w-5 h-5 font-bold" />
              </div>
              <span className="text-xl font-black tracking-wider text-gray-900 dark:text-white">BRIIZZ</span>
              <span className="text-[9px] font-mono tracking-widest text-brand-700 dark:text-brand-300 uppercase mt-0.5 font-bold">
                CENTRAL BRIDGE
              </span>
              
              {/* Dynamic status pill */}
              <div className="mt-1 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-[9px] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span>{hoveredNodeId ? "1 Connected" : "7 Active"}</span>
              </div>
            </div>
          </div>

          {/* Floating Typography Nodes - Spacious with Zero Overlap */}
          {ECOSYSTEM_NODES.map((node) => {
            const angleRad = (node.angleDeg * Math.PI) / 180;
            const posX = Math.cos(angleRad) * ORBITAL_RADIUS_X;
            const posY = Math.sin(angleRad) * ORBITAL_RADIUS_Y;

            const isHovered = hoveredNodeId === node.id;
            const isAnyHovered = hoveredNodeId !== null;
            const isDimmed = isAnyHovered && !isHovered;
            const NodeIcon = node.icon;

            return (
              <motion.div
                key={node.id}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                className="absolute z-30 cursor-pointer"
                style={{
                  left: "50%",
                  top: "50%"
                }}
                animate={{
                  x: `calc(-50% + ${isHovered ? posX - Math.cos(angleRad) * 16 : posX}px)`,
                  y: `calc(-50% + ${isHovered ? posY - Math.sin(angleRad) * 16 : posY}px)`,
                  scale: isHovered ? 1.08 : isDimmed ? 0.92 : 1,
                  opacity: isHovered ? 1 : isDimmed ? 0.25 : 0.95,
                  filter: isDimmed ? "blur(1px)" : "blur(0px)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              >
                <div
                  className={`relative transition-all duration-300 rounded-2xl p-3 backdrop-blur-xl border ${
                    isHovered
                      ? "bg-white/95 dark:bg-gray-900/95 border-brand-500 dark:border-brand-400/80 shadow-2xl dark:shadow-[0_0_30px_rgba(0,0,0,0.9)] ring-1 ring-brand-500/20 dark:ring-white/30"
                      : "bg-white/90 dark:bg-gray-900/60 hover:bg-white dark:hover:bg-gray-900/90 border-gray-200/90 dark:border-white/10 hover:border-brand-300 dark:hover:border-white/25 shadow-md dark:shadow-lg"
                  }`}
                  style={{ minWidth: isHovered ? "280px" : "165px" }}
                >
                  {/* Top Bar / Node Name */}
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                        isHovered
                          ? `bg-gradient-to-br ${node.gradient} text-gray-950 shadow-md scale-110`
                          : "bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white"
                      }`}
                    >
                      <NodeIcon className="w-4 h-4" />
                    </div>

                    <div className="flex flex-col">
                      <span
                        className={`text-xs sm:text-sm font-black tracking-wider transition-colors ${
                          isHovered
                            ? "text-brand-700 dark:text-white"
                            : "text-gray-900 dark:text-gray-200"
                        }`}
                      >
                        {language === "bn" ? node.name.bn : node.name.en}
                      </span>
                      <span className="text-[9.5px] font-mono text-gray-500 dark:text-gray-400 tracking-tight">
                        {language === "bn" ? node.category.bn : node.category.en}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Content on Hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pt-2 border-t border-gray-100 dark:border-white/10 text-left"
                      >
                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3 font-normal">
                          {language === "bn" ? node.tagline.bn : node.tagline.en}
                        </p>

                        <div className="space-y-1 mb-3">
                          {node.keyPoints.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400">
                              <span className="w-1 h-1 rounded-full bg-brand-500 dark:bg-brand-400" />
                              <span>{language === "bn" ? pt.bn : pt.en}</span>
                            </div>
                          ))}
                        </div>

                        <Link
                          href={node.link}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors pt-1"
                        >
                          <span>{t("Explore Connected Services", "কানেক্টেড সার্ভিস দেখুন")}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE / TABLET INTERACTIVE EXPERIENCE (< lg screens) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden">
          {/* Mobile Central Hub Badge */}
          <div className="flex flex-col items-center justify-center mb-8 text-center">
            <div className="w-24 h-24 rounded-full bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black border border-gray-200 dark:border-white/20 flex flex-col items-center justify-center shadow-lg mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-500 to-teal-400 flex items-center justify-center text-gray-950 font-bold mb-1">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-sm font-black text-gray-900 dark:text-white">BRIIZZ</span>
              <span className="text-[8px] font-mono text-brand-700 dark:text-brand-300 tracking-widest font-bold">BRIDGE</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t("Tap any business need below to see how BRIIZZ connects it", "নিচের যেকোনো অপশনে ট্যাপ করে সংযোগ দেখুন")}
            </p>
          </div>

          {/* Node Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {ECOSYSTEM_NODES.map((node) => {
              const isActive = activeMobileNodeId === node.id;
              const NodeIcon = node.icon;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveMobileNodeId(node.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-brand-600 dark:bg-brand-500 text-white dark:text-gray-950 shadow-md shadow-brand-500/30 scale-105"
                      : "bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10"
                  }`}
                >
                  <NodeIcon className="w-3.5 h-3.5" />
                  <span>{language === "bn" ? node.name.bn : node.name.en}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Active Node Detail Card */}
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-white dark:bg-gray-900/90 border border-gray-200 dark:border-white/15 p-6 shadow-xl dark:shadow-2xl relative overflow-hidden text-left"
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-10 dark:opacity-20 pointer-events-none"
              style={{ backgroundColor: activeNode.color }}
            />

            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${activeNode.gradient} flex items-center justify-center text-gray-950 shadow-md shrink-0`}
              >
                {React.createElement(activeNode.icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white">
                  {language === "bn" ? activeNode.name.bn : activeNode.name.en}
                </h3>
                <span className="text-xs text-brand-600 dark:text-brand-300 font-semibold">
                  {language === "bn" ? activeNode.category.bn : activeNode.category.en}
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2 leading-snug">
              {language === "bn" ? activeNode.tagline.bn : activeNode.tagline.en}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed font-normal">
              {language === "bn" ? activeNode.description.bn : activeNode.description.en}
            </p>

            <div className="space-y-1.5 mb-6 pt-3 border-t border-gray-100 dark:border-white/10">
              {activeNode.keyPoints.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />
                  <span>{language === "bn" ? pt.bn : pt.en}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              <Link
                href={activeNode.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300"
              >
                <span>{t("Explore Solutions", "বিস্তারিত সমাধান")}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href={`/needs/new?node=${activeNode.id}`}
                className="px-4 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-950 text-xs font-bold hover:opacity-90 transition-opacity"
              >
                {t("Connect Now", "কানেক্ট করুন")}
              </Link>
            </div>
          </motion.div>
        </div>

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
              {t("ONE PLACE → EVERYTHING CONNECTED", "এক জায়গা → সবকিছু যুক্ত")}
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
              {t("One bridge. Every business capability.", "এক সেন্ট্রাল ব্রিজ। আপনার ব্যবসার প্রতিটি প্রয়োজন।")}
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
              href="/network"
              className="px-6 py-3.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-800 dark:text-white font-bold text-sm border border-gray-200 dark:border-white/10 transition-all"
            >
              <span>{t("Explore Verified Network", "ভেরিফাইড নেটওয়ার্ক")}</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
