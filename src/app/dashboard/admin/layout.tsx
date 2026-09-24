"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Inbox, ShieldCheck, Map, LogOut, ChevronRight, CheckCircle2 } from "lucide-react";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: "/dashboard/admin", icon: LayoutDashboard },
    { name: "Triage Queue", href: "/dashboard/admin/triage", icon: Inbox, badge: "5 Pending" },
    { name: "Provider Approvals", href: "/dashboard/admin/providers", icon: ShieldCheck, badge: "2 Reviews" },
    { name: "Active Users", href: "/dashboard/admin/users", icon: Users },
    { name: "District Network", href: "/dashboard/admin/network", icon: Map },
  ];

  const renderNavItem = (item: any, currentPath: string) => {
    const isActive = currentPath === item.href;
    const Icon = item.icon;
    return (
      <Link 
        key={item.href}
        href={item.href} 
        className={`flex items-center gap-3 px-3 py-3 font-semibold transition-all group relative rounded-xl ${
          isActive 
            ? "text-blue-700 bg-gradient-to-r from-blue-50/80 to-transparent" 
            : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
        }`}
      >
        {isActive && (
          <div className="absolute inset-0 border-l-4 border-blue-600 rounded-l-xl -ml-px shadow-[0_0_10px_rgba(37,99,235,0.2)]"></div>
        )}
        <Icon className={`w-5 h-5 relative z-10 transition-colors ${isActive ? "text-blue-600" : "text-slate-400 group-hover:text-blue-500"}`} /> 
        <span className="relative z-10 text-sm">{item.name}</span>
        {item.badge && (
          <span className={`relative z-10 ml-auto text-[10px] font-black px-2 py-0.5 rounded-full ${
            isActive ? "bg-blue-600 text-white shadow-sm shadow-blue-600/30" : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
          } ${item.badge.includes('Pending') ? 'animate-pulse bg-red-100 text-red-600 group-hover:bg-red-100' : ''}`}>
            {item.badge}
          </span>
        )}
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      
      {/* Sidebar - Premium Admin Theme */}
      <aside className="w-[280px] bg-white shadow-[10px_0_40px_rgba(37,99,235,0.03)] hidden md:flex flex-col z-20 overflow-y-auto custom-scrollbar">
        <div className="p-6">
          {/* Brand/Avatar Block */}
          <div className="flex items-center gap-4 mb-8 p-3 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20 shrink-0 group-hover:scale-105 transition-transform">
              <span className="relative z-10">A</span>
            </div>
            <div className="overflow-hidden">
              <div className="text-slate-900 font-extrabold text-sm truncate">Ops Control</div>
              <div className="text-blue-600 text-[11px] font-bold uppercase tracking-wider mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> System Admin
              </div>
            </div>
          </div>
          
          <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3 px-3">Operations</div>
          <nav className="space-y-1 mb-8">
            {navItems.slice(0, 2).map((item) => renderNavItem(item, pathname))}
          </nav>

          <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-3 px-3">Network & Users</div>
          <nav className="space-y-1">
            {navItems.slice(2).map((item) => renderNavItem(item, pathname))}
          </nav>
        </div>
        
        {/* Optional System Status - Simplified */}
        <div className="px-6 mt-auto">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Systems Normal</div>
              <div className="text-[10px] font-medium text-slate-500">Latency: 24ms</div>
            </div>
          </div>
        </div>
        
        <div className="p-6 mt-4">
          <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-600 hover:bg-red-50 hover:text-red-600 hover:border-red-100 w-full rounded-xl font-bold transition-all shadow-sm">
            <LogOut className="w-4 h-4" /> Secure Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
        {/* Breadcrumb / Mobile menu trigger */}
        <div className="flex items-center text-sm font-medium text-slate-500 mb-8 md:hidden">
          <span>Control Center</span> <ChevronRight className="w-4 h-4 mx-1" /> <span className="text-slate-900">Dashboard</span>
        </div>
        {children}
      </main>
    </div>
  );
}
