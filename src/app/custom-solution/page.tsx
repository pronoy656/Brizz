"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CustomSolutionPage() {
  const [requirement, setRequirement] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (requirement.trim()) {
      router.push(`/needs/new?q=${encodeURIComponent(requirement)}`);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl w-full">
        
        <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Goals
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Can't find the right solution?
          </h1>
          <p className="text-lg text-gray-600">
            Don't worry. Tell us exactly what you're trying to accomplish in your own words, and we'll figure out the rest.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <label htmlFor="custom-req" className="block text-lg font-bold text-gray-900 mb-4 text-center">
            What are you trying to achieve?
          </label>
          
          <textarea
            id="custom-req"
            rows={5}
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            placeholder="E.g., I need to find a manufacturer for custom packaging boxes, design the logo, and arrange shipping to Dhaka."
            className="w-full p-6 rounded-2xl border border-gray-300 focus:border-brand-800 focus:ring-4 focus:ring-brand-800/10 outline-none resize-none text-lg text-gray-900 mb-8 transition-all bg-white"
          ></textarea>
          
          <button 
            type="submit" 
            disabled={!requirement.trim()}
            className="w-full btn-primary py-5 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue <ArrowRight className="w-5 h-5" />
          </button>
        </form>

      </div>
    </div>
  );
}
