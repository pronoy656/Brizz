"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Compass,
  Lightbulb,
  Package,
  Code2,
  Rocket,
  TrendingUp,
  Globe,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";

interface Stage {
  id: string;
  stepNumber: string;
  name: { en: string; bn: string };
  tagline: { en: string; bn: string };
  headline: { en: string; bn: string };
  description: { en: string; bn: string };
  pillar: { en: string; bn: string };
  icon: React.ElementType;
  accentColor: string;
  badgeColor: string;
  services: {
    title: { en: string; bn: string };
    desc: { en: string; bn: string };
    tag: { en: string; bn: string };
    link: string;
  }[];
}

const JOURNEY_STAGES: Stage[] = [
  {
    id: "zero",
    stepNumber: "00",
    name: { en: "ZERO", bn: "জিরো" },
    tagline: { en: "The Blank Canvas", bn: "শুরুর প্রস্তুতি" },
    headline: {
      en: "Know Nothing About Business? Start Here.",
      bn: "ব্যবসা সম্পর্কে কিছুই জানেন না? এখান থেকেই শুরু করুন।"
    },
    description: {
      en: "You have the dream and ambition, but no prior experience. BRIIZZ demystifies everything—helping you assess viability, calculate startup budgets, and draft an executable blueprint before risking a single taka.",
      bn: "আপনার স্বপ্ন ও উদ্যম আছে, কিন্তু আগের কোনো অভিজ্ঞতা নেই। BRIIZZ ঝুঁকিহীনভাবে ব্যবসায়ের সম্ভাব্যতা যাচাই, বাজেট পরিকল্পনা এবং নিখুঁত রোডম্যাপ তৈরিতে পাশে থাকে।"
    },
    pillar: { en: "Foundation & Feasibility", bn: "ভিত্তি ও সম্ভাব্যতা যাচাই" },
    icon: Compass,
    accentColor: "from-blue-500 to-cyan-400",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    services: [
      {
        title: { en: "Business Feasibility & Cost Modeling", bn: "ব্যবসায়ের সম্ভাব্যতা ও বাজেট মডেলিং" },
        desc: { en: "Accurate unit economics, initial investment estimation, and risk analysis.", bn: "সঠিক বাজেট প্রাক্কলন ও ঝুঁকি পর্যালোচনা।" },
        tag: { en: "Consultation", bn: "পরামর্শ" },
        link: "/needs/new?category=business"
      },
      {
        title: { en: "1-on-1 Founder Onboarding", bn: "১-অন-১ ফাউন্ডার অনবোর্ডিং" },
        desc: { en: "Dedicated guidance to structure your goals and identify required resources.", bn: "আপনার লক্ষ্যের উপযোগী রিসোর্স নির্ধারণ।" },
        tag: { en: "Mentorship", bn: "মেন্টরশিপ" },
        link: "/contact"
      },
      {
        title: { en: "Step-by-Step Strategic Roadmap", bn: "ধাপে ধাপে কৌশলগত রোডম্যাপ" },
        desc: { en: "A clear timeline from initial spark to first revenue milestone.", bn: "ধারণা থেকে প্রথম আয় পর্যন্ত সুস্পষ্ট পরিকল্পনা।" },
        tag: { en: "Strategy", bn: "কৌশল" },
        link: "/solutions"
      }
    ]
  },
  {
    id: "idea",
    stepNumber: "01",
    name: { en: "IDEA", bn: "আইডিয়া" },
    tagline: { en: "Concept & Structure", bn: "পরিকল্পনা ও রূপরেখা" },
    headline: {
      en: "Structuring & Legitimizing Your Vision",
      bn: "আপনার ভিশনকে বৈধ ও প্রাতিষ্ঠানিক রূপ দিন"
    },
    description: {
      en: "Turn abstract thoughts into a rock-solid business identity. We handle trade licensing, RJSC incorporation, and branding so your business starts with instant legal trust.",
      bn: "আপনার ধারণাকে একটি স্বীকৃত ব্র্যান্ড ও প্রতিষ্ঠানে রূপান্তর করুন। ট্রেড লাইসেন্স, কোম্পানি রেজিস্ট্রেশন এবং ব্র্যান্ডিং সম্পন্ন করুন নির্ভরযোগ্যভাবে।"
    },
    pillar: { en: "Legal, Brand & Identity", bn: "আইনি অনুমোদন ও ব্র্যান্ড আইডেন্টিটি" },
    icon: Lightbulb,
    accentColor: "from-amber-500 to-orange-400",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    services: [
      {
        title: { en: "RJSC Incorporation & Trade License", bn: "আরজেএসসি নিবন্ধন ও ট্রেড লাইসেন্স" },
        desc: { en: "Hassle-free corporate registration, TIN/BIN, and government clearances.", bn: "ট্রেড লাইসেন্স ও ট্যাক্স/ভ্যাট অনুমোদন।" },
        tag: { en: "Legal", bn: "আইনি" },
        link: "/solutions?category=business"
      },
      {
        title: { en: "Brand Identity & Visual Design", bn: "ব্র্যান্ড আইডেন্টিটি ও লোগো ডিজাইন" },
        desc: { en: "Memorable logos, brand books, typography, and cohesive visual language.", bn: "আধুনিক ভিজ্যুয়াল ডিজাইন ও লোগো।" },
        tag: { en: "Creative", bn: "ডিজাইন" },
        link: "/solutions?category=tech"
      },
      {
        title: { en: "Trademark & IP Protection", bn: "ট্রেডমার্ক ও আইপি প্রোটেকশন" },
        desc: { en: "Secure exclusive rights to your company name, logo, and proprietary assets.", bn: "ব্র্যান্ডের নাম ও লোগোর স্বত্ব সুরক্ষা।" },
        tag: { en: "Compliance", bn: "কমপ্লায়েন্স" },
        link: "/needs/new?category=business"
      }
    ]
  },
  {
    id: "source",
    stepNumber: "02",
    name: { en: "SOURCE", bn: "সোর্স" },
    tagline: { en: "Products, Suppliers & Materials", bn: "পণ্য, সাপ্লায়ার ও কাঁচামাল" },
    headline: {
      en: "Products, Raw Materials & Factory Direct",
      bn: "কাঁচামাল, ফ্যাক্টরি সোর্সিং ও সাপ্লাই চেইন"
    },
    description: {
      en: "Stop dealing with sketchy middlemen. Source verified raw materials, fabrics, tech hardware, or direct factory procurement from China and local hubs at guaranteed wholesale rates.",
      bn: "দালালদের হয়রানি ছাড়াই বিশ্বস্ত উৎস থেকে কাঁচামাল, ফ্যাব্রিক, গ্যাজেট বা চায়না ফ্যাক্টরি থেকে সরাসরি আমদানির সুবিধা উপভোগ করুন।"
    },
    pillar: { en: "Supply Chain & Procurement", bn: "সাপ্লাই চেইন ও প্রকিউরমেন্ট" },
    icon: Package,
    accentColor: "from-emerald-500 to-teal-400",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    services: [
      {
        title: { en: "Raw Materials & Bulk Inventory", bn: "কাঁচামাল ও বাল্ক ইনভেন্টরি" },
        desc: { en: "Industrial chemicals, textile fabrics, packaging, and hardware supplies.", bn: "টেক্সটাইল, প্লাস্টিক ও নির্মাণ কাঁচামাল।" },
        tag: { en: "Supply", bn: "সাপ্লাই" },
        link: "/solutions?category=wholesale"
      },
      {
        title: { en: "China & Global Direct Sourcing", bn: "চীন ও আন্তর্জাতিক সরাসরি সোর্সিং" },
        desc: { en: "Factory vetting, sample inspection, bulk negotiation, and customs clearance.", bn: "ফ্যাক্টরি ভেরিফিকেশন ও কাস্টমস ক্লিয়ারেন্স।" },
        tag: { en: "Import", bn: "আমদানি" },
        link: "/solutions?category=wholesale"
      },
      {
        title: { en: "Custom Packaging & Warehousing", bn: "কাস্টম প্যাকেজিং ও ওয়্যারহাউজিং" },
        desc: { en: "Eco-friendly branded boxes, industrial pallets, and local storage nodes.", bn: "ব্র্যান্ডেড বক্স ও পণ্য সংরক্ষণ।" },
        tag: { en: "Logistics", bn: "লজিস্টিকস" },
        link: "/needs/new?category=wholesale"
      }
    ]
  },
  {
    id: "build",
    stepNumber: "03",
    name: { en: "BUILD", bn: "বিল্ড" },
    tagline: { en: "Digital Engineering & Tools", bn: "ডিজিটাল ইঞ্জিনিয়ারিং ও টুলস" },
    headline: {
      en: "High-Performance Digital Infrastructure",
      bn: "আধুনিক ওয়েবসাইট, অ্যাপ ও ডিজিটাল সমাধান"
    },
    description: {
      en: "Build modern, ultra-fast websites, mobile apps, and automated management software (ERP/CRM/POS). We engineer tools that automate repetitive tasks and drive real conversions.",
      bn: "আপনার ব্যবসার জন্য আল্ট্রা-ফাস্ট ওয়েবসাইট, ই-কমার্স পোর্টাল, মোবাইল অ্যাপ এবং স্বয়ংক্রিয় ইআরপি সফটওয়্যার তৈরি করুন।"
    },
    pillar: { en: "Software & Digital Systems", bn: "সফটওয়্যার ও ডিজিটাল সিস্টেম" },
    icon: Code2,
    accentColor: "from-indigo-500 to-violet-400",
    badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    services: [
      {
        title: { en: "Custom Web Apps & E-Commerce", bn: "কাস্টম ওয়েবসাইট ও ই-কমার্স" },
        desc: { en: "High-speed Next.js portals, seamless checkout, and conversion-optimized UX.", bn: "দ্রুতগতির ওয়েবসাইট ও নিরাপদ পেমেন্ট।" },
        tag: { en: "Development", bn: "ডেভেলপমেন্ট" },
        link: "/solutions?category=tech"
      },
      {
        title: { en: "ERP, CRM & Inventory Systems", bn: "ইআরপি, সিআরএম ও ইনভেন্টরি অটোমেশন" },
        desc: { en: "Track orders, stock levels, multi-branch sales, and accounts in real-time.", bn: "বিক্রি, স্টক ও অ্যাকাউন্টিং অটোমেশন।" },
        tag: { en: "Automation", bn: "অটোমেশন" },
        link: "/solutions?category=tech"
      },
      {
        title: { en: "Mobile Apps (iOS & Android)", bn: "আইওএস ও অ্যান্ড্রয়েড মোবাইল অ্যাপ" },
        desc: { en: "Native-quality cross-platform applications with push notifications & live tracking.", bn: "স্মুথ অ্যাপ ইউজার এক্সপেরিয়েন্স।" },
        tag: { en: "Mobile", bn: "মোবাইল" },
        link: "/needs/new?category=tech"
      }
    ]
  },
  {
    id: "launch",
    stepNumber: "04",
    name: { en: "LAUNCH", bn: "লঞ্চ" },
    tagline: { en: "Workspace & Setup", bn: "অফিস ও অপারেশনাল সেটআপ" },
    headline: {
      en: "Workspace, Fitouts & Go-To-Market Setup",
      bn: "অফিস স্পেস, ইন্টেরিয়র ও কার্যকর লঞ্চ"
    },
    description: {
      en: "Open your doors with confidence. Secure prime commercial office space, turnkey interior execution, acoustic lighting, ergonomic workstations, and payment hardware setup.",
      bn: "বাণিজ্যিক অফিস স্পেস লিজ, নান্দনিক ইন্টেরিয়র ডিজাইন, ওয়ার্কস্পেস ফার্নিচার এবং পেমেন্ট পিওএস সেটআপের মাধ্যমে ব্যবসা শুরু করুন।"
    },
    pillar: { en: "Commercial Infrastructure", bn: "বাণিজ্যিক ইনফ্রাস্ট্রাকচার" },
    icon: Rocket,
    accentColor: "from-rose-500 to-pink-400",
    badgeColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    services: [
      {
        title: { en: "Commercial Space Leasing", bn: "বাণিজ্যিক স্পেস সোর্সিং ও লিজ" },
        desc: { en: "Verified commercial hubs, showroom properties, and legal tenancy verification.", bn: "যাচাইকৃত অফিস ও শোরুম স্পেস।" },
        tag: { en: "Real Estate", bn: "রিয়েল এস্টেট" },
        link: "/solutions?category=real-estate"
      },
      {
        title: { en: "Turnkey Office Interiors & Fitouts", bn: "টার্নকি অফিস ইন্টেরিয়র ও ডেকোরেশন" },
        desc: { en: "Architectural layouts, acoustic partitioning, executive furniture, and lighting.", bn: "কাস্টম ডিজাইন ও অফিস ফার্নিচার।" },
        tag: { en: "Interior", bn: "ইন্টেরিয়র" },
        link: "/solutions?category=real-estate"
      },
      {
        title: { en: "Payment Gateways & Hardware POS", bn: "পেমেন্ট গেটওয়ে ও পিওএস মেশিন" },
        desc: { en: "Instant bKash/Nagad/Cards integration, receipt printers, and barcode scanners.", bn: "ডিজিটাল ও ক্যাশলেস পেমেন্ট ব্যবস্থা।" },
        tag: { en: "Fintech", bn: "ফিনটেক" },
        link: "/needs/new?category=tech"
      }
    ]
  },
  {
    id: "grow",
    stepNumber: "05",
    name: { en: "GROW", bn: "গ্রো" },
    tagline: { en: "Traction & Acquisition", bn: "মার্কেটিং ও বিক্রয় বৃদ্ধি" },
    headline: {
      en: "Targeted Growth & Customer Acquisition",
      bn: "গ্রোথ মার্কেটিং ও কাস্টমার অ্যাকুইজিশন"
    },
    description: {
      en: "Attract your ideal customers profitably. Fuel revenue with data-backed performance marketing, high-ROAS ad funnels, content production, and skilled sales recruitment.",
      bn: "ডেটা-ড্রিভেন ডিজিটাল মার্কেটিং, হাই-কনভার্টিং বিজ্ঞাপন ক্যাম্পেইন এবং দক্ষ কর্মী নিয়োগের মাধ্যমে বিক্রি বাড়ান।"
    },
    pillar: { en: "Revenue & Marketing", bn: "মার্কেটিং ও রেভিনিউ গ্রোথ" },
    icon: TrendingUp,
    accentColor: "from-purple-500 to-indigo-400",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    services: [
      {
        title: { en: "Performance Marketing & ROAS Scaling", bn: "পারফরম্যান্স মার্কেটিং ও সেলস ফানেল" },
        desc: { en: "Meta, Google & TikTok ads engineered for minimum CAC and maximum conversion.", bn: "টার্গেটেড বিজ্ঞাপন ও বিক্রয় বৃদ্ধি।" },
        tag: { en: "Marketing", bn: "মার্কেটিং" },
        link: "/solutions?category=business"
      },
      {
        title: { en: "Creative Media & Video Production", bn: "বিজ্ঞাপন ভিডিও ও কনটেন্ট প্রোডাকশন" },
        desc: { en: "Commercial product photography, 4K reels, and compelling storytelling.", bn: "প্রোডাক্ট ফটো ও প্রমোশনাল ভিডিও।" },
        tag: { en: "Creative", bn: "মিডিয়া" },
        link: "/solutions?category=tech"
      },
      {
        title: { en: "Sales & Executive Recruitment", bn: "সেলস ও দক্ষ জনবল নিয়োগ" },
        desc: { en: "Source vetted sales reps, operations managers, and specialized talent quickly.", bn: "দক্ষ এক্সিকিউটিভ ও টিম নিয়োগ।" },
        tag: { en: "Talent", bn: "জনবল" },
        link: "/needs/new?category=business"
      }
    ]
  },
  {
    id: "scale",
    stepNumber: "06",
    name: { en: "SCALE", bn: "স্কেল" },
    tagline: { en: "Nationwide Domination", bn: "সারাদেশে সম্প্রসারণ ও অটোমেশন" },
    headline: {
      en: "Scale Across 64 Districts with One Ecosystem",
      bn: "৬৪ জেলায় ব্যবসায়ের বিস্তার ও টেকসই প্রবৃদ্ধি"
    },
    description: {
      en: "Expand beyond boundaries. Reach all 64 districts with synchronized logistics, automated tax/audit compliance, and enterprise consulting tailored for market leadership.",
      bn: "দেশব্যাপী ৬৪ জেলায় সরবরাহ ব্যবস্থা বিস্তার, ভ্যাট-ট্যাক্স কমপ্লায়েন্স এবং অটোমেশনের মাধ্যমে ব্যবসাকে শীর্ষ পর্যায়ে নিয়ে যান।"
    },
    pillar: { en: "Enterprise Expansion", bn: "এন্টারপ্রাইজ এক্সপ্যানশন" },
    icon: Globe,
    accentColor: "from-teal-500 to-emerald-400",
    badgeColor: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
    services: [
      {
        title: { en: "64-District Nationwide Distribution", bn: "৬৪ জেলায় পণ্য সরবরাহ ও ডিস্ট্রিবিউশন" },
        desc: { en: "Reliable freight channels reaching every upazila with trackable delivery.", bn: "প্রত্যন্ত অঞ্চল পর্যন্ত নিরাপদ ডেলিভারি।" },
        tag: { en: "Nationwide", bn: "দেশব্যাপী" },
        link: "/solutions?category=wholesale"
      },
      {
        title: { en: "Tax, VAT & Corporate Audit Filing", bn: "ট্যাক্স, ভ্যাট ও অডিট কমপ্লায়েন্স" },
        desc: { en: "Continuous legal counsel, annual returns, and audit-ready bookkeeping.", bn: "বার্ষিক ট্যাক্স রিটার্ন ও অডিট সুরক্ষা।" },
        tag: { en: "Corporate", bn: "কর্পোরেট" },
        link: "/solutions?category=business"
      },
      {
        title: { en: "Enterprise Automation & Expansion", bn: "এন্টারপ্রাইজ অটোমেশন ও বিনিয়োগ প্রস্তুতি" },
        desc: { en: "Multi-branch synchronization, financial audit preparation, and scaling support.", bn: "মাল্টি-ব্রাঞ্চ সিঙ্ক ও ফিনান্সিয়াল অডিট।" },
        tag: { en: "Enterprise", bn: "এন্টারপ্রাইজ" },
        link: "/needs/new?category=business"
      }
    ]
  }
];

