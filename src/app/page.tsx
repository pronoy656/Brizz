"use client";

import React from "react";
import Hero from "@/components/Hero";
import OneStopSolution from "@/components/OneStopSolution";
import OneStopSolutionV2 from "@/components/OneStopSolutionV2";
import OneStopSolutionV3 from "@/components/OneStopSolutionV3";
import OneStopSolutionV4 from "@/components/OneStopSolutionV4";
import OneStopSolutionV6 from "@/components/OneStopSolutionV6";

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
import ExpertiseShowcase from "@/components/ExpertiseShowcase";
import SolutionsForEveryone from "@/components/SolutionsForEveryone";
import UsefulInformation from "@/components/UsefulInformation";
import TalkToUsCTA from "@/components/TalkToUsCTA";
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


      {/* Verified Expertise & Partner Profiles Showcase */}
      <ExpertiseShowcase />

      {/* 1.1 One Stop Solution - Version 1 (Business Journey) */}
      <OneStopSolution />

      {/* 1.1 One Stop Solution - Version 2 (Central Bridge Ecosystem) */}
      <OneStopSolutionV2 />

      {/* 1.1 One Stop Solution - Version 3 (Literal One Stop Transit Network) */}
      <OneStopSolutionV3 />

      {/* 1.1 One Stop Solution - Version 4 (Cinematic Brand Film & Intelligent Reorganization) */}
      <OneStopSolutionV4 />

      {/* 1.1 One Stop Solution - Version 6 (Stop Juggling Dozens of Vendors - Chaos to Clarity) */}
      <OneStopSolutionV6 />


      {/* 5. Testimonials (Social Proof) */}
      <Testimonials />

      {/* 9. FAQ Section */}
      <FAQSection />

      {/* Direct Communication / Talk to BRIIZZ Team CTA */}
      <TalkToUsCTA />

      {/* Final Call to Action - Tell Us What You Need */}
      <NeedSomethingForm />
    </div>
  );
}
