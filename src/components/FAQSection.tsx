"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircleQuestion, Mail } from "lucide-react";
import Link from "next/link";

const FAQS = [
  {
    question: "What exactly is BRIIZZ?",
    answer: "BRIIZZ is a verified network that connects you with trusted professionals, product suppliers, and agencies. Instead of you searching through endless directories, you simply tell us what you need, and we route your request to the exact providers who can execute it."
  },
  {
    question: "How do you verify your providers?",
    answer: "Trust is our core foundation. Before a provider receives the 'BRIIZZ Verified' badge, we rigorously check their government identity, business trade licenses, past project history, and customer reviews to ensure they meet our quality standards."
  },
  {
    question: "Is it free to submit a requirement?",
    answer: "Yes! Submitting a requirement or asking for help on BRIIZZ is completely free for individuals and businesses looking for solutions. You only pay the providers directly for the services or products you purchase."
  },
  {
    question: "What if my requirement is very unique?",
    answer: "That is where our network truly shines. If you have a highly custom or complex goal (like 'Build an entire branch office'), you can submit a custom requirement. Our internal network of 'Connectors' will actively source and assemble the right providers for you."
  },
  {
    question: "How can my business become a BRIIZZ Partner?",
    answer: "We are always looking for high-quality partners. You can click 'Become a Partner' to submit your application. Once our team verifies your credentials and capabilities, you will start receiving direct, high-intent opportunities from our users."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Header and CTA */}
          <div className="lg:w-1/3 flex flex-col items-start lg:sticky lg:top-32 lg:h-fit">
            <div className="w-16 h-16 bg-brand-50 dark:bg-brand-900/20 rounded-2xl flex items-center justify-center text-brand-800 dark:text-brand-400 mb-6 shadow-sm border border-brand-100 dark:border-brand-500/20 transition-colors">
              <MessageCircleQuestion className="w-8 h-8" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight transition-colors">
              Got questions?<br/>
              We have <span className="text-brand-800 dark:text-brand-400">answers.</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed transition-colors">
              Everything you need to know about the BRIIZZ network, how we source providers, and how to get started.
            </p>

            <div className="bg-gray-50 dark:bg-[#18181b] border border-gray-200 dark:border-white/10 rounded-2xl p-6 w-full transition-colors duration-300">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 transition-colors">Still have questions?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 transition-colors">Can't find the answer you're looking for? Please chat to our friendly team.</p>
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3 bg-white dark:bg-[#27272a] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors shadow-sm">
                <Mail className="w-4 h-4" /> Get in touch
              </Link>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                      isOpen ? "border-brand-200 dark:border-brand-500/30 bg-brand-50/50 dark:bg-brand-900/10 shadow-sm" : "border-gray-200 dark:border-white/10 bg-white dark:bg-[#18181b] hover:border-brand-300 dark:hover:border-brand-500/50"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className={`text-lg font-bold pr-8 transition-colors ${isOpen ? "text-brand-900 dark:text-brand-300" : "text-gray-900 dark:text-white"}`}>
                        {faq.question}
                      </span>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "bg-brand-800 dark:bg-brand-600 text-white rotate-180" : "bg-gray-50 dark:bg-[#27272a] text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-white/10"}`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-[500px] opacity-100 pb-6 px-6" : "max-h-0 opacity-0 px-6"
                      }`}
                    >
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed border-t border-brand-100/50 dark:border-white/10 pt-6 mt-2 transition-colors">
                        {faq.answer}
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
