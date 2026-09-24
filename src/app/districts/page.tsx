"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin, ArrowRight, Search, CheckCircle2, Star, Briefcase, ChevronLeft } from "lucide-react";
import Link from "next/link";

const DIVISIONS = [
  {
    name: "Dhaka",
    districts: ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail"]
  },
  {
    name: "Chattogram",
    districts: ["Bandarban", "Brahmanbaria", "Chandpur", "Chattogram", "Comilla", "Cox's Bazar", "Feni", "Khagrachari", "Lakshmipur", "Noakhali", "Rangamati"]
  },
  {
    name: "Rajshahi",
    districts: ["Bogura", "Joypurhat", "Naogaon", "Natore", "Chapainawabganj", "Pabna", "Rajshahi", "Sirajganj"]
  },
  {
    name: "Khulna",
    districts: ["Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"]
  },
  {
    name: "Barishal",
    districts: ["Barguna", "Barishal", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"]
  },
  {
    name: "Sylhet",
    districts: ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"]
  },
  {
    name: "Rangpur",
    districts: ["Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon"]
  },
  {
    name: "Mymensingh",
    districts: ["Jamalpur", "Mymensingh", "Netrokona", "Sherpur"]
  }
];

const MOCK_SERVICES = [
  { name: "Legal & Licensing", count: 12 },
  { name: "IT & Software", count: 8 },
  { name: "Office Setup", count: 15 },
  { name: "Accounting & Tax", count: 24 },
  { name: "Real Estate", count: 7 },
  { name: "Marketing & Media", count: 19 },
];

const MOCK_PROVIDERS = [
  {
    id: 1,
    name: "Apex Business Solutions",
    category: "Legal & Licensing",
    rating: 4.9,
    reviews: 124,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "TechSpace IT",
    category: "IT & Software",
    rating: 4.8,
    reviews: 89,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Metro Builders",
    category: "Real Estate",
    rating: 4.7,
    reviews: 56,
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  }
];

export default function DistrictsPage() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  
  const servicesRef = useRef<HTMLDivElement>(null);

  // Scroll to services when a location is selected
  useEffect(() => {
    if (selectedLocation && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedLocation]);

  // Get filtered districts based on active tab
  let displayedDistricts: { district: string; division: string }[] = [];
  
  if (activeTab === "All") {
    DIVISIONS.forEach(div => {
      div.districts.forEach(dist => {
        displayedDistricts.push({ district: dist, division: div.name });
      });
    });
  } else {
    const selectedDivision = DIVISIONS.find(d => d.name === activeTab);
    if (selectedDivision) {
      selectedDivision.districts.forEach(dist => {
        displayedDistricts.push({ district: dist, division: selectedDivision.name });
      });
    }
  }

  // Filter by search query
  if (searchQuery.trim() !== "") {
    displayedDistricts = displayedDistricts.filter(d => 
      d.district.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sort alphabetically
  displayedDistricts.sort((a, b) => a.district.localeCompare(b.district));

  const handleLocationClick = (locationName: string) => {
    setSelectedLocation(locationName);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#09090b] pt-32 pb-24 transition-colors">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-800 dark:text-brand-400 text-sm font-bold mb-6 uppercase tracking-wider border border-brand-100 dark:border-brand-500/20 shadow-sm">
            <MapPin className="w-4 h-4" /> Nationwide Coverage
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Explore All 64 Districts
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find trusted professionals, service providers, and solutions in every corner of Bangladesh. 
          </p>
        </div>

        <div className="bg-white dark:bg-[#121214] rounded-3xl p-6 md:p-10 shadow-sm border border-gray-200 dark:border-white/10 mb-12">
          
          {/* Controls: Search and Tabs */}
          <div className="flex flex-col gap-6 mb-8 border-b border-gray-100 dark:border-white/5 pb-8">
            
            <div className="relative max-w-md mx-auto w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
              <input 
                type="text" 
                placeholder="Search for a district..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-xl outline-none focus:border-brand-500 dark:focus:border-brand-500 transition-colors text-gray-900 dark:text-white dark:placeholder-gray-500"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
              <button
                onClick={() => { setActiveTab("All"); setSearchQuery(""); }}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeTab === "All" 
                    ? "bg-brand-800 text-white shadow-md shadow-brand-900/10" 
                    : "bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10"
                }`}
              >
                All 64
              </button>
              {DIVISIONS.map((div) => (
                <button
                  key={div.name}
                  onClick={() => { setActiveTab(div.name); setSearchQuery(""); }}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeTab === div.name 
                      ? "bg-brand-800 text-white shadow-md shadow-brand-900/10" 
                      : "bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10"
                  }`}
                >
                  {div.name}
                </button>
              ))}
            </div>
          </div>

          {/* Context Action */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {activeTab === "All" 
                ? "All Districts in Bangladesh" 
                : `Districts in ${activeTab} Division`}
              <span className="text-gray-400 dark:text-gray-500 text-sm ml-2 font-normal">({displayedDistricts.length})</span>
            </h2>
            
            {activeTab !== "All" && (
              <button 
                onClick={() => handleLocationClick(activeTab)}
                className="text-sm font-bold text-brand-800 dark:text-brand-400 hover:text-brand-950 dark:hover:text-brand-300 flex items-center gap-1 transition-colors bg-brand-50 dark:bg-brand-900/20 px-4 py-2 rounded-full border border-brand-100 dark:border-brand-500/20 hover:border-brand-200 dark:hover:border-brand-500/40"
              >
                View {activeTab} Services
              </button>
            )}
          </div>

          {/* Districts Grid */}
          {displayedDistricts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {displayedDistricts.map((item, dIdx) => (
                <button 
                  key={dIdx} 
                  onClick={() => handleLocationClick(item.district)}
                  className={`p-4 rounded-xl font-medium border transition-all text-sm flex flex-col items-start gap-1 group shadow-sm hover:shadow-md text-left ${
                    selectedLocation === item.district
                      ? "bg-brand-50 dark:bg-brand-900/20 border-brand-500 text-brand-900 dark:text-brand-300 ring-2 ring-brand-500/20"
                      : "bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:bg-brand-50 dark:hover:bg-brand-900/20 hover:border-brand-300 dark:hover:border-brand-500/50"
                  }`}
                >
                  <span className="font-bold">{item.district}</span>
                  {activeTab === "All" && (
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 group-hover:text-brand-500 dark:group-hover:text-brand-400">
                      {item.division}
                    </span>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              No districts found matching your search.
            </div>
          )}
        </div>

        {/* Dynamic Services Section - Appears when a location is clicked */}
        {selectedLocation && (
          <div ref={servicesRef} className="animate-fade-in bg-brand-950 rounded-3xl p-8 md:p-12 shadow-xl border border-brand-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-10 border-b border-brand-800/50 pb-6">
                <div>
                  <button 
                    onClick={() => setSelectedLocation(null)}
                    className="text-brand-300 hover:text-white flex items-center gap-1 text-sm font-medium mb-3 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back to map
                  </button>
                  <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <MapPin className="w-8 h-8 text-brand-400" />
                    Services in {selectedLocation}
                  </h2>
                </div>
                <Link 
                  href={`/find?location=${encodeURIComponent(selectedLocation)}`}
                  className="hidden md:flex items-center gap-2 bg-white text-brand-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                >
                  Advanced Search <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Categories */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Top Categories</h3>
                  <div className="flex flex-col gap-3">
                    {MOCK_SERVICES.map((service, idx) => (
                      <Link 
                        href={`/find?location=${encodeURIComponent(selectedLocation)}&category=${encodeURIComponent(service.name)}`}
                        key={idx} 
                        className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                      >
                        <span className="font-medium text-gray-200 group-hover:text-white flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-brand-400" /> {service.name}
                        </span>
                        <span className="text-xs font-bold bg-brand-800/50 text-brand-200 px-2.5 py-1 rounded-full">
                          {service.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Top Providers Preview */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Top Verified Providers</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {MOCK_PROVIDERS.map((provider) => (
                      <div key={provider.id} className="bg-white dark:bg-[#121214] rounded-2xl p-5 hover:shadow-xl transition-all group flex flex-col h-full border border-transparent dark:border-white/10">
                        <div className="flex justify-between items-start mb-4">
                          <img 
                            src={provider.avatar} 
                            alt={provider.name} 
                            className="w-14 h-14 rounded-xl object-cover border border-gray-100 dark:border-white/10 shadow-sm" 
                          />
                          <div className="bg-brand-50 dark:bg-brand-900/20 text-brand-800 dark:text-brand-300 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 border border-brand-100 dark:border-brand-500/20">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {provider.name}
                        </h4>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">{provider.category}</p>
                        
                        <div className="mt-auto flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1 font-bold text-gray-900 dark:text-white">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> {provider.rating}
                          </div>
                          <Link href={`/providers/${provider.id}`} className="text-brand-800 font-bold hover:underline">
                            View Profile
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/find?location=${encodeURIComponent(selectedLocation)}`}
                    className="mt-6 md:hidden flex w-full justify-center items-center gap-2 bg-white text-brand-900 px-6 py-4 rounded-xl font-bold"
                  >
                    Search All Providers in {selectedLocation}
                  </Link>
                </div>
                
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
