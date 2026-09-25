"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, X, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

// Comprehensive list of solutions/keywords
const searchKeywords = [
  { id: "app-dev", title: "App Development", bnTitle: "অ্যাপ ডেভেলপমেন্ট", type: "Tech", route: "/solutions/tech/app" },
  { id: "web-dev", title: "Web Development", bnTitle: "ওয়েব ডেভেলপমেন্ট", type: "Tech", route: "/solutions/tech/web" },
  { id: "custom-soft", title: "Custom Software", bnTitle: "কাস্টম সফটওয়্যার", type: "Tech", route: "/solutions/tech/software" },
  { id: "raw-mat", title: "Raw Materials", bnTitle: "কাঁচামাল", type: "Wholesale", route: "/solutions/wholesale/raw-materials" },
  { id: "packaging", title: "Packaging Solutions", bnTitle: "প্যাকেজিং সমাধান", type: "Wholesale", route: "/solutions/wholesale/packaging" },
  { id: "machinery", title: "Machinery & Equipment", bnTitle: "মেশিনারিজ ও ইকুইপমেন্ট", type: "Wholesale", route: "/solutions/wholesale/machinery" },
  { id: "interior", title: "Interior Design", bnTitle: "ইন্টেরিয়র ডিজাইন", type: "Real Estate", route: "/solutions/real-estate/interior" },
  { id: "const-mat", title: "Construction Materials", bnTitle: "নির্মাণ সামগ্রী", type: "Real Estate", route: "/solutions/real-estate/materials" },
  { id: "gpus", title: "GPUs & Hardware", bnTitle: "জিপিইউ এবং হার্ডওয়্যার", type: "Tech", route: "/search?q=GPUs" },
  { id: "pcs", title: "PCs & Laptops", bnTitle: "পিসি এবং ল্যাপটপ", type: "Tech", route: "/search?q=PCs" },
  { id: "cctv", title: "CC Camera & Security", bnTitle: "সিসি ক্যামেরা ও নিরাপত্তা", type: "Tech", route: "/search?q=CC+Camera" },
  { id: "legal", title: "Legal & Compliance", bnTitle: "লিগ্যাল ও কমপ্লায়েন্স", type: "Business", route: "/solutions/business/legal" },
  { id: "marketing", title: "Marketing & Branding", bnTitle: "মার্কেটিং ও ব্র্যান্ডিং", type: "Business", route: "/solutions/business/marketing" },
];

export default function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Filter suggestions
  const suggestions = query.length > 0 
    ? searchKeywords.filter(k => 
        k.title.toLowerCase().includes(query.toLowerCase()) || 
        k.bnTitle.includes(query)
      )
    : [];

  // Close when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
      setQuery("");
    }
  };

  const handleSelect = (route: string) => {
    router.push(route);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div className="relative w-full lg:min-w-[280px]" ref={wrapperRef}>
      <form onSubmit={handleSearch} className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-10 py-2.5 border border-gray-200 dark:border-white/10 rounded-full leading-5 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-[#121214] focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-sm font-medium shadow-sm"
          placeholder={t("Search solutions (e.g. CCTV, Apps)", "সার্চ করুন (যেমন: সিসিটিভি, অ্যাপস)")}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X className="h-4 w-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
          </button>
        )}
      </form>

      {/* Dropdown Suggestions */}
      {isOpen && query.length > 0 && (
        <div className="absolute top-full mt-3 w-full lg:w-[400px] right-0 bg-white dark:bg-[#18181b] rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-3 bg-gray-50 dark:bg-white/5 border-b border-gray-100 dark:border-white/10">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {t("Suggestions for", "সাজেশনস")} "{query}"
            </span>
          </div>
          
          <ul className="max-h-72 overflow-y-auto">
            {suggestions.length > 0 ? (
              suggestions.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleSelect(item.route)}
                    className="w-full text-left px-4 py-3 hover:bg-brand-50 dark:hover:bg-brand-500/10 flex items-center justify-between group transition-colors border-b border-gray-50 dark:border-white/5 last:border-0"
                  >
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400">
                        {language === 'bn' ? item.bnTitle : item.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {t("Category", "ক্যাটাগরি")}: {item.type}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                  </button>
                </li>
              ))
            ) : (
              <li className="px-4 py-8 text-center">
                <Search className="w-8 h-8 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-1">
                  {t("No exact matches found", "কোন সঠিক মিল পাওয়া যায়নি")}
                </p>
                <p className="text-xs text-gray-500">
                  {t("Press Enter to search everywhere for this term.", "সব জায়গায় খুঁজতে এন্টার চাপুন।")}
                </p>
              </li>
            )}
          </ul>
          
          {suggestions.length > 0 && (
            <div className="p-2 border-t border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-center">
               <button onClick={handleSearch} className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline">
                 {t("View all results for", "সকল ফলাফল দেখুন")} "{query}" &rarr;
               </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
