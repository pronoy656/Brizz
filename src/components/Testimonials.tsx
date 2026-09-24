"use client";

import React from "react";
import { Star, Quote, Sparkles } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "We needed to set up a new branch office in Chittagong. BRIIZZ sourced the interior designers, IT network specialists, and legal consultants all in one go. Saved us weeks of searching.",
    name: "Ahmed R.",
    title: "Operations Director, TechNova",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    color: "from-blue-500 to-indigo-600"
  },
  {
    quote: "Finding reliable industrial suppliers was always a nightmare. Since using BRIIZZ, we only deal with verified, high-quality vendors. It completely transformed our procurement process.",
    name: "Sarah K.",
    title: "Procurement Manager, BuildCorp",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    color: "from-amber-500 to-orange-600"
  },
  {
    quote: "I just told them I needed a complete digital marketing overhaul. They matched me with a top-tier agency that delivered exactly what I envisioned. The precision is unmatched.",
    name: "Tariq M.",
    title: "Founder, FreshBites",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    color: "from-emerald-500 to-teal-600"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-brand-900/20 text-brand-800 dark:text-brand-400 text-sm font-bold mb-6 uppercase tracking-wider border border-gray-200 dark:border-brand-500/20 shadow-sm transition-colors duration-300">
            <Sparkles className="w-4 h-4" /> Success Stories
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight transition-colors duration-300">
            Don't just take our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">word for it.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
            Hear from businesses and individuals who have completely transformed how they source providers and scale operations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white dark:bg-[#121214] rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] border border-gray-100 dark:border-white/5 flex flex-col hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              
              {/* Background Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`}></div>
              
              {/* Animated Top Border */}
              <div className={`absolute top-0 left-0 h-1 w-0 bg-gradient-to-r ${testimonial.color} group-hover:w-full transition-all duration-700 ease-out`}></div>
              
              {/* Massive Background Quote Icon */}
              <Quote className="absolute -top-4 -right-4 w-32 h-32 text-gray-50 dark:text-white/[0.02] group-hover:text-gray-100 dark:group-hover:text-white/[0.04] transition-colors duration-500 pointer-events-none -rotate-12 z-0" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-8 relative z-10">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 dark:text-yellow-500 fill-yellow-400 dark:fill-yellow-500 group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${star * 50}ms` }} />
                ))}
              </div>
              
              {/* Quote Text */}
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-10 relative z-10 flex-1 transition-colors">
                "{testimonial.quote}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 relative z-10 mt-auto">
                <div className="relative">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-[#27272a] shadow-sm relative z-10 transition-colors"
                  />
                  {/* Avatar glowing ring on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-full blur-md opacity-0 group-hover:opacity-60 scale-110 transition-all duration-500 z-0`}></div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-500">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">
                    {testimonial.title}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
