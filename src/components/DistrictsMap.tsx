"use client";

import React, { useState, useEffect } from "react";
import { MapPin, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const DIVISIONS = [
  {
    id: "rangpur",
    name: "Rangpur",
    nameBn: "রংপুর",
    top: "17.3%",
    left: "24.7%",
    color: "bg-[#F36B41]", // Orange
    shadow: "shadow-[#F36B41]/50",
    path: "M130,40 L160,20 L180,30 L180,70 L210,90 L220,120 L190,140 L160,150 L110,130 L90,100 L110,50 Z",
    districts: ["Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon"]
  },
  {
    id: "mymensingh",
    name: "Mymensingh",
    nameBn: "ময়মনসিংহ",
    top: "32.7%",
    left: "52.0%",
    color: "bg-[#8CA8FF]", // Light Blue
    shadow: "shadow-[#8CA8FF]/50",
    path: "M220,120 L270,110 L310,120 L320,170 L280,190 L250,170 L220,160 L190,140 L200,90 L210,90 Z",
    districts: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"]
  },
  {
    id: "sylhet",
    name: "Sylhet",
    nameBn: "সিলেট",
    top: "36.8%",
    left: "73.2%",
    color: "bg-[#71F2A7]", // Green
    shadow: "shadow-[#71F2A7]/50",
    path: "M310,120 L370,110 L410,120 L420,150 L390,180 L350,190 L320,170 Z",
    districts: ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"]
  },
  {
    id: "rajshahi",
    name: "Rajshahi",
    nameBn: "রাজশাহী",
    top: "35.2%",
    left: "29.1%",
    color: "bg-[#B474FF]", // Purple
    shadow: "shadow-[#B474FF]/50",
    path: "M110,130 L160,150 L190,140 L220,160 L210,210 L200,260 L140,250 L110,210 L80,180 Z",
    districts: ["Sirajganj", "Pabna", "Bogra", "Rajshahi", "Natore", "Joypurhat", "Chapainawabganj", "Naogaon"]
  },
  {
    id: "dhaka",
    name: "Dhaka",
    nameBn: "ঢাকা",
    top: "45.2%",
    left: "48.9%",
    color: "bg-[#FBE64D]", // Yellow
    shadow: "shadow-[#FBE64D]/50",
    path: "M220,160 L250,170 L280,190 L320,170 L350,190 L360,230 L320,280 L290,260 L250,330 L210,320 L190,290 L200,260 L210,210 Z",
    districts: ["Dhaka", "Gazipur", "Kishoreganj", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Tangail", "Faridpur", "Gopalgang", "Madaripur", "Rajbari", "Shariatpur"]
  },
  {
    id: "khulna",
    name: "Khulna",
    nameBn: "খুলনা",
    top: "68.4%",
    left: "31.4%",
    color: "bg-[#FCA2A7]", // Pink
    shadow: "shadow-[#FCA2A7]/50",
    path: "M140,250 L200,260 L190,290 L210,320 L200,380 L180,430 L140,490 L130,460 L150,430 L130,400 L100,350 L80,290 Z",
    districts: ["Khulna", "Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"]
  },
  {
    id: "barishal",
    name: "Barishal",
    nameBn: "বরিশাল",
    top: "68.7%",
    left: "52.1%",
    color: "bg-[#63D7FC]", // Cyan
    shadow: "shadow-[#63D7FC]/50",
    path: "M210,320 L250,330 L290,260 L320,280 L310,340 L290,380 L260,450 L250,420 L220,400 L200,380 Z",
    districts: ["Barishal", "Barguna", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"]
  },
  {
    id: "chittagong",
    name: "Chittagong",
    nameBn: "চট্টগ্রাম",
    top: "61.0%",
    left: "72.4%",
    color: "bg-[#AE821B]", // Gold/Brown
    shadow: "shadow-[#AE821B]/50",
    path: "M320,280 L360,230 L350,190 L390,180 L420,150 L460,220 L440,260 L400,280 L390,330 L450,400 L440,500 L420,560 L390,580 L380,510 L360,450 L310,340 Z",
    districts: ["Brahmanbaria", "Comilla", "Chandpur", "Lakshmipur", "Noakhali", "Feni", "Khagrachhari", "Rangamati", "Bandarban", "Chittagong", "Cox's Bazar"]
  }
];

export default function DistrictsMap() {
  const { t, language } = useLanguage();
  const [activeDivision, setActiveDivision] = useState<typeof DIVISIONS[0] | null>(null);
  const [mapPaths, setMapPaths] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch('/map-paths.json')
      .then(res => res.json())
      .then(data => setMapPaths(data))
      .catch(console.error);
  }, []);

  // Helper to place districts in a circle around the division
  const getDistrictStyle = (index: number, total: number) => {
    const radius = total > 8 ? 115 : 85;
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // start from top
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return {
      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
      opacity: 1,
      visibility: 'visible' as const,
    };
  };

  return (
    <section className="py-24 md:py-32 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-brand-900/20 text-brand-800 dark:text-brand-400 text-sm font-bold mb-6 uppercase tracking-wider border border-gray-200 dark:border-brand-500/20 shadow-sm">
            <MapPin className="w-4 h-4" /> {t("Nationwide Coverage", "দেশব্যাপী কভারেজ")}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            {t("Serving all", "সেবা দিচ্ছি")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">64 {t("Districts", "জেলায়")}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t("From major cities to remote areas, our network of verified providers covers every corner of Bangladesh.", "প্রধান শহর থেকে প্রত্যন্ত অঞ্চল পর্যন্ত, আমাদের ভেরিফাইড প্রোভাইডার নেটওয়ার্ক বাংলাদেশের প্রতিটি কোণে পৌঁছে গেছে।")}
          </p>
        </div>

        {/* Map Container */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch w-full mx-auto">
          
          {/* Left: The Map Card */}
          <div className="w-full lg:w-7/12 min-h-[550px] md:min-h-[620px] lg:min-h-[660px] relative bg-white/70 dark:bg-[#121214]/80 backdrop-blur-md border border-gray-200/80 dark:border-white/10 rounded-3xl shadow-xl overflow-hidden p-4 sm:p-6 md:p-8 flex items-center justify-center">
            
            {/* Aspect Ratio Box that locks SVG and Pins to exact same coordinates */}
            <div className="relative w-full h-full max-h-[580px] lg:max-h-[620px] aspect-[678/949] mx-auto flex items-center justify-center">
              
              {/* SVG Map of Bangladesh */}
              <svg 
                viewBox="161 26 678 949" 
                className="w-full h-full drop-shadow-2xl select-none" 
                stroke="#ffffff" 
                strokeWidth="2.5" 
                strokeLinejoin="round" 
                strokeLinecap="round"
              >
                {DIVISIONS.map((div) => {
                  const isHovered = activeDivision?.id === div.id;
                  const fillHex = div.color.replace('bg-[', '').replace(']', '');
                  
                  return (
                    <path 
                      key={div.id} 
                      d={mapPaths[div.id] || div.path!} 
                      fill={fillHex.startsWith('#') ? fillHex : undefined}
                      className={`transition-all duration-300 cursor-pointer ${!fillHex.startsWith('#') ? div.color.replace('bg-', 'fill-') : ''} ${isHovered ? 'opacity-100 brightness-110 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]' : 'opacity-85 hover:opacity-100 hover:brightness-105'}`}
                      onClick={() => setActiveDivision(activeDivision?.id === div.id ? null : div)}
                    />
                  );
                })}
              </svg>

              {/* Division Pins Overlaid in Same Aspect Coordinate Frame */}
              <div className="absolute inset-0 pointer-events-none">
                {DIVISIONS.map((div) => {
                  const isActive = activeDivision?.id === div.id;
                  const hexColor = div.color.replace('bg-[', '').replace(']', '');

                  return (
                    <div 
                      key={div.id} 
                      className={`absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${isActive ? 'z-50' : 'z-20 hover:z-40'}`}
                      style={{ top: div.top, left: div.left }}
                    >
                      {/* Connecting lines to districts (shown only when active) */}
                      {isActive && div.districts.map((dist, idx) => {
                        const style = getDistrictStyle(idx, div.districts.length);
                        return (
                          <div 
                            key={`line-${idx}`} 
                            className="absolute top-1/2 left-1/2 w-[1.5px] origin-bottom opacity-75 pointer-events-none transition-all duration-500"
                            style={{ 
                              background: `linear-gradient(to top, transparent, ${hexColor}, rgba(255,255,255,0.8))`,
                              height: style.transform.includes('115px') ? '115px' : '85px', 
                              transform: `${style.transform} rotate(${idx * (360/div.districts.length)}deg)` 
                            }}
                          />
                        );
                      })}

                      {/* Ultra-Premium Division Pin & Beacon */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDivision(isActive ? null : div);
                        }}
                        className="flex flex-col items-center justify-center group pointer-events-auto cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-110 active:scale-95"
                        title={language === 'bn' ? div.nameBn : div.name}
                      >
                        {/* High-Tech Radar Pulse & Glowing Core */}
                        <div className="relative flex items-center justify-center">
                          {/* Animated Ambient Waves */}
                          <div 
                            className={`absolute -inset-2.5 rounded-full opacity-35 animate-ping pointer-events-none duration-1000 ${isActive ? 'opacity-70 scale-150' : ''}`}
                            style={{ backgroundColor: hexColor }}
                          />
                          <div 
                            className="absolute -inset-1 rounded-full opacity-40 blur-sm pointer-events-none"
                            style={{ backgroundColor: hexColor }}
                          />

                          {/* Outer Glassmorphic Beacon Ring */}
                          <div 
                            className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full p-[2px] backdrop-blur-md shadow-2xl transition-all duration-300 ${
                              isActive 
                                ? 'scale-125 ring-2 ring-white shadow-[0_0_25px_rgba(255,255,255,0.8)]' 
                                : 'group-hover:shadow-[0_0_18px_rgba(255,255,255,0.5)]'
                            }`}
                            style={{
                              background: `linear-gradient(135deg, rgba(255,255,255,0.95), ${hexColor}, rgba(0,0,0,0.4))`
                            }}
                          >
                            {/* Inner Radiant Core */}
                            <div className="w-full h-full rounded-full bg-slate-950/90 flex items-center justify-center relative overflow-hidden">
                              <div 
                                className="w-3 h-3 rounded-full shadow-inner transition-transform duration-300 group-hover:scale-125 flex items-center justify-center"
                                style={{ 
                                  backgroundColor: hexColor,
                                  boxShadow: `0 0 10px ${hexColor}, inset 0 0 4px rgba(255,255,255,0.8)`
                                }}
                              >
                                <div className="w-1 h-1 rounded-full bg-white shadow-sm"></div>
                              </div>
                            </div>
                          </div>

                          {/* Pin Needle Anchor */}
                          <div 
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rotate-45 rounded-xs"
                            style={{ backgroundColor: hexColor }}
                          />
                        </div>

                        {/* Frosted Glass Pill Name Tag */}
                        <div 
                          className={`mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-tight whitespace-nowrap backdrop-blur-md border transition-all duration-300 flex items-center gap-1.5 shadow-md ${
                            isActive 
                              ? 'bg-slate-900 text-white border-brand-400 scale-105 shadow-xl shadow-brand-500/20' 
                              : 'bg-white/95 dark:bg-black/85 text-slate-800 dark:text-slate-100 border-white/60 dark:border-white/15 group-hover:border-brand-500 group-hover:text-brand-600 dark:group-hover:text-brand-400'
                          }`}
                        >
                          <span 
                            className="w-1.5 h-1.5 rounded-full shrink-0" 
                            style={{ backgroundColor: hexColor, boxShadow: `0 0 6px ${hexColor}` }}
                          />
                          <span>{language === 'bn' ? div.nameBn : div.name}</span>
                        </div>
                      </button>

                      {/* Floating District Satellite Badges */}
                      <div className={`absolute top-1/2 left-1/2 w-0 h-0 transition-all duration-500 ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                        {div.districts.map((district, idx) => {
                          const style = isActive ? getDistrictStyle(idx, div.districts.length) : { transform: 'translate(-50%, -50%) scale(0)' };
                          return (
                            <div 
                              key={idx}
                              className="absolute w-auto px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-slate-900/90 dark:bg-slate-900/95 text-white backdrop-blur-md border border-white/20 shadow-2xl whitespace-nowrap transition-all duration-300 hover:scale-115 hover:border-brand-400 hover:bg-slate-800 cursor-pointer"
                              style={style}
                            >
                              <span className="flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_4px_#34d399]"></span>
                                {district}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right: Info Panel & Guidelines */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6">
            <div className="bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col h-full min-h-[550px] md:min-h-[620px] lg:min-h-[660px]">
              <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mb-6 shrink-0">
                <ShieldCheck className="w-6 h-6 text-brand-600 dark:text-brand-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {activeDivision ? (language === 'bn' ? `${activeDivision.nameBn} বিভাগ` : `${activeDivision.name} Division`) : t("64 Districts, 1 Network", "৬৪ জেলা, ১ নেটওয়ার্ক")}
              </h3>
              
              {activeDivision ? (
                <div className="flex-1 flex flex-col">
                  <p className="text-brand-600 dark:text-brand-400 font-semibold mb-6 text-lg">
                    {activeDivision.districts.length} {t("Districts Covered", "টি জেলা কভার করা হচ্ছে")}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {activeDivision.districts.map((d, i) => (
                      <span key={i} className="px-3.5 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-xl text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                        {d}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto bg-brand-50 dark:bg-brand-900/20 rounded-2xl p-6 border border-brand-100 dark:border-brand-500/20">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {t("Ready to serve in", "সার্ভিস দিতে প্রস্তুত")} {language === 'bn' ? activeDivision.nameBn : activeDivision.name}?
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {t("Find verified providers or start offering your services in these districts today.", "আজই এই জেলাগুলোতে ভেরিফাইড প্রোভাইডার খুঁজুন অথবা আপনার সার্ভিস দেওয়া শুরু করুন।")}
                    </p>
                    <button className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-sm transition-colors shadow-sm cursor-pointer">
                      {t("Explore Opportunities", "সুযোগ খুঁজুন")}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col">
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    {t("Our mission is to decentralize opportunities by empowering professionals and businesses across every corner of Bangladesh.", "আমাদের লক্ষ্য হলো বাংলাদেশের প্রতিটি প্রান্তে পেশাদার এবং ব্যবসাগুলোকে ক্ষমতায়ন করার মাধ্যমে সুযোগের বিকেন্দ্রীকরণ করা।")}
                  </p>
                  
                  <div className="space-y-6 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{t("Hyper-Local Connections", "লোকাল কানেকশন")}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {t("Clients can quickly find verified providers from their own or nearby districts, reducing turnaround time.", "ক্লায়েন্টরা তাদের নিজ বা পার্শ্ববর্তী জেলা থেকে দ্রুত ভেরিফাইড প্রোভাইডার খুঁজে পেতে পারেন।")}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-teal-600 dark:bg-teal-400"></span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{t("Empowering Regions", "আঞ্চলিক ক্ষমতায়ন")}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {t("Talented individuals outside the capital get equal access to nationwide projects and clients.", "রাজধানীর বাইরের দক্ষ ব্যক্তিরাও দেশব্যাপী প্রজেক্ট এবং ক্লায়েন্টদের সাথে যুক্ত হওয়ার সমান সুযোগ পান।")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-[#18181b] flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                      {t("Click on any division pin on the map to explore the districts we cover in that region.", "যেকোনো বিভাগের জেলার তালিকা দেখতে ম্যাপের পিনে ক্লিক করুন।")}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
