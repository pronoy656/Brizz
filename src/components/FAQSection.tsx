"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircleQuestion, Mail } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const FAQS = [
  {
    question: {
      en: "What exactly is BRIIZZ?",
      bn: "BRIIZZ মূলত কী?",
    },
    answer: {
      en: "BRIIZZ is a verified network that connects you with trusted professionals, product suppliers, and agencies. Instead of you searching through endless directories, you simply tell us what you need, and we route your request to the exact providers who can execute it.",
      bn: "BRIIZZ হলো একটি বিশ্বস্ত নেটওয়ার্ক যা আপনাকে নির্ভরযোগ্য প্রফেশনাল, পণ্য সরবরাহকারী এবং এজেন্সির সাথে যুক্ত করে। ডিরেক্টরি ঘেঁটে সময় নষ্ট করার বদলে আপনি শুধু আপনার প্রয়োজন জানান, আর আমরা উপযুক্ত প্রোভাইডারের কাছে আপনার রিকোয়ারমেন্ট পৌঁছে দিই।",
    },
  },
  {
    question: {
      en: "How do you verify your providers?",
      bn: "আপনারা কীভাবে প্রোভাইডারদের যাচাই করেন?",
    },
    answer: {
      en: "Trust is our core foundation. Before a provider receives the 'BRIIZZ Verified' badge, we rigorously check their government identity, business trade licenses, past project history, and customer reviews to ensure they meet our quality standards.",
      bn: "বিশ্বাসযোগ্যতাই আমাদের মূল শক্তি। কোনো প্রোভাইডারকে 'BRIIZZ ভেরিফায়েড' ব্যাজ দেওয়ার আগে আমরা তাদের সরকারি পরিচয়পত্র, ট্রেড লাইসেন্স, পূর্বের কাজের ইতিহাস ও রিভিউ পুঙ্খানুপুঙ্খভাবে যাচাই করি।",
    },
  },
  {
    question: {
      en: "Is it free to submit a requirement?",
      bn: "রিকোয়ারমেন্ট জমা দেওয়া কি সম্পূর্ণ ফ্রি?",
    },
    answer: {
      en: "Yes! Submitting a requirement or asking for help on BRIIZZ is completely free for individuals and businesses looking for solutions. You only pay the providers directly for the services or products you purchase.",
      bn: "হ্যাঁ! BRIIZZ-এ কোনো রিকোয়ারমেন্ট জমা দেওয়া বা সমাধান চাওয়া ক্লায়েন্টদের জন্য সম্পূর্ণ ফ্রি। আপনি যে সার্ভিস বা পণ্য নিচ্ছেন কেবল তারই মূল্য প্রোভাইডারকে সরাসরি পরিশোধ করবেন।",
    },
  },
  {
    question: {
      en: "What if my requirement is very unique?",
      bn: "আমার রিকোয়ারমেন্ট যদি একদম আলাদা বা জটিল হয়?",
    },
    answer: {
      en: "That is where our network truly shines. If you have a highly custom or complex goal (like 'Build an entire branch office'), you can submit a custom requirement. Our internal network of 'Connectors' will actively source and assemble the right providers for you.",
      bn: "সেখানেই আমাদের নেটওয়ার্ক সবচেয়ে কার্যকর। আপনার যদি বড় কোনো কাস্টম প্রজেক্ট থাকে (যেমন 'সম্পূর্ণ নতুন ব্রাঞ্চ অফিস স্থাপন'), আমাদের 'কানেক্টর' নেটওয়ার্ক আপনার জন্য প্রয়োজনীয় সব প্রোভাইডার একত্রিত করে দেবে।",
    },
  },
  {
    question: {
      en: "How can my business become a BRIIZZ Partner?",
      bn: "আমার প্রতিষ্ঠান কীভাবে BRIIZZ পার্টনার হতে পারে?",
    },
    answer: {
      en: "We are always looking for high-quality partners. You can click 'Become a Partner' to submit your application. Once our team verifies your credentials and capabilities, you will start receiving direct, high-intent opportunities from our users.",
      bn: "আমরা সবসময় নির্ভরযোগ্য পার্টনারদের স্বাগত জানাই। 'পার্টনার হিসেবে যোগ দিন' বাটনে ক্লিক করে আবেদন করুন। আমাদের টিম আপনার তথ্য যাচাই করার পর আপনি সরাসরি আমাদের ক্লায়েন্টদের কাজের সুযোগ পাওয়া শুরু করবেন।",
    },
  },
];

export default function FAQSection() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-24">
          {/* Left Side: Header and CTA */}
          <div className="lg:w-1/3 flex flex-col items-start lg:sticky lg:top-32 lg:h-fit">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-50 dark:bg-brand-900/20 rounded-2xl flex items-center justify-center text-brand-800 dark:text-brand-400 mb-5 sm:mb-6 shadow-sm border border-brand-100 dark:border-brand-500/20 transition-colors">
              <MessageCircleQuestion className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight leading-tight transition-colors">
              {t("Got questions?", "কোনো প্রশ্ন আছে?")}
              <br />
              {t("We have", "আমাদের কাছে আছে")}{" "}
              <span className="text-brand-800 dark:text-brand-400">
                {t("answers.", "সমাধান।")}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 leading-relaxed transition-colors">
              {t(
                "Everything you need to know about the BRIIZZ network, how we source providers, and how to get started.",
                "BRIIZZ নেটওয়ার্ক, পার্টনার নির্বাচন পদ্ধতি এবং কীভাবে শুরু করবেন সে সম্পর্কিত যাবতীয় তথ্য।"
              )}
            </p>

            <div className="bg-gray-50 dark:bg-[#18181b] border border-gray-200 dark:border-white/10 rounded-2xl p-5 sm:p-6 w-full transition-colors duration-300">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                {t("Still have questions?", "আরও প্রশ্ন রয়েছে?")}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 transition-colors">
                {t(
                  "Can't find the answer you're looking for? Please chat to our friendly team.",
                  "আপনার প্রশ্নের উত্তর খুঁজে পাচ্ছেন না? সরাসরি আমাদের টিমের সাথে কথা বলুন।"
                )}
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white dark:bg-[#27272a] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" /> {t("Get in touch", "যোগাযোগ করুন")}
              </Link>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:w-2/3">
            <div className="space-y-3 sm:space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                const questionText = language === "bn" ? faq.question.bn : faq.question.en;
                const answerText = language === "bn" ? faq.answer.bn : faq.answer.en;

                return (
                  <div
                    key={index}
                    className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-brand-200 dark:border-brand-500/30 bg-brand-50/50 dark:bg-brand-900/10 shadow-sm"
                        : "border-gray-200 dark:border-white/10 bg-white dark:bg-[#18181b] hover:border-brand-300 dark:hover:border-brand-500/50"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none"
                    >
                      <span
                        className={`text-base sm:text-lg font-bold pr-4 sm:pr-8 transition-colors ${
                          isOpen
                            ? "text-brand-900 dark:text-brand-300"
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {questionText}
                      </span>
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? "bg-brand-800 dark:bg-brand-600 text-white rotate-180"
                            : "bg-gray-50 dark:bg-[#27272a] text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-white/10"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-[500px] opacity-100 pb-5 sm:pb-6 px-4 sm:px-6"
                          : "max-h-0 opacity-0 px-4 sm:px-6"
                      }`}
                    >
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed border-t border-brand-100/50 dark:border-white/10 pt-6 mt-2 transition-colors">
                        {answerText}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
