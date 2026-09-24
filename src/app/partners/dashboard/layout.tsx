"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Radio, Briefcase, Settings, LogOut, ChevronRight, MessageSquare, Wallet, Award } from "lucide-react";

export default function PartnerDashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: "/partners/dashboard", icon: LayoutDashboard },
    { name: "Live Broadcasts", href: "/partners/dashboard/leads", icon: Radio, badge: "3 New" },
    { name: "Active Projects", href: "/partners/dashboard/active", icon: Briefcase },
    { name: "Messages", href: "/partners/dashboard/messages", icon: MessageSquare },
    { name: "Wallet & Payments", href: "/partners/dashboard/wallet", icon: Wallet },
    { name: "Rewards & Status", href: "/partners/dashboard/rewards", icon: Award },
    { name: "Capabilities", href: "/partners/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      
      {/* Sidebar - Premium White & Green Theme */}
      <aside className="w-72 bg-white shadow-[10px_0_40px_rgba(0,0,0,0.03)] hidden md:flex flex-col z-20">
        <div className="p-6">
          {/* Brand/Avatar Block */}
          <div className="flex items-center gap-4 mb-10 p-2 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-black text-xl shadow-[0_4px_20px_rgba(22,163,74,0.3)] shrink-0">
              T
            </div>
            <div className="overflow-hidden">
              <div className="text-gray-900 font-extrabold text-sm truncate">TechNova Solutions</div>
              <div className="text-green-600 text-[11px] font-bold uppercase tracking-wider mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Verified Partner
              </div>
            </div>
          </div>
          
          <div className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-4 px-2">Main Menu</div>
          <nav className="space-y-1">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              // Add a spacer/header before settings
              if (item.name === "Capabilities") {
                return (
                  <React.Fragment key={item.href}>
                    <div className="text-[10px] font-black tracking-widest text-gray-400 uppercase mt-8 mb-4 px-2">Account</div>
                    <Link 
                      href={item.href} 
                      className={`flex items-center gap-3 px-3 py-3 font-semibold transition-all ${
                        isActive 
                          ? "text-green-700 bg-green-50/50 rounded-xl" 
                          : "text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-xl"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? "text-green-600" : "text-gray-400"}`} /> {item.name}
                    </Link>
                  </React.Fragment>
                );
              }

              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`flex items-center gap-3 px-3 py-3 font-semibold transition-all group relative ${
                    isActive 
                      ? "text-green-700" 
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-xl"
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50/80 to-transparent rounded-r-xl border-l-4 border-green-500 -ml-2"></div>
                  )}
                  <Icon className={`w-5 h-5 relative z-10 transition-colors ${isActive ? "text-green-600" : "text-gray-400 group-hover:text-green-500"}`} /> 
                  <span className="relative z-10">{item.name}</span>
                  {item.badge && (
                    <span className={`relative z-10 ml-auto text-[10px] font-black px-2 py-0.5 rounded-full ${
                      isActive ? "bg-green-600 text-white shadow-sm shadow-green-600/30" : "bg-gray-100 text-gray-600"
                    } ${item.badge.includes('New') ? 'animate-pulse bg-green-100 text-green-700' : ''}`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="mt-auto p-6 border-t border-gray-100">
          <button className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 w-full rounded-xl font-medium transition-colors">
            <LogOut className="w-5 h-5 text-red-400" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
        {/* Breadcrumb / Mobile menu trigger */}
        <div className="flex items-center text-sm font-medium text-gray-500 mb-8 md:hidden">
          <span>Partner Portal</span> <ChevronRight className="w-4 h-4 mx-1" /> <span className="text-gray-900">Dashboard</span>
        </div>
        {children}
      </main>
    </div>
  );
}
