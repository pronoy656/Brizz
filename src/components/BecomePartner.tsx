"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, ArrowRight, CheckCircle2, TrendingUp, Users } from "lucide-react";

export default function BecomePartner() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left: Text & CTA */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-800 dark:text-brand-400 text-sm font-bold mb-8 uppercase tracking-wider border border-brand-100 dark:border-brand-500/20 transition-colors">
              <Briefcase className="w-4 h-4" /> For Businesses & Professionals
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors">
              Don't just list your business. <br />
              <span className="text-brand-800 dark:text-brand-400">Grow with the network.</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg transition-colors">
              BRIIZZ is actively looking for reliable agencies, skilled professionals, and product suppliers to fulfill the exact needs of our users. Become a verified partner today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/providers/join" className="btn-primary flex items-center justify-center gap-2 px-8 py-4 text-lg">
                Become a Partner <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/how-it-works#providers" className="btn-secondary border-gray-200 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 flex items-center justify-center px-8 py-4 text-lg transition-colors">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Right: Benefits / Visual */}
          <div className="relative">
            {/* Main Benefit Card */}
            <div className="bg-gray-50 dark:bg-[#18181b] rounded-3xl p-8 border border-gray-200 dark:border-white/10 relative z-20 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">Why Partner with BRIIZZ?</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#27272a] border border-gray-100 dark:border-white/5 flex items-center justify-center shrink-0 shadow-sm transition-colors">
                    <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1 transition-colors">Direct Opportunities</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">We route high-intent users directly to you based on your verified capabilities. No bidding wars.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#27272a] border border-gray-100 dark:border-white/5 flex items-center justify-center shrink-0 shadow-sm transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1 transition-colors">Verified Trust</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">Stand out with the BRIIZZ Verified badge. Clients know you are vetted and secure.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#27272a] border border-gray-100 dark:border-white/5 flex items-center justify-center shrink-0 shadow-sm transition-colors">
                    <Users className="w-6 h-6 text-brand-800 dark:text-brand-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1 transition-colors">Network Effects</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">Collaborate with other providers to fulfill massive, multi-faceted enterprise requirements.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Decorative Card Behind */}
            <div className="absolute top-10 -right-6 w-full h-full bg-brand-50 dark:bg-brand-900/10 border border-brand-100 dark:border-brand-500/10 rounded-3xl -z-10 rotate-3 transition-colors"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
