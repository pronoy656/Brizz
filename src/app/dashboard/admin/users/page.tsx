"use client";

import React from "react";
import { Users, Search, Filter, MoreVertical } from "lucide-react";

export default function ActiveUsersPage() {
  const users = [
    { id: "USR-001", name: "Ahmed Rahman", phone: "017XXXXXXXX", joined: "Oct 2025", requests: 12, status: "Active" },
    { id: "USR-002", name: "Sarah Kabir", phone: "018XXXXXXXX", joined: "Nov 2025", requests: 4, status: "Active" },
    { id: "USR-003", name: "Jamil Hossain", phone: "019XXXXXXXX", joined: "Jan 2026", requests: 1, status: "Flagged" },
    { id: "USR-004", name: "SuperFresh Mart", phone: "016XXXXXXXX", joined: "Feb 2026", requests: 28, status: "Enterprise" },
  ];

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Active Users</h1>
            <p className="text-slate-600 mt-1">Manage all registered end-users on the platform.</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search users by name or phone number..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-blue-500 outline-none shadow-sm"
          />
        </div>
        <button className="bg-white border border-slate-200 px-4 py-3 rounded-xl flex items-center gap-2 font-bold text-slate-700 shadow-sm hover:bg-slate-50">
          <Filter className="w-4 h-4" /> Filter
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-sm text-slate-500">
                <th className="py-4 px-6 font-bold uppercase tracking-wider">User ID</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider">Name</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider">Contact</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider">Joined</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider">Total Requests</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider">Status</th>
                <th className="py-4 px-6 font-bold uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">{user.id}</td>
                  <td className="py-4 px-6 text-slate-700 font-medium">{user.name}</td>
                  <td className="py-4 px-6 text-slate-500">{user.phone}</td>
                  <td className="py-4 px-6 text-slate-500">{user.joined}</td>
                  <td className="py-4 px-6 font-bold text-slate-700">{user.requests}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      user.status === 'Active' ? 'bg-emerald-50 text-emerald-700' :
                      user.status === 'Flagged' ? 'bg-red-50 text-red-700' :
                      'bg-purple-50 text-purple-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-slate-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
