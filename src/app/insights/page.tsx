"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      
      {/* Featured Story */}
      <section className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Featured Insight</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl overflow-hidden border border-gray-200">
            <div className="h-64 lg:h-full w-full bg-brand-100"></div>
            <div className="p-8 lg:p-12">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-800 mb-4 block">Buying Guide</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Choose the Right IT Provider for Your Growing Business
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When scaling your operations, the right technology partner is crucial. Learn the 5 key factors to evaluate before signing a long-term contract.
              </p>
              <Link href="#" className="font-bold text-brand-800 flex items-center gap-2 hover:underline">
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Latest & Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Latest Articles */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">Latest</h2>
              
              <div className="space-y-8">
                {[1, 2, 3, 4].map(item => (
                  <div key={item} className="flex gap-6 group cursor-pointer">
                    <div className="w-32 h-32 md:w-48 md:h-32 bg-gray-100 rounded-xl shrink-0"></div>
                    <div className="flex flex-col justify-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Business</span>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-800 transition-colors">
                        Starting a Business in 2026? Here is where to begin.
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        A comprehensive guide to registering your company, setting up an office, and finding your first clients using the BRIIZZ network.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories Sidebar */}
            <div className="w-full lg:w-72 shrink-0">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Categories</h2>
              <ul className="space-y-4">
                {["Buying Guides", "Business", "Technology", "How-To", "Local Updates"].map(cat => (
                  <li key={cat}>
                    <Link href="#" className="text-gray-600 font-medium hover:text-brand-800 transition-colors flex items-center justify-between group">
                      {cat} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-12 bg-brand-50 p-6 rounded-2xl border border-brand-100">
                <h3 className="font-bold text-brand-900 mb-2">Subscribe</h3>
                <p className="text-sm text-brand-800 mb-4">Get the latest insights directly in your inbox.</p>
                <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-xl border border-brand-200 mb-3 outline-none" />
                <button className="w-full bg-brand-900 text-white font-bold py-3 rounded-xl text-sm">Subscribe</button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
