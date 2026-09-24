"use client";

import React from "react";
import Link from "next/link";
import { Building2, Rocket, User, Users, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SolutionsForEveryone() {
  const { t } = useLanguage();

  const solutions = [
    {
      id: "business",
      title: t("Business", "ব্যবসা"),
      subtitle: t("Run Better.", "আরও ভালোভাবে পরিচালনা করুন।"),
      description: t("Technology, infrastructure, marketing, operations, creative, and specialized business solutions.", "প্রযুক্তি, ইনফ্রাস্ট্রাকচার, মার্কেটিং, অপারেশন, ক্রিয়েটিভ এবং স্পেশালাইজড বিজনেস সল্যুশন।"),
      linkText: t("Explore Business Solutions", "বিজনেস সল্যুশন দেখুন"),
      linkHref: "/solutions/business",
      icon: Building2,
      color: "blue",
    },
    {
      id: "startups",
      title: t("Startups", "স্টার্টআপ"),
      subtitle: t("Build Faster.", "আরও দ্রুত তৈরি করুন।"),
      description: t("Build, launch, automate, market, and grow your startup with fewer disconnected vendors.", "ভিন্ন ভিন্ন ভেন্ডরের ঝামেলা ছাড়াই আপনার স্টার্টআপ তৈরি, লঞ্চ, অটোমেট, মার্কেট এবং গ্রো করুন।"),
      linkText: t("Explore Startup Solutions", "স্টার্টআপ সল্যুশন দেখুন"),
      linkHref: "/solutions/startups",
      icon: Rocket,
      color: "purple",
    },
    {
      id: "individuals",
      title: t("Individuals", "ব্যক্তিগত"),
      subtitle: t("Make It Easier.", "জীবন সহজ করুন।"),
      description: t("Personal technology, creative services, events, sourcing, and everyday requirements.", "পার্সোনাল টেকনোলজি, ক্রিয়েটিভ সার্ভিস, ইভেন্ট, সোর্সিং এবং দৈনন্দিন জীবনের প্রয়োজনীয়তা।"),
      linkText: t("Explore Personal Solutions", "পার্সোনাল সল্যুশন দেখুন"),
      linkHref: "/solutions/individuals",
      icon: User,
      color: "emerald",
    },
    {
      id: "organizations",
      title: t("Organizations", "প্রতিষ্ঠান"),
      subtitle: t("Stay Supported.", "সাপোর্ট নিয়ে এগিয়ে চলুন।"),
      description: t("Reliable technology, professional, creative, procurement, and operational solutions.", "নির্ভরযোগ্য প্রযুক্তি, প্রফেশনাল, ক্রিয়েটিভ, প্রকিউরমেন্ট এবং অপারেশনাল সল্যুশন।"),
      linkText: t("Explore Organization Solutions", "অর্গানাইজেশন সল্যুশন দেখুন"),
      linkHref: "/solutions/organizations",
      icon: Users,
      color: "orange",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500";
      case "purple":
        return "bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500";
      case "emerald":
        return "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-500";
      case "orange":
        return "bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600 group-hover:text-white dark:group-hover:bg-orange-500";
      default:
        return "bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white dark:group-hover:bg-brand-500";
    }
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0f0f11] transition-colors duration-300 relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-800 dark:text-brand-400 mb-4 transition-colors">
            {t("Who We Help", "কাদের জন্য আমাদের সেবা")}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
            {t("Solutions For", "সমাধান")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">{t("Everyone", "সবার জন্য")}</span>
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
            {t("Whether you are a growing business, a fast-moving startup, an individual, or a large organization—we have the right network of providers ready to help.", "আপনি একটি ক্রমবর্ধমান ব্যবসা, দ্রুত-গতিসম্পন্ন স্টার্টআপ, একজন ব্যক্তি বা একটি বড় প্রতিষ্ঠান যা-ই হোন না কেন—আপনাকে সাহায্য করার জন্য আমাদের কাছে রয়েছে সঠিক প্রোভাইডারদের নেটওয়ার্ক।")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {solutions.map((item) => (
            <Link 
              href={item.linkHref} 
              key={item.id}
              className="group flex flex-col bg-white dark:bg-[#18181b] border border-gray-100 dark:border-white/5 rounded-3xl p-8 hover:shadow-xl dark:hover:shadow-[0_10px_40px_rgba(139,92,246,0.1)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${getColorClasses(item.color)}`}>
                <item.icon className="w-7 h-7" />
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4 transition-colors">
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow transition-colors">
                {item.description}
              </p>

              {/* Action Link */}
              <div className="flex items-center text-sm font-bold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mt-auto">
                {item.linkText} 
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
