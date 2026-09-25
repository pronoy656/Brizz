"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, MapPin, Award, Star } from "lucide-react";

const profiles = [
  {
    id: 1,
    name: "Dr. Anwar Hossain",
    role: "Chief Technical Consultant",
    location: "Dhaka, Bangladesh",
    email: "anwar@brizz.com",
    avatar: "https://i.pravatar.cc/300?img=11",
    specialty: "Enterprise Architecture",
    rating: "4.9/5"
  },
  {
    id: 2,
    name: "Tasnia Rahman",
    role: "Senior Business Strategist",
    location: "Chittagong, Bangladesh",
    email: "tasnia@brizz.com",
    avatar: "https://i.pravatar.cc/300?img=5",
    specialty: "Supply Chain & Logistics",
    rating: "4.8/5"
  },
  {
    id: 3,
    name: "Md. Rafiqul Islam",
    role: "Lead Hardware Expert",
    location: "Sylhet, Bangladesh",
    email: "rafiqul@brizz.com",
    avatar: "https://i.pravatar.cc/300?img=12",
    specialty: "CCTV & Network Solutions",
    rating: "4.7/5"
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    role: "Digital Transformation Lead",
    location: "Rajshahi, Bangladesh",
    email: "nusrat@brizz.com",
    avatar: "https://i.pravatar.cc/300?img=9",
    specialty: "App & Web Development",
    rating: "5.0/5"
  }
];

export default function ProfilePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] pt-32 pb-24 transition-colors duration-300 relative overflow-hidden">
      
      {/* Decorative Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-500/10 border border-brand-100 dark:border-brand-500/20 text-brand-700 dark:text-brand-300 text-xs md:text-sm font-bold mb-6 uppercase tracking-widest">
            {t("Our Team", "আমাদের টিম")}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            {t("Our Expert Profiles", "আমাদের এক্সপার্ট প্রোফাইলসমূহ")}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t("Connect with our top-tier professionals ready to guide you through your business journey.", "আপনার ব্যবসায়িক যাত্রায় সঠিক গাইডলাইন দিতে আমাদের সেরা প্রফেশনালদের সাথে যুক্ত হোন।")}
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map(profile => (
            <div key={profile.id} className="bg-white dark:bg-[#121214] rounded-3xl p-8 border border-gray-100 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group flex flex-col items-center text-center relative overflow-hidden">
              
              {/* Subtle hover background highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Hexagon Avatar (Benzene Ring shape) */}
              <div className="relative mb-8 mt-2">
                {/* Glowing background behind hexagon on hover */}
                <div className="absolute inset-0 bg-brand-500 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 scale-150"></div>
                
                {/* 
                  The Hexagon Shape using CSS clip-path (polygon with 6 corners)
                  This creates the benzene ring shape requested by the user.
                */}
                <div 
                  className="w-36 h-36 relative bg-gradient-to-br from-brand-500 to-indigo-500 p-1.5 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6 z-10"
                  style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                >
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:-rotate-6"
                    style={{ 
                      backgroundImage: `url(${profile.avatar})`,
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                    }}
                  ></div>
                </div>
                
                {/* Rating Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1 rounded-full shadow-lg flex items-center gap-1 z-20">
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-bold text-gray-900 dark:text-white">{profile.rating}</span>
                </div>
              </div>

              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{profile.name}</h3>
              <p className="text-brand-600 dark:text-brand-400 text-sm font-bold mb-6">{profile.role}</p>

              <div className="w-full h-px bg-gray-100 dark:bg-white/10 mb-6"></div>

              <div className="space-y-4 w-full text-left flex-1 mb-8">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm group/item">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover/item:bg-brand-50 dark:group-hover/item:bg-brand-500/10 transition-colors">
                    <Award className="w-4 h-4 text-gray-400 group-hover/item:text-brand-500" />
                  </div>
                  <span className="font-medium">{profile.specialty}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm group/item">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover/item:bg-blue-50 dark:group-hover/item:bg-blue-500/10 transition-colors">
                    <MapPin className="w-4 h-4 text-gray-400 group-hover/item:text-blue-500" />
                  </div>
                  <span className="font-medium">{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm group/item">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover/item:bg-purple-50 dark:group-hover/item:bg-purple-500/10 transition-colors">
                    <Mail className="w-4 h-4 text-gray-400 group-hover/item:text-purple-500" />
                  </div>
                  <span className="font-medium text-xs truncate">{profile.email}</span>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 font-bold text-gray-700 dark:text-gray-300 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-300">
                {t("Contact Expert", "বিশেষজ্ঞের সাথে কথা বলুন")}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
