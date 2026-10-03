"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const LOGOS = [
  "Acme Corp", "GlobalTech", "Nexus", "Quantum", "Apex", "Synergy", "Stark Ind.", "Wayne Ent."
];

export default function TrustedBy() {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-white dark:bg-[#0a0a0a] border-b border-gray-100 dark:border-white/10 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest">
          {t("Trusted by innovative companies across Bangladesh", "বাংলাদেশজুড়ে শীর্ষস্থানীয় প্রতিষ্ঠানের বিশ্বস্ত পার্টনার")}
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full flex items-center h-16">
        {/* Left/Right Gradients for smooth fade */}
        <div className="absolute left-0 top-0 w-8 sm:w-20 md:w-32 h-full bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 transition-colors duration-300 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-8 sm:w-20 md:w-32 h-full bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 transition-colors duration-300 pointer-events-none"></div>
        
        {/* Animated Track */}
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Double the logos to create a seamless infinite loop */}
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
            <div 
              key={index} 
              className="mx-5 sm:mx-8 text-xl sm:text-2xl font-black text-gray-300 dark:text-gray-700 opacity-60 dark:opacity-40 grayscale transition-colors duration-300"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
