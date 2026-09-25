"use client";

import React from "react";
import Hero from "@/components/Hero";
import OneStopSolution from "@/components/OneStopSolution";
import TrustSection from "@/components/TrustSection";

import NeedSomethingForm from "@/components/NeedSomethingForm";
import HowItWorks from "@/components/HowItWorks";
import DistrictsMap from "@/components/DistrictsMap";

import BecomePartner from "@/components/BecomePartner";
import ProviderPreview from "@/components/ProviderPreview";
import FAQSection from "@/components/FAQSection";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import FutureProofJourney from "@/components/FutureProofJourney";
import HowItWorksPartner from "@/components/HowItWorksPartner";
import SolutionsForEveryone from "@/components/SolutionsForEveryone";
import UsefulInformation from "@/components/UsefulInformation";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* 1. Hero */}
      <Hero />



      {/* 1.2 Solutions For Everyone */}
      <SolutionsForEveryone />

      {/* 1.5 Trusted By Social Proof */}
      <TrustedBy />

      {/* 2. Trust / Social Proof */}
      {/* <TrustSection /> */}

      {/* 6. Future-Proof Journey */}
      {/* <FutureProofJourney /> */}


      {/* 4. How It Works (The clear path) */}
      <HowItWorks />




      {/* 64 Districts Map Section */}
      <DistrictsMap />

      {/* 8. Provider / Find Section */}
      <ProviderPreview />

      {/* 8.5 Useful Information / Consultation */}
      <UsefulInformation />


      {/* 7.5 How Partnering Works */}
      <HowItWorksPartner />


      {/* 7. Become a Partner / Provider */}
      <BecomePartner />


      {/* 1.1 One Stop Solution */}
      <OneStopSolution />

      {/* 2. Trust / Social Proof */}
      <TrustSection />


      {/* 5. Testimonials (Social Proof) */}
      <Testimonials />

      {/* 9. FAQ Section */}
      <FAQSection />


      {/* Final Call to Action - Tell Us What You Need */}
      <NeedSomethingForm />
    </div>
  );
}
