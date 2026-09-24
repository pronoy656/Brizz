"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SolutionsPreview() {
  const solutions = [
    { title: "Start a Business", desc: "Build the right network around your new venture." },
    { title: "Build an Online Presence", desc: "Websites, social media, and digital branding." },
    { title: "Develop an App", desc: "Custom software solutions tailored to your needs." },
    { title: "Automate Operations", desc: "Streamline your workflow with smart tools." },
    { title: "Equip an Office", desc: "Hardware, networking, and physical infrastructure." },
    { title: "Improve Marketing", desc: "Reach your audience with targeted campaigns." },
    { title: "Find a Specialist", desc: "Connect with verified experts in any field." },
    { title: "Custom Requirement", desc: "Don't see it? Tell us exactly what you need." },
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Whatever You’re Trying to Get Done.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            From physical infrastructure to digital growth, we connect you with the right solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, idx) => (
            <div key={idx} className="card-clean p-6 group flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-800 transition-colors">
                  {sol.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 line-clamp-2">
                  {sol.desc}
                </p>
              </div>
              <Link 
                href={`/solutions#${sol.title.toLowerCase().replace(/ /g, "-")}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800 group-hover:text-brand-600 transition-colors"
              >
                Explore <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
