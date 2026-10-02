"use client";

import React, { useState } from "react";
import { MessageSquare, Send, ShieldCheck, CheckCheck } from "lucide-react";

export default function UserMessagesPage() {
  const [activePartner, setActivePartner] = useState("Apex IT Solutions & Cloud");
  const [inputMsg, setInputMsg] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Apex IT Solutions & Cloud",
      text: "Hello Tanvir! We have completed the Phase 1 UI architecture for your web portal.",
      time: "10:15 AM",
      isMe: false,
    },
    {
      id: 2,
      sender: "You",
      text: "Thanks! Looks great. When can we expect the backend database sync?",
      time: "10:20 AM",
      isMe: true,
    },
    {
      id: 3,
      sender: "Apex IT Solutions & Cloud",
      text: "The PostgreSQL database schema is live on staging. Milestone 2 escrow can be released once you test.",
      time: "2:30 PM",
      isMe: false,
    },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "You",
        text: inputMsg,
        time: "Just now",
        isMe: true,
      },
    ]);
    setInputMsg("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Messages & Vendor Collaboration
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Direct secure communication with verified providers assigned to your requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] rounded-3xl bg-white dark:bg-[#101426] border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm">
        {/* Contact list */}
        <div className="border-r border-slate-200 dark:border-white/10 p-4 space-y-2 overflow-y-auto">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1">
            Active Matched Vendors
          </div>
          <button
            onClick={() => setActivePartner("Apex IT Solutions & Cloud")}
            className="w-full p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 text-left flex items-center gap-3 transition-colors"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&auto=format&fit=crop&q=80"
              alt="Apex IT"
              className="w-10 h-10 rounded-full object-cover shrink-0"
            />
            <div className="overflow-hidden">
              <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                Apex IT Solutions
              </div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold truncate flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Tier-1 Partner
              </div>
            </div>
          </button>
        </div>

        {/* Chat box */}
        <div className="md:col-span-2 flex flex-col h-full bg-slate-50/50 dark:bg-[#0c0f1e]/50">
          <div className="p-4 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#101426] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                AI
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white">{activePartner}</h3>
                <span className="text-[10px] text-emerald-500 font-medium">Online · Working on REQ-8924</span>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.isMe ? "items-end" : "items-start"}`}
              >
                <div
                  className={`p-3.5 rounded-2xl max-w-[80%] text-xs ${
                    m.isMe
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white dark:bg-white/10 text-slate-800 dark:text-slate-200 rounded-bl-none shadow-sm"
                  }`}
                >
                  {m.text}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                  <span>{m.time}</span>
                  {m.isMe && <CheckCheck className="w-3 h-3 text-blue-500" />}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-4 bg-white dark:bg-[#101426] border-t border-slate-200 dark:border-white/10 flex gap-2">
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-blue-600/20"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
