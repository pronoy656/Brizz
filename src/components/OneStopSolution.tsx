"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Package, Code, TrendingUp, ArrowRight, Zap, Target, Layers } from "lucide-react";

const features = [
  {
    id: "supply",
    icon: <Package className="w-8 h-8" />,
    title: { en: "Wholesale & Supply", bn: "পাইকারি ও সাপ্লাই" },
    desc: { en: "Need materials or products for your business? We provide seamless wholesale & supply solutions to keep your operations running smoothly at scale.", bn: "আপনার ব্যবসার জন্য কাঁচামাল বা প্রোডাক্ট প্রয়োজন? আপনার কার্যক্রম সচল রাখতে আমরা সরবরাহ করি পাইকারি ও সাপ্লাই সলিউশন।" },
    color: "from-blue-500 to-cyan-400",
    bgLight: "bg-blue-50 dark:bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    align: "left",
    stats: { en: "500+ Suppliers", bn: "৫০০+ সাপ্লায়ার" },
    tagIcon: <Layers className="w-4 h-4" />
  },
  {
    id: "tech",
    icon: <Code className="w-8 h-8" />,
    title: { en: "Tech & IT Solutions", bn: "টেক ও আইটি সমাধান" },
    desc: { en: "Ready to scale online? Get custom websites, apps, and enterprise digital tools tailored specifically for your unique business needs.", bn: "অনলাইনে ব্যবসা বড় করতে প্রস্তুত? আপনার ব্যবসার প্রয়োজন অনুযায়ী ওয়েবসাইট, অ্যাপ এবং ডিজিটাল টুলস তৈরি করে নিন।" },
    color: "from-brand-500 to-purple-500",
    bgLight: "bg-brand-50 dark:bg-brand-500/10",
    iconColor: "text-brand-600 dark:text-brand-400",
    align: "right",
    stats: { en: "Modern Tech Stack", bn: "মডার্ন টেক স্ট্যাক" },
    tagIcon: <Zap className="w-4 h-4" />
  },
  {
    id: "consultancy",
    icon: <TrendingUp className="w-8 h-8" />,
    title: { en: "Business Consultancy", bn: "বিজনেস কনসালটেন্সি" },
    desc: { en: "From zero to future success. Our expert consultants guide you through every step of your growth journey with actionable data insights.", bn: "শূন্য থেকে ভবিষ্যতের সাফল্যের পথে। আমাদের এক্সপার্ট কনসালটেন্টরা আপনার ব্যবসার প্রতিটি পদক্ষেপে সঠিক গাইডলাইন দেবে।" },
    color: "from-orange-500 to-rose-500",
    bgLight: "bg-orange-50 dark:bg-orange-500/10",
    iconColor: "text-orange-600 dark:text-orange-400",
    align: "left",
    stats: { en: "Actionable Insights", bn: "কার্যকরী ইনসাইটস" },
    tagIcon: <Target className="w-4 h-4" />
  }
];

