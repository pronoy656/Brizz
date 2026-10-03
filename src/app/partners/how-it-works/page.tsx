"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Rocket,
  ShieldCheck,
  TrendingUp,
  Globe2,
  Cpu,
  Users,
  CheckCircle2,
  ArrowRight,
  PackageCheck,
  Store,
  Layers,
  Sparkles,
  ChevronRight,
  Boxes,
  Smartphone,
  BarChart3,
  Building2,
  Factory,
  Ship,
  FileCheck,
  Briefcase,
  HelpCircle,
  ChevronDown,
  Zap,
  Check,
  X,
  BadgeCheck,
  PhoneCall,
  Clock,
  Compass,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PartnerHowItWorksPage() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"sourcing" | "tech" | "traffic">("sourcing");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const PILLARS = [
    {
      id: "sourcing" as const,
      phaseNum: "01",
      badge: { en: "Phase 01: Physical & Supply", bn: "ধাপ ০১: সাপ্লাই ও সোর্সিং" },
      title: { en: "Global & Local Product Sourcing", bn: "গ্লোবাল ও লোকাল প্রোডাক্ট সোর্সিং" },
      shortTitle: { en: "Sourcing & Supply", bn: "পণ্য ও কাঁচামাল সোর্সিং" },
      subtitle: {
        en: "Source products directly from China factories, global suppliers, and top local manufacturers in Bangladesh.",
        bn: "চায়নার ফ্যাক্টরি থেকে শুরু করে দেশের শীর্ষ লোকাল ম্যানুফ্যাকচারারদের কাছ থেকে সরাসরি পণ্য ও কাঁচামাল সংগ্রহ করুন।",
      },
      icon: Ship,
      themeColor: "blue",
      gradient: "from-blue-600 via-cyan-600 to-teal-500",
      accentBg: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200/60 dark:border-blue-800/40",
      activeTabBg: "bg-blue-600 text-white shadow-lg shadow-blue-500/25",
      deliverables: [
        { en: "Direct OEM/ODM China Factory Gates", bn: "চায়নার সরাসরি ফ্যাক্টরি রেট ও কাস্টমাইজেশন" },
        { en: "Local BD Mills & Wholesale Supplies", bn: "দেশীয় শীর্ষ কারখানা ও মিল থেকে পাইকারি কাঁচামাল" },
        { en: "Complete Customs & Port Clearance", bn: "কাস্টমস, ভ্যাট ও বন্দর ছাড়করণ সহায়তা" },
        { en: "Doorstep Quality Audits & Inspection", bn: "ডোরস্টেপ ডেলিভারি ও প্রি-শিপমেন্ট কোয়ালিটি অডিট" },
      ],
      idealFor: {
        en: "E-Commerce Brands, Retailers, Wholesalers & Distributors",
        bn: "ই-কমার্স উদ্যোক্তা, রিটেইলার, পাইকারি ব্যবসায়ী ও পরিবেশক",
      },
      features: [
        {
          title: { en: "Direct China Factory Sourcing", bn: "চায়না থেকে সরাসরি ফ্যাক্টরি আমদানি" },
          desc: {
            en: "OEM/ODM manufacturing, verified supplier vetting, sample testing, and price negotiation directly at factory gates in Guangzhou, Yiwu, and Shenzhen.",
            bn: "গুয়াংজু, ইইউ ও শেনজেনের বিশ্বস্ত কারখানা থেকে সরাসরি ফ্যাক্টরি রেটে পণ্য তৈরি, স্যাম্পল টেস্ট ও দরদাম সুবিধা।",
          },
          icon: Factory,
          tag: { en: "Zero Middleman", bn: "মধ্যস্বত্বভোগী ছাড়া" },
        },
        {
          title: { en: "Local Bangladesh Factory Supplies", bn: "বাংলাদেশের লোকাল ফ্যাক্টরি ও কাঁচামাল" },
          desc: {
            en: "Wholesale boutique fabrics, garments, restaurant ingredients, construction materials, and packaging sourced straight from verified local factories.",
            bn: "গার্মেন্টস, প্যাকেজিং, রেস্তোরাঁর কাঁচামাল ও নির্মাণ সামগ্রী সরাসরি দেশীয় শীর্ষ মিল ও কারখানা থেকে সাশ্রয়ী মূল্যে সংগ্রহ।",
          },
          icon: Boxes,
          tag: { en: "64 Districts", bn: "৬৪ জেলায় সরবরাহ" },
        },
        {
          title: { en: "End-to-End Customs & Quality Check", bn: "কাস্টমস ক্লিয়ারেন্স ও কোয়ালিটি চেকিং" },
          desc: {
            en: "We handle doorstep logistics, port customs clearance, legal documentation, and pre-shipment quality verification so you never face shipment risk.",
            bn: "শিপমেন্টের আগে নিখুঁত কোয়ালিটি অডিট, কাস্টমস ও ট্যাক্স কমপ্লায়েন্স এবং ডোর-টু-ডোর ডেলিভারি সম্পূর্ণ নিশ্চিত করা হয়।",
          },
          icon: PackageCheck,
          tag: { en: "100% Insured", bn: "১০০% নিরাপদ ডেলিভারি" },
        },
      ],
    },
    {
      id: "tech" as const,
      phaseNum: "02",
      badge: { en: "Phase 02: Digital Foundation", bn: "ধাপ ০২: ডিজিটাল ইনফ্রাস্ট্রাকচার" },
      title: { en: "Web, Mobile Apps & IT Infrastructure", bn: "ওয়েব, মোবাইল অ্যাপ ও সম্পূর্ণ আইটি সেটআপ" },
      shortTitle: { en: "Web, Apps & Tech", bn: "ওয়েব, অ্যাপ ও সফটওয়্যার" },
      subtitle: {
        en: "Starting an e-commerce, real estate, or retail company? We build custom web apps, mobile apps, and enterprise systems.",
        bn: "ই-কমার্স, রিয়েল এস্টেট বা যেকোনো ব্যবসা শুরু করছেন? আমরা তৈরি করে দেব কাস্টম ওয়েব, মোবাইল অ্যাপ ও আইটি প্ল্যাটফর্ম।",
      },
      icon: Cpu,
      themeColor: "indigo",
      gradient: "from-indigo-600 via-purple-600 to-pink-500",
      accentBg: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-indigo-200/60 dark:border-indigo-800/40",
      activeTabBg: "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25",
      deliverables: [
        { en: "Ultra-Fast Next.js High-Conversion Stores", bn: "আল্ট্রা-ফাস্ট Next.js হাই-কনভার্টিং অনলাইন স্টোর" },
        { en: "Native Android & iOS Customer/Rider Apps", bn: "নেটিভ অ্যান্ড্রয়েড ও আইওএস মোবাইল অ্যাপ" },
        { en: "Integrated bKash, Nagad, Card Gateways", bn: "বিকাশ, নগদ ও কার্ড অটোমেটেড পেমেন্ট গেটওয়ে" },
        { en: "Multi-Branch Cloud POS & ERP Systems", bn: "মাল্টি-ব্রাঞ্চ ক্লাউড পিওএস ও ইনভেন্টরি ইআরপি" },
      ],
      idealFor: {
        en: "Startups, Real Estate, Retail Chains & Service Agencies",
        bn: "স্টার্টআপ, রিয়েল এস্টেট, রিটেইল শোরুম ও সার্ভিস এজেন্সি",
      },
      features: [
        {
          title: { en: "Modern E-Commerce & Web Platforms", bn: "মডার্ন ই-কমার্স ও ওয়েব প্ল্যাটফর্ম" },
          desc: {
            en: "High-speed Next.js and custom e-commerce stores with automated inventory, dynamic pricing, and seamless Bangladeshi payment gateways (bKash, Nagad, Cards).",
            bn: "বিকাশ, নগদ ও কার্ড পেমেন্টসহ আল্ট্রা-ফাস্ট ই-কমার্স প্ল্যাটফর্ম, অটোমেটেড ইনভেন্টরি ও আধুনিক ড্যাশবোর্ড।",
          },
          icon: Store,
          tag: { en: "Instant Launch", bn: "দ্রুততম লঞ্চ" },
        },
        {
          title: { en: "Native Android & iOS Mobile Apps", bn: "নেটিভ অ্যান্ড্রয়েড ও আইওএস অ্যাপ" },
          desc: {
            en: "Tailored customer and provider mobile apps with real-time push notifications, live order tracking, and fluid UX.",
            bn: "গ্রাহক ও ডেলিভারি পার্টনারদের জন্য স্মুথ পারফরম্যান্সের নেটিভ মোবাইল অ্যাপ ও পুশ নোটিফিকেশন সিস্টেম।",
          },
          icon: Smartphone,
          tag: { en: "iOS & Android", bn: "আইওএস ও অ্যান্ড্রয়েড" },
        },
        {
          title: { en: "Custom Enterprise Software & ERP", bn: "কাস্টম ইআরপি, পিওএস ও সফটওয়্যার" },
          desc: {
            en: "Custom billing, multi-branch POS, warehouse inventory management, and CRM tailored to real estate, wholesale, retail, and corporate operations.",
            bn: "রিয়েল এস্টেট, হোলসেল বা রিটেইল ব্যবসার জন্য কাস্টম বিলিং, মাল্টি-ব্রাঞ্চ পিওএস ও কাস্টমার ম্যানেজমেন্ট সফটওয়্যার।",
          },
          icon: Layers,
          tag: { en: "Scalable Cloud", bn: "ক্লাউড অটোমেশন" },
        },
      ],
    },
    {
      id: "traffic" as const,
      phaseNum: "03",
      badge: { en: "Phase 03: Scale & Network", bn: "ধাপ ০৩: ট্রাফিক ও নেটওয়ার্ক গ্রোথ" },
      title: { en: "Massive User Base & Traffic Growth", bn: "বিশাল ইউজার বেইজ ও ট্রাফিক বৃদ্ধি" },
      shortTitle: { en: "Traffic & Expansion", bn: "কাস্টমার ট্রাফিক ও বড় ডিল" },
      subtitle: {
        en: "Unlock immediate access to thousands of active buyers and enterprise opportunities across Bangladesh.",
        bn: "সারাদেশের ৬৪ জেলার হাজারো সক্রিয় গ্রাহক ও এন্টারপ্রাইজ ক্লায়েন্টদের কাছে সরাসরি পৌঁছানোর অবারিত সুযোগ।",
      },
      icon: TrendingUp,
      themeColor: "emerald",
      gradient: "from-emerald-600 via-teal-600 to-cyan-500",
      accentBg: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/40",
      activeTabBg: "bg-emerald-600 text-white shadow-lg shadow-emerald-500/25",
      deliverables: [
        { en: "Direct Inbound Client Inquiries to Phone/Dashboard", bn: "সরাসরি ফোন ও ড্যাশবোর্ডে ক্লায়েন্ট অর্ডার" },
        { en: "Featured Ranking on 64-District Directories", bn: "৬৪ জেলার ক্যাটাগরি সার্চে প্রিমিয়াম র‍্যাংকিং" },
        { en: "High-Ticket Multi-Partner Corporate Deals", bn: "যৌথভাবে কোটি টাকার কর্পোরেট প্রজেক্ট বাস্তবায়ন" },
        { en: "Zero Commission or Bidding Penalty", bn: "কোনো বিডিং প্রতিযোগিতা বা ক্ষতিকর কমিশন নেই" },
      ],
      idealFor: {
        en: "Manufacturers, Professional Service Firms & Established Brands",
        bn: "ম্যানুফ্যাকচারার, প্রফেশনাল সার্ভিস ফার্ম ও প্রতিষ্ঠিত ব্র্যান্ড",
      },
      features: [
        {
          title: { en: "Direct Organic Lead Routing", bn: "সরাসরি অর্গানিক কাজের রিকোয়েস্ট" },
          desc: {
            en: "No bidding wars or commission bidding. When users submit requirements matching your exact business capability, we route them directly to you.",
            bn: "কোনো অস্বস্তিকর বিডিং যুদ্ধ নেই। ইউজাররা তাদের সুনির্দিষ্ট চাহিদা জানালে সরাসরি আপনার কাছে রিকোয়েস্ট পাঠানো হয়।",
          },
          icon: Users,
          tag: { en: "Zero Bidding", bn: "বিডিং যুদ্ধমুক্ত" },
        },
        {
          title: { en: "Drive Real Traffic to Your Platform", bn: "আপনার সাইটে আসল গ্রাহক ট্রাফিক" },
          desc: {
            en: "Gain featured placement across BRIIZZ directories, category showcases, and district searches, routing ready-to-buy users straight to your site.",
            bn: "BRIIZZ ডিরেক্টরি ও জেলাভিত্তিক সার্চ থেকে রেডি-টু-বাই ক্রেতাদের সরাসরি আপনার প্ল্যাটফর্ম বা ওয়েবসাইটে পাঠান।",
          },
          icon: BarChart3,
          tag: { en: "High Intent", bn: "প্রকৃত ক্রেতা" },
        },
        {
          title: { en: "Multi-Million Joint Enterprise Deals", bn: "যৌথভাবে বড় কর্পোরেট অর্ডার সম্পন্ন" },
          desc: {
            en: "Collaborate with verified network partners to fulfill massive corporate contracts that individual companies cannot deliver alone.",
            bn: "একা যে বড় প্রজেক্টগুলো করা সম্ভব নয়, নেটওয়ার্কের অন্যান্য পার্টনারদের সাথে কোলাবোরেশন করে সেই মেগা ডিলগুলো সম্পন্ন করুন।",
          },
          icon: Building2,
          tag: { en: "Synergy", bn: "যৌথ সফলতা" },
        },
      ],
    },
  ];

  const STEPS = [
    {
      num: "01",
      title: { en: "Apply & Detail Capabilities", bn: "আবেদন ও সক্ষমতা বিবরণ" },
      desc: {
        en: "Submit your basic business profile — specify whether you provide physical goods, tech development, or professional services.",
        bn: "আপনার সার্ভিস ও সক্ষমতা জানান—প্রোডাক্ট সরবরাহ, সফটওয়্যার ডেভেলপমেন্ট নাকি পাইকারি সাপ্লাই।",
      },
      time: { en: "Takes 3 mins", bn: "মাত্র ৩ মিনিট" },
      icon: Briefcase,
    },
    {
      num: "02",
      title: { en: "Verification & Audit", bn: "কাগজপত্র ও কোয়ালিটি যাচাই" },
      desc: {
        en: "Our verification team validates your business registration, portfolio history, and operational reliability to safeguard trust.",
        bn: "আমাদের টিম আপনার ট্রেড লাইসেন্স, পূর্বের কাজের মান ও সক্ষমতা পর্যালোচনা করে দ্রুত অনুমোদন নিশ্চিত করে।",
      },
      time: { en: "Within 24 Hours", bn: "২৪ ঘণ্টার মধ্যে" },
      icon: ShieldCheck,
    },
    {
      num: "03",
      title: { en: "Verified Partner Badge", bn: "ভেরিফায়েড ব্যাজ ও প্রোফাইল" },
      desc: {
        en: "Your business gets the official verified credential across 64 districts, ranking atop client search inquiries.",
        bn: "অফিসিয়াল ভেরিফায়েড ব্যাজ নিয়ে ৬৪ জেলার নেটওয়ার্কে যুক্ত হোন যা ক্লায়েন্টদের মাঝে শতভাগ আস্থা তৈরি করে।",
      },
      time: { en: "Instant Activation", bn: "তাত্ক্ষণিক অ্যাক্টিভেশন" },
      icon: BadgeCheck,
    },
    {
      num: "04",
      title: { en: "Receive Direct Orders & Scale", bn: "সরাসরি কাজ পান ও ব্যবসা বাড়ান" },
      desc: {
        en: "Qualified customer requirements matching your capacity route straight to your dashboard with zero bidding battles.",
        bn: "সরাসরি ভেরিফায়েড ক্লায়েন্টদের রিকোয়েস্ট গ্রহণ করা শুরু করুন এবং আমাদের বিশাল ইউজার বেইজের সহায়তায় ব্যবসা বাড়ান।",
      },
      time: { en: "Continuous Growth", bn: "ধারাবাহিক প্রবৃদ্ধি" },
      icon: TrendingUp,
    },
  ];

  const COMPARISON = [
    {
      feature: { en: "Business Profile & Registration", bn: "বিজনেস প্রোফাইল ও রেজিস্ট্রেশন" },
      traditional: { en: "High upfront directory fee with zero guarantees", bn: "অগ্রিম বড় ফি নেওয়া হয়, কিন্তু কাজের কোনো নিশ্চয়তা থাকে না" },
      briizz: { en: "Free verified profile with official network trust badge", bn: "সম্পূর্ণ ফ্রি ভেরিফিকেশন ও অফিসিয়াল ট্রাস্ট ব্যাজ প্রদান" },
    },
    {
      feature: { en: "Supply Chain & Factory Sourcing", bn: "সাপ্লাই চেইন ও ফ্যাক্টরি সোর্সিং" },
      traditional: { en: "Zero help. You must risk searching China or mills alone", bn: "কোনো সহায়তা নেই; নিজে ঝুঁকি নিয়ে চায়না বা মিলে ঘুরতে হয়" },
      briizz: { en: "Direct China OEM gate rates & local BD mills clearance", bn: "চায়নার ফ্যাক্টরি ও দেশীয় মিল থেকে সরাসরি সাশ্রয়ী আমদানি সুবিধা" },
    },
    {
      feature: { en: "Digital Software & Mobile Apps", bn: "ডিজিটাল সফটওয়্যার ও মোবাইল অ্যাপ" },
      traditional: { en: "Pay millions to unpredictable outside agencies", bn: "বাইরের এজেন্সিকে লাখ লাখ টাকা দিয়েও সঠিক সেবা না পাওয়া" },
      briizz: { en: "High-speed Next.js web, iOS/Android apps & POS provided", bn: "বিশ্বমানের Next.js ওয়েবসাইট, অ্যাপ ও পিওএস সফটওয়্যার ইন-হাউজ" },
    },
    {
      feature: { en: "Client Lead Distribution", bn: "গ্রাহকদের কাজের রিকোয়েস্ট পাওয়া" },
      traditional: { en: "Exhausting bidding wars against hundreds of cutthroats", bn: "শতাধিক লোকের সাথে ক্ষতিকর দর কষাকষি ও বিডিং যুদ্ধ" },
      briizz: { en: "Algorithmic direct routing matching your exact capability", bn: "আপনার সক্ষমতা অনুযায়ী সরাসরি ক্লায়েন্ট চাহিদা আপনার কাছে পৌঁছানো" },
    },
  ];

  const FAQS = [
    {
      q: {
        en: "How does BRIIZZ help with China and local factory sourcing?",
        bn: "BRIIZZ কীভাবে চায়না এবং লোকাল ফ্যাক্টরি থেকে সোর্সিংয়ে সহায়তা করে?",
      },
      a: {
        en: "We connect you directly to verified manufacturers in Guangzhou, Yiwu, and Shenzhen, as well as top industrial mills in Bangladesh. We handle sample inspection, price negotiation, customs clearance, and door-to-door delivery so you avoid expensive middleman fees and logistical headaches.",
        bn: "আমরা আপনাকে গুয়াংজু, ইইউ, শেনজেন এবং বাংলাদেশের শীর্ষ শিল্প কারখানার সাথে সরাসরি যুক্ত করি। পণ্যের স্যাম্পল পরীক্ষা, ফ্যাক্টরি রেটে দরদাম, কাস্টমস ক্লিয়ারেন্স এবং ডোর-টু-ডোর ডেলিভারির সম্পূর্ণ দায়িত্ব আমরা পালন করি, যাতে কোনো ঝুঁকি ছাড়াই সেরা মূল্যে পণ্য পান।",
      },
    },
    {
      q: {
        en: "Does BRIIZZ develop custom websites and mobile apps for partners?",
        bn: "আমার ব্যবসার জন্য ওয়েবসাইট বা মোবাইল অ্যাপ কি BRIIZZ টিম বানিয়ে দেবে?",
      },
      a: {
        en: "Yes. Our enterprise engineering team builds high-speed Next.js e-commerce platforms, native Android & iOS mobile applications, multi-branch POS software, and ERP systems tailored to retail, real estate, manufacturing, and wholesale businesses.",
        bn: "হ্যাঁ। আমাদের ইঞ্জিনিয়ারিং টিম আপনার ব্যবসার জন্য আধুনিক Next.js ই-কমার্স প্ল্যাটফর্ম, ফ্লুইড নেটিভ মোবাইল অ্যাপ (অ্যান্ড্রয়েড ও আইওএস), মাল্টি-ব্রাঞ্চ পিওএস এবং ক্লাউড ইআরপি সিস্টেম সম্পূর্ণ প্রস্তুত করে দেয়।",
      },
    },
    {
      q: {
        en: "How do client leads reach my business without bidding wars?",
        bn: "বিডিং ছাড়া কীভাবে ক্লায়েন্ট রিকোয়েস্ট আসে?",
      },
      a: {
        en: "When customers or enterprise buyers place specific service or product inquiries on BRIIZZ across Bangladesh's 64 districts, our routing engine analyzes geographic proximity, category verification, and partner capability to deliver the client directly to your dashboard.",
        bn: "সারাদেশের ৬৪ জেলা থেকে যখন গ্রাহক বা কর্পোরেট ক্লায়েন্টরা কোনো কাজের চাহিদা প্রকাশ করেন, আমাদের স্মার্ট সিস্টেম পার্টনারের ক্যাপাসিটি ও লোকেশন অনুযায়ী সরাসরি সেই রিকোয়েস্টটি আপনার ড্যাশবোর্ড ও ফোনে পাঠিয়ে দেয়। কোনো বিডিং প্রতিযোগিতার প্রয়োজন হয় না।",
      },
    },
    {
      q: {
        en: "Who is eligible to join as a partner?",
        bn: "কারা BRIIZZ পার্টনার হিসেবে যুক্ত হতে পারেন?",
      },
      a: {
        en: "Any legitimate business in Bangladesh or abroad — including physical product importers, manufacturers, e-commerce retailers, IT & software firms, construction providers, legal/accounting professionals, and verified service contractors.",
        bn: "যেকোনো বৈধ ব্যবসা প্রতিষ্ঠান—আমদানিকারক, দেশীয় প্রস্তুতকারক, ই-কমার্স উদ্যোক্তা, আইটি ও সফটওয়্যার ফার্ম, রিয়েল এস্টেট ও কনস্ট্রাকশন প্রতিষ্ঠান, কিংবা প্রফেশনাল সার্ভিস প্রোভাইডার যে কেউ পার্টনার হতে পারেন।",
      },
    },
  ];

  const currentPillar = PILLARS.find((p) => p.id === activeTab) || PILLARS[0];
  const CurrentIcon = currentPillar.icon;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090e] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Split 2-Column Desktop with Interactive Enterprise Engine */}
      {/* ========================================================================= */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 relative overflow-hidden border-b border-gray-200/80 dark:border-white/10 bg-gradient-to-b from-white via-slate-50 to-slate-100/70 dark:from-[#0a0e17] dark:via-[#07090e] dark:to-[#07090e]">
        {/* Subtle geometric dot background for tech feel */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ambient Gradient Glows */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-800 dark:text-brand-300 text-xs sm:text-sm font-bold mb-5 uppercase tracking-wider border border-brand-200/70 dark:border-brand-500/30 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
                </span>
                <Rocket className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                <span>{t("Complete Business Lifecycle Ecosystem", "জিরো থেকে ভবিষ্যৎ: পূর্ণাঙ্গ বিজনেস ইকোসিস্টেম")}</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.12] mb-5">
                {t("How BRIIZZ Powers Your Business", "কীভাবে BRIIZZ আপনার ব্যবসাকে নিয়ে যায়")}{" "}
                <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-cyan-500 dark:from-brand-400 dark:via-indigo-300 dark:to-cyan-400">
                  {t("From Zero to Scale", "জিরো থেকে শীর্ষ সফলতায়")}
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl font-normal">
                {t(
                  "We don't just list your company on a static directory. From sourcing physical inventory at China factory gates & local mills, to crafting world-class web and mobile apps, and driving high-intent customer traffic — we engineer your growth end-to-end.",
                  "আমরা শুধু কোনো স্ট্যাটিক ডিরেক্টরি নই। চায়না ও লোকাল ফ্যাক্টরি থেকে পণ্য সোর্সিং, আধুনিক ওয়েবসাইট ও মোবাইল অ্যাপ তৈরি এবং আমাদের দেশব্যাপী বিশাল নেটওয়ার্ক থেকে নিশ্চিত ক্লায়েন্ট অর্ডার—ব্যবসার শুরু থেকে ভবিষ্যৎ পর্যন্ত যা দরকার, সবই আমরা দিচ্ছি।"
                )}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
                <Link
                  href="/providers/join"
                  className="py-4 px-8 rounded-2xl font-bold text-base bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white flex items-center justify-center gap-2.5 shadow-xl shadow-brand-600/25 active:scale-[0.98] transition-all cursor-pointer group"
                >
                  <span>{t("Apply as a Partner", "পার্টনার হিসেবে আবেদন করুন")}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/free-help"
                  className="py-4 px-7 rounded-2xl font-bold text-base bg-white dark:bg-white/5 border border-gray-300/80 dark:border-white/15 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98] cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  <span>{t("Talk to an Advisor", "পরামর্শকের সাথে কথা বলুন")}</span>
                </Link>
              </div>

              {/* Trust Metric Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-gray-200/80 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 dark:bg-brand-950/60 border border-brand-200/60 dark:border-brand-800/40 flex items-center justify-center shrink-0">
                    <Globe2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-gray-900 dark:text-white">64 Districts</div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400">{t("Nationwide", "দেশব্যাপী")}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-gray-900 dark:text-white">0% Bidding</div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400">{t("Direct Routing", "সরাসরি কাজ")}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/40 flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-gray-900 dark:text-white">Full Stack</div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400">{t("Apps & Web", "অ্যাপ ও ওয়েব")}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200/60 dark:border-cyan-800/40 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-gray-900 dark:text-white">100% Vetted</div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400">{t("Verified Badge", "ভেরিফায়েড")}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Enterprise Engine Console (Desktop WOW Factor) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Glow behind terminal */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-600 via-indigo-600 to-cyan-600 rounded-3xl blur-xl opacity-20 dark:opacity-40 animate-pulse"></div>

                {/* Main Console Box */}
                <div className="relative bg-slate-900/95 dark:bg-[#0c1017]/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-7 border border-slate-700/60 dark:border-white/10 shadow-2xl text-white">
                  {/* Console Header */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <div className="text-[11px] font-mono tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      BRIIZZ PARTNER ENGINE v2.4
                    </div>
                  </div>

                  {/* 3 Live Architecture Nodes */}
                  <div className="space-y-3.5">
                    {/* Node 1: Sourcing Gateway */}
                    <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all group">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                            <Ship className="w-4 h-4" />
                          </div>
                          <span className="font-bold text-sm text-slate-100">
                            {t("Phase 01: Sourcing Gateway", "ধাপ ০১: সোর্সিং ও সাপ্লাই")}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          {t("Factory Gates", "ফ্যাক্টরি রেট")}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 pl-10 leading-relaxed">
                        {t(
                          "China OEM (Guangzhou / Yiwu) + Local Bangladesh Mills. Customs cleared.",
                          "চায়না ও দেশীয় মিল থেকে সরাসরি সোর্সিং। শতভাগ কাস্টমস ক্লিয়ারেন্স।"
                        )}
                      </p>
                    </div>

                    {/* Connecting Pipe */}
                    <div className="flex justify-center -my-1.5">
                      <div className="w-0.5 h-4 bg-gradient-to-b from-blue-500 to-indigo-500 opacity-60"></div>
                    </div>

                    {/* Node 2: Digital Systems */}
                    <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-indigo-500/50 hover:bg-white/[0.07] transition-all group">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                            <Cpu className="w-4 h-4" />
                          </div>
                          <span className="font-bold text-sm text-slate-100">
                            {t("Phase 02: Digital Infrastructure", "ধাপ ০২: ডিজিটাল ইনফ্রাস্ট্রাকচার")}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {t("Turnkey Setup", "রেডি সফটওয়্যার")}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 pl-10 leading-relaxed">
                        {t(
                          "High-speed Next.js Storefront + iOS/Android apps + Multi-branch POS & ERP.",
                          "আল্ট্রা-ফাস্ট Next.js ওয়েব, অ্যান্ড্রয়েড/আইওএস অ্যাপ ও পিওএস।"
                        )}
                      </p>
                    </div>

                    {/* Connecting Pipe */}
                    <div className="flex justify-center -my-1.5">
                      <div className="w-0.5 h-4 bg-gradient-to-b from-indigo-500 to-emerald-500 opacity-60"></div>
                    </div>

                    {/* Node 3: Nationwide Traffic */}
                    <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.07] transition-all group">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                            <TrendingUp className="w-4 h-4" />
                          </div>
                          <span className="font-bold text-sm text-slate-100">
                            {t("Phase 03: Demand & Lead Engine", "ধাপ ০৩: কাস্টমার ট্রাফিক ও লিড")}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {t("Direct Matches", "সরাসরি অর্ডার")}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 pl-10 leading-relaxed">
                        {t(
                          "Routing verified buyer requirements directly to your business across 64 districts.",
                          "৬৪ জেলার ক্রেতাদের চাহিদামতো সরাসরি আপনার ড্যাশবোর্ডে অর্ডার প্রেরণ।"
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Terminal Bottom Bar */}
                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>{t("Verified Network Status", "ভেরিফায়েড নেটওয়ার্ক স্ট্যাটাস")}</span>
                    </div>
                    <span className="font-bold text-emerald-400">{t("100% Operational", "সক্রিয়")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE THREE PILLARS: Interactive Bento Grid Showcase on Desktop */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#090d16] relative overflow-hidden border-b border-gray-200/80 dark:border-white/10 transition-colors">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
              {t("Ecosystem Architecture", "পূর্ণাঙ্গ ব্যবসায়িক কাঠামো")}
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-3">
              {t("Three Pillars of Partner Growth", "পার্টনারদের ব্যবসায়িক প্রবৃদ্ধির ৩টি মূল ভিত্তি")}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t(
                "Everything you need to source inventory, build digital infrastructure, and scale client orders under one unified network.",
                "আপনার পণ্যের সোর্সিং, টেকনোলজি ইনফ্রাস্ট্রাকচার ও গ্রাহক বৃদ্ধি—সবকিছুই পাবেন একই নেটওয়ার্কে।"
              )}
            </p>

            {/* Desktop & Mobile Interactive Phase Selector Tabs */}
            <div className="inline-flex items-center gap-2 p-1.5 bg-gray-100 dark:bg-white/[0.06] rounded-2xl sm:rounded-full mt-6 border border-gray-200/80 dark:border-white/10 shadow-sm max-w-full overflow-x-auto">
              {PILLARS.map((p) => {
                const TabIcon = p.icon;
                const isActive = activeTab === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveTab(p.id)}
                    className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? p.activeTabBg
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5"
                    }`}
                  >
                    <TabIcon className="w-4 h-4 shrink-0" />
                    <span>{language === "bn" ? p.shortTitle.bn : p.shortTitle.en}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Pillar Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Bento: In-depth Features Showcase (Spans 8 cols on desktop) */}
            <div className="lg:col-span-8 bg-gray-50/90 dark:bg-[#111624] border border-gray-200/90 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col justify-between">
              <div>
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-200/80 dark:border-white/10">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${currentPillar.accentBg} shadow-sm`}
                    >
                      <CurrentIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 border border-brand-200/50 dark:border-brand-500/20">
                        {language === "bn" ? currentPillar.badge.bn : currentPillar.badge.en}
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white mt-1.5">
                        {language === "bn" ? currentPillar.title.bn : currentPillar.title.en}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {language === "bn" ? currentPillar.subtitle.bn : currentPillar.subtitle.en}
                </p>

                {/* 3 Detailed Sub-Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  {currentPillar.features.map((feat, fIdx) => {
                    const FeatIcon = feat.icon;
                    return (
                      <div
                        key={fIdx}
                        className="bg-white dark:bg-[#171d2d] border border-gray-200/90 dark:border-white/10 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                              <FeatIcon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                            </div>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200/60 dark:border-white/10">
                              {language === "bn" ? feat.tag.bn : feat.tag.en}
                            </span>
                          </div>
                          <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                            {language === "bn" ? feat.title.bn : feat.title.en}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {language === "bn" ? feat.desc.bn : feat.desc.en}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Bento: Deliverables & Advantage Summary (Spans 4 cols on desktop) */}
            <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-white border border-slate-700/60 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
              {/* Background accent ambient light */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t("Verified Deliverables", "নিশ্চিত সুবিধা")}</span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold mb-4">
                  {t("What You Receive in this Phase:", "এই ধাপে আপনি যা যা পাচ্ছেন:")}
                </h4>

                <ul className="space-y-3.5 mb-8">
                  {currentPillar.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {language === "bn" ? item.bn : item.en}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 mb-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {t("Ideal For", "যাদের জন্য প্রযোজ্য")}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {language === "bn" ? currentPillar.idealFor.bn : currentPillar.idealFor.en}
                  </div>
                </div>
              </div>

              {/* Bottom Quick Trigger */}
              <div className="relative z-10 pt-4 border-t border-white/10">
                <Link
                  href="/providers/join"
                  className="w-full py-3 px-5 rounded-xl font-bold text-xs sm:text-sm bg-white text-slate-900 hover:bg-slate-100 flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>{t("Apply for this Phase", "এই সার্ভিসের জন্য যুক্ত হোন")}</span>
                  <ArrowRight className="w-4 h-4 text-slate-900" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. COMPARISON MATRIX: Traditional Way vs. The BRIIZZ Ecosystem */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#07090e] relative overflow-hidden border-b border-gray-200/80 dark:border-white/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              {t("The Paradigm Shift", "কেন BRIIZZ সম্পূর্ণ আলাদা")}
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight mt-1 mb-3">
              {t("Traditional Portals vs. BRIIZZ Network", "সাধারণ ডিরেক্টরি বনাম BRIIZZ নেটওয়ার্ক")}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {t(
                "Stop wasting time in cutthroat bidding or handling complex supply chains alone.",
                "অপ্রয়োজনীয় বিডিং যুদ্ধ বা একা সাপ্লাই চেইনের ঝুঁকি না নিয়ে যুক্ত হোন আধুনিক ইকোসিস্টেমে।"
              )}
            </p>
          </div>

          {/* ── MOBILE: Compact 3-column Comparison Table ── */}
          <div className="block md:hidden overflow-hidden rounded-2xl border border-gray-200/80 dark:border-white/10 shadow-lg">
            {/* Header Row */}
            <div className="grid grid-cols-[2fr_3fr_3fr]">
              <div className="px-3 py-3.5 bg-gray-100 dark:bg-[#111624] border-r border-gray-200/80 dark:border-white/10 flex items-center">
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {t("Feature", "বিষয়")}
                </span>
              </div>
              <div className="px-3 py-3.5 bg-rose-50 dark:bg-rose-950/30 border-r border-gray-200/80 dark:border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-rose-500 text-white flex items-center justify-center shrink-0">
                    <X className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="text-[10px] font-black text-gray-900 dark:text-white leading-tight">
                    {t("Traditional", "পুরনো পদ্ধতি")}
                  </div>
                </div>
              </div>
              <div className="px-3 py-3.5 bg-brand-600/10 dark:bg-brand-900/30">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-brand-600 text-white flex items-center justify-center shrink-0 shadow">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="text-[10px] font-black text-brand-700 dark:text-brand-300 leading-tight">BRIIZZ</div>
                </div>
              </div>
            </div>

            {/* Data Rows */}
            {COMPARISON.map((c, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-[2fr_3fr_3fr] border-t border-gray-200/70 dark:border-white/[0.06] ${
                  idx % 2 === 0 ? "bg-white dark:bg-[#0d1120]" : "bg-gray-50/80 dark:bg-[#0f1423]"
                }`}
              >
                <div className="px-3 py-4 border-r border-gray-200/70 dark:border-white/[0.06] flex items-start">
                  <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300 leading-snug">
                    {language === "bn" ? c.feature.bn : c.feature.en}
                  </span>
                </div>
                <div className="px-3 py-4 border-r border-gray-200/70 dark:border-white/[0.06] flex items-start gap-1.5 bg-rose-50/30 dark:bg-rose-950/10">
                  <X className="w-2.5 h-2.5 text-rose-500 shrink-0 mt-0.5 stroke-[3]" />
                  <span className="text-[10px] text-rose-700 dark:text-rose-400 leading-snug">
                    {language === "bn" ? c.traditional.bn : c.traditional.en}
                  </span>
                </div>
                <div className="px-3 py-4 flex items-start gap-1.5 bg-emerald-50/20 dark:bg-emerald-950/10">
                  <Check className="w-2.5 h-2.5 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                  <span className="text-[10px] text-gray-800 dark:text-slate-200 leading-snug font-semibold">
                    {language === "bn" ? c.briizz.bn : c.briizz.en}
                  </span>
                </div>
              </div>
            ))}

            {/* Verdict Footer */}
            <div className="grid grid-cols-[2fr_3fr_3fr] border-t-2 border-brand-500/40 bg-gradient-to-r from-slate-800 to-indigo-900">
              <div className="px-3 py-3 border-r border-white/15 flex items-center">
                <span className="text-[10px] font-black text-white/60 uppercase tracking-wider">
                  {t("Result", "রায়")}
                </span>
              </div>
              <div className="px-3 py-3 border-r border-white/15 flex items-center gap-1">
                <X className="w-3 h-3 text-rose-400 stroke-[3] shrink-0" />
                <span className="text-[10px] font-bold text-rose-300">{t("Outdated", "পুরনো")}</span>
              </div>
              <div className="px-3 py-3 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-yellow-300 shrink-0" />
                <span className="text-[10px] font-black text-white">{t("Best Choice", "সেরা সমাধান")}</span>
              </div>
            </div>
          </div>

          {/* ── DESKTOP: Side-by-Side Cards ── */}
          <div className="hidden md:grid grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Traditional */}
            <div className="bg-white dark:bg-[#10141f] border border-rose-200/80 dark:border-rose-900/30 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-rose-100 dark:border-rose-900/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 flex items-center justify-center">
                      <X className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base sm:text-lg text-gray-900 dark:text-white">
                        {t("Traditional Directories", "সাধারণ মার্কেটপ্লেস ও ডিরেক্টরি")}
                      </h3>
                      <span className="text-xs text-rose-500 font-semibold">{t("Outdated Model", "পুরনো পদ্ধতি")}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {COMPARISON.map((c, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/20">
                      <div className="w-5 h-5 rounded-full bg-rose-200/60 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-800 dark:text-gray-200 mb-0.5">
                          {language === "bn" ? c.feature.bn : c.feature.en}
                        </div>
                        <div className="text-xs text-rose-700 dark:text-rose-400">
                          {language === "bn" ? c.traditional.bn : c.traditional.en}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BRIIZZ Way */}
            <div className="bg-gradient-to-b from-brand-50/60 via-white to-indigo-50/40 dark:from-[#111728] dark:via-[#0e1322] dark:to-[#111728] border-2 border-brand-500/40 dark:border-brand-500/50 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative">
              <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-brand-600 to-indigo-600 text-white text-[11px] font-black tracking-wider uppercase shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>{t("The Modern Solution", "আধুনিক সমাধান")}</span>
              </div>
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-brand-200/60 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md shadow-brand-500/30">
                      <Check className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base sm:text-lg text-gray-900 dark:text-white">
                        {t("The BRIIZZ Partner Ecosystem", "BRIIZZ পার্টনার ইকোসিস্টেম")}
                      </h3>
                      <span className="text-xs text-brand-600 dark:text-brand-400 font-semibold">{t("Full Lifecycle Growth", "পূর্ণাঙ্গ ব্যবসায়িক প্রবৃদ্ধি")}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {COMPARISON.map((c, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-white/[0.04] border border-brand-200/60 dark:border-brand-500/20 shadow-xs">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900 dark:text-white mb-0.5">
                          {language === "bn" ? c.feature.bn : c.feature.en}
                        </div>
                        <div className="text-xs text-gray-700 dark:text-slate-300 font-medium">
                          {language === "bn" ? c.briizz.bn : c.briizz.en}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FOUR-STEP JOURNEY: Connected Pipeline on Desktop */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#090d16] relative overflow-hidden border-b border-gray-200/80 dark:border-white/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              {t("Clear Onboarding", "সহজ ও স্বচ্ছ অনবোর্ডিং")}
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight mt-1 mb-3">
              {t("How to Join as a Verified Partner", "পার্টনার হিসেবে যুক্ত হওয়ার ৪টি ধাপ")}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {t(
                "A streamlined vetting process that guarantees high trust, verified credentials, and direct client connections.",
                "একটি নির্ভরযোগ্য ভেরিফিকেশন ব্যবস্থা যা ক্লায়েন্ট ও পার্টনারদের পারস্পরিক আস্থা নিশ্চিত করে।"
              )}
            </p>
          </div>

          {/* Connected Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Desktop connecting pipeline background bar */}
            <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-brand-600 via-indigo-600 to-emerald-500 z-0 opacity-20"></div>

            {STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="relative z-10 bg-slate-50 dark:bg-[#121622] border border-gray-200/90 dark:border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    {/* Step Icon & Number Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-gray-200/60 dark:border-white/10 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                        <StepIcon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                      </div>
                      <span className="font-mono text-2xl font-black text-gray-300 dark:text-white/15">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {language === "bn" ? step.title.bn : step.title.en}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {language === "bn" ? step.desc.bn : step.desc.en}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200/60 dark:border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-brand-600 dark:text-brand-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{language === "bn" ? step.time.bn : step.time.en}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE FAQ SECTION: Accordion */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#07090e] relative overflow-hidden border-b border-gray-200/80 dark:border-white/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              {t("Frequently Asked Questions", "সাধারণ প্রশ্নোত্তর")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight mt-1 mb-3">
              {t("Everything You Need to Know", "আপনার প্রয়োজনীয় সকল তথ্য")}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {t(
                "Got questions about becoming a partner? Here are detailed answers.",
                "পার্টনার হওয়া সংক্রান্ত সাধারণ প্রশ্নাবলীর বিস্তারিত উত্তর।"
              )}
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#111624] border border-gray-200/90 dark:border-white/10 rounded-2xl overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                      {language === "bn" ? faq.q.bn : faq.q.en}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-400" : "text-gray-500"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-white/5">
                      {language === "bn" ? faq.a.bn : faq.a.en}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL TO ACTION BANNER: Radiant Gradient & Direct Impact */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#090d16] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="relative bg-gradient-to-r from-brand-700 via-indigo-700 to-cyan-700 text-white rounded-3xl p-8 sm:p-14 lg:p-16 shadow-2xl overflow-hidden">
            {/* Ambient glows inside banner */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                <Rocket className="w-3.5 h-3.5" />
                <span>{t("Start Today", "আজই শুরু করুন")}</span>
              </span>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">
                {t("Ready to scale your business with BRIIZZ?", "BRIIZZ-এর সাথে আপনার ব্যবসা স্কেল করতে প্রস্তুত?")}
              </h3>

              <p className="text-sm sm:text-base lg:text-lg text-slate-100 max-w-2xl leading-relaxed mb-8">
                {t(
                  "Get direct clients, access global factory inventory, deploy world-class digital apps, and grow with Bangladesh's most powerful verified network.",
                  "বিডিং ছাড়াই সরাসরি কাজ পান, পণ্য সোর্সিং সুবিধা নিন এবং আধুনিক অ্যাপ ও ওয়েবসাইটের মাধ্যমে ব্যবসার পরিধি বাড়িয়ে নিন।"
                )}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/providers/join"
                  className="py-4 px-8 rounded-2xl font-bold text-base bg-white text-slate-900 hover:bg-slate-100 flex items-center justify-center gap-2 shadow-xl active:scale-[0.98] transition-all cursor-pointer group"
                >
                  <span>{t("Join Now as Partner", "এখনই পার্টনার হিসেবে যোগ দিন")}</span>
                  <ArrowRight className="w-5 h-5 text-slate-900 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/free-help"
                  className="py-4 px-7 rounded-2xl font-bold text-base bg-white/10 hover:bg-white/20 border border-white/25 text-white flex items-center justify-center gap-2 backdrop-blur-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{t("Talk to a Consultant", "পরামর্শকের সাথে কথা বলুন")}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
