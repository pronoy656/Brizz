"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  SlidersHorizontal, 
  X, 
  Send,
  Building2,
  Calendar,
  DollarSign,
  Phone,
  User,
  ExternalLink,
  Layers,
  MapPin,
  Star
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useApp } from "@/context/AppContext";
import PartnerProfileCard, { PartnerProfileData, PartnerPortfolioItem } from "@/components/PartnerProfileCard";

// Mock Verified Partner Directory Data formatted according to the exact wireframe
const VERIFIED_PROFILES: PartnerProfileData[] = [
  {
    id: "prt-abc",
    code: "BRZ-P-001248",
    name: "ABC Digital Solutions",
    category: "Web & Software Solutions",
    categorySlug: "software",
    rating: 4.8,
    completedProjects: 27,
    location: "Dhaka",
    serviceArea: "Dhaka • Bangladesh • Remote",
    about: "Software development company providing enterprise-grade web applications, custom ERPs, RESTful APIs, and scalable cross-platform mobile apps for fast-growing businesses.",
    services: ["Web", "Mobile", "E-commerce", "API", "Cloud"],
    portfolio: [
      {
        title: "B2B Supply Chain Portal",
        tag: "Next.js / Node.js",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "Fintech Merchant Dashboard",
        tag: "React / Tailwind / ChartJS",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "Telemedicine Doctor App",
        tag: "Flutter / Firebase",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80"
      }
    ],
    review: {
      rating: 5,
      quote: "Delivered our custom ERP two weeks ahead of schedule. Flawless communication and rock-solid code.",
      author: "COO, Apex Manufacturing Ltd."
    },
    verified: true
  },
  {
    id: "prt-byte",
    code: "BRZ-P-002194",
    name: "ByteTech Hardware & Surveillance",
    category: "Hardware & Office Networking",
    categorySlug: "hardware",
    rating: 4.9,
    completedProjects: 65,
    location: "Dhaka",
    serviceArea: "Dhaka • Gazipur • Narayanganj",
    about: "Authorized enterprise distributor and on-site engineering team for structured Cat6 cabling, Hikvision IP CCTV surveillance, and MikroTik multi-floor Wi-Fi mesh systems.",
    services: ["CCTV", "Networking", "Hardware", "Biometrics", "Servers"],
    portfolio: [
      {
        title: "8-Floor Corporate Wi-Fi Mesh",
        tag: "MikroTik / UniFi",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "32-Camera 4K Surveillance Setup",
        tag: "Hikvision IP / NVR",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "Biometric Access Control System",
        tag: "ZKTeco Door Locks",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80"
      }
    ],
    review: {
      rating: 5,
      quote: "Completed our entire 40-workstation network and CCTV cabling in just 3 days with zero downtime.",
      author: "Admin Head, Radiant Trade House"
    },
    verified: true
  },
  {
    id: "prt-prism",
    code: "BRZ-P-003482",
    name: "Studio Prism Visuals",
    category: "Creative, Branding & 4K Video",
    categorySlug: "creative",
    rating: 4.9,
    completedProjects: 38,
    location: "Chattogram",
    serviceArea: "Chattogram • Dhaka • Nationwide",
    about: "Full-service visual production studio specializing in 4K commercial films, corporate brand identity systems, product photography, and high-conversion ad creatives.",
    services: ["Branding", "4K Video", "Photography", "UI/UX", "Motion"],
    portfolio: [
      {
        title: "Artisanal Brand Identity & Packaging",
        tag: "Vector / Guideline Book",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "Commercial Film & TVC Production",
        tag: "4K Cinema / Color Grade",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "E-Commerce Luxury Product Shoot",
        tag: "Studio Lighting / Retouch",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80"
      }
    ],
    review: {
      rating: 5,
      quote: "Prism completely transformed our brand visual language. Our conversion rate increased by 42% post-launch.",
      author: "Founder, Zenith Lifestyle"
    },
    verified: true
  },
  {
    id: "prt-growth",
    code: "BRZ-P-004819",
    name: "GrowthWave Digital & Ads",
    category: "Targeted Marketing & Lead Funnels",
    categorySlug: "digital",
    rating: 4.9,
    completedProjects: 29,
    location: "Sylhet",
    serviceArea: "Sylhet • Dhaka • Remote",
    about: "Performance-driven growth agency specialized in Meta & Google Search ad funnels, conversion pixel tracking, e-commerce ROAS scaling, and B2B export buyer acquisition.",
    services: ["Meta Ads", "Google Ads", "SEO", "Lead Funnels", "Analytics"],
    portfolio: [
      {
        title: "E-Commerce 5.2x ROAS Ad Scaling",
        tag: "Meta Ads / Pixel CAPI",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "B2B Export Lead Generation Campaign",
        tag: "Google Search / LinkedIn",
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "Omnichannel Social Content Engine",
        tag: "Content / Community Growth",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=80"
      }
    ],
    review: {
      rating: 5,
      quote: "Achieved consistent 4.8x return on ad spend for our seasonal collection. Highly analytical team.",
      author: "Marketing Director, Organic Roots BD"
    },
    verified: true
  },
  {
    id: "prt-apex",
    code: "BRZ-P-005612",
    name: "Apex Enterprise Cloud Labs",
    category: "Enterprise Cloud & DevOps",
    categorySlug: "software",
    rating: 5.0,
    completedProjects: 42,
    location: "Dhaka",
    serviceArea: "Dhaka • Nationwide • Global Remote",
    about: "AWS certified DevOps and cloud migration engineers building high-availability server clusters, Docker/Kubernetes container pipelines, and enterprise microservices.",
    services: ["AWS", "DevOps", "Kubernetes", "PostgreSQL", "Cybersecurity"],
    portfolio: [
      {
        title: "High-Traffic Auto-Scaling Cloud Stack",
        tag: "AWS ECS / Terraform",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "Fintech Zero-Downtime Migration",
        tag: "Docker / PostgreSQL HA",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "Automated CI/CD Deployment Pipeline",
        tag: "GitHub Actions / ArgoCD",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80"
      }
    ],
    review: {
      rating: 5,
      quote: "Reduced our cloud infrastructure costs by 38% while handling 10x traffic spikes smoothly during Black Friday.",
      author: "CTO, QuickPay Bangladesh"
    },
    verified: true
  },
  {
    id: "prt-nexa",
    code: "BRZ-P-006321",
    name: "Nexa Commerce & Automation",
    category: "E-Commerce & Courier Integrations",
    categorySlug: "ecommerce",
    rating: 4.8,
    completedProjects: 34,
    location: "Dhaka",
    serviceArea: "Dhaka • Rajshahi • Khulna • Nationwide",
    about: "Turnkey e-commerce storefront engineers integrating bKash/Nagad/Cards checkout, automated Pathao/Steadfast courier dispatch, SMS alerts, and warehouse inventory sync.",
    services: ["E-Commerce", "bKash API", "Courier Sync", "SMS Bot", "Shopify"],
    portfolio: [
      {
        title: "Direct bKash Tokenized Checkout Store",
        tag: "Next.js / Tailwind / API",
        image: "https://images.unsplash.com/photo-1556742049-0a67e557224f?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "Courier Auto-Dispatch Warehouse App",
        tag: "Pathao / Steadfast Sync",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80"
      },
      {
        title: "WhatsApp Order Confirmation Bot",
        tag: "n8n / Meta Cloud API",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80"
      }
    ],
    review: {
      rating: 5,
      quote: "Automated our courier booking and customer SMS notification completely. Saved our team 3 hours daily.",
      author: "Managing Partner, Urban Wear BD"
    },
    verified: true
  }
];

