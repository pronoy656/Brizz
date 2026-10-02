"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth, UserRole } from "@/context/AuthContext";
import {
  Briefcase,
  User,
  Lock,
  Mail,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  KeyRound,
  UserCheck,
} from "lucide-react";

export default function LoginPage() {
  const { language, t } = useLanguage();
  const { login } = useAuth();

  const [activeRole, setActiveRole] = useState<"user" | "partner">("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const roleMeta = {
    user: {
      titleEn: "Client & User Portal",
      titleBn: "ইউজার / ক্লায়েন্ট ড্যাশবোর্ড লগইন",
      descEn: "Track your active requirements, communicate with matched providers, and manage escrow milestones safely.",
      descBn: "আপনার প্রজেক্ট রিকোয়ারমেন্ট ট্র্যাক করুন, ম্যাচড প্রোভাইডারের সাথে যোগাযোগ রাখুন এবং সুরক্ষিত এসক্রো মাইলস্টোন পরিচালনা করুন।",
      icon: UserCheck,
      color: "blue",
      badge: "Client Workspace",
      demoEmail: "tanvir@acmebiz.com",
      demoLabel: "1-Click Demo: Sign in as Business Client (Tanvir Ahmed)",
    },
    partner: {
      titleEn: "Partner & Provider Portal",
      titleBn: "পার্টনার ও প্রোভাইডার লগইন",
      descEn: "Access incoming business requirements, submit verified proposals, and withdraw milestone earnings.",
      descBn: "নতুন ক্লায়েন্ট রিকোয়ারমেন্ট দেখুন, প্রপোজাল পাঠান এবং মাইলস্টোন পেমেন্ট গ্রহণ করুন।",
      icon: Briefcase,
      color: "emerald",
      badge: "Verified Partner Network",
      demoEmail: "partner@apexitsolutions.com",
      demoLabel: "1-Click Demo: Sign in as Apex IT Solutions (Tier-1 Partner)",
    },
  };

  const currentMeta = roleMeta[activeRole];
  const Icon = currentMeta.icon;

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(activeRole, email || currentMeta.demoEmail);
  };

  const handleDemoLogin = (role: "user" | "partner") => {
    login(role, roleMeta[role].demoEmail);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-[#070b16] text-slate-900 dark:text-slate-100 flex items-center justify-center px-4 transition-colors">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-xl space-y-8 relative z-10">
        {/* Logo and Tag */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <span className="text-white font-extrabold text-xl">B</span>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
              Briiz<span className="text-blue-600 dark:text-blue-400">Z</span>
            </span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            {t("Unified Platform Sign In", "প্ল্যাটফর্ম সাইন ইন")}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {t(
              "Choose whether you are signing in as a Client or as a verified Service Partner.",
              "আপনি ক্লায়েন্ট নাকি সার্ভিস পার্টনার হিসেবে প্রবেশ করছেন তা নির্বাচন করুন।"
            )}
          </p>
        </div>

        {/* 2-Role Switcher Tabs: User & Partner Only */}
        <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 shadow-lg">
          <button
            type="button"
            onClick={() => {
              setActiveRole("user");
              setEmail("");
            }}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeRole === "user"
                ? "bg-blue-600 text-white font-extrabold shadow-md scale-[1.02]"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
            }`}
          >
            <User className="w-4 h-4" />
            <span>{t("User / Client", "ইউজার / ক্লায়েন্ট")}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveRole("partner");
              setEmail("");
            }}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeRole === "partner"
                ? "bg-emerald-600 text-white font-extrabold shadow-md scale-[1.02]"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>{t("Partner / Provider", "পার্টনার / প্রোভাইডার")}</span>
          </button>
        </div>

        {/* Main Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 shadow-2xl space-y-6">
          {/* Header of Active Role */}
          <div className="flex items-start justify-between pb-4 border-b border-slate-100 dark:border-white/5">
            <div className="space-y-1">
              <span
                className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                  activeRole === "user"
                    ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                    : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                }`}
              >
                {currentMeta.badge}
              </span>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {language === "bn" ? currentMeta.titleBn : currentMeta.titleEn}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {language === "bn" ? currentMeta.descBn : currentMeta.descEn}
              </p>
            </div>

            <div
              className={`p-3 rounded-2xl ${
                activeRole === "user"
                  ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                  : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              }`}
            >
              <Icon className="w-6 h-6" />
            </div>
          </div>

          {/* Quick 1-Click Demo Login Banner */}
          <button
            type="button"
            onClick={() => handleDemoLogin(activeRole)}
            className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all group ${
              activeRole === "user"
                ? "bg-blue-500/10 border-blue-500/30 hover:bg-blue-600 hover:text-white text-blue-700 dark:text-blue-300"
                : "bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-600 hover:text-white text-emerald-700 dark:text-emerald-300"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4" />
              <div className="text-xs font-bold">{currentMeta.demoLabel}</div>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 dark:border-white/10 w-full"></div>
            <span className="bg-white dark:bg-[#101426] px-3 text-[10px] uppercase tracking-wider text-slate-400 font-bold">
              {t("Or Sign In with Credentials", "অথবা ইমেইল দিয়ে সাইন ইন করুন")}
            </span>
          </div>

          {/* Manual Login Form */}
          <form onSubmit={handleManualSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                {activeRole === "user" ? t("Client Email", "ক্লায়েন্ট ইমেইল") : t("Partner Email", "পার্টনার ইমেইল")}
              </label>
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <Mail className="w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={currentMeta.demoEmail}
                  className="w-full bg-transparent text-xs text-slate-900 dark:text-white placeholder-slate-400 outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {t("Password", "পাসওয়ার্ড")}
                </label>
                <span className="text-[10px] text-slate-400">Demo Key: (Any password)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <Lock className="w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-transparent text-xs text-slate-900 dark:text-white placeholder-slate-400 outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className={`rounded ${activeRole === "user" ? "accent-blue-600" : "accent-emerald-600"}`}
                />
                <span>{t("Remember session", "সেশন মনে রাখুন")}</span>
              </label>
              <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
                {t("Forgot password?", "পাসওয়ার্ড ভুলে গেছেন?")}
              </Link>
            </div>

            <button
              type="submit"
              className={`w-full py-3.5 rounded-xl text-white font-extrabold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition-all ${
                activeRole === "user"
                  ? "bg-blue-600 hover:bg-blue-700 shadow-blue-600/30"
                  : "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/30"
              }`}
            >
              <KeyRound className="w-4 h-4" />
              <span>
                {activeRole === "user"
                  ? t("Sign In to Client Workspace", "ক্লায়েন্ট ড্যাশবোর্ডে প্রবেশ করুন")
                  : t("Sign In to Partner Portal", "পার্টনার পোর্টালে প্রবেশ করুন")}
              </span>
            </button>
          </form>

          {/* Footer Action Links */}
          <div className="pt-2 text-center text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-white/5">
            {activeRole === "user" ? (
              <div>
                {t("Need something for your business?", "আপনার ব্যবসার কোনো সেবা প্রয়োজন?")}{" "}
                <Link href="/needs/new" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">
                  {t("Post your requirement here →", "এখানে রিকোয়ারমেন্ট পোস্ট করুন →")}
                </Link>
              </div>
            ) : (
              <div>
                {t("Don't have a partner account?", "পার্টনার অ্যাকাউন্ট নেই?")}{" "}
                <Link href="/partners#apply-form" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                  {t("Apply to become a partner →", "পার্টনার হিসেবে আবেদন করুন →")}
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Security & Endpoint Note */}
        <div className="text-center text-slate-400 text-xs space-y-1">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>256-Bit SSL Encrypted · Role-Based Access Control</span>
          </div>
          <p className="text-[11px] text-slate-400 dark:text-slate-600">
            Internal operations & owner desks are accessible at their dedicated private URLs.
          </p>
        </div>
      </div>
    </div>
  );
}
