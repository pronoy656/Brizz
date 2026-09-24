"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ChevronDown, User, MapPin, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

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
    { name: t("Solutions", "সমাধান"), href: "/solutions" },
    { name: t("How It Works", "কিভাবে কাজ করে"), href: "/#how-it-works" },
    { name: t("Network", "নেটওয়ার্ক"), href: "/network" },
    { name: t("Free Help", "ফ্রি সাহায্য"), href: "/free-help" },
    { name: t("Insights", "ইনসাইটস"), href: "/insights" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gray-100 dark:border-white/10 shadow-sm"
          : "py-5 bg-white dark:bg-[#0a0a0a]"
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
          <nav className="hidden lg:flex items-center gap-6">
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
          <div className="hidden lg:flex items-center gap-5">
            
            {/* District Selector Link */}
            <Link
              href="/districts"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-900 dark:hover:text-white transition-colors bg-brand-50 dark:bg-white/5 px-3 py-1.5 rounded-full border border-brand-100 dark:border-white/10"
            >
              <MapPin className="w-4 h-4 text-brand-800 dark:text-brand-400" />
              <span className="font-bold text-brand-900 dark:text-white">{t("64 Districts", "৬৪ জেলা")}</span>
            </Link>

            <button
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:text-brand-900 dark:hover:text-white transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

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

            <Link
              href="/login"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-900 dark:hover:text-brand-400 transition-colors"
            >
              <User className="w-4 h-4" />
              {t("Login", "লগইন")}
            </Link>

            <div className="relative">
              <button
                onClick={() => setGetStartedOpen(!getStartedOpen)}
                className="bg-brand-900 text-white dark:bg-white dark:text-[#0a0a0a] hover:bg-brand-800 dark:hover:bg-gray-200 px-5 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 text-sm"
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

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#121214] border-b border-gray-100 dark:border-white/10 shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col p-4 space-y-2">
            
            <div className="flex items-center justify-between px-4 py-2 mb-2">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => { setLanguage("en"); setMobileOpen(false); }}
                  className={`text-sm ${language === "en" ? "font-bold text-brand-900 dark:text-white" : "text-gray-500"}`}
                >EN</button>
                <span className="text-gray-300">|</span>
                <button 
                  onClick={() => { setLanguage("bn"); setMobileOpen(false); }}
                  className={`text-sm ${language === "bn" ? "font-bold text-brand-900 dark:text-white" : "text-gray-500"}`}
                >বাংলা</button>
              </div>
              <ThemeToggleInline />
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-gray-100 dark:bg-white/10 my-2" />
            <Link
              href="/login"
              className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 flex items-center gap-2"
              onClick={() => setMobileOpen(false)}
            >
              <User className="w-4 h-4" /> {t("Login", "লগইন")}
            </Link>
            <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-xl mt-2 border border-gray-100 dark:border-white/5">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                {t("Get Started", "শুরু করুন")}
              </p>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/needs/new"
                  className="px-4 py-2.5 text-sm font-bold text-brand-900 dark:text-white bg-white dark:bg-[#18181b] border border-gray-200 dark:border-white/10 rounded-lg text-center shadow-sm hover:border-brand-500 transition-colors"
                >
                  {t("I need something", "আমার কিছু প্রয়োজন")}
                </Link>
                <Link
                  href="/providers/join"
                  className="px-4 py-2.5 text-sm font-bold text-brand-900 dark:text-white bg-white dark:bg-[#18181b] border border-gray-200 dark:border-white/10 rounded-lg text-center shadow-sm hover:border-brand-500 transition-colors"
                >
                  {t("I can provide something", "আমি কিছু দিতে পারবো")}
                </Link>
                <Link
                  href="/network/join"
                  className="px-4 py-2.5 text-sm font-bold text-brand-900 dark:text-white bg-white dark:bg-[#18181b] border border-gray-200 dark:border-white/10 rounded-lg text-center shadow-sm hover:border-brand-500 transition-colors"
                >
                  {t("Join the network", "নেটওয়ার্কে যুক্ত হোন")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

