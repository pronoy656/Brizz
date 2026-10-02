"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Box, Cpu, Scale, Building2, CheckCircle2, Code2, Monitor } from "lucide-react";
import { useParams } from "next/navigation";

const CATEGORY_DATA: Record<string, any> = {
  wholesale: {
    category: "Wholesale & Global Sourcing",
    description: "Direct factory sourcing from Karachi, Lahore, Guangzhou, Yiwu, and Shenzhen with full customs clearance and escrow protection.",
    icon: Box,
    color: "from-amber-400 to-orange-600",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-500/10",
    textLight: "text-amber-600",
    textDark: "dark:text-amber-400",
    items: [
      "Pakistani Designer Dresses & Luxury Lawn (Maria B, Sana Safinaz, Festive Boutique)",
      "China Factory Sourcing & Import (Guangzhou, Yiwu, Shenzhen Gadgets & Goods)",
      "Foreign Goods & International Sourcing (Dubai, Thailand, UK/USA Cosmetics & Perfumes)",
      "Computer Parts & Hardware Wholesale (Intel/AMD Processors, GPUs, SSDs at Dealer Rates)",
      "Garments & Export Surplus Apparel (Denim Jeans, Combed Cotton Blank T-Shirts, Polos)",
      "B2B Packaging Materials, Printed Cartons & Courier Poly Mailers",
      "Air Cargo & Sea Freight Logistics with 100% Customs Clearance",
      "Factory Origin Sample Verification & Quality Assurance",
      "Consolidated Container Shipping & Warehouse Warehousing",
      "Door-to-Door Delivery Across All 64 Districts in Bangladesh"
    ]
  },
  "wholesale-sourcing": {
    category: "Wholesale & Global Sourcing",
    description: "Direct factory sourcing from Karachi, Lahore, Guangzhou, Yiwu, and Shenzhen with full customs clearance and escrow protection.",
    icon: Box,
    color: "from-amber-400 to-orange-600",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-500/10",
    textLight: "text-amber-600",
    textDark: "dark:text-amber-400",
    items: [
      "Pakistani Designer Dresses & Luxury Lawn (Maria B, Sana Safinaz, Festive Boutique)",
      "China Factory Sourcing & Import (Guangzhou, Yiwu, Shenzhen Gadgets & Goods)",
      "Foreign Goods & International Sourcing (Dubai, Thailand, UK/USA Cosmetics & Perfumes)",
      "Computer Parts & Hardware Wholesale (Intel/AMD Processors, GPUs, SSDs at Dealer Rates)",
      "Garments & Export Surplus Apparel (Denim Jeans, Combed Cotton Blank T-Shirts, Polos)",
      "B2B Packaging Materials, Printed Cartons & Courier Poly Mailers",
      "Air Cargo & Sea Freight Logistics with 100% Customs Clearance",
      "Factory Origin Sample Verification & Quality Assurance",
      "Consolidated Container Shipping & Warehouse Warehousing",
      "Door-to-Door Delivery Across All 64 Districts in Bangladesh"
    ]
  },
  "software-tech": {
    category: "Software & Technology Network",
    description: "Vetted software engineers, web development studios, mobile app architects, and AI automation teams across Bangladesh.",
    icon: Code2,
    color: "from-blue-400 to-indigo-600",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-500/10",
    textLight: "text-blue-600",
    textDark: "dark:text-blue-400",
    items: [
      "Custom Enterprise Web Applications & SaaS Platforms (Next.js, React, Node.js)",
      "Cross-Platform Mobile Apps (Flutter, React Native for iOS & Android)",
      "AI Assistants, WhatsApp Business Chatbots & Workflow Automation (n8n, Zapier)",
      "Cloud Infrastructure, Server Hardening & DevOps (AWS, Docker, CI/CD)",
      "High-Conversion E-Commerce Stores & Payment Gateway Integration",
      "Interactive Dashboards, RESTful & GraphQL Microservice APIs",
      "Code Audits & Architecture Reviews by BRIIZZ Lead Technical Directors",
      "Full GitHub Source Code & Commercial IP Ownership Handover",
      "Biometric Authentication & FinTech Mobile Wallet Systems",
      "6 Months Post-Launch Free SLA Maintenance & Monitoring"
    ]
  },
  tech: {
    category: "Software & Technology Network",
    description: "Vetted software engineers, web development studios, mobile app architects, and AI automation teams across Bangladesh.",
    icon: Code2,
    color: "from-blue-400 to-indigo-600",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-500/10",
    textLight: "text-blue-600",
    textDark: "dark:text-blue-400",
    items: [
      "Custom Enterprise Web Applications & SaaS Platforms (Next.js, React, Node.js)",
      "Cross-Platform Mobile Apps (Flutter, React Native for iOS & Android)",
      "AI Assistants, WhatsApp Business Chatbots & Workflow Automation (n8n, Zapier)",
      "Cloud Infrastructure, Server Hardening & DevOps (AWS, Docker, CI/CD)",
      "High-Conversion E-Commerce Stores & Payment Gateway Integration",
      "Interactive Dashboards, RESTful & GraphQL Microservice APIs",
      "Code Audits & Architecture Reviews by BRIIZZ Lead Technical Directors",
      "Full GitHub Source Code & Commercial IP Ownership Handover",
      "Biometric Authentication & FinTech Mobile Wallet Systems",
      "6 Months Post-Launch Free SLA Maintenance & Monitoring"
    ]
  },
  "hardware-devices": {
    category: "Hardware, Devices & IT Infrastructure",
    description: "Authentic computer workstations, processor sourcing, commercial laptop fleets, and enterprise network installations.",
    icon: Monitor,
    color: "from-emerald-400 to-teal-600",
    bgLight: "bg-emerald-50",
    bgDark: "dark:bg-emerald-500/10",
    textLight: "text-emerald-600",
    textDark: "dark:text-emerald-400",
    items: [
      "High-End Processor Sourcing (Intel Core 14th Gen, AMD Ryzen 9000, Apple Silicon)",
      "Custom Workstations & 4K Video Editing Rigs with 24h Stress Testing",
      "Corporate Laptop Fleets (Dell, HP, Lenovo ThinkPad, Apple MacBook)",
      "Enterprise Servers & Synology Centralized Network Storage (NAS)",
      "Office Surveillance Systems, Night-Vision IP CCTV & Biometric Attendance",
      "Structured Cat6 Cabling, MikroTik & UniFi Mesh Wi-Fi Setup",
      "Official Bangladesh Brand Warranty with Immediate Replacement SLA",
      "Corporate Invoicing with Full VAT & Tax Compliance",
      "On-Site Deployment Across All 64 Districts in Bangladesh",
      "Hardware Trade-In & Periodic Fleet Upgrades"
    ]
  },
  hardware: {
    category: "Hardware, Devices & IT Infrastructure",
    description: "Authentic computer workstations, processor sourcing, commercial laptop fleets, and enterprise network installations.",
    icon: Monitor,
    color: "from-emerald-400 to-teal-600",
    bgLight: "bg-emerald-50",
    bgDark: "dark:bg-emerald-500/10",
    textLight: "text-emerald-600",
    textDark: "dark:text-emerald-400",
    items: [
      "High-End Processor Sourcing (Intel Core 14th Gen, AMD Ryzen 9000, Apple Silicon)",
      "Custom Workstations & 4K Video Editing Rigs with 24h Stress Testing",
      "Corporate Laptop Fleets (Dell, HP, Lenovo ThinkPad, Apple MacBook)",
      "Enterprise Servers & Synology Centralized Network Storage (NAS)",
      "Office Surveillance Systems, Night-Vision IP CCTV & Biometric Attendance",
      "Structured Cat6 Cabling, MikroTik & UniFi Mesh Wi-Fi Setup",
      "Official Bangladesh Brand Warranty with Immediate Replacement SLA",
      "Corporate Invoicing with Full VAT & Tax Compliance",
      "On-Site Deployment Across All 64 Districts in Bangladesh",
      "Hardware Trade-In & Periodic Fleet Upgrades"
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
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Category Not Found</h1>
          <p className="text-sm text-gray-500 mb-6">The requested network category does not exist or has moved.</p>
          <Link href="/network" className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm">
            Return to Network
          </Link>
        </div>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#07070a] transition-colors duration-300 pt-28 pb-32 relative">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
        {/* Back Link */}
        <Link
          href="/network"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-white mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Network Directory
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          <div
            className={`w-20 h-20 shrink-0 ${data.bgLight} ${data.bgDark} rounded-3xl flex items-center justify-center shadow-sm border border-slate-200 dark:border-white/10`}
          >
            <Icon className={`w-10 h-10 ${data.textLight} ${data.textDark}`} />
          </div>
          <div>
            <h1
              className={`text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${data.color} mb-3 tracking-tight`}
            >
              {data.category}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>

        {/* Detailed Grid */}
        <div className="bg-white dark:bg-[#101426] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-sm mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
            What our verified network provides in this category:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {data.items.map((item: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3 group">
                <div
                  className={`mt-0.5 w-6 h-6 rounded-full ${data.bgLight} ${data.bgDark} flex items-center justify-center shrink-0 border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform`}
                >
                  <CheckCircle2 className={`w-4 h-4 ${data.textLight} ${data.textDark}`} />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Global CTA */}
        <div className="relative">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${data.color} rounded-3xl blur-xl opacity-20 dark:opacity-30 pointer-events-none transition-opacity`}
          ></div>
          <div className="relative bg-white dark:bg-[#12162a] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 text-center flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-left flex-1 space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Need verified sourcing or services from {data.category}?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Submit your specific requirement and our operations team will match you with pre-vetted specialists within 24 hours.
              </p>
            </div>

            <Link
              href={`/requests/new?need=${encodeURIComponent(data.category)}`}
              className={`shrink-0 text-white px-7 py-4 rounded-xl font-bold text-sm flex items-center gap-2 transition-all hover:scale-105 shadow-lg bg-gradient-to-r ${data.color}`}
            >
              <span>Submit Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
