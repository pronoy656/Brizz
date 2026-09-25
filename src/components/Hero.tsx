"use client";

import Link from "next/link";
import { ArrowRight, Play, Lightbulb } from "lucide-react";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden font-sans border-b border-gray-100 dark:border-white/10 text-gray-900 dark:text-white transition-colors duration-300 min-h-[90vh] flex items-center">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-forward {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-backward {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-delayed {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }

        .animate-spin-1 { animation: spin-forward 70s linear infinite; }
        .animate-spin-2 { animation: spin-backward 85s linear infinite; }
        .animate-spin-3 { animation: spin-forward 100s linear infinite; }
        .animate-spin-4 { animation: spin-backward 115s linear infinite; }
        .animate-spin-5 { animation: spin-forward 130s linear infinite; }

        .glass-panel {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        .dark .glass-panel {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}} />

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-100/50 dark:bg-brand-600/20 rounded-full blur-[80px] dark:blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none transition-colors duration-300 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/50 dark:bg-indigo-600/20 rounded-full blur-[80px] dark:blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none transition-colors duration-300 z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-100/50 dark:bg-purple-600/20 rounded-full blur-[80px] dark:blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none transition-colors duration-300 z-0"></div>

      {/* Solar System Background (Half visible from bottom) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[45%] w-[180vw] sm:w-[130vw] md:w-[110vw] max-w-[1500px] aspect-square flex items-center justify-center pointer-events-none z-10 opacity-90">
        
        {/* Rotating Rings */}
        <div className="w-[100%] h-[100%] rounded-full border-[1.5px] border-brand-300/60 dark:border-brand-500/40 absolute animate-spin-1 transition-colors duration-300"></div>
        <div className="w-[82%] h-[82%] rounded-full border-[1.5px] border-indigo-300/60 dark:border-indigo-500/40 absolute animate-spin-2 transition-colors duration-300"></div>
        <div className="w-[64%] h-[64%] rounded-full border-[1.5px] border-purple-300/60 dark:border-purple-500/40 absolute animate-spin-3 transition-colors duration-300"></div>
        <div className="w-[46%] h-[46%] rounded-full border-[1.5px] border-brand-300/60 dark:border-brand-500/40 absolute animate-spin-4 transition-colors duration-300"></div>
        <div className="w-[28%] h-[28%] rounded-full border-[1.5px] border-indigo-300/60 dark:border-indigo-500/40 absolute animate-spin-5 transition-colors duration-300"></div>

        {/* Static Nodes with Float Animation */}
        
        {/* Node 1: People */}
        <div className="absolute top-[50%] right-[10%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="animate-float">
            <div className="glass-panel rounded-2xl p-2 pr-5 flex items-center gap-3 shadow-xl">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-10 h-10 rounded-xl object-cover" alt="People" />
              <div className="flex flex-col whitespace-nowrap">
                <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{t("People", "মানুষ")}</span>
                <span className="text-[10px] font-medium text-gray-500 dark:text-brand-300">{t("Real connections", "আসল কানেকশন")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Node 2: Providers */}
        <div className="absolute top-[10%] right-[10%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="animate-float-delayed">
            <div className="glass-panel rounded-2xl p-2 pr-5 flex items-center gap-3 shadow-xl">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-xl object-cover" alt="Providers" />
              <div className="flex flex-col whitespace-nowrap">
                <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{t("Providers", "প্রোভাইডার")}</span>
                <span className="text-[10px] font-medium text-gray-500 dark:text-brand-300">{t("Verified & trusted", "ভেরিফাইড")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Node 3: Solutions */}
        <div className="absolute top-[15%] left-[15%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="animate-float">
            <div className="glass-panel rounded-2xl p-2 pr-5 flex items-center gap-3 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-300 flex items-center justify-center border border-purple-500/30">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{t("Solutions", "সমাধান")}</span>
                <span className="text-[10px] font-medium text-purple-600 dark:text-purple-300">{t("Make it happen", "বাস্তবায়ন")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Node 4: Opportunities */}
        <div className="absolute top-[30%] right-[5%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="animate-float-delayed">
            <div className="glass-panel rounded-2xl p-2 pr-5 flex items-center gap-3 shadow-xl">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-xl object-cover" alt="Opportunities" />
              <div className="flex flex-col whitespace-nowrap">
                <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{t("Opportunities", "সুযোগ")}</span>
                <span className="text-[10px] font-medium text-gray-500 dark:text-brand-300">{t("Grow together", "একসাথে বৃদ্ধি")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Node 5: Needs */}
        <div className="absolute top-[40%] left-[5%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="animate-float">
            <div className="glass-panel rounded-2xl p-2 pr-5 flex items-center gap-3 shadow-xl">
              <img src="https://randomuser.me/api/portraits/men/46.jpg" className="w-10 h-10 rounded-xl object-cover" alt="Needs" />
              <div className="flex flex-col whitespace-nowrap">
                <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{t("Needs", "প্রয়োজন")}</span>
                <span className="text-[10px] font-medium text-gray-500 dark:text-brand-300">{t("Discover & share", "খুঁজুন ও শেয়ার করুন")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-30">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center mt-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-brand-800 dark:text-brand-300 text-xs md:text-sm font-semibold mb-6 shadow-sm dark:shadow-xl uppercase tracking-widest transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            {t("Your Network. Your Possibilities.", "আপনার নেটওয়ার্ক। আপনার সম্ভাবনা।")}
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl lg:text-[4.5rem] font-bold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight transition-colors duration-300">
            {t("The", "আপনার")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">{t("One-Stop Solution", "ওয়ান-স্টপ সমাধান")}</span><br className="hidden md:block"/>
            {t("for the right", "সঠিক")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">{t("people", "মানুষ")}</span> {t("&", "এবং")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">{t("providers", "প্রোভাইডার")}</span>.
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-light transition-colors duration-300 max-w-2xl">
            {t("BRIIZZ connects you with trusted professionals, verified providers and real opportunities — helping you move forward, faster.", "ব্রীজ আপনাকে বিশ্বস্ত পেশাদার, ভেরিফাইড প্রোভাইডার এবং সত্যিকারের সুযোগের সাথে যুক্ত করে — যা আপনাকে আরও দ্রুত এগিয়ে যেতে সাহায্য করবে।")}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12 w-full">
            <Link href="/explore" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]">
              {t("Explore The Network", "নেটওয়ার্ক এক্সপ্লোর করুন")} <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="group relative overflow-hidden w-full sm:w-auto px-8 py-4 rounded-xl glass-panel border-2 border-brand-600 dark:border-brand-500 text-gray-900 dark:text-white font-semibold flex items-center justify-center transition-all hover:text-white dark:hover:text-white">
              <span className="absolute inset-0 bg-brand-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in"></span>
              <span className="relative flex items-center gap-2">
                <Play className="w-5 h-5 fill-brand-800 dark:fill-white group-hover:fill-white transition-colors duration-300" /> {t("Watch Demo", "ডেমো দেখুন")}
              </span>
            </button>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center gap-5 glass-panel p-4 rounded-2xl w-fit mx-auto">
            <div className="flex -space-x-4">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-12 h-12 rounded-full border-2 border-white dark:border-[#0a0a0a] object-cover z-40 shadow-sm" alt="User 1"/>
              <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-12 h-12 rounded-full border-2 border-white dark:border-[#0a0a0a] object-cover z-30 shadow-sm" alt="User 2"/>
              <img src="https://randomuser.me/api/portraits/men/46.jpg" className="w-12 h-12 rounded-full border-2 border-white dark:border-[#0a0a0a] object-cover z-20 shadow-sm" alt="User 3"/>
              <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-12 h-12 rounded-full border-2 border-white dark:border-[#0a0a0a] object-cover z-10 shadow-sm" alt="User 4"/>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-gray-900 dark:text-white transition-colors">{t("Join 50,000+ users", "৫০,০০০+ ব্যবহারকারীদের সাথে যুক্ত হোন")}</span>
              <span className="text-xs text-gray-600 dark:text-brand-300 font-medium transition-colors">{t("Building better connections.", "গড়ে তুলুন উন্নত কানেকশন।")}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

