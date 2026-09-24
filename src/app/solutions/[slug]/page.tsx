"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Box, ArrowRight } from "lucide-react";

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  // Mock data for the specific solution
  const solution = {
    title: "Start a Business",
    description: "Build the foundational network you need to get your new venture off the ground without the stress of managing multiple vendors.",
    requirements: [
      "Company Registration & Legal",
      "Office Space or Virtual Address",
      "Office Furniture & Layout",
      "IT Infrastructure & Networking",
      "Brand Identity & Logo",
      "Corporate Website",
      "Accounting Setup",
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        
        <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 mb-10 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Goals
        </Link>

        {/* Hero Area */}
        <div className="bg-white border border-gray-200 rounded-3xl p-10 md:p-16 mb-8 text-center shadow-sm">
          <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center text-brand-800 mx-auto mb-8">
            <Box className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {solution.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {solution.description}
          </p>
        </div>

        {/* Requirements Breakdown */}
        <div className="bg-white border border-gray-200 rounded-3xl p-10 md:p-16 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What you may need for this goal:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {solution.requirements.map((req, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-brand-800 shrink-0" />
                <span className="font-semibold text-gray-900">{req}</span>
              </div>
            ))}
          </div>

          <div className="text-center p-8 bg-brand-50 rounded-2xl border border-brand-100">
            <h3 className="font-bold text-brand-900 mb-2">Ready to start?</h3>
            <p className="text-brand-800 text-sm mb-6">Select which of these components you need and we will find the providers.</p>
            <Link href={`/needs/new?goal=${params.slug}`} className="btn-primary inline-flex items-center gap-2">
              Start My Requirement <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
