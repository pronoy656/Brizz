"use client";

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IdCard, BadgeCheck, Search, Inbox, Package, Trophy, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Step = {
  icon: LucideIcon;
  title: { en: string; bn: string };
  desc: { en: string; bn: string };
};

const steps: Step[] = [
  {
    icon: IdCard,
    title: { en: "Create Your Profile", bn: "প্রোফাইল তৈরি করুন" },
    desc: {
      en: "Submit your business details, capabilities, and past work to our network.",
      bn: "আপনার ব্যবসার তথ্য, সক্ষমতা এবং আগের কাজ আমাদের নেটওয়ার্কে জমা দিন।",
    },
  },
  {
    icon: BadgeCheck,
    title: { en: "Get Verified", bn: "ভেরিফাইড হোন" },
    desc: {
      en: "Our team vets your credentials to give you the verified BRIIZZ badge of trust.",
      bn: "আমাদের টিম আপনার তথ্য যাচাই করে আপনাকে BRIIZZ-এর ভেরিফাইড ব্যাজ দেবে।",
    },
  },
  {
    icon: Search,
    title: { en: "We Find The Clients", bn: "ক্লায়েন্ট খুঁজে দিই আমরা" },
    desc: {
      en: "We actively source and aggregate high-intent users looking for your exact services.",
      bn: "আপনার সার্ভিস খুঁজছেন এমন আগ্রহী ক্লায়েন্টদের আমরা নিজেরাই খুঁজে বের করি।",
    },
  },
  {
    icon: Inbox,
    title: { en: "Receive Matched Leads", bn: "ম্যাচড লিড পান" },
    desc: {
      en: "Get direct introductions for projects that match your expertise. No bidding wars.",
      bn: "আপনার দক্ষতার সাথে মেলে এমন প্রজেক্টে সরাসরি পরিচয় পান। কোনো বিডিং যুদ্ধ নেই।",
    },
  },
  {
    icon: Package,
    title: { en: "Deliver the Solution", bn: "সমাধান ডেলিভারি দিন" },
    desc: {
      en: "You provide your product or service to the client, backed by our secure coordination platform.",
      bn: "আমাদের নিরাপদ কো-অর্ডিনেশন প্ল্যাটফর্মের সহায়তায় ক্লায়েন্টকে আপনার পণ্য বা সার্ভিস দিন।",
    },
  },
  {
    icon: Trophy,
    title: { en: "Grow Your Business", bn: "ব্যবসা বড় করুন" },
    desc: {
      en: "Build your reputation, receive payments securely, and scale your operations with us.",
      bn: "সুনাম গড়ুন, নিরাপদে পেমেন্ট নিন এবং আমাদের সাথে আপনার ব্যবসা বাড়ান।",
    },
  },
];

type Box = { left: number; top: number; width: number; height: number };

const CORNER = 24;
/** The line that decides which card is "active": this fraction down the viewport. */
const FOCUS_LINE = 0.55;

/** Dashed elbow from the side of card `a` to the top-center of card `b`. */
function connectorPath(a: Box, b: Box, fromLeft: boolean) {
  const y0 = a.top + a.height * 0.55;
  const xc = b.left + b.width / 2;
  const endY = b.top;
  if (fromLeft) {
    const x0 = a.left + a.width;
    return `M ${x0} ${y0} H ${xc - CORNER} Q ${xc} ${y0} ${xc} ${y0 + CORNER} V ${endY}`;
  }
  const x0 = a.left;
  return `M ${x0} ${y0} H ${xc + CORNER} Q ${xc} ${y0} ${xc} ${y0 + CORNER} V ${endY}`;
}

function Rocket() {
  // drawn pointing right; rotated to follow the line
  return (
    <svg viewBox="0 0 64 40" className="w-16 h-10" aria-hidden="true">
      <path d="M2 20 Q10 14 16 20 Q10 26 2 20 Z" fill="#f59e0b" />
      <path d="M6 20 Q11 17 16 20 Q11 23 6 20 Z" fill="#fde68a" />
      <path d="M22 9 L30 14 L22 14 Z" fill="#1e3a8a" />
      <path d="M22 31 L30 26 L22 26 Z" fill="#1e3a8a" />
      <path d="M16 13 H46 Q58 15 62 20 Q58 25 46 27 H16 Z" fill="#e0e7ff" />
      <path d="M46 13 Q58 15 62 20 Q58 25 46 27 Z" fill="#f43f5e" />
      <rect x="16" y="13" width="5" height="14" fill="#93c5fd" />
      <circle cx="35" cy="20" r="4.5" fill="#1e3a8a" />
      <circle cx="35" cy="20" r="2.2" fill="#bfdbfe" />
    </svg>
  );
}

