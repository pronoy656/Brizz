"use client";

import React from "react";
import Link from "next/link";
import { Heart, Stethoscope, Droplet, GraduationCap, Building2, Users } from "lucide-react";

export default function FreeHelpPage() {
  const CATEGORIES = [
    { title: "Healthcare & Medical", icon: Stethoscope },
    { title: "Emergency Response", icon: Heart },
    { title: "Blood & Donation", icon: Droplet },
    { title: "Education Assistance", icon: GraduationCap },
    { title: "Government Services", icon: Building2 },
    { title: "Community Resources", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* Non-commercial Hero */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-600 mb-6">
            <Heart className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Need Help? We Are Here.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The BRIIZZ network is committed to providing free assistance for emergencies, medical needs, and community support. Select a category below to find resources or ask for help.
          </p>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-200 hover:shadow-lg transition-all cursor-pointer group text-center">
                  <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 mx-auto mb-4 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{cat.title}</h3>
                  <p className="text-sm text-gray-500">Find support or connect with volunteers.</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cannot find the right category?</h2>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-300 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              Contact Support Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
