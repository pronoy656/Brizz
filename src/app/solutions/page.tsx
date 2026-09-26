"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Search, 
  Filter, 
  Package, 
  Code, 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  RotateCcw, 
  MapPin, 
  Check, 
  Layers,
  ChevronDown,
  ChevronRight,
  Cpu,
  ShoppingBag,
  Truck,
  Globe,
  Smartphone,
  Server,
  Home,
  Hammer,
  Scale,
  Megaphone,
  Users,
  Briefcase,
  Landmark,
  Bot
} from "lucide-react";

interface CatalogItem {
  id: string;
  category: "wholesale" | "tech" | "real-estate" | "business";
  categoryLabel: { en: string; bn: string };
  subCategory: string;
  subCategoryLabel: { en: string; bn: string };
  title: { en: string; bn: string };
  desc: { en: string; bn: string };
  image: string;
  specs: { en: string; bn: string }[];
  popular?: boolean;
}

const ALL_SOLUTIONS: CatalogItem[] = [
  // ==========================================
  // 1. WHOLESALE & SUPPLY CHAIN
  // ==========================================
  {
    id: "wh-gpu-rtx",
    category: "wholesale",
    categoryLabel: { en: "Wholesale & Supply", bn: "পাইকারি ও সাপ্লাই" },
    subCategory: "gpu-electronics",
    subCategoryLabel: { en: "GPUs & Tech Hardware", bn: "জিপিইউ ও কম্পিউটার হার্ডওয়্যার" },
    title: { en: "Nvidia RTX 4090 / 4080 GPU Wholesale", bn: "এনভিডিয়া আরটিএক্স ৪০৯০/৪০৮০ জিপিইউ পাইকারি" },
    desc: { 
      en: "Direct brand distributor supply of high-performance Nvidia GeForce & workstation graphics cards with official warranty.", 
      bn: "অফিসিয়াল ডিস্ট্রিবিউটর ওয়ারেন্টি সহ এআই, রেন্ডারিং ও গেমিং গ্রাফিক্স কার্ডের সরাসরি পাইকারি সরবরাহ।" 
    },
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "MOQ: 5 Units", bn: "সর্বনিম্ন: ৫ পিস" },
      { en: "Official Warranty", bn: "অফিসিয়াল ওয়ারেন্টি" },
      { en: "64 Districts Delivery", bn: "৬৪ জেলায় ডেলিভারি" }
    ],
    popular: true
  },
  {
    id: "wh-gpu-server",
    category: "wholesale",
    categoryLabel: { en: "Wholesale & Supply", bn: "পাইকারি ও সাপ্লাই" },
    subCategory: "gpu-electronics",
    subCategoryLabel: { en: "GPUs & Tech Hardware", bn: "জিপিইউ ও কম্পিউটার হার্ডওয়্যার" },
    title: { en: "Server Processors, Motherboards & ECC RAM", bn: "সার্ভার প্রসেসর, মাদারবোর্ড ও র‍্যাম বাল্ক" },
    desc: { 
      en: "Bulk supply of Intel Xeon, AMD EPYC, enterprise SSDs, and high-frequency ECC server RAM for data centers.", 
      bn: "ডাটা সেন্টার ও এন্টারপ্রাইজ সার্ভারের জন্য প্রসেসর, চ্যাসিস ও হাই-স্পিড সার্ভার র‍্যাম মডিউল।" 
    },
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "Enterprise Grade", bn: "এন্টারপ্রাইজ গ্রেড" },
      { en: "B2B Volume Rates", bn: "পাইকারি রেট" }
    ]
  },
  {
    id: "wh-clothing-lawn",
    category: "wholesale",
    categoryLabel: { en: "Wholesale & Supply", bn: "পাইকারি ও সাপ্লাই" },
    subCategory: "clothing",
    subCategoryLabel: { en: "Pakistani Dresses & Apparel", bn: "পাকিস্তানি ড্রেস ও বুটিক পোশাক" },
    title: { en: "Original Pakistani Boutique Lawn 3-Piece", bn: "অরিজিনাল পাকিস্তানি বুটিক লন থ্রি-পিস" },
    desc: { 
      en: "Authentic Pakistani luxury lawn, heavy embroidered chiffons, and trendy boutique catalogs direct for fashion retailers.", 
      bn: "অরিজিনাল পাকিস্তানি লন, প্রিমিয়াম এমব্রয়ডারি থ্রি-পিস ও বুটিক ড্রেসের বিশাল পাইকারি কালেকশন।" 
    },
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "Direct Import", bn: "সরাসরি আমদানি" },
      { en: "Weekly Catalog Updates", bn: "সাপ্তাহিক নতুন ক্যাটালগ" },
      { en: "B2B Bulk Rates", bn: "আকর্ষণীয় পাইকারি মূল্য" }
    ],
    popular: true
  },
  {
    id: "wh-clothing-panjabi",
    category: "wholesale",
    categoryLabel: { en: "Wholesale & Supply", bn: "পাইকারি ও সাপ্লাই" },
    subCategory: "clothing",
    subCategoryLabel: { en: "Pakistani Dresses & Apparel", bn: "পাকিস্তানি ড্রেস ও বুটিক পোশাক" },
    title: { en: "Designer Cotton Panjabi & Men's Wear", bn: "ডিজাইনার সুতি পাঞ্জাবি ও মেনস কালেকশন" },
    desc: { 
      en: "Exclusive cotton, semi-silk, and jacquard embroidered men's panjabis ready for boutique retail racks.", 
      bn: "উচ্চমানের সুতি কাপড়ের এক্সক্লুসিভ পাঞ্জাবি, ফরমাল ও ক্যাজুয়াল শার্টের পাইকারি লট।" 
    },
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "Pure Combed Cotton", bn: "খাঁটি সুতি কাপড়" },
      { en: "Retail Packaged", bn: "রিটেইল প্যাকেজিং" }
    ]
  },
  {
    id: "wh-china-sourcing",
    category: "wholesale",
    categoryLabel: { en: "Wholesale & Supply", bn: "পাইকারি ও সাপ্লাই" },
    subCategory: "china-sourcing",
    subCategoryLabel: { en: "China Factory Sourcing", bn: "চায়না সরাসরি আমদানি ও সোর্সিং" },
    title: { en: "China Factory Procurement & Shipping (Guangzhou/Yiwu)", bn: "চায়না ফ্যাক্টরি সোর্সিং ও ক্লিয়ারেন্স (ইইউ/গুয়াংজু)" },
    desc: { 
      en: "End-to-end product sourcing from Guangzhou/Yiwu manufacturers, sample testing, customs clearance, LC and air/sea freight.", 
      bn: "গুয়াংজু ও ইইউ ফ্যাক্টরি থেকে সরাসরি প্রোডাক্ট সোর্সিং, কোয়ালিটি টেস্টিং, কাস্টমস ও কার্গো শিপিং।" 
    },
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "Air & Sea Cargo", bn: "এয়ার ও সি কার্গো" },
      { en: "Quality Inspection", bn: "কোয়ালিটি ইন্সপেকশন" },
      { en: "Door-to-Door", bn: "ডোর-টু-ডোর ডেলিভারি" }
    ],
    popular: true
  },
  {
    id: "wh-raw-textiles",
    category: "wholesale",
    categoryLabel: { en: "Wholesale & Supply", bn: "পাইকারি ও সাপ্লাই" },
    subCategory: "raw-materials",
    subCategoryLabel: { en: "Raw Materials & Fabrics", bn: "কাঁচামাল ও টেক্সটাইল সুতা" },
    title: { en: "Raw Textiles, Combed Yarn & Dyes", bn: "টেক্সটাইল ফেব্রিক্স, স্পান সুতা ও কাঁচামাল" },
    desc: { 
      en: "Bulk industrial yarn, woven cotton rolls, denim, synthetic polyester, and textile dyeing chemicals.", 
      bn: "গার্মেন্টস ও টেক্সটাইল ফ্যাক্টরির জন্য স্পান সুতা, সুতি কাপড় ও ডাইং কেমিক্যালসের বাল্ক সাপ্লাই।" 
    },
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "Lab Certified Grade", bn: "ল্যাব টেস্ট সার্টিফাইড" },
      { en: "Bulk Tons Supply", bn: "টন হিসেবে সরবরাহ" }
    ]
  },
  {
    id: "wh-packaging-boxes",
    category: "wholesale",
    categoryLabel: { en: "Wholesale & Supply", bn: "পাইকারি ও সাপ্লাই" },
    subCategory: "packaging",
    subCategoryLabel: { en: "Packaging & Custom Boxes", bn: "কাস্টম প্যাকেজিং ও কার্টন" },
    title: { en: "Custom Corrugated Cartons & Retail Packaging", bn: "কাস্টম কার্টুন, বক্স ও ব্র্যান্ডেড প্যাকেজিং" },
    desc: { 
      en: "3-ply/5-ply shipping master cartons, luxury rigid magnetic boxes, printed mailers, and eco-friendly tape.", 
      bn: "৩-প্লাই ও ৫-প্লাই শিপিং কার্টন, প্রিন্টেড রিটেইল বক্স ও পরিবেশবান্ধব প্যাকেজিং সমাধান।" 
    },
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "Custom Die-Cut & Print", bn: "কাস্টম প্রিন্টিং" },
      { en: "Eco-Friendly Kraft", bn: "পরিবেশবান্ধব ক্রাফট" }
    ]
  },
  {
    id: "wh-grocery-supermarket",
    category: "wholesale",
    categoryLabel: { en: "Wholesale & Supply", bn: "পাইকারি ও সাপ্লাই" },
    subCategory: "grocery-machinery",
    subCategoryLabel: { en: "Machinery & Supermarket Setup", bn: "সুপারশপ সেটআপ ও মেশিনারি" },
    title: { en: "Supermarket Display Racks, POS & FMCG Stock", bn: "সুপারশপ ডিসপ্লে র‍্যাক, পিওএস ও ইনভেন্টরি" },
    desc: { 
      en: "Heavy-duty powder-coated display shelving, barcode scanners, POS billing systems, and FMCG wholesale lines.", 
      bn: "সুপারশপের ডিসপ্লে র‍্যাক, বারকোড স্ক্যানার, পিওএস সিস্টেম ও নিত্যপণ্যের কমপ্লিট সেটআপ।" 
    },
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "Turnkey Setup", bn: "পূর্ণাঙ্গ শপ সেটআপ" },
      { en: "Distributor Rates", bn: "ডিস্ট্রিবিউটর রেট" }
    ]
  },

  // ==========================================
  // 2. TECH & IT SOLUTIONS
  // ==========================================
  {
    id: "tech-web-portal",
    category: "tech",
    categoryLabel: { en: "Tech & IT Solutions", bn: "টেক ও আইটি সমাধান" },
    subCategory: "web",
    subCategoryLabel: { en: "Web Development", bn: "ওয়েব ডেভেলপমেন্ট" },
    title: { en: "Enterprise Web Applications & Portals", bn: "এন্টারপ্রাইজ ওয়েব পোর্টাল ও অ্যাপ্লিকেশন" },
    desc: { 
      en: "High-performance Next.js/React web platforms, multi-vendor marketplaces, customer portals, and corporate websites.", 
      bn: "নেক্সট জেএস ও আধুনিক টেকনোলজিতে তৈরি দ্রুতগতির ওয়েব অ্যাপ্লিকেশন, ই-কমার্স ও এন্টারপ্রাইজ পোর্টাল।" 
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "Next.js / TypeScript", bn: "নেক্সট জেএস ও টাইপস্ক্রিপ্ট" },
      { en: "Payment Gateway", bn: "পেমেন্ট গেটওয়ে যুক্ত" },
      { en: "SEO Optimized", bn: "এসইও ফ্রেন্ডলি" }
    ],
    popular: true
  },
  {
    id: "tech-mobile-app",
    category: "tech",
    categoryLabel: { en: "Tech & IT Solutions", bn: "টেক ও আইটি সমাধান" },
    subCategory: "app",
    subCategoryLabel: { en: "Mobile App Development", bn: "মোবাইল অ্যাপ ডেভেলপমেন্ট" },
    title: { en: "iOS & Android Mobile App Engineering", bn: "আইওএস ও অ্যান্ড্রয়েড মোবাইল অ্যাপ" },
    desc: { 
      en: "Flutter & React Native mobile applications with real-time offline sync, push notifications, and App Store publishing.", 
      bn: "ফ্লাটার ও রিঅ্যাক্ট নেটিভে তৈরি স্মুথ মোবাইল অ্যাপ যা প্লে স্টোর ও অ্যাপ স্টোরে পাবলিশ করা হয়।" 
    },
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "iOS & Android Cross-Platform", bn: "আইওএস ও অ্যান্ড্রয়েড" },
      { en: "Live Cloud Sync", bn: "ক্লাউড সিঙ্ক" }
    ]
  },
  {
    id: "tech-custom-erp",
    category: "tech",
    categoryLabel: { en: "Tech & IT Solutions", bn: "টেক ও আইটি সমাধান" },
    subCategory: "software",
    subCategoryLabel: { en: "Custom ERP & Software", bn: "কাস্টম ইআরপি ও সফটওয়্যার" },
    title: { en: "Multi-Branch ERP, Inventory & POS Software", bn: "মাল্টি-ব্রাঞ্চ ইআরপি, স্টক ও পিওএস সফটওয়্যার" },
    desc: { 
      en: "Integrated management systems for warehouse inventory, accounts, staff payroll, sales pipeline, and automated invoicing.", 
      bn: "মাল্টি-ব্রাঞ্চ স্টক ম্যানেজমেন্ট, একাউন্টিং, ইনভেন্টরি ট্র্যাকিং এবং স্বয়ংক্রিয় পিওএস সফটওয়্যার।" 
    },
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "Cloud & On-Premise", bn: "ক্লাউড ও লোকাল সার্ভার" },
      { en: "Role-Based Access", bn: "রোল-বেসড এক্সেস" }
    ],
    popular: true
  },
  {
    id: "tech-cloud-ai",
    category: "tech",
    categoryLabel: { en: "Tech & IT Solutions", bn: "টেক ও আইটি সমাধান" },
    subCategory: "cloud-ai",
    subCategoryLabel: { en: "Cloud, DevOps & AI Automation", bn: "ক্লাউড, ডেভঅপ্স ও এআই অটোমেশন" },
    title: { en: "AWS/GCP Cloud Architecture & AI Agents", bn: "এডাব্লিউএস/ক্লাউড ইনফ্রাস্ট্রাকচার ও এআই অটোমেশন" },
    desc: { 
      en: "Scalable Kubernetes microservices, CI/CD pipelines, automated customer support AI bots, and database optimization.", 
      bn: "ক্লাউড সার্ভার অপ্টিমাইজেশন, এআই কাস্টমার সাপোর্ট চ্যাটবট ও অটোমেটেড ডাটা পাইপলাইন।" 
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "99.99% Uptime SLA", bn: "৯৯.৯৯% আপটাইম" },
      { en: "AI Workflow Integration", bn: "এআই ইন্টিগ্রেশন" }
    ]
  },

  // ==========================================
  // 3. REAL ESTATE & ARCHITECTURE
  // ==========================================
  {
    id: "re-commercial-space",
    category: "real-estate",
    categoryLabel: { en: "Real Estate & Building", bn: "রিয়েল এস্টেট ও নির্মাণ" },
    subCategory: "commercial",
    subCategoryLabel: { en: "Commercial Real Estate", bn: "বাণিজ্যিক স্পেস ও শোরুম" },
    title: { en: "Prime Commercial Showrooms & Office Floors", bn: "প্রাইম লোকেশনে বাণিজ্যিক অফিস ও শোরুম স্পেস" },
    desc: { 
      en: "Premium commercial spaces in Gulshan, Banani, Motijheel, and major district business hubs with legal vetting.", 
      bn: "গুলশান, বনানী, মতিঝিল ও বিভাগীয় শহরের সেরা বাণিজ্যিক ভবন ও শোরুম ভাড়ার সুব্যবস্থা।" 
    },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "Direct Landlord Lease", bn: "সরাসরি চুক্তি" },
      { en: "Clean Title & Vetting", bn: "নির্দোষ লিগ্যাল ভেরিফিকেশন" }
    ]
  },
  {
    id: "re-interior-design",
    category: "real-estate",
    categoryLabel: { en: "Real Estate & Building", bn: "রিয়েল এস্টেট ও নির্মাণ" },
    subCategory: "interior",
    subCategoryLabel: { en: "Corporate Interior Design", bn: "কর্পোরেট অফিস ইন্টেরিয়র" },
    title: { en: "Turnkey Corporate Office Interior & Fitouts", bn: "কর্পোরেট অফিস ইন্টেরিয়র ও নান্দনিক ডেকোরেশন" },
    desc: { 
      en: "Turnkey architectural interior execution, modern executive cabins, acoustic ceilings, lighting, and customized ergonomic furniture.", 
      bn: "নান্দনিক অফিস ডেকোরেশন, এরগনোমিক ফার্নিচার, ক্যাবিন ডিজাইন ও পূর্ণাঙ্গ ইন্টেরিয়র সলিউশন।" 
    },
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "3D Realistic Renders", bn: "থ্রিডি (3D) নকশা" },
      { en: "Turnkey Handover", bn: "টার্নকি প্রজেক্ট হ্যান্ডওভার" }
    ],
    popular: true
  },
  {
    id: "re-materials-steel",
    category: "real-estate",
    categoryLabel: { en: "Real Estate & Building", bn: "রিয়েল এস্টেট ও নির্মাণ" },
    subCategory: "materials",
    subCategoryLabel: { en: "Construction Materials", bn: "নির্মাণ সামগ্রী" },
    title: { en: "TMT 500W Steel Rebar, Cement & AAC Blocks", bn: "৫০০W টিএমটি রড, সিমেন্ট ও এএসি ব্লক" },
    desc: { 
      en: "Direct supply of 500W grade TMT steel rebar, composite cement, autowall AAC blocks, and heavy construction supplies.", 
      bn: "৫০০W গ্রেডের টিএমটি রড, শীর্ষ ব্র্যান্ডের সিমেন্ট ও পরিবেশবান্ধব এএসি ব্লকের সরাসরি সরবরাহ।" 
    },
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "Direct Mill Supply", bn: "সরাসরি মিল রেট" },
      { en: "BUET Lab Certified", bn: "বুয়েট টেস্ট সার্টিফাইড" }
    ]
  },
  {
    id: "re-smart-building",
    category: "real-estate",
    categoryLabel: { en: "Real Estate & Building", bn: "রিয়েল এস্টেট ও নির্মাণ" },
    subCategory: "automation",
    subCategoryLabel: { en: "Smart Building Setup", bn: "স্মার্ট বিল্ডিং অটোমেশন" },
    title: { en: "Access Control, CCTV & Smart Power Systems", bn: "এক্সেস কন্ট্রোল, সিসিটিভি ও স্মার্ট পাওয়ার ব্যাকআপ" },
    desc: { 
      en: "Biometric attendance, IP surveillance cameras, automated power backup, and intelligent lighting systems.", 
      bn: "বায়োমেট্রিক এক্সেস, হাই-ডেফিনিশন আইপি ক্যামেরা ও স্বয়ংক্রিয় পাওয়ার ব্যাকআপ সিস্টেম সেটআপ।" 
    },
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "Centralized Monitoring", bn: "সেন্ট্রালাইজড মনিটরিং" },
      { en: "Energy Efficient", bn: "বিদ্যুৎ সাশ্রয়ী" }
    ]
  },

  // ==========================================
  // 4. BUSINESS & LEGAL SETUP
  // ==========================================
  {
    id: "biz-legal-reg",
    category: "business",
    categoryLabel: { en: "Business Services", bn: "বিজনেস সার্ভিসেস" },
    subCategory: "legal",
    subCategoryLabel: { en: "Company Registration & Legal", bn: "কোম্পানি নিবন্ধন ও লিগ্যাল" },
    title: { en: "RJSC Incorporation, Trade License & TIN/BIN", bn: "আরজেএসসি কোম্পানি নিবন্ধন, ট্রেড লাইসেন্স ও ট্যাক্স" },
    desc: { 
      en: "Fast RJSC Pvt Ltd incorporation, municipal trade licenses, e-TIN, VAT BIN registration, and corporate trademark filing.", 
      bn: "আরজেএসসি কোম্পানি ইনকর্পোরেশন, ট্রেড লাইসেন্স, ই-টিন, ভ্যাট চালান ও ট্রেডমার্ক রেজিস্ট্রেশন।" 
    },
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "Fast-Track Approval", bn: "দ্রুত প্রসেসিং" },
      { en: "High Court Advocates", bn: "অভিজ্ঞ লিগ্যাল অ্যাডভাইজর" }
    ],
    popular: true
  },
  {
    id: "biz-banking-lc",
    category: "business",
    categoryLabel: { en: "Business Services", bn: "বিজনেস সার্ভিসেস" },
    subCategory: "banking",
    subCategoryLabel: { en: "Banking, LC & IRC/ERC", bn: "ব্যাংকিং, এলসি ও আমদানি লাইসেন্স" },
    title: { en: "Corporate Bank Account, Import IRC & Export ERC", bn: "কর্পোরেট ব্যাংক অ্যাকাউন্ট ও আমদানি-রপ্তানি লাইসেন্স" },
    desc: { 
      en: "Seamless corporate banking relations, Letter of Credit (LC) opening support, and Import/Export Registration Certificates (IRC/ERC).", 
      bn: "কর্পোরেট ব্যাংক অ্যাকাউন্ট খোলা, আমদানি-রপ্তানি সনদ (IRC/ERC) এবং ব্যাংক এলসি সুবিধা।" 
    },
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "IRC/ERC Processing", bn: "আইআরসি ও ইআরসি সনদ" },
      { en: "LC Advisory", bn: "এলসি ব্যাংকিং গাইডেন্স" }
    ]
  },
  {
    id: "biz-marketing-growth",
    category: "business",
    categoryLabel: { en: "Business Services", bn: "বিজনেস সার্ভিসেস" },
    subCategory: "marketing",
    subCategoryLabel: { en: "Marketing & Growth", bn: "মার্কেটিং ও ব্র্যান্ডিং" },
    title: { en: "Performance Marketing, Meta Ads & Brand SEO", bn: "পারফরম্যান্স মার্কেটিং, মেটা অ্যাডস ও এসইও" },
    desc: { 
      en: "Data-driven Facebook/Google Ads campaigns, search engine optimization (SEO), brand identity design, and high-ROI sales funnels.", 
      bn: "টার্গেটেড সোশ্যাল মিডিয়া পেইড বুস্টিং, গুগল সার্চ অ্যাডস, এসইও এবং সেলস ফানেল।" 
    },
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "High ROI Campaigns", bn: "উচ্চ আরওআই স্ট্র্যাটেজি" },
      { en: "Creative Assets Included", bn: "ক্রিয়েটিভ কনটেন্ট ডিজাইন" }
    ]
  },
  {
    id: "biz-hr-talent",
    category: "business",
    categoryLabel: { en: "Business Services", bn: "বিজনেস সার্ভিসেস" },
    subCategory: "hr",
    subCategoryLabel: { en: "HR & Headhunting", bn: "এইচআর ও রিক্রুটমেন্ট" },
    title: { en: "Executive Talent Headhunting & Payroll Management", bn: "ট্যালেন্ট হায়ার ও স্মার্ট পেরোল ম্যানেজমেন্ট" },
    desc: { 
      en: "Pre-screened tech engineers, sales managers, and executive leadership recruitment alongside compliant payroll systems.", 
      bn: "অভিজ্ঞ এক্সিকিউটিভ ও দক্ষ টিম মেম্বার রিক্রুটমেন্ট এবং স্মার্ট পেরোল ও এইচআর পলিসি সেটআপ।" 
    },
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
    specs: [
      { en: "Pre-Vetted Candidates", bn: "যাচাইকৃত প্রার্থী" },
      { en: "Guaranteed Replacement", bn: "হায়ার গ্যারান্টি" }
    ]
  }
];

