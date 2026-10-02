"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, MapPin, Sun, Moon, UserRound, Menu, X, ChevronRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

const categories = [
  {
    title: { en: "Wholesale & Supply", bn: "পাইকারি ও সাপ্লাই" },
    items: [
      { en: "GPUs & PC Hardware", bn: "জিপিইউ ও কম্পিউটার হার্ডওয়্যার", href: "/solutions/wholesale/gpus-electronics" },
      { en: "Pakistani Boutique Dresses", bn: "পাকিস্তানি ড্রেস পাইকারি", href: "/solutions/wholesale/clothing" },
      { en: "China Factory Sourcing", bn: "চায়না সরাসরি আমদানি", href: "/solutions/wholesale/china-sourcing" },
      { en: "Raw Materials", bn: "কাঁচামাল", href: "/solutions/wholesale/raw-materials" },
      { en: "Packaging Solutions", bn: "প্যাকেজিং সমাধান", href: "/solutions/wholesale/packaging" },
      { en: "Machinery & Equipment", bn: "মেশিনারিজ ও ইকুইপমেন্ট", href: "/solutions/wholesale/machinery" },
    ],
  },
  {
    title: { en: "Tech & IT Solutions", bn: "টেক ও আইটি সমাধান" },
    items: [
      { en: "Web Development", bn: "ওয়েব ডেভেলপমেন্ট", href: "/solutions/tech/web" },
      { en: "App Development", bn: "অ্যাপ ডেভেলপমেন্ট", href: "/solutions/tech/app" },
      { en: "Custom Software", bn: "কাস্টম সফটওয়্যার", href: "/solutions/tech/software" },
    ],
  },
  {
    title: { en: "Real Estate & Building", bn: "রিয়েল এস্টেট ও নির্মাণ" },
    items: [
      { en: "Interior Design", bn: "ইন্টেরিয়র ডিজাইন", href: "/solutions/real-estate/interior" },
      { en: "Construction Materials", bn: "নির্মাণ সামগ্রী", href: "/solutions/real-estate/materials" },
      { en: "Property Consulting", bn: "প্রপার্টি কনসাল্টিং", href: "/solutions/real-estate/consulting" },
    ],
  },
  {
    title: { en: "Business Services", bn: "বিজনেস সার্ভিসেস" },
    items: [
      { en: "Legal & Compliance", bn: "লিগ্যাল ও কমপ্লায়েন্স", href: "/solutions/business/legal" },
      { en: "Marketing & Branding", bn: "মার্কেটিং ও ব্র্যান্ডিং", href: "/solutions/business/marketing" },
      { en: "HR & Recruitment", bn: "এইচআর ও রিক্রুটমেন্ট", href: "/solutions/business/hr" },
    ],
  },
];

const navLinks = [
  { en: "Services", bn: "সার্ভিস", href: "/services" },
  { en: "Solutions", bn: "সমাধান", href: "/solutions" },
  { en: "Network", bn: "নেটওয়ার্ক", href: "/network" },
  { en: "Free Help", bn: "ফ্রি সহায়তা", href: "/free-help" },
  { en: "How It Works", bn: "কীভাবে কাজ করে", href: "/how-it-works" },
  { en: "About", bn: "আমাদের সম্পর্কে", href: "/about" },
  { en: "Contact", bn: "যোগাযোগ", href: "/contact" },
];

export function BriizzLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="briizz-logo-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="briizz-logo-b" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <path d="M6 4 L24 14 L6 24 Z" fill="url(#briizz-logo-a)" />
        <path d="M6 18 L26 29 L6 38 Z" fill="url(#briizz-logo-b)" opacity="0.9" />
        <path d="M18 10 L36 21 L18 32 L24 21 Z" fill="#1d4ed8" opacity="0.85" />
      </svg>
      <span className="text-[30px] leading-none font-extrabold tracking-tight text-[#0b1b4d] dark:text-white">
        Briiz<span className="text-blue-600 dark:text-blue-400">Z</span>
      </span>
    </span>
  );
}

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-blue-100 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm"
    >
      <Sun className={`w-4 h-4 ${isDark ? "text-gray-400" : "text-[#0b1b4d]"}`} />
      <span className="relative w-9 h-5 rounded-full bg-blue-50 dark:bg-white/10">
        <span
          className={`absolute top-0.5 w-4 h-4 rounded-full bg-blue-600 shadow transition-all duration-300 ${
            isDark ? "left-[18px]" : "left-0.5"
          }`}
        />
      </span>
      <Moon className={`w-4 h-4 ${isDark ? "text-blue-300" : "text-gray-500"}`} />
    </button>
  );
}

