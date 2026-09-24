"use client";

import React, { useState } from "react";
import { Briefcase, MapPin, Calendar, DollarSign, MessageSquare, CheckCircle2, AlertCircle, Clock } from "lucide-react";

const ACTIVE_PROJECTS = [
  {
    id: "PRJ-9015",
    title: "50 Laptops for Corporate Office",
    client: "Ahmed (TechCorp)",
    location: "Gulshan, Dhaka",
    agreedPrice: "৳ 2,50,000",
    deadline: "Oct 15, 2026",
    status: "in_progress", // 'in_progress' | 'delivered' | 'completed'
    progress: 40,
    nextMilestone: "Deliver 25 units by Monday",
  },
  {
    id: "PRJ-8842",
    title: "Complete Office Network Setup",
    client: "Sarah (NextGen Solutions)",
    location: "Banani, Dhaka",
    agreedPrice: "৳ 85,000",
    deadline: "Sep 30, 2026",
    status: "delivered",
    progress: 90,
    nextMilestone: "Waiting for client approval",
  },
  {
    id: "PRJ-8710",
    title: "Server Rack Installation",
    client: "Rahim (DataFlow Ltd)",
    location: "Chattogram",
    agreedPrice: "৳ 1,20,000",
    deadline: "Sep 10, 2026",
    status: "completed",
    progress: 100,
    nextMilestone: "Payment received in Wallet",
  }
];

export default function ActiveProjectsPage() {
  const [projects, setProjects] = useState(ACTIVE_PROJECTS);
  
  // Status badge config
  const getStatusConfig = (status: string) => {
    switch(status) {
      case 'in_progress':
        return { color: 'bg-blue-50 text-blue-700 border-blue-200', icon: Clock, label: 'In Progress' };
      case 'delivered':
        return { color: 'bg-yellow-50 text-yellow-700 border-yellow-200', icon: AlertCircle, label: 'Pending Approval' };
      case 'completed':
        return { color: 'bg-green-50 text-green-700 border-green-200', icon: CheckCircle2, label: 'Completed' };
      default:
        return { color: 'bg-gray-50 text-gray-700 border-gray-200', icon: Clock, label: 'Unknown' };
    }
  };

  const markAsDelivered = (id: string) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, status: 'delivered', progress: 90, nextMilestone: "Waiting for client approval" } : p));
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-green-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Active Projects</h1>
            <p className="text-gray-600 mt-1">Manage your ongoing contracts and deliveries.</p>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project) => {
          const statusConfig = getStatusConfig(project.status);
          const StatusIcon = statusConfig.icon;

          return (
            <div key={project.id} className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-sm">
              
              <div className="flex flex-col lg:flex-row justify-between gap-6 mb-6">
                
                {/* Left Side: Details */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded-md uppercase tracking-wider">{project.id}</span>
                    <div className={`px-3 py-1 rounded-md text-xs font-bold border flex items-center gap-1.5 ${statusConfig.color}`}>
                      <StatusIcon className="w-3.5 h-3.5" /> {statusConfig.label}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="text-gray-600 font-medium mb-6">For: <span className="text-gray-900">{project.client}</span></div>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-600">
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-gray-400" /> {project.location}</span>
                    <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4 text-gray-400" /> {project.agreedPrice}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-gray-400" /> Due: {project.deadline}</span>
                  </div>
                </div>

                {/* Right Side: Actions */}
                <div className="flex-shrink-0 w-full lg:w-64 flex flex-col gap-3">
                  <button className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors w-full">
                    <MessageSquare className="w-4 h-4" /> Message Client
                  </button>
                  
                  {project.status === 'in_progress' && (
                    <button 
                      onClick={() => markAsDelivered(project.id)}
                      className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors shadow-sm w-full"
                    >
                      Mark as Delivered
                    </button>
                  )}
                  {project.status === 'delivered' && (
                    <button disabled className="bg-gray-100 text-gray-400 px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 w-full cursor-not-allowed">
                      Waiting for Payment
                    </button>
                  )}
                  {project.status === 'completed' && (
                    <button disabled className="bg-green-50 text-green-700 px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 w-full cursor-not-allowed">
                      <CheckCircle2 className="w-4 h-4" /> Paid
                    </button>
                  )}
                </div>
              </div>

              {/* Progress Tracker */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex justify-between text-sm font-bold text-gray-900 mb-3">
                  <span>Project Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-4">
                  <div className={`h-full rounded-full transition-all duration-1000 ${project.status === 'completed' ? 'bg-green-500' : 'bg-green-600'}`} style={{ width: `${project.progress}%` }}></div>
                </div>
                <div className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-gray-900 font-bold">Next Action:</span> {project.nextMilestone}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
