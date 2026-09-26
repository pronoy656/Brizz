"use client";

import React, { useState } from "react";
import { 
  PhoneCall, 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Headphones,
  Mail,
  UserCheck
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TalkToUsCTA() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "general",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-[#070709] relative overflow-hidden transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
      
      {/* Background Lighting Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-r from-brand-500/10 via-indigo-500/10 to-teal-500/10 dark:from-brand-500/15 dark:via-purple-600/15 dark:to-teal-500/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-800 dark:text-brand-400 text-xs sm:text-sm font-bold mb-6 uppercase tracking-wider border border-brand-100 dark:border-brand-500/20 shadow-sm">
            <Headphones className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            <span>{t("Direct Communication", "সরাসরি যোগাযোগ")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
            {t("Talk Directly with the", "সরাসরি কথা বলুন")} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-teal-600 dark:from-brand-400 dark:via-indigo-400 dark:to-teal-300">
              {t("BRIIZZ Leadership Team", "BRIIZZ সেন্ট্রাল টিমের সাথে")}
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {t(
              "Have questions, custom enterprise requirements, or need strategic guidance? Our core team is here to consult with you directly.",
              "কোনো নির্দিষ্ট সেবা বা প্রজেক্ট নিয়ে আলোচনা করতে চান? আমাদের কোর অ্যাডভাইজরি টিমের সাথে এখনই সরাসরি যুক্ত হোন।"
            )}
          </p>
        </div>

        {/* Main Grid: Left Direct Channels, Right Quick Callback / Meeting Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Direct Communication Channels & Live Advisor Status */}
          <div className="lg:col-span-5 flex flex-col h-full">
            
            {/* Live Advisor Badge Card */}
            <div className="bg-gradient-to-br from-brand-900 via-brand-950 to-gray-950 dark:from-[#13131a] dark:via-[#161622] dark:to-[#0f0f14] text-white p-6 sm:p-8 lg:p-9 rounded-3xl border border-brand-800/40 dark:border-white/10 shadow-xl relative overflow-hidden flex flex-col justify-between h-full">
              <div className="absolute top-0 right-0 w-56 h-56 bg-brand-500/20 rounded-full blur-[70px] pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        {t("Advisors Online Now", "টিম মেম্বাররা অনলাইনে আছেন")}
                      </span>
                    </div>

                    <span className="text-xs text-gray-300 bg-white/10 px-2.5 py-1 rounded-full font-medium backdrop-blur-sm">
                      {t("< 15m Response", "< ১৫ মিনিট রেসপন্স")}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                    {t("Need Instant Clarification?", "জরুরি আলোচনা বা তথ্য প্রয়োজন?")}
                  </h3>
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                    {t(
                      "Connect with our solution consultants directly through your preferred channel without any waiting time.",
                      "কোনো রকম অপেক্ষা ছাড়াই আপনার পছন্দের মাধ্যমে আমাদের সাথে কথা বলুন।"
                    )}
                  </p>

                  {/* Direct Authority Access inside the card */}
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center shrink-0 border border-brand-400/20">
                      <UserCheck className="w-5 h-5 text-brand-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {t("Direct Authority Access", "কর্তৃপক্ষের সাথে সরাসরি আলোচনা")}
                      </h4>
                      <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                        {t("Speak with founders & decision makers", "কোর ডিসিশন মেকারদের সাথে কানেক্ট হোন")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-3 mt-auto">
                  {/* WhatsApp Direct */}
                  <a
                    href="https://wa.me/8801700000000?text=Hello%20BRIIZZ%20Team,%20I%20would%20like%20to%20talk%20about%20a%20requirement."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-sm transition-all duration-300 shadow-lg shadow-emerald-600/20 group hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5" />
                      <span>{t("Chat on WhatsApp", "হোয়াটসঅ্যাপে চ্যাট করুন")}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  {/* Direct Phone Call */}
                  <a
                    href="tel:+8801700000000"
                    className="w-full flex items-center justify-between px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/15 rounded-2xl font-bold text-sm transition-all duration-300 backdrop-blur-md group hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3">
                      <PhoneCall className="w-5 h-5 text-brand-400" />
                      <span>{t("Call Central Hotline", "সরাসরি হটলাইনে কল করুন")}</span>
                    </div>
                    <span className="text-xs text-brand-300 font-mono">+880 1800-BRIIZZ</span>
                  </a>

                  {/* Schedule Meeting */}
                  <a
                    href="mailto:contact@briizz.com?subject=Strategic%20Consultation%20Request"
                    className="w-full flex items-center justify-between px-5 py-3.5 bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white border border-white/10 rounded-2xl font-semibold text-sm transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-indigo-400" />
                      <span>{t("Email Our Core Team", "ইমেইল পাঠান")}</span>
                    </div>
                    <span className="text-xs text-gray-400">contact@briizz.com</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message & Callback Request Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#121216] border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col justify-between">
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {t("Thank You! Message Received.", "ধন্যবাদ! আপনার মেসেজটি পেয়েছি।")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8 leading-relaxed">
                  {t(
                    "Our central team has received your request. A senior advisor will contact you within 15 minutes.",
                    "আমাদের সেন্ট্রাল টিম আপনার অনুরোধটি পেয়েছে। খুব দ্রুত একজন দায়িত্বশীল কর্মকর্তা আপনার সাথে যোগাযোগ করবেন।"
                  )}
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", topic: "general", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white font-semibold text-sm hover:bg-gray-200 dark:hover:bg-white/15 transition-colors cursor-pointer"
                >
                  {t("Send Another Message", "আরেকটি মেসেজ পাঠান")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {t("Request a Direct Callback", "ডিরেক্ট কলব্যাক বা মেসেজ পাঠান")}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {t("Leave your info, we will reach out to you promptly.", "আপনার তথ্য দিন, আমরাই দ্রুত কল ব্যাক করবো।")}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                        {t("Your Name", "আপনার নাম")} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t("Enter your name", "আপনার নাম লিখুন")}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
                      />
                    </div>

                    {/* Email and Phone side by side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email Field */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                          {t("Email Address", "ইমেইল এড্রেস")} *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder={t("Enter your email", "আপনার ইমেইল লিখুন")}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        />
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                          {t("Phone Number", "ফোন নম্বর")} *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder={t("Enter your phone number", "আপনার ফোন নম্বর লিখুন")}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        />
                      </div>
                    </div>

                    {/* Topic Selector */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                        {t("What would you like to discuss?", "কী বিষয়ে আলোচনা করতে চান?")}
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm transition-all"
                      >
                        <option value="general" className="dark:bg-[#18181b]">{t("General Inquiry / Consultation", "সাধারণ পরামর্শ বা জানতে চাই")}</option>
                        <option value="enterprise" className="dark:bg-[#18181b]">{t("Custom Enterprise Project", "বড় এন্টারপ্রাইজ প্রজেক্ট")}</option>
                        <option value="partnership" className="dark:bg-[#18181b]">{t("Strategic Partnership with BRIIZZ", "BRIIZZ-এর সাথে পার্টনারশিপ")}</option>
                        <option value="complaint" className="dark:bg-[#18181b]">{t("Service Support & Feedback", "সার্ভিস সাপোর্ট ও ফিডব্যাক")}</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                        {t("Brief Details (Optional)", "বিস্তারিত কিছু জানাতে চাইলে লিখুন (ঐচ্ছিক)")}
                      </label>
                      <textarea
                        rows={3}
                        placeholder={t("Enter your message...", "আপনার বার্তা বা বিস্তারিত লিখুন...")}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-sm resize-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                    <span>{t("Response within 15 minutes during office hours", "১৫ মিনিটের মধ্যে দ্রুত কলব্যাক")}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-gradient-to-r from-brand-600 via-brand-700 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-600/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-50 whitespace-nowrap shrink-0"
                  >
                    <span className="whitespace-nowrap">{isSubmitting ? t("Sending...", "পাঠানো হচ্ছে...") : t("Send Message to BRIIZZ", "BRIIZZ-এ মেসেজ পাঠান")}</span>
                    <Send className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