export default function OneStopSolution() {
  const { t, language } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // Dynamic trigger point based on window height
        const offset = window.innerHeight * 0.7; 
        const scrolled = offset - rect.top;
        
        let progress = (scrolled / rect.height) * 100;
        progress = Math.max(0, Math.min(progress, 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="py-32 bg-gray-50 dark:bg-[#050505] transition-colors duration-300 relative border-y border-gray-200 dark:border-white/5 overflow-hidden" ref={containerRef}>
      
      {/* Premium Ambient Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="text-center max-w-4xl mx-auto mb-32">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm text-brand-700 dark:text-brand-300 text-sm font-bold mb-8 uppercase tracking-widest backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
            {t("The Complete Journey", "সম্পূর্ণ সলিউশন যাত্রা")}
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.1]">
            {t("Your Ultimate", "আপনার একমাত্র")} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-500 to-purple-600 dark:from-brand-400 dark:via-indigo-400 dark:to-purple-400">
              {t("One-Stop Solution", "ওয়ান-স্টপ সমাধান")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
            {t("Follow the path. We bring everything you need together. From raw materials to digital presence and expert consultancy.", "আমাদের সাথে চলুন। আপনার যা কিছু প্রয়োজন তার সবই আমরা একসাথে নিয়ে এসেছি। কাঁচামাল থেকে শুরু করে ডিজিটাল প্রেজেন্স এবং এক্সপার্ট পরামর্শ।")}
          </p>
        </div>

        {/* Winding Road / Timeline Layout */}
        <div className="relative max-w-5xl mx-auto pb-10">
          
          {/* Main Road Track */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-0 w-1.5 md:-ml-[3px] bg-gray-200 dark:bg-white/5 rounded-full"></div>
          
          {/* Glowing Progress Line */}
          <div 
            className="absolute left-8 md:left-1/2 top-4 w-1.5 md:-ml-[3px] bg-gradient-to-b from-brand-500 via-indigo-500 to-rose-500 rounded-full transition-all duration-300 ease-out z-0 shadow-[0_0_30px_rgba(139,92,246,0.8)]"
            style={{ height: `${scrollProgress}%` }}
          >
            {/* The Leading Spark on the line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full shadow-[0_0_25px_10px_rgba(139,92,246,0.7)] border-4 border-brand-500"></div>
          </div>

          {features.map((feature, idx) => {
            const activationPoint = idx * 28; // slightly earlier trigger
            const isActive = scrollProgress > activationPoint;
            const isLeft = feature.align === 'left';
            
            return (
              <div key={feature.id} className={`relative flex flex-col md:flex-row items-center mb-28 md:mb-40 last:mb-0 ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Node Point on the Road */}
                <div className={`absolute left-8 md:left-1/2 -ml-3 md:-ml-4 top-12 md:top-1/2 md:-mt-4 w-8 h-8 rounded-full border-[5px] z-20 transition-all duration-700 ${
                  isActive 
                    ? 'border-brand-500 bg-white dark:bg-[#0a0a0a] scale-125 shadow-[0_0_20px_rgba(139,92,246,0.5)]' 
                    : 'border-gray-300 dark:border-gray-800 bg-gray-100 dark:bg-gray-900'
                }`}>
                  {isActive && (
                    <div className="absolute inset-0 rounded-full animate-ping bg-brand-500 opacity-50 duration-1000"></div>
                  )}
                  {isActive && (
                    <div className="absolute inset-1.5 rounded-full bg-brand-500"></div>
                  )}
                </div>

                {/* Card Container */}
                <div className={`w-full pl-24 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-24' : 'md:pl-24'}`}>
                  
                  {/* The Premium Card */}
                  <div className={`group relative p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-[#0f0f11] border border-gray-200 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
                    ${isActive 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : (isLeft ? '-translate-x-16 opacity-0 scale-95' : 'translate-x-16 opacity-0 scale-95')
                    } hover:-translate-y-2 hover:shadow-2xl`}
                  >
                    {/* Inner Ambient Glow */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-[0.15] transition-opacity duration-700 bg-gradient-to-br ${feature.color} rounded-[2.5rem] pointer-events-none`}></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Top Header Row of Card */}
                      <div className="flex items-start justify-between mb-8">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.color} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                          {feature.icon}
                        </div>
                        
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${feature.bgLight} border border-gray-200 dark:border-white/10`}>
                          <span className={`${feature.iconColor}`}>
                            {feature.tagIcon}
                          </span>
                          <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                            {language === 'bn' ? feature.stats.bn : feature.stats.en}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                        {language === 'bn' ? feature.title.bn : feature.title.en}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10 flex-1">
                        {language === 'bn' ? feature.desc.bn : feature.desc.en}
                      </p>

                      {/* Action Button */}
                      <div className="mt-auto">
                        <button className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 
                          bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 border border-gray-200 dark:border-white/5`}>
                          {t("Explore Solution", "আরও জানুন")} 
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Empty space for the other half */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
