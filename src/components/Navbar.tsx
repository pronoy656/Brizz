"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ChevronDown, User, MapPin, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import GlobalSearch from "@/components/GlobalSearch";

function ThemeToggleInline() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

const solutionCategories = [
  {
    title: { en: "Wholesale & Supply", bn: "পাইকারি ও সাপ্লাই" },
    items: [
      { en: "GPUs & PC Hardware", bn: "জিপিইউ ও কম্পিউটার হার্ডওয়্যার", href: "/solutions/wholesale/gpus-electronics" },
      { en: "Pakistani Boutique Dresses", bn: "পাকিস্তানি ড্রেস পাইকারি", href: "/solutions/wholesale/clothing" },
      { en: "China Factory Sourcing", bn: "চায়না সরাসরি আমদানি", href: "/solutions/wholesale/china-sourcing" },
      { en: "Raw Materials", bn: "কাঁচামাল", href: "/solutions/wholesale/raw-materials" },
      { en: "Packaging Solutions", bn: "প্যাকেজিং সমাধান", href: "/solutions/wholesale/packaging" },
      { en: "Machinery & Equipment", bn: "মেশিনারিজ ও ইকুইপমেন্ট", href: "/solutions/wholesale/machinery" },
    ]
  },
  {
    title: { en: "Tech & IT Solutions", bn: "টেক ও আইটি সমাধান" },
    items: [
      { en: "Web Development", bn: "ওয়েব ডেভেলপমেন্ট", href: "/solutions/tech/web" },
      { en: "App Development", bn: "অ্যাপ ডেভেলপমেন্ট", href: "/solutions/tech/app" },
      { en: "Custom Software", bn: "কাস্টম সফটওয়্যার", href: "/solutions/tech/software" },
    ]
  },
  {
    title: { en: "Real Estate & Building", bn: "রিয়েল এস্টেট ও নির্মাণ" },
    items: [
      { en: "Interior Design", bn: "ইন্টেরিয়র ডিজাইন", href: "/solutions/real-estate/interior" },
      { en: "Construction Materials", bn: "নির্মাণ সামগ্রী", href: "/solutions/real-estate/materials" },
      { en: "Property Consulting", bn: "প্রপার্টি কনসাল্টিং", href: "/solutions/real-estate/consulting" },
    ]
  },
  {
    title: { en: "Business Services", bn: "বিজনেস সার্ভিসেস" },
    items: [
      { en: "Legal & Compliance", bn: "লিগ্যাল ও কমপ্লায়েন্স", href: "/solutions/business/legal" },
      { en: "Marketing & Branding", bn: "মার্কেটিং ও ব্র্যান্ডিং", href: "/solutions/business/marketing" },
      { en: "HR & Recruitment", bn: "এইচআর ও রিক্রুটমেন্ট", href: "/solutions/business/hr" },
    ]
  }
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("Network", "নেটওয়ার্ক"), href: "/network" },
    { name: t("Profile", "প্রোফাইল"), href: "/profile" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2.5 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gray-100 dark:border-white/10 shadow-sm"
          : "py-4 bg-white dark:bg-[#0a0a0a]"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-bold text-2xl tracking-tight text-brand-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
              BRIIZZ
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {/* Home */}
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-brand-700 dark:text-brand-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-brand-900 dark:hover:text-white"
              }`}
            >
              {t("Home", "হোম")}
            </Link>

            {/* Solutions with Mega Menu */}
            <div className="relative group">
              <Link
                href="/solutions"
                className={`text-sm font-medium flex items-center gap-1 transition-colors py-2 ${
                  pathname.startsWith("/solutions")
                    ? "text-brand-700 dark:text-brand-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-brand-900 dark:hover:text-white"
                }`}
              >
                {t("Solutions", "সমাধান")} <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>
              
              {/* Mega Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white dark:bg-[#121214] rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 overflow-hidden z-50">
                <div className="grid grid-cols-4 p-6 gap-6">
                  {solutionCategories.map((category) => (
                    <div key={category.title.en} className="space-y-4">
                      <h4 className="font-bold text-sm text-brand-900 dark:text-brand-400 border-b border-gray-100 dark:border-white/10 pb-2">
                        {language === 'bn' ? category.title.bn : category.title.en}
                      </h4>
                      <ul className="space-y-3">
                        {category.items.map((item) => (
                          <li key={item.en}>
                            <Link href={item.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors block">
                              {language === 'bn' ? item.bn : item.en}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 dark:bg-white/5 p-4 text-center border-t border-gray-100 dark:border-white/10">
                  <Link href="/solutions" className="text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline">
                    {t("View all solutions", "সকল সমাধান দেখুন")} →
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-brand-700 dark:text-brand-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-brand-900 dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            
            {/* District Selector Link */}
            <Link
              href="/districts"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-900 dark:hover:text-white transition-colors bg-brand-50 dark:bg-white/5 px-3 py-1.5 rounded-full border border-brand-100 dark:border-white/10"
            >
              <MapPin className="w-4 h-4 text-brand-800 dark:text-brand-400" />
              <span className="font-bold whitespace-nowrap text-brand-900 dark:text-white">{t("64 Districts", "৬৪ জেলা")}</span>
            </Link>

            <GlobalSearch />

            {/* Language Toggle */}
            <div className="flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              <button 
                onClick={() => setLanguage("en")}
                className={`transition-colors ${language === "en" ? "text-brand-900 dark:text-brand-400 font-bold" : "hover:text-brand-900 dark:hover:text-brand-400"}`}
              >
                EN
              </button>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <button 
                onClick={() => setLanguage("bn")}
                className={`transition-colors ${language === "bn" ? "text-brand-900 dark:text-brand-400 font-bold" : "hover:text-brand-900 dark:hover:text-brand-400"}`}
              >
                বাংলা
              </button>
            </div>

            {/* Inline Theme Toggle */}
            <ThemeToggleInline />

            <div className="relative">
              <button
                onClick={() => setGetStartedOpen(!getStartedOpen)}
                className="bg-brand-900 text-white dark:bg-white dark:text-[#0a0a0a] hover:bg-brand-800 dark:hover:bg-gray-200 px-5 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 text-sm whitespace-nowrap"
              >
                {t("Get Started", "শুরু করুন")}
                <ChevronDown className="w-4 h-4" />
              </button>

              {getStartedOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-[#121214] rounded-xl shadow-2xl border border-gray-100 dark:border-white/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-50">
                  <div className="p-4 bg-gray-50 dark:bg-white/5 border-b border-gray-100 dark:border-white/10">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {t("What brings you to BRIIZZ?", "আপনি কি খুঁজছেন?")}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href="/login"
                      className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-white/5 hover:text-brand-900 dark:hover:text-white transition-colors border-b border-gray-100 dark:border-white/10"
                    >
                      <User className="w-4 h-4" />
                      {t("Login to your account", "আপনার অ্যাকাউন্টে লগইন করুন")}
                    </Link>
                    <Link
                      href="/needs/new"
                      className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-white/5 hover:text-brand-900 dark:hover:text-white transition-colors"
                    >
                      {t("I need something", "আমার কিছু প্রয়োজন")}
                    </Link>
                    <Link
                      href="/providers/join"
                      className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-white/5 hover:text-brand-900 dark:hover:text-white transition-colors"
                    >
                      {t("I can provide something", "আমি কিছু দিতে পারবো")}
                    </Link>
                    <Link
                      href="/network/join"
                      className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-white/5 hover:text-brand-900 dark:hover:text-white transition-colors border-t border-gray-100 dark:border-white/10"
                    >
                      {t("I want to join the network", "আমি নেটওয়ার্কে যুক্ত হতে চাই")}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle & Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggleInline />
            <button
              aria-label="Toggle mobile menu"
              className="p-2.5 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6 text-brand-600 dark:text-brand-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Featured Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-[#0e0e12]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300 max-h-[calc(100vh-80px)] overflow-y-auto pb-24">
          <div className="p-4 sm:p-6 space-y-4">
            
            {/* Top Row: Language & Districts */}
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => { setLanguage("en"); }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    language === "en" 
                      ? "bg-brand-600 text-white shadow-sm" 
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900"
                  }`}
                >EN</button>
                <button 
                  onClick={() => { setLanguage("bn"); }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    language === "bn" 
                      ? "bg-brand-600 text-white shadow-sm" 
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900"
                  }`}
                >বাংলা</button>
              </div>

              <Link
                href="/districts"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-1.5 text-xs font-bold text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 px-3 py-1.5 rounded-xl border border-brand-200 dark:border-brand-500/20"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{t("64 Districts", "৬৪ জেলা")}</span>
              </Link>
            </div>

            {/* Global Search in Mobile Drawer */}
            <div className="w-full">
              <GlobalSearch />
            </div>

            {/* Main Links */}
            <div className="space-y-1">
              <Link
                href="/"
                className="flex items-center justify-between px-4 py-3 text-sm font-bold text-gray-900 dark:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <span>{t("Home", "হোম")}</span>
              </Link>

              {/* Solutions Explorer Link & Sub-Categories */}
              <div className="border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden bg-gray-50/50 dark:bg-white/[0.02]">
                <Link
                  href="/solutions"
                  className="flex items-center justify-between px-4 py-3 text-sm font-bold text-brand-700 dark:text-brand-400 bg-brand-50/70 dark:bg-brand-900/20"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{t("Explore Solutions Catalog", "সকল সমাধান ও ক্যাটালগ")}</span>
                  <span className="text-xs bg-brand-600 text-white px-2 py-0.5 rounded-full">All</span>
                </Link>

                <div className="p-2 grid grid-cols-2 gap-1.5">
                  <Link
                    href="/solutions?category=wholesale"
                    onClick={() => setMobileOpen(false)}
                    className="p-2.5 rounded-xl bg-white dark:bg-white/5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-brand-600 border border-gray-100 dark:border-white/5 text-center"
                  >
                    📦 {t("Wholesale", "পাইকারি")}
                  </Link>
                  <Link
                    href="/solutions?category=tech"
                    onClick={() => setMobileOpen(false)}
                    className="p-2.5 rounded-xl bg-white dark:bg-white/5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-brand-600 border border-gray-100 dark:border-white/5 text-center"
                  >
                    💻 {t("Tech & IT", "আইটি সমাধান")}
                  </Link>
                  <Link
                    href="/solutions?category=real-estate"
                    onClick={() => setMobileOpen(false)}
                    className="p-2.5 rounded-xl bg-white dark:bg-white/5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-brand-600 border border-gray-100 dark:border-white/5 text-center"
                  >
                    🏢 {t("Real Estate", "রিয়েল এস্টেট")}
                  </Link>
                  <Link
                    href="/solutions?category=business"
                    onClick={() => setMobileOpen(false)}
                    className="p-2.5 rounded-xl bg-white dark:bg-white/5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-brand-600 border border-gray-100 dark:border-white/5 text-center"
                  >
                    💼 {t("Business Setup", "বিজনেস ও লিগ্যাল")}
                  </Link>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{link.name}</span>
                </Link>
              ))}

              <Link
                href="/login"
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <User className="w-4 h-4 text-brand-500" />
                <span>{t("Login to Portal", "লগইন করুন")}</span>
              </Link>
            </div>

            {/* Post Request Action Card */}
            <div className="p-4 bg-gradient-to-br from-brand-900 to-indigo-950 text-white rounded-2xl shadow-lg border border-brand-800/40">
              <p className="text-xs font-bold text-brand-300 uppercase tracking-wider mb-2">
                {t("Ready to find a solution?", "আপনার কি কোনো সমাধান প্রয়োজন?")}
              </p>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                {t("Post your requirement and connect with verified partners nationwide.", "আপনার রিকোয়ারমেন্ট সাবমিট করে দ্রুততম সময়ে সমাধান নিন।")}
              </p>
              <div className="flex flex-col gap-2">
                <Link
                  href="/needs/new"
                  className="w-full py-2.5 bg-white text-brand-950 hover:bg-gray-100 rounded-xl font-bold text-xs text-center shadow-md transition-transform active:scale-[0.98]"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("Post a Requirement", "কাস্টম রিকোয়ারমেন্ট দিন")}
                </Link>
                <Link
                  href="/providers/join"
                  className="w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold text-xs text-center border border-white/10 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("Join as Provider", "প্রোভাইডার হিসেবে যুক্ত হোন")}
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

