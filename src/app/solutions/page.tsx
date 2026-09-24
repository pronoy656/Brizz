"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Lightbulb, Briefcase, Box, Globe, Shield, Zap } from "lucide-react";

const SOLUTIONS = [
  {
    id: "start-a-business",
    title: "Start a Business",
    desc: "Build the foundational network you need to get your new venture off the ground.",
    icon: Lightbulb
  },
  {
    id: "build-online-presence",
    title: "Build an Online Presence",
    desc: "Websites, branding, digital marketing, and everything needed to be seen online.",
    icon: Globe
  },
  {
    id: "equip-an-office",
    title: "Equip an Office",
    desc: "Computers, networking, CCTV, and physical infrastructure setup.",
    icon: Box
  },
  {
    id: "automate-operations",
    title: "Automate Operations",
    desc: "Custom software, AI tools, and process automation for efficiency.",
    icon: Zap
  },
  {
    id: "secure-infrastructure",
    title: "Secure Infrastructure",
    desc: "Cybersecurity audits, secure cloud hosting, and data protection.",
    icon: Shield
  },
  {
    id: "hire-specialists",
    title: "Hire Specialists",
    desc: "Find specialized consultants, freelancers, or agencies for unique projects.",
    icon: Briefcase
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      
      {/* Header */}
      <section className="bg-brand-950 py-20 border-b border-brand-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What are you trying to accomplish?
            </h1>
            <p className="text-lg text-brand-200">
              Don't worry about finding individual vendors. Tell us your final goal, and BRIIZZ will assemble the exact solutions and providers required.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {SOLUTIONS.map(sol => {
              const Icon = sol.icon;
              return (
                <Link key={sol.id} href={`/solutions/${sol.id}`} className="group block h-full">
                  <div className="card-clean p-8 h-full flex flex-col border-t-4 border-t-transparent hover:border-t-brand-800 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-800 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-800 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                      {sol.desc}
                    </p>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-brand-800 uppercase tracking-wider">
                      Explore Goal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Custom Requirement Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Have a completely unique goal?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              If your goal doesn't fit into a standard category, our network can still handle it. Describe exactly what you need in your own words.
            </p>
            <Link href="/custom-solution" className="btn-primary">
              Create Custom Requirement
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
