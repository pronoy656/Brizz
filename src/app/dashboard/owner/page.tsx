"use client";

import React from "react";
import { TrendingUp, DollarSign, PieChart, Crown } from "lucide-react";

export default function OwnerOverviewPage() {
  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Executive Summary</h1>
          <p className="text-neutral-400 mt-1">High-level financial overview and profit sharing.</p>
        </div>
        <div className="flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-bold border border-amber-500/20">
          <Crown className="w-4 h-4" /> Root Access
        </div>
      </div>

      {/* Primary Financials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-2xl rounded-full"></div>
          <div className="text-neutral-400 font-bold text-sm mb-2 uppercase tracking-wider">Total Platform GMV</div>
          <div className="text-4xl font-black text-white mb-2">৳ 12.4M</div>
          <div className="text-emerald-500 font-bold text-sm flex items-center gap-1">
            <TrendingUp className="w-4 h-4" /> +24% vs last month
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full"></div>
          <div className="text-neutral-400 font-bold text-sm mb-2 uppercase tracking-wider">BRIIZZ Revenue (5%)</div>
          <div className="text-4xl font-black text-white mb-2">৳ 620,000</div>
          <div className="text-emerald-500 font-bold text-sm flex items-center gap-1">
            <TrendingUp className="w-4 h-4" /> Gross Earnings
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full"></div>
          <div className="text-neutral-400 font-bold text-sm mb-2 uppercase tracking-wider">Net Profit Margin</div>
          <div className="text-4xl font-black text-white mb-2">৳ 480,000</div>
          <div className="text-neutral-500 font-bold text-sm flex items-center gap-1">
            After Operational Costs (৳140k)
          </div>
        </div>
      </div>

      {/* 5-Founder Split */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8">
        <div className="flex items-center gap-3 mb-8">
          <PieChart className="w-6 h-6 text-amber-500" />
          <h2 className="text-xl font-bold text-white">5-Founder Equity Split (Current Net)</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { name: "Founder 1", role: "CEO", equity: "35%", amount: "৳ 168,000" },
            { name: "Founder 2", role: "CTO", equity: "25%", amount: "৳ 120,000" },
            { name: "Founder 3", role: "COO", equity: "20%", amount: "৳ 96,000" },
            { name: "Founder 4", role: "CMO", equity: "10%", amount: "৳ 48,000" },
            { name: "Founder 5", role: "Investor", equity: "10%", amount: "৳ 48,000" },
          ].map((founder, i) => (
            <div key={i} className="bg-neutral-950 border border-neutral-800 p-4 rounded-2xl flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 font-bold mb-3">
                {founder.name.charAt(8)}
              </div>
              <div className="font-bold text-white text-sm mb-1">{founder.name}</div>
              <div className="text-xs text-neutral-500 mb-3">{founder.role} • {founder.equity}</div>
              <div className="bg-amber-500/10 text-amber-500 w-full py-2 rounded-xl font-black">
                {founder.amount}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
