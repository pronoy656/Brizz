"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Star, MapPin, Briefcase, Calendar, ShieldCheck, Zap } from "lucide-react";

export default function ProviderProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header Profile Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center font-bold text-gray-400 text-3xl border border-gray-200 shrink-0 shadow-sm">
                  A
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">ABC Solutions</h1>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-bold border border-brand-100">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600 mb-4">
                    <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-gray-400" /> Technology & Business Solutions</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-gray-400" /> Dhaka, Bangladesh</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center text-yellow-500 fill-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <span className="font-bold text-gray-900">5.0</span>
                    <span className="text-gray-500 underline cursor-pointer">(124 Reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About the Company</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                ABC Solutions is an end-to-end digital transformation agency specializing in enterprise software, cloud infrastructure, and large-scale IT deployments. With over 12 years of industry experience, we help traditional businesses transition to digital workflows securely and efficiently.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-100">
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Founded</div>
                  <div className="font-semibold text-gray-900">2012</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Team Size</div>
                  <div className="font-semibold text-gray-900">50-100 People</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Availability</div>
                  <div className="font-semibold text-green-600 flex items-center gap-1"><Zap className="w-3.5 h-3.5" /> Taking Projects</div>
                </div>
              </div>
            </div>

            {/* Capabilities & Services */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Services</h2>
              <div className="space-y-4">
                {[
                  "Custom ERP Development",
                  "Cloud Migration & AWS Hosting",
                  "Cybersecurity Audits",
                  "Corporate Website Design"
                ].map((service, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200 transition-colors">
                    <span className="font-semibold text-gray-900">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Primary Action */}
            <div className="bg-brand-950 rounded-2xl p-6 text-white shadow-card sticky top-28">
              <h3 className="font-bold text-lg mb-2">Work with ABC Solutions</h3>
              <p className="text-brand-200 text-sm mb-6">
                Send a secure request through BRIIZZ. We will manage the introduction and project scoping.
              </p>
              <Link href={`/needs/new?provider=abc-solutions`} className="w-full block text-center bg-white text-brand-900 hover:bg-gray-100 px-6 py-4 rounded-xl font-bold transition-colors mb-4">
                Request Connection
              </Link>
              <div className="text-xs text-center text-brand-300 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Secure via BRIIZZ Platform
              </div>
            </div>

            {/* Verification Details */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Verification</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-800 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Identity Verified</div>
                    <div className="text-xs text-gray-500">Government ID checked</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-800 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Business Registration</div>
                    <div className="text-xs text-gray-500">Trade license verified</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-800 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">BRIIZZ Partner</div>
                    <div className="text-xs text-gray-500">Completed 10+ projects</div>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
