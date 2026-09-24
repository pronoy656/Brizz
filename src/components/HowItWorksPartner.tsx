"use client";

import React from "react";

export default function HowItWorksPartner() {
  const steps = [
    { 
      num: "01", 
      title: "Create Your Profile", 
      desc: "Submit your business details, capabilities, and past work to our network." 
    },
    { 
      num: "02", 
      title: "Get Verified", 
      desc: "Our team vets your credentials to give you the verified BRIIZZ badge of trust." 
    },
    { 
      num: "03", 
      title: "We Find The Clients", 
      desc: "We actively source and aggregate high-intent users looking for your exact services." 
    },
    { 
      num: "04", 
      title: "Receive Matched Leads", 
      desc: "Get direct introductions for projects that match your expertise. No bidding wars." 
    },
    { 
      num: "05", 
      title: "Deliver the Solution", 
      desc: "You provide your product or service to the client, backed by our secure coordination platform." 
    },
    { 
      num: "06", 
      title: "Grow Your Business", 
      desc: "Build your reputation, receive payments securely, and scale your operations with us." 
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-700 dark:text-emerald-400 mb-4 transition-colors">
            How Partnering Works
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors">
            You don't hunt for clients.<br />
            <span className="text-emerald-600 dark:text-emerald-400">We deliver them to you.</span>
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-colors">
            Finding the right client used to mean spending thousands on marketing, bidding on cold leads, and endless negotiating. BRIIZZ acts as your dedicated growth engine. You verify your business, and our intelligent system matches you with high-intent, pre-qualified users who need exactly what you offer.
          </p>
        </div>

        {/* The 6 Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white dark:bg-[#18181b] border border-gray-200 dark:border-white/5 rounded-3xl p-8 flex flex-col items-start hover:shadow-lg hover:border-emerald-200 dark:hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-[#27272a] text-emerald-700 dark:text-emerald-400 font-bold text-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-white/5 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:text-white group-hover:border-emerald-600 dark:group-hover:border-emerald-600 transition-colors">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
