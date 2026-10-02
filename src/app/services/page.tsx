"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Search,
  CheckCircle2,
  Cpu,
  Monitor,
  Palette,
  Briefcase,
  Megaphone,
  Layers,
  ArrowRight,
  ShieldCheck,
  Clock,
  Box,
  Eye,
  X,
  Star,
  Users,
  Award,
  Lock,
  Check,
  MessageSquare,
  Shield,
  PhoneCall,
  Zap,
} from "lucide-react";
import { BRIZZ_SERVICES, ServiceItem } from "@/lib/data";

export default function ServicesPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedService(null);
      }
    };
    if (selectedService) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  const categories = [
    { id: "all", labelEn: "All Services", labelBn: "সব সার্ভিস", icon: Layers },
    { id: "active", labelEn: "Active Services", labelBn: "সক্রিয় সার্ভিসসমূহ", icon: Zap },
    { id: "technology", labelEn: "Technology & Web", labelBn: "টেকনোলজি ও ওয়েব", icon: Cpu },
    { id: "hardware", labelEn: "Hardware & Devices", labelBn: "হার্ডওয়্যার ও ডিভাইস", icon: Monitor },
    { id: "wholesale", labelEn: "Wholesale & Supply", labelBn: "হোলসেল ও সাপ্লাই", icon: Box },
    { id: "comingSoon", labelEn: "Coming Soon", labelBn: "আসন্ন সার্ভিসসমূহ", icon: Clock },
  ];

  const filteredServices = BRIZZ_SERVICES.filter((service) => {
    let matchesCategory = true;
    if (activeCategory === "active") {
      matchesCategory = !service.comingSoon;
    } else if (activeCategory === "comingSoon") {
      matchesCategory = !!service.comingSoon;
    } else if (activeCategory !== "all") {
      matchesCategory = service.category === activeCategory;
    }

    const matchesSearch =
      service.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.name.bn.includes(searchQuery) ||
      service.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-8 sm:pt-10 pb-16 bg-slate-50 dark:bg-[#070b16] text-slate-900 dark:text-slate-100 transition-colors">
      <div className="container mx-auto px-4 max-w-7xl space-y-8 sm:space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t("Everything Your Business Needs, Coordinated In One Place", "আপনার ব্যবসার প্রয়োজনীয় সবকিছু, এক বিশ্বস্ত ঠিকানায়")}
          </h1>

          {/* Search bar */}
          <div className="pt-2 max-w-md mx-auto">
            <div className="flex items-center gap-2 p-2 rounded-2xl bg-white dark:bg-[#11162a] border border-slate-200 dark:border-white/10 shadow-lg">
              <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 ml-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("Search service, technology, wholesale item...", "সার্ভিস, টেকনোলজি বা পণ্যের নাম লিখুন...")}
                className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none px-2 py-1"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                    : "bg-white dark:bg-[#11162a] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/10"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{language === "bn" ? cat.labelBn : cat.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const isComingSoon = service.comingSoon;

            return (
              <div
                key={service.id}
                id={service.slug}
                className={`p-7 rounded-3xl bg-white dark:bg-[#101528] border transition-all flex flex-col justify-between group relative overflow-hidden ${
                  isComingSoon
                    ? "border-slate-200 dark:border-white/5 opacity-85 hover:opacity-100"
                    : "border-slate-200 dark:border-white/10 hover:border-blue-500/50 shadow-md hover:shadow-2xl hover:-translate-y-1"
                }`}
              >
                {/* Diagonal Slanted Coming Soon Corner Ribbon Banner */}
                {isComingSoon && (
                  <div className="absolute top-0 right-0 w-36 h-36 overflow-hidden pointer-events-none z-20">
                    <div className="absolute top-7 -right-10 w-44 rotate-45 bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider py-1.5 text-center shadow-lg border-y border-white/25 select-none">
                      Coming Soon
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Badge & Timeline */}
                  <div className="flex items-center justify-between">
                    {isComingSoon ? (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/5">
                        {service.category}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {t("Available Now", "উপলব্ধ সেবা")}
                      </span>
                    )}

                    {!isComingSoon && (
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <Clock className="w-3 h-3 text-blue-500" />
                        <span>{service.estimatedDays}</span>
                      </div>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {language === "bn" ? service.name.bn : service.name.en}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {language === "bn" ? service.description.bn : service.description.en}
                    </p>
                  </div>

                  {/* Accountable preview for active services */}
                  {service.stats && (
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1.5 font-semibold text-blue-600 dark:text-blue-400">
                        <Users className="w-3.5 h-3.5 shrink-0" />
                        <span>{language === "bn" ? service.stats.providersCount.bn.split(" ")[0] : service.stats.providersCount.en.split(" ")[0]} {t("Verified Providers", "ভেরিফায়েড প্রোভাইডার")}</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span>{service.stats.satisfactionRate}</span>
                      </div>
                    </div>
                  )}

                  {/* Deliverables checklist */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {t("What's Included:", "কী কী অন্তর্ভুক্ত:")}
                    </span>
                    {service.deliverables.slice(0, 3).map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-[10px] text-slate-400 block">{t("Starting at:", "শুরুর বাজেট:")}</span>
                      <span className="text-sm font-extrabold text-blue-600 dark:text-blue-400">
                        {service.startingPrice}
                      </span>
                    </div>

                    {isComingSoon && (
                      <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 italic">
                        {t("Onboarding Providers", "অনবোর্ডিং চলছে")}
                      </span>
                    )}
                  </div>

                  {isComingSoon ? (
                    <div className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-500 text-xs font-bold text-center flex items-center justify-center gap-2 border border-slate-200 dark:border-white/5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{t("Coming Soon • Not Available Yet", "শীঘ্রই আসছে • বর্তমানে স্থগিত")}</span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className="w-full px-3 py-2.5 rounded-xl border border-blue-600/30 hover:border-blue-600 bg-blue-50/50 dark:bg-blue-500/10 hover:bg-blue-100 dark:hover:bg-blue-500/20 text-blue-600 dark:text-blue-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>{t("View Details", "বিস্তারিত দেখুন")}</span>
                      </button>

                      <Link
                        href={`/requests/new?need=${encodeURIComponent(service.name.en)}&category=${service.category}`}
                        className="w-full px-3 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/25 flex items-center justify-center gap-1 transition-all"
                      >
                        <span>{t("Request Quote", "রিকোয়েস্ট কোট")}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FULL-SCREEN EXPANSIVE POPUP MODAL FOR SERVICE DETAILS */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-[#0c1020] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-white/10 bg-white/95 dark:bg-[#0c1020]/95 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t("Verified Service Verification", "ভেরিফায়েড সার্ভিস ও ট্রাস্ট মেট্রিক")}</span>
                </span>
                <span className="hidden sm:inline-block text-xs text-slate-400">
                  {selectedService.category.toUpperCase()}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Close details"
                className="p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto px-6 py-8 space-y-8">
              {/* Service Hero */}
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  {language === "bn" ? selectedService.name.bn : selectedService.name.en}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === "bn" ? selectedService.description.bn : selectedService.description.en}
                </p>
              </div>

              {/* Accountable Numbers Strip (Trust Metrics) */}
              {selectedService.stats && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-blue-500" />
                    <span>{t("Accountable Network Capacity & Track Record", "যাচাইকৃত নেটওয়ার্ক সক্ষমতা ও নির্ভরযোগ্যতা")}</span>
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">{t("Providers", "প্রোভাইডার")}</span>
                      </div>
                      <div className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
                        {language === "bn" ? selectedService.stats.providersCount.bn.split(" ")[0] : selectedService.stats.providersCount.en.split(" ")[0]}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {language === "bn" ? selectedService.stats.providersCount.bn : selectedService.stats.providersCount.en}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40">
                      <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">{t("Experience", "অভিজ্ঞতা")}</span>
                      </div>
                      <div className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
                        {language === "bn" ? selectedService.stats.experienceYears.bn.split(" ")[0] : selectedService.stats.experienceYears.en.split(" ")[0]}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {language === "bn" ? selectedService.stats.experienceYears.bn : selectedService.stats.experienceYears.en}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">{t("Volume", "বাস্তবায়িত")}</span>
                      </div>
                      <div className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
                        {language === "bn" ? selectedService.stats.completedProjects.bn.split(" ")[0] : selectedService.stats.completedProjects.en.split(" ")[0]}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {language === "bn" ? selectedService.stats.completedProjects.bn : selectedService.stats.completedProjects.en}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/40">
                      <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-1">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">{t("Trust SLA", "সন্তুষ্টি রেটিং")}</span>
                      </div>
                      <div className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
                        {selectedService.stats.satisfactionRate}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {selectedService.stats.onTimeDelivery} {t("On-Time SLA", "অন-টাইম নিশ্চিতকরণ")}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Trust Safeguards (Why Trust BRIIZZ) */}
              {selectedService.trustHighlights && (
                <div className="p-6 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {t("BRIIZZ Escrow & Quality Protection Standards", "BRIIZZ এসক্রো ও কোয়ালিটি সুরক্ষা নীতিমালা")}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {(language === "bn" ? selectedService.trustHighlights.bn : selectedService.trustHighlights.en).map(
                      (point, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5">
                          <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                            {point}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Sub-Tracks & Capabilities */}
              {selectedService.subTracks && (
                <div className="space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-500" />
                    <span>{t("Specialized Capabilities & Disciplines", "বিশেষায়িত বিভাগ ও সক্ষমতাসমূহ")}</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {selectedService.subTracks.map((track, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white dark:bg-[#111728] border border-slate-200 dark:border-white/10 space-y-2 hover:border-blue-500/40 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                            {language === "bn" ? track.nameBn : track.nameEn}
                          </h4>
                          {track.count && (
                            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">
                              {track.count}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                          {language === "bn" ? track.descBn : track.descEn}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Deliverables */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t("Full Scope of Deliverables Included", "অন্তর্ভুক্ত সকল ডেলিভারেবলস")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 text-xs sm:text-sm text-slate-800 dark:text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4-Step Milestone Process */}
              <div className="p-6 rounded-3xl bg-blue-600/5 border border-blue-600/15 space-y-4">
                <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {t("How Milestone Execution Works", "মাইলস্টোন কাজ কীভাবে পরিচালিত হয়")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center sm:text-left">
                  <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-1">
                    <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400">01. {t("Briefing", "রিকোয়ারমেন্ট")}</span>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{t("Submit project requirement and budget goals", "আপনার প্রজেক্ট চাহিদা জানান")}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-1">
                    <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400">02. {t("Matching", "ম্যাচিং")}</span>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{t("Matched with top 2-3 vetted specialists in 24h", "২৪ ঘণ্টার মধ্যে দক্ষ টিম ম্যাচ")}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-1">
                    <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400">03. {t("Escrow", "এসক্রো")}</span>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{t("Funds held safely in milestone escrow", "টাকা থাকবে সুরক্ষিত এসক্রোতে")}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 space-y-1">
                    <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400">04. {t("Delivery", "ডেলিভারি")}</span>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{t("BRIIZZ QA check and full source handover", "কোয়ালিটি যাচাই ও সম্পূর্ণ হস্তান্তর")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA Bar */}
            <div className="sticky bottom-0 z-20 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-slate-100 dark:border-white/10 bg-white/95 dark:bg-[#0c1020]/95 backdrop-blur-md">
              <div>
                <span className="text-[11px] text-slate-400 block">{t("Pricing Structure:", "বাজেট রেঞ্জ:")}</span>
                <span className="text-lg font-black text-blue-600 dark:text-blue-400">
                  {selectedService.startingPrice}
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-bold text-xs transition-all"
                >
                  {t("Close", "বন্ধ করুন")}
                </button>

                <Link
                  href={`/requests/new?need=${encodeURIComponent(selectedService.name.en)}&category=${selectedService.category}`}
                  onClick={() => setSelectedService(null)}
                  className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <span>{t("Request Quote for This Service", "এই সার্ভিসের জন্য কোটেশন চান")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
