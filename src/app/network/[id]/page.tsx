"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Box, Cpu, Scale, Building2, CheckCircle2 } from "lucide-react";
import { useParams } from "next/navigation";

const CATEGORY_DATA: Record<string, any> = {
  wholesale: {
    category: "Wholesale & Supply",
    description: "From restaurant ingredients to bulk raw materials, sourced directly from verified wholesalers.",
    icon: Box,
    color: "from-amber-400 to-orange-600",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-500/10",
    textLight: "text-amber-600",
    textDark: "dark:text-amber-400",
    items: [
      "Raw Materials & Manufacturing Inputs",
      "Food & Beverage Ingredients (Restaurant Supply)",
      "Apparel, Textiles & Bulk Clothing",
      "Office Supplies, Furniture & Stationery",
      "Packaging Materials & Logistics Supplies",
      "Industrial Parts & Machinery Components",
      "Agricultural Products & Bulk Produce",
      "Cleaning & Janitorial Supplies",
      "Safety Equipment & PPE",
      "Custom Branded Merchandise"
    ]
  },
  tech: {
    category: "Tech & Hardware",
    description: "Bulk computer parts, IT infrastructure setup, and enterprise software implementation.",
    icon: Cpu,
    color: "from-blue-400 to-indigo-600",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-500/10",
    textLight: "text-blue-600",
    textDark: "dark:text-blue-400",
    items: [
      "Enterprise IT Infrastructure & Servers",
      "Computers, Laptops & Employee Workstations",
      "Networking Equipment (Routers, Switches, Cabling)",
      "Point of Sale (POS) Systems & Hardware",
      "Cloud Solutions & Enterprise Software Implementation",
      "Cybersecurity Hardware & Firewalls",
      "Office Printers, Scanners & Copiers",
      "Smart Office IoT & Automation Devices",
      "Audio/Video Equipment & Conferencing Systems",
      "Data Storage & Backup Solutions"
    ]
  },
  business: {
    category: "Business Services",
    description: "Legal consulting, company registration, taxation, and financial auditing by certified firms.",
    icon: Scale,
    color: "from-emerald-400 to-teal-600",
    bgLight: "bg-emerald-50",
    bgDark: "dark:bg-emerald-500/10",
    textLight: "text-emerald-600",
    textDark: "dark:text-emerald-400",
    items: [
      "Legal Consulting & Corporate Law",
      "Company Registration, Trademarks & Licensing",
      "Taxation, Accounting & Financial Auditing",
      "Digital Marketing, SEO & Brand Strategy",
      "HR, Payroll & Enterprise Staffing Solutions",
      "IT Consulting & Managed Services",
      "Public Relations & Media Management",
      "Business Strategy & Management Consulting",
      "Logistics & Supply Chain Consulting",
      "Customer Support & Call Center Outsourcing"
    ]
  },
  realestate: {
    category: "Real Estate & Build",
    description: "Office interiors, building materials, and reliable contractor sourcing for your next project.",
    icon: Building2,
    color: "from-purple-400 to-fuchsia-600",
    bgLight: "bg-purple-50",
    bgDark: "dark:bg-purple-500/10",
    textLight: "text-purple-600",
    textDark: "dark:text-purple-400",
    items: [
      "Office Interior Design & Architecture",
      "Bulk Building Materials & Construction Supplies",
      "Commercial Real Estate & Warehouse Sourcing",
      "HVAC, Electrical & Specialized Plumbing Contractors",
      "Facility Management & Maintenance Services",
      "Commercial Property Renovation & Fit-outs",
      "Landscaping & Exterior Design Services",
      "Security System Installation & Monitoring",
      "Sustainable Building & Green Energy Solutions",
      "Property Valuation & Surveying Services"
    ]
  }
};

export default function NetworkCategoryPage() {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : "";
  const data = CATEGORY_DATA[id];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Category Not Found</h1>
          <Link href="/" className="text-brand-600 hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300 pt-24 pb-32 relative">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        
        {/* Back Link */}
        <Link href="/#elite-network" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-white mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Network
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16">
          <div className={`w-20 h-20 shrink-0 ${data.bgLight} ${data.bgDark} rounded-[2rem] flex items-center justify-center shadow-sm border border-white dark:border-transparent`}>
            <Icon className={`w-10 h-10 ${data.textLight} ${data.textDark}`} />
          </div>
          <div>
            <h1 className={`text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${data.color} mb-4 tracking-tight`}>
              {data.category}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              {data.description} We source and deliver everything in this category immediately to your hands.
            </p>
          </div>
        </div>

        {/* Detailed Grid */}
        <div className="bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            What we source & supply in this category:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {data.items.map((item: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3 group">
                <div className={`mt-1 w-6 h-6 rounded-full ${data.bgLight} ${data.bgDark} flex items-center justify-center shrink-0 border border-white dark:border-transparent group-hover:scale-110 transition-transform`}>
                  <CheckCircle2 className={`w-4 h-4 ${data.textLight} ${data.textDark}`} />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-lg group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Global CTA */}
        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-r ${data.color} rounded-[2rem] blur-xl opacity-20 dark:opacity-30 pointer-events-none transition-opacity`}></div>
          <div className="relative bg-white dark:bg-[#18181b] border border-gray-100 dark:border-white/10 rounded-[2rem] p-8 md:p-12 text-center flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl transition-colors duration-300">
            
            <div className="text-left flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Need something from {data.category}?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Submit your specific requirement and we'll connect you with the perfect verified provider immediately.
              </p>
            </div>
            
            <Link href="/needs/new" className={`shrink-0 text-white px-8 py-5 rounded-2xl font-bold text-lg flex items-center gap-2 transition-all hover:scale-105 shadow-lg bg-gradient-to-r ${data.color}`}>
              Submit Request <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
