"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Search, Users, CheckCircle2, Award, Zap, Repeat } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    { 
      num: "01", 
      title: "Tell Us What You Need", 
      desc: "Fill out a simple form explaining what you want to achieve. No technical jargon required." 
    },
    { 
      num: "02", 
      title: "We Understand Your Requirement", 
      desc: "Our team reviews your request to ensure we know exactly what will solve your problem." 
    },
    { 
      num: "03", 
      title: "We Search the Network", 
      desc: "We look through our verified database of providers and partners to find the perfect match." 
    },
    { 
      num: "04", 
      title: "We Connect the Right People", 
      desc: "You get introduced to the exact specialists or suppliers who can deliver the solution." 
    },
    { 
      num: "05", 
      title: "We Coordinate the Opportunity", 
      desc: "BRIIZZ stays in the loop, ensuring terms, quality, and deliverables are perfectly aligned." 
    },
    { 
      num: "06", 
      title: "Your Solution Gets Delivered", 
      desc: "The project is completed successfully, securely, and stress-free." 
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            You Tell Us What You Need.<br />
            <span className="text-brand-800">We Find the Way.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our process is designed to remove the friction of searching, vetting, and managing multiple vendors. Here is how BRIIZZ orchestrates the perfect solution.
          </p>
        </div>
      </section>

      {/* The 6 Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="card-clean p-8 flex flex-col items-start">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-800 font-bold text-xl flex items-center justify-center mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What if we can't find a provider? */}
      <section className="py-24 bg-brand-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What happens when we can't find a provider?
            </h2>
            <p className="text-gray-400 text-lg">
              BRIIZZ isn't just a static directory. It's an active, human network.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-brand-800/30 -translate-y-1/2 z-0" />
            <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-0.5 bg-brand-800/30 -translate-x-1/2 z-0" />

            <div className="relative z-10 flex flex-col items-center bg-brand-950 p-4">
              <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-bold text-center uppercase tracking-wider">Provider Missing</h3>
            </div>
            
            <ArrowRight className="hidden md:block text-brand-400 relative z-10" />

            <div className="relative z-10 flex flex-col items-center bg-brand-950 p-4">
              <div className="w-20 h-20 rounded-2xl bg-brand-800 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(74,20,140,0.5)]">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-bold text-center uppercase tracking-wider">Network Activated</h3>
            </div>

            <ArrowRight className="hidden md:block text-brand-400 relative z-10" />

            <div className="relative z-10 flex flex-col items-center bg-brand-950 p-4">
              <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-bold text-center uppercase tracking-wider">Connector Finds Them</h3>
            </div>

            <ArrowRight className="hidden md:block text-brand-400 relative z-10" />

            <div className="relative z-10 flex flex-col items-center bg-brand-950 p-4">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-4 text-brand-900">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-bold text-center uppercase tracking-wider">Provider Found</h3>
            </div>
          </div>
        </div>
      </section>

      {/* What happens after the solution? */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            What happens after the solution?
          </h2>

          <div className="flex flex-col md:flex-row items-start justify-center gap-8">
            <div className="flex-1 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center text-brand-800 mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Transaction Complete</h4>
              <p className="text-sm text-gray-500">The core opportunity is securely wrapped up.</p>
            </div>
            
            <div className="flex-1 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center text-brand-800 mb-4">
                <Repeat className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Contribution Tracking</h4>
              <p className="text-sm text-gray-500">Everyone who helped connect the dots is recorded.</p>
            </div>

            <div className="flex-1 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center text-brand-800 mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Reward Eligibility</h4>
              <p className="text-sm text-gray-500">Connectors and introducers earn their reputation & rewards.</p>
            </div>
          </div>

          <div className="mt-20">
            <Link href="/needs/new" className="btn-primary">
              Experience It Yourself
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
