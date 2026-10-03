"use client";

import React from "react";
import OneStopSolutionV3 from "@/components/OneStopSolutionV3";

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
import Banner from "@/features/banner/Banner";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* 1. Hero */}
      {/* <Hero /> */}
      <Banner />

      {/* 1.2 Solutions For Everyone */}
      <SolutionsForEveryone />

      {/* 1.5 Trusted By Social Proof */}
      <TrustedBy />

      {/* 4. How It Works - You don't search for providers. We bring them to you. */}
      {/* <HowItWorks /> */}
      <HowItWorksPartner />

      {/* 64 Districts Map Section */}
      <DistrictsMap />

      {/* 8. Provider / Find Section */}
      <ProviderPreview />

      {/* 8.5 Useful Information / Consultation */}
      <UsefulInformation />

      {/* 7. Become a Partner / Provider */}
      <BecomePartner />


      {/* Verified Expertise & Partner Profiles Showcase */}
      <ExpertiseShowcase />

      {/* One Stop Solution (Transit Network Ecosystem) */}
      <OneStopSolutionV3 />


      {/* 5. Testimonials (Social Proof) */}
      <Testimonials />

      {/* 9. FAQ Section */}
      <FAQSection />

      {/* Direct Communication / Talk to BRIIZZ Team CTA */}
      <TalkToUsCTA />
    </div>
  );
}
