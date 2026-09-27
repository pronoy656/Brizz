"use client";

import React from "react";
import Image from "next/image";
import { 
  Star, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  ArrowRight,
  ExternalLink,
  Sparkles,
  Layers,
  Search
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export interface PartnerPortfolioItem {
  title: string;
  tag?: string;
  image: string;
}

export interface PartnerProfileData {
  id: string;
  code: string;
  name: string;
  category: string;
  categorySlug?: string;
  rating: number;
  completedProjects: number;
  location: string;
  serviceArea: string;
  about: string;
  services: string[];
  portfolio: PartnerPortfolioItem[];
  review: {
    rating: number;
    quote: string;
    author?: string;
  };
  verified?: boolean;
}

interface PartnerProfileCardProps {
  partner: PartnerProfileData;
  onRequestService?: (partner: PartnerProfileData) => void;
  onViewPortfolio?: (partner: PartnerProfileData, item: PartnerPortfolioItem) => void;
  showHeaderSearch?: boolean;
  onSearchClick?: () => void;
}

export default function PartnerProfileCard({
  partner,
  onRequestService,
  onViewPortfolio,
  showHeaderSearch = false,
  onSearchClick,
}: PartnerProfileCardProps) {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-[#11141c] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:shadow-2xl transition-all duration-300 hover:border-emerald-500/40 relative flex flex-col justify-between group">
      
      {/* Optional Top Embedded Header / Search Row as in Wireframe */}
      {showHeaderSearch && (
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100 dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base tracking-tight text-gray-900 dark:text-white">
              Briiz<span className="text-emerald-500">Z</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              {t("Partner", "পার্টনার")}
            </span>
          </div>
          
          <button
            onClick={onSearchClick}
            type="button"
            className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 bg-gray-50 dark:bg-white/5 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-white/10 transition-colors"
          >
            <Search className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t("Search", "খুঁজুন")}</span>
          </button>
        </div>
      )}

      {/* Main Content Sections */}
      <div className="space-y-6">
        
        {/* Header: Company Name, Verified Badge, Code, Category */}
        <div>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {partner.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-mono text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded border border-gray-200 dark:border-white/10">
                  {partner.code}
                </span>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  {partner.category}
                </span>
              </div>
            </div>

            {/* Verified Badge */}
            <div className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-500 text-white dark:text-[#11141c]" />
              <span>{t("VERIFIED", "ভেরিফায়েড")}</span>
            </div>
          </div>

          {/* Key Stats Row: Rating, Projects, Location */}
          <div className="flex items-center flex-wrap gap-4 sm:gap-6 mt-4 pt-3 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-black">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              <span>{partner.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
              <Briefcase className="w-3.5 h-3.5 text-gray-400" />
              <span>{partner.completedProjects} {t("Projects", "প্রজেক্ট")}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>{partner.location}</span>
            </div>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-white/15 to-transparent"></div>

        {/* Section 1: ABOUT */}
        <div className="space-y-1.5">
          <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
            {t("ABOUT", "পরিচিতি")}
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal line-clamp-3">
            {partner.about}
          </p>
        </div>

        {/* Section 2: SERVICES */}
        <div className="space-y-2">
          <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
            {t("SERVICES", "সার্ভিসসমূহ")}
          </h4>
          <div className="flex flex-wrap gap-2">
            {partner.services.map((srv, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-colors"
              >
                [{srv}]
              </span>
            ))}
          </div>
        </div>

        {/* Section 3: PORTFOLIO (3 Preview Boxes) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
              {t("PORTFOLIO", "পোর্টফোলিও")}
            </h4>
            <span className="text-[10px] text-gray-400">
              {partner.portfolio.length} {t("Items", "আইটেম")}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {partner.portfolio.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                onClick={() => onViewPortfolio && onViewPortfolio(partner, item)}
                className="group/item relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-slate-800 cursor-pointer shadow-sm hover:border-emerald-500 transition-all duration-300 hover:scale-[1.03]"
                title={item.title}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2">
                  <p className="text-[10px] text-white font-bold truncate leading-tight">
                    {item.title}
                  </p>
                  {item.tag && (
                    <span className="text-[8px] text-emerald-400 truncate">
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: SERVICE AREA */}
        <div className="space-y-1.5">
          <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
            {t("SERVICE AREA", "সার্ভিস এরিয়া")}
          </h4>
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            {partner.serviceArea}
          </p>
        </div>

        {/* Section 5: REVIEWS */}
        <div className="space-y-1.5 p-3.5 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
              {t("REVIEWS", "রিভিউ ও রেটিং")}
            </h4>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(partner.review.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-300 italic">
            "{partner.review.quote}"
          </p>
          {partner.review.author && (
            <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium text-right mt-1">
              — {partner.review.author}
            </p>
          )}
        </div>

      </div>

      {/* Action CTA & Security Notice */}
      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/10 space-y-4">
        <button
          type="button"
          onClick={() => onRequestService && onRequestService(partner)}
          className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/35 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.01]"
        >
          <span>{t("[ REQUEST SERVICE ]", "[ রিকোয়েস্ট সার্ভিস ]")}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Security / Privacy Footnote */}
        <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-gray-500 dark:text-gray-400">
          <Lock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>{t("Direct contact information is managed securely by BriizZ.", "সরাসরি যোগাযোগের তথ্য BriizZ দ্বারা নিরাপদ ও সুরক্ষিত রাখা হয়।")}</span>
        </div>
      </div>

    </div>
  );
}
