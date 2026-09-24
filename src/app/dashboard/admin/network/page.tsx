"use client";

import React from "react";
import { Map, MapPin, AlertTriangle, ArrowRight } from "lucide-react";

export default function DistrictNetworkPage() {
  const districts = [
    { name: "Dhaka", partners: 1240, activeReqs: 45, status: "Healthy" },
    { name: "Chattogram", partners: 850, activeReqs: 21, status: "Healthy" },
    { name: "Sylhet", partners: 320, activeReqs: 18, status: "Warning" },
    { name: "Rajshahi", partners: 190, activeReqs: 12, status: "Critical" },
    { name: "Khulna", partners: 210, activeReqs: 8, status: "Healthy" },
    { name: "Barishal", partners: 150, activeReqs: 5, status: "Warning" },
  ];

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <Map className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">District Network</h1>
            <p className="text-slate-600 mt-1">Monitor partner supply vs user demand across all 64 districts.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* District List */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Coverage Status</h2>
          
          <div className="space-y-4">
            {districts.map((d, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    d.status === 'Healthy' ? 'bg-emerald-100 text-emerald-600' : 
                    d.status === 'Warning' ? 'bg-amber-100 text-amber-600' : 'bg-red-100 text-red-600'
                  }`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{d.name}</div>
                    <div className="text-xs text-slate-500">{d.partners} Verified Partners</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-600">{d.activeReqs} Live</div>
                  <div className="text-xs text-slate-500">Requests</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Panel */}
        <div className="space-y-6">
          
          <div className="bg-red-50 border border-red-100 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 text-red-600 font-bold text-lg mb-2">
              <AlertTriangle className="w-6 h-6" /> Supply Shortage Detected
            </div>
            <p className="text-red-700/80 mb-6 font-medium">
              Rajshahi currently has 12 active requests but only 190 partners, causing high match latency.
            </p>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2">
              Boost Marketing in Rajshahi <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-blue-600 text-white rounded-3xl p-8 shadow-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full group-hover:scale-150 transition-transform"></div>
            <h3 className="text-xl font-bold mb-2 relative z-10">Expand Network</h3>
            <p className="text-blue-100 mb-6 text-sm relative z-10">
              Run targeted onboarding campaigns in underserved districts to balance the ecosystem.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold w-full relative z-10 hover:bg-blue-50 transition-colors">
              Create Campaign
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
