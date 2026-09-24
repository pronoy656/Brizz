"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 pt-24 pb-12 border-t border-slate-900 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-20 bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-800/50 backdrop-blur-sm">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Join the BRIIZZ Ecosystem</h3>
            <p className="text-slate-400 text-sm md:text-base">Get the latest platform updates, market insights, and exclusive partnership opportunities delivered directly to your inbox.</p>
          </div>
          <div className="w-full lg:w-auto flex-1 max-w-md">
            <form className="flex items-center relative">
              <div className="absolute left-4 text-slate-500"><Mail className="w-5 h-5" /></div>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-slate-950 border border-slate-800 text-white rounded-full py-4 pl-12 pr-36 focus:outline-none focus:border-brand-500 transition-colors"
              />
              <button 
                type="button"
                className="absolute right-2 bg-white text-slate-950 font-bold py-2.5 px-6 rounded-full hover:bg-brand-50 hover:text-brand-900 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-16">
          
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <span className="font-black text-3xl tracking-tight text-white flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-blue-600 flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
                  <span className="text-white text-lg">B</span>
                </div>
                BRIIZZ
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm mb-8 leading-relaxed">
              A premium concierge marketplace connecting you with the exact right people, vetted providers, and holistic solutions across Bangladesh.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all hover:scale-110">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all hover:scale-110">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Platform</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/solutions" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Enterprise Solutions</Link></li>
              <li><Link href="/how-it-works" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>How It Works</Link></li>
              <li><Link href="/network" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Partner Network</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/insights" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Market Insights</Link></li>
              <li><Link href="/free-help" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Concierge Help</Link></li>
              <li><Link href="/trust" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Trust & Safety</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/privacy" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Terms of Service</Link></li>
              <li><Link href="/refunds" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>Refund Policy</Link></li>
            </ul>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 pt-8 border-t border-slate-900/80">
          <p>© {new Date().getFullYear()} BRIIZZ Technology. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="hover:text-white transition-colors cursor-pointer font-medium">English</span>
            <span className="hover:text-white transition-colors cursor-pointer font-medium">বাংলা</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              All systems operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
