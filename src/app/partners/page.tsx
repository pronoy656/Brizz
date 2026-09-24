"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useApp } from "@/context/AppContext";
import {
  Briefcase,
  ShieldCheck,
  Zap,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  Building,
  Send,
} from "lucide-react";
import { BRIZZ_DISTRICTS } from "@/lib/data";

export default function PartnersPage() {
  const { language, t } = useLanguage();
  const { partners, addToast } = useApp();

  const [partnerName, setPartnerName] = useState("");
  const [partnerEmail, setPartnerEmail] = useState("");
  const [partnerPhone, setPartnerPhone] = useState("");
  const [partnerCategory, setPartnerCategory] = useState("technology");
  const [partnerDistrict, setPartnerDistrict] = useState("Dhaka");
  const [partnerSkills, setPartnerSkills] = useState("");
  const [applied, setApplied] = useState(false);

  const handlePartnerApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerName || !partnerPhone) return;

    setApplied(true);
    addToast("Partner application submitted for review!", "success");
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100">
      <div className="container mx-auto px-4 space-y-16">
        {/* Hero */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-blue-950/40 border border-emerald-500/25 backdrop-blur-xl text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>{t("Verified Partner Network", "ভেরিফায়েড পার্টনার নেটওয়ার্ক")}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t("We Know Who Can Do It. Grow Your Business With BRIZZ.", "দক্ষ ও নির্ভরযোগ্য পার্টনারদের জন্য অবারিত সুযোগ")}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t(
              "Join Bangladesh's premier verified partner network of software developers, hardware suppliers, CCTV technicians, creative directors, and business specialists.",
              "আমাদের বিশ্বস্ত পার্টনার নেটওয়ার্কে যুক্ত হয়ে নিয়মিত প্রজেক্ট লিড, নিরাপদ পেমেন্ট ও দীর্ঘমেয়াদী ব্যবসায়িক সম্পর্ক তৈরি করুন।"
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#apply-form"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/30 transition-all"
            >
              Become a Partner →
            </a>
            <Link
              href="/dashboard/partner"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-500/30 font-bold text-sm transition-all flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              <span>Enter Partner Dashboard</span>
            </Link>
          </div>
        </div>

        {/* Partner Journey */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-500">
              Transparent Onboarding
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              The 4-Step Partner Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Apply with Portfolio",
                desc: "Share your business details, proven skills, service area, and recent deliverables.",
              },
              {
                step: "02",
                title: "Verification & Review",
                desc: "Our quality team checks previous work samples and operational reliability.",
              },
              {
                step: "03",
                title: "Verified Badge & Portal",
                desc: "Gain access to the Partner Dashboard, live incoming client leads, and direct project matches.",
              },
              {
                step: "04",
                title: "Deliver & Get Paid",
                desc: "Keep up to 85–90% of contract value with guaranteed milestone releases and zero chasing clients.",
              },
            ].map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 font-extrabold flex items-center justify-center text-sm">
                  {st.step}
                </div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">{st.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Verified Partners Showcase */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Featured Verified Partners
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Top tier agencies and specialist providers delivering on BRIZZ.
              </p>
            </div>
            <Link
              href="/dashboard/partner"
              className="text-xs font-bold text-emerald-500 hover:underline flex items-center gap-1"
            >
              Explore Partner Hub <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((prt) => (
              <div
                key={prt.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:border-emerald-500/40 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                      {prt.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500" />
                      {prt.rating}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white">{prt.name}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{prt.district} District</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {prt.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                  <span>{prt.completedProjects} Jobs Completed</span>
                  <span className="text-emerald-500 font-bold">✓ Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="apply-form" className="max-w-3xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Partner Application Form
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Fill out your details to join the BRIIZZ network. We respond within 24 business hours.
              </p>
            </div>

            {applied ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 font-black text-xl flex items-center justify-center mx-auto">
                  ✓
                </div>
                <h4 className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  Application Received!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Our network manager will review your profile and contact you via phone/WhatsApp.
                </p>
                <div className="pt-2">
                  <Link
                    href="/dashboard/partner"
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
                  >
                    View Partner Dashboard Demo →
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handlePartnerApply} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Company / Professional Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={partnerName}
                      onChange={(e) => setPartnerName(e.target.value)}
                      placeholder="e.g. Apex Tech Solutions"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={partnerEmail}
                      onChange={(e) => setPartnerEmail(e.target.value)}
                      placeholder="contact@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={partnerPhone}
                      onChange={(e) => setPartnerPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Primary Category
                    </label>
                    <select
                      value={partnerCategory}
                      onChange={(e) => setPartnerCategory(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-emerald-500"
                    >
                      <option value="technology">Technology & Web</option>
                      <option value="hardware">Hardware & Networking</option>
                      <option value="creative">Creative, Video & Design</option>
                      <option value="digital">Digital Marketing</option>
                      <option value="business">Business & Operations</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Operating District
                    </label>
                    <select
                      value={partnerDistrict}
                      onChange={(e) => setPartnerDistrict(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-emerald-500"
                    >
                      {BRIZZ_DISTRICTS.map((d) => (
                        <option key={d.en} value={d.en}>
                          {d.en}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Key Skills & Deliverables (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={partnerSkills}
                    onChange={(e) => setPartnerSkills(e.target.value)}
                    placeholder="e.g. Next.js, Flutter, CCTV Installation, 4K Commercial Video, Meta Ads"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Partner Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
