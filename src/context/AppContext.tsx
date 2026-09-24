"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  ClientRequirement,
  PartnerProfile,
  PlatformOwner,
  INITIAL_REQUIREMENTS,
  INITIAL_PARTNERS,
  INITIAL_OWNERS,
} from "@/lib/data";

interface ToastNotification {
  id: string;
  type: "success" | "info" | "warning";
  message: string;
}

interface AppContextType {
  requirements: ClientRequirement[];
  partners: PartnerProfile[];
  owners: PlatformOwner[];
  toasts: ToastNotification[];
  addRequirement: (req: Omit<ClientRequirement, "id" | "trackingCode" | "submittedAt" | "status" | "commissionAmount" | "partnerPayout">) => string;
  updateRequirementStatus: (id: string, status: ClientRequirement["status"], partnerId?: string) => void;
  assignPartnerToRequirement: (requirementId: string, partnerId: string) => void;
  updatePartnerStatus: (partnerId: string, status: PartnerProfile["status"]) => void;
  updateOwnerEquity: (ownerId: string, newEquity: number) => void;
  addToast: (message: string, type?: "success" | "info" | "warning") => void;
  removeToast: (id: string) => void;
  totalPlatformGMV: number;
  totalNetProfit: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [requirements, setRequirements] = useState<ClientRequirement[]>(INITIAL_REQUIREMENTS);
  const [partners, setPartners] = useState<PartnerProfile[]>(INITIAL_PARTNERS);
  const [owners, setOwners] = useState<PlatformOwner[]>(INITIAL_OWNERS);
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  // Load from local storage if present
  useEffect(() => {
    const savedReqs = localStorage.getItem("brizz_requirements");
    if (savedReqs) {
      try {
        setRequirements(JSON.parse(savedReqs));
      } catch (e) {
        console.error("Failed to parse saved requirements", e);
      }
    }
  }, []);

  const saveRequirements = (reqs: ClientRequirement[]) => {
    setRequirements(reqs);
    localStorage.setItem("brizz_requirements", JSON.stringify(reqs));
  };

  const addToast = (message: string, type: "success" | "info" | "warning" = "success") => {
    const id = "toast-" + Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addRequirement = (
    data: Omit<ClientRequirement, "id" | "trackingCode" | "submittedAt" | "status" | "commissionAmount" | "partnerPayout">
  ): string => {
    const randomCode = "BRZ-" + Math.floor(1000 + Math.random() * 9000);
    const commission = Math.round(data.estimatedBudget * 0.15);
    const payout = data.estimatedBudget - commission;

    const newReq: ClientRequirement = {
      ...data,
      id: "req-" + Date.now(),
      trackingCode: randomCode,
      submittedAt: new Date().toISOString().replace("T", " ").substring(0, 16),
      status: "Pending Triage",
      commissionAmount: commission,
      partnerPayout: payout,
    };

    const updated = [newReq, ...requirements];
    saveRequirements(updated);
    addToast(`Requirement ${randomCode} submitted successfully!`, "success");
    return randomCode;
  };

  const updateRequirementStatus = (id: string, status: ClientRequirement["status"], partnerId?: string) => {
    const updated = requirements.map((req) => {
      if (req.id === id) {
        let partnerName = req.assignedPartnerName;
        if (partnerId) {
          const found = partners.find((p) => p.id === partnerId);
          if (found) partnerName = found.name;
        }
        return {
          ...req,
          status,
          assignedPartnerId: partnerId || req.assignedPartnerId,
          assignedPartnerName: partnerName,
        };
      }
      return req;
    });
    saveRequirements(updated);
    addToast(`Requirement status updated to ${status}`, "info");
  };

  const assignPartnerToRequirement = (requirementId: string, partnerId: string) => {
    const partner = partners.find((p) => p.id === partnerId);
    if (!partner) return;

    const updated = requirements.map((req) => {
      if (req.id === requirementId) {
        return {
          ...req,
          status: "Matched" as const,
          assignedPartnerId: partnerId,
          assignedPartnerName: partner.name,
        };
      }
      return req;
    });
    saveRequirements(updated);
    addToast(`Assigned ${partner.name} to requirement`, "success");
  };

  const updatePartnerStatus = (partnerId: string, status: PartnerProfile["status"]) => {
    setPartners((prev) =>
      prev.map((p) => (p.id === partnerId ? { ...p, status } : p))
    );
    addToast(`Partner status changed to ${status}`, "info");
  };

  const updateOwnerEquity = (ownerId: string, newEquity: number) => {
    setOwners((prev) =>
      prev.map((own) => (own.id === ownerId ? { ...own, equityPercentage: newEquity } : own))
    );
    addToast("Equity distribution updated", "success");
  };

  // Calculations
  const totalPlatformGMV = requirements.reduce((acc, curr) => acc + curr.estimatedBudget, 2450000);
  const totalNetProfit = requirements.reduce((acc, curr) => acc + curr.commissionAmount, 480000);

  return (
    <AppContext.Provider
      value={{
        requirements,
        partners,
        owners,
        toasts,
        addRequirement,
        updateRequirementStatus,
        assignPartnerToRequirement,
        updatePartnerStatus,
        updateOwnerEquity,
        addToast,
        removeToast,
        totalPlatformGMV,
        totalNetProfit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
