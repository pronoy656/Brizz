"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Search, Users, Activity } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      
      {/* Hero */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <span className="text-sm font-bold tracking-widest uppercase text-brand-800 mb-4 block">What is BRIIZZ?</span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Connecting what you need <br /> with who can provide it.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            People know what they need, but they often don't know who can provide it or where to find the right person. That is why we built BRIIZZ.
          </p>
        </div>
      </section>

      {/* Why BRIIZZ */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why BRIIZZ?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-800 mx-auto mb-6">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No More Searching</h3>
              <p className="text-gray-600">
                Stop scrolling through endless directories. Tell us the goal, and we do the matching for you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-800 mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Network</h3>
              <p className="text-gray-600">
                Every provider is checked for capabilities and identity to ensure a safe, reliable transaction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-800 mx-auto mb-6">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Progress</h3>
              <p className="text-gray-600">
                Track every step of your requirement from introduction to successful delivery in one dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Network Difference */}
      <section className="py-24 bg-brand-950 text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Makes the Network Different</h2>
          <p className="text-lg text-brand-200 mb-12 leading-relaxed">
            Most platforms are just directories. BRIIZZ is an active ecosystem. If we do not have the exact provider you need, our network of Connectors and Introducers activates to source them for you. You are never left without a solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/network" className="btn-primary bg-white text-brand-900 hover:bg-gray-100">
              Explore The Network
            </Link>
            <Link href="/how-it-works" className="btn-secondary text-white border-white/20 hover:bg-white/10">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
