"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, Box, Cpu, Scale, Building2, X } from "lucide-react";

const NETWORK_CAPABILITIES = [
  {
    id: "wholesale",
    category: "Wholesale & Supply",
    description: "From restaurant ingredients to bulk raw materials, sourced directly from verified wholesalers.",
    icon: Box,
    color: "from-amber-400 to-orange-600",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-500/10",
    textLight: "text-amber-600",
    textDark: "dark:text-amber-400",
    details: [
      "Raw Materials & Manufacturing Inputs",
      "Food & Beverage Ingredients (Restaurant Supply)",
      "Office Supplies, Furniture & Stationery",
      "Packaging Materials & Logistics Supplies",
      "Industrial Parts & Machinery Components"
    ]
  },
  {
    id: "tech",
    category: "Tech & Hardware",
    description: "Bulk computer parts, IT infrastructure setup, and enterprise software implementation.",
    icon: Cpu,
    color: "from-blue-400 to-indigo-600",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-500/10",
    textLight: "text-blue-600",
    textDark: "dark:text-blue-400",
    details: [
      "Enterprise IT Infrastructure & Servers",
      "Computers, Laptops & Employee Workstations",
      "Networking Equipment (Routers, Switches, Cabling)",
      "Point of Sale (POS) Systems & Hardware",
      "Cloud Solutions & Enterprise Software Implementation"
    ]
  },
  {
    id: "business",
    category: "Business Services",
    description: "Legal consulting, company registration, taxation, and financial auditing by certified firms.",
    icon: Scale,
    color: "from-emerald-400 to-teal-600",
    bgLight: "bg-emerald-50",
    bgDark: "dark:bg-emerald-500/10",
    textLight: "text-emerald-600",
    textDark: "dark:text-emerald-400",
    details: [
      "Legal Consulting & Corporate Law",
      "Company Registration, Trademarks & Licensing",
      "Taxation, Accounting & Financial Auditing",
      "Digital Marketing, SEO & Brand Strategy",
      "HR, Payroll & Enterprise Staffing Solutions"
    ]
  },
  {
    id: "realestate",
    category: "Real Estate & Build",
    description: "Office interiors, building materials, and reliable contractor sourcing for your next project.",
    icon: Building2,
    color: "from-purple-400 to-fuchsia-600",
    bgLight: "bg-purple-50",
    bgDark: "dark:bg-purple-500/10",
    textLight: "text-purple-600",
    textDark: "dark:text-purple-400",
    details: [
      "Office Interior Design & Architecture",
      "Bulk Building Materials & Construction Supplies",
      "Commercial Real Estate & Warehouse Sourcing",
      "HVAC, Electrical & Specialized Plumbing Contractors",
      "Facility Management & Maintenance Services"
    ]
  }
];

export default function ProviderPreview() {
  const [selectedCategory, setSelectedCategory] = useState<typeof NETWORK_CAPABILITIES[0] | null>(null);

  return (
    <section id="elite-network" className="py-32 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full max-w-[100rem]">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-brand-900/20 text-brand-800 dark:text-brand-400 text-sm font-bold mb-6 uppercase tracking-wider border border-gray-200 dark:border-brand-500/20 shadow-sm transition-colors duration-300">
            <ShieldCheck className="w-4 h-4" /> 100% Vetted Ecosystem
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight transition-colors duration-300">
            An <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">Elite</span> Network
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            You don't need to search through directories. When you submit a requirement, our system instantly pings thousands of verified partners.
          </p>
        </div>
        
        {/* Capability Cards - 4x1 Grid with wider container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24 w-full">
          {NETWORK_CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div 
                key={idx} 
                className="relative group bg-white dark:bg-[#121214] border border-gray-100 dark:border-white/5 rounded-[2rem] p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)] transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden"
              >
                
                {/* Background Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`}></div>
                
                {/* Icon Wrapper */}
                <div className={`w-16 h-16 ${cap.bgLight} ${cap.bgDark} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 relative z-10 shadow-sm border border-white dark:border-transparent`}>
                  <Icon className={`w-8 h-8 ${cap.textLight} ${cap.textDark} transition-colors duration-500`} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-500">
                  {cap.category}
                </h3>
                
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed flex-1 relative z-10 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors duration-500 mb-6">
                  {cap.description}
                </p>
                
                {/* Explore Button */}
                <div className="relative z-10 mt-auto pt-6 border-t border-gray-100 dark:border-white/10 transition-colors duration-500">
                  <Link 
                    href={`/network/${cap.id}`}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 
                    bg-gray-50 text-gray-700 hover:bg-gray-100
                    dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10 
                    border border-gray-200 dark:border-white/5`}
                  >
                    Explore {cap.category} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Animated Bottom Border */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${cap.color} group-hover:w-full transition-all duration-700 ease-out`}></div>

              </div>
            );
          })}
        </div>

        {/* Global CTA */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing Background for CTA */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-indigo-600 rounded-[2rem] blur-xl opacity-20 dark:opacity-40 pointer-events-none transition-opacity"></div>
          
          <div className="relative bg-white dark:bg-[#18181b] border border-gray-100 dark:border-white/10 rounded-[2rem] p-8 md:p-12 text-center flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl transition-colors duration-300 overflow-hidden">
            
            {/* Soft inner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="text-left flex-1 relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Have a unique requirement?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">
                Whether it's 2,000 pieces of chicken or a full office setup, we will secure the right provider.
              </p>
            </div>
            
            <Link href="/needs/new" className="relative z-10 shrink-0 bg-brand-800 text-white hover:bg-brand-900 px-8 py-5 rounded-2xl font-bold text-lg flex items-center gap-2 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(30,64,175,0.4)]">
              Submit Request <ArrowRight className="w-5 h-5" />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
