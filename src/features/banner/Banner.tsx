"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useAnimationFrame, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Lightbulb,
  Target,
  Users,
  Gem,
  Code,
  ChartNoAxesCombined,
  BrainCircuit,
  Palette,
  Megaphone,
  Cpu,
  UserRound,
  Link2,
  Handshake,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import BriizzLogoMark from "@/features/shared/BriizzLogoMark";

type OrbitNode = {
  key: string;
  en: string;
  bn: string;
  icon: LucideIcon;
  /** which orbit line (0 = inner) the node travels on */
  ring: 0 | 1 | 2;
  /** gradient for colored nodes; outer network nodes are white */
  gradient?: string;
  glow?: string;
  details: {
    en: string[];
    bn: string[];
  };
  href: string;
};

const ORBIT_NODES: OrbitNode[] = [
  // inner line
  {
    key: "needs",
    en: "Needs",
    bn: "প্রয়োজন",
    icon: Users,
    ring: 0,
    gradient: "from-blue-400 to-blue-700",
    glow: "rgba(37,99,235,0.35)",
    details: {
      en: ["Post a need", "Get matched", "Track"],
      bn: ["প্রয়োজন জানান", "ম্যাচ পান", "ট্র্যাক করুন"],
    },
    href: "/needs/new",
  },
  {
    key: "problems",
    en: "Problems",
    bn: "সমস্যা",
    icon: Target,
    ring: 0,
    gradient: "from-fuchsia-400 to-purple-700",
    glow: "rgba(168,85,247,0.35)",
    details: {
      en: ["Diagnosis", "Fixes", "Support"],
      bn: ["শনাক্তকরণ", "সমাধান", "সহায়তা"],
    },
    href: "/free-help",
  },
  {
    key: "opportunities",
    en: "Opportunities",
    bn: "সুযোগ",
    icon: Gem,
    ring: 0,
    gradient: "from-teal-300 to-teal-600",
    glow: "rgba(20,184,166,0.35)",
    details: {
      en: ["Leads", "Projects", "Growth"],
      bn: ["লিড", "প্রজেক্ট", "গ্রোথ"],
    },
    href: "/partners",
  },
  {
    key: "ideas",
    en: "Ideas",
    bn: "আইডিয়া",
    icon: Lightbulb,
    ring: 0,
    gradient: "from-emerald-400 to-green-700",
    glow: "rgba(16,185,129,0.35)",
    details: {
      en: ["Validation", "Planning", "Launch"],
      bn: ["যাচাই", "পরিকল্পনা", "লঞ্চ"],
    },
    href: "/custom-solution",
  },
  // middle line
  {
    key: "technology",
    en: "Technology",
    bn: "প্রযুক্তি",
    icon: Code,
    ring: 1,
    gradient: "from-violet-400 to-indigo-700",
    glow: "rgba(99,102,241,0.35)",
    details: {
      en: ["Web", "Apps", "Software"],
      bn: ["ওয়েব", "অ্যাপ", "সফটওয়্যার"],
    },
    href: "/solutions/tech/web",
  },
  {
    key: "business",
    en: "Business",
    bn: "বিজনেস",
    icon: ChartNoAxesCombined,
    ring: 1,
    gradient: "from-blue-500 to-indigo-900",
    glow: "rgba(30,64,175,0.35)",
    details: {
      en: ["Legal", "HR", "Accounting"],
      bn: ["আইনি", "এইচআর", "অ্যাকাউন্টিং"],
    },
    href: "/solutions/business/legal",
  },
  {
    key: "ai",
    en: "AI",
    bn: "এআই",
    icon: BrainCircuit,
    ring: 1,
    gradient: "from-sky-400 to-blue-700",
    glow: "rgba(14,165,233,0.35)",
    details: {
      en: ["AI Agents", "Chatbots", "Automation", "Data"],
      bn: ["এআই এজেন্ট", "চ্যাটবট", "অটোমেশন", "ডেটা"],
    },
    href: "/solutions",
  },
  {
    key: "design",
    en: "Design",
    bn: "ডিজাইন",
    icon: Palette,
    ring: 1,
    gradient: "from-pink-400 to-fuchsia-700",
    glow: "rgba(236,72,153,0.35)",
    details: {
      en: ["Branding", "UI/UX", "Print"],
      bn: ["ব্র্যান্ডিং", "ইউআই/ইউএক্স", "প্রিন্ট"],
    },
    href: "/services",
  },
  {
    key: "marketing",
    en: "Marketing",
    bn: "মার্কেটিং",
    icon: Megaphone,
    ring: 1,
    gradient: "from-amber-300 to-orange-600",
    glow: "rgba(249,115,22,0.35)",
    details: {
      en: ["Social", "Ads", "SEO"],
      bn: ["সোশ্যাল", "অ্যাডস", "এসইও"],
    },
    href: "/solutions/business/marketing",
  },
  {
    key: "hardware",
    en: "Hardware",
    bn: "হার্ডওয়্যার",
    icon: Cpu,
    ring: 1,
    gradient: "from-teal-400 to-cyan-800",
    glow: "rgba(13,148,136,0.35)",
    details: {
      en: ["PCs", "GPUs", "Networking"],
      bn: ["পিসি", "জিপিইউ", "নেটওয়ার্কিং"],
    },
    href: "/solutions/wholesale/gpus-electronics",
  },
  // outer line
  {
    key: "providers",
    en: "Providers",
    bn: "প্রোভাইডার",
    icon: Users,
    ring: 2,
    details: {
      en: ["Verified", "Rated", "Nationwide"],
      bn: ["ভেরিফায়েড", "রেটেড", "সারাদেশে"],
    },
    href: "/network",
  },
  {
    key: "experts",
    en: "Experts",
    bn: "এক্সপার্ট",
    icon: UserRound,
    ring: 2,
    details: {
      en: ["Consultants", "Specialists"],
      bn: ["পরামর্শক", "বিশেষজ্ঞ"],
    },
    href: "/expertise",
  },
  {
    key: "connectors",
    en: "Connectors",
    bn: "কানেক্টর",
    icon: Link2,
    ring: 2,
    details: {
      en: ["Referrals", "Rewards"],
      bn: ["রেফারেল", "রিওয়ার্ড"],
    },
    href: "/partners",
  },
  {
    key: "partners",
    en: "Partners",
    bn: "পার্টনার",
    icon: Handshake,
    ring: 2,
    details: {
      en: ["Agencies", "Suppliers"],
      bn: ["এজেন্সি", "সাপ্লায়ার"],
    },
    href: "/partners",
  },
  {
    key: "businesses",
    en: "Businesses",
    bn: "প্রতিষ্ঠান",
    icon: Building2,
    ring: 2,
    details: {
      en: ["SMEs", "Corporates"],
      bn: ["ক্ষুদ্র ব্যবসা", "কর্পোরেট"],
    },
    href: "/network",
  },
];

