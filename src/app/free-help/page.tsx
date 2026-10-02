"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Stethoscope,
  Droplet,
  GraduationCap,
  Building2,
  Users,
  Clock,
  ArrowRight,
  Phone,
  MessageSquare,
  ShieldCheck,
  X,
  CheckCircle2,
  AlertCircle,
  PhoneCall,
  MapPin,
  Calendar,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { BRIZZ_SOCIAL_LINKS } from "@/lib/data";

interface HelpCategoryItem {
  id: string;
  title: { en: string; bn: string };
  desc: { en: string; bn: string };
  icon: React.ElementType;
  comingSoon: boolean;
}

const BLOOD_BANKS = [
  {
    name: "Quantum Foundation Blood Bank",
    nameBn: "কোয়ান্টাম ফাউন্ডেশন ব্লাড ব্যাংক",
    location: "Shantinagar, Dhaka (24/7 Available)",
    locationBn: "শান্তিনগর, ঢাকা (সার্বক্ষণিক খোলা)",
    phone: "+88029351424",
    hotline: "01714 010869",
    type: "Central Blood Bank",
  },
  {
    name: "Bangladesh Red Crescent Blood Center",
    nameBn: "বাংলাদেশ রেড ক্রিসেন্ট ব্লাড সেন্টার",
    location: "Moghbazar, Dhaka",
    locationBn: "মগবাজার, ঢাকা",
    phone: "+88029330188",
    hotline: "02-9330188",
    type: "National Humanitarian Service",
  },
  {
    name: "Badhan Blood Donor Network (TSC)",
    nameBn: "বাঁধন রক্তদাতা নেটওয়ার্ক (টিএসসি)",
    location: "TSC, Dhaka University",
    locationBn: "টিএসসি, ঢাকা বিশ্ববিদ্যালয়",
    phone: "+88029665675",
    hotline: "01534 982674",
    type: "Student Voluntary Donors",
  },
  {
    name: "Police Blood Bank",
    nameBn: "বাংলাদেশ পুলিশ ব্লাড ব্যাংক",
    location: "Central Police Hospital, Rajarbagh",
    locationBn: "কেন্দ্রীয় পুলিশ হাসপাতাল, রাজারবাগ",
    phone: "+88029362573",
    hotline: "02-9362573",
    type: "Government / Police Emergency",
  },
];

