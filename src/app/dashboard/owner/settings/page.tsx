"use client";

import React, { useState } from "react";
import { Settings2, Shield, Bell, Percent, Bot, Key, AlertTriangle, Save } from "lucide-react";

export default function PlatformSettingsPage() {
  const [platformFee, setPlatformFee] = useState(5.0);
  const [autoMatch, setAutoMatch] = useState(false);
  const [strictVetting, setStrictVetting] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);
  
  const [hasChanges, setHasChanges] = useState(false);

  const handleSave = () => {
    // In a real app, this would hit an API
    setHasChanges(false);
    alert("Global Platform Configuration Updated Successfully.");
  };

  const markChanged = () => setHasChanges(true);

  return (
    <div className="space-y-8 max-w-5xl">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Platform Configuration</h1>
          <p className="text-neutral-400 mt-1">Manage global system parameters and automation rules.</p>
        </div>
        {hasChanges && (
          <button 
            onClick={handleSave}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 px-6 py-3 rounded-xl font-bold transition-colors shadow-[0_0_15px_rgba(245,158,11,0.3)]"
          >
            <Save className="w-5 h-5" /> Apply Changes
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-8">
          
          {/* Revenue & Fees */}
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <Percent className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">Monetization & Fees</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="flex justify-between text-sm font-bold text-neutral-300 mb-4">
                  <span>Global Platform Take Rate (Margin)</span>
                  <span className="text-amber-500">{platformFee.toFixed(1)}%</span>
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="15" 
                  step="0.1" 
                  value={platformFee}
                  onChange={(e) => { setPlatformFee(parseFloat(e.target.value)); markChanged(); }}
                  className="w-full accent-amber-500 h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                />
                <p className="text-xs text-neutral-500 mt-2">
                  Warning: Increasing the fee above 8% may cause partner attrition. Current projected monthly revenue at {platformFee}% is ৳ {(12400000 * (platformFee/100)).toLocaleString()}.
                </p>
              </div>
            </div>
          </div>

          {/* Automation Rules */}
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">System Automation</h2>
            </div>
            
            <div className="space-y-6">
              
              <label className="flex items-start justify-between cursor-pointer group">
                <div className="pr-8">
                  <div className="font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">AI Auto-Matching</div>
                  <div className="text-sm text-neutral-400">Bypass the Admin Triage queue. Automatically broadcast user requests to top-tier partners instantly.</div>
                </div>
                <div className="relative inline-flex items-center mt-1">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={autoMatch}
                    onChange={(e) => { setAutoMatch(e.target.checked); markChanged(); }}
                  />
                  <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                </div>
              </label>

              <div className="border-t border-neutral-800 my-4"></div>

              <label className="flex items-start justify-between cursor-pointer group">
                <div className="pr-8">
                  <div className="font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">Strict Partner Vetting</div>
                  <div className="text-sm text-neutral-400">Require manual Admin approval for Trade Licenses before a partner can receive broadcasts.</div>
                </div>
                <div className="relative inline-flex items-center mt-1">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    checked={strictVetting}
                    onChange={(e) => { setStrictVetting(e.target.checked); markChanged(); }}
                  />
                  <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                </div>
              </label>

            </div>
          </div>

        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl">
            <h2 className="text-lg font-bold text-white mb-4">Security & Access</h2>
            
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-neutral-950 rounded-xl border border-neutral-800 hover:border-neutral-600 transition-colors group">
                <div className="flex items-center gap-3">
                  <Key className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                  <span className="font-bold text-neutral-300 group-hover:text-white">API Keys</span>
                </div>
              </button>

              <button className="w-full flex items-center justify-between p-4 bg-neutral-950 rounded-xl border border-neutral-800 hover:border-neutral-600 transition-colors group">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                  <span className="font-bold text-neutral-300 group-hover:text-white">Audit Logs</span>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-3xl">
            <div className="flex items-center gap-2 text-red-500 font-bold mb-2">
              <AlertTriangle className="w-5 h-5" /> Danger Zone
            </div>
            <p className="text-sm text-red-400/80 mb-6">
              Actions here can severely impact platform stability and revenue.
            </p>
            <button className="w-full bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white font-bold py-3 rounded-xl transition-colors border border-red-500/30">
              Halt All Operations
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
