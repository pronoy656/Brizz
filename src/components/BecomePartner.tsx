"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, CheckCircle2, TrendingUp, Users, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BecomePartner() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 md:py-28 bg-white dark:bg-[#0a0a0a] relative overflow-hidden border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-800 dark:text-brand-400 text-xs sm:text-sm font-bold mb-4 sm:mb-6 uppercase tracking-wider border border-brand-100 dark:border-brand-500/20 transition-colors">
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t("For Businesses & Professionals", "ব্যবসা ও প্রফেশনালদের জন্য")}
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-3 sm:mb-6 leading-tight tracking-tight transition-colors">
              {t("Don't just list your business.", "শুধুমাত্র ব্যবসা তালিকাভুক্ত নয়,")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">
                {t("Grow with the network.", "যুক্ত হন নেটওয়ার্কে, বাড়ান ব্যবসার পরিধি।")}
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-lg transition-colors">
              {t(
                "BRIIZZ routes real, high-intent client requirements directly to verified agencies, suppliers, and professionals across Bangladesh. No bidding wars.",
                "কোনো অপ্রয়োজনীয় বিডিং যুদ্ধ ছাড়াই দেশব্যাপী ক্লায়েন্টদের সুনির্দিষ্ট কাজের চাহিদা সরাসরি পৌঁছে যায় আপনার কাছে। আজই একজন ভেরিফায়েড পার্টনার হোন।"
              )}
            </p>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex flex-row gap-4 mb-8">
              <Link
                href="/providers/join"
                className="btn-primary flex items-center justify-center gap-2 px-7 py-3.5 text-base rounded-2xl cursor-pointer"
              >
                {t("Become a Partner", "পার্টনার হিসেবে যোগ দিন")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/partners/how-it-works"
                className="btn-secondary border-gray-200 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 flex items-center justify-center px-7 py-3.5 text-base rounded-2xl transition-colors cursor-pointer"
              >
                {t("Learn More", "বিস্তারিত জানুন")}
              </Link>
            </div>

            {/* Desktop Trust Row */}
            <div className="hidden lg:flex items-center gap-6 pt-6 border-t border-gray-100 dark:border-white/10 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <Rocket className="w-4 h-4 text-indigo-500" />
                <span>{t("0 to Scale Solutions", "জিরো থেকে ভবিষ্যৎ সল্যুশন")}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                <span>{t("Verified Partner Badge", "ভেরিফায়েড ব্যাজ")}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                <span>{t("Massive User Traffic", "বিশাল ইউজার ট্রাফিক")}</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Benefits Card with Interactive Peeking Background Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative group"
          >
            {/* Main Benefits Card */}
            <div className="bg-gray-50/95 dark:bg-[#18181b]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-gray-200/80 dark:border-white/10 relative z-20 transition-all duration-300 shadow-sm">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white transition-colors">
                  {t("Why Partner with BRIIZZ?", "কেন হবেন BRIIZZ পার্টনার?")}
                </h3>
                <span className="text-[11px] sm:text-xs font-bold px-2.5 py-0.5 sm:py-1 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 border border-brand-200/50 dark:border-brand-500/20">
                  {t("Verified Benefits", "ভেরিফায়েড সুবিধা")}
                </span>
              </div>

              <ul className="space-y-3.5 sm:space-y-6">
                {/* 1. Complete Business Solutions (0 to Future: Products, Web, Mobile, IT) */}
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-[#27272a] border border-gray-100 dark:border-white/5 flex items-center justify-center shrink-0 shadow-sm transition-colors">
                    <Rocket className="w-4 h-4 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-0.5 sm:mb-1 transition-colors">
                      {t("Zero to Future: Complete Solutions", "জিরো থেকে ভবিষ্যৎ: সম্পূর্ণ বিজনেস সল্যুশন")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed transition-colors">
                      {t(
                        "From products and supply sourcing to modern websites, mobile apps, and IT infrastructure — we provide everything your business needs from zero to scale.",
                        "প্রোডাক্ট ও সাপ্লাই সোর্সিং থেকে শুরু করে ওয়েবসাইট, মোবাইল অ্যাপ ও সম্পূর্ণ আইটি সেটআপ—আপনার ব্যবসার জিরো থেকে ভবিষ্যৎ পর্যন্ত যা যা প্রয়োজন, সবই আমরা দিচ্ছি এক ছাদের নিচে।"
                      )}
                    </p>
                  </div>
                </li>

                {/* 2. Official Verified Badge */}
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-[#27272a] border border-gray-100 dark:border-white/5 flex items-center justify-center shrink-0 shadow-sm transition-colors">
                    <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-0.5 sm:mb-1 transition-colors">
                      {t("Official Verified Partner Badge", "অফিসিয়াল ভেরিফায়েড পার্টনার ব্যাজ")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed transition-colors">
                      {t(
                        "Stand out with the official BRIIZZ Verified badge that wins immediate client confidence and secures high-value deals with zero bidding wars.",
                        "অফিসিয়াল ভেরিফায়েড ব্যাজের মাধ্যমে গ্রাহকদের সর্বোচ্চ বিশ্বাস অর্জন করুন এবং কোনো বিডিং যুদ্ধ ছাড়াই নিশ্চিত করুন প্রিমিয়াম সব কাজের সুযোগ।"
                      )}
                    </p>
                  </div>
                </li>

                {/* 3. Massive User Base & Traffic Growth */}
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-[#27272a] border border-gray-100 dark:border-white/5 flex items-center justify-center shrink-0 shadow-sm transition-colors">
                    <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-0.5 sm:mb-1 transition-colors">
                      {t("Massive User Base & Traffic Growth", "বিশাল ইউজার বেস ও ট্রাফিক বৃদ্ধি")}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed transition-colors">
                      {t(
                        "Tap into our huge, nationwide user base to drive high-intent traffic to your platform or website and capture massive business growth opportunities.",
                        "আমাদের প্ল্যাটফর্মের বিশাল ইউজার বেস কাজে লাগিয়ে আপনার সাইট বা সার্ভিসে গ্রাহক ট্রাফিক বৃদ্ধি করুন এবং বড় বড় ব্যবসায়িক প্রজেক্টে যুক্ত হওয়ার সুযোগ নিন।"
                      )}
                    </p>
                  </div>
                </li>
              </ul>

              {/* Mobile Action Buttons (Right under the benefits) */}
              <div className="lg:hidden flex items-center gap-3 pt-4 mt-3 border-t border-gray-200/60 dark:border-white/10 w-full">
                <Link
                  href="/providers/join"
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-brand-600 hover:bg-brand-700 text-white flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all cursor-pointer"
                >
                  {t("Become a Partner", "পার্টনার হোন")} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/partners/how-it-works"
                  className="py-3 px-4 rounded-xl font-bold text-xs sm:text-sm border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 flex items-center justify-center active:scale-[0.98] transition-all cursor-pointer"
                >
                  {t("Learn More", "বিস্তারিত")}
                </Link>
              </div>
            </div>

            {/* Animated Decorative Card Behind - Peeks out smoothly on scroll and hover */}
            <motion.div
              initial={{ opacity: 0, rotate: 0, x: 0, y: 0 }}
              whileInView={{ opacity: 1, rotate: 2.5, x: 8, y: 8 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.15 }}
              className="absolute top-2 -right-2 sm:top-6 sm:-right-6 w-full h-full bg-gradient-to-br from-brand-100/70 to-indigo-100/60 dark:from-brand-900/30 dark:to-indigo-950/20 border border-brand-200/80 dark:border-brand-500/20 rounded-2xl sm:rounded-3xl -z-10 pointer-events-none transition-transform duration-500 group-hover:rotate-4 group-hover:translate-x-3.5 group-hover:translate-y-3"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
