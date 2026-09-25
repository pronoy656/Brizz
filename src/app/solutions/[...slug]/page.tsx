"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, CheckCircle2, Box, Package, Code, TrendingUp, ArrowRight, Settings, Globe, Smartphone, Home, Hammer, Briefcase, Scale, Megaphone, Users } from "lucide-react";

// Icon mapper
const IconMap = {
  Package: <Package className="w-10 h-10" />,
  Box: <Box className="w-10 h-10" />,
  Settings: <Settings className="w-10 h-10" />,
  Globe: <Globe className="w-10 h-10" />,
  Smartphone: <Smartphone className="w-10 h-10" />,
  Code: <Code className="w-10 h-10" />,
  Home: <Home className="w-10 h-10" />,
  Hammer: <Hammer className="w-10 h-10" />,
  Briefcase: <Briefcase className="w-10 h-10" />,
  Scale: <Scale className="w-10 h-10" />,
  Megaphone: <Megaphone className="w-10 h-10" />,
  Users: <Users className="w-10 h-10" />
};

const solutionData: Record<string, Record<string, any>> = {
  "wholesale": {
    "raw-materials": { title: "Raw Materials", bnTitle: "কাঁচামাল", icon: "Package", desc: "Source high-quality raw materials for your manufacturing and business needs.", bnDesc: "আপনার উৎপাদন ও ব্যবসার প্রয়োজনের জন্য উচ্চ মানের কাঁচামাল সংগ্রহ করুন।", reqs: [{en: "Textiles & Fabrics", bn: "টেক্সটাইল ও ফেব্রিক্স"}, {en: "Metals & Alloys", bn: "ধাতু ও সংকর ধাতু"}, {en: "Chemicals", bn: "রাসায়নিক পদার্থ"}, {en: "Plastics & Polymers", bn: "প্লাস্টিক ও পলিমার"}] },
    "packaging": { title: "Packaging Solutions", bnTitle: "প্যাকেজিং সমাধান", icon: "Box", desc: "Get custom and eco-friendly packaging for your products.", bnDesc: "আপনার পণ্যের জন্য কাস্টম এবং পরিবেশবান্ধব প্যাকেজিং পান।", reqs: [{en: "Custom Boxes", bn: "কাস্টম বাক্স"}, {en: "Eco-friendly Packaging", bn: "পরিবেশবান্ধব প্যাকেজিং"}, {en: "Labels & Tags", bn: "লেবেল এবং ট্যাগ"}, {en: "Bulk Shipping Supplies", bn: "বাল্ক শিপিং সরবরাহ"}] },
    "machinery": { title: "Machinery & Equipment", bnTitle: "মেশিনারিজ ও ইকুইপমেন্ট", icon: "Settings", desc: "Procure industrial machinery and equipment for your operations.", bnDesc: "আপনার কার্যক্রমের জন্য শিল্প যন্ত্রপাতি এবং সরঞ্জাম সংগ্রহ করুন।", reqs: [{en: "Manufacturing Machines", bn: "উৎপাদন মেশিন"}, {en: "Office Equipment", bn: "অফিস সরঞ্জাম"}, {en: "Heavy Duty Tools", bn: "ভারী টুলস"}, {en: "Maintenance Supplies", bn: "রক্ষণাবেক্ষণ সরবরাহ"}] },
  },
  "tech": {
    "web": { title: "Web Development", bnTitle: "ওয়েব ডেভেলপমেন্ট", icon: "Globe", desc: "Build powerful and modern websites to establish your digital presence.", bnDesc: "আপনার ডিজিটাল উপস্থিতি প্রতিষ্ঠা করতে শক্তিশালী এবং আধুনিক ওয়েবসাইট তৈরি করুন।", reqs: [{en: "Corporate Websites", bn: "কর্পোরেট ওয়েবসাইট"}, {en: "E-Commerce Platforms", bn: "ই-কমার্স প্ল্যাটফর্ম"}, {en: "Landing Pages", bn: "ল্যান্ডিং পেজ"}, {en: "Web Portals", bn: "ওয়েব পোর্টাল"}] },
    "app": { title: "App Development", bnTitle: "অ্যাপ ডেভেলপমেন্ট", icon: "Smartphone", desc: "Create seamless mobile applications for iOS and Android.", bnDesc: "আইওএস এবং অ্যান্ড্রয়েডের জন্য বিরামহীন মোবাইল অ্যাপ্লিকেশন তৈরি করুন।", reqs: [{en: "iOS Apps", bn: "আইওএস অ্যাপ"}, {en: "Android Apps", bn: "অ্যান্ড্রয়েড অ্যাপ"}, {en: "Cross-Platform", bn: "ক্রস-প্ল্যাটফর্ম"}, {en: "UI/UX Design", bn: "ইউআই/ইউএক্স ডিজাইন"}] },
    "software": { title: "Custom Software", bnTitle: "কাস্টম সফটওয়্যার", icon: "Code", desc: "Develop tailored software solutions to automate and scale your business.", bnDesc: "আপনার ব্যবসাকে স্বয়ংক্রিয় এবং স্কেল করতে কাস্টমাইজড সফটওয়্যার সমাধান বিকাশ করুন।", reqs: [{en: "ERP Systems", bn: "ইআরপি সিস্টেম"}, {en: "CRM Software", bn: "সিআরএম সফটওয়্যার"}, {en: "Inventory Management", bn: "ইনভেন্টরি ম্যানেজমেন্ট"}, {en: "Custom Dashboards", bn: "কাস্টম ড্যাশবোর্ড"}] },
  },
  "real-estate": {
    "interior": { title: "Interior Design", bnTitle: "ইন্টেরিয়র ডিজাইন", icon: "Home", desc: "Design and furnish your office or commercial space with modern aesthetics.", bnDesc: "আধুনিক নান্দনিকতার সাথে আপনার অফিস বা বাণিজ্যিক স্থান ডিজাইন এবং সজ্জিত করুন।", reqs: [{en: "Office Layout Design", bn: "অফিস লেআউট ডিজাইন"}, {en: "Commercial Furniture", bn: "বাণিজ্যিক আসবাবপত্র"}, {en: "Lighting & Decor", bn: "আলো এবং সজ্জা"}, {en: "Space Optimization", bn: "স্থান অপ্টিমাইজেশন"}] },
    "materials": { title: "Construction Materials", bnTitle: "নির্মাণ সামগ্রী", icon: "Hammer", desc: "Source high-quality construction materials for your building projects.", bnDesc: "আপনার নির্মাণ প্রকল্পের জন্য উচ্চ মানের নির্মাণ সামগ্রী সংগ্রহ করুন।", reqs: [{en: "Cement & Steel", bn: "সিমেন্ট এবং স্টিল"}, {en: "Bricks & Blocks", bn: "ইট এবং ব্লক"}, {en: "Paints & Finishes", bn: "পেইন্টস এবং ফিনিশ"}, {en: "Plumbing Supplies", bn: "প্লাম্বিং সরবরাহ"}] },
    "consulting": { title: "Property Consulting", bnTitle: "প্রপার্টি কনসাল্টিং", icon: "Briefcase", desc: "Get expert advice on finding and managing commercial properties.", bnDesc: "বাণিজ্যিক সম্পত্তি খোঁজা এবং পরিচালনার বিষয়ে বিশেষজ্ঞের পরামর্শ নিন।", reqs: [{en: "Office Space Search", bn: "অফিস স্পেস অনুসন্ধান"}, {en: "Lease Negotiation", bn: "লিজ আলোচনা"}, {en: "Property Valuation", bn: "সম্পত্তির মূল্যায়ন"}, {en: "Legal Due Diligence", bn: "লিগ্যাল ডিউ ডিলিজেন্স"}] },
  },
  "business": {
    "legal": { title: "Legal & Compliance", bnTitle: "লিগ্যাল ও কমপ্লায়েন্স", icon: "Scale", desc: "Ensure your business complies with all legal requirements and regulations.", bnDesc: "নিশ্চিত করুন যে আপনার ব্যবসা সমস্ত আইনি প্রয়োজনীয়তা এবং প্রবিধান মেনে চলে।", reqs: [{en: "Company Registration", bn: "কোম্পানি নিবন্ধন"}, {en: "Tax Consulting", bn: "ট্যাক্স কনসাল্টিং"}, {en: "Trademarks & IP", bn: "ট্রেডমার্ক এবং আইপি"}, {en: "Contract Drafting", bn: "চুক্তি খসড়া"}] },
    "marketing": { title: "Marketing & Branding", bnTitle: "মার্কেটিং ও ব্র্যান্ডিং", icon: "Megaphone", desc: "Grow your brand and reach more customers with effective marketing strategies.", bnDesc: "আপনার ব্র্যান্ড বাড়ান এবং কার্যকর বিপণন কৌশলগুলির মাধ্যমে আরও গ্রাহকদের কাছে পৌঁছান।", reqs: [{en: "Social Media Management", bn: "সোশ্যাল মিডিয়া ম্যানেজমেন্ট"}, {en: "SEO Optimization", bn: "এসইও অপ্টিমাইজেশন"}, {en: "Brand Identity Design", bn: "ব্র্যান্ড আইডেন্টিটি ডিজাইন"}, {en: "Digital Advertising", bn: "ডিজিটাল বিজ্ঞাপন"}] },
    "hr": { title: "HR & Recruitment", bnTitle: "এইচআর ও রিক্রুটমেন্ট", icon: "Users", desc: "Find the right talent and manage your human resources efficiently.", bnDesc: "সঠিক প্রতিভা খুঁজুন এবং আপনার মানব সম্পদ দক্ষতার সাথে পরিচালনা করুন।", reqs: [{en: "Candidate Sourcing", bn: "প্রার্থী সোর্সিং"}, {en: "Payroll Management", bn: "পে-রোল ম্যানেজমেন্ট"}, {en: "Employee Training", bn: "কর্মী প্রশিক্ষণ"}, {en: "HR Policies", bn: "এইচআর নীতি"}] },
  }
};

