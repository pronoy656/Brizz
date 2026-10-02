"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  ChevronRight,
  ShieldCheck,
  PlusCircle,
  ExternalLink,
  Receipt,
  User,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/dashboard", labelEn: "Overview", labelBn: "ওভারভিউ", icon: LayoutDashboard },
    { href: "/dashboard/requests", labelEn: "My Requirements", labelBn: "আমার রিকোয়ারমেন্ট", icon: FileText, badge: "2" },
    { href: "/dashboard/messages", labelEn: "Messages & Chats", labelBn: "মেসেজ ও চ্যাট", icon: MessageSquare, badge: "3" },
    { href: "/dashboard/billing", labelEn: "Escrow & Invoices", labelBn: "এসক্রো ও ইনভয়েস", icon: Receipt },
    { href: "/dashboard/settings", labelEn: "Account Settings", labelBn: "সেটিংস", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070913] text-slate-900 dark:text-slate-100 flex flex-col md:flex-row pt-20 transition-colors">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-[#0f1325] border-b border-slate-200 dark:border-white/10 sticky top-20 z-30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
            B
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">{user?.name || "Tanvir Ahmed"}</div>
            <div className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">{t("Client Workspace", "ক্লায়েন্ট ড্যাশবোর্ড")}</div>
          </div>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0f1325] border-b border-slate-200 dark:border-white/10 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{item.labelEn}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-blue-500/20 text-blue-600 dark:text-blue-400 font-extrabold">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-slate-100 dark:border-white/5">
            <button
              onClick={() => {
                logout();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 px-4 py-2.5 text-xs font-bold text-rose-600 w-full"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="w-64 bg-white dark:bg-[#0c1020] border-r border-slate-200 dark:border-white/10 hidden md:flex flex-col shrink-0">
        <div className="p-6 space-y-6">
          {/* User Profile Card */}
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-sm shadow-md shrink-0">
              {user?.name ? user.name.charAt(0) : "T"}
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-extrabold text-slate-900 dark:text-white truncate">
                {user?.name || "Tanvir Ahmed"}
              </div>
              <div className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold truncate flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-500 shrink-0" />
                <span>Verified Client</span>
              </div>
            </div>
          </div>

          {/* Post Need CTA Button */}
          <Link
            href="/needs/new"
            className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Post New Need</span>
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <div className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase px-3 py-1">
              Client Portal
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.labelEn}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                        isActive
                          ? "bg-white text-blue-600"
                          : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="mt-auto p-6 border-t border-slate-100 dark:border-white/5 space-y-2">
          <Link
            href="/"
            className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Back to Main Website</span>
          </Link>

          <button
            onClick={() => logout()}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/20 w-full transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-8 lg:p-10 max-w-7xl mx-auto w-full overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