const CATEGORIES = [
  { id: "all", labelEn: "All Verified Partners", labelBn: "সকল ভেরিফায়েড পার্টনার" },
  { id: "software", labelEn: "Web & Software", labelBn: "ওয়েব ও সফটওয়্যার" },
  { id: "hardware", labelEn: "Hardware & CCTV", labelBn: "হার্ডওয়্যার ও সিসিটিভি" },
  { id: "creative", labelEn: "Creative & Branding", labelBn: "ক্রিয়েটিভ ও ব্র্যান্ডিং" },
  { id: "digital", labelEn: "Marketing & Growth", labelBn: "মার্কেটিং ও গ্রোথ" },
  { id: "ecommerce", labelEn: "E-Commerce & Automation", labelBn: "ই-কমার্স ও অটোমেশন" },
];

export default function ExpertisePage() {
  const { t, language } = useLanguage();
  const { addRequirement, addToast } = useApp();

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  // Interactive Modal State
  const [selectedPartnerForRequest, setSelectedPartnerForRequest] = useState<PartnerProfileData | null>(null);
  const [activePortfolioPreview, setActivePortfolioPreview] = useState<{ partner: PartnerProfileData; item: PartnerPortfolioItem } | null>(null);

  // Request Service Form State
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [serviceTitle, setServiceTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [budgetRange, setBudgetRange] = useState("৳50,000–৳1,00,000");
  const [estimatedBudget, setEstimatedBudget] = useState(75000);
  const [timeline, setTimeline] = useState("Within 1 Week");
  const [district, setDistrict] = useState("Dhaka");
  const [submitting, setSubmitting] = useState(false);
  const [successTrackingCode, setSuccessTrackingCode] = useState<string | null>(null);

  // Filter Logic
  const filteredProfiles = useMemo(() => {
    return VERIFIED_PROFILES.filter((profile) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        profile.name.toLowerCase().includes(query) ||
        profile.code.toLowerCase().includes(query) ||
        profile.category.toLowerCase().includes(query) ||
        profile.location.toLowerCase().includes(query) ||
        profile.about.toLowerCase().includes(query) ||
        profile.services.some((s) => s.toLowerCase().includes(query));

      const matchesCategory =
        selectedCategory === "all" || profile.categorySlug === selectedCategory;

      const matchesLocation =
        selectedLocation === "all" ||
        profile.location.toLowerCase() === selectedLocation.toLowerCase();

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [searchQuery, selectedCategory, selectedLocation]);

  const handleOpenRequestModal = (partner: PartnerProfileData) => {
    setSelectedPartnerForRequest(partner);
    setServiceTitle(`Service Request for ${partner.name}`);
    setSuccessTrackingCode(null);
  };

  const handlePortfolioClick = (partner: PartnerProfileData, item: PartnerPortfolioItem) => {
    setActivePortfolioPreview({ partner, item });
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone || !selectedPartnerForRequest) return;

    setSubmitting(true);
    try {
      const code = addRequirement({
        clientName,
        clientPhone,
        clientEmail: clientEmail || `${clientPhone}@briizz-direct.com`,
        serviceTitle: serviceTitle || `Service with ${selectedPartnerForRequest.name}`,
        serviceCategory: selectedPartnerForRequest.categorySlug || "technology",
        district: district || selectedPartnerForRequest.location,
        budgetRange,
        estimatedBudget,
        timeline,
        description: projectDescription || `Direct request routed to verified partner ${selectedPartnerForRequest.name} (${selectedPartnerForRequest.code}).`,
      });

      setSuccessTrackingCode(code);
      addToast(`Direct request ${code} routed securely to ${selectedPartnerForRequest.name}!`, "success");
    } catch (err) {
      addToast("Failed to submit request. Please try again.", "warning");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090e] text-slate-900 dark:text-slate-100 pt-28 pb-24 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl space-y-12">
        
        {/* Top Header & Search Bar Section (matching wireframe top container) */}
        <div className="bg-white dark:bg-[#0e111a] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t("Verified Partner Ecosystem", "ভেরিফায়েড পার্টনার নেটওয়ার্ক")}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {t("Our Expertise & Verified Directory", "আমাদের এক্সপার্টাইজ ও ভেরিফায়েড ডিরেক্টরি")}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl leading-relaxed">
                {t(
                  "Discover the sectors and specialized domains we excel in—backed by top-tier verified partner agencies, specialists, and proven track records across Bangladesh.",
                  "আমরা যেসব সেক্টর ও ডোমেইনে দক্ষ—তার বিবরণ এবং সমগ্র বাংলাদেশে বিশ্বস্ত ভেরিফায়েড পার্টনার এজেন্সি ও বিশেষজ্ঞদের সম্পূর্ণ তালিকা।"
                )}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/requests/new"
                className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>{t("Post Custom Requirement", "কাস্টম রিকোয়ারমেন্ট দিন")}</span>
                <Sparkles className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
              </Link>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              {/* Live Search Input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t(
                    "Search by company, code (e.g. BRZ-P-001248), service, or skill...",
                    "কোম্পানির নাম, আইডি কোড (যেমন BRZ-P-001248), সার্ভিস বা স্কিল দিয়ে খুঁজুন..."
                  )}
                  className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:border-emerald-500 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Location Select */}
              <div className="relative shrink-0 sm:w-48">
                <MapPin className="w-4 h-4 text-emerald-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-10 pr-8 py-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white outline-none focus:border-emerald-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="all">{t("All Locations", "সকল লোকেশন")}</option>
                  <option value="dhaka">Dhaka (ঢাকা)</option>
                  <option value="chattogram">Chattogram (চট্টগ্রাম)</option>
                  <option value="sylhet">Sylhet (সিলেট)</option>
                  <option value="rajshahi">Rajshahi (রাজশাহী)</option>
                  <option value="khulna">Khulna (খুলনা)</option>
                </select>
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                      : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10"
                  }`}
                >
                  {language === "bn" ? cat.labelBn : cat.labelEn}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Search Results Summary Header */}
        <div className="flex items-center justify-between px-2">
          <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400">
            {t("Showing", "দেখাচ্ছে")}{" "}
            <span className="text-slate-900 dark:text-white font-extrabold">{filteredProfiles.length}</span>{" "}
            {t("Verified Partner Profiles", "টি ভেরিফায়েড পার্টনার কার্ড")}
          </div>

          {(searchQuery || selectedCategory !== "all" || selectedLocation !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedLocation("all");
              }}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>{t("Reset Filters", "ফিল্টার রিসেট")}</span>
            </button>
          )}
        </div>

        {/* Profiles Card Grid (The Wireframe Card Implementation) */}
        {filteredProfiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProfiles.map((partner) => (
              <PartnerProfileCard
                key={partner.id}
                partner={partner}
                showHeaderSearch={false}
                onRequestService={handleOpenRequestModal}
                onViewPortfolio={handlePortfolioClick}
              />
            ))}
          </div>
        ) : (
          <div className="p-16 rounded-3xl bg-white dark:bg-[#0e111a] border border-slate-200 dark:border-white/10 text-center space-y-4 max-w-md mx-auto">
            <Search className="w-12 h-12 text-slate-400 mx-auto opacity-50" />
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              {t("No verified partners found", "কোনো পার্টনার পাওয়া যায়নি")}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t("Try clearing your search query or selecting another category.", "সার্চ কিওয়ার্ড পরিবর্তন করে অথবা অন্য ক্যাটাগরি সিলেক্ট করে চেষ্টা করুন।")}
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedLocation("all");
              }}
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow"
            >
              {t("View All Profiles", "সকল প্রোফাইল দেখুন")}
            </button>
          </div>
        )}

      </div>

      {/* Interactive "Request Service" Modal Dialog */}
      {selectedPartnerForRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {selectedPartnerForRequest.code}
                  </span>
                  <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                    ✓ {t("Direct Partner Routing", "সরাসরি পার্টনার ম্যাচ")}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {t("Request Service from", "রিকোয়েস্ট পাঠান")}: {selectedPartnerForRequest.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPartnerForRequest(null)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {successTrackingCode ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-slate-950 font-black text-2xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                  ✓
                </div>
                <h4 className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  {t("Request Submitted Successfully!", "রিকোয়েস্ট সফলভাবে জমা হয়েছে!")}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  {t(
                    `Your requirement has been securely routed to ${selectedPartnerForRequest.name}. Tracking Code:`,
                    `আপনার রিকোয়েস্টটি ${selectedPartnerForRequest.name}-এর কাছে পাঠানো হয়েছে। ট্র্যাকিং কোড:`
                  )}
                </p>
                <div className="inline-block px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-emerald-500 font-mono font-black text-lg text-emerald-600 dark:text-emerald-400">
                  {successTrackingCode}
                </div>
                <p className="text-[11px] text-slate-400">
                  {t("BriizZ manager will contact you within 2 hours to confirm project terms.", "প্রজেক্টের বিষয় নিশ্চিত করতে ২ ঘণ্টার মধ্যে BriizZ প্রতিনিধি যোগাযোগ করবেন।")}
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => setSelectedPartnerForRequest(null)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md"
                  >
                    {t("Done", "সম্পন্ন")}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="space-y-4">
                
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    {t("Project / Service Title *", "প্রজেক্ট বা সেবার শিরোনাম *")}
                  </label>
                  <input
                    type="text"
                    required
                    value={serviceTitle}
                    onChange={(e) => setServiceTitle(e.target.value)}
                    placeholder="e.g. E-Commerce Website & Payment Setup"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      {t("Your Full Name *", "আপনার পুরো নাম *")}
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Rahim Chowdhury"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      {t("Phone / WhatsApp *", "ফোন বা হোয়াটসঅ্যাপ *")}
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      {t("Budget Range", "বাজেট রেঞ্জ")}
                    </label>
                    <select
                      value={budgetRange}
                      onChange={(e) => {
                        setBudgetRange(e.target.value);
                        if (e.target.value.includes("50,000")) setEstimatedBudget(75000);
                        else if (e.target.value.includes("1,00,000")) setEstimatedBudget(250000);
                        else if (e.target.value.includes("5,00,000")) setEstimatedBudget(600000);
                        else setEstimatedBudget(35000);
                      }}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-emerald-500"
                    >
                      <option value="৳20,000–৳50,000">৳20k – ৳50k</option>
                      <option value="৳50,000–৳1,00,000">৳50k – ৳100k</option>
                      <option value="৳1,00,000–৳5,00,000">৳100k – ৳500k</option>
                      <option value="৳5,00,000+">৳500k+ (Enterprise)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      {t("Timeline", "সময়সীমা")}
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-emerald-500"
                    >
                      <option value="ASAP">{t("ASAP (Urgent)", "খুব জরুরি")}</option>
                      <option value="Within 1 Week">{t("Within 1 Week", "১ সপ্তাহের মধ্যে")}</option>
                      <option value="Within 1 Month">{t("Within 1 Month", "১ মাসের মধ্যে")}</option>
                      <option value="Flexible">{t("Flexible", "নমনীয়")}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      {t("District", "জেলা")}
                    </label>
                    <input
                      type="text"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    {t("Project Details / Requirements (Optional)", "প্রজেক্টের বিবরণ / প্রয়োজনীয়তা")}
                  </label>
                  <textarea
                    rows={3}
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Describe what you want to build or achieve..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-emerald-500"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? t("Routing...", "পাঠানো হচ্ছে...") : t("Send Request to Partner", "পার্টনারকে রিকোয়েস্ট পাঠান")}</span>
                  </button>
                </div>

                <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                  🔒 {t("Protected by BriizZ Milestone Escrow and Quality Guarantee.", "BriizZ মাইলস্টোন এবং কোয়ালিটি গ্যারান্টি দ্বারা সম্পূর্ণ সুরক্ষিত।")}
                </p>

              </form>
            )}

          </div>
        </div>
      )}

      {/* Portfolio Lightbox Preview Modal */}
      {activePortfolioPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl">
            
            <div className="relative aspect-[16/10] bg-slate-900">
              <img
                src={activePortfolioPreview.item.image}
                alt={activePortfolioPreview.item.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActivePortfolioPreview(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    {activePortfolioPreview.item.tag || "Deliverable"}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mt-0.5">
                    {activePortfolioPreview.item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {t("Delivered by", "তৈরি করেছেন")}: <span className="font-bold text-slate-900 dark:text-white">{activePortfolioPreview.partner.name}</span> ({activePortfolioPreview.partner.code})
                  </p>
                </div>

                <button
                  onClick={() => {
                    const p = activePortfolioPreview.partner;
                    setActivePortfolioPreview(null);
                    handleOpenRequestModal(p);
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition-all shrink-0"
                >
                  {t("Request Similar", "অনুরূপ সেবা নিন")}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
