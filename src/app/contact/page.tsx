"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, Briefcase, Network, HelpCircle, Heart } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        
        <div className="text-center mb-16 pt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How can we help?</h1>
          <p className="text-lg text-gray-600">Select the option that best describes your inquiry.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-4 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <Link href="/contact/inquiry" className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-brand-200 hover:bg-brand-50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-brand-800 group-hover:text-white transition-colors shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">General Inquiry</h3>
                <p className="text-sm text-gray-500">Questions about how BRIIZZ works or general platform assistance.</p>
              </div>
            </Link>

            <Link href="/contact/business" className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-brand-200 hover:bg-brand-50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-brand-800 group-hover:text-white transition-colors shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Business Partnership</h3>
                <p className="text-sm text-gray-500">Discuss corporate accounts, large scale integrations, or partnerships.</p>
              </div>
            </Link>

            <Link href="/providers/join" className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-brand-200 hover:bg-brand-50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-brand-800 group-hover:text-white transition-colors shrink-0">
                <Network className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Provider Partnership</h3>
                <p className="text-sm text-gray-500">Apply to become a verified service or product provider on BRIIZZ.</p>
              </div>
            </Link>

            <Link href="/contact/support" className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-brand-200 hover:bg-brand-50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-brand-800 group-hover:text-white transition-colors shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Account Support</h3>
                <p className="text-sm text-gray-500">Get help with your existing account, transactions, or disputes.</p>
              </div>
            </Link>

            <Link href="/free-help" className="md:col-span-2 flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-red-200 hover:bg-red-50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Free Help</h3>
                <p className="text-sm text-gray-500">Submit requests for emergency assistance, healthcare support, or community aid.</p>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
