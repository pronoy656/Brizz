"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useApp } from "@/context/AppContext";
import {
  Search,
  CheckCircle2,
  Clock,
  Briefcase,
  ShieldCheck,
  Building,
  MapPin,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { ClientRequirement } from "@/lib/data";

function TrackContent() {
  const searchParams = useSearchParams();
  const initialCode = searchParams.get("code") || "";
  const { language, t } = useLanguage();
  const { requirements } = useApp();

  const [inputCode, setInputCode] = useState(initialCode);
  const [matchedReq, setMatchedReq] = useState<ClientRequirement | null>(null);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (initialCode) {
      handleSearchCode(initialCode);
    }
  }, [initialCode, requirements]);

  const handleSearchCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    const found = requirements.find(
      (r) => r.trackingCode.toUpperCase() === clean || r.id === clean
    );
    setMatchedReq(found || null);
    setSearched(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    handleSearchCode(inputCode);
  };

  const stages = [
    { label: "Requirement Submitted", desc: "Logged in triage database", step: 1 },
    { label: "Technical Review & Triage", desc: "Scope & pricing assessment", step: 2 },
    { label: "Partner Matched", desc: "Assigned to vetted specialist", step: 3 },
    { label: "In Progress & Execution", desc: "Active milestone build", step: 4 },
    { label: "Delivered & Verified", desc: "Final QA & handover", step: 5 },
  ];

  const getActiveStep = (status: ClientRequirement["status"]) => {
    switch (status) {
      case "Pending Triage":
        return 1;
      case "Matched":
        return 3;
      case "In Progress":
        return 4;
      case "Delivered":
      case "Completed":
        return 5;
      default:
        return 1;
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-10">
        {/* Hero Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>Live Milestone Tracker</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t("Track Your Requirement Status", "আপনার রিকোয়ারমেন্টের লাইভ অগ্রগতি")}
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-400">
            {t(
              "Enter your tracking reference code (e.g. BRZ-8831) to view assignment details, progress checkpoints, and partner updates.",
              "আপনার রেফারেন্স কোড দিন এবং রিয়েল-টাইমে প্রজেক্টের স্ট্যাটাস ট্র্যাক করুন।"
            )}
          </p>

          {/* Search Box */}
          <form onSubmit={handleFormSubmit} className="pt-2 max-w-lg mx-auto flex items-center gap-2">
            <div className="flex-1 flex items-center gap-2 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              <Search className="w-5 h-5 text-emerald-500 ml-2" />
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="Enter Reference Code (e.g. BRZ-8831)..."
                className="w-full bg-transparent text-sm font-mono uppercase tracking-wider text-slate-900 dark:text-white placeholder-slate-400 outline-none px-2 py-1"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 transition-all shrink-0"
            >
              Track
            </button>
          </form>

          <div className="text-xs text-slate-400">
            Demo tracking codes to test:{" "}
            <button
              type="button"
              onClick={() => {
                setInputCode("BRZ-8831");
                handleSearchCode("BRZ-8831");
              }}
              className="text-emerald-500 font-mono font-bold hover:underline ml-1"
            >
              BRZ-8831
            </button>
            ,{" "}
            <button
              type="button"
              onClick={() => {
                setInputCode("BRZ-9240");
                handleSearchCode("BRZ-9240");
              }}
              className="text-emerald-500 font-mono font-bold hover:underline ml-1"
            >
              BRZ-9240
            </button>
            ,{" "}
            <button
              type="button"
              onClick={() => {
                setInputCode("BRZ-7104");
                handleSearchCode("BRZ-7104");
              }}
              className="text-emerald-500 font-mono font-bold hover:underline ml-1"
            >
              BRZ-7104
            </button>
          </div>
        </div>

        {/* Search Results */}
        {searched && (
          <div>
            {matchedReq ? (
              <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-8 animate-in fade-in duration-300">
                {/* Header status bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-lg">
                        {matchedReq.trackingCode}
                      </span>
                      <span className="text-xs text-slate-400">Submitted on {matchedReq.submittedAt}</span>
                    </div>
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-2">
                      {matchedReq.serviceTitle}
                    </h2>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-extrabold text-sm self-start sm:self-auto">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    {matchedReq.status}
                  </div>
                </div>

                {/* Progress Checkpoints */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Milestone Progress:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    {stages.map((st) => {
                      const activeNum = getActiveStep(matchedReq.status);
                      const isPassed = st.step <= activeNum;
                      const isCurrent = st.step === activeNum;

                      return (
                        <div
                          key={st.step}
                          className={`p-4 rounded-2xl border transition-all ${
                            isPassed
                              ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400"
                              : "bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-400"
                          } ${isCurrent ? "ring-2 ring-emerald-500" : ""}`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-black">0{st.step}</span>
                            {isPassed ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            ) : (
                              <Clock className="w-4 h-4 opacity-40" />
                            )}
                          </div>
                          <div className="text-xs font-extrabold leading-snug">{st.label}</div>
                          <div className="text-[10px] opacity-75 mt-1">{st.desc}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Requirement & Assigned Partner Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="space-y-2 text-xs">
                    <h4 className="font-bold uppercase tracking-wider text-slate-400">Requirement Specs:</h4>
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 space-y-1.5 text-slate-700 dark:text-slate-300">
                      <div>
                        <strong>Client:</strong> {matchedReq.clientName}
                      </div>
                      <div>
                        <strong>District:</strong> {matchedReq.district}
                      </div>
                      <div>
                        <strong>Category:</strong> {matchedReq.serviceCategory}
                      </div>
                      <div>
                        <strong>Budget Scope:</strong> {matchedReq.budgetRange}
                      </div>
                      <div>
                        <strong>Timeline:</strong> {matchedReq.timeline}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <h4 className="font-bold uppercase tracking-wider text-slate-400">
                      Assigned Execution Partner:
                    </h4>
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 space-y-2 text-slate-700 dark:text-slate-300">
                      {matchedReq.assignedPartnerName ? (
                        <>
                          <div className="font-extrabold text-sm text-emerald-500 flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4" />
                            {matchedReq.assignedPartnerName}
                          </div>
                          <p className="text-[11px] text-slate-400">
                            Verified BRIIZZ Partner. Active supervision and quality milestones applied.
                          </p>
                          <div className="pt-1 text-[11px] text-slate-500">
                            Status: <strong>Active Execution</strong>
                          </div>
                        </>
                      ) : (
                        <div className="text-slate-400 py-3">
                          Triage in progress. Best matching specialist will be assigned within 2 hours.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-4 shadow-xl">
                <HelpCircle className="w-12 h-12 text-slate-400 mx-auto" />
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  No Requirement Found for &quot;{inputCode}&quot;
                </h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Please verify your reference code, or submit a new requirement to generate one instantly.
                </p>
                <Link
                  href="/requests/new"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
                >
                  Create New Requirement →
                </Link>
              </div>
            )}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default function TrackPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center text-slate-400">Loading tracker...</div>}>
      <TrackContent />
    </Suspense>
  );
}
