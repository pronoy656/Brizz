"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Compass, Lightbulb, MessageSquareText, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const GUIDES = [
  {
    num: { en: "01", bn: "০১" },
    title: { en: "Buying Guides", bn: "ক্রয় গাইড" },
    description: {
      en: "Know what to compare before buying hardware or engaging a service. Make informed purchasing decisions.",
      bn: "হার্ডওয়্যার কেনার আগে বা সার্ভিস নেওয়ার আগে কী কী তুলনা করবেন তা জানুন। সঠিক ও তথ্যভিত্তিক সিদ্ধান্ত নিন।",
    },
    icon: Compass,
    color: "from-blue-500 to-cyan-500",
  },
  {
    num: { en: "02", bn: "০২" },
    title: { en: "How-to Guides", bn: "হাউ-টু গাইড" },
    description: {
      en: "Practical explanations for technology and business decisions. Step-by-step guidance for your growth.",
      bn: "প্রযুক্তি ও ব্যবসায়িক সিদ্ধান্তের জন্য বাস্তবসম্মত ব্যাখ্যা। ব্যবসার বৃদ্ধির প্রতিটি পদক্ষেপে দিকনির্দেশনা।",
    },
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
  },
  {
    num: { en: "03", bn: "০৩" },
    title: { en: "Public Resources", bn: "পাবলিক রিসোর্স" },
    description: {
      en: "Useful information that supports the free-help side of BRIIZZ. Accessible knowledge for everyone.",
      bn: "BRIIZZ-এর ফ্রি সহায়তা উদ্যোগের অংশ হিসেবে প্রয়োজনীয় তথ্য। সবার জন্য সহজলভ্য জ্ঞান ও রিসোর্স।",
    },
    icon: BookOpen,
    color: "from-emerald-500 to-teal-500",
  },
];

export default function UsefulInformation() {
  const { t, language } = useLanguage();

  return (
    <section className="py-12 sm:py-20 md:py-28 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        {/* Centered Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-800 dark:text-brand-400 text-xs sm:text-sm font-bold mb-3 sm:mb-4 uppercase tracking-wider border border-brand-200/50 dark:border-brand-500/20 shadow-sm transition-colors duration-300">
            <MessageSquareText className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t("Consultation & Guides", "পরামর্শ ও গাইডলাইন")}
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-3 sm:mb-5 tracking-tight leading-tight transition-colors duration-300">
            {t("Business Guides & Resources", "সঠিক সিদ্ধান্ত ও ব্যবসার জন্য")}{" "}
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">
              {t("To Make the Right Decision", "প্রয়োজনীয় গাইড ও রিসোর্স")}
            </span>
          </h2>

          <p className="text-xs sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            {t(
              "Know what to buy, how to execute, and where to find free resources. We provide clear guidance and dedicated consultation for every step of your business.",
              "কোন সেবা বা পণ্য কিনবেন, কীভাবে শুরু করবেন এবং কোথায় রিসোর্স পাবেন—আপনার ব্যবসার প্রতিটি পদক্ষেপে সঠিক সিদ্ধান্ত নিতে আমরা দিচ্ছি তথ্যবহুল গাইড ও সরাসরি পরামর্শ।"
            )}
          </p>
        </div>

        {/* Mobile View: Clean Connected Stack (Non-slider) */}
        <div className="flex md:hidden flex-col gap-3.5 w-full">
          {GUIDES.map((guide, idx) => {
            const Icon = guide.icon;
            const numText = language === "bn" ? guide.num.bn : guide.num.en;
            const titleText = language === "bn" ? guide.title.bn : guide.title.en;
            const descText = language === "bn" ? guide.description.bn : guide.description.en;

            return (
              <div
                key={idx}
                className="group relative bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-white/10 rounded-2xl p-4 flex items-start gap-3.5 shadow-none overflow-hidden"
              >
                {/* Left Accent Gradient Stripe */}
                <div
                  className={`absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b ${guide.color} opacity-90`}
                />

                {/* Icon */}
                <div className="shrink-0 relative z-10 pl-1">
                  <div className="w-11 h-11 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white truncate">
                      {titleText}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-bold font-mono bg-brand-50 dark:bg-white/10 text-brand-700 dark:text-brand-300 border border-brand-200/50 dark:border-white/5 shrink-0">
                      {numText}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                    {descText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop View: 3-Column Modern Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {GUIDES.map((guide, idx) => {
            const Icon = guide.icon;
            const numText = language === "bn" ? guide.num.bn : guide.num.en;
            const titleText = language === "bn" ? guide.title.bn : guide.title.en;
            const descText = language === "bn" ? guide.description.bn : guide.description.en;

            return (
              <div
                key={idx}
                className="group relative bg-white dark:bg-[#121214] border border-gray-200/80 dark:border-white/10 rounded-3xl p-7 lg:p-8 flex flex-col justify-between hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Background Large Number Watermark */}
                <span className="absolute -top-3 right-5 text-7xl font-black text-gray-100 dark:text-white/[0.03] select-none pointer-events-none group-hover:text-gray-200 dark:group-hover:text-white/[0.05] transition-colors duration-300 leading-none">
                  {numText}
                </span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                    <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2.5 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300">
                    {titleText}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {descText}
                  </p>
                </div>

                {/* Animated Bottom Border */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${guide.color} group-hover:w-full transition-all duration-500 ease-out`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/free-help"
            className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-brand-800 dark:hover:bg-brand-100 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-sm transition-all active:scale-[0.98]"
          >
            {t("Talk to a Consultant", "কনসালটেন্টের সাথে কথা বলুন")} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
