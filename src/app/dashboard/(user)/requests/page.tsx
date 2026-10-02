"use client";

import React from "react";
import Link from "next/link";
import { PlusCircle, Clock, MapPin, ShieldCheck, RadioTower, ArrowRight } from "lucide-react";

export default function UserRequestsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            My Submitted Requirements
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Review all active and past business requests, proposals, and milestones.
          </p>
        </div>
        <Link
          href="/needs/new"
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-blue-600/20"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Post New Need</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="p-6 rounded-3xl bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">
              REQ-8924 · Software & Web Development
            </span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Matched: Apex IT Solutions
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Custom Enterprise Web Portal & B2B Inventory System
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Next.js web portal with PostgreSQL database, role-based dashboards, and courier API sync.
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-white/5 text-xs">
            <span className="font-bold text-slate-900 dark:text-white">Budget: ৳65,000</span>
            <Link href="/requests/track" className="font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
              Track Real-time Progress <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400">
              REQ-9102 · Wholesale & Global Sourcing
            </span>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <RadioTower className="w-4 h-4 animate-pulse" /> 14 Importers Reviewing
            </span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Bulk Pakistani Designer Lawn & Boutique Suits (150 Sets)
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Direct air cargo import from Karachi warehouse to Dhaka with pre-shipment sample testing.
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-white/5 text-xs">
            <span className="font-bold text-slate-900 dark:text-white">Budget: ৳1,80,000</span>
            <Link href="/requests/track" className="font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
              Track Real-time Progress <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
