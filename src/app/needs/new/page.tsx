"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Search, MapPin, DollarSign, Clock, ShieldCheck, HelpCircle } from "lucide-react";

export default function ProgressiveRequirementForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    budget: "",
    urgency: "",
    description: "",
    preferences: [] as string[]
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const togglePreference = (pref: string) => {
    setFormData(prev => ({
      ...prev,
      preferences: prev.preferences.includes(pref) 
        ? prev.preferences.filter(p => p !== pref)
        : [...prev.preferences, pref]
    }));
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep(); // Move to success step
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-24 pb-12">
      
      {/* Premium Header */}
      <div className="w-full bg-white border-b border-gray-200 py-6 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 max-w-4xl flex items-center justify-between">
          <Link href="/" className="font-black text-brand-900 tracking-tight text-xl">
            BRIIZZ
          </Link>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-800" />
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Secure Request</span>
          </div>
        </div>
      </div>

      <div className="flex-1 container mx-auto px-4 lg:px-8 max-w-3xl mt-12">
        
        {step < 4 && (
          <div className="mb-12">
            <Link href="#" onClick={(e) => { e.preventDefault(); if(step>1) prevStep(); else window.history.back(); }} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> {step > 1 ? "Back" : "Cancel"}
            </Link>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Tell Us What You Need.
            </h1>
            <p className="text-lg text-gray-600">
              We'll find the right providers, coordinate the process, and ensure you get exactly what you're looking for.
            </p>

            {/* Premium Progress Bar */}
            <div className="flex items-center justify-between mt-12 relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0 rounded-full" />
              <div 
                className="absolute top-1/2 left-0 h-1 bg-brand-800 -translate-y-1/2 z-0 rounded-full transition-all duration-500" 
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
              
              {[1, 2, 3].map(num => (
                <div key={num} className="relative z-10 flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    step >= num 
                    ? "bg-brand-800 text-white shadow-md shadow-brand-800/30" 
                    : "bg-white border-2 border-gray-200 text-gray-400"
                  }`}>
                    {step > num ? <Check className="w-5 h-5" /> : num}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider absolute -bottom-6 w-32 text-center left-1/2 -translate-x-1/2 ${step >= num ? "text-brand-900" : "text-gray-400"}`}>
                    {num === 1 ? "The Goal" : num === 2 ? "Details" : "Preferences"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10 md:p-12 transition-all duration-500 relative overflow-hidden">
          
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-bl-[100px] -z-0 opacity-50"></div>

          <form onSubmit={submitForm} className="relative z-10">
            
            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-4">
                  <label className="text-xl font-bold text-gray-900 block">What are you looking for?</label>
                  <p className="text-sm text-gray-500 mb-4">Be specific. For example: "I need 20 PCs and a network setup for a new office."</p>
                  <div className="relative">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-800" />
                    <input
                      type="text"
                      autoFocus
                      required
                      value={formData.title}
                      onChange={e => setFormData({...formData, title: e.target.value})}
                      placeholder="Type your requirement here..."
                      className="w-full pl-16 pr-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-brand-800 text-lg outline-none transition-all hover:border-gray-300 bg-white"
                    />
                  </div>
                </div>

                <div className="pt-8">
                  <button 
                    type="button" 
                    onClick={nextStep}
                    disabled={!formData.title.trim()}
                    className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Provide Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400"/> Location</label>
                    <select 
                      value={formData.location}
                      onChange={e => setFormData({...formData, location: e.target.value})}
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-brand-800 outline-none bg-gray-50"
                    >
                      <option value="">Select Location</option>
                      <option value="dhaka">Dhaka</option>
                      <option value="chittagong">Chittagong</option>
                      <option value="sylhet">Sylhet</option>
                      <option value="remote">Remote / Online</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2"><DollarSign className="w-4 h-4 text-gray-400"/> Estimated Budget</label>
                    <select 
                      value={formData.budget}
                      onChange={e => setFormData({...formData, budget: e.target.value})}
                      className="w-full p-4 rounded-xl border border-gray-200 focus:border-brand-800 outline-none bg-gray-50"
                    >
                      <option value="">Select Range</option>
                      <option value="under-10k">Under ৳10,000</option>
                      <option value="10k-50k">৳10,000 - ৳50,000</option>
                      <option value="50k-100k">৳50,000 - ৳100,000</option>
                      <option value="over-100k">Over ৳100,000</option>
                      <option value="need-quote">I need a quote</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Detailed Description</label>
                  <textarea 
                    rows={4}
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    placeholder="Describe any specific requirements, deadlines, or technical details..."
                    className="w-full p-4 rounded-xl border border-gray-200 focus:border-brand-800 outline-none bg-gray-50 resize-none"
                  ></textarea>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button type="button" onClick={prevStep} className="px-6 py-4 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors">
                    Back
                  </button>
                  <button type="button" onClick={nextStep} className="flex-1 btn-primary py-4">
                    Continue to Preferences
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Any Preferences?</h2>
                <p className="text-gray-500 text-sm mb-6">These help us route your request to the exact right network layer.</p>
                
                <div className="space-y-4">
                  {[
                    { id: "verified", title: "BRIIZZ Verified Only", desc: "Only match me with providers who have passed full business verification.", icon: ShieldCheck },
                    { id: "urgent", title: "Urgent Requirement", desc: "I need this done immediately. Prioritize speed.", icon: Clock },
                    { id: "quotes", title: "Need Multiple Quotes", desc: "I want to compare offers from at least 3 different providers.", icon: HelpCircle },
                  ].map(pref => (
                    <label 
                      key={pref.id}
                      className={`flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                        formData.preferences.includes(pref.id)
                        ? "border-brand-800 bg-brand-50"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <div className={`mt-0.5 w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        formData.preferences.includes(pref.id) ? "bg-brand-800 border-brand-800" : "border-gray-300"
                      }`}>
                        {formData.preferences.includes(pref.id) && <Check className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 flex items-center gap-2">
                          <pref.icon className={`w-4 h-4 ${formData.preferences.includes(pref.id) ? "text-brand-800" : "text-gray-400"}`} />
                          {pref.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">{pref.desc}</p>
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={formData.preferences.includes(pref.id)}
                        onChange={() => togglePreference(pref.id)}
                      />
                    </label>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button type="button" onClick={prevStep} className="px-6 py-4 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors">
                    Back
                  </button>
                  <button type="submit" className="flex-1 btn-primary py-4">
                    Submit Requirement
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: SUCCESS */}
            {step === 4 && (
              <div className="text-center py-12 animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                    <Check className="w-8 h-8" />
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Requirement Received!</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                  Your requirement <span className="font-semibold text-gray-900">#BRZ-1082</span> has been secured. Our network is now actively evaluating your request.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 max-w-md mx-auto mb-10 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-brand-800 animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Current Status</span>
                  </div>
                  <p className="text-brand-800 font-semibold">Reviewing your requirements and searching the trusted network...</p>
                </div>

                <Link href="/dashboard" className="btn-primary inline-flex items-center gap-2 py-4 px-8">
                  Track in Dashboard <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
}
