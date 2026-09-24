"use client";

import React from "react";
import { Users, Star, ShieldCheck, MapPin } from "lucide-react";

export default function PartnerRosterPage() {
  const partners = [
    { name: "TechNova Solutions", category: "IT & Infrastructure", tier: "Elite", district: "Dhaka", rating: 4.9, completed: 142 },
    { name: "GreenAgro Ltd", category: "Wholesale & Supply", tier: "Gold", district: "Gazipur", rating: 4.7, completed: 89 },
    { name: "EventPro Sylhet", category: "Events & Rentals", tier: "Silver", district: "Sylhet", rating: 4.2, completed: 34 },
    { name: "BuildFast Real Estate", category: "Real Estate", tier: "Platinum", district: "Chattogram", rating: 5.0, completed: 210 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Partner Roster</h1>
        <p className="text-neutral-400 mt-1">View and manage the top-tier providers powering our network.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {partners.map((p, i) => (
          <div key={i} className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl hover:border-neutral-700 transition-colors">
            <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center text-white font-black mb-4">
              {p.name.charAt(0)}
            </div>
            <h3 className="text-white font-bold text-lg leading-tight mb-1">{p.name}</h3>
            <p className="text-neutral-500 text-xs font-bold uppercase mb-4">{p.category}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> {p.tier} Tier
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 text-blue-500" /> {p.district}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-amber-500" /> {p.rating}
              </div>
              <div className="text-xs text-neutral-500 font-bold">
                {p.completed} Projects
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
