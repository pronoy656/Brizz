"use client";

import React, { useState } from "react";
import { Clock, MapPin, RadioTower, DollarSign, X, CheckCircle2 } from "lucide-react";

const LIVE_BROADCASTS = [
  {
    id: "REQ-9012",
    title: "Need 2,000 pieces of broiler chicken weekly",
    description: "Looking for a reliable supplier for a chain of 3 restaurants. Must be able to deliver fresh every Monday and Thursday morning.",
    category: "Wholesale & Supply",
    location: "Dhaka",
    postedAt: "10 mins ago",
    budget: "Negotiable",
    urgency: "High",
    status: "new"
  },
  {
    id: "REQ-8995",
    title: "Monthly supply of organic vegetables",
    description: "Need a steady supply of premium organic vegetables for a supermarket. Approx 500kg per month.",
    category: "Wholesale & Supply",
    location: "Gazipur",
    postedAt: "2 hours ago",
    budget: "Fixed Rate",
    urgency: "Medium",
    status: "new"
  }
];

export default function PartnerLeadsPage() {
  const [broadcasts, setBroadcasts] = useState(LIVE_BROADCASTS);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<any>(null);
  
  // Form State
  const [price, setPrice] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");

  const openProposalModal = (lead: any) => {
    setSelectedLead(lead);
    setIsModalOpen(true);
  };

  const submitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    setBroadcasts(prev => prev.map(b => b.id === selectedLead.id ? { ...b, status: 'accepted' } : b));
    setIsModalOpen(false);
    setSelectedLead(null);
    setPrice("");
    setTimeline("");
    setMessage("");
  };

  const handlePass = (id: string) => {
    setBroadcasts(prev => prev.map(b => b.id === id ? { ...b, status: 'declined' } : b));
  };

  return (
    <div className="space-y-8 relative">
      
      <div className="flex items-center gap-3 mb-2">
        <RadioTower className="w-8 h-8 text-green-600" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Live Broadcasts</h1>
          <p className="text-gray-600 mt-1">Review active requirements and submit your terms.</p>
        </div>
      </div>

      <div className="space-y-6">
        {broadcasts.map((b) => (
          <div key={b.id} className={`bg-white rounded-3xl border ${b.status === 'new' ? 'border-green-200 shadow-md shadow-green-900/5' : 'border-gray-200 opacity-70'} p-6 md:p-8 transition-all`}>
            
            <div className="flex flex-col lg:flex-row justify-between gap-8 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded-md uppercase tracking-wider">{b.id}</span>
                  <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Posted {b.postedAt}
                  </span>
                  {b.urgency === 'High' && (
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-md">High Urgency</span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{b.title}</h3>
                <p className="text-gray-600 text-base mb-6 max-w-3xl leading-relaxed">{b.description}</p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-600 bg-gray-50 inline-flex p-3 rounded-xl border border-gray-100">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-gray-400" /> {b.location}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4 text-gray-400" /> {b.budget}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{b.category}</span>
                </div>
              </div>

              <div className="flex-shrink-0 w-full lg:w-64">
                {b.status === 'new' ? (
                  <div className="flex flex-col gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider text-center mb-1">Action Required</p>
                    <button 
                      onClick={() => openProposalModal(b)}
                      className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-sm w-full text-center"
                    >
                      Submit Proposal
                    </button>
                    <button 
                      onClick={() => handlePass(b.id)}
                      className="bg-white text-gray-600 border border-gray-200 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors w-full text-center"
                    >
                      Pass
                    </button>
                  </div>
                ) : b.status === 'accepted' ? (
                  <div className="bg-green-50 border border-green-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-2">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                    <div className="text-green-800 font-bold">Proposal Sent</div>
                    <div className="text-xs text-green-600 font-medium">BRIIZZ is reviewing your terms.</div>
                  </div>
                ) : (
                  <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-2">
                    <div className="text-gray-500 font-bold">Passed</div>
                    <div className="text-xs text-gray-400 font-medium">You skipped this broadcast.</div>
                  </div>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Proposal Modal */}
      {isModalOpen && selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden" style={{ animation: "slideUp 0.3s ease-out forwards" }}>
            
            <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Submit Proposal</h3>
                <p className="text-gray-500 text-sm">For: {selectedLead.title}</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={submitProposal} className="p-6 md:p-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Estimated Price (৳)</label>
                  <input 
                    type="text" 
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="e.g., 25,000 / week"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-brand-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Delivery Timeline</label>
                  <input 
                    type="text" 
                    required
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    placeholder="e.g., Can start this Monday"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-brand-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-900 mb-2">Message to BRIIZZ Coordinator</label>
                <textarea 
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Explain why you are the best fit for this requirement..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 outline-none transition-colors resize-none"
                ></textarea>
                <p className="text-xs text-gray-500 mt-2 font-medium">This message goes directly to the BRIIZZ matching team, not the end user.</p>
              </div>

              <div className="flex gap-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-6 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-md shadow-green-600/20"
                >
                  Submit Terms
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
