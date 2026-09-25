"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, MapPin, Clock, Search, ShieldCheck, Zap, ArrowLeft, Star, TrendingUp } from "lucide-react";

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const { t, language } = useLanguage();

  const [selectedDivision, setSelectedDivision] = React.useState("All Divisions");
  const [selectedDistrict, setSelectedDistrict] = React.useState("All Districts");

  const locationData: Record<string, string[]> = {
    "Dhaka": ["Dhaka", "Faridpur", "Gazipur", "Narayanganj", "Tangail"],
    "Chittagong": ["Chattogram", "Cumilla", "Cox's Bazar", "Feni", "Noakhali"],
    "Rajshahi": ["Bogura", "Natore", "Pabna", "Rajshahi", "Sirajganj"],
    "Sylhet": ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"],
  };

  const divisions = ["All Divisions", ...Object.keys(locationData)];
  const districts = selectedDivision === "All Divisions" 
    ? ["All Districts"] 
    : ["All Districts", ...(locationData[selectedDivision] || [])];

  // React to changes
  React.useEffect(() => {
    setSelectedDistrict("All Districts");
  }, [selectedDivision]);

  const isAllDivisions = selectedDivision === "All Divisions";
  const isAllDistricts = selectedDistrict === "All Districts";
  
  const providerCount = isAllDivisions ? 120 : isAllDistricts ? 45 : 12;
  const deliveryMin = isAllDivisions ? 2 : selectedDivision === "Dhaka" ? 1 : 3;
  const deliveryMax = isAllDivisions ? 5 : selectedDivision === "Dhaka" ? 3 : 7;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Search Header */}
      <div className="pt-32 pb-16 bg-white dark:bg-[#0f0f11] border-b border-gray-100 dark:border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-600 dark:hover:text-brand-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {t("Back to Home", "হোমে ফিরে যান")}
          </Link>
          
          <div className="flex items-center gap-3 text-brand-600 dark:text-brand-400 mb-4">
            <Search className="w-5 h-5" />
            <span className="font-bold tracking-wider text-sm uppercase">{t("Search Results", "সার্চ ফলাফল")}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight max-w-4xl">
            {language === 'bn' ? (
              <>সারাদেশে <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">"{q}"</span> এর জন্য সমাধান</>
            ) : (
              <>Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">"{q}"</span> across Bangladesh</>
            )}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            {t("We have analyzed the market and found verified providers, exact timeframes, and detailed service data for your requirement.", "আমরা বাজার বিশ্লেষণ করেছি এবং আপনার প্রয়োজনীয়তার জন্য যাচাইকৃত প্রোভাইডার, সঠিক সময়সীমা এবং বিস্তারিত ডেটা খুঁজে পেয়েছি।")}
          </p>
        </div>
      </div>

      {/* Analytics & Data Dashboard */}
      <div className="container mx-auto px-4 lg:px-8 py-10">
        
        {/* Filters */}
        <div className="bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/5 p-4 rounded-2xl shadow-sm mb-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-semibold px-4">
            <MapPin className="w-5 h-5 text-brand-500" />
            {t("Filter Location:", "লোকেশন ফিল্টার:")}
          </div>
          <div className="flex-1 flex flex-col sm:flex-row gap-4 w-full">
            <select 
              value={selectedDivision}
              onChange={(e) => setSelectedDivision(e.target.value)}
              className="flex-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-500 text-gray-900 dark:text-white font-medium"
            >
              {divisions.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <select 
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              disabled={isAllDivisions}
              className="flex-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-500 text-gray-900 dark:text-white font-medium disabled:opacity-50"
            >
              {districts.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/5 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">{t("Verified Providers", "যাচাইকৃত প্রোভাইডার")}</p>
            <h4 className="text-4xl font-black text-gray-900 dark:text-white mb-2">{providerCount}+</h4>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1"><TrendingUp className="w-4 h-4"/> {t("Growing network", "ক্রমবর্ধমান নেটওয়ার্ক")}</p>
          </div>

          <div className="bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/5 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">{t("Availability", "উপলব্ধতা")}</p>
            <h4 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
              {isAllDivisions ? "64 " : (isAllDistricts ? locationData[selectedDivision].length + " " : "1 ")}
              <span className="text-2xl">{t("Districts", "জেলা")}</span>
            </h4>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              {isAllDistricts ? t("Nationwide coverage", "দেশব্যাপী কভারেজ") : t("Local coverage", "স্থানীয় কভারেজ")}
            </p>
          </div>

          <div className="bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/5 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group lg:col-span-2">
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">{t("Estimated Delivery / Setup Time", "আনুমানিক ডেলিভারি / সেটআপ সময়")}</p>
                <div className="flex items-end gap-3 mb-2">
                  <h4 className="text-4xl font-black text-gray-900 dark:text-white">{deliveryMin} - {deliveryMax}</h4>
                  <span className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-1">{t("Days", "দিন")}</span>
                </div>
              </div>
              <p className="text-sm text-orange-600 dark:text-orange-400 font-medium bg-orange-50/50 dark:bg-orange-900/10 inline-block px-3 py-1.5 rounded-lg w-fit">
                {t("Varies based on your exact location & requirement scope.", "আপনার সঠিক অবস্থান এবং রিকোয়ারমেন্টের উপর ভিত্তি করে পরিবর্তিত হয়।")}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Insights */}
        <div className="bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/5 rounded-[2.5rem] p-8 md:p-14 mb-16 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              {t("Market Insights for", "মার্কেট ইনসাইট:")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">"{q}"</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Division Data */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-8 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                {t("Division-wise Provider Density", "বিভাগ অনুযায়ী প্রোভাইডার ঘনত্ব")}
              </h3>
              
              <div className="space-y-6">
                {[
                  { div: "Dhaka", bn: "ঢাকা", count: "85", width: "100%", color: "bg-brand-500" },
                  { div: "Chittagong", bn: "চট্টগ্রাম", count: "32", width: "65%", color: "bg-indigo-500" },
                  { div: "Sylhet", bn: "সিলেট", count: "15", width: "35%", color: "bg-blue-500" },
                  { div: "Rajshahi", bn: "রাজশাহী", count: "12", width: "25%", color: "bg-cyan-500" },
                ].map((d, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between text-base font-semibold mb-2">
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {language === 'bn' ? d.bn : d.div}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-md text-sm">{d.count} Providers</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-white/5 rounded-full h-3 overflow-hidden">
                      <div className={`${d.color} h-3 rounded-full transition-all duration-1000 ease-out group-hover:brightness-110`} style={{ width: d.width }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendation Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-100 to-indigo-100 dark:from-brand-900/30 dark:to-indigo-900/30 rounded-3xl transform rotate-2 scale-105"></div>
              <div className="bg-white dark:bg-[#18181b] rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-white/10 relative shadow-lg h-full flex flex-col justify-center">
                <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
                  {t("Expert Recommendation", "বিশেষজ্ঞের পরামর্শ")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                  {t(`Based on our data for "${q}", the best approach is to request customized quotes. Providers in Dhaka typically offer the most competitive rates, but local providers in your district might offer faster installation and support.`, `"${q}" এর জন্য আমাদের ডেটার উপর ভিত্তি করে, কাস্টমাইজড কোটেশন অনুরোধ করা সর্বোত্তম পদ্ধতি। ঢাকার প্রোভাইডাররা সাধারণত সবচেয়ে প্রতিযোগিতামূলক রেট অফার করে, তবে আপনার জেলার স্থানীয় প্রোভাইডাররা দ্রুত ইনস্টলেশন এবং সহায়তা প্রদান করতে পারে।`)}
                </p>
                
                <Link href={`/needs/new?q=${q}`} className="group relative w-full flex items-center justify-center gap-3 py-4 bg-brand-900 dark:bg-white text-white dark:text-[#0a0a0a] rounded-2xl font-bold hover:bg-brand-800 dark:hover:bg-gray-200 transition-all shadow-xl hover:-translate-y-1 overflow-hidden text-lg">
                  <div className="absolute inset-0 bg-white/20 dark:bg-black/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  {t("Get Custom Quotes Now", "এখনই কাস্টম কোটেশন পান")} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="w-12 h-12 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mb-4"></div>
        <p className="text-brand-600 font-semibold">Analyzing market data...</p>
      </div>
    }>
      <SearchResultsContent />
    </Suspense>
  );
}
