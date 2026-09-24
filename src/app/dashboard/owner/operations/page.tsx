"use client";

import React from "react";
import { Globe2, MapPin, Activity, CheckCircle2 } from "lucide-react";

export default function GlobalOperationsPage() {
  const operations = [
    {
      id: "PRJ-9015",
      req: "50 Laptops for Corporate Office",
      user: "Ahmed (Dhaka)",
      partner: "TechNova Solutions",
      value: "৳ 2,50,000",
      currentStep: 2, // 0: Reserved, 1: Packaging, 2: In Transit, 3: Delivered
      health: "good"
    },
    {
      id: "PRJ-8842",
      req: "Monthly Supply Organic Veg",
      user: "SuperFresh Mart (Gazipur)",
      partner: "GreenAgro Ltd",
      value: "৳ 85,000 / mo",
      currentStep: 3,
      health: "good"
    },
    {
      id: "PRJ-8710",
      req: "100 Banquet Chairs",
      user: "Hasan (Sylhet)",
      partner: "EventPro Sylhet",
      value: "৳ 45,000",
      currentStep: 1,
      health: "warning" // Delayed during packaging
    }
  ];

  const steps = ["Reserved", "Packaging", "In Transit", "Delivered"];

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Global Operations</h1>
          <p className="text-neutral-400 mt-1">Real-time God-mode tracking of all active network deliveries.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
            <Globe2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-neutral-400 text-sm font-bold uppercase tracking-wider mb-1">Active Projects</div>
            <div className="text-2xl font-bold text-white">87</div>
          </div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <div className="text-neutral-400 text-sm font-bold uppercase tracking-wider mb-1">Total Network Value</div>
            <div className="text-2xl font-bold text-white">৳ 3.2M</div>
          </div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <div className="text-neutral-400 text-sm font-bold uppercase tracking-wider mb-1">Delayed / At Risk</div>
            <div className="text-2xl font-bold text-white">3</div>
          </div>
        </div>
      </div>

      {/* Tracker List */}
      <div className="space-y-6">
        {operations.map((op, i) => (
          <div key={i} className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl flex flex-col gap-6">
            
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-neutral-400 bg-neutral-800 px-2 py-1 rounded-md">{op.id}</span>
                  {op.health === 'warning' && (
                    <span className="text-xs font-bold text-red-500 bg-red-500/10 px-2 py-1 rounded-md animate-pulse">Needs Intervention</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white">{op.req}</h3>
                <div className="text-sm text-neutral-400 mt-1">
                  User: <span className="text-white font-medium">{op.user}</span> • Partner: <span className="text-amber-500 font-medium">{op.partner}</span>
                </div>
              </div>
              <div className="lg:text-right">
                <div className="text-sm text-neutral-500 font-bold uppercase mb-1">Contract Value</div>
                <div className="text-2xl font-black text-emerald-400">{op.value}</div>
              </div>
            </div>

            {/* Stepper */}
            <div className="relative mt-4">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-neutral-800 -translate-y-1/2 rounded-full"></div>
              <div 
                className={`absolute top-1/2 left-0 h-1 -translate-y-1/2 rounded-full transition-all duration-1000 ${op.health === 'warning' ? 'bg-red-500' : 'bg-amber-500'}`} 
                style={{ width: `${(op.currentStep / (steps.length - 1)) * 100}%` }}
              ></div>
              
              <div className="relative flex justify-between">
                {steps.map((step, index) => {
                  const isCompleted = index <= op.currentStep;
                  const isCurrent = index === op.currentStep;
                  const isWarning = op.health === 'warning' && isCurrent;

                  return (
                    <div key={step} className="flex flex-col items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center border-4 relative z-10 transition-colors ${
                        isCompleted 
                          ? isWarning ? 'bg-red-500 border-neutral-900' : 'bg-amber-500 border-neutral-900' 
                          : 'bg-neutral-800 border-neutral-900'
                      }`}>
                        {isCompleted && !isWarning && <CheckCircle2 className="w-3 h-3 text-neutral-900" />}
                      </div>
                      <span className={`text-xs font-bold ${
                        isCurrent 
                          ? isWarning ? 'text-red-500' : 'text-amber-500' 
                          : isCompleted ? 'text-neutral-300' : 'text-neutral-600'
                      }`}>
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
