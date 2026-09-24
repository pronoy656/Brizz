"use client";

import React, { useState } from "react";
import { Inbox, MapPin, Search, Check, Filter } from "lucide-react";

const INITIAL_QUEUE = [
  {
    id: "REQ-905",
    user: "Hasan Mahmud",
    contact: "017XXXXXXXX",
    title: "Need 500 chairs for a wedding event",
    description: "Looking for premium quality banquet chairs for a 2-day event next weekend.",
    category: "Events & Rentals",
    location: "Sylhet",
    submittedAt: "10 mins ago",
    status: "pending",
  },
  {
    id: "REQ-906",
    user: "Jamil",
    contact: "018XXXXXXXX",
    title: "Custom E-commerce App Development",
    description: "Need a full stack team to build a multivendor ecommerce app similar to Daraz.",
    category: "IT & Software",
    location: "Dhaka",
    submittedAt: "45 mins ago",
    status: "pending",
  }
];

export default function AdminTriagePage() {
  const [queue, setQueue] = useState(INITIAL_QUEUE);

  const handleBroadcast = (id: string) => {
    // In a real app, this would trigger the backend matching algorithm and notify partners
    setQueue(prev => prev.filter(q => q.id !== id));
    alert(`Requirement ${id} has been broadcasted to the network!`);
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <Inbox className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Triage Queue</h1>
            <p className="text-slate-600 mt-1">Review incoming user needs and broadcast them to relevant partners.</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by ID, Category, or Location..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:border-blue-500 outline-none shadow-sm"
          />
        </div>
        <button className="bg-white border border-slate-200 px-4 py-3 rounded-xl flex items-center gap-2 font-bold text-slate-700 shadow-sm hover:bg-slate-50">
          <Filter className="w-4 h-4" /> Filter
        </button>
      </div>

      {/* Queue List */}
      <div className="space-y-6">
        {queue.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Queue is Empty</h2>
            <p className="text-slate-500">All user requirements have been triaged and broadcasted.</p>
          </div>
        ) : (
          queue.map((req) => (
            <div key={req.id} className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm transition-all hover:shadow-md">
              
              <div className="flex flex-col lg:flex-row justify-between gap-8">
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-wider">{req.id}</span>
                    <span className="text-xs font-medium text-slate-500">Submitted {req.submittedAt}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{req.title}</h3>
                  <p className="text-slate-600 text-base mb-6 leading-relaxed">{req.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase mb-1">User</div>
                      <div className="text-sm font-bold text-slate-900">{req.user}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase mb-1">Contact</div>
                      <div className="text-sm font-bold text-slate-900">{req.contact}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase mb-1">Category</div>
                      <div className="text-sm font-bold text-slate-900">{req.category}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase mb-1">Location</div>
                      <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {req.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-full lg:w-64 flex flex-col gap-3 justify-center bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center mb-2">Triage Action</p>
                  <button 
                    onClick={() => handleBroadcast(req.id)}
                    className="bg-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20 w-full flex items-center justify-center gap-2"
                  >
                    Broadcast to Network
                  </button>
                  <button 
                    className="bg-white text-slate-600 border border-slate-200 px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors w-full text-center"
                  >
                    Hold / Request Info
                  </button>
                </div>
              </div>

            </div>
          ))
        )}
      </div>

    </div>
  );
}