// Stage is 930 x 720 with the hub in the middle.
const STAGE_W = 930;
const STAGE_H = 720;
const CX = STAGE_W / 2;
const CY = STAGE_H / 2;
const TILT_DEG = -6;
const TILT = (TILT_DEG * Math.PI) / 180;

/** dir 1 = clockwise (left → right across the top), -1 = counter-clockwise. period in seconds per lap. */
const RINGS = [
  { rx: 215, ry: 150, period: 50, dir: 1 },
  { rx: 325, ry: 228, period: 70, dir: -1 },
  { rx: 430, ry: 300, period: 90, dir: 1 },
] as const;

const ellipsePath = (rx: number, ry: number, clockwise: boolean) => {
  const sweep = clockwise ? 1 : 0;
  return `M ${CX - rx} ${CY} a ${rx} ${ry} 0 1 ${sweep} ${rx * 2} 0 a ${rx} ${ry} 0 1 ${sweep} ${-rx * 2} 0`;
};

// Spread each ring's nodes evenly, with a per-ring offset so the rings don't line up.
const RING_OFFSETS = [-Math.PI / 2 + 0.4, -Math.PI / 2 - 0.2, -Math.PI / 2 + 0.6];
const NODE_PHASES = ORBIT_NODES.map((node) => {
  const siblings = ORBIT_NODES.filter((n) => n.ring === node.ring);
  const i = siblings.indexOf(node);
  return RING_OFFSETS[node.ring] + (2 * Math.PI * i) / siblings.length;
});

