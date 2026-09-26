"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, Link as LinkIcon, UserPlus, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NetworkPage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#070709] pt-28 pb-16 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-brand-950 via-slate-950 to-gray-950 text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-network" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-network)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-300 text-xs font-bold uppercase tracking-wider mb-6 border border-white/15 backdrop-blur-md">
            <Users className="w-3.5 h-3.5" />
            <span>{t("Verified Human Network", "ভেরিফাইড হিউম্যান নেটওয়ার্ক")}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            {t("People Make the Network.", "মানুষের শক্তিতেই গড়ে ওঠে নেটওয়ার্ক।")}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t(
              "BRIIZZ is a living ecosystem of verified professionals, suppliers, and well-connected individuals working together across all 64 districts.",
              "BRIIZZ হলো ৬৪ জেলার দক্ষ প্রফেশনাল, বিশ্বস্ত সাপ্লায়ার এবং উদ্যোক্তাদের সমন্বয়ে গড়ে ওঠা একটি শক্তিশালী ওয়ান-স্টপ ইকোসিস্টেম।"
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link 
              href="/network/join" 
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-brand-500/25 transition-all hover:scale-[1.02]"
            >
              {t("Join the Network", "নেটওয়ার্কে যুক্ত হোন")}
            </Link>
            <Link 
              href="/solutions" 
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/15 transition-all"
            >
              {t("Explore Solutions", "সমাধান ক্যাটালগ")}
            </Link>
          </div>
        </div>
      </section>

      {/* Participation Methods */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
              {t("You Don't Have to Be a Provider to Contribute.", "কন্ট্রিবিউট করতে প্রোভাইডার হওয়াই একমাত্র শর্ত নয়।")}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {t("There are three primary ways to participate and unlock opportunities in the BRIIZZ network.", "BRIIZZ নেটওয়ার্কে যুক্ত হয়ে সুযোগ সৃষ্টি করার রয়েছে ৩টি প্রধান মাধ্যম।")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* 1. Providers */}
            <div className="bg-white dark:bg-[#121216] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col h-full border-t-4 border-t-brand-600 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mb-6 text-brand-600 dark:text-brand-400">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {t("Providers", "প্রোভাইডার")}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                <strong className="text-gray-900 dark:text-white">{t("Bring what you can deliver.", "আপনার সেবা সরাসরি প্রদান করুন।")}</strong><br/><br/>
                {t(
                  "If you offer high-quality services, supply hardware, or possess specialized expertise, join as a provider to get direct client matches.",
                  "আপনি যদি কোনো সার্ভিস, কাঁচামাল বা হার্ডওয়্যার সরবরাহ করেন, তবে প্রোভাইডার হিসেবে জয়েন করে সরাসরি নিশ্চিত ক্লায়েন্ট রিকোয়ারমেন্ট পান।"
                )}
              </p>
              <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-white/10 pt-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {t("Execute verified projects", "ভেরিফাইড প্রজেক্ট বাস্তবায়ন")}</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {t("Supply wholesale & goods", "পাইকারি পণ্য ও মালামাল সরবরাহ")}</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {t("Corporate consultancy", "কর্পোরেট কনসালটেন্সি")}</li>
              </ul>
              <Link href="/providers/join" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline">
                {t("Apply as Provider", "প্রোভাইডার হিসেবে আবেদন")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 2. Connectors */}
            <div className="bg-white dark:bg-[#121216] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col h-full border-t-4 border-t-blue-600 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <LinkIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {t("Connectors", "কানেক্টর")}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                <strong className="text-gray-900 dark:text-white">{t("Know someone who can help?", "দক্ষ কাউকে চেনেন?")}</strong><br/><br/>
                {t(
                  "You don't need to do the heavy work yourself. Refer verified agencies, vendors, or specialists to active requirements and earn network commission.",
                  "নিজে সরাসরি কাজ না করেও যদি দক্ষ ভেন্ডর বা প্রোভাইডারদের চেনেন, তাদের যুক্ত করে নেটওয়ার্ক রিওয়ার্ড ও কমিশন অর্জন করুন।"
                )}
              </p>
              <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-white/10 pt-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> {t("Refer qualified vendors", "বিশ্বস্ত ভেন্ডর রেফার করুন")}</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> {t("Facilitate partnerships", "পার্টনারশিপে সহায়তা করুন")}</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> {t("Earn recurring rewards", "রেফারেল রিওয়ার্ড পান")}</li>
              </ul>
              <Link href="/network/join" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">
                {t("Join as Connector", "কানেক্টর হিসেবে যুক্ত হোন")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3. Introducers */}
            <div className="bg-white dark:bg-[#121216] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col h-full border-t-4 border-t-emerald-600 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                <UserPlus className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {t("Introducers", "ইন্ট্রোডিউসার")}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                <strong className="text-gray-900 dark:text-white">{t("Know someone with a requirement?", "কারো কোনো সেবা প্রয়োজন?")}</strong><br/><br/>
                {t(
                  "If a friend, business partner, or client needs an app built, factory sourcing, or legal setup, submit the lead and let BRIIZZ handle fulfillment.",
                  "আপনার পরিচিত কারো যদি আইটি প্রজেক্ট, ফ্যাক্টরি সোর্সিং বা অফিস সেটআপের প্রয়োজন থাকে, তাদের রিকোয়ারমেন্ট সাবমিট করে ভ্যালু যোগ করুন।"
                )}
              </p>
              <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-white/10 pt-6">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {t("Submit client requirements", "ক্লায়েন্ট রিকোয়ারমেন্ট দিন")}</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {t("End-to-end fulfillment by BRIIZZ", "সম্পূর্ণ সমাধান দিবে BRIIZZ")}</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {t("Transparent tracking", "স্বচ্ছ ট্র্যাকিং সুবিধা")}</li>
              </ul>
              <Link href="/needs/new" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                {t("Introduce a Requirement", "রিকোয়ারমেন্ট পোস্ট করুন")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white dark:bg-[#0c0c10] border-t border-gray-200 dark:border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            {t("Ready to join the BRIIZZ ecosystem?", "BRIIZZ ইকোসিস্টেমে যুক্ত হতে প্রস্তুত?")}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            {t(
              "Create an account, set up your preferences, and start exploring opportunities or providing solutions immediately.",
              "অ্যাকাউন্ট তৈরি করুন, আপনার পছন্দ সেট করুন এবং অবিলম্বে সমাধান বা সুযোগ অন্বেষণ শুরু করুন।"
            )}
          </p>
          <Link href="/network/join" className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-lg shadow-brand-600/25 transition-all hover:scale-[1.02]">
            {t("Join the BRIIZZ Network", "BRIIZZ নেটওয়ার্কে যোগ দিন")}
          </Link>
        </div>
      </section>

    </div>
  );
}