export default function SolutionDetailPage() {
  const params = useParams();
  const { t, language } = useLanguage();
  
  const slug = params?.slug as string[] | undefined;
  const [category, item] = slug || [];

  const solution = solutionData[category]?.[item];

  if (!solution) {
    return notFound();
  }

  const title = language === 'bn' ? solution.bnTitle : solution.title;
  const description = language === 'bn' ? solution.bnDesc : solution.desc;
  const theIcon = IconMap[solution.icon as keyof typeof IconMap] || IconMap.Box;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Dynamic Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white dark:bg-[#0a0a0a] border-b border-gray-100 dark:border-white/5">
        <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-900/10 dark:to-transparent pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-400/20 dark:bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-600 dark:hover:text-brand-400 mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {t("Back to home", "হোমে ফিরে যান")}
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side: Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-400 mb-8 shadow-sm border border-brand-200 dark:border-brand-500/20">
                {theIcon}
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                {description}
              </p>
              
              <Link href={`/needs/new?goal=${category}-${item}`} className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-900 dark:bg-white text-white dark:text-[#0a0a0a] font-bold hover:bg-brand-800 dark:hover:bg-gray-200 transition-all shadow-xl hover:-translate-y-1 hover:shadow-brand-500/25">
                {t("Post a Requirement", "রিকোয়ারমেন্ট পোস্ট করুন")} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right side: Interactive Cards */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-100/50 to-indigo-100/50 dark:from-brand-900/20 dark:to-indigo-900/20 rounded-3xl transform rotate-3 scale-105"></div>
              <div className="bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/10 rounded-3xl p-8 relative shadow-2xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  {t("Included Solutions:", "অন্তর্ভুক্ত সমাধানসমূহ:")}
                </h3>
                <div className="space-y-3">
                  {solution.reqs.map((req: any, idx: number) => (
                    <Link href={`/needs/new?goal=${category}-${item}&service=${req.en}`} key={idx} className="group block relative p-5 bg-gray-50 dark:bg-white/5 rounded-2xl border border-transparent hover:border-brand-200 dark:hover:border-brand-500/30 transition-all overflow-hidden cursor-pointer hover:shadow-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-50 to-transparent dark:from-brand-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative flex items-center justify-between">
                        <span className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors text-lg">
                          {language === 'bn' ? req.bn : req.en}
                        </span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-500 transform group-hover:translate-x-2 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
              {t("Why Choose BRIZZ?", "কেন ব্রিজ বেছে নিবেন?")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("We connect you with the best providers for your specific needs.", "আমরা আপনার নির্দিষ্ট প্রয়োজনের জন্য সেরা প্রোভাইডারদের সাথে আপনাকে যুক্ত করি।")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/5 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t("Verified Providers", "ভেরিফাইড প্রোভাইডার")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("Every provider on our platform goes through a strict verification process to ensure quality and reliability.", "গুণমান এবং নির্ভরযোগ্যতা নিশ্চিত করতে আমাদের প্ল্যাটফর্মের প্রতিটি প্রোভাইডার একটি কঠোর যাচাইকরণ প্রক্রিয়ার মধ্য দিয়ে যায়।")}
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/5 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
              <div className="w-14 h-14 bg-brand-50 dark:bg-brand-900/20 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t("Best Pricing", "সেরা মূল্য")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("Get competitive quotes from multiple providers and choose the one that fits your budget perfectly.", "একাধিক প্রোভাইডারের কাছ থেকে প্রতিযোগিতামূলক উদ্ধৃতি পান এবং আপনার বাজেটের সাথে পুরোপুরি মানানসই একটি বেছে নিন।")}
              </p>
            </div>

            <div className="bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/5 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t("Seamless Process", "বিরামহীন প্রক্রিয়া")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("Post your requirement in minutes and let our platform do the heavy lifting of finding the perfect match.", "মিনিটের মধ্যে আপনার রিকোয়ারমেন্ট পোস্ট করুন এবং আমাদের প্ল্যাটফর্মকে নিখুঁত ম্যাচ খুঁজে বের করার ভারী কাজ করতে দিন।")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
