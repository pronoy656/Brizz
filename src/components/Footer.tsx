"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Facebook, Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import { BRIZZ_SOCIAL_LINKS } from "@/lib/data";

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
            <Link
              href="/"
              className="inline-block mb-6 group"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
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
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <a
                href={BRIZZ_SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="BRIIZZ Facebook Page"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all hover:scale-110 shadow-sm"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BRIZZ_SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="BRIIZZ LinkedIn"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all hover:scale-110 shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={BRIZZ_SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="BRIIZZ YouTube Channel"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white transition-all hover:scale-110 shadow-sm"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={BRIZZ_SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="BRIIZZ Instagram"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent hover:text-white transition-all hover:scale-110 shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRIZZ_SOCIAL_LINKS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all hover:scale-110 shadow-sm"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>

            <a
              href={BRIZZ_SOCIAL_LINKS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>WhatsApp: <strong className="text-white font-mono">{BRIZZ_SOCIAL_LINKS.whatsappNumber}</strong></span>
            </a>
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
