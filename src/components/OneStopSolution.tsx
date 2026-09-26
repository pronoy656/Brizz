"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Package, 
  Code, 
  TrendingUp, 
  Building2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Truck, 
  FileText,
  Briefcase
} from "lucide-react";

export default function OneStopSolution() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const pillars = [
    {
      id: "wholesale",
      title: { en: "Wholesale & Industrial Sourcing", bn: "পাইকারি কাঁচামাল ও সাপ্লাই" },
      category: { en: "Supply Chain", bn: "সাপ্লাই চেইন" },
      desc: { 
        en: "Source high-grade raw materials, industrial machinery, custom packaging, and bulk inventory with guaranteed delivery across 64 districts.", 
        bn: "উচ্চমানের কাঁচামাল, শিল্প যন্ত্রপাতি, কাস্টম প্যাকেজিং এবং বাল্ক পণ্য সরবরাহ নিশ্চিত করুন ৬৪ জেলার যেকোনো প্রান্তে।" 
      },
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
      href: "/solutions?category=wholesale",
      tags: [
        { en: "GPUs & PC Hardware", bn: "জিপিইউ ও কম্পিউটার" },
        { en: "Pakistani Dresses", bn: "পাকিস্তানি ড্রেস" },
        { en: "China Factory Sourcing", bn: "চায়না সরাসরি আমদানি" },
        { en: "Raw Materials", bn: "কাঁচামাল" }
      ],
      stat: { en: "500+ Verified Suppliers", bn: "৫০০+ ভেরিফাইড সাপ্লায়ার" },
      icon: Package,
      gradient: "from-blue-600/90 via-cyan-600/80 to-blue-900/90"
    },
    {
      id: "tech",
      title: { en: "Tech & Software Engineering", bn: "সফটওয়্যার ও ডিজিটাল সলিউশন" },
      category: { en: "Digital & IT", bn: "ডিজিটাল ও আইটি" },
      desc: { 
        en: "Custom enterprise software, high-speed Next.js web portals, iOS/Android apps, ERP automation, and cloud infrastructure tailored to your business.", 
        bn: "কাস্টম এন্টারপ্রাইজ সফটওয়্যার, আধুনিক ওয়েবসাইট, মোবাইল অ্যাপ, ইআরপি এবং ক্লাউড অটোমেশন আপনার ব্যবসার প্রয়োজন অনুযায়ী।" 
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      href: "/solutions?category=tech",
      tags: [
        { en: "Web & Mobile Apps", bn: "ওয়েব ও মোবাইল অ্যাপ" },
        { en: "Enterprise ERP & CRM", bn: "ইআরপি ও সিআরএম" },
        { en: "Cloud & APIs", bn: "ক্লাউড ও এপিআই" },
        { en: "UI/UX Engineering", bn: "ইউআই/ইউএক্স ডিজাইন" }
      ],
      stat: { en: "Modern Tech Stack", bn: "আধুনিক টেক স্ট্যাক" },
      icon: Code,
      gradient: "from-purple-600/90 via-indigo-600/80 to-purple-900/90"
    },
    {
      id: "realestate",
      title: { en: "Commercial Space & Interior", bn: "অফিস স্পেস, ইন্টেরিয়র ও কনস্ট্রাকশন" },
      category: { en: "Infrastructure", bn: "ইনফ্রাস্ট্রাকচার" },
      desc: { 
        en: "Turnkey office layouts, acoustic architectural interiors, commercial furniture, certified construction materials, and verified space leasing.", 
        bn: "টার্নকি অফিস ইন্টেরিয়র, আধুনিক ফার্নিচার, সার্টিফাইড নির্মাণ সামগ্রী এবং বাণিজ্যিক স্পেস সোর্সিং ও লিগ্যাল লিজ সহায়তা।" 
      },
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
      href: "/solutions?category=real-estate",
      tags: [
        { en: "Office Interior & Fitouts", bn: "অফিস ইন্টেরিয়র" },
        { en: "Commercial Furniture", bn: "বাণিজ্যিক ফার্নিচার" },
        { en: "Building Materials", bn: "নির্মাণ সামগ্রী" },
        { en: "Space Sourcing", bn: "স্পেস সোর্সিং" }
      ],
      stat: { en: "Turnkey Workspace", bn: "টার্নকি ওয়ার্কস্পেস" },
      icon: Building2,
      gradient: "from-amber-600/90 via-orange-600/80 to-rose-900/90"
    },
    {
      id: "business",
      title: { en: "Legal, Tax & Growth Advisory", bn: "আইনি লাইসেন্স, ট্যাক্স ও গ্রোথ" },
      category: { en: "Corporate Advisory", bn: "কর্পোরেট অ্যাডভাইজরি" },
      desc: { 
        en: "Company registration, trade licenses, VAT/tax filing, trademark protection, executive recruitment, and performance growth marketing.", 
        bn: "কোম্পানি নিবন্ধন, ট্রেড লাইসেন্স, ভ্যাট ও ট্যাক্স ফাইলিং, ট্রেডমার্ক ও আইপি, ট্যালেন্ট হায়ার এবং রেজাল্ট-ওরিয়েন্টেড মার্কেটিং।" 
      },
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
      href: "/solutions?category=business",
      tags: [
        { en: "RJSC & Trade License", bn: "আরজেএসসি ও ট্রেড লাইসেন্স" },
        { en: "Tax & VAT Compliance", bn: "ট্যাক্স ও ভ্যাট ফাইলিং" },
        { en: "Growth Marketing", bn: "গ্রোথ মার্কেটিং" },
        { en: "HR & Recruitment", bn: "এইচআর ও রিক্রুটমেন্ট" }
      ],
      stat: { en: "100% Compliant", bn: "১০০% কমপ্লায়েন্ট" },
      icon: TrendingUp,
      gradient: "from-emerald-600/90 via-teal-600/80 to-emerald-950/90"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-[#070709] transition-colors duration-300 relative overflow-hidden border-y border-gray-100 dark:border-white/5">
      
      {/* Background Lighting Accents */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-800 dark:text-brand-400 text-xs sm:text-sm font-bold mb-6 uppercase tracking-wider border border-brand-100 dark:border-brand-500/20 shadow-sm backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-brand-500 animate-pulse" />
            <span>{t("Integrated Ecosystem", "সমন্বিত ওয়ান-স্টপ ইকোসিস্টেম")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
            {t("Your Ultimate", "আপনার পূর্ণাঙ্গ")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-teal-500 dark:from-brand-400 dark:via-indigo-400 dark:to-teal-300">
              {t("One-Stop Solution", "ওয়ান-স্টপ সমাধান")}
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {t(
              "Stop juggling dozens of unverified vendors. BRIIZZ connects your business to raw materials, digital engineering, workspace setups, and corporate growth under one single roof.",
              "আলাদা আলাদা ভেন্ডরের ঝামেলা ভুলে যান। কাঁচামাল সংগ্রহ, সফটওয়্যার ও ডিজিটাল ডেভেলপমেন্ট, অফিস সেটআপ এবং ব্যবসায়িক পরামর্শ—সব সমাধান পান এক প্ল্যাটফর্মে।"
            )}
          </p>
        </div>

        {/* 4-Pillar Visual Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const pTitle = language === "bn" ? pillar.title.bn : pillar.title.en;
            const pDesc = language === "bn" ? pillar.desc.bn : pillar.desc.en;
            const pCategory = language === "bn" ? pillar.category.bn : pillar.category.en;
            const pStat = language === "bn" ? pillar.stat.bn : pillar.stat.en;

            return (
              <div 
                key={pillar.id}
                className="group relative rounded-3xl md:rounded-[2.5rem] bg-gray-900 text-white overflow-hidden border border-gray-800 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between min-h-[440px] sm:min-h-[480px]"
              >
                {/* Background Photography with Zoom Hover */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pTitle}
                    className="w-full h-full object-cover opacity-35 dark:opacity-25 group-hover:scale-105 group-hover:opacity-45 dark:group-hover:opacity-35 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/85 to-gray-900/40 pointer-events-none"></div>
                </div>

                {/* Top Row: Category Badge & Stat */}
                <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 dark:bg-black/50 backdrop-blur-md border border-white/15 text-xs font-bold text-gray-200">
                    <Icon className="w-4 h-4 text-brand-400" />
                    <span>{pCategory}</span>
                  </div>

                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-400/30 backdrop-blur-md">
                    {pStat}
                  </span>
                </div>

                {/* Body Content */}
                <div className="relative z-10 p-6 sm:p-8 pt-0 mt-auto flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight group-hover:text-brand-300 transition-colors">
                    {pTitle}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                    {pDesc}
                  </p>

                  {/* Sub-Capability Quick Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pillar.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-3 py-1 rounded-xl text-xs font-medium bg-white/10 hover:bg-white/20 text-gray-200 border border-white/10 backdrop-blur-sm transition-colors"
                      >
                        {language === "bn" ? tag.bn : tag.en}
                      </span>
                    ))}
                  </div>

                  {/* Direct Link Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link 
                      href={pillar.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-brand-300 transition-colors"
                    >
                      <span>{t("Explore Solutions", "বিস্তারিত সমাধান দেখুন")}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 text-brand-400" />
                    </Link>

                    <Link 
                      href={`/needs/new?category=${pillar.id}`}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/15 transition-all backdrop-blur-md"
                    >
                      {t("Post Requirement", "রিকোয়ারমেন্ট দিন")}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Value Guarantee Highlights */}
        <div className="rounded-3xl bg-gray-50 dark:bg-[#121216] border border-gray-200/80 dark:border-white/10 p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 border border-brand-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
                {t("Single Accountability", "একক জবাবদিহিতা")}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t(
                  "You deal directly with BRIIZZ. We coordinate multiple suppliers and specialists so you get seamless delivery.",
                  "একাধিক ভেন্ডর খোঁজার ঝামেলা নেই। BRIIZZ সম্পূর্ণ কোঅর্ডিনেশন ও সফল ডেলিভারি নিশ্চিত করে।"
                )}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 border border-indigo-500/20">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
                {t("Milestone Protection", "মাইলস্টোন ও পেমেন্ট নিরাপত্তা")}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t(
                  "Funds and transactions are secured. Payments are released only when quality standards are met.",
                  "কাজের মান এবং ডেলিভারি সন্তোষজনক হলে তবেই পেমেন্ট কার্যকর হয়। আপনার বিনিয়োগ সম্পূর্ণ নিরাপদ।"
                )}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0 border border-teal-500/20">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
                {t("64 Districts Execution", "৬৪ জেলায় কার্যকর বাস্তবায়ন")}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t(
                  "Whether in Dhaka or any remote district, our verified network delivers with consistent tier-1 quality.",
                  "ঢাকা থেকে শুরু করে প্রত্যন্ত জেলা পর্যন্ত একই মানের পেশাদার সেবা ও সাপ্লাই সরবরাহ।"
                )}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
