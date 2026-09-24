"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { CheckCircle2, AlertTriangle, Info, X } from "lucide-react";

export default function ToastContainer() {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl shadow-2xl backdrop-blur-xl border animate-in slide-in-from-right duration-300 ${
            toast.type === "success"
              ? "bg-emerald-950/90 border-emerald-500/40 text-emerald-100"
              : toast.type === "warning"
              ? "bg-amber-950/90 border-amber-500/40 text-amber-100"
              : "bg-slate-900/90 border-slate-700 text-slate-100"
          }`}
        >
          {toast.type === "success" && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
          {toast.type === "warning" && <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />}
          {toast.type === "info" && <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />}

          <div className="flex-1 text-xs sm:text-sm font-medium leading-snug">
            {toast.message}
          </div>

          <button
            type="button"
            onClick={() => removeToast(toast.id)}
            className="text-slate-400 hover:text-white shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
