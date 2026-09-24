"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
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
  Tag,
} from "lucide-react";
import { BRIZZ_SERVICES, ServiceItem } from "@/lib/data";

export default function ServicesPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: "all", labelEn: "All Services (24+)", labelBn: "সব সার্ভিস (২৪+)", icon: Layers },
    { id: "technology", labelEn: "Technology & Web", labelBn: "টেকনোলজি ও ওয়েব", icon: Cpu },
    { id: "hardware", labelEn: "Hardware & Devices", labelBn: "হার্ডওয়্যার ও সিসিটিভি", icon: Monitor },
    { id: "creative", labelEn: "Creative & Media", labelBn: "ক্রিয়েটিভ ও ব্র্যান্ডিং", icon: Palette },
    { id: "business", labelEn: "Business & Commerce", labelBn: "বিজনেস ও ই-কমার্স", icon: Briefcase },
    { id: "digital", labelEn: "Digital Growth", labelBn: "ডিজিটাল মার্কেটিং", icon: Megaphone },
    { id: "professional", labelEn: "Specialist & Events", labelBn: "প্রফেশনাল ও ইভেন্ট", icon: ShieldCheck },
  ];

  const filteredServices = BRIZZ_SERVICES.filter((service) => {
    const matchesCategory = activeCategory === "all" || service.category === activeCategory;
    const matchesSearch =
      service.name.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.name.bn.includes(searchQuery) ||
      service.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-4 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("Verified Service Directory", "ভেরিফায়েড সার্ভিস ডিরেক্টরি")}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {t("Everything You Need, Coordinated In One Place", "আপনার প্রয়োজনীয় সবকিছু, এক বিশ্বস্ত ঠিকানায়")}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {t(
              "Browse our comprehensive catalog of technology, hardware, creative, and business services. Every service is backed by strict quality benchmarks and milestone payments.",
              "আমাদের টেকনোলজি, হার্ডওয়্যার, ক্রিয়েটিভ ও বিজনেস সার্ভিসের পূর্ণাঙ্গ ক্যাটালগ দেখুন। প্রতিটি সার্ভিস নিশ্চিত কোয়ালিটি এবং স্বচ্ছ মাইলস্টোনে ডেলিভার করা হয়।"
            )}
          </p>

          {/* Search bar */}
          <div className="pt-2 max-w-md mx-auto">
            <div className="flex items-center gap-2 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              <Search className="w-5 h-5 text-emerald-500 ml-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("Search service name or keyword...", "সার্ভিসের নাম বা কীওয়ার্ড লিখুন...")}
                className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none px-2 py-1"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
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
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={service.slug}
              className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 shadow-md hover:shadow-2xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                    {service.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock className="w-3 h-3 text-emerald-500" />
                    <span>{service.estimatedDays}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    {language === "bn" ? service.name.bn : service.name.en}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {language === "bn" ? service.description.bn : service.description.en}
                  </p>
                </div>

                {/* Deliverables checklist */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    What&apos;s Included:
                  </span>
                  {service.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">Starting at:</span>
                  <span className="text-sm font-extrabold text-emerald-500">{service.startingPrice}</span>
                </div>

                <Link
                  href={`/requests/new?need=${encodeURIComponent(service.name.en)}&category=${service.category}`}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/25 flex items-center gap-1 transition-all"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
