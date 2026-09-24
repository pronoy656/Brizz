"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Globe2, Activity, PieChart, Users, Settings, LogOut, ChevronRight } from "lucide-react";

export default function OwnerDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Executive Summary", href: "/dashboard/owner", icon: LayoutDashboard },
    { name: "Global Operations", href: "/dashboard/owner/operations", icon: Globe2 },
    { name: "Financial Health", href: "/dashboard/owner/financials", icon: PieChart },
    { name: "Network Health", href: "/dashboard/owner/network", icon: Activity },
    { name: "Partner Roster", href: "/dashboard/owner/roster", icon: Users },
    { name: "Platform Settings", href: "/dashboard/owner/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 flex">
      
      {/* Sidebar - Executive Dark Amber Theme */}
      <aside className="w-72 bg-neutral-900 border-r border-neutral-800 hidden md:flex flex-col z-20">
        <div className="p-6">
          {/* Brand/Avatar Block */}
          <div className="flex items-center gap-4 mb-10 p-2 rounded-2xl bg-neutral-950/50 border border-neutral-800">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-neutral-950 font-black text-xl shadow-[0_0_15px_rgba(245,158,11,0.2)] shrink-0">
              O
            </div>
            <div className="overflow-hidden">
              <div className="text-white font-extrabold text-sm truncate">Executive Room</div>
              <div className="text-amber-500 text-[11px] font-bold uppercase tracking-wider mt-0.5 flex items-center gap-1">
                Platform Co-Founder
              </div>
            </div>
          </div>
          
          <div className="text-[10px] font-black tracking-widest text-neutral-500 uppercase mb-4 px-2">God Mode</div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`flex items-center gap-3 px-3 py-3 font-semibold transition-all group relative rounded-xl ${
                    isActive 
                      ? "text-amber-500 bg-amber-500/10" 
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 border-l-4 border-amber-500 rounded-l-xl -ml-px shadow-[0_0_10px_rgba(245,158,11,0.2)]"></div>
                  )}
                  <Icon className={`w-5 h-5 relative z-10 transition-colors ${isActive ? "text-amber-500" : "text-neutral-500 group-hover:text-amber-400"}`} /> 
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="mt-auto p-6 border-t border-neutral-800">
          <button className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-500/10 w-full rounded-xl font-medium transition-colors">
            <LogOut className="w-5 h-5" /> Terminate Session
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
        {/* Breadcrumb / Mobile menu trigger */}
        <div className="flex items-center text-sm font-medium text-neutral-500 mb-8 md:hidden">
          <span>Executive Room</span> <ChevronRight className="w-4 h-4 mx-1" /> <span className="text-white">Dashboard</span>
        </div>
        {children}
      </main>
    </div>
  );
}
