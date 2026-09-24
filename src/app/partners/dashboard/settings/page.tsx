"use client";

import React, { useState } from "react";
import { Building, MapPin, CheckCircle2, ShieldAlert, Plus, X, Upload } from "lucide-react";

export default function CapabilitiesSettingsPage() {
  const [categories, setCategories] = useState(["Wholesale & Supply", "IT Infrastructure"]);
  const [districts, setDistricts] = useState(["Dhaka", "Gazipur", "Narayanganj"]);
  const [newCategory, setNewCategory] = useState("");
  const [newDistrict, setNewDistrict] = useState("");

  const addCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const removeCategory = (cat: string) => {
    setCategories(categories.filter(c => c !== cat));
  };

  const addDistrict = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDistrict && !districts.includes(newDistrict)) {
      setDistricts([...districts, newDistrict]);
      setNewDistrict("");
    }
  };

  const removeDistrict = (dist: string) => {
    setDistricts(districts.filter(d => d !== dist));
  };

  return (
    <div className="space-y-8 max-w-5xl">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Capabilities & Settings</h1>
        <p className="text-gray-600 mt-1">Define what you do so BRIIZZ can send you the exact right leads.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-8">
          
          {/* Business Profile */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500">
                <Building className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Business Profile</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Business Name</label>
                <input 
                  type="text" 
                  defaultValue="TechNova Solutions"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Short Description</label>
                <textarea 
                  defaultValue="We are a leading supplier of enterprise IT hardware and wholesale distribution."
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 outline-none transition-colors resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Service Capabilities */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Service Categories</h2>
            <p className="text-sm text-gray-500 mb-6">What type of requirements can you fulfill?</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat, i) => (
                <div key={i} className="bg-green-50 text-green-700 border border-green-100 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                  {cat}
                  <button onClick={() => removeCategory(cat)} className="hover:text-green-900"><X className="w-4 h-4" /></button>
                </div>
              ))}
            </div>

            <form onSubmit={addCategory} className="flex gap-2">
              <input 
                type="text" 
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="e.g. Real Estate Development"
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 outline-none transition-colors text-sm"
              />
              <button type="submit" className="bg-gray-900 text-white px-4 py-3 rounded-xl font-bold hover:bg-black transition-colors flex items-center gap-2 text-sm">
                <Plus className="w-4 h-4" /> Add
              </button>
            </form>
          </div>

          {/* Service Areas */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <h2 className="text-xl font-bold text-gray-900">Service Areas (Districts)</h2>
            </div>
            <p className="text-sm text-gray-500 mb-6">Where can you deliver your products or services?</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {districts.map((dist, i) => (
                <div key={i} className="bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                  {dist}
                  <button onClick={() => removeDistrict(dist)} className="hover:text-blue-900"><X className="w-4 h-4" /></button>
                </div>
              ))}
            </div>

            <form onSubmit={addDistrict} className="flex gap-2">
              <input 
                type="text" 
                value={newDistrict}
                onChange={(e) => setNewDistrict(e.target.value)}
                placeholder="e.g. Chattogram"
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 outline-none transition-colors text-sm"
              />
              <button type="submit" className="bg-gray-900 text-white px-4 py-3 rounded-xl font-bold hover:bg-black transition-colors flex items-center gap-2 text-sm">
                <Plus className="w-4 h-4" /> Add
              </button>
            </form>
          </div>

          <button className="w-full bg-green-600 text-white font-bold text-lg py-4 rounded-2xl hover:bg-green-700 transition-colors shadow-md shadow-green-600/20">
            Save All Changes
          </button>

        </div>

        {/* Right Sidebar - Verification Status */}
        <div className="space-y-8">
          <div className="bg-gray-900 text-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Verification Status</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                <div>
                  <div className="font-bold">Email Address</div>
                  <div className="text-sm text-gray-400">Verified</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                <div>
                  <div className="font-bold">Phone Number</div>
                  <div className="text-sm text-gray-400">Verified</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ShieldAlert className="w-6 h-6 text-yellow-400 shrink-0" />
                <div>
                  <div className="font-bold">Trade License</div>
                  <div className="text-sm text-gray-400 mb-2">Pending Review</div>
                  <button className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg font-bold flex items-center gap-2 transition-colors">
                    <Upload className="w-3 h-3" /> Update Document
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-400 leading-relaxed">
                Your profile is <strong>80% complete</strong>. Complete your verification to unlock Enterprise tier broadcasts.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