interface CategoryStructure {
  id: string;
  label: { en: string; bn: string };
  icon: any;
  subCategories: { id: string; label: { en: string; bn: string } }[];
}

const CATEGORY_TREE: CategoryStructure[] = [
  {
    id: "wholesale",
    label: { en: "Wholesale & Supply Chain", bn: "পাইকারি ও সাপ্লাই চেইন" },
    icon: Package,
    subCategories: [
      { id: "gpu-electronics", label: { en: "GPUs & PC Hardware", bn: "জিপিইউ ও কম্পিউটার হার্ডওয়্যার" } },
      { id: "clothing", label: { en: "Pakistani Boutique Dresses", bn: "পাকিস্তানি ড্রেস ও বুটিক পোশাক" } },
      { id: "china-sourcing", label: { en: "China Factory Sourcing", bn: "চায়না সরাসরি ফ্যাক্টরি সোর্সিং" } },
      { id: "raw-materials", label: { en: "Textile & Raw Materials", bn: "কাঁচামাল ও টেক্সটাইল ফেব্রিক্স" } },
      { id: "packaging", label: { en: "Custom Packaging & Boxes", bn: "কাস্টম প্যাকেজিং ও কার্টন" } },
      { id: "grocery-machinery", label: { en: "Machinery & Supermarket Setup", bn: "সুপারশপ সেটআপ ও মেশিনারি" } },
    ]
  },
  {
    id: "tech",
    label: { en: "Tech & IT Solutions", bn: "টেক ও আইটি সমাধান" },
    icon: Code,
    subCategories: [
      { id: "web", label: { en: "Web Development & Portals", bn: "ওয়েব ডেভেলপমেন্ট ও পোর্টাল" } },
      { id: "app", label: { en: "Mobile App Development", bn: "মোবাইল অ্যাপ ডেভেলপমেন্ট" } },
      { id: "software", label: { en: "Custom ERP & POS Software", bn: "কাস্টম ইআরপি ও পিওএস সফটওয়্যার" } },
      { id: "cloud-ai", label: { en: "DevOps, Cloud & AI Automation", bn: "ক্লাউড, ডেভঅপ্স ও এআই অটোমেশন" } },
    ]
  },
  {
    id: "real-estate",
    label: { en: "Real Estate & Architecture", bn: "রিয়েল এস্টেট ও নির্মাণ" },
    icon: Building2,
    subCategories: [
      { id: "commercial", label: { en: "Commercial Real Estate", bn: "বাণিজ্যিক স্পেস ও শোরুম" } },
      { id: "interior", label: { en: "Corporate Office Interior", bn: "কর্পোরেট অফিস ইন্টেরিয়র" } },
      { id: "materials", label: { en: "Construction Materials (Rod, Cement)", bn: "নির্মাণ সামগ্রী (রড, সিমেন্ট)" } },
      { id: "automation", label: { en: "Smart Building & Security", bn: "স্মার্ট বিল্ডিং অটোমেশন ও সিকিউরিটি" } },
    ]
  },
  {
    id: "business",
    label: { en: "Business Setup & Advisory", bn: "বিজনেস ও লিগ্যাল সেবা" },
    icon: TrendingUp,
    subCategories: [
      { id: "legal", label: { en: "Company Registration & Tax", bn: "কোম্পানি নিবন্ধন, ট্রেড লাইসেন্স ও ট্যাক্স" } },
      { id: "banking", label: { en: "Banking, LC & IRC/ERC", bn: "ব্যাংকিং, এলসি ও আমদানি লাইসেন্স" } },
      { id: "marketing", label: { en: "Digital Marketing & SEO", bn: "ডিজিটাল মার্কেটিং ও এসইও" } },
      { id: "hr", label: { en: "Executive HR & Headhunting", bn: "এইচআর ও রিক্রুটমেন্ট" } },
    ]
  }
];

