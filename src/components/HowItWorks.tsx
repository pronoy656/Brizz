"use client";

import React from "react";
import { FileText, ScanSearch, Search, Users, ShieldCheck, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { 
      num: "01", 
      title: "Tell Us What You Need", 
      desc: "Fill out a simple form explaining what you want to achieve. No technical jargon required.",
      icon: FileText,
      color: "from-blue-500 to-cyan-400"
    },
    { 
      num: "02", 
      title: "We Understand Your Requirement", 
      desc: "Our team reviews your request to ensure we know exactly what will solve your problem.",
      icon: ScanSearch,
      color: "from-purple-500 to-indigo-400"
    },
    { 
      num: "03", 
      title: "We Search the Network", 
      desc: "We look through our verified database of providers and partners to find the perfect match.",
      icon: Search,
      color: "from-brand-500 to-emerald-400"
    },
    { 
      num: "04", 
      title: "We Connect the Right People", 
      desc: "You get introduced to the exact specialists or suppliers who can deliver the solution.",
      icon: Users,
      color: "from-orange-500 to-red-400"
    },
    { 
      num: "05", 
      title: "We Coordinate the Opportunity", 
      desc: "BRIIZZ stays in the loop, ensuring terms, quality, and deliverables are perfectly aligned.",
      icon: ShieldCheck,
      color: "from-pink-500 to-rose-400"
    },
    { 
      num: "06", 
      title: "Your Solution Gets Delivered", 
      desc: "The project is completed successfully, securely, and stress-free.",
      icon: CheckCircle,
      color: "from-emerald-500 to-teal-400"
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-500/10 text-brand-800 dark:text-brand-400 text-sm font-bold mb-6 uppercase tracking-wider border border-brand-100 dark:border-brand-500/20 shadow-sm transition-colors duration-300">
            How The Platform Works
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight transition-colors">
            You don't search for providers.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">We bring them to you.</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors">
            Finding the right provider used to mean weeks of searching, vetting, and negotiating. BRIIZZ acts as your trusted concierge. You submit a need, and our intelligent system handles the rest.
          </p>
        </div>

        {/* The 6 Cards Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx} 
                  className="relative group bg-white dark:bg-[#121214] border border-gray-100 dark:border-white/5 rounded-[2rem] p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`}></div>
                  
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <span className="text-5xl font-black text-gray-100 dark:text-white/5 group-hover:text-brand-100 dark:group-hover:text-brand-500/20 transition-colors duration-500">
                      {step.num}
                    </span>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 group-hover:scale-110 transition-all duration-500 shadow-sm relative overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-500 relative z-10" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-500">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Bottom animated border line */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${step.color} group-hover:w-full transition-all duration-700 ease-out`}></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
