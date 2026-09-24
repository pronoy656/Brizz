"use client";

import React, { useState, useEffect } from "react";
import { MapPin, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const DIVISIONS = [
  {
    id: "rangpur",
    name: "Rangpur",
    nameBn: "রংপুর",
    top: "15%",
    left: "30%",
    color: "bg-[#F36B41]", // Orange
    shadow: "shadow-[#F36B41]/50",
    path: "M130,40 L160,20 L180,30 L180,70 L210,90 L220,120 L190,140 L160,150 L110,130 L90,100 L110,50 Z",
    districts: ["Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon"]
  },
  {
    id: "mymensingh",
    name: "Mymensingh",
    nameBn: "ময়মনসিংহ",
    top: "30%",
    left: "60%",
    color: "bg-[#8CA8FF]", // Light Blue
    shadow: "shadow-[#8CA8FF]/50",
    path: "M220,120 L270,110 L310,120 L320,170 L280,190 L250,170 L220,160 L190,140 L200,90 L210,90 Z",
    districts: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"]
  },
  {
    id: "sylhet",
    name: "Sylhet",
    nameBn: "সিলেট",
    top: "40%",
    left: "80%",
    color: "bg-[#71F2A7]", // Green
    shadow: "shadow-[#71F2A7]/50",
    path: "M310,120 L370,110 L410,120 L420,150 L390,180 L350,190 L320,170 Z",
    districts: ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"]
  },
  {
    id: "rajshahi",
    name: "Rajshahi",
    nameBn: "রাজশাহী",
    top: "45%",
    left: "25%",
    color: "bg-[#B474FF]", // Purple
    shadow: "shadow-[#B474FF]/50",
    path: "M110,130 L160,150 L190,140 L220,160 L210,210 L200,260 L140,250 L110,210 L80,180 Z",
    districts: ["Sirajganj", "Pabna", "Bogra", "Rajshahi", "Natore", "Joypurhat", "Chapainawabganj", "Naogaon"]
  },
  {
    id: "dhaka",
    name: "Dhaka",
    nameBn: "ঢাকা",
    top: "55%",
    left: "55%",
    color: "bg-[#FBE64D]", // Yellow
    shadow: "shadow-[#FBE64D]/50",
    path: "M220,160 L250,170 L280,190 L320,170 L350,190 L360,230 L320,280 L290,260 L250,330 L210,320 L190,290 L200,260 L210,210 Z",
    districts: ["Dhaka", "Gazipur", "Kishoreganj", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Tangail", "Faridpur", "Gopalgang", "Madaripur", "Rajbari", "Shariatpur"]
  },
  {
    id: "khulna",
    name: "Khulna",
    nameBn: "খুলনা",
    top: "70%",
    left: "30%",
    color: "bg-[#FCA2A7]", // Pink
    shadow: "shadow-[#FCA2A7]/50",
    path: "M140,250 L200,260 L190,290 L210,320 L200,380 L180,430 L140,490 L130,460 L150,430 L130,400 L100,350 L80,290 Z",
    districts: ["Khulna", "Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"]
  },
  {
    id: "barishal",
    name: "Barishal",
    nameBn: "বরিশাল",
    top: "80%",
    left: "55%",
    color: "bg-[#63D7FC]", // Cyan
    shadow: "shadow-[#63D7FC]/50",
    path: "M210,320 L250,330 L290,260 L320,280 L310,340 L290,380 L260,450 L250,420 L220,400 L200,380 Z",
    districts: ["Barishal", "Barguna", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"]
  },
  {
    id: "chittagong",
    name: "Chittagong",
    nameBn: "চট্টগ্রাম",
    top: "75%",
    left: "80%",
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
    const radius = total > 8 ? 120 : 90; // larger radius for Dhaka/Chittagong
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
    <section className="py-32 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
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
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start w-full mx-auto">
          
          {/* Left: The Abstract Map */}
          <div className="w-full lg:w-7/12 h-[600px] relative bg-white/50 dark:bg-[#121214]/80 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-3xl shadow-xl overflow-hidden p-8">
            
            {/* The Colorful Bangladesh Map */}
            <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
              <svg viewBox="0 -60 500 700" className="w-[120%] h-[120%] -ml-[10%] drop-shadow-xl pointer-events-auto" stroke="#fff" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                {DIVISIONS.map((div) => {
                  const isHovered = activeDivision?.id === div.id;
                  const fillClass = div.color.replace('bg-', 'fill-').replace(']', '').replace('[', ''); // Handle arbitrary colors if needed, but since we use raw hex in arbitrary classes like bg-[#F36B41], fill-[#F36B41] works in tailwind, but it's safer to use style for fill.
                  const fillHex = div.color.replace('bg-[', '').replace(']', '');
                  
                  return (
                    <path 
                      key={div.id} 
                      d={mapPaths[div.id] || div.path!} 
                      fill={fillHex.startsWith('#') ? fillHex : undefined}
                      className={`transition-all duration-300 cursor-pointer ${!fillHex.startsWith('#') ? div.color.replace('bg-', 'fill-') : ''} ${isHovered ? 'opacity-100' : 'opacity-85 hover:opacity-100'}`}
                      onClick={() => setActiveDivision(activeDivision?.id === div.id ? null : div)}
                    />
                  );
                })}
              </svg>
            </div>

            {/* Division Nodes */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-8">
              <div className="w-full h-full relative" style={{ maxWidth: '500px', maxHeight: '600px', aspectRatio: '500/600' }}>
                {DIVISIONS.map((div) => (
                  <div 
                    key={div.id} 
                    className={`absolute ${activeDivision?.id === div.id ? 'z-50' : 'z-10'}`}
                    style={{ top: div.top, left: div.left }}
                  >
                    {/* Connecting lines to districts (shown only when active) */}
                    {activeDivision?.id === div.id && div.districts.map((dist, idx) => {
                      const style = getDistrictStyle(idx, div.districts.length);
                      return (
                        <div 
                          key={`line-${idx}`} 
                          className={`absolute top-0 left-0 w-[1px] origin-bottom opacity-50`}
                          style={{ 
                            background: `linear-gradient(to top, transparent, ${div.color.replace('bg-[', '').replace(']', '')})`,
                            height: style.transform.includes('120px') ? '120px' : '90px', 
                            transform: `${style.transform} rotate(${idx * (360/div.districts.length)}deg)` 
                          }}
                        ></div>
                      )
                    })}

                    {/* The main division pin */}
                    <button
                      onClick={() => setActiveDivision(activeDivision?.id === div.id ? null : div)}
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center group z-20 pointer-events-auto`}
                    >
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${div.color} border-2 border-white dark:border-gray-900 shadow-[0_0_15px_rgba(0,0,0,0.2)] ${div.shadow} relative flex items-center justify-center transition-transform duration-300 ${activeDivision?.id === div.id ? 'scale-125' : 'group-hover:scale-110'}`}>
                    <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-current"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  </div>
                  <span className={`mt-2 font-bold text-xs sm:text-sm whitespace-nowrap px-2 py-1 rounded-md bg-white/80 dark:bg-black/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 transition-colors ${activeDivision?.id === div.id ? 'text-brand-600 dark:text-brand-400' : 'text-gray-700 dark:text-gray-300'}`}>
                    {language === 'bn' ? div.nameBn : div.name}
                  </span>
                </button>

                {/* The districts (spawning around) */}
                <div className={`absolute top-1/2 left-1/2 w-0 h-0 transition-all duration-500 z-10 ${activeDivision?.id === div.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  {div.districts.map((district, idx) => {
                    const style = activeDivision?.id === div.id ? getDistrictStyle(idx, div.districts.length) : { transform: 'translate(-50%, -50%) scale(0)' };
                    return (
                      <div 
                        key={idx}
                        className={`absolute w-auto px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-white dark:bg-[#18181b] border border-gray-200 dark:border-white/10 shadow-lg text-gray-700 dark:text-gray-300 whitespace-nowrap transition-all duration-500 delay-[${idx * 50}ms]`}
                        style={style}
                      >
                        {district}
                      </div>
                    )
                  })}
                </div>

              </div>
            ))}
              </div>
            </div>
          </div>

          {/* Right: Info Panel & Guidelines */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6 h-full">
            <div className="bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-sm flex flex-col h-full min-h-[600px]">
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
                      <span key={i} className="px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300">
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
                    <button className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-sm transition-colors shadow-sm">
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
