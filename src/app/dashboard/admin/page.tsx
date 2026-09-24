"use client";

import React from "react";
import Link from "next/link";
import { Users, ShieldCheck, Inbox, ArrowRight, Activity, Globe, TrendingUp, Search } from "lucide-react";

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Operations Overview</h1>
          <p className="text-slate-600 mt-1">Platform health, active requests matching, and growth analytics.</p>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold border border-blue-100 shadow-sm">
          <Activity className="w-4 h-4" /> System Healthy
        </div>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <Link href="/dashboard/admin/triage" className="bg-blue-600 p-6 rounded-3xl shadow-md relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/30 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700"></div>
          <div className="relative z-10">
            <div className="text-blue-100 font-medium text-sm mb-2 flex items-center justify-between">
              Triage Queue
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
            </div>
            <div className="text-white font-black text-4xl mb-1">
              5
            </div>
            <div className="text-blue-100 text-sm font-medium">Needs Broadcasting</div>
          </div>
          <div className="relative z-10 mt-6 flex items-center gap-2 text-blue-100 font-bold text-sm group-hover:text-white transition-colors">
            Process Queue <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 text-slate-500 font-bold text-xs uppercase tracking-wider">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              Verified Partners
            </div>
          </div>
          <div className="text-4xl font-black text-slate-900 mb-2">142</div>
          <div className="text-sm font-medium text-amber-600 bg-amber-50 inline-block px-2 py-1 rounded-md">2 awaiting review</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 text-slate-500 font-bold text-xs uppercase tracking-wider">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              Active Users
            </div>
          </div>
          <div className="text-4xl font-black text-slate-900 mb-2">1,204</div>
          <div className="text-sm font-bold text-emerald-600 flex items-center gap-1"><TrendingUp className="w-3.5 h-3.5" /> +45 this week</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 text-slate-500 font-bold text-xs uppercase tracking-wider">
              <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                <Globe className="w-4 h-4" />
              </div>
              Live Projects
            </div>
          </div>
          <div className="text-4xl font-black text-slate-900 mb-2">87</div>
          <div className="text-sm font-medium text-slate-500">Across 12 districts</div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Graph Area */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Platform Growth</h2>
              <p className="text-sm text-slate-500 mt-1">Requests fulfilled vs new users over the last 7 days</p>
            </div>
            <select className="bg-slate-50 border border-slate-200 text-sm font-bold text-slate-700 px-4 py-2 rounded-xl outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          
          {/* Custom CSS Graph representation */}
          <div className="h-64 flex items-end justify-between gap-2 relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between z-0">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-full border-t border-slate-100"></div>
              ))}
            </div>
            
            {/* Bars */}
            {[
              { day: 'Mon', val1: 40, val2: 60 },
              { day: 'Tue', val1: 50, val2: 70 },
              { day: 'Wed', val1: 45, val2: 55 },
              { day: 'Thu', val1: 75, val2: 85 },
              { day: 'Fri', val1: 65, val2: 75 },
              { day: 'Sat', val1: 90, val2: 95 },
              { day: 'Sun', val1: 85, val2: 90 },
            ].map((data, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center flex-1 h-full justify-end group">
                <div className="flex gap-1.5 w-full justify-center items-end h-[calc(100%-30px)]">
                  <div className="w-1/3 bg-blue-100 rounded-t-md group-hover:bg-blue-200 transition-colors relative" style={{ height: `${data.val1}%` }}></div>
                  <div className="w-1/3 bg-blue-600 rounded-t-md group-hover:bg-blue-500 transition-colors relative shadow-sm" style={{ height: `${data.val2}%` }}></div>
                </div>
                <div className="text-xs font-bold text-slate-400 mt-3">{data.day}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-600"><span className="w-3 h-3 rounded-full bg-blue-100"></span> New Users</div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-600"><span className="w-3 h-3 rounded-full bg-blue-600"></span> Fulfilled Requests</div>
          </div>
        </div>

        {/* Quick Actions / Alerts */}
        <div className="space-y-6">
          <div className="bg-slate-900 rounded-3xl p-8 shadow-md text-white">
            <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl font-bold text-sm text-left transition-colors flex items-center justify-between">
                Review Pending Licenses <ArrowRight className="w-4 h-4 opacity-50" />
              </button>
              <button className="w-full bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl font-bold text-sm text-left transition-colors flex items-center justify-between">
                Run Matchmaking Algorithm <ArrowRight className="w-4 h-4 opacity-50" />
              </button>
              <button className="w-full bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl font-bold text-sm text-left transition-colors flex items-center justify-between">
                Send Broadcast Push <ArrowRight className="w-4 h-4 opacity-50" />
              </button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4">System Alerts</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Rajshahi Shortage</div>
                  <div className="text-xs text-slate-500">12 requests unfulfilled.</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0"></div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Failed Broadcast</div>
                  <div className="text-xs text-slate-500">REQ-891 found no matches.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
