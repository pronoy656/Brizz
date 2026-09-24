"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export type UserRole = "partner" | "admin" | "owner";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  title?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  role: UserRole | null;
  login: (role: UserRole, email?: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedAuth = localStorage.getItem("brizz_auth_user");
    if (savedAuth) {
      try {
        setUser(JSON.parse(savedAuth));
      } catch (e) {
        console.error("Failed to parse auth", e);
      }
    }
  }, []);

  const login = (selectedRole: UserRole, customEmail?: string) => {
    let mockUser: AuthUser;

    if (selectedRole === "partner") {
      mockUser = {
        id: "prt-101",
        name: "Apex IT Solutions & Cloud",
        email: customEmail || "partner@apexitsolutions.com",
        role: "partner",
        title: "Tier-1 Verified Partner",
        avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&auto=format&fit=crop&q=80",
      };
    } else if (selectedRole === "admin") {
      mockUser = {
        id: "adm-01",
        name: "Platform Operations Desk",
        email: customEmail || "admin@briizz.com",
        role: "admin",
        title: "Head of Matchmaking & Triage",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      };
    } else {
      mockUser = {
        id: "own-1",
        name: "Founder & Executive CEO",
        email: customEmail || "ceo@briizz.com",
        role: "owner",
        title: "Platform Co-Founder (35% Equity)",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      };
    }

    setUser(mockUser);
    localStorage.setItem("brizz_auth_user", JSON.stringify(mockUser));

    // Redirect to specific dashboard
    if (selectedRole === "partner") {
      router.push("/partners/dashboard");
    } else {
      router.push(`/dashboard/${selectedRole}`);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("brizz_auth_user");
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role: user?.role || null,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
