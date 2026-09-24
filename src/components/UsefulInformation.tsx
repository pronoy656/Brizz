"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Compass, Lightbulb, MessageSquareText, ArrowRight } from "lucide-react";

const GUIDES = [
  {
    num: "01",
    title: "Buying Guides",
    description: "Know what to compare before buying hardware or engaging a service. Make informed purchasing decisions.",
    icon: Compass,
    color: "from-blue-500 to-cyan-500"
  },
  {
    num: "02",
    title: "How-to Guides",
    description: "Practical explanations for technology and business decisions. Step-by-step guidance for your growth.",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500"
  },
  {
    num: "03",
    title: "Public Resources",
    description: "Useful information that supports the free-help side of BRIIZZ. Accessible knowledge for everyone.",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-500"
  }
];

export default function UsefulInformation() {
  return (
    <section className="py-32 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-brand-900/20 text-brand-800 dark:text-brand-400 text-sm font-bold mb-6 uppercase tracking-wider border border-gray-200 dark:border-brand-500/20 shadow-sm transition-colors duration-300">
              <MessageSquareText className="w-4 h-4" /> Consultation & Guidance
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight transition-colors duration-300">
              Useful Information,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">Not Just Sales Pages.</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-colors duration-300">
              We are not just a marketplace; we are your dedicated consultants. A content foundation for technology guides, business guides, buying guides, local information, public resources, and service explanations. You can talk to us about anything your business needs.
            </p>
            
            <Link href="/free-help" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold hover:bg-brand-800 dark:hover:bg-brand-100 transition-colors shadow-lg hover:shadow-brand-500/25">
              Talk to a Consultant <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Right Content - Cards Grid */}
          <div className="lg:w-1/2 w-full grid gap-6">
            {GUIDES.map((guide, idx) => {
              const Icon = guide.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative bg-white dark:bg-[#121214] border border-gray-100 dark:border-white/5 rounded-3xl p-8 flex items-start gap-6 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${guide.color} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none z-0`}></div>
                  
                  {/* Animated Bottom Border */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${guide.color} group-hover:w-full transition-all duration-700 ease-out z-0`}></div>
                  
                  {/* Large Background Number */}
                  <span className="absolute -top-4 right-4 text-[6rem] font-black text-gray-50 dark:text-white/[0.02] group-hover:text-gray-100 dark:group-hover:text-white/[0.04] transition-colors duration-500 pointer-events-none select-none z-0 leading-none">
                    {guide.num}
                  </span>
                  
                  {/* Icon Container */}
                  <div className="shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm">
                      <Icon className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-500" />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="relative z-10 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-500">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-500">
                      {guide.description}
                    </p>
                  </div>
                  
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