export default function HowItWorksPartner() {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const rocketRef = useRef<HTMLDivElement>(null);

  const [boxes, setBoxes] = useState<Box[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [active, setActive] = useState(0);
  const [passed, setPassed] = useState(-1);
  const boxesRef = useRef<Box[]>([]);

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const next = cardRefs.current.map((el) =>
      el ? { left: el.offsetLeft, top: el.offsetTop, width: el.offsetWidth, height: el.offsetHeight } : { left: 0, top: 0, width: 0, height: 0 }
    );
    boxesRef.current = next;
    setBoxes(next);
    setSize({ w: container.offsetWidth, h: container.offsetHeight });
  }, []);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    cardRefs.current.forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, [measure, language]);

  // Scroll drives the active card and the rocket's position along the current connector.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const container = containerRef.current;
      const list = boxesRef.current;
      if (!container || list.length === 0) return;
      const focus = window.innerHeight * FOCUS_LINE - container.getBoundingClientRect().top;

      let current = 0;
      list.forEach((b, i) => {
        if (b.top <= focus) current = i;
      });
      setActive(current);

      // connector k runs from card k to card k+1
      let k = 0;
      for (let i = 0; i < list.length - 1; i++) {
        if (list[i].top + list[i].height * 0.55 - 220 <= focus) k = i;
      }
      const start = list[k].top + list[k].height * 0.55 - 220;
      const end = list[k + 1]?.top ?? start + 1;
      const progress = Math.min(1, Math.max(0, (focus - start) / (end - start)));
      setPassed(progress >= 1 ? k : k - 1);

      const path = pathRefs.current[k];
      const rocket = rocketRef.current;
      if (path && rocket) {
        const len = path.getTotalLength();
        const at = Math.min(len - 0.5, progress * len);
        const p = path.getPointAtLength(at);
        const q = path.getPointAtLength(Math.min(len, at + 0.5));
        const angle = (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI;
        rocket.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%) rotate(${angle}deg)`;
        rocket.style.opacity = "1";
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [boxes]);

  const paths = boxes.slice(0, -1).map((b, i) => connectorPath(b, boxes[i + 1], i % 2 === 0));

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/10 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-brand-700 dark:text-brand-400 mb-4">
            {t("How Partnering Works", "পার্টনারশিপ কীভাবে কাজ করে")}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t("You don't hunt for clients.", "আপনাকে ক্লায়েন্ট খুঁজতে হবে না।")}
            <br />
            <span className="text-brand-700 dark:text-brand-400">{t("We deliver them to you.", "আমরাই পৌঁছে দেব।")}</span>
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t(
              "Finding the right client used to mean spending thousands on marketing, bidding on cold leads, and endless negotiating. BRIIZZ acts as your dedicated growth engine. You verify your business, and our intelligent system matches you with high-intent, pre-qualified users who need exactly what you offer.",
              "সঠিক ক্লায়েন্ট পেতে আগে মার্কেটিংয়ে হাজার টাকা খরচ, ঠান্ডা লিডে বিডিং আর অবিরাম দরকষাকষি করতে হতো। BRIIZZ আপনার গ্রোথ ইঞ্জিন হিসেবে কাজ করে। আপনি ব্যবসা ভেরিফাই করুন, আমাদের সিস্টেম আপনাকে এমন ক্লায়েন্টের সাথে মেলাবে যাদের ঠিক আপনার সার্ভিসই দরকার।"
            )}
          </p>
        </div>

        {/* Zig-zag timeline */}
        <div ref={containerRef} className="relative max-w-[1060px] mx-auto">
          {/* dashed connectors + rocket (desktop) */}
          <svg
            className="hidden md:block absolute inset-0 pointer-events-none overflow-visible"
            width={size.w}
            height={size.h}
            aria-hidden="true"
          >
            {paths.map((d, i) => (
              <path
                key={i}
                ref={(el) => {
                  pathRefs.current[i] = el;
                }}
                d={d}
                fill="none"
                strokeWidth={2}
                strokeDasharray="7 7"
                className={`transition-colors duration-500 ${
                  i <= passed ? "stroke-brand-500" : "stroke-gray-400/70 dark:stroke-white/25"
                }`}
              />
            ))}
          </svg>
          <div
            ref={rocketRef}
            className="hidden md:block absolute left-0 top-0 z-20 pointer-events-none opacity-0 transition-opacity duration-300"
          >
            <Rocket />
          </div>

          {steps.map((step, i) => {
            const isActive = i === active;
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title.en}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative z-10 w-full md:w-[51%] ${i === 0 ? "mt-10" : "mt-16"} ${i % 2 === 1 ? "md:ml-[49%]" : ""}`}
              >
                <div
                  className={`relative overflow-hidden rounded-[20px] px-7 sm:px-12 pt-16 pb-9 transition-all duration-500 ${
                    isActive
                      ? "bg-brand-700 shadow-[0_20px_50px_rgba(109,40,217,0.35)]"
                      : "bg-[#f5f5f5] dark:bg-white/5"
                  }`}
                >
                  {/* lavender sheen on the active card */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-[linear-gradient(225deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.18)_22%,transparent_42%)] transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <h4
                    className={`relative text-2xl sm:text-[28px] font-bold mb-3 transition-colors duration-500 ${
                      isActive ? "text-white" : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {language === "bn" ? step.title.bn : step.title.en}
                  </h4>
                  <p
                    className={`relative text-base sm:text-[17px] leading-relaxed transition-colors duration-500 ${
                      isActive ? "text-white/90" : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {language === "bn" ? step.desc.bn : step.desc.en}
                  </p>
                </div>

                {/* illustration overlapping the card top */}
                <div
                  className={`absolute -top-9 left-7 sm:left-12 w-[72px] h-[72px] transition-transform duration-500 ${
                    isActive ? "scale-110 -rotate-6" : ""
                  }`}
                >
                  {/* yellow fill underneath, outline on top so inner details stay visible */}
                  <Icon className="absolute inset-0 w-full h-full" fill="#fcd34d" stroke="#fcd34d" strokeWidth={1.4} />
                  <Icon className="absolute inset-0 w-full h-full text-[#1e293b] dark:text-[#1e293b]" strokeWidth={1.4} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
