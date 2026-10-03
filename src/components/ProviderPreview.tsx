"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Box, Cpu, Scale, Building2, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const NETWORK_CAPABILITIES = [
  {
    id: "wholesale",
    category: { en: "Wholesale & Supply", bn: "পাইকারি ও সাপ্লাই" },
    description: {
      en: "From restaurant ingredients to bulk raw materials, sourced directly from verified wholesalers.",
      bn: "রেস্তোরাঁর উপাদান থেকে শুরু করে বড় আকারের কাঁচামাল—সরাসরি ভেরিফাইড পাইকারি সরবরাহকারীদের কাছ থেকে।",
    },
    icon: Box,
    color: "from-amber-400 to-orange-600",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-500/10",
    textLight: "text-amber-600",
    textDark: "dark:text-amber-400",
  },
  {
    id: "tech",
    category: { en: "Tech & Hardware", bn: "প্রযুক্তি ও হার্ডওয়্যার" },
    description: {
      en: "Bulk computer parts, IT infrastructure setup, and enterprise software implementation.",
      bn: "কম্পিউটার হার্ডওয়্যার, সম্পূর্ণ আইটি ইনফ্রাস্ট্রাকচার এবং এন্টারপ্রাইজ সফটওয়্যার বাস্তবায়ন।",
    },
    icon: Cpu,
    color: "from-blue-400 to-indigo-600",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-500/10",
    textLight: "text-blue-600",
    textDark: "dark:text-blue-400",
  },
  {
    id: "business",
    category: { en: "Business Services", bn: "বিজনেস সার্ভিসেস" },
    description: {
      en: "Legal consulting, company registration, taxation, and financial auditing by certified firms.",
      bn: "আইনি পরামর্শ, কোম্পানি নিবন্ধন, ট্যাক্সেশন এবং চার্টার্ড ফার্মের মাধ্যমে অডিট সার্ভিস।",
    },
    icon: Scale,
    color: "from-emerald-400 to-teal-600",
    bgLight: "bg-emerald-50",
    bgDark: "dark:bg-emerald-500/10",
    textLight: "text-emerald-600",
    textDark: "dark:text-emerald-400",
  },
  {
    id: "realestate",
    category: { en: "Real Estate & Build", bn: "রিয়েল এস্টেট ও নির্মাণ" },
    description: {
      en: "Office interiors, building materials, and reliable contractor sourcing for your next project.",
      bn: "অফিস ইন্টেরিয়র, নির্মাণ সামগ্রী এবং আপনার প্রজেক্টের জন্য নির্ভরযোগ্য ঠিকাদার সরবরাহ।",
    },
    icon: Building2,
    color: "from-purple-400 to-fuchsia-600",
    bgLight: "bg-purple-50",
    bgDark: "dark:bg-purple-500/10",
    textLight: "text-purple-600",
    textDark: "dark:text-purple-400",
  },
];

