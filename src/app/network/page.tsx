"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Search,
  Box,
  Code2,
  Monitor,
  Plane,
  Globe2,
  Layers,
  Clock,
  MapPin,
  Check,
  Award,
  Tag,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { BRIZZ_NETWORK_SECTORS, NetworkSector, NetworkSubSector } from "@/lib/data";

export default function NetworkPage() {
  const { t, language } = useLanguage();
  const [activeSectorId, setActiveSectorId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredSectors = BRIZZ_NETWORK_SECTORS.map((sector) => {
    // If not matching active tab, omit
    if (activeSectorId !== "all" && sector.id !== activeSectorId) {
      return null;
    }

    // Filter sub-sectors by search
    if (!searchQuery.trim()) {
      return sector;
    }

    const q = searchQuery.toLowerCase();
    const matchingSubSectors = sector.subSectors.filter((sub) => {
      const matchTitle =
        sub.title.en.toLowerCase().includes(q) || sub.title.bn.includes(q);
      const matchDesc =
        sub.desc.en.toLowerCase().includes(q) || sub.desc.bn.includes(q);
      const matchTags = sub.tags.some((tag) => tag.toLowerCase().includes(q));
      const matchHub =
        sub.originOrHub?.en.toLowerCase().includes(q) ||
        sub.originOrHub?.bn.includes(q);
      return matchTitle || matchDesc || matchTags || matchHub;
    });

    if (matchingSubSectors.length === 0) {
      return null;
    }

    return {
      ...sector,
      subSectors: matchingSubSectors,
    };
  }).filter(Boolean) as NetworkSector[];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07070a] pt-0 pb-16 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-12 pb-12 sm:pb-16 bg-gradient-to-b from-white via-slate-50 to-slate-100/60 dark:from-[#060b1d] dark:via-[#090e24] dark:to-[#07070a] text-slate-900 dark:text-white overflow-hidden border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-10 pointer-events-none text-slate-900 dark:text-white">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-network" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-network)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10 space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
            {t("People & Supply Chains Make the Network.", "মানুষ ও সাপ্লাই চেইনের শক্তিতেই গড়ে ওঠে নেটওয়ার্ক।")}
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400 tracking-wide">
            {t("China, Pakistan, UAE, Thailand", "চীন, পাকিস্তান, ইউএই (দুবাই), থাইল্যান্ড")}
          </p>

          {/* Search bar inside Hero */}
          <div className="pt-2 max-w-lg mx-auto">
            <div className="flex items-center gap-2 p-2 rounded-2xl bg-white dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/15 shadow-xl shadow-slate-200/50 dark:shadow-2xl focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/20 dark:focus-within:ring-blue-500/30 transition-all">
              <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 ml-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("Search by category (e.g. Pakistani dress, China, Web, AI, Processor)...", "ক্যাটাগরি বা পণ্য খুঁজুন (যেমন: পাকিস্তানি ড্রেস, চায়না, ওয়েব, প্রসেসর)...")}
                className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none px-2 py-1"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-slate-400 hover:text-slate-700 dark:hover:text-white px-2 py-1"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto">
            <div className="p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-none backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">180+</div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">{t("Vetted Providers & Importers", "ভেরিফায়েড প্রোভাইডার ও ইমপোর্টার")}</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-none backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">4 Hubs</div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">{t("China, Pakistan, UAE, Thailand", "চীন, পাকিস্তান, দুবাই ও থাই হাব")}</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-none backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">64 Districts</div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">{t("Nationwide Delivery Coverage", "সারাদেশব্যাপী ডেলিভারি নেটওয়ার্ক")}</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-none backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400">100%</div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">{t("Escrow & QA Guarantee", "সুরক্ষিত এসক্রো ও কোয়ালিটি")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sector Filter Tabs */}
      <section className="sticky top-20 z-30 py-4 bg-white/95 dark:bg-[#07070a]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveSectorId("all")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeSectorId === "all"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t("All Network Sectors", "সকল নেটওয়ার্ক সেক্টর")}</span>
            </button>

            {BRIZZ_NETWORK_SECTORS.map((sector) => {
              const isActive = activeSectorId === sector.id;
              const Icon =
                sector.id === "software-tech"
                  ? Code2
                  : sector.id === "wholesale-sourcing"
                  ? Box
                  : Monitor;

              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveSectorId(sector.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                      : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{language === "bn" ? sector.name.bn : sector.name.en}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* PART-BY-PART SECTOR DIRECTORY */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-16">
          {filteredSectors.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-[#111422] rounded-3xl border border-slate-200 dark:border-white/10 p-8">
              <Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t("No network categories match your search", "আপনার সার্চের সাথে মিলে এমন কোনো নেটওয়ার্ক ক্যাটাগরি পাওয়া যায়নি")}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                {t("Try searching for terms like 'Pakistani', 'China', 'Web', 'Processor', or clear the search query.", "পাকিস্তানি, চায়না, ওয়েব, প্রসেসর লিখে সার্চ করুন অথবা সার্চ ক্লিয়ার করুন।")}
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs"
              >
                {t("Clear Search Query", "সার্চ রিসেট করুন")}
              </button>
            </div>
          ) : (
            filteredSectors.map((sector) => {
              const SectorIcon =
                sector.id === "software-tech"
                  ? Code2
                  : sector.id === "wholesale-sourcing"
                  ? Box
                  : Monitor;

              return (
                <div key={sector.id} className="space-y-6">
                  {/* Sector Header Card */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 shadow-sm relative overflow-hidden">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                      <div className="space-y-3 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                          <SectorIcon className="w-3.5 h-3.5" />
                          <span>{language === "bn" ? sector.badge.bn : sector.badge.en}</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                          {language === "bn" ? sector.name.bn : sector.name.en}
                        </h2>

                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {language === "bn" ? sector.description.bn : sector.description.en}
                        </p>
                      </div>

                      {/* Sector Stats Strip */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto shrink-0">
                        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 text-center">
                          <div className="text-base sm:text-lg font-black text-blue-600 dark:text-blue-400">
                            {language === "bn" ? sector.stats.providersCount.bn.split(" ")[0] : sector.stats.providersCount.en.split(" ")[0]}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                            {t("Providers", "প্রোভাইডার")}
                          </div>
                        </div>

                        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 text-center">
                          <div className="text-base sm:text-lg font-black text-indigo-600 dark:text-indigo-400">
                            {language === "bn" ? sector.stats.experienceYears.bn.split(" ")[0] : sector.stats.experienceYears.en.split(" ")[0]}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                            {t("Experience", "অভিজ্ঞতা")}
                          </div>
                        </div>

                        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 text-center">
                          <div className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">
                            {language === "bn" ? sector.stats.completedVolume.bn.split(" ")[0] : sector.stats.completedVolume.en.split(" ")[0]}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                            {t("Volume", "বাস্তবায়িত")}
                          </div>
                        </div>

                        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 text-center">
                          <div className="text-base sm:text-lg font-black text-amber-600 dark:text-amber-400">
                            {sector.stats.slaRate}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                            {t("SLA Score", "অন-টাইম রেটিং")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-Sectors Individual Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sector.subSectors.map((sub) => (
                      <div
                        key={sub.id}
                        className="p-6 rounded-3xl bg-white dark:bg-[#101424] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
                      >
                        <div className="space-y-4">
                          {/* Origin/Hub & Turnaround */}
                          <div className="flex items-center justify-between gap-2 text-[11px]">
                            {sub.originOrHub && (
                              <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold truncate">
                                <MapPin className="w-3.5 h-3.5 shrink-0" />
                                <span className="truncate">
                                  {language === "bn" ? sub.originOrHub.bn : sub.originOrHub.en}
                                </span>
                              </div>
                            )}

                            <div className="flex items-center gap-1 text-slate-400 shrink-0 font-medium">
                              <Clock className="w-3 h-3 text-slate-400" />
                              <span>{language === "bn" ? sub.turnaround.bn : sub.turnaround.en}</span>
                            </div>
                          </div>

                          {/* Sub-Sector Title */}
                          <div>
                            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {language === "bn" ? sub.title.bn : sub.title.en}
                            </h3>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed line-clamp-3">
                              {language === "bn" ? sub.desc.bn : sub.desc.en}
                            </p>
                          </div>

                          {/* Highlights Checklist */}
                          <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-white/5">
                            {(language === "bn" ? sub.highlights.bn : sub.highlights.en).map(
                              (point, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium"
                                >
                                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                  <span className="truncate">{point}</span>
                                </div>
                              )
                            )}
                          </div>

                          {/* Tags Pills */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {sub.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Capacity & Action CTA */}
                        <div className="pt-5 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] text-slate-400 block">{t("Capacity:", "নেটওয়ার্ক টিম:")}</span>
                            <span className="text-xs font-bold text-slate-900 dark:text-white">
                              {language === "bn" ? sub.providersCount.bn : sub.providersCount.en}
                            </span>
                          </div>

                          <Link
                            href={`/requests/new?need=${encodeURIComponent(sub.inquiryNeed)}&category=${sector.id}`}
                            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 flex items-center gap-1.5 transition-all hover:scale-105 shrink-0"
                          >
                            <span>{t("Inquire Sourcing", "রিকোয়ারমেন্ট দিন")}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>



      {/* Bottom CTA */}
      <section className="py-16 bg-white dark:bg-[#080b18] border-t border-slate-200 dark:border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t("Ready to access or join the BRIIZZ network?", "BRIIZZ নেটওয়ার্কে যুক্ত হতে প্রস্তুত?")}
          </h2>
          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            {t(
              "Whether you want to source verified software talent, import wholesale products at factory rates, or partner with us, we are ready to assist you.",
              "আপনি সফটওয়্যার টিম হায়ার করতে চান, সরাসরি কারখানা মূল্যে পণ্য আমদানি করতে চান, কিংবা পার্টনার হিসেবে কাজ করতে চান—আমরা সার্বক্ষণিক প্রস্তুত।"
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/requests/new"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02]"
            >
              {t("Post Your Business Need", "আপনার রিকোয়ারমেন্ট সাবমিট করুন")}
            </Link>
            <Link
              href="/login"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-800 dark:text-white font-semibold text-sm transition-all"
            >
              {t("Join as a Partner", "পার্টনার হিসেবে যোগ দিন")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
