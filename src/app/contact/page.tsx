"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, Briefcase, Network, HelpCircle, Heart, Facebook, Linkedin, Youtube, Instagram, ArrowUpRight } from "lucide-react";
import { BRIZZ_SOCIAL_LINKS } from "@/lib/data";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#07070a] pt-8 sm:pt-10 pb-16 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        
        <div className="text-center mb-10 pt-0">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-3">How can we help?</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">Select the option that best describes your inquiry.</p>
        </div>

        <div className="bg-white dark:bg-[#0e1322] border border-gray-200 dark:border-white/10 rounded-3xl p-4 md:p-8 shadow-sm">
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

          {/* Direct WhatsApp & Social Sites Strip */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950 text-white shadow-lg">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center justify-center md:justify-start gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Instant Direct WhatsApp
                </span>
                <h3 className="text-lg font-bold">Need Immediate Assistance?</h3>
                <p className="text-xs text-slate-300">
                  Chat directly with our core concierge team on WhatsApp: <strong className="text-white font-mono">{BRIZZ_SOCIAL_LINKS.whatsappNumber}</strong>
                </p>
              </div>

              <a
                href={BRIZZ_SOCIAL_LINKS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-lg shadow-[#25D366]/30 flex items-center gap-2 transition-all hover:scale-105 shrink-0"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Official Social Media Channels */}
            <div className="mt-8 text-center space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Official BRIIZZ Social Sites
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={BRIZZ_SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 hover:border-[#1877F2] bg-white hover:bg-blue-50/50 text-xs font-bold text-gray-700 hover:text-[#1877F2] transition-all shadow-sm group"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                  <span>Facebook Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1877F2]" />
                </a>

                <a
                  href={BRIZZ_SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 hover:border-[#0A66C2] bg-white hover:bg-blue-50/50 text-xs font-bold text-gray-700 hover:text-[#0A66C2] transition-all shadow-sm group"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#0A66C2]" />
                </a>

                <a
                  href={BRIZZ_SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 hover:border-[#FF0000] bg-white hover:bg-red-50/50 text-xs font-bold text-gray-700 hover:text-[#FF0000] transition-all shadow-sm group"
                >
                  <Youtube className="w-4 h-4 text-[#FF0000]" />
                  <span>YouTube Channel</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#FF0000]" />
                </a>

                <a
                  href={BRIZZ_SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 hover:border-pink-500 bg-white hover:bg-pink-50/50 text-xs font-bold text-gray-700 hover:text-pink-600 transition-all shadow-sm group"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-pink-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
