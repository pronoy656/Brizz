"use client";

import React from "react";
import { Search, Users, CheckCircle2 } from "lucide-react";

export default function NetworkAdvantage() {
  return (
    <section className="py-24 bg-brand-50 border-y border-brand-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Can't Find What You Need? <br className="hidden md:block" />
            That's Where Our Network Comes In.
          </h2>
          <p className="text-lg text-gray-600">
            BRIIZZ is more than just a directory of existing providers. When you need something unique, our entire network activates to find it for you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
            
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-brand-200 -translate-y-1/2 z-0" />
            <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-px bg-brand-200 -translate-x-1/2 z-0" />

            <div className="relative z-10 flex flex-col items-center bg-brand-50 p-4">
              <div className="w-16 h-16 rounded-2xl bg-white border border-brand-200 shadow-sm flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-brand-800" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 text-center">BRIIZZ Searches</h3>
              <span className="text-xs text-gray-500 mt-1">Not Found Yet?</span>
            </div>

            <div className="relative z-10 flex flex-col items-center bg-brand-50 p-4">
              <div className="w-16 h-16 rounded-2xl bg-brand-800 shadow-card flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 text-center">Network Activates</h3>
              <span className="text-xs text-brand-800 font-medium mt-1">Someone Connects</span>
            </div>

            <div className="relative z-10 flex flex-col items-center bg-brand-50 p-4">
              <div className="w-16 h-16 rounded-2xl bg-white border border-brand-200 shadow-sm flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-brand-800" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 text-center">Solution Found</h3>
              <span className="text-xs text-gray-500 mt-1">Opportunity Delivered</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
