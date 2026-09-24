"use client";

import React from "react";
import { Network, Headset, ClipboardCheck, Sparkles } from "lucide-react";

export default function FutureProofJourney() {
  const features = [
    {
      title: "Custom Network Development",
      description: "Can't find what you need in the open market? BRIIZZ will source, vet, and onboard specific providers just for your business.",
      icon: Network,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Priority Support",
      description: "Dedicated assistance for complex or urgent requirements. We are always here when you need us most.",
      icon: Headset,
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "End-to-End Management",
      description: "From defining the requirement to final delivery, BRIIZZ manages the entire relationship seamlessly.",
      icon: ClipboardCheck,
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section className="py-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 dark:bg-brand-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-500/10 text-brand-800 dark:text-brand-400 text-sm font-bold mb-6 uppercase tracking-wider border border-brand-100 dark:border-brand-500/20 shadow-sm transition-colors duration-300">
            <Sparkles className="w-4 h-4" /> Future-Proof Your Journey
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight transition-colors duration-300">
            A network meticulously built around your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">
              exact needs.
            </span>
          </h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className="group relative bg-gray-50 dark:bg-[#121214] border border-gray-200 dark:border-white/5 rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Background Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`}></div>
                
                {/* Animated Top Border */}
                <div className={`absolute top-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-700 ease-out`}></div>
                
                {/* Icon Wrapper */}
                <div className="relative z-10 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-500" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
