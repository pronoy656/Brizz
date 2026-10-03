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

      // Global click tracking for analytics
      const handleGlobalClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (!target) return;
        const link = target.closest("a");
        const button = target.closest("button");

        if (link) {
          const href = link.getAttribute("href") || "";
          if (!href || href.startsWith("#") && href.length === 1) return;
          const text = (link.textContent || link.getAttribute("aria-label") || href).trim().slice(0, 60);
          let category: "cta" | "social" | "nav" | "emergency" | "service" | "general" = "nav";
          if (href.includes("wa.me") || href.includes("whatsapp")) category = "cta";
          else if (href.includes("facebook") || href.includes("linkedin") || href.includes("youtube") || href.includes("instagram")) category = "social";
          else if (href.includes("needs/new") || href.includes("partners") || href.includes("login")) category = "cta";
          else if (href.includes("free-help") || href.includes("blood")) category = "emergency";
          else if (href.includes("solutions") || href.includes("services")) category = "service";

          import("@/lib/analytics").then((m) => {
            m.recordClick(text || href, href, category);
          });
        } else if (button) {
          const btnText = (button.textContent || button.getAttribute("aria-label") || "").trim().slice(0, 60);
          if (btnText && btnText !== "EN" && btnText !== "বাংলা") {
            import("@/lib/analytics").then((m) => {
              m.recordClick(btnText, pathname, "cta");
            });
          }
        }
      };
      document.addEventListener("click", handleGlobalClick, { capture: true });

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
        document.removeEventListener("click", handleGlobalClick, { capture: true });
      };
    }
  }, [pathname]);

  // Hide Navbar and Footer on dashboard routes and analytics
  const isDashboardRoute =
    pathname?.startsWith("/dashboard") ||
    pathname?.startsWith("/partners/dashboard") ||
    pathname === "/analytics";

  if (isDashboardRoute) {
    return <main className="flex-1 min-h-screen">{children}</main>;
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
