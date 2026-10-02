"use client";

import React from "react";
import { ShieldCheck, Lock, Download, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function UserBillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Escrow Protection & Invoices
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Every payment is locked safely in BRIIZZ escrow until milestone inspection.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 space-y-1">
          <div className="text-[10px] font-bold uppercase text-slate-400">Total Escrow Balance</div>
          <div className="text-2xl font-black text-blue-600 dark:text-blue-400">৳35,000</div>
          <div className="text-xs text-slate-500">Locked safely for REQ-8924</div>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 space-y-1">
          <div className="text-[10px] font-bold uppercase text-slate-400">Released Milestone Funds</div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">৳25,000</div>
          <div className="text-xs text-slate-500">Approved upon delivery</div>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 space-y-1">
          <div className="text-[10px] font-bold uppercase text-slate-400">Guarantee Status</div>
          <div className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-1.5">
            <ShieldCheck className="w-6 h-6 text-emerald-500" />
            <span>100% Safe</span>
          </div>
          <div className="text-xs text-emerald-600 font-medium">Money-back protection active</div>
        </div>
      </div>

      <div className="p-6 rounded-3xl bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 space-y-4 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Transaction & Milestone History</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 dark:border-white/5 text-slate-400 uppercase text-[10px]">
                <th className="py-3 px-3">Date</th>
                <th className="py-3 px-3">Milestone Description</th>
                <th className="py-3 px-3">Amount</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 font-medium">
              <tr>
                <td className="py-3 px-3 text-slate-500">Oct 01, 2026</td>
                <td className="py-3 px-3 text-slate-900 dark:text-white font-bold">Phase 1: Architecture Prototype (REQ-8924)</td>
                <td className="py-3 px-3 font-extrabold text-slate-900 dark:text-white">৳25,000</td>
                <td className="py-3 px-3">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600">
                    Released
                  </span>
                </td>
                <td className="py-3 px-3 text-right">
                  <button className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1">
                    <Download className="w-3.5 h-3.5" /> PDF
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-3 text-slate-500">Oct 02, 2026</td>
                <td className="py-3 px-3 text-slate-900 dark:text-white font-bold">Phase 2: Database & Backend Engine (REQ-8924)</td>
                <td className="py-3 px-3 font-extrabold text-blue-600">৳35,000</td>
                <td className="py-3 px-3">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-600">
                    Locked in Escrow
                  </span>
                </td>
                <td className="py-3 px-3 text-right">
                  <button className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1">
                    <Download className="w-3.5 h-3.5" /> PDF
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
