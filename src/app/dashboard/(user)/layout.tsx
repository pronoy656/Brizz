import React from "react";
import Link from "next/link";
import { LayoutDashboard, FileText, MessageSquare, Settings, LogOut, ChevronRight } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex pt-20">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6">
          <div className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-4">User Portal</div>
          <nav className="space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-brand-50 text-brand-800 rounded-xl font-bold transition-colors">
              <LayoutDashboard className="w-5 h-5" /> Dashboard
            </Link>
            <Link href="/dashboard/requests" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors">
              <FileText className="w-5 h-5" /> My Requests
            </Link>
            <Link href="/dashboard/messages" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors">
              <MessageSquare className="w-5 h-5" /> Messages
              <span className="ml-auto bg-brand-800 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">2</span>
            </Link>
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors">
              <Settings className="w-5 h-5" /> Settings
            </Link>
          </nav>
        </div>
        
        <div className="mt-auto p-6 border-t border-gray-100">
          <button className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 w-full rounded-xl font-medium transition-colors">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
        {/* Breadcrumb / Mobile menu trigger */}
        <div className="flex items-center text-sm font-medium text-gray-500 mb-8 md:hidden">
          <span>Portal</span> <ChevronRight className="w-4 h-4 mx-1" /> <span className="text-gray-900">Dashboard</span>
        </div>
        {children}
      </main>
    </div>
  );
}
