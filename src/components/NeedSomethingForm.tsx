"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  MapPin, 
  Users, 
  Search, 
  Clock, 
  Lock, 
  Briefcase,
  Star,
  ChevronRight
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const POPULAR_TAGS = [
  { en: "Web & Mobile App", bn: "ওয়েব ও মোবাইল অ্যাপ", query: "Web and mobile app development" },
  { en: "Digital Marketing", bn: "ডিজিটাল মার্কেটিং", query: "Digital marketing and SEO" },
  { en: "Accounting & Tax", bn: "একাউন্টিং ও ট্যাক্স", query: "Accounting and tax consultation" },
  { en: "Logistics & Supply", bn: "লজিস্টিকস ও সাপ্লাই", query: "Logistics and nationwide supply" },
  { en: "Legal & Trade License", bn: "ট্রেড লাইসেন্স ও লিগ্যাল", query: "Trade license and company registration" },
  { en: "Brand Identity & UI/UX", bn: "ব্র্যান্ড ডিজাইন ও UI/UX", query: "Brand identity and UI UX design" },
];

export default function NeedSomethingForm() {
  const { t, language } = useLanguage();
  const [need, setNeed] = useState("");
  const [activeTab, setActiveTab] = useState<"client" | "provider">("client");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (need.trim()) {
      router.push(`/needs/new?q=${encodeURIComponent(need)}`);
    } else {
      router.push(`/needs/new`);
    }
  };

  const handleTagClick = (tagQuery: string) => {
    setNeed(tagQuery);
    router.push(`/needs/new?q=${encodeURIComponent(tagQuery)}`);
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#0a0a0a] dark:via-[#101014] dark:to-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-brand-600/15 via-indigo-600/10 to-teal-500/15 dark:from-brand-500/20 dark:via-purple-600/15 dark:to-teal-500/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Glassmorphic CTA Card */}
        <div className="max-w-5xl mx-auto rounded-[2.5rem] md:rounded-[3.5rem] bg-gradient-to-b from-gray-900 via-gray-900 to-black dark:from-[#131318] dark:via-[#16161f] dark:to-[#0d0d12] border border-gray-800/80 dark:border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.35)] relative overflow-hidden p-8 sm:p-12 md:p-16 lg:p-20 text-white">
          
          {/* Subtle Grid Accent Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
          
          {/* Radial Glowing Corner Accents */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-500/25 rounded-full blur-[90px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/25 rounded-full blur-[90px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 dark:bg-brand-500/15 border border-white/15 dark:border-brand-500/30 text-brand-300 dark:text-brand-300 text-xs sm:text-sm font-bold mb-8 uppercase tracking-wider backdrop-blur-md shadow-inner">
              <Sparkles className="w-4 h-4 text-brand-400 animate-pulse" />
              <span>{t("Your Gateway to 64 Districts", "৬৪ জেলার সমাধান এক প্ল্যাটফর্মে")}</span>
            </div>

            {/* Role Switcher Tab (I Need a Service vs I Offer Services) */}
            <div className="flex items-center p-1.5 bg-black/40 dark:bg-white/5 border border-white/10 rounded-2xl mb-10 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setActiveTab("client")}
                className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                  activeTab === "client" 
                    ? "bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lg shadow-brand-600/30 font-bold" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Search className="w-4 h-4" />
                <span>{t("I Need a Service / Solution", "আমার সমাধান / সেবা প্রয়োজন")}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("provider")}
                className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                  activeTab === "provider" 
                    ? "bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lg shadow-brand-600/30 font-bold" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>{t("I Want to Offer Services", "আমি প্রোভাইডার হতে চাই")}</span>
              </button>
            </div>

            {/* Main Heading */}
            {activeTab === "client" ? (
              <>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight max-w-3xl">
                  {t("Tell Us What You Need.", "আপনার কী সেবা প্রয়োজন বলুন।")}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-teal-300">
                    {t("We Handle the Rest.", "বাকিটা আমরা দেখছি।")}
                  </span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed">
                  {t(
                    "No endless searches or bidding wars. Get instantly matched with verified top-tier providers anywhere in Bangladesh.",
                    "কোনো বাড়তি ঝামেলা বা অপেক্ষা ছাড়াই আপনার প্রয়োজন অনুযায়ী দেশের ভেরিফাইড প্রোভাইডারদের সাথে সরাসরি কানেক্ট হোন।"
                  )}
                </p>

                {/* High-Conversion Search / Action Input */}
                <form 
                  onSubmit={handleSubmit}
                  className="w-full max-w-3xl bg-white/95 dark:bg-[#1f1f26]/95 p-2 sm:p-2.5 rounded-2xl md:rounded-3xl flex flex-col md:flex-row items-center gap-2 shadow-2xl border border-white/20 backdrop-blur-xl transition-all duration-300 focus-within:ring-4 focus-within:ring-brand-500/30"
                >
                  <div className="flex items-center gap-3 px-4 py-3 sm:py-3.5 w-full flex-1">
                    <Search className="w-5 h-5 text-gray-400 dark:text-gray-400 shrink-0" />
                    <input
                      id="need-input"
                      type="text"
                      placeholder={t("e.g. I need a mobile app developer in Dhaka...", "যেমন: আমার চট্টগ্রামের জন্য একটি ডেলিভারি পার্টনার দরকার...")}
                      value={need}
                      onChange={(e) => setNeed(e.target.value)}
                      className="w-full text-base sm:text-lg text-gray-900 dark:text-white bg-transparent border-none outline-none placeholder-gray-400 dark:placeholder-gray-500 font-medium"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-brand-600 via-brand-700 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white rounded-xl md:rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-brand-600/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>{t("Get Free Solution", "ফ্রি সমাধান পান")}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>

                {/* Popular Requirement Quick Tags */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-3xl">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-1">
                    {t("Popular:", "জনপ্রিয়:")}
                  </span>
                  {POPULAR_TAGS.map((tag, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleTagClick(tag.query)}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 border border-white/10 text-gray-200 hover:text-white transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
                    >
                      {language === "bn" ? tag.bn : tag.en}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight max-w-3xl">
                  {t("Scale Your Business Across", "আপনার ব্যবসার পরিধি বাড়ান")}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-teal-300">
                    64 {t("Districts.", "জেলায়।")}
                  </span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed">
                  {t(
                    "Join our nationwide verified partner network. Receive direct, high-intent client requirements suited to your core expertise.",
                    "আমাদের দেশব্যাপী ভেরিফাইড নেটওয়ার্কে যুক্ত হয়ে সরাসরি ক্লায়েন্টদের কাজের রিকোয়ারমেন্ট পান এবং আপনার সার্ভিস বিক্রি করুন।"
                  )}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <Link 
                    href="/providers/join"
                    className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-brand-600 via-brand-700 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-brand-600/30 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>{t("Apply as a Verified Partner", "ভেরিফাইড পার্টনার হিসেবে যোগ দিন")}</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <Link 
                    href="/how-it-works#providers"
                    className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/15 border border-white/15 text-white rounded-2xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
                  >
                    <span>{t("Learn How It Works", "কীভাবে কাজ করে জানুন")}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                </div>
              </>
            )}

            {/* Trust Highlights Grid */}
            <div className="mt-14 pt-10 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t("Instant Match", "দ্রুততম ম্যাচিং")}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{t("Within 2 hours", "২ ঘণ্টার মধ্যে সমাধান")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t("100% Verified", "১০০% ভেরিফাইড")}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{t("Pre-vetted partners", "যাচাইকৃত প্রোভাইডার")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t("64 Districts", "৬৪ জেলায় কভারেজ")}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{t("Local & Nationwide", "লোকাল ও দেশব্যাপী")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t("Zero Risk", "সম্পূর্ণ নিরাপদ")}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{t("Guaranteed delivery", "নিশ্চিত কোয়ালিটি")}</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
