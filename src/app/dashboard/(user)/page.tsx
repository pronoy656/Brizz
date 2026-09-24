"use client";

import React from "react";
import { CheckCircle2, Clock, MapPin, RadioTower, ShieldCheck, User } from "lucide-react";
import Link from "next/link";

const ACTIVE_REQUESTS = [
  {
    id: "BRZ-8924",
    title: "Need 2,000 pieces of broiler chicken weekly",
    category: "Wholesale & Supply",
    location: "Dhaka",
    submittedAt: "2 hours ago",
    status: "broadcasting", // 'broadcasting' | 'reviewing' | 'matched'
    progress: 2,
    partnersReviewing: 14,
  },
  {
    id: "BRZ-8910",
    title: "Complete IT infrastructure setup for 20-person office",
    category: "Tech & Hardware",
    location: "Chattogram",
    submittedAt: "2 days ago",
    status: "matched",
    progress: 4,
    partnersReviewing: 5,
    matchedPartner: "TechNova Solutions"
  }
];

export default function UserDashboard() {
  return (
    <div className="space-y-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Sarah</h1>
          <p className="text-gray-600 mt-1">Track the status of your requirements.</p>
        </div>
        <Link href="/needs/new" className="btn-primary py-2.5 px-5">
          Submit New Need
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="text-gray-500 font-medium text-sm mb-2">Active Requests</div>
          <div className="text-3xl font-bold text-gray-900">2</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="text-gray-500 font-medium text-sm mb-2">Completed Requests</div>
          <div className="text-3xl font-bold text-gray-900">5</div>
        </div>
        <div className="bg-brand-950 p-6 rounded-2xl shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 blur-2xl rounded-full"></div>
          <div className="relative z-10">
            <div className="text-brand-200 font-medium text-sm mb-2">Network Status</div>
            <div className="text-white font-bold flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
              Broadcasting active
            </div>
          </div>
        </div>
      </div>

      {/* Active Requests */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">Active Requirements</h2>
        <div className="space-y-6">
          
          {ACTIVE_REQUESTS.map((req) => (
            <div key={req.id} className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
              
              <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{req.id}</span>
                    <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {req.submittedAt}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{req.title}</h3>
                  <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-gray-400" /> {req.location}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{req.category}</span>
                  </div>
                </div>

                {/* Dynamic Status Badges */}
                <div className="flex-shrink-0">
                  {req.status === 'broadcasting' && (
                    <div className="bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold">
                      <RadioTower className="w-4 h-4 animate-pulse" /> Broadcasting to Network
                    </div>
                  )}
                  {req.status === 'matched' && (
                    <div className="bg-green-50 border border-green-100 text-green-700 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold">
                      <ShieldCheck className="w-4 h-4" /> Provider Matched
                    </div>
                  )}
                </div>
              </div>

              {/* Progress Tracker (The core Concierge UX) */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="relative">
                  {/* Progress Line */}
                  <div className="absolute top-4 left-4 right-4 h-1 bg-gray-200 rounded-full z-0"></div>
                  <div 
                    className="absolute top-4 left-4 h-1 bg-brand-800 rounded-full z-0 transition-all duration-1000"
                    style={{ width: `${(req.progress - 1) * 33.33}%` }}
                  ></div>

                  {/* Steps */}
                  <div className="relative z-10 flex justify-between">
                    {[
                      { step: 1, label: "Requirement Received", desc: "We got it." },
                      { step: 2, label: "Alerting Network", desc: req.status === 'broadcasting' ? `${req.partnersReviewing} partners are viewing this.` : "Done." },
                      { step: 3, label: "Partners Proposing", desc: "Filtering the best offers." },
                      { step: 4, label: "Match Secured", desc: req.matchedPartner ? `Matched with ${req.matchedPartner}` : "Pending" },
                    ].map((s, i) => {
                      const isComplete = req.progress > s.step;
                      const isCurrent = req.progress === s.step;
                      
                      return (
                        <div key={i} className="flex flex-col items-center text-center w-1/4">
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold mb-3 border-2 transition-colors ${
                            isComplete ? 'bg-brand-800 border-brand-800 text-white' : 
                            isCurrent ? 'bg-white border-brand-800 text-brand-800 shadow-[0_0_0_4px_rgba(74,20,140,0.1)]' : 
                            'bg-white border-gray-300 text-gray-400'
                          }`}>
                            {isComplete ? <CheckCircle2 className="w-5 h-5" /> : s.step}
                          </div>
                          <div className={`text-sm font-bold ${isCurrent || isComplete ? 'text-gray-900' : 'text-gray-400'}`}>
                            {s.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-1 hidden sm:block">
                            {s.desc}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              
              {/* Action Area based on status */}
              {req.status === 'matched' && (
                <div className="mt-6 flex justify-end">
                  <button className="bg-brand-950 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-900 transition-colors">
                    <MessageSquare className="w-4 h-4" /> Message {req.matchedPartner}
                  </button>
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