function SearchBar({ onSubmitted }: { onSubmitted?: () => void }) {
  const router = useRouter();
  const { t } = useLanguage();
  const [query, setQuery] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
    onSubmitted?.();
  };

  return (
    <form
      onSubmit={submit}
      className="relative flex items-center w-full h-[58px] rounded-full border border-blue-100 dark:border-white/10 bg-white/80 dark:bg-white/5 px-5 shadow-[0_2px_12px_rgba(37,99,235,0.06)] focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100 dark:focus-within:ring-blue-500/20 transition"
    >
      <Search className="w-5 h-5 text-[#0b1b4d] dark:text-gray-300 shrink-0" />
      <div className="relative flex-1 ml-4 h-full">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label={t("What do you need?", "আপনার কী প্রয়োজন?")}
          className="absolute inset-0 w-full bg-transparent outline-none text-[15px] text-gray-900 dark:text-white"
        />
        {!query && (
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-center leading-tight">
            <span className="text-[15px] text-gray-600 dark:text-gray-300">
              {t("What do you need?", "আপনার কী প্রয়োজন?")}
            </span>
            <span className="text-xs text-gray-400 mt-0.5 truncate">
              {t("Search services, solutions, providers...", "সার্ভিস, সমাধান, প্রোভাইডার খুঁজুন...")}
            </span>
          </div>
        )}
      </div>
    </form>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCategoriesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (categoriesRef.current && !categoriesRef.current.contains(e.target as Node)) {
        setCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const label = (item: { en: string; bn: string }) => (language === "bn" ? item.bn : item.en);
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#070b18]/95 backdrop-blur-md">
      {/* Row 1: brand, location, search, utilities */}
      <div className="border-b border-gray-100 dark:border-white/10">
        <div className="mx-auto max-w-[1536px] px-4 lg:px-10 h-[72px] lg:h-[104px] flex items-center gap-4 xl:gap-8">
          <Link href="/" aria-label="BriizZ home" className="shrink-0">
            <BriizzLogo />
          </Link>

          <Link
            href="/districts"
            className="hidden lg:flex items-center gap-3 pl-6 border-l border-gray-200 dark:border-white/10 shrink-0"
          >
            <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="leading-tight">
              <span className="block text-[15px] font-semibold text-[#0b1b4d] dark:text-white">
                {t("Network", "নেটওয়ার্ক")}
              </span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">
                {t("64 District", "৬৪ জেলা")}
              </span>
            </span>
          </Link>

          <div className="hidden lg:block flex-1 max-w-[640px] mx-auto">
            <SearchBar />
          </div>

          <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0 ml-auto">
            <div className="flex items-center gap-3 text-[15px]">
              <button
                onClick={() => setLanguage("en")}
                className={language === "en" ? "font-bold text-[#0b1b4d] dark:text-white" : "text-gray-500 hover:text-[#0b1b4d] dark:hover:text-white"}
              >
                EN
              </button>
              <span className="h-5 w-px bg-gray-300 dark:bg-white/20" />
              <button
                onClick={() => setLanguage("bn")}
                className={language === "bn" ? "font-bold text-[#0b1b4d] dark:text-white" : "text-gray-500 hover:text-[#0b1b4d] dark:hover:text-white"}
              >
                বাংলা
              </button>
            </div>

            <ThemeSwitch />

            <Link
              href="/partners"
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[15px] shadow-[0_8px_20px_rgba(37,99,235,0.3)] transition-colors whitespace-nowrap"
            >
              {t("Join BriizZ", "BriizZ-এ যোগ দিন")}
            </Link>

            <Link href="/login" aria-label={t("Login", "লগইন")} className="text-[#0b1b4d] dark:text-white hover:text-blue-600">
              <UserRound className="w-7 h-7" strokeWidth={1.75} />
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex lg:hidden items-center gap-1 ml-auto">
            <Link href="/search" aria-label="Search" className="p-2 text-[#0b1b4d] dark:text-white">
              <Search className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-2 text-[#0b1b4d] dark:text-white"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: categories + page links */}
      <div className="hidden lg:block border-b border-gray-100 dark:border-white/10" ref={categoriesRef}>
        <div className="mx-auto max-w-[1536px] px-10 h-16 flex items-center">
          <button
            onClick={() => setCategoriesOpen((v) => !v)}
            aria-expanded={categoriesOpen}
            className="flex items-center gap-4 pr-12 border-r border-gray-200 dark:border-white/10 h-8 text-[17px] font-bold text-[#0b1b4d] dark:text-white hover:text-blue-600"
          >
            {categoriesOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            {t("All Categories", "সকল ক্যাটাগরি")}
          </button>

          <nav className="flex-1 flex items-center justify-around max-w-[1000px] pl-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-5 text-[16px] transition-colors ${
                  isActive(link.href)
                    ? "text-blue-600 dark:text-blue-400 font-medium"
                    : "text-[#1e2a4a] dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
                }`}
              >
                {label(link)}
                {isActive(link.href) && (
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 rounded-full bg-blue-600" />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {categoriesOpen && (
          <div className="absolute left-0 right-0 top-full bg-white dark:bg-[#0b1124] border-b border-gray-100 dark:border-white/10 shadow-2xl">
            <div className="mx-auto max-w-[1536px] px-10 py-8 grid grid-cols-4 gap-8">
              {categories.map((cat) => (
                <div key={cat.title.en}>
                  <h4 className="font-bold text-[#0b1b4d] dark:text-white pb-3 mb-3 border-b border-gray-100 dark:border-white/10">
                    {label(cat.title)}
                  </h4>
                  <ul className="space-y-2.5">
                    {cat.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                          {label(item)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center py-3 bg-blue-50/60 dark:bg-white/5">
              <Link href="/solutions" className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                {t("View all solutions", "সকল সমাধান দেখুন")} →
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full max-h-[calc(100vh-72px)] overflow-y-auto bg-white dark:bg-[#070b18] border-b border-gray-100 dark:border-white/10 shadow-2xl">
          <div className="p-4 space-y-4">
            <SearchBar onSubmitted={() => setMobileOpen(false)} />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-sm">
                <button onClick={() => setLanguage("en")} className={language === "en" ? "font-bold text-[#0b1b4d] dark:text-white" : "text-gray-500"}>
                  EN
                </button>
                <span className="h-4 w-px bg-gray-300 dark:bg-white/20" />
                <button onClick={() => setLanguage("bn")} className={language === "bn" ? "font-bold text-[#0b1b4d] dark:text-white" : "text-gray-500"}>
                  বাংলা
                </button>
              </div>
              <ThemeSwitch />
            </div>

            <Link href="/districts" className="flex items-center gap-3 p-3 rounded-2xl bg-blue-50/70 dark:bg-white/5">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-[#0b1b4d] dark:text-white">
                {t("Network · 64 District", "নেটওয়ার্ক · ৬৪ জেলা")}
              </span>
            </Link>

            <nav className="divide-y divide-gray-100 dark:divide-white/10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between py-3 text-[15px] ${
                    isActive(link.href) ? "text-blue-600 font-semibold" : "text-[#1e2a4a] dark:text-gray-200"
                  }`}
                >
                  {label(link)}
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              ))}
            </nav>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link href="/login" className="py-3 text-center rounded-full border border-blue-200 dark:border-white/15 text-[#0b1b4d] dark:text-white font-semibold text-sm">
                {t("Login", "লগইন")}
              </Link>
              <Link href="/partners" className="py-3 text-center rounded-full bg-blue-600 text-white font-semibold text-sm">
                {t("Join BriizZ", "BriizZ-এ যোগ দিন")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
