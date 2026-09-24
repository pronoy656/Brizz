"use client";

import React from "react";
import { Activity, ShieldCheck, Zap, AlertTriangle } from "lucide-react";

export default function NetworkHealthPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Network Health</h1>
        <p className="text-neutral-400 mt-1">Monitor the performance and reliability of our 64-district ecosystem.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
            <Zap className="w-7 h-7" />
          </div>
          <div>
            <div className="text-neutral-400 text-sm font-bold uppercase mb-1">Avg Match Time</div>
            <div className="text-2xl font-black text-white">4.2 Mins</div>
          </div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <div className="text-neutral-400 text-sm font-bold uppercase mb-1">Fulfillment Rate</div>
            <div className="text-2xl font-black text-white">96.8%</div>
          </div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <div>
            <div className="text-neutral-400 text-sm font-bold uppercase mb-1">Disputes</div>
            <div className="text-2xl font-black text-white">1.2%</div>
          </div>
        </div>
      </div>

      {/* District Performance */}
      <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl">
        <h2 className="text-xl font-bold text-white mb-6">Top Performing Districts</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-neutral-800 text-neutral-500 text-sm">
                <th className="pb-3 font-medium">District</th>
                <th className="pb-3 font-medium">Active Partners</th>
                <th className="pb-3 font-medium">Monthly Requests</th>
                <th className="pb-3 font-medium">Success Rate</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-white text-sm">
              <tr className="border-b border-neutral-800/50">
                <td className="py-4 font-bold">Dhaka</td>
                <td className="py-4">1,240</td>
                <td className="py-4">4,500+</td>
                <td className="py-4 text-emerald-400 font-bold">98%</td>
                <td className="py-4"><span className="bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded text-xs font-bold">Excellent</span></td>
              </tr>
              <tr className="border-b border-neutral-800/50">
                <td className="py-4 font-bold">Chattogram</td>
                <td className="py-4">850</td>
                <td className="py-4">2,100+</td>
                <td className="py-4 text-emerald-400 font-bold">95%</td>
                <td className="py-4"><span className="bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded text-xs font-bold">Excellent</span></td>
              </tr>
              <tr className="border-b border-neutral-800/50">
                <td className="py-4 font-bold">Sylhet</td>
                <td className="py-4">320</td>
                <td className="py-4">800+</td>
                <td className="py-4 text-amber-400 font-bold">82%</td>
                <td className="py-4"><span className="bg-amber-500/10 text-amber-500 px-2 py-1 rounded text-xs font-bold">Needs Partners</span></td>
              </tr>
              <tr>
                <td className="py-4 font-bold">Rajshahi</td>
                <td className="py-4">190</td>
                <td className="py-4">450+</td>
                <td className="py-4 text-red-400 font-bold">65%</td>
                <td className="py-4"><span className="bg-red-500/10 text-red-500 px-2 py-1 rounded text-xs font-bold">Critical Shortage</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
