"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/features/shared/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Disable browser auto-scrolling to previous position on reload
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // If on homepage or reloading without a valid hash, start at top
      if (pathname === "/") {
        if (window.location.hash === "#elite-network" || window.location.hash === "#") {
          window.history.replaceState(null, "", window.location.pathname);
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
        const timer = setTimeout(() => {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
        }, 30);
        return () => clearTimeout(timer);
      }

      const handleBeforeUnload = () => {
        if ("scrollRestoration" in window.history) {
          window.history.scrollRestoration = "manual";
        }
      };
      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    }
  }, [pathname]);

  // Hide Navbar and Footer on all dashboard and partner routes
  const isDashboardRoute = pathname?.startsWith("/dashboard") || pathname?.startsWith("/partners");

  if (isDashboardRoute) {
    return <main className="flex-1 min-h-screen bg-gray-50">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
