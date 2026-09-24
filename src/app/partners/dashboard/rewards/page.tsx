"use client";

import React from "react";
import { Award, Star, ShieldCheck, Zap, Trophy, TrendingUp } from "lucide-react";

export default function RewardsPage() {
  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Rewards & Status</h1>
          <p className="text-gray-600 mt-1">Track your network reputation and unlock exclusive benefits.</p>
        </div>
      </div>

      {/* Main Status Card */}
      <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-600/30 flex-shrink-0 border-4 border-white">
            <Trophy className="w-16 h-16 text-white" />
          </div>
          
          <div className="flex-1 w-full text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Current Tier</div>
                <h2 className="text-3xl font-black text-gray-900">Elite Partner</h2>
              </div>
              <div className="bg-gray-50 px-4 py-2 rounded-xl border border-gray-200 inline-flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-bold text-gray-900">4,850 XP</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                <span>Progress to Platinum Tier</span>
                <span>150 XP remaining</span>
              </div>
              <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Unlocked Benefits */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-green-600" /> Current Benefits
          </h3>
          <div className="space-y-4">
            {[
              "Priority placement in user search results",
              "Access to High-Budget Enterprise Broadcasts",
              "Reduced BRIIZZ platform fee (only 3%)",
              "Dedicated Account Coordinator"
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon className="w-3.5 h-3.5" />
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones & Badges */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-green-600" /> Earned Badges
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-yellow-500 shadow-sm mb-3">
                <Zap className="w-6 h-6" />
              </div>
              <div className="font-bold text-gray-900 text-sm mb-1">Fast Responder</div>
              <div className="text-xs text-gray-500">Replies within 1 hour</div>
            </div>
            
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-sm mb-3">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="font-bold text-gray-900 text-sm mb-1">High Volume</div>
              <div className="text-xs text-gray-500">Completed 10+ projects</div>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-500 shadow-sm mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="font-bold text-gray-900 text-sm mb-1">Trusted Quality</div>
              <div className="text-xs text-gray-500">Maintains 5-star rating</div>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl flex flex-col items-center text-center opacity-50 grayscale">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-400 shadow-sm mb-3">
                <Star className="w-6 h-6" />
              </div>
              <div className="font-bold text-gray-900 text-sm mb-1">Enterprise Star</div>
              <div className="text-xs text-gray-500">Locked</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  )
}
