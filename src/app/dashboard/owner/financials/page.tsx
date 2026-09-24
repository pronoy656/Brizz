"use client";

import React from "react";
import { PieChart, TrendingUp, DollarSign, CreditCard, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function FinancialHealthPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Financial Health</h1>
        <p className="text-neutral-400 mt-1">Deep dive into revenue streams, margins, and operational costs.</p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl">
          <div className="text-neutral-500 text-sm font-bold uppercase mb-2">Total Processed</div>
          <div className="text-3xl font-black text-white mb-2">৳ 12.4M</div>
          <div className="text-emerald-500 text-xs font-bold flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> +15.2%</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl">
          <div className="text-neutral-500 text-sm font-bold uppercase mb-2">Platform Cut (5%)</div>
          <div className="text-3xl font-black text-emerald-400 mb-2">৳ 620,000</div>
          <div className="text-emerald-500 text-xs font-bold flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> +12.4%</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl">
          <div className="text-neutral-500 text-sm font-bold uppercase mb-2">Operational Costs</div>
          <div className="text-3xl font-black text-red-400 mb-2">৳ 140,000</div>
          <div className="text-red-500 text-xs font-bold flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> +5.1%</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl">
          <div className="text-neutral-500 text-sm font-bold uppercase mb-2">Net Profit</div>
          <div className="text-3xl font-black text-amber-500 mb-2">৳ 480,000</div>
          <div className="text-emerald-500 text-xs font-bold flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> +18.9%</div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl">
          <h2 className="text-xl font-bold text-white mb-6">Revenue by Category</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="text-neutral-300">Wholesale & Supply</span>
                <span className="text-emerald-400">45% (৳ 279,000)</span>
              </div>
              <div className="h-2 w-full bg-neutral-800 rounded-full"><div className="h-full bg-emerald-500 rounded-full" style={{width: '45%'}}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="text-neutral-300">IT & Infrastructure</span>
                <span className="text-blue-400">30% (৳ 186,000)</span>
              </div>
              <div className="h-2 w-full bg-neutral-800 rounded-full"><div className="h-full bg-blue-500 rounded-full" style={{width: '30%'}}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="text-neutral-300">Logistics & Fleet</span>
                <span className="text-amber-400">15% (৳ 93,000)</span>
              </div>
              <div className="h-2 w-full bg-neutral-800 rounded-full"><div className="h-full bg-amber-500 rounded-full" style={{width: '15%'}}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="text-neutral-300">Real Estate</span>
                <span className="text-purple-400">10% (৳ 62,000)</span>
              </div>
              <div className="h-2 w-full bg-neutral-800 rounded-full"><div className="h-full bg-purple-500 rounded-full" style={{width: '10%'}}></div></div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl">
          <h2 className="text-xl font-bold text-white mb-6">Recent Transactions</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-neutral-950 rounded-2xl border border-neutral-800">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Platform Fee Collected</div>
                    <div className="text-neutral-500 text-xs">From: TechNova Solutions</div>
                  </div>
                </div>
                <div className="text-emerald-400 font-bold">+ ৳ 12,500</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
