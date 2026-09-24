"use client";

import React from "react";
import { ShieldCheck, Crosshair, TrendingUp } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden border-b border-gray-100 dark:border-white/10 transition-colors duration-300">
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-800 dark:text-brand-400 mb-4 transition-colors">
            The BRIIZZ Standard
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white max-w-2xl mx-auto leading-tight transition-colors">
            A network meticulously built around your exact needs.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-20 h-20 rounded-2xl bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/40 group-hover:scale-105 group-hover:-translate-y-1 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-brand-800 dark:text-brand-400 transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide transition-colors">Real Providers</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm transition-colors">
              We eliminate the noise. Every professional and business is verified for identity, capability, and trust before joining the network.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-20 h-20 rounded-2xl bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/40 group-hover:scale-105 group-hover:-translate-y-1 shadow-sm">
              <Crosshair className="w-8 h-8 text-brand-800 dark:text-brand-400 transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide transition-colors">Precision Matching</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm transition-colors">
              Stop guessing. You tell us your exact goal, and our system routes it precisely to the layer of providers who can execute it flawlessly.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="w-20 h-20 rounded-2xl bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-500/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/40 group-hover:scale-105 group-hover:-translate-y-1 shadow-sm">
              <TrendingUp className="w-8 h-8 text-brand-800 dark:text-brand-400 transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide transition-colors">Transparent Progress</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm transition-colors">
              From introduction to final delivery, track every step of your requirement in one unified, clear dashboard. No more lost emails.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
