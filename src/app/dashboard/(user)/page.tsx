"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import {
  CheckCircle2,
  Clock,
  MapPin,
  RadioTower,
  ShieldCheck,
  User,
  MessageSquare,
  ArrowRight,
  PlusCircle,
  Lock,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Eye,
  FileCheck,
  AlertCircle,
  PhoneCall,
  Download,
} from "lucide-react";

interface RequirementItem {
  id: string;
  title: string;
  category: string;
  location: string;
  budget: string;
  submittedAt: string;
  status: "broadcasting" | "reviewing" | "matched" | "completed";
  progress: number; // 1 to 4
  partnersReviewing?: number;
  matchedPartner?: string;
  partnerAvatar?: string;
  escrowAmount?: string;
  nextMilestone?: string;
}

const DEMO_REQUESTS: RequirementItem[] = [
  {
    id: "REQ-8924",
    title: "Custom Enterprise Web Portal & B2B Inventory System",
    category: "Software & Web Development",
    location: "Dhaka (Nationwide Delivery)",
    budget: "৳65,000",
    submittedAt: "2 days ago",
    status: "matched",
    progress: 3,
    matchedPartner: "Apex IT Solutions & Cloud",
    partnerAvatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&auto=format&fit=crop&q=80",
    escrowAmount: "৳35,000 locked in escrow",
    nextMilestone: "Milestone 2: Frontend Design Approval & DB Architecture",
  },
  {
    id: "REQ-9102",
    title: "Bulk Pakistani Designer Lawn & Boutique Suits (150 Sets)",
    category: "Wholesale & Global Sourcing",
    location: "Karachi to Dhaka Air Cargo",
    budget: "৳1,80,000",
    submittedAt: "5 hours ago",
    status: "broadcasting",
    progress: 2,
    partnersReviewing: 14,
    escrowAmount: "Pending match confirmation",
    nextMilestone: "Master sample verification & freight cost quotation",
  },
];

