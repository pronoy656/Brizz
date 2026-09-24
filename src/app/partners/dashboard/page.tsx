"use client";

import React from "react";
import Link from "next/link";
import { DollarSign, Briefcase, Star, TrendingUp, ArrowRight, ShieldCheck } from "lucide-react";

export default function PartnerOverview() {
  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Overview</h1>
          <p className="text-gray-600 mt-1">Here's what's happening with your business today.</p>
        </div>
        <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold border border-green-100 shadow-sm">
          <ShieldCheck className="w-4 h-4" /> Top Tier Provider
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 text-gray-500 font-medium text-sm mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
            Total Earnings
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">৳ 2,45,000</div>
          <div className="text-sm font-medium text-green-600 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +12% this month
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 text-gray-500 font-medium text-sm mb-4">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <Briefcase className="w-4 h-4" />
            </div>
            Active Projects
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">4</div>
          <div className="text-sm font-medium text-gray-500">2 pending completion</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 text-gray-500 font-medium text-sm mb-4">
            <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
              <Star className="w-4 h-4" />
            </div>
            Success Rate
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
          <div className="text-sm font-medium text-gray-500">Based on 45 reviews</div>
        </div>

        <Link href="/partners/dashboard/leads" className="bg-green-600 p-6 rounded-3xl shadow-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/30 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700"></div>
          <div className="relative z-10">
            <div className="text-green-100 font-medium text-sm mb-2">Live Broadcasts</div>
            <div className="text-white font-bold flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></span>
              3 New Opportunities
            </div>
          </div>
          <div className="relative z-10 flex items-center gap-2 text-green-100 font-bold text-sm group-hover:text-white transition-colors">
            View Broadcasts <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900">Recent Projects</h2>
            <Link href="/partners/dashboard/active" className="text-sm font-bold text-green-700 hover:underline">View All</Link>
          </div>
          <div className="space-y-6">
            {[
              { name: "50 Laptops for Corporate Office", status: "In Progress", date: "Started 2 days ago" },
              { name: "Server Rack Installation", status: "Completed", date: "Delivered last week" },
              { name: "Office Network Setup", status: "Completed", date: "Delivered 2 weeks ago" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div>
                  <div className="font-bold text-gray-900 mb-1">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.date}</div>
                </div>
                <div className={`px-3 py-1 rounded-lg text-xs font-bold ${
                  item.status === 'Completed' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'
                }`}>
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900">Recent Messages</h2>
            <Link href="/partners/dashboard/messages" className="text-sm font-bold text-green-700 hover:underline">Open Inbox</Link>
          </div>
          <div className="space-y-6">
            {[
              { sender: "BRIIZZ Coordinator", msg: "The client approved your proposal for the 50 laptops. We are initiating the contract.", time: "1 hour ago" },
              { sender: "Ahmed (Client)", msg: "Can you deliver by Tuesday instead of Wednesday?", time: "5 hours ago" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold shrink-0">
                  {item.sender.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-bold text-gray-900 text-sm">{item.sender}</div>
                    <div className="text-xs font-medium text-gray-400">{item.time}</div>
                  </div>
                  <div className="text-sm text-gray-600 line-clamp-2">{item.msg}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