function SolutionsCatalogContent() {
  const { t, language } = useLanguage();
  const searchParams = useSearchParams();

  const initialCat = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCat);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Track expanded accordion categories in the left sidebar
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>({
    wholesale: true,
    tech: true,
    "real-estate": false,
    business: false,
    ...(initialCat !== "all" ? { [initialCat]: true } : {})
  });

  const toggleAccordion = (catId: string) => {
    setExpandedCats(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    setSelectedSubCategory("all");
    // Ensure the clicked category is expanded
    setExpandedCats(prev => ({
      ...prev,
      [catId]: true
    }));
  };

  const handleSelectSubCategory = (catId: string, subId: string) => {
    setSelectedCategory(catId);
    setSelectedSubCategory(subId);
  };

  const handleReset = () => {
    setSelectedCategory("all");
    setSelectedSubCategory("all");
    setSearchQuery("");
  };

  // Filter items
  const filteredSolutions = useMemo(() => {
    return ALL_SOLUTIONS.filter(item => {
      const matchCat = selectedCategory === "all" || item.category === selectedCategory;
      const matchSub = selectedSubCategory === "all" || item.subCategory === selectedSubCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = !q || 
        item.title.en.toLowerCase().includes(q) || 
        item.title.bn.toLowerCase().includes(q) || 
        item.desc.en.toLowerCase().includes(q) || 
        item.desc.bn.toLowerCase().includes(q) || 
        item.subCategoryLabel.en.toLowerCase().includes(q) || 
        item.subCategoryLabel.bn.toLowerCase().includes(q);

      return matchCat && matchSub && matchQuery;
    });
  }, [selectedCategory, selectedSubCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#070709] transition-colors duration-300 pt-28 pb-24">
      
      {/* Page Header */}
      <div className="bg-white dark:bg-[#0c0c10] border-b border-gray-200 dark:border-white/5 py-10 sm:py-12 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-100 dark:border-brand-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("Verified Solutions Catalog", "ভেরিফাইড সলিউশন ক্যাটালগ")}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                {t("Explore Solutions & Services", "সকল সমাধান ও সেবা খুঁজুন")}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base max-w-2xl leading-relaxed">
                {t(
                  "From bulk GPUs and garments sourcing to enterprise software, turnkey office interiors, and corporate advisory across 64 districts.",
                  "বাল্ক জিপিইউ, গার্মেন্টস ও চায়না সোর্সিং থেকে শুরু করে কাস্টম সফটওয়্যার, অফিস ইন্টেরিয়র এবং কর্পোরেট লাইসেন্সিং সমাধান।"
                )}
              </p>
            </div>

            <Link
              href="/needs/new"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-brand-600/25 transition-all hover:scale-[1.02] shrink-0"
            >
              <span>{t("Post Custom Requirement", "কাস্টম রিকোয়ারমেন্ট দিন")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Container with Sidebar + Product Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR: Expandable Accordion Filter Tree */}
          <div className="lg:col-span-3 bg-white dark:bg-[#121216] border border-gray-200 dark:border-white/10 rounded-3xl p-5 sm:p-6 shadow-sm sticky top-28">
            
            {/* Filter Header & Reset */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-white/10 mb-5">
              <div className="flex items-center gap-2 text-gray-900 dark:text-white font-bold text-base">
                <Filter className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>{t("Filter Solutions", "ফিল্টার মেনু")}</span>
              </div>
              
              {(selectedCategory !== "all" || selectedSubCategory !== "all" || searchQuery) && (
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{t("Reset", "রিসেট")}</span>
                </button>
              )}
            </div>

            {/* Search Filter */}
            <div className="mb-5">
              <label className="block text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-2">
                {t("Search Services / Products", "সার্চ করুন")}
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={t("e.g. GPU, dresses, ERP...", "যেমন: জিপিইউ, ড্রেস, ইআরপি...")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-xs sm:text-sm text-gray-900 dark:text-white outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* All Solutions Quick Tab */}
            <div className="mb-3">
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedSubCategory("all");
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-brand-600 text-white shadow-md shadow-brand-600/20 font-bold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Layers className={`w-4 h-4 shrink-0 ${selectedCategory === "all" ? "text-white" : "text-brand-500"}`} />
                  <span>{t("All Solutions", "সকল সমাধান")}</span>
                </div>
                <span className={`text-[11px] px-2 py-0.5 rounded-full ${selectedCategory === "all" ? "bg-white/20 text-white" : "bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400"}`}>
                  {ALL_SOLUTIONS.length}
                </span>
              </button>
            </div>

            {/* Accordion Categories Tree */}
            <div className="space-y-2">
              {CATEGORY_TREE.map((cat) => {
                const Icon = cat.icon;
                const isCatSelected = selectedCategory === cat.id;
                const isExpanded = !!expandedCats[cat.id];
                const catLabel = language === "bn" ? cat.label.bn : cat.label.en;
                const catItemCount = ALL_SOLUTIONS.filter(s => s.category === cat.id).length;

                return (
                  <div key={cat.id} className="border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden">
                    {/* Category Header with Accordion Toggle */}
                    <div className={`flex items-center justify-between px-3.5 py-2.5 transition-colors cursor-pointer ${
                      isCatSelected && selectedSubCategory === "all"
                        ? "bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-bold"
                        : "bg-gray-50/70 dark:bg-white/[0.03] text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}>
                      {/* Left: Category Click (Select Category) */}
                      <div 
                        onClick={() => handleSelectCategory(cat.id)}
                        className="flex items-center gap-2.5 flex-1 min-w-0 pr-2"
                      >
                        <Icon className="w-4 h-4 text-brand-500 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold truncate">{catLabel}</span>
                      </div>

                      {/* Right: Count + Accordion Arrow */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-gray-200/80 dark:bg-white/10 text-gray-600 dark:text-gray-400 font-bold">
                          {catItemCount}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleAccordion(cat.id);
                          }}
                          className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 cursor-pointer"
                        >
                          {isExpanded ? (
                            <ChevronDown className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Subcategories Collapsible List */}
                    {isExpanded && (
                      <div className="px-2 py-1.5 bg-white dark:bg-[#0e0e12] border-t border-gray-100 dark:border-white/5 space-y-0.5">
                        {/* All items in this category */}
                        <button
                          onClick={() => handleSelectCategory(cat.id)}
                          className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                            isCatSelected && selectedSubCategory === "all"
                              ? "text-brand-600 dark:text-brand-400 font-bold bg-brand-50 dark:bg-brand-900/20"
                              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                          }`}
                        >
                          <span>{t("All in this Category", "এই ক্যাটাগরির সকল")}</span>
                          {isCatSelected && selectedSubCategory === "all" && (
                            <Check className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />
                          )}
                        </button>

                        {/* Specific Subcategories */}
                        {cat.subCategories.map((sub) => {
                          const isSubSelected = isCatSelected && selectedSubCategory === sub.id;
                          const subLabel = language === "bn" ? sub.label.bn : sub.label.en;
                          const subCount = ALL_SOLUTIONS.filter(s => s.subCategory === sub.id).length;

                          return (
                            <button
                              key={sub.id}
                              onClick={() => handleSelectSubCategory(cat.id, sub.id)}
                              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                                isSubSelected
                                  ? "text-brand-600 dark:text-brand-400 font-bold bg-brand-50 dark:bg-brand-900/20"
                                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                              }`}
                            >
                              <div className="flex items-center gap-1.5 truncate">
                                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSubSelected ? "bg-brand-600 dark:bg-brand-400" : "bg-gray-300 dark:bg-gray-700"}`}></span>
                                <span className="truncate">{subLabel}</span>
                              </div>
                              <div className="flex items-center gap-1 shrink-0 ml-1">
                                {subCount > 0 && (
                                  <span className="text-[10px] text-gray-400 dark:text-gray-500">({subCount})</span>
                                )}
                                {isSubSelected && (
                                  <Check className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Coverage Trust Badge */}
            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/10 flex items-center gap-2.5 text-xs text-gray-500 dark:text-gray-400">
              <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{t("Serving all 64 Districts with Verified Suppliers", "৬৪ জেলায় ভেরিফাইড সাপ্লায়ার নেটওয়ার্ক")}</span>
            </div>

          </div>

          {/* RIGHT SIDE: Compact, Rich Solution Cards Grid */}
          <div className="lg:col-span-9">
            
            {/* Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-white dark:bg-[#121216] p-4 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm">
              <div className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                {t("Showing", "প্রদর্শিত হচ্ছে")}:{" "}
                <span className="font-bold text-gray-900 dark:text-white">{filteredSolutions.length}</span>{" "}
                {t("verified solutions", "টি ভেরিফাইড সমাধান")}
              </div>

              {/* Active Filter Badges */}
              <div className="flex flex-wrap items-center gap-2">
                {selectedCategory !== "all" && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-500/20">
                    {CATEGORY_TREE.find(c => c.id === selectedCategory)?.label[language === 'bn' ? 'bn' : 'en']}
                  </span>
                )}
                {selectedSubCategory !== "all" && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20">
                    {ALL_SOLUTIONS.find(s => s.subCategory === selectedSubCategory)?.subCategoryLabel[language === 'bn' ? 'bn' : 'en']}
                  </span>
                )}
              </div>
            </div>

            {/* Cards Grid */}
            {filteredSolutions.length === 0 ? (
              <div className="bg-white dark:bg-[#121216] rounded-3xl p-12 text-center border border-gray-200 dark:border-white/10">
                <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {t("No exact solutions found", "কোনো সমাধান পাওয়া যায়নি")}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
                  {t("Try resetting your filters or describe your unique requirement directly.", "ফিল্টার রিসেট করুন অথবা আপনার কাস্টম প্রয়োজন সরাসরি পোস্ট করুন।")}
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs hover:bg-brand-700 transition-colors cursor-pointer"
                >
                  {t("Reset Filters", "সব ফিল্টার রিসেট করুন")}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredSolutions.map((item) => {
                  const itemTitle = language === "bn" ? item.title.bn : item.title.en;
                  const itemDesc = language === "bn" ? item.desc.bn : item.desc.en;
                  const itemSub = language === "bn" ? item.subCategoryLabel.bn : item.subCategoryLabel.en;

                  return (
                    <div
                      key={item.id}
                      className="group flex flex-col bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Compact Image with Badges */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <img
                          src={item.image}
                          alt={itemTitle}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-75 group-hover:opacity-50 transition-opacity"></div>

                        {/* Category Sub Tag */}
                        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/60 text-white backdrop-blur-md border border-white/20">
                          {itemSub}
                        </span>

                        {/* Verified Badge */}
                        <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/90 text-white backdrop-blur-md shadow-sm">
                          <ShieldCheck className="w-3 h-3" />
                          <span>{t("Verified", "ভেরিফাইড")}</span>
                        </span>
                      </div>

                      {/* Content Body */}
                      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5 line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                            {itemTitle}
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed mb-3.5">
                            {itemDesc}
                          </p>

                          {/* Quick Spec Pills */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {item.specs.map((spec, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-white/5"
                              >
                                {language === "bn" ? spec.bn : spec.en}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Direct Action Link */}
                        <div className="pt-3 border-t border-gray-100 dark:border-white/10 flex items-center justify-between mt-auto">
                          <Link
                            href={`/needs/new?category=${item.category}&service=${encodeURIComponent(item.title.en)}`}
                            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 text-gray-900 dark:text-white font-bold text-xs transition-all duration-200 group/btn"
                          >
                            <span>{t("Request Solution", "সমাধান নিন")}</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

        </div>
      </div>

    </div>
  );
}

export default function SolutionsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-32 text-center text-gray-500">
        Loading Solutions Explorer...
      </div>
    }>
      <SolutionsCatalogContent />
    </Suspense>
  );
}
