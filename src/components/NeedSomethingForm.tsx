"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NeedSomethingForm() {
  const [need, setNeed] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (need.trim()) {
      router.push(`/needs/new?q=${encodeURIComponent(need)}`);
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="bg-brand-950 dark:bg-[#18181b] border border-transparent dark:border-white/10 text-white rounded-[3rem] py-20 px-8 max-w-5xl mx-auto flex flex-col items-center text-center shadow-2xl relative overflow-hidden transition-colors duration-300">
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-800/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 w-full flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-900 border border-brand-800 text-brand-300 text-sm font-bold mb-6 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> Ready to Start?
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Tell Us What You Need.
            </h2>
            
            <p className="text-lg text-brand-200 mb-12 max-w-2xl leading-relaxed">
              You don't need to know exactly who to contact. Just tell us what you're looking for, and our network will handle the rest.
            </p>
            
            <form 
              onSubmit={handleSubmit}
              className="w-full max-w-3xl bg-white dark:bg-[#27272a] p-2 rounded-2xl flex flex-col md:flex-row items-center gap-2 shadow-2xl transition-colors duration-300"
            >
              <div className="flex-1 px-4 py-3 w-full">
                <label htmlFor="need-input" className="sr-only">What are you looking for?</label>
                <input
                  id="need-input"
                  type="text"
                  placeholder="I need help with __________________"
                  value={need}
                  onChange={(e) => setNeed(e.target.value)}
                  className="w-full text-lg text-gray-900 dark:text-white bg-transparent border-none outline-none placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
                />
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-brand-800 hover:bg-brand-900 dark:bg-brand-600 dark:hover:bg-brand-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
        
      </div>
    </section>
  );
}