function nodePlacement(index: number, elapsedSec: number) {
  const node = ORBIT_NODES[index];
  const ring = RINGS[node.ring];
  const angle = NODE_PHASES[index] + ring.dir * ((2 * Math.PI * elapsedSec) / ring.period);
  const ex = ring.rx * Math.cos(angle);
  const ey = ring.ry * Math.sin(angle);
  const x = CX + ex * Math.cos(TILT) - ey * Math.sin(TILT);
  const y = CY + ex * Math.sin(TILT) + ey * Math.cos(TILT);
  // nodes toward the front (bottom) stack above the ones behind them
  const depth = (Math.sin(angle) + 1) / 2;
  // rounded so server and client render identical inline styles
  const round = (v: number) => Math.round(v * 1000) / 1000;
  return {
    x,
    y,
    left: round((x / STAGE_W) * 100),
    top: round((y / STAGE_H) * 100),
    z: 10 + Math.round(depth * 10),
  };
}

function OrbitBubble({
  node,
  index,
  setRef,
  onHoverChange,
}: {
  node: OrbitNode;
  index: number;
  setRef: (el: HTMLDivElement | null) => void;
  onHoverChange: (index: number | null) => void;
}) {
  const { language } = useLanguage();
  const [tooltipSide, setTooltipSide] = useState<"left" | "right" | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const Icon = node.icon;
  const isOuter = !node.gradient;
  const initial = nodePlacement(index, 0);

  return (
    <div
      ref={(el) => {
        wrapperRef.current = el;
        setRef(el);
      }}
      className={`absolute will-change-transform ${node.ring === 1 ? "hidden md:block" : ""}`}
      style={{
        left: `${initial.left}%`,
        top: `${initial.top}%`,
        transform: "translate(-50%, -50%)",
        zIndex: initial.z,
      }}
      onMouseEnter={() => {
        const el = wrapperRef.current;
        const stage = el?.parentElement;
        const center = el && stage ? el.getBoundingClientRect().left + el.offsetWidth / 2 - stage.getBoundingClientRect().left : 0;
        setTooltipSide(stage && center > stage.offsetWidth * 0.6 ? "left" : "right");
        onHoverChange(index);
      }}
      onMouseLeave={() => {
        setTooltipSide(null);
        onHoverChange(null);
      }}
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.7, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4 + index * 0.035, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link href={node.href} className="group flex flex-col items-center">
          <span
            className={`relative flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${isOuter
                ? "w-9 h-9 sm:w-14 sm:h-14 bg-white dark:bg-[#111a35] border border-blue-100 dark:border-white/10 text-blue-600 dark:text-blue-300 shadow-[0_8px_24px_rgba(37,99,235,0.15)]"
                : `w-9 h-9 sm:w-[64px] sm:h-[64px] bg-gradient-to-br ${node.gradient} text-white ring-2 sm:ring-4 ring-white/70 dark:ring-white/10`
              }`}
            style={node.glow ? { boxShadow: `0 10px 24px ${node.glow}` } : undefined}
          >
            {!isOuter && <span className="absolute inset-1 rounded-full bg-gradient-to-b from-white/35 to-transparent" />}
            <Icon className="relative w-4 h-4 sm:w-7 sm:h-7" strokeWidth={2} />
          </span>
          <span className="mt-1 sm:-mt-1 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/90 dark:bg-[#0d1530]/90 text-[9px] sm:text-sm font-semibold text-[#0b1b4d] dark:text-white shadow-sm whitespace-nowrap">
            {language === "bn" ? node.bn : node.en}
          </span>
        </Link>

        {tooltipSide && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`hidden sm:flex absolute top-2 items-center gap-3 w-52 p-3 rounded-xl bg-white dark:bg-[#0d1530] border border-blue-50 dark:border-white/10 shadow-[0_12px_32px_rgba(15,40,100,0.15)] ${tooltipSide === "left" ? "right-full mr-3" : "left-full ml-3"
              }`}
          >
            <div className="flex-1">
              <p className="text-xs font-semibold text-[#0b1b4d] dark:text-white">
                {language === "bn" ? node.bn : node.en}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {(language === "bn" ? node.details.bn : node.details.en).join(" • ")}
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#0b1b4d] dark:text-gray-300 shrink-0" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

function EcosystemOrbit() {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const elapsed = useRef(0);
  const hoveredIndex = useRef<number | null>(null);

  // Move every node along its ring; pause while a node is hovered so its card can be read.
  // Positions are applied as sub-pixel GPU transforms (not left/top) so motion stays smooth.
  useAnimationFrame((_, delta) => {
    const stage = stageRef.current;
    if (reduceMotion || !stage || hoveredIndex.current !== null) return;
    elapsed.current += Math.min(delta, 50) / 1000;
    const k = stage.clientWidth / STAGE_W;
    nodeRefs.current.forEach((el, i) => {
      if (!el) return;
      const p = nodePlacement(i, elapsed.current);
      if (el.style.left !== "0px") {
        el.style.left = "0px";
        el.style.top = "0px";
      }
      el.style.transform = `translate3d(${p.x * k}px, ${p.y * k}px, 0) translate(-50%, -50%)`;
      el.style.zIndex = String(p.z);
    });
  });

  return (
    <div ref={stageRef} className="relative w-full aspect-[930/720] select-none">
      {/* Radiant Central Hub Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-[480px] sm:h-[480px] rounded-full bg-blue-500/10 dark:bg-blue-600/20 blur-3xl pointer-events-none" />

      {/* the three orbit lines with travelling particles */}
      <svg viewBox={`0 0 ${STAGE_W} ${STAGE_H}`} className="absolute inset-0 w-full h-full overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id="ring-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <g transform={`rotate(${TILT_DEG} ${CX} ${CY})`}>
          {RINGS.map((ring, i) => {
            const path = ellipsePath(ring.rx, ring.ry, ring.dir === 1);
            return (
              <g key={i}>
                <path d={path} fill="none" stroke="url(#ring-stroke)" strokeWidth={1.5} />
                {!reduceMotion &&
                  [0, 0.5].map((offset) => (
                    <circle key={offset} r={3} fill={i === 1 ? "#a78bfa" : "#22d3ee"}>
                      <animateMotion
                        dur={`${ring.period / 3}s`}
                        repeatCount="indefinite"
                        begin={`${(-ring.period / 3) * offset}s`}
                        path={path}
                      />
                    </circle>
                  ))}
              </g>
            );
          })}
        </g>
      </svg>

      {/* hub with the BriizZ logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[5]">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-20 h-20 sm:w-48 sm:h-48 rounded-full bg-white/95 dark:bg-[#0d1530]/95 backdrop-blur-md border border-blue-200/80 dark:border-white/15 shadow-[0_8px_24px_rgba(37,99,235,0.12)] sm:shadow-[0_16px_40px_rgba(15,40,100,0.15)] flex flex-col items-center justify-center gap-0.5 sm:gap-2 ring-4 ring-blue-500/10 dark:ring-white/5"
        >
          <BriizzLogoMark className="w-7 h-7 sm:w-20 sm:h-20" />
          <span className="text-[10px] sm:text-2xl font-black tracking-tight text-[#0b1b4d] dark:text-white leading-none">
            BR
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">ii</span>
            ZZ
          </span>
        </motion.div>
      </div>

      {ORBIT_NODES.map((node, i) => (
        <OrbitBubble
          key={node.key}
          node={node}
          index={i}
          setRef={(el) => {
            nodeRefs.current[i] = el;
          }}
          onHoverChange={(idx) => {
            hoveredIndex.current = idx;
          }}
        />
      ))}
    </div>
  );
}

export default function Banner() {
  const { t, language } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#060b1a]">
      {/* Radiant Ambient Spotlight (Top Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[360px] sm:h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/15 via-indigo-500/5 to-transparent dark:from-blue-600/20 dark:via-indigo-950/20 dark:to-transparent pointer-events-none blur-2xl" />

      {/* Subtle Tech Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-[1536px] px-4 lg:px-10 py-10 sm:py-14 lg:py-16 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 lg:gap-6 items-center">
        {/* Copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Live Ecosystem Status Pill - Fade Up (Delay 0.08s) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-white/[0.06] backdrop-blur-md text-[11px] sm:text-[13px] font-bold tracking-[0.12em] text-[#0b1b4d] dark:text-blue-300 uppercase border border-blue-200/80 dark:border-white/15 shadow-[0_2px_12px_rgba(37,99,235,0.08)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold text-gray-500 dark:text-gray-400 sm:inline hidden">
              {t("LIVE NETWORK", "লাইভ নেটওয়ার্ক")} •
            </span>
            <span>{t("YOUR NETWORK. YOUR POSSIBILITIES.", "আপনার নেটওয়ার্ক। আপনার সম্ভাবনা।")}</span>
          </motion.div>

          {/* Headline - Fade Up (Delay 0.2s) */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-6 font-black tracking-[-0.035em] leading-[1.14] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[34px] xl:text-[46px] 2xl:text-[52px]"
          >
            <span className="block sm:whitespace-nowrap text-[#0b1b4d] dark:text-white">
              {t("The One-Stop Solution", "একক সেন্ট্রাল ওয়ান-স্টপ সমাধান")}
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300">
              {t("for the right people & providers.", "সঠিক প্রফেশনাল ও বিশ্বস্ত পার্টনারদের জন্য।")}
            </span>
          </motion.h1>

          {/* Subtext - Fade Up (Delay 0.32s) */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3.5 sm:mt-6 max-w-[500px] text-sm sm:text-lg leading-relaxed text-[#3b4766] dark:text-gray-300 font-normal"
          >
            {t(
              "BRIIZZ connects you with trusted professionals, verified providers and real opportunities — helping you move forward, faster.",
              "BRIIZZ আপনাকে বিশ্বস্ত প্রফেশনাল, ভেরিফায়েড প্রোভাইডার এবং সত্যিকারের সুযোগের সাথে যুক্ত করে — যাতে আপনি এগিয়ে যেতে পারেন দ্রুত ও নিশ্চিন্তে।"
            )}
          </motion.p>

          {/* Buttons - Fade Up (Delay 0.44s) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-10 flex flex-row flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 w-full sm:w-auto"
          >
            <Link
              href="/needs/new"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3.5 px-4 sm:px-8 py-2.5 sm:py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-[13px] sm:text-[17px] font-semibold transition-colors w-auto"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 shrink-0" />
              <span className="whitespace-nowrap">{t("Tell Us Your Need", "আপনার প্রয়োজন জানান")}</span>
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center px-4 sm:px-8 py-2.5 sm:py-4 rounded-full border border-blue-200/90 dark:border-white/20 bg-white/80 dark:bg-white/5 backdrop-blur-sm text-[#0b1b4d] dark:text-white text-[13px] sm:text-[17px] font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors w-auto"
            >
              <span className="whitespace-nowrap">{t("Explore Solutions", "সমাধান দেখুন")}</span>
            </Link>
          </motion.div>

          {/* Trust & Tangible Proof Metrics Strip - Fade Up (Delay 0.56s) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-12 pt-6 border-t border-gray-100 dark:border-white/10 w-full max-w-[520px]"
          >
            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-blue-50/60 dark:bg-white/[0.03] border border-blue-100/70 dark:border-white/5 transition-transform hover:scale-[1.02]">
                <div className="text-base sm:text-xl font-black text-[#0b1b4d] dark:text-white leading-tight">{language === "bn" ? "৬৪" : "64"}</div>
                <div className="text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 mt-0.5">{t("Districts Network", "জেলায় নেটওয়ার্ক")}</div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-2xl bg-indigo-50/60 dark:bg-white/[0.03] border border-indigo-100/70 dark:border-white/5 transition-transform hover:scale-[1.02]">
                <div className="text-base sm:text-xl font-black text-blue-600 dark:text-blue-400 leading-tight">{language === "bn" ? "৫০০+" : "500+"}</div>
                <div className="text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 mt-0.5">{t("Verified Providers", "ভেরিফায়েড পার্টনার")}</div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-2xl bg-emerald-50/60 dark:bg-white/[0.03] border border-emerald-100/70 dark:border-white/5 transition-transform hover:scale-[1.02]">
                <div className="text-base sm:text-xl font-black text-emerald-600 dark:text-emerald-400 leading-tight">{language === "bn" ? "১০০%" : "100%"}</div>
                <div className="text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 mt-0.5">{t("Direct Match", "সরাসরি কানেকশন")}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Orbit - Fade Up & Scale (Delay 0.35s) */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <EcosystemOrbit />
        </motion.div>
      </div>
    </section>
  );
}