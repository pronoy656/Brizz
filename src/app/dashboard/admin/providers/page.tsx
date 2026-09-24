"use client";

import React, { useState } from "react";
import { ShieldCheck, FileText, CheckCircle2, XCircle, Search, Filter } from "lucide-react";

export default function ProviderApprovalsPage() {
  const [providers, setProviders] = useState([
    { id: "PRT-104", name: "GreenAgro Ltd", category: "Wholesale & Supply", district: "Gazipur", status: "pending", submitted: "2 hours ago" },
    { id: "PRT-105", name: "EventPro Sylhet", category: "Events & Rentals", district: "Sylhet", status: "pending", submitted: "5 hours ago" },
    { id: "PRT-101", name: "TechNova Solutions", category: "IT & Infrastructure", district: "Dhaka", status: "approved", submitted: "2 days ago" },
  ]);

  const approveProvider = (id: string) => {
    setProviders(prev => prev.map(p => p.id === id ? { ...p, status: "approved" } : p));
  };

  const rejectProvider = (id: string) => {
    setProviders(prev => prev.map(p => p.id === id ? { ...p, status: "rejected" } : p));
  };

  return (
    <div className="space-y-8 max-w-6xl">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Provider Approvals</h1>
            <p className="text-slate-600 mt-1">Review trade licenses and NID documents before activating partners.</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by ID, Name, or Category..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-blue-500 outline-none shadow-sm"
          />
        </div>
        <button className="bg-white border border-slate-200 px-4 py-3 rounded-xl flex items-center gap-2 font-bold text-slate-700 shadow-sm hover:bg-slate-50">
          <Filter className="w-4 h-4" /> Filter
        </button>
      </div>

      {/* Approvals List */}
      <div className="space-y-6">
        {providers.map((p) => (
          <div key={p.id} className={`bg-white rounded-3xl border p-6 shadow-sm transition-all ${p.status === 'pending' ? 'border-blue-200 shadow-blue-900/5' : 'border-slate-200 opacity-70'}`}>
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-wider">{p.id}</span>
                  {p.status === 'pending' && <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-md">Pending Review</span>}
                  {p.status === 'approved' && <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Approved</span>}
                  {p.status === 'rejected' && <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-md">Rejected</span>}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
                <div className="text-sm font-medium text-slate-500 mt-1">
                  Category: <span className="text-slate-800">{p.category}</span> • District: <span className="text-slate-800">{p.district}</span>
                </div>
                
                <div className="mt-4 flex items-center gap-4">
                  <button className="flex items-center gap-2 text-sm font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">
                    <FileText className="w-4 h-4" /> View Trade License
                  </button>
                  <button className="flex items-center gap-2 text-sm font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">
                    <FileText className="w-4 h-4" /> View NID
                  </button>
                </div>
              </div>

              {p.status === 'pending' ? (
                <div className="flex-shrink-0 flex flex-col gap-3 justify-center w-full lg:w-48">
                  <button 
                    onClick={() => approveProvider(p.id)}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5" /> Approve
                  </button>
                  <button 
                    onClick={() => rejectProvider(p.id)}
                    className="w-full bg-white border border-red-200 text-red-600 hover:bg-red-50 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                  >
                    <XCircle className="w-5 h-5" /> Reject
                  </button>
                </div>
              ) : (
                <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-48 text-slate-400 font-bold text-sm">
                  Action Completed
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
