"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, Link as LinkIcon, UserPlus, ArrowRight } from "lucide-react";

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      {/* Hero Section */}
      <section className="py-20 bg-brand-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           {/* Abstract mesh background */}
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            People Make the Network.
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            BRIIZZ isn't just software. It's a living ecosystem of professionals, suppliers, and well-connected individuals working together to unlock opportunities.
          </p>
          <div className="flex justify-center">
            <Link href="/network/join" className="btn-primary bg-white text-brand-900 hover:bg-gray-100">
              Join the Network
            </Link>
          </div>
        </div>
      </section>

      {/* Participation Methods */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              You Don't Have to Be a Provider to Contribute.
            </h2>
            <p className="text-gray-600">
              There are three primary ways to participate and earn a reputation in the BRIIZZ network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Providers */}
            <div className="card-clean p-8 flex flex-col h-full border-t-4 border-t-brand-800">
              <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mb-6 text-brand-800">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Providers</h3>
              <p className="text-gray-600 mb-6 flex-1">
                <strong>Bring what you can provide.</strong><br/><br/>
                If you offer a service, supply products, or possess specific expertise, join as a provider. We'll bring the requirements directly to you when they match your capabilities.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600 border-t border-gray-100 pt-6">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-800"></span> Execute projects</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-800"></span> Supply hardware</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-800"></span> Offer consultancy</li>
              </ul>
              <Link href="/providers/join" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-600 transition-colors">
                Apply as Provider <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Connectors */}
            <div className="card-clean p-8 flex flex-col h-full border-t-4 border-t-blue-600">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                <LinkIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connectors</h3>
              <p className="text-gray-600 mb-6 flex-1">
                <strong>Know someone who can help?</strong><br/><br/>
                You don't need to do the work yourself. If you know reliable vendors, skilled freelancers, or established agencies, you can connect them to open opportunities on BRIIZZ.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600 border-t border-gray-100 pt-6">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Refer providers</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Facilitate matches</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Earn network rewards</li>
              </ul>
              <Link href="/network/connectors" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                Learn about Connectors <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Introducers */}
            <div className="card-clean p-8 flex flex-col h-full border-t-4 border-t-teal-600">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 text-teal-600">
                <UserPlus className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Introducers</h3>
              <p className="text-gray-600 mb-6 flex-1">
                <strong>Know someone who needs a solution?</strong><br/><br/>
                If your friend, client, or company needs something done (like building an app or setting up an office), introduce their requirement to BRIIZZ and let us handle the rest.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-gray-600 border-t border-gray-100 pt-6">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span> Submit leads</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span> Help businesses grow</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span> Earn referral value</li>
              </ul>
              <Link href="/needs/new" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-500 transition-colors">
                Introduce a Requirement <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to join the ecosystem?</h2>
          <p className="text-gray-600 mb-8">
            Create an account, set up your preferences, and start exploring opportunities or providing solutions immediately.
          </p>
          <Link href="/network/join" className="btn-primary text-lg px-8 py-4">
            Join the BRIIZZ Network
          </Link>
        </div>
      </section>
    </div>
  );
}
