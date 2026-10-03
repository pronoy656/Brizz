"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Code2, 
  Server, 
  Palette, 
  TrendingUp,
  Sparkles,
  ExternalLink,
  Lock
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const EXPERT_PARTNERS = [
  {
    id: "software",
    code: "BRZ-P-001248",
    name: "ABC Digital Solutions",
    domain: "Web, Cloud & App Engineering",
    domainBn: "ওয়েব, ক্লাউড ও অ্যাপ ইঞ্জিনিয়ারিং",
    rating: "4.8",
    ratingBn: "৪.৮",
    projects: "27+ Delivered",
    projectsBn: "২৭+ ডেলিভার্ড",
    location: "Dhaka",
    locationBn: "ঢাকা",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&auto=format&fit=crop&q=80",
    keyDeliverable: "Enterprise Next.js SaaS & Mobile App",
    keyDeliverableBn: "এন্টারপ্রাইজ নেক্সট জেএস ও মোবাইল অ্যাপ",
    techStack: ["Next.js", "Flutter", "PostgreSQL", "AWS"],
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    accentGradient: "from-blue-600 to-indigo-600"
  },
  {
    id: "hardware",
    code: "BRZ-P-002194",
    name: "ByteTech Hardware & Systems",
    domain: "Hardware & Office Infrastructure",
    domainBn: "হার্ডওয়্যার ও অফিস ইনফ্রাস্ট্রাকচার",
    rating: "4.9",
    ratingBn: "৪.৯",
    projects: "65+ Delivered",
    projectsBn: "৬৫+ ডেলিভার্ড",
    location: "Dhaka",
    locationBn: "ঢাকা",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&auto=format&fit=crop&q=80",
    keyDeliverable: "Multi-Floor MikroTik Wi-Fi & IP CCTV",
    keyDeliverableBn: "মাল্টি-ফ্লোর মাইক্রোটিক ওয়াইফাই ও সিসিটিভি",
    techStack: ["MikroTik", "Hikvision IP", "Cat6 Mesh", "Biometrics"],
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    accentGradient: "from-emerald-600 to-teal-600"
  },
  {
    id: "creative",
    code: "BRZ-P-003482",
    name: "Studio Prism Visuals",
    domain: "Creative Brand & 4K Cinema",
    domainBn: "ক্রিয়েটিভ ব্র্যান্ডিং ও ৪কে ভিডিও",
    rating: "4.9",
    ratingBn: "৪.৯",
    projects: "38+ Delivered",
    projectsBn: "৩৮+ ডেলিভার্ড",
    location: "Chattogram",
    locationBn: "চট্টগ্রাম",
    heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=700&auto=format&fit=crop&q=80",
    keyDeliverable: "Cinematic Brand Film & Visual Identity",
    keyDeliverableBn: "সিনেমাটিক ব্র্যান্ড ফিল্ম ও ভিজ্যুয়াল আইডেন্টিটি",
    techStack: ["4K TVC", "Brand Guideline", "Figma UI", "Studio Shoot"],
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    accentGradient: "from-purple-600 to-pink-600"
  }
];

export default function ExpertiseShowcase() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const displayedList = activeCategory === "all" 
    ? EXPERT_PARTNERS 
    : EXPERT_PARTNERS.filter(p => p.id === activeCategory);

  return (
    <section id="expertise-network" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#080b12] dark:via-[#0c101b] dark:to-[#080b12] relative overflow-hidden transition-colors duration-300">
      
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none translate-y-1/2"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-2">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t("Verified Partner Ecosystem", "ভেরিফায়েড পার্টনার ইকোসিস্টেম")}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {t("Our Core Expertise & Verified Profiles", "আমাদের স্পেশালাইজড এক্সপার্টাইজ ও ভেরিফায়েড পার্টনার")}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {t(
                "We connect your requirement with pre-vetted agencies and proven specialists. Every project is executed with strict quality supervision and milestone escrow.",
                "আপনার কাজের জন্য আমরা সরাসরি যাচাইকৃত বিশেষজ্ঞ ও শীর্ষ এজেন্সির সাথে সমন্বয় করি—যা কাজের সর্বোচ্চ মান ও নিরাপদ ডেলিভারি নিশ্চিত করে।"
              )}
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/expertise"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl sm:rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-950 font-extrabold text-sm shadow-xl shadow-slate-900/10 dark:shadow-none transition-all hover:scale-[1.02] w-full md:w-auto"
            >
              <span>{t("Explore Partner Directory", "পার্টনার ডিরেক্টরি দেখুন")}</span>
              <ArrowRight className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
            </Link>
          </div>
        </div>

        {/* 3 Spacious, High-Impact Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {displayedList.map((partner) => (
            <div
              key={partner.id}
              className="group relative bg-white dark:bg-[#111622] rounded-2xl sm:rounded-[2rem] border border-slate-200/80 dark:border-white/10 p-5 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
            >
              {/* Hover Glow Edge */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${partner.accentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="space-y-5">
                
                {/* Visual Deliverable Showcase Banner */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-white/5">
                  <img
                    src={partner.heroImage}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  
                  {/* Top Overlay Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-mono text-[10px] font-extrabold text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                      {partner.code}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-black text-emerald-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/40">
                      <CheckCircle2 className="w-3 h-3 fill-emerald-500 text-slate-950" />
                      {t("VERIFIED", "ভেরিফায়েড")}
                    </span>
                  </div>

                  {/* Bottom Image Tag */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[11px] font-bold text-white/80 uppercase tracking-wider">
                      {t("Recent Deliverable", "সাম্প্রতিক কাজ")}
                    </p>
                    <p className="text-xs font-black text-white truncate">
                      {language === "bn" ? partner.keyDeliverableBn : partner.keyDeliverable}
                    </p>
                  </div>
                </div>

                {/* Partner Details */}
                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                    {language === "bn" ? partner.domainBn : partner.domain}
                  </p>
                </div>

                {/* Quick Trust Metas */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-1 text-amber-500 font-black">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{language === "bn" ? partner.ratingBn : partner.rating}</span>
                  </div>
                  <span className="text-slate-300 dark:text-slate-700">|</span>
                  <div className="text-slate-600 dark:text-slate-300">
                    {language === "bn" ? partner.projectsBn : partner.projects}
                  </div>
                  <span className="text-slate-300 dark:text-slate-700">|</span>
                  <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3 h-3 text-rose-500" />
                    <span>{language === "bn" ? partner.locationBn : partner.location}</span>
                  </div>
                </div>

                {/* Clean Tech / Skill Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {partner.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Action */}
              <div className="pt-5 mt-5 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-500" />
                  {t("Escrow Protected", "এসক্রো সুরক্ষিত")}
                </span>

                <Link
                  href="/expertise"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>{t("View Profile", "প্রোফাইল দেখুন")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