export default function UserDashboardPage() {
  const { user } = useAuth();
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedReq, setSelectedReq] = useState<RequirementItem | null>(null);
  const [msgOpen, setMsgOpen] = useState(false);

  const filteredRequests = DEMO_REQUESTS.filter((req) => {
    if (activeTab === "active") return req.status !== "completed";
    if (activeTab === "matched") return req.status === "matched";
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Top Welcome Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 text-white shadow-xl relative overflow-hidden border border-white/10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Client Workspace</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Welcome back, {user?.name || "Tanvir Ahmed"}!
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Track real-time progress on your active business requirements, communicate with pre-vetted specialists, and safely manage escrow milestone payments.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/needs/new"
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Post New Need</span>
            </Link>
            <Link
              href="/services"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/15 transition-all"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Accountable Key Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 shadow-sm space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>Active Needs</span>
            <RadioTower className="w-4 h-4 text-blue-500 animate-pulse" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">2</div>
          <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">1 In Progress · 1 Sourcing</div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 shadow-sm space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>Matched Partners</span>
            <User className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">3</div>
          <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Pre-screened & Vetted</div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 shadow-sm space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>Escrow Protected</span>
            <Lock className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">৳35,000</div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">100% Refund Safeguard</div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 shadow-sm space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>Completed Jobs</span>
            <CheckCircle2 className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">5</div>
          <div className="text-xs text-amber-600 dark:text-amber-400 font-medium">4.9 Average Rating</div>
        </div>
      </div>

      {/* Active Requirements List */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Active Requirements & Milestone Tracking
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Live updates on matchmaking, quotes, and project development.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "all" ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm" : "text-slate-500"
              }`}
            >
              All (2)
            </button>
            <button
              onClick={() => setActiveTab("matched")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "matched" ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm" : "text-slate-500"
              }`}
            >
              Matched (1)
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {filteredRequests.map((req) => (
            <div
              key={req.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all space-y-6"
            >
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      {req.id}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {req.submittedAt}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300">
                      Budget: {req.budget}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                    {req.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-500" />
                      {req.location}
                    </span>
                    <span>•</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{req.category}</span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="shrink-0">
                  {req.status === "matched" ? (
                    <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span>Provider Matched & Active</span>
                    </div>
                  ) : (
                    <div className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center gap-2">
                      <RadioTower className="w-4 h-4 animate-pulse text-blue-500" />
                      <span>Broadcasting to Network</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Progress 4-Step Pipeline */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
                  <div className={`p-3 rounded-xl border ${req.progress >= 1 ? "bg-white dark:bg-white/5 border-blue-500/30 text-blue-600 dark:text-blue-400" : "bg-transparent border-slate-200 dark:border-white/5 text-slate-400"}`}>
                    <div className="text-[10px] font-extrabold uppercase">Step 01</div>
                    <div className="text-xs font-bold mt-0.5">Need Briefed</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Requirement logged</div>
                  </div>

                  <div className={`p-3 rounded-xl border ${req.progress >= 2 ? "bg-white dark:bg-white/5 border-blue-500/30 text-blue-600 dark:text-blue-400" : "bg-transparent border-slate-200 dark:border-white/5 text-slate-400"}`}>
                    <div className="text-[10px] font-extrabold uppercase">Step 02</div>
                    <div className="text-xs font-bold mt-0.5">Network Alerted</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{req.partnersReviewing ? `${req.partnersReviewing} partners viewing` : "Verified filter"}</div>
                  </div>

                  <div className={`p-3 rounded-xl border ${req.progress >= 3 ? "bg-white dark:bg-white/5 border-emerald-500/30 text-emerald-600 dark:text-emerald-400" : "bg-transparent border-slate-200 dark:border-white/5 text-slate-400"}`}>
                    <div className="text-[10px] font-extrabold uppercase">Step 03</div>
                    <div className="text-xs font-bold mt-0.5">Partner Assigned</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{req.matchedPartner || "Filtering quotes"}</div>
                  </div>

                  <div className={`p-3 rounded-xl border ${req.progress >= 4 ? "bg-white dark:bg-white/5 border-emerald-500/30 text-emerald-600 dark:text-emerald-400" : "bg-transparent border-slate-200 dark:border-white/5 text-slate-400"}`}>
                    <div className="text-[10px] font-extrabold uppercase">Step 04</div>
                    <div className="text-xs font-bold mt-0.5">Milestone Delivery</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Escrow protected</div>
                  </div>
                </div>

                {/* Milestone Detail Note */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-200 dark:border-white/5 text-xs">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                    <span><strong>Current Milestone:</strong> {req.nextMilestone}</span>
                  </div>
                  <div className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{req.escrowAmount}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Strip */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                {req.matchedPartner ? (
                  <div className="flex items-center gap-3">
                    <img
                      src={req.partnerAvatar}
                      alt={req.matchedPartner}
                      className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-white/10"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {req.matchedPartner}
                      </div>
                      <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Assigned Lead Provider
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <RadioTower className="w-4 h-4 text-blue-500 animate-pulse" />
                    <span>BRIIZZ matchmaking desk is curating top 2 offers for you.</span>
                  </div>
                )}

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  {req.matchedPartner && (
                    <button
                      onClick={() => setMsgOpen(true)}
                      className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Message Partner</span>
                    </button>
                  )}

                  <Link
                    href={`/requests/track`}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>View Full Log</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Escrow Protection & Invoices Table */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>Escrow Milestones & Invoices</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Funds are held safely in BRIIZZ escrow until deliverables are inspected.
            </p>
          </div>
          <Link href="/dashboard/billing" className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
            View All →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 dark:border-white/5 text-slate-400 uppercase tracking-wider text-[10px]">
                <th className="py-3 px-3">Invoice #</th>
                <th className="py-3 px-3">Requirement / Milestone</th>
                <th className="py-3 px-3">Amount</th>
                <th className="py-3 px-3">Escrow Status</th>
                <th className="py-3 px-3 text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 font-medium">
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-900 dark:text-white">INV-2026-081</td>
                <td className="py-3.5 px-3 text-slate-700 dark:text-slate-300">Phase 1: Architecture & UI Prototype</td>
                <td className="py-3.5 px-3 font-extrabold text-slate-900 dark:text-white">৳25,000</td>
                <td className="py-3.5 px-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Released & Verified
                  </span>
                </td>
                <td className="py-3.5 px-3 text-right">
                  <button className="text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center gap-1">
                    <Download className="w-3.5 h-3.5" /> PDF
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-3 font-bold text-slate-900 dark:text-white">INV-2026-094</td>
                <td className="py-3.5 px-3 text-slate-700 dark:text-slate-300">Phase 2: Database & Backend Engine</td>
                <td className="py-3.5 px-3 font-extrabold text-blue-600 dark:text-blue-400">৳35,000</td>
                <td className="py-3.5 px-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center gap-1 w-max">
                    <Lock className="w-3 h-3 text-emerald-500" />
                    Locked in Escrow
                  </span>
                </td>
                <td className="py-3.5 px-3 text-right">
                  <button className="text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center gap-1">
                    <Download className="w-3.5 h-3.5" /> PDF
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Message Modal Simulation */}
      {msgOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&auto=format&fit=crop&q=80"
                  alt="Apex IT Solutions"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Apex IT Solutions & Cloud</h3>
                  <p className="text-[11px] text-emerald-500 font-semibold">Online · Lead Developer</p>
                </div>
              </div>
              <button onClick={() => setMsgOpen(false)} className="text-slate-400 hover:text-white text-sm">
                ✕
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 space-y-3 text-xs">
              <div className="text-slate-500 dark:text-slate-400 text-center text-[10px]">Today, 2:30 PM</div>
              <div className="bg-blue-600 text-white p-3 rounded-2xl max-w-[80%] ml-auto">
                Hi Tanvir, Phase 2 backend engine API is deployed on our test server. You can review the admin login credentials.
              </div>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message to Apex IT..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs outline-none"
              />
              <button
                onClick={() => setMsgOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
