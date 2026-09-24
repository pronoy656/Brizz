"use client";

import Link from "next/link";
import { ArrowRight, Play, Lightbulb } from "lucide-react";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden font-sans border-b border-gray-100 dark:border-white/10 text-gray-900 dark:text-white transition-colors duration-300">
      <style dangerouslySetInnerHTML={{__html: `
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
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
        .animate-spin-slow { animation: orbit 60s linear infinite; }
        .animate-spin-slow-reverse { animation: orbit 80s linear infinite reverse; }
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
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-100/50 dark:bg-brand-600/20 rounded-full blur-[80px] dark:blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none transition-colors duration-300"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/50 dark:bg-indigo-600/20 rounded-full blur-[80px] dark:blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none transition-colors duration-300"></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-100/50 dark:bg-purple-600/20 rounded-full blur-[80px] dark:blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none transition-colors duration-300"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl mx-auto lg:mx-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-brand-800 dark:text-brand-300 text-xs md:text-sm font-semibold mb-6 shadow-sm dark:shadow-xl uppercase tracking-widest transition-colors duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              {t("Your Network. Your Possibilities.", "আপনার নেটওয়ার্ক। আপনার সম্ভাবনা।")}
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl lg:text-[4rem] font-bold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight transition-colors duration-300">
              {t("Find the right", "সঠিক")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">{t("people", "মানুষ")}</span>, <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">{t("providers", "প্রোভাইডার")}</span> {t("&", "এবং")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">{t("solutions", "সমাধান")}</span><br className="hidden md:block"/>
              {t("— all in one place.", "খুঁজে নিন এক জায়গায়।")}
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-light transition-colors duration-300">
              {t("BRIIZZ connects you with trusted professionals, verified providers and real opportunities — helping you move forward, faster.", "ব্রীজ আপনাকে বিশ্বস্ত পেশাদার, ভেরিফাইড প্রোভাইডার এবং সত্যিকারের সুযোগের সাথে যুক্ত করে — যা আপনাকে আরও দ্রুত এগিয়ে যেতে সাহায্য করবে।")}
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5 mb-12">
              <Link href="/explore" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-800 text-white font-bold flex items-center justify-center gap-2 hover:from-brand-500 hover:to-brand-700 transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:-translate-y-1">
                {t("Explore The Network", "নেটওয়ার্ক এক্সপ্লোর করুন")} <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-gray-900 dark:text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/50 dark:hover:bg-white/10 transition-all hover:-translate-y-1">
                <Play className="w-5 h-5 fill-brand-800 dark:fill-white" /> {t("Watch Demo", "ডেমো দেখুন")}
              </button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-5 glass-panel p-4 rounded-2xl w-fit">
              <div className="flex -space-x-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-12 h-12 rounded-full border-2 border-white dark:border-[#0a0a0a] object-cover z-40 shadow-sm" alt="User 1"/>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-12 h-12 rounded-full border-2 border-white dark:border-[#0a0a0a] object-cover z-30 shadow-sm" alt="User 2"/>
                <img src="https://randomuser.me/api/portraits/men/46.jpg" className="w-12 h-12 rounded-full border-2 border-white dark:border-[#0a0a0a] object-cover z-20 shadow-sm" alt="User 3"/>
                <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-12 h-12 rounded-full border-2 border-white dark:border-[#0a0a0a] object-cover z-10 shadow-sm" alt="User 4"/>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 dark:text-white transition-colors">{t("Join 50,000+ users", "৫০,০০০+ ব্যবহারকারীদের সাথে যুক্ত হোন")}</span>
                <span className="text-xs text-gray-600 dark:text-brand-300 font-medium transition-colors">{t("Building better connections.", "গড়ে তুলুন উন্নত কানেকশন।")}</span>
              </div>
            </div>
          </div>
          
          {/* Right Visual Network (Animated, Dark Theme) */}
          <div className="relative h-[500px] md:h-[600px] w-full mt-16 lg:mt-0 flex items-center justify-center">
            
            {/* Animated Orbiting Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[85%] h-[85%] rounded-full border border-gray-200 dark:border-white/10 absolute animate-spin-slow transition-colors duration-300"></div>
              <div className="w-[55%] h-[55%] rounded-full border border-brand-200 dark:border-brand-500/30 absolute animate-spin-slow-reverse transition-colors duration-300"></div>
              
              {/* Decorative nodes on the rings */}
              <div className="w-[85%] h-[85%] absolute animate-spin-slow">
                <div className="w-2 h-2 rounded-full bg-brand-400 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(167,139,250,0.8)]"></div>
                <div className="w-2 h-2 rounded-full bg-purple-400 absolute bottom-[15%] left-[5%] shadow-[0_0_15px_rgba(192,132,252,0.8)]"></div>
              </div>
              <div className="w-[55%] h-[55%] absolute animate-spin-slow-reverse">
                <div className="w-2 h-2 rounded-full bg-indigo-400 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 shadow-[0_0_15px_rgba(129,140,248,0.8)]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-300 absolute top-[20%] right-[5%]"></div>
              </div>
            </div>

            {/* Center Logo Node */}
            <div className="w-48 h-48 rounded-full glass-panel flex flex-col items-center justify-center relative z-20 shadow-[0_0_40px_rgba(139,92,246,0.1)] dark:shadow-[0_0_80px_rgba(139,92,246,0.2)]">
              <div className="absolute inset-0 rounded-full border border-brand-400/30 scale-[1.15] opacity-50 animate-pulse"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center text-4xl font-black mb-3 shadow-[0_0_20px_rgba(139,92,246,0.3)] dark:shadow-[0_0_30px_rgba(139,92,246,0.6)] border border-white/20">
                B
              </div>
              <span className="font-black text-gray-900 dark:text-white tracking-widest text-xl transition-colors duration-300">BRIIZZ</span>
            </div>

            {/* Floating Nodes positioned on the pure circles */}
            
            {/* 1. People (Top Right on outer circle) */}
            <div className="absolute top-[7.5%] right-[25%] translate-x-1/2 glass-panel rounded-2xl p-2 pr-5 flex items-center gap-3 z-30 animate-float shadow-xl" style={{ animationDelay: '0s' }}>
              <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-12 h-12 rounded-xl object-cover" alt="People" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight transition-colors">{t("People", "মানুষ")}</span>
                <span className="text-[10px] font-medium text-gray-500 dark:text-brand-300 transition-colors">{t("Real connections", "আসল কানেকশন")}</span>
              </div>
            </div>

            {/* 2. Providers (Middle Right on inner circle) */}
            <div className="absolute top-[45%] -translate-y-1/2 right-[10%] glass-panel rounded-2xl p-2 pr-5 flex items-center gap-3 z-30 animate-float-delayed shadow-xl" style={{ animationDelay: '1s' }}>
              <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-12 h-12 rounded-xl object-cover" alt="Providers" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight transition-colors">{t("Providers", "প্রোভাইডার")}</span>
                <span className="text-[10px] font-medium text-gray-500 dark:text-brand-300 transition-colors">{t("Verified & trusted", "ভেরিফাইড")}</span>
              </div>
            </div>

            {/* 3. Solutions (Bottom Right on outer circle) */}
            <div className="absolute bottom-[20%] right-[12%] glass-panel rounded-2xl p-2 pr-5 flex items-center gap-3 z-30 animate-float shadow-xl" style={{ animationDelay: '2s' }}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-300 flex items-center justify-center border border-purple-500/30">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight transition-colors">{t("Solutions", "সমাধান")}</span>
                <span className="text-[10px] font-medium text-purple-600 dark:text-purple-300 transition-colors">{t("Make it happen", "বাস্তবায়ন")}</span>
              </div>
            </div>

            {/* 4. Opportunities (Bottom Left on inner circle) */}
            <div className="absolute bottom-[5%] left-[30%] -translate-x-1/2 glass-panel rounded-2xl p-2 pr-5 flex items-center gap-3 z-30 animate-float-delayed shadow-xl" style={{ animationDelay: '3s' }}>
              <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-12 h-12 rounded-xl object-cover" alt="Opportunities" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight transition-colors">{t("Opportunities", "সুযোগ")}</span>
                <span className="text-[10px] font-medium text-gray-500 dark:text-brand-300 transition-colors">{t("Grow together", "একসাথে বৃদ্ধি")}</span>
              </div>
            </div>

            {/* 5. Needs (Middle Left on outer circle) */}
            <div className="absolute top-[50%] -translate-y-1/2 left-[5%] glass-panel rounded-2xl p-2 pr-5 flex items-center gap-3 z-30 animate-float shadow-xl" style={{ animationDelay: '4s' }}>
              <img src="https://randomuser.me/api/portraits/men/46.jpg" className="w-12 h-12 rounded-xl object-cover" alt="Needs" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 dark:text-white leading-tight transition-colors">{t("Needs", "প্রয়োজন")}</span>
                <span className="text-[10px] font-medium text-gray-500 dark:text-brand-300 transition-colors">{t("Discover & share", "খুঁজুন ও শেয়ার করুন")}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
