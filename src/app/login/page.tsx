"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth, UserRole } from "@/context/AuthContext";
import {
  Briefcase,
  ShieldCheck,
  Crown,
  Lock,
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  KeyRound,
} from "lucide-react";

export default function LoginPage() {
  const { language, t } = useLanguage();
  const { login } = useAuth();

  const [activeRole, setActiveRole] = useState<UserRole>("partner");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const roleMeta = {
    partner: {
      titleEn: "Partner Portal Login",
      titleBn: "পার্টনার পোর্টাল লগইন",
      descEn: "Access your earnings, manage active client jobs, and claim new incoming leads.",
      descBn: "আপনার প্রজেক্ট, উপার্জন এবং নতুন ক্লায়েন্ট লিড ম্যানেজ করুন।",
      icon: Briefcase,
      color: "emerald",
      badge: "Partner Network",
      demoEmail: "partner@apexitsolutions.com",
      demoLabel: "1-Click Demo: Sign in as Apex IT Solutions",
    },
    admin: {
      titleEn: "Admin Operations Desk",
      titleBn: "অ্যাডমিন অপারেশনাল লগইন",
      descEn: "Triage inbound customer requirements, dispatch partners, and manage 64-district ecosystem.",
      descBn: "কাস্টমার রিকোয়ারমেন্ট ট্রায়াজ করুন এবং পার্টনারদের প্রজেক্ট এসাইন করুন।",
      icon: ShieldCheck,
      color: "blue",
      badge: "Internal Operations",
      demoEmail: "admin@briizz.com",
      demoLabel: "1-Click Demo: Sign in as Operations Admin",
    },
    owner: {
      titleEn: "Executive Owner Room",
      titleBn: "ওনার / এক্সিকিউটিভ রুম",
      descEn: "Access high-level platform GMV, net profit margins, and 5-founder profit-sharing matrix.",
      descBn: "প্ল্যাটফর্মের লাভ, মোট টার্নওভার এবং ৫ জন ওনারের প্রফিট শেয়ারিং ড্যাশবোর্ড।",
      icon: Crown,
      color: "amber",
      badge: "Restricted Access",
      demoEmail: "ceo@briizz.com",
      demoLabel: "1-Click Demo: Sign in as Platform Co-Founder / CEO",
    },
  };

  const currentMeta = roleMeta[activeRole];
  const Icon = currentMeta.icon;

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(activeRole, email || currentMeta.demoEmail);
  };

  const handleDemoLogin = (role: UserRole) => {
    login(role, roleMeta[role].demoEmail);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 flex items-center justify-center px-4">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-xl space-y-8 relative z-10">
        {/* Logo and Tag */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
              <span className="text-white font-extrabold text-xl">B</span>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
              BRIIZZ
            </span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t("Unified Platform Sign In", "প্ল্যাটফর্ম সাইন ইন")}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {t(
              "Select your authorized role to access your dedicated dashboard workspace.",
              "আপনার নির্দিষ্ট ড্যাশবোর্ডে প্রবেশ করতে রোল সিলেক্ট করুন।"
            )}
          </p>
        </div>

        {/* Role Switcher Tabs */}
        <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg">
          <button
            type="button"
            onClick={() => {
              setActiveRole("partner");
              setEmail("");
            }}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-xs font-bold transition-all ${
              activeRole === "partner"
                ? "bg-emerald-500 text-slate-950 font-extrabold shadow-md scale-[1.02]"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Partner</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveRole("admin");
              setEmail("");
            }}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-xs font-bold transition-all ${
              activeRole === "admin"
                ? "bg-blue-500 text-white font-extrabold shadow-md scale-[1.02]"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveRole("owner");
              setEmail("");
            }}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-xs font-bold transition-all ${
              activeRole === "owner"
                ? "bg-amber-500 text-slate-950 font-extrabold shadow-md scale-[1.02]"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
            }`}
          >
            <Crown className="w-3.5 h-3.5" />
            <span>Owner</span>
          </button>
        </div>

        {/* Main Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
          {/* Header of Active Role */}
          <div className="flex items-start justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="space-y-1">
              <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                activeRole === "partner"
                  ? "bg-emerald-500/10 text-emerald-500"
                  : activeRole === "admin"
                  ? "bg-blue-500/10 text-blue-500"
                  : "bg-amber-500/10 text-amber-500"
              }`}>
                {currentMeta.badge}
              </span>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {language === "bn" ? currentMeta.titleBn : currentMeta.titleEn}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === "bn" ? currentMeta.descBn : currentMeta.descEn}
              </p>
            </div>

            <div className={`p-3 rounded-2xl ${
              activeRole === "partner"
                ? "bg-emerald-500/10 text-emerald-500"
                : activeRole === "admin"
                ? "bg-blue-500/10 text-blue-500"
                : "bg-amber-500/10 text-amber-500"
            }`}>
              <Icon className="w-6 h-6" />
            </div>
          </div>

          {/* Quick 1-Click Demo Login Banner */}
          <button
            type="button"
            onClick={() => handleDemoLogin(activeRole)}
            className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all group ${
              activeRole === "partner"
                ? "bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500 hover:text-slate-950 text-emerald-600 dark:text-emerald-400"
                : activeRole === "admin"
                ? "bg-blue-500/10 border-blue-500/30 hover:bg-blue-500 hover:text-white text-blue-600 dark:text-blue-400"
                : "bg-amber-500/10 border-amber-500/30 hover:bg-amber-500 hover:text-slate-950 text-amber-600 dark:text-amber-400"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4" />
              <div className="text-xs font-bold">
                {currentMeta.demoLabel}
              </div>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 dark:border-slate-800 w-full"></div>
            <span className="bg-white dark:bg-slate-900 px-3 text-[10px] uppercase tracking-wider text-slate-400 font-bold">
              Or Sign In with Credentials
            </span>
          </div>

          {/* Manual Login Form */}
          <form onSubmit={handleManualSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Authorized Email
              </label>
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
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
                  Password / Key
                </label>
                <span className="text-[10px] text-slate-400">Demo Key: (Any)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
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
                  className="rounded accent-emerald-500"
                />
                <span>Remember session</span>
              </label>
              <Link href="/contact" className="hover:text-emerald-500 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className={`w-full py-3.5 rounded-xl text-white font-extrabold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition-all ${
                activeRole === "partner"
                  ? "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30"
                  : activeRole === "admin"
                  ? "bg-blue-600 hover:bg-blue-500 shadow-blue-600/30"
                  : "bg-amber-600 hover:bg-amber-500 shadow-amber-600/30"
              }`}
            >
              <KeyRound className="w-4 h-4" />
              <span>Sign In to {activeRole.toUpperCase()} Workspace</span>
            </button>
          </form>

          {/* Partner Registration link if on partner tab */}
          {activeRole === "partner" && (
            <div className="pt-2 text-center text-xs text-slate-400">
              Don&apos;t have a partner account?{" "}
              <Link href="/partners#apply-form" className="text-emerald-500 font-bold hover:underline">
                Apply to become a partner →
              </Link>
            </div>
          )}
        </div>

        {/* Security Trust Badge */}
        <div className="text-center text-slate-400 text-xs flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>256-Bit SSL Encrypted · Role-Based Access Control (RBAC)</span>
        </div>
      </div>
    </div>
  );
}
