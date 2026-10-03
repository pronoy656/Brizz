"use client";

import React, { useRef, useState } from "react";
import { Star, Quote, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const TESTIMONIALS = [
  {
    quote: {
      en: "We needed to set up a new branch office in Chittagong. BRIIZZ sourced the interior designers, IT network specialists, and legal consultants all in one go. Saved us weeks of searching.",
      bn: "চট্টগ্রামে আমাদের নতুন ব্রাঞ্চ অফিস সেটআপের দরকার ছিল। BRIIZZ এক জায়গা থেকেই ইন্টেরিয়র ডিজাইনার, আইটি নেটওয়ার্ক স্পেশালিস্ট ও লিগ্যাল কনসালটেন্ট পাইয়ে দিয়েছে। আমাদের সপ্তাহের পর সপ্তাহ খোঁজাখুঁজির সময় বেঁচে গেছে।",
    },
    name: { en: "Ahmed R.", bn: "আহমেদ আর." },
    title: { en: "Operations Director, TechNova", bn: "অপারেশনস ডিরেক্টর, টেকনোভা" },
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    color: "from-blue-500 to-indigo-600",
  },
  {
    quote: {
      en: "Finding reliable industrial suppliers was always a nightmare. Since using BRIIZZ, we only deal with verified, high-quality vendors. It completely transformed our procurement process.",
      bn: "নির্ভরযোগ্য ইন্ডাস্ট্রিয়াল সাপ্লায়ার পাওয়া সবসময়ই ঝামেলার ছিল। BRIIZZ ব্যবহারের পর থেকে আমরা শুধু ভেরিফায়েড ও মানসম্মত ভেন্ডরদের সাথেই কাজ করছি। আমাদের প্রকিউরমেন্ট ব্যবস্থা অনেক সহজ হয়ে গেছে।",
    },
    name: { en: "Sarah K.", bn: "সায়রা কে." },
    title: { en: "Procurement Manager, BuildCorp", bn: "প্রকিউরমেন্ট ম্যানেজার, বিল্ডকর্প" },
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    color: "from-amber-500 to-orange-600",
  },
  {
    quote: {
      en: "I just told them I needed a complete digital marketing overhaul. They matched me with a top-tier agency that delivered exactly what I envisioned. The precision is unmatched.",
      bn: "আমি শুধু জানিয়েছিলাম আমার সম্পূর্ণ ডিজিটাল মার্কেটিং সহায়তা দরকার। তারা আমাকে শীর্ষস্থানীয় একটি এজেন্সির সাথে যুক্ত করে যারা হুবহু আমার পরিকল্পনা অনুযায়ী কাজ করেছে। তাদের সার্ভিসের কোনো তুলনা নেই।",
    },
    name: { en: "Tariq M.", bn: "তারিক এম." },
    title: { en: "Founder, FreshBites", bn: "প্রতিষ্ঠাতা, ফ্রেশবাইটস" },
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function Testimonials() {
  const { t, language } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const card = container.children[0] as HTMLElement | undefined;
    if (!card) return;
    const cardWidth = card.clientWidth + 16;
    const newIndex = Math.round(container.scrollLeft / cardWidth);
    if (newIndex >= 0 && newIndex < TESTIMONIALS.length && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const card = container.children[index] as HTMLElement | undefined;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - 24,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-12 sm:py-20 md:py-28 lg:py-32 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white dark:bg-brand-900/20 text-brand-800 dark:text-brand-400 text-xs sm:text-sm font-bold mb-3 sm:mb-5 uppercase tracking-wider border border-gray-200 dark:border-brand-500/20 shadow-sm transition-colors duration-300">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-600 dark:text-brand-400" />
            <span>{t("Success Stories", "সফলতার গল্প")}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black sm:font-bold text-gray-900 dark:text-white mb-3 sm:mb-5 tracking-tight leading-tight transition-colors duration-300">
            {t("Don't just take our", "আমাদের কথায় নয়,")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">
              {t("word for it.", "কাজে প্রমাণ দেখুন।")}
            </span>
          </h2>
          <p className="text-xs sm:text-base md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 max-w-2xl mx-auto">
            {t(
              "Hear from businesses and individuals who have completely transformed how they source providers and scale operations.",
              "যেসব প্রতিষ্ঠান ও উদ্যোক্তারা BRIIZZ-এর মাধ্যমে তাদের পার্টনার খুঁজে পেয়েছেন ও ব্যবসাকে এগিয়ে নিয়েছেন, তাদের অভিজ্ঞতা জানুন।"
            )}
          </p>
        </div>

        {/* Cards: Mobile Swipeable Carousel with 24px start gap & desktop 3-col grid */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scroll-pl-6 scrollbar-none no-scrollbar -mx-4 px-6 sm:mx-0 sm:px-0 sm:scroll-pl-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((testimonial, idx) => {
            const quoteText = language === "bn" ? testimonial.quote.bn : testimonial.quote.en;
            const nameText = language === "bn" ? testimonial.name.bn : testimonial.name.en;
            const titleText = language === "bn" ? testimonial.title.bn : testimonial.title.en;

            return (
              <div
                key={idx}
                className="group relative bg-white dark:bg-[#121214] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 shadow-sm md:hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] md:dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] border border-gray-200/80 dark:border-white/10 flex flex-col justify-between md:hover:-translate-y-1.5 transition-all duration-300 overflow-hidden w-[82vw] max-w-[325px] md:w-auto md:max-w-none shrink-0 md:shrink snap-start"
              >
                {/* Background Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 md:group-hover:opacity-[0.03] md:dark:group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none`}
                />

                {/* Animated Top Border */}
                <div
                  className={`absolute top-0 left-0 h-1 w-0 bg-gradient-to-r ${testimonial.color} md:group-hover:w-full transition-all duration-700 ease-out`}
                />

                {/* Massive Background Quote Icon */}
                <Quote className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-20 h-20 sm:w-32 sm:h-32 text-gray-100/70 dark:text-white/[0.02] md:group-hover:text-gray-200/80 md:dark:group-hover:text-white/[0.04] transition-colors duration-500 pointer-events-none -rotate-12 z-0" />

                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4 sm:mb-6 relative z-10">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 dark:text-amber-400 fill-amber-400 dark:fill-amber-400 transition-transform duration-300"
                      />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 relative z-10 transition-colors">
                    &ldquo;{quoteText}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 sm:gap-4 relative z-10 pt-4 border-t border-gray-100 dark:border-white/5 sm:border-0 sm:pt-0">
                  <div className="relative shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={nameText}
                      className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white dark:border-[#27272a] shadow-sm relative z-10 transition-colors"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} rounded-full blur-md opacity-0 md:group-hover:opacity-60 scale-110 transition-all duration-500 z-0`}
                    />
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white truncate">
                      {nameText}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      {titleText}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Spacer for mobile trailing scroll padding */}
          <div className="shrink-0 w-2 md:hidden" aria-hidden="true" />
        </div>

        {/* Mobile Slide Indicator Dots */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-4">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-6 bg-brand-600 dark:bg-brand-400"
                  : "w-1.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