export default function FreeHelpPage() {
  const { language, t } = useLanguage();
  const [bloodModalOpen, setBloodModalOpen] = useState(false);
  const [bloodGroup, setBloodGroup] = useState("O+");
  const [patientName, setPatientName] = useState("");
  const [hospital, setHospital] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const CATEGORIES: HelpCategoryItem[] = [
    {
      id: "blood",
      title: { en: "Blood & Donation", bn: "ব্লাড ও রক্তদান সহায়তা" },
      desc: {
        en: "Verified 24/7 blood banks, emergency donor matching, and live voluntary donor registry across Bangladesh.",
        bn: "২৪/৭ ভেরিফায়েড ব্লাড ব্যাংক, জরুরি রক্তের গ্রুপ ম্যাচিং এবং সারাদেশব্যাপী স্বেচ্ছাসেবী রক্তদাতা নেটওয়ার্ক।",
      },
      icon: Droplet,
      comingSoon: false,
    },
    {
      id: "healthcare",
      title: { en: "Healthcare & Medical", bn: "স্বাস্থ্য ও চিকিৎসা সেবা" },
      desc: {
        en: "Free telemedicine triage, specialist doctor guidance, and emergency ambulance access directory.",
        bn: "ফ্রি টেলিমেডিসিন পরামর্শ, বিশেষজ্ঞ ডাক্তারের গাইডেন্স ও জরুরি অ্যাম্বুলেন্স সহায়তা ডিরেক্টরি।",
      },
      icon: Stethoscope,
      comingSoon: true,
    },
    {
      id: "emergency",
      title: { en: "Emergency Response", bn: "জরুরি রেসপন্স ও ক্রাইসিস এইড" },
      desc: {
        en: "Rapid disaster relief coordination, fire/accident support, and national crisis helpline dispatch.",
        bn: "জরুরি দুর্যোগকালীন সহায়তা, উদ্ধার তৎপরতা এবং জাতীয় ক্রাইসিস হেল্পলাইন সমন্বয়।",
      },
      icon: Heart,
      comingSoon: true,
    },
    {
      id: "education",
      title: { en: "Education Assistance", bn: "শিক্ষা ও স্কলারশিপ সহায়তা" },
      desc: {
        en: "Student educational mentorship, merit scholarship guidance, and skill-building grant opportunities.",
        bn: "শিক্ষার্থীদের জন্য মেন্টরশিপ, মেধাবৃত্তি তথ্য ও বিনামূল্যে কারিগরি প্রশিক্ষণ গাইডেন্স।",
      },
      icon: GraduationCap,
      comingSoon: true,
    },
    {
      id: "government",
      title: { en: "Government Services", bn: "নাগরিক ও সরকারি অনলাইন সেবা" },
      desc: {
        en: "Guidance with NID, birth registration, passport, land records, and citizen civic services.",
        bn: "জাতীয় পরিচয়পত্র, জন্মনিবন্ধন, পাসপোর্ট ও নাগরিক সেবা সংক্রান্ত তথ্য সহায়তা।",
      },
      icon: Building2,
      comingSoon: true,
    },
    {
      id: "community",
      title: { en: "Community Resources", bn: "কমিউনিটি ও সমাজকল্যাণ" },
      desc: {
        en: "Grassroots community initiatives, legal aid for marginalized individuals, and food security programs.",
        bn: "স্থানীয় সমাজকল্যাণ উদ্যোগ, আইনি পরামর্শ এবং সুবিধাবঞ্চিতদের খাদ্য কর্মসূচি।",
      },
      icon: Users,
      comingSoon: true,
    },
  ];

  const handleBloodRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSubmitted(true);
    // WhatsApp direct prefilled trigger
    const msg = encodeURIComponent(
      `[EMERGENCY BLOOD REQUEST]\nBlood Group: ${bloodGroup}\nPatient: ${patientName || "Urgent Patient"}\nHospital/Location: ${hospital || "Not specified"}\nContact: ${contactNumber || "Not specified"}\nPlease help coordinate a donor.`
    );
    window.open(`${BRIZZ_SOCIAL_LINKS.whatsappUrl}?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07070a] pt-0 pb-16 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Non-commercial Hero Section */}
      <section className="relative pt-8 sm:pt-12 pb-12 sm:pb-16 bg-gradient-to-b from-white via-slate-50 to-slate-100/60 dark:from-[#060b1d] dark:via-[#090e24] dark:to-[#07070a] border-b border-slate-200 dark:border-white/10 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-red-500/20" />
            <span>{t("Non-Profit Public Humanitarian Aid", "অলাভজনক মানবিক ও জরুরি সহায়তা")}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            {t("Need Help? We Are Here.", "জরুরি প্রয়োজনে আমরা আছি আপনার পাশে।")}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t(
              "The BRIIZZ network is committed to providing free assistance for emergencies, medical needs, and community support. Verified blood donation coordination is active 24/7.",
              "BRIIZZ নেটওয়ার্ক সামাজিক দায়বদ্ধতা থেকে বিনামূল্যে জরুরি মানবিক সেবা ও রক্তদান সহায়তা প্রদান করছে। ব্লাড ডোনেশন নেটওয়ার্ক বর্তমানে ২৪/৭ সার্বক্ষণিক চালু রয়েছে।"
            )}
          </p>

          {/* Quick Direct Blood Action */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setBloodModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs shadow-lg shadow-red-600/30 flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
            >
              <Droplet className="w-4 h-4 fill-white" />
              <span>{t("Emergency Blood Request / Donor Hub", "জরুরি রক্তের আবেদন / ব্লাড ব্যাংক")}</span>
            </button>

            <a
              href={`${BRIZZ_SOCIAL_LINKS.whatsappUrl}?text=${encodeURIComponent(t("Hello BRIIZZ Free Help, I need urgent blood assistance.", "হ্যালো BRIIZZ ফ্রি হেল্প, আমার জরুরি রক্তের প্রয়োজন।"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/25 flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t("Chat on WhatsApp (24/7)", "হোয়াটসঅ্যাপে তাৎক্ষণিক সাহায্য")}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Help Categories Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isComingSoon = cat.comingSoon;

              return (
                <div
                  key={cat.id}
                  className={`p-7 rounded-3xl bg-white dark:bg-[#101528] border transition-all flex flex-col justify-between group relative overflow-hidden ${
                    isComingSoon
                      ? "border-slate-200 dark:border-white/5 opacity-85 hover:opacity-100"
                      : "border-red-500/40 dark:border-red-500/30 hover:border-red-500 shadow-md hover:shadow-2xl hover:-translate-y-1 ring-1 ring-red-500/20"
                  }`}
                >
                  {/* Diagonal Slanted Coming Soon Corner Ribbon Banner */}
                  {isComingSoon && (
                    <div className="absolute top-0 right-0 w-36 h-36 overflow-hidden pointer-events-none z-20">
                      <div className="absolute top-7 -right-10 w-44 rotate-45 bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider py-1.5 text-center shadow-lg border-y border-white/25 select-none">
                        Coming Soon
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Badge */}
                    <div className="flex items-center justify-between">
                      {isComingSoon ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/5">
                          {t("Upcoming Aid", "আসন্ন সেবা")}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                          {t("Active Now • Open Service", "সক্রিয় সেবা • উন্মুক্ত")}
                        </span>
                      )}
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                        isComingSoon
                          ? "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-white/10"
                          : "bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/40 shadow-sm"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Title & Desc */}
                    <div>
                      <h3
                        className={`text-xl font-extrabold transition-colors ${
                          isComingSoon
                            ? "text-slate-900 dark:text-white"
                            : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {language === "bn" ? cat.title.bn : cat.title.en}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                        {language === "bn" ? cat.desc.bn : cat.desc.en}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action / Status */}
                  <div className="pt-6 mt-4 border-t border-slate-100 dark:border-white/5">
                    {isComingSoon ? (
                      <div className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-500 text-xs font-bold text-center flex items-center justify-center gap-2 border border-slate-200 dark:border-white/5 select-none">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{t("Coming Soon • In Development", "শীঘ্রই আসছে • প্রস্তুতি চলছে")}</span>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setBloodModalOpen(true)}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
                      >
                        <Droplet className="w-3.5 h-3.5 fill-white" />
                        <span>{t("Find Blood / Request Donor", "রক্ত খুঁজুন / ডোনার রিকোয়েস্ট")}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Need More Assistance Section */}
          <div className="mt-16 text-center p-8 rounded-3xl bg-white dark:bg-[#101424] border border-slate-200 dark:border-white/10 shadow-sm max-w-3xl mx-auto space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {t("Cannot find the right emergency category?", "আপনার প্রয়োজনীয় জরুরি সেবা খুঁজে পাচ্ছেন না?")}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              {t(
                "Our dedicated coordination team can direct you to government portals, emergency volunteer corps, and trusted civil response channels.",
                "আমাদের সহায়তা টিম আপনাকে সরকারি পোর্টাল, স্বেচ্ছাসেবী দল এবং জরুরি সহায়তাকারী চ্যানেলের সাথে সরাসরি যুক্ত করে দিবে।"
              )}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 rounded-xl font-bold text-xs transition-all shadow-md"
              >
                {t("Contact Support Directly", "সাপোর্টে সরাসরি মেসেজ দিন")}
              </Link>
              <a
                href={BRIZZ_SOCIAL_LINKS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold text-xs transition-all shadow-md shadow-[#25D366]/20 flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t("Chat on WhatsApp", "হোয়াটসঅ্যাপে লিখুন")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-SCREEN BLOOD DONATION & EMERGENCY BLOOD BANK MODAL */}
      {bloodModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setBloodModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-[#0c1020] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-white/10 bg-white/95 dark:bg-[#0c1020]/95 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 flex items-center justify-center">
                  <Droplet className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                    {t("Blood & Donor Assistance Hub", "ব্লাড ও রক্তদান সহায়তা কেন্দ্র")}
                  </h3>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                    {t("24/7 Verified Emergency Directory", "২৪/৭ ভেরিফায়েড জরুরি ডিরেক্টরি")}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setBloodModalOpen(false)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto px-6 py-6 space-y-8">
              
              {/* Emergency WhatsApp Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-200">
                    {t("Immediate Emergency Need?", "তাৎক্ষণিক রক্তের প্রয়োজন?")}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold">
                    {t("Connect with BRIIZZ Emergency Donor Hotline", "BRIIZZ জরুরি ডোনার হটলাইনে যোগাযোগ করুন")}
                  </h4>
                  <p className="text-xs text-rose-100">
                    {t("Available on WhatsApp: 01964 468626", "হোয়াটসঅ্যাপে সার্বক্ষণিক সক্রিয়: 01964 468626")}
                  </p>
                </div>

                <a
                  href={`${BRIZZ_SOCIAL_LINKS.whatsappUrl}?text=${encodeURIComponent(t("EMERGENCY: I need urgent blood assistance.", "জরুরি: আমার রক্তের সাহায্য প্রয়োজন।"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white text-red-600 hover:bg-rose-50 font-bold text-xs rounded-xl shadow-md shrink-0 flex items-center gap-1.5 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>{t("Direct WhatsApp Call/Chat", "হোয়াটসঅ্যাপে চ্যাট করুন")}</span>
                </a>
              </div>

              {/* Verified Blood Banks Hotline List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-red-500" />
                  <span>{t("Verified 24/7 National Blood Banks", "ভেরিফায়েড ২৪/৭ জাতীয় ব্লাড ব্যাংকসমূহ")}</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {BLOOD_BANKS.map((bank, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 flex flex-col justify-between space-y-3"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                            {bank.type}
                          </span>
                        </div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white mt-2">
                          {language === "bn" ? bank.nameBn : bank.name}
                        </h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3 text-red-500 shrink-0" />
                          <span>{language === "bn" ? bank.locationBn : bank.location}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-white/5">
                        <a
                          href={`tel:${bank.phone}`}
                          className="flex-1 py-2 px-3 rounded-xl bg-white dark:bg-white/10 hover:bg-red-50 dark:hover:bg-red-900/30 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                          <span>{bank.hotline}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instant Blood Request Form */}
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-4">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {t("Submit Blood Need (Direct Broadcast)", "রক্তের চাহিদা পোস্ট করুন (সরাসরি ব্রডকাস্ট)")}
                </h4>

                <form onSubmit={handleBloodRequestSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        {t("Required Blood Group *", "প্রয়োজনীয় রক্তের গ্রুপ *")}
                      </label>
                      <select
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12162a] text-slate-900 dark:text-white text-xs font-bold outline-none focus:border-red-500"
                      >
                        {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((bg) => (
                          <option key={bg} value={bg}>
                            {bg} ({t("Group", "গ্রুপ")})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        {t("Patient Name", "রোগীর নাম")}
                      </label>
                      <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder={t("e.g. Rahat Ahmed", "যেমন: রাহাত আহমেদ")}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12162a] text-slate-900 dark:text-white text-xs outline-none focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        {t("Hospital / Location", "হাসপাতাল বা ঠিকানা")}
                      </label>
                      <input
                        type="text"
                        value={hospital}
                        onChange={(e) => setHospital(e.target.value)}
                        placeholder={t("e.g. Dhaka Medical, Ward 4", "যেমন: ঢাকা মেডিকেল, ৪নং ওয়ার্ড")}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12162a] text-slate-900 dark:text-white text-xs outline-none focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                        {t("Contact Phone Number *", "যোগাযোগের ফোন নম্বর *")}
                      </label>
                      <input
                        type="text"
                        required
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        placeholder="01XXXXXXXXX"
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12162a] text-slate-900 dark:text-white text-xs outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs shadow-md shadow-red-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer"
                  >
                    <Droplet className="w-3.5 h-3.5 fill-white" />
                    <span>{t("Broadcast Blood Request via WhatsApp", "হোয়াটসঅ্যাপে ডোনার রিকোয়েস্ট পাঠান")}</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] flex items-center justify-between">
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                {t("100% Free humanitarian assistance by BRIIZZ", "BRIIZZ কর্তৃক সম্পূর্ণ বিনামূল্যে পরিচালিত মানবিক সেবা")}
              </span>
              <button
                type="button"
                onClick={() => setBloodModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"
              >
                {t("Close", "বন্ধ করুন")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