export default function OneStopSolution() {
  const { t, language } = useLanguage();
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stagesContainerRef = useRef<HTMLDivElement>(null);

  const currentStage = JOURNEY_STAGES[activeStageIndex];
  const CurrentIcon = currentStage.icon;

  const nextStage = () => {
    setActiveStageIndex((prev) => (prev < JOURNEY_STAGES.length - 1 ? prev + 1 : 0));
  };

  const prevStage = () => {
    setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : JOURNEY_STAGES.length - 1));
  };

  // Keyboard navigation when focusing the section
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextStage();
    if (e.key === "ArrowLeft") prevStage();
  };

  // Scroll active stage tab into view on mobile
  useEffect(() => {
    const tabElement = document.getElementById(`journey-tab-${currentStage.id}`);
    if (tabElement && stagesContainerRef.current) {
      tabElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [activeStageIndex, currentStage.id]);

  return (
    <section
      ref={sectionRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="py-24 lg:py-32 bg-[#fafbfc] dark:bg-[#060709] transition-colors duration-500 relative overflow-hidden border-y border-gray-200/70 dark:border-white/5 focus:outline-none"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-brand-500/5 via-indigo-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 text-xs sm:text-sm font-semibold mb-6 uppercase tracking-wider border border-brand-200/80 dark:border-brand-500/20 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span>{t("INTEGRATED ECOSYSTEM", "সমন্বিত ইকোসিস্টেম")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.15] mb-6"
          >
            {t("Your Ultimate", "আপনার পূর্ণাঙ্গ")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-indigo-600 to-teal-600 dark:from-brand-300 dark:via-indigo-300 dark:to-teal-200">
              {t("One-Stop Solution", "ওয়ান-স্টপ সমাধান")}
            </span>{" "}
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 dark:text-gray-500 font-mono">
              ({t("Version 1", "ভার্সন ১")})
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
              "You bring the idea. We connect everything you need to build, launch and grow your business.",
              "আপনি নিয়ে আসুন আপনার আইডিয়া। ব্যবসা গড়া, শুরু করা ও বড় করার প্রতিটি ধাপ যুক্ত করবে BRIIZZ।"
            )}
          </motion.p>
        </div>

        {/* Dynamic Journey Rail: ZERO → IDEA → SOURCE → BUILD → LAUNCH → GROW → SCALE */}
        <div className="mb-12 lg:mb-16">
          <div
            ref={stagesContainerRef}
            className="flex items-center justify-start lg:justify-between gap-3 sm:gap-4 overflow-x-auto pb-4 pt-2 no-scrollbar px-2 sm:px-0 scroll-smooth"
          >
            {JOURNEY_STAGES.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              const isPast = idx < activeStageIndex;
              const StageIcon = stage.icon;

              return (
                <React.Fragment key={stage.id}>
                  {/* Stage Node Button */}
                  <button
                    id={`journey-tab-${stage.id}`}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`relative flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 shrink-0 text-left cursor-pointer group select-none ${
                      isActive
                        ? "bg-white dark:bg-[#13141a] text-gray-900 dark:text-white shadow-lg shadow-gray-200/50 dark:shadow-black/50 border border-gray-200 dark:border-brand-500/30 scale-105"
                        : "bg-white/60 dark:bg-white/[0.03] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-white dark:hover:bg-white/[0.06] border border-gray-200/60 dark:border-white/5"
                    }`}
                  >
                    {/* Node Dot / Icon */}
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-brand-600 text-white shadow-md shadow-brand-500/30 scale-110"
                          : isPast
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                          : "bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                      }`}
                    >
                      {isPast ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <StageIcon className="w-4 h-4" />
                      )}
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 dark:text-gray-500">
                          {stage.stepNumber}
                        </span>
                        <span
                          className={`text-xs sm:text-sm font-bold tracking-wider ${
                            isActive
                              ? "text-brand-700 dark:text-brand-300"
                              : "text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                          }`}
                        >
                          {language === "bn" ? stage.name.bn : stage.name.en}
                        </span>
                      </div>
                      <span className="text-[11px] text-gray-400 dark:text-gray-500 hidden sm:block truncate max-w-[100px]">
                        {language === "bn" ? stage.tagline.bn : stage.tagline.en}
                      </span>
                    </div>

                    {/* Active Underline Pill Glow */}
                    {isActive && (
                      <motion.div
                        layoutId="activeJourneyPill"
                        className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-500 via-indigo-500 to-teal-500 rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>

                  {/* Connecting Line between steps */}
                  {idx < JOURNEY_STAGES.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center flex-1 max-w-[40px] px-1">
                      <div
                        className={`h-[2px] w-full rounded-full transition-all duration-500 ${
                          idx < activeStageIndex
                            ? "bg-emerald-500/60 dark:bg-emerald-400/60 shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                            : "bg-gray-200 dark:bg-white/10"
                        }`}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Progress Indicator Bar */}
          <div className="w-full bg-gray-200 dark:bg-white/5 h-1 rounded-full mt-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-600 via-indigo-600 to-teal-500 rounded-full"
              initial={false}
              animate={{
                width: `${((activeStageIndex + 1) / JOURNEY_STAGES.length) * 100}%`
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Active Stage Immersive Showcase Stage Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.id}
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-[2.5rem] bg-white dark:bg-[#0c0d12] border border-gray-200/90 dark:border-white/10 p-6 sm:p-8 lg:p-12 shadow-xl shadow-gray-200/40 dark:shadow-black/60 relative overflow-hidden"
          >
            {/* Top Accent Light Beam */}
            <div
              className={`absolute -top-24 left-1/4 w-96 h-48 bg-gradient-to-r ${currentStage.accentColor} opacity-10 dark:opacity-20 blur-3xl pointer-events-none`}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
              
              {/* Left Column: Stage Narrative & Purpose */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  {/* Step Identifier Tag */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-sm font-bold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-xl">
                      STAGE {currentStage.stepNumber} / 06
                    </span>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-xl border ${currentStage.badgeColor}`}
                    >
                      {language === "bn" ? currentStage.pillar.bn : currentStage.pillar.en}
                    </span>
                  </div>

                  {/* Stage Headline */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${currentStage.accentColor} flex items-center justify-center text-white shadow-lg shrink-0 mt-1`}
                    >
                      <CurrentIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                        {language === "bn" ? currentStage.headline.bn : currentStage.headline.en}
                      </h3>
                      <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mt-1">
                        {language === "bn" ? currentStage.tagline.bn : currentStage.tagline.en}
                      </p>
                    </div>
                  </div>

                  {/* Deep Narrative Description */}
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4 mb-8 font-normal">
                    {language === "bn" ? currentStage.description.bn : currentStage.description.en}
                  </p>
                </div>

                {/* Navigation Controls & Action */}
                <div className="pt-6 border-t border-gray-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevStage}
                      aria-label="Previous Stage"
                      className="p-2.5 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextStage}
                      aria-label="Next Stage"
                      className="p-2.5 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <span className="text-xs text-gray-400 ml-2">
                      {activeStageIndex + 1} of {JOURNEY_STAGES.length}
                    </span>
                  </div>

                  <Link
                    href={`/needs/new?stage=${currentStage.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-950 font-bold text-sm hover:opacity-90 transition-all shadow-md group"
                  >
                    <span>{t("Start at This Stage", "এই ধাপ থেকে শুরু করুন")}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Connected BRIIZZ Ecosystem Services */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    {t("Connected BRIIZZ Capabilities", "যুক্ত BRIIZZ সেবাসমূহ")}
                  </span>
                  <span className="text-xs text-brand-600 dark:text-brand-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {t("Fully Verified Providers", "১০০% যাচাইকৃত প্রোভাইডার")}
                  </span>
                </div>

                <div className="space-y-3.5">
                  {currentStage.services.map((service, sIdx) => (
                    <motion.div
                      key={sIdx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: sIdx * 0.08 }}
                      className="group/item relative p-4 sm:p-5 rounded-2xl bg-gray-50 dark:bg-[#14151d] hover:bg-white dark:hover:bg-[#1a1c26] border border-gray-200/70 dark:border-white/5 hover:border-brand-500/30 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="w-8 h-8 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0 text-brand-600 dark:text-brand-400 font-bold text-xs mt-0.5 group-hover/item:scale-110 transition-transform">
                          0{sIdx + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover/item:text-brand-600 dark:group-hover/item:text-brand-400 transition-colors">
                              {language === "bn" ? service.title.bn : service.title.en}
                            </h4>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-gray-200/70 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                              {language === "bn" ? service.tag.bn : service.tag.en}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            {language === "bn" ? service.desc.bn : service.desc.en}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={service.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 group-hover/item:text-brand-700 dark:group-hover/item:text-brand-300 whitespace-nowrap self-end sm:self-center shrink-0 transition-colors"
                      >
                        <span>{t("Explore", "দেখুন")}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Finale Convergence: "One Business. One Ecosystem. One Partner." */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 lg:mt-20 rounded-[2.5rem] bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white p-8 sm:p-12 lg:p-16 border border-gray-800 dark:border-white/10 shadow-2xl relative overflow-hidden text-center"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs sm:text-sm font-mono tracking-widest text-brand-400 uppercase font-semibold mb-4 block">
              {t("THE UNIFIED LIFECYCLE", "সমন্বিত লাইফসাইকেল")}
            </span>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              {t("One Business. One Ecosystem. One Partner.", "এক ব্যবসা। এক ইকোসিস্টেম। এক সহযোগী।")}
            </h3>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
              {t(
                "Whether you're starting from a blank page or scaling across 64 districts, you never have to coordinate dozens of unverified vendors alone.",
                "শুরুর পরিকল্পনা থেকে দেশব্যাপী বিস্তার—সব ধাপে আপনার সাথে রয়েছে BRIIZZ-এর নির্ভরযোগ্য টিম ও ভেরিফাইড নেটওয়ার্ক।"
              )}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/needs/new"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-500 to-teal-400 text-gray-950 font-extrabold text-sm sm:text-base hover:brightness-110 transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 group"
              >
                <span>{t("Start Your Journey from Zero", "জিরো থেকে আপনার জার্নি শুরু করুন")}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/15 transition-all backdrop-blur-md flex items-center justify-center gap-2"
              >
                <span>{t("Browse All Solutions", "সকল সমাধান দেখুন")}</span>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
