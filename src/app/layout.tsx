import type { Metadata } from "next";
import { Inter, Fraunces, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { AppProvider } from "@/context/AppContext";
import { AuthProvider } from "@/context/AuthContext";
import LayoutWrapper from "@/components/LayoutWrapper";
import ToastContainer from "@/components/ToastContainer";
import { ThemeToggle } from "@/components/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-noto-bengali",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BRIIZZ — One Partner. Every Solution.",
  description:
    "Whatever you need. We'll find the solution. From technology and hardware to creative, marketing, and business services across all 64 districts.",
  keywords: [
    "BRIIZZ",
    "Solutions",
    "IT Services",
    "Hardware",
    "Web Development",
    "Partner Network",
    "Bangladesh 64 Districts",
    "Office IT Setup"
  ],
  openGraph: {
    title: "BRIIZZ — One Partner. Every Solution.",
    description: "You bring the requirement. BRIIZZ finds, coordinates, and delivers the right solution.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${fraunces.variable} ${notoSansBengali.variable} font-sans min-h-screen flex flex-col antialiased selection:bg-brand-200 selection:text-brand-900 bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <AuthProvider>
              <AppProvider>
                <LayoutWrapper>
                  {children}
                </LayoutWrapper>
                <ToastContainer />
              </AppProvider>
            </AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
