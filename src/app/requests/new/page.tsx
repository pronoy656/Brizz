"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useApp } from "@/context/AppContext";
import {
  Sparkles,
  Send,
  MapPin,
  Clock,
  Banknote,
  CheckCircle2,
  Building,
  User,
  Phone,
  Mail,
  ArrowRight,
  ArrowLeft,
  Briefcase,
  Layers
} from "lucide-react";
import { BRIZZ_DISTRICTS } from "@/lib/data";

function RequestFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language, t } = useLanguage();
  const { addRequirement } = useApp();

  const initialNeed = searchParams.get("need") || "";
  const initialDistrict = searchParams.get("district") || "Dhaka";
  const initialCategory = searchParams.get("category") || "technology";

  const [step, setStep] = useState(1);
  const [need, setNeed] = useState(initialNeed);
  const [category, setCategory] = useState(initialCategory);
  const [district, setDistrict] = useState(initialDistrict);
  const [budget, setBudget] = useState("৳50,000–৳1,00,000");
  const [budgetAmount, setBudgetAmount] = useState(75000);
  const [timeline, setTimeline] = useState("Within 1 Week");

  // Step 2: Client Info
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const [trackingCode, setTrackingCode] = useState<string | null>(null);

  useEffect(() => {
    if (initialNeed) setNeed(initialNeed);
  }, [initialNeed]);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!need.trim()) return;
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;

    const code = addRequirement({
      clientName,
      clientEmail: clientEmail || `${clientName.toLowerCase().replace(/\\s+/g, "")}@example.com`,
      clientPhone,
      company,
      district,
      serviceCategory: category,
      serviceTitle: need,
      budgetRange: budget,
      estimatedBudget: budgetAmount,
      timeline,
      description: description || need,
    });

    setTrackingCode(code);
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-[#060911] text-slate-900 dark:text-slate-100 overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Smart Requirement Builder</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
              {t("Tell BRIIZZ What You Need", "আপনার প্রয়োজন ব্রিজের সাথে শেয়ার করুন")}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              {t(
                "We will analyze, estimate, and assign the best matched verified specialists.",
                "আমাদের টিম আপনার রিকোয়ারমেন্ট যাচাই করে সর্বোত্তম সমাধান সমন্বয় করবে।"
              )}
            </p>
          </div>

          {/* Form Container */}
          <div className="relative p-6 sm:p-12 rounded-[2.5rem] bg-white/70 dark:bg-[#0a0f1d]/70 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 shadow-2xl shadow-emerald-500/5 transition-all duration-500">
            
            {trackingCode ? (
              <div className="text-center space-y-8 py-6 animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white font-black text-4xl flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/40 ring-8 ring-emerald-500/10">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                    Requirement Placed!
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Your dedicated reference code is ready. Our operations desk is currently reviewing the requirement.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 inline-block px-12 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                  <span className="text-xs text-slate-500 uppercase tracking-widest block mb-2 font-bold">
                    Reference Tracking Code
                  </span>
                  <span className="font-mono text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 tracking-widest">
                    {trackingCode}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                  <Link
                    href={`/requests/track?code=${trackingCode}`}
                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-sm shadow-xl shadow-emerald-600/20 hover:shadow-emerald-600/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Track Live Status</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/"
                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-bold text-sm text-center transition-all hover:-translate-y-1"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            ) : step === 1 ? (
              /* STEP 1: What do you need? */
              <form onSubmit={handleNext} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Progress Indicator */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                      Step 1 of 2: Requirement Details
                    </span>
                    <span className="text-xs font-black text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">50%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-1/2 rounded-full transition-all duration-500" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-extrabold text-slate-800 dark:text-slate-200 block mb-2">
                      What do you need help with? <span className="text-emerald-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Briefcase className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        required
                        value={need}
                        onChange={(e) => setNeed(e.target.value)}
                        placeholder="e.g. 20 office PCs with networking, or Custom Telemedicine app..."
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/50 dark:bg-[#060911]/50 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-extrabold text-slate-800 dark:text-slate-200 block mb-2">
                        Category
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Layers className="h-5 w-5 text-slate-400" />
                        </div>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/50 dark:bg-[#060911]/50 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all appearance-none shadow-inner"
                        >
                          <option value="technology">Technology & Web Development</option>
                          <option value="hardware">Hardware, PCs & Networking</option>
                          <option value="creative">Creative, Video & Branding</option>
                          <option value="digital">Digital Marketing & Ads</option>
                          <option value="business">Business Consulting & E-commerce</option>
                          <option value="professional">Specialist / Custom Requirement</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-extrabold text-slate-800 dark:text-slate-200 block mb-2">
                        District (All 64)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-slate-400" />
                        </div>
                        <select
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/50 dark:bg-[#060911]/50 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all appearance-none shadow-inner"
                        >
                          {BRIZZ_DISTRICTS.map((d) => (
                            <option key={d.en} value={d.en}>
                              {d.en} ({d.division})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-extrabold text-slate-800 dark:text-slate-200 block mb-2">
                        Approximate Budget
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Banknote className="h-5 w-5 text-slate-400" />
                        </div>
                        <select
                          value={budget}
                          onChange={(e) => {
                            setBudget(e.target.value);
                            if (e.target.value.includes("50,000")) setBudgetAmount(35000);
                            else if (e.target.value.includes("1,00,000")) setBudgetAmount(75000);
                            else if (e.target.value.includes("5,00,000")) setBudgetAmount(250000);
                            else setBudgetAmount(650000);
                          }}
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/50 dark:bg-[#060911]/50 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all appearance-none shadow-inner"
                        >
                          <option value="Under ৳50,000">Under ৳50,000</option>
                          <option value="৳50,000–৳1,00,000">৳50,000–৳1,00,000</option>
                          <option value="৳1,00,000–৳5,00,000">৳1,00,000–৳5,00,000</option>
                          <option value="৳5,00,000+">৳5,00,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-extrabold text-slate-800 dark:text-slate-200 block mb-2">
                        Desired Timeline
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Clock className="h-5 w-5 text-slate-400" />
                        </div>
                        <select
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/50 dark:bg-[#060911]/50 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all appearance-none shadow-inner"
                        >
                          <option value="ASAP">ASAP (Urgent)</option>
                          <option value="Within 1 Week">Within 1 Week</option>
                          <option value="Within 1 Month">Within 1 Month</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-200 hover:from-slate-800 hover:to-slate-700 dark:hover:from-slate-100 dark:hover:to-slate-300 text-white dark:text-slate-900 font-black text-base shadow-xl shadow-slate-900/10 dark:shadow-white/10 hover:-translate-y-1 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Continue to Contact Info</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            ) : (
              /* STEP 2: Contact Information */
              <form onSubmit={handleFinalSubmit} className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                {/* Progress Indicator */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                      Step 2 of 2: Contact & Confirmation
                    </span>
                    <span className="text-xs font-black text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded-md">100%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-full rounded-full transition-all duration-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-extrabold text-slate-800 dark:text-slate-200 block mb-2">
                      Your Full Name <span className="text-emerald-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Mahfuz Rahman"
                        className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/50 dark:bg-[#060911]/50 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-extrabold text-slate-800 dark:text-slate-200 block mb-2">
                      Phone / WhatsApp <span className="text-emerald-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="01XXXXXXXXX"
                        className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/50 dark:bg-[#060911]/50 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-inner"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-extrabold text-slate-800 dark:text-slate-200 block mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/50 dark:bg-[#060911]/50 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-extrabold text-slate-800 dark:text-slate-200 block mb-2">
                      Company / Organization
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Building className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Acme Innovations"
                        className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/50 dark:bg-[#060911]/50 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-inner"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-extrabold text-slate-800 dark:text-slate-200 block mb-2">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Mention any specific features, technical preferences, or constraints..."
                    className="w-full p-4 rounded-2xl bg-white/50 dark:bg-[#060911]/50 border border-slate-200 dark:border-slate-700/60 text-sm text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-inner resize-none"
                  />
                </div>

                {/* Requirement Summary Box */}
                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 shadow-inner">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-sm">Requirement Summary</span>
                  </div>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div className="text-slate-500">Need:</div>
                    <div className="text-slate-900 dark:text-white font-bold text-right truncate">{need}</div>
                    <div className="text-slate-500">District:</div>
                    <div className="text-slate-900 dark:text-white font-bold text-right">{district}</div>
                    <div className="text-slate-500">Budget:</div>
                    <div className="text-slate-900 dark:text-white font-bold text-right">{budget}</div>
                    <div className="text-slate-500">Timeline:</div>
                    <div className="text-slate-900 dark:text-white font-bold text-right">{timeline}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 font-extrabold text-sm text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 transition-all hover:-translate-y-1 shadow-sm"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="flex-1 w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black text-base shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/40 hover:-translate-y-1 flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit & Generate Tracking Code</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewRequestPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center text-slate-400 font-bold">Loading Builder...</div>}>
      <RequestFormContent />
    </Suspense>
  );
}