export default function ProviderPreview() {
  const { t, language } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.78));
      setActiveIdx(Math.min(NETWORK_CAPABILITIES.length - 1, Math.max(0, index)));
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cards = scrollRef.current.children;
      if (cards[index]) {
        (cards[index] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    <section className="pt-2 sm:pt-6 md:pt-10 pb-14 sm:pb-24 md:pb-32 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-[100rem]">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-3 sm:mb-6 tracking-tight transition-colors duration-300">
            {t("An", "একটি")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">
              {t("Elite", "সেরা")}
            </span>{" "}
            {t("Network", "নেটওয়ার্ক")}
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            {language === "bn" ? (
              <>
                আপনাকে বিভিন্ন ডিরেক্টরি ঘেঁটে খুঁজতে হবে না। আমাদের{" "}
                <span className="font-bold text-brand-600 dark:text-brand-400">
                  এলিট বি২বি ইকোসিস্টেম
                </span>
                -এ আপনি শুধু আপনার প্রয়োজন জানান, আমাদের সিস্টেম মুহূর্তেই শত শত ভেরিফায়েড পার্টনারদের সাথে সমন্বয় করবে।
              </>
            ) : (
              <>
                You don't need to search through directories. Through our{" "}
                <span className="font-bold text-brand-600 dark:text-brand-400">
                  Elite B2B Ecosystem
                </span>
                , when you submit a requirement, our system instantly pings thousands of verified partners.
              </>
            )}
          </p>
        </div>

        {/* Mobile Horizontal Swipeable Carousel */}
        <div className="md:hidden mb-10 w-full">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-pl-6 scrollbar-none no-scrollbar pb-3 pt-1 -mx-4 px-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {NETWORK_CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              const categoryText = language === "bn" ? cap.category.bn : cap.category.en;
              const descriptionText = language === "bn" ? cap.description.bn : cap.description.en;

              return (
                <div
                  key={idx}
                  className="w-[82vw] max-w-[310px] shrink-0 snap-center relative bg-white/95 dark:bg-[#121214]/95 backdrop-blur-xl border border-gray-200/90 dark:border-white/10 rounded-3xl p-5 shadow-sm flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl ${cap.bgLight} ${cap.bgDark} flex items-center justify-center border border-white dark:border-white/10 shadow-sm`}
                      >
                        <Icon className={`w-6 h-6 ${cap.textLight} ${cap.textDark}`} />
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-white/5">
                        <Sparkles className="w-3 h-3 text-brand-600 dark:text-brand-400" />
                        {language === "bn" ? "ভেরিফাইড" : "Verified"}
                      </span>
                    </div>

                    {/* Category Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {categoryText}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed min-h-[44px]">
                      {descriptionText}
                    </p>
                  </div>

                  {/* Explore Button */}
                  <div className="mt-5 pt-3 border-t border-gray-100 dark:border-white/10">
                    <Link
                      href={`/network/${cap.id}`}
                      className="w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all bg-gray-900 text-white dark:bg-white dark:text-gray-950 active:scale-[0.98] shadow-sm"
                    >
                      {t("Explore", "দেখুন")} {categoryText} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Bottom Accent Gradient Line */}
                  <div
                    className={`absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r ${cap.color} opacity-80`}
                  />
                </div>
              );
            })}
            {/* Spacer for mobile trailing scroll padding */}
            <div className="shrink-0 w-2" aria-hidden="true" />
          </div>

          {/* Carousel Pagination & Swipe Indicator */}
          <div className="flex items-center justify-between px-2 pt-2">
            <div className="flex items-center gap-1.5">
              {NETWORK_CAPABILITIES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToCard(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIdx === i
                      ? "w-6 bg-gradient-to-r from-brand-600 to-indigo-600"
                      : "w-2 bg-gray-300 dark:bg-white/20"
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider flex items-center gap-1">
              {language === "bn" ? "স্লাইড করুন" : "Swipe"} <ArrowRight className="w-3 h-3 animate-pulse" />
            </span>
          </div>
        </div>

        {/* Capability Cards - Desktop 4x1 Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-14 sm:mb-24 w-full">
          {NETWORK_CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            const categoryText = language === "bn" ? cap.category.bn : cap.category.en;
            const descriptionText = language === "bn" ? cap.description.bn : cap.description.en;

            return (
              <div
                key={idx}
                className="relative group bg-white dark:bg-[#121214] border border-gray-100 dark:border-white/5 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)] transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden"
              >
                {/* Background Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`}
                ></div>

                {/* Icon Wrapper */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 ${cap.bgLight} ${cap.bgDark} rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-all duration-500 relative z-10 shadow-sm border border-white dark:border-transparent`}
                >
                  <Icon
                    className={`w-7 h-7 sm:w-8 sm:h-8 ${cap.textLight} ${cap.textDark} transition-colors duration-500`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-500">
                  {categoryText}
                </h3>

                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed flex-1 relative z-10 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors duration-500 mb-6">
                  {descriptionText}
                </p>

                {/* Explore Button */}
                <div className="relative z-10 mt-auto pt-6 border-t border-gray-100 dark:border-white/10 transition-colors duration-500">
                  <Link
                    href={`/network/${cap.id}`}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 
                    bg-gray-50 text-gray-700 hover:bg-gray-100
                    dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10 
                    border border-gray-200 dark:border-white/5`}
                  >
                    {t("Explore", "দেখুন")} {categoryText} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Animated Bottom Border */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${cap.color} group-hover:w-full transition-all duration-700 ease-out`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-[#121214] border border-gray-200/90 dark:border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 text-center flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-8 shadow-none transition-colors duration-300 overflow-hidden">
            <div className="text-left flex-1 relative z-10">
              <div className="inline-flex md:hidden items-center text-[11px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider mb-1">
                {t("Custom Requirement", "কাস্টম প্রয়োজন")}
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 transition-colors duration-300">
                {t("Have a unique requirement?", "আপনার কি বিশেষ কোনো প্রয়োজন রয়েছে?")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-base md:text-lg transition-colors duration-300">
                {t(
                  "Whether it's 2,000 pieces of chicken or a full office setup, we will secure the right provider.",
                  "তা পাইকারি মালামাল হোক বা সম্পূর্ণ অফিস সেটআপ — আমরাই নিশ্চিত করব সঠিক ও বিশ্বস্ত প্রোভাইডার।"
                )}
              </p>
            </div>

            <Link
              href="/needs/new"
              className="relative z-10 shrink-0 bg-brand-600 hover:bg-brand-700 text-white px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] w-full sm:w-auto shadow-none cursor-pointer"
            >
              {t("Submit Request", "রিকোয়েস্ট পাঠান")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
