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
  details: string[];
  href: string;
};

const ORBIT_NODES: OrbitNode[] = [
  // inner line
  { key: "needs", en: "Needs", bn: "প্রয়োজন", icon: Users, ring: 0, gradient: "from-blue-400 to-blue-700", glow: "rgba(37,99,235,0.35)", details: ["Post a need", "Get matched", "Track"], href: "/needs/new" },
  { key: "problems", en: "Problems", bn: "সমস্যা", icon: Target, ring: 0, gradient: "from-fuchsia-400 to-purple-700", glow: "rgba(168,85,247,0.35)", details: ["Diagnosis", "Fixes", "Support"], href: "/free-help" },
  { key: "opportunities", en: "Opportunities", bn: "সুযোগ", icon: Gem, ring: 0, gradient: "from-teal-300 to-teal-600", glow: "rgba(20,184,166,0.35)", details: ["Leads", "Projects", "Growth"], href: "/partners" },
  { key: "ideas", en: "Ideas", bn: "আইডিয়া", icon: Lightbulb, ring: 0, gradient: "from-emerald-400 to-green-700", glow: "rgba(16,185,129,0.35)", details: ["Validation", "Planning", "Launch"], href: "/custom-solution" },
  // middle line
  { key: "technology", en: "Technology", bn: "প্রযুক্তি", icon: Code, ring: 1, gradient: "from-violet-400 to-indigo-700", glow: "rgba(99,102,241,0.35)", details: ["Web", "Apps", "Software"], href: "/solutions/tech/web" },
  { key: "business", en: "Business", bn: "বিজনেস", icon: ChartNoAxesCombined, ring: 1, gradient: "from-blue-500 to-indigo-900", glow: "rgba(30,64,175,0.35)", details: ["Legal", "HR", "Accounting"], href: "/solutions/business/legal" },
  { key: "ai", en: "AI", bn: "এআই", icon: BrainCircuit, ring: 1, gradient: "from-sky-400 to-blue-700", glow: "rgba(14,165,233,0.35)", details: ["AI Agents", "Chatbots", "Automation", "Data"], href: "/solutions" },
  { key: "design", en: "Design", bn: "ডিজাইন", icon: Palette, ring: 1, gradient: "from-pink-400 to-fuchsia-700", glow: "rgba(236,72,153,0.35)", details: ["Branding", "UI/UX", "Print"], href: "/services" },
  { key: "marketing", en: "Marketing", bn: "মার্কেটিং", icon: Megaphone, ring: 1, gradient: "from-amber-300 to-orange-600", glow: "rgba(249,115,22,0.35)", details: ["Social", "Ads", "SEO"], href: "/solutions/business/marketing" },
  { key: "hardware", en: "Hardware", bn: "হার্ডওয়্যার", icon: Cpu, ring: 1, gradient: "from-teal-400 to-cyan-800", glow: "rgba(13,148,136,0.35)", details: ["PCs", "GPUs", "Networking"], href: "/solutions/wholesale/gpus-electronics" },
  // outer line
  { key: "providers", en: "Providers", bn: "প্রোভাইডার", icon: Users, ring: 2, details: ["Verified", "Rated", "Nationwide"], href: "/network" },
  { key: "experts", en: "Experts", bn: "এক্সপার্ট", icon: UserRound, ring: 2, details: ["Consultants", "Specialists"], href: "/expertise" },
  { key: "connectors", en: "Connectors", bn: "কানেক্টর", icon: Link2, ring: 2, details: ["Referrals", "Rewards"], href: "/partners" },
  { key: "partners", en: "Partners", bn: "পার্টনার", icon: Handshake, ring: 2, details: ["Agencies", "Suppliers"], href: "/partners" },
  { key: "businesses", en: "Businesses", bn: "প্রতিষ্ঠান", icon: Building2, ring: 2, details: ["SMEs", "Corporates"], href: "/network" },
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
      className="absolute will-change-transform"
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
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 + index * 0.05, type: "spring", stiffness: 160, damping: 16 }}
      >
        <Link href={node.href} className="group flex flex-col items-center">
          <span
            className={`relative flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
              isOuter
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
            className={`hidden sm:flex absolute top-2 items-center gap-3 w-52 p-3 rounded-xl bg-white dark:bg-[#0d1530] border border-blue-50 dark:border-white/10 shadow-[0_12px_32px_rgba(15,40,100,0.15)] ${
              tooltipSide === "left" ? "right-full mr-3" : "left-full ml-3"
            }`}
          >
            <div className="flex-1">
              <p className="text-xs font-semibold text-[#0b1b4d] dark:text-white">
                {language === "bn" ? node.bn : node.en}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {node.details.join(" • ")}
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
          className="w-28 h-28 sm:w-48 sm:h-48 rounded-full bg-white dark:bg-[#0d1530] border border-blue-100 dark:border-white/10 shadow-[0_16px_40px_rgba(15,40,100,0.12)] flex flex-col items-center justify-center gap-1 sm:gap-2"
        >
          <BriizzLogoMark className="w-12 h-12 sm:w-20 sm:h-20" />
          <span className="text-sm sm:text-2xl font-black tracking-tight text-[#0b1b4d] dark:text-white leading-none">
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
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#060b1a]">
      <div className="relative mx-auto max-w-[1536px] px-4 lg:px-10 py-12 lg:py-16 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-6 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-2 rounded-md bg-blue-100/70 dark:bg-blue-500/10 text-[13px] font-semibold tracking-[0.18em] text-[#1e3a8a] dark:text-blue-300">
            {t("THE BRIIZZ ECOSYSTEM", "BRIIZZ ইকোসিস্টেম")}
          </span>

          <h1 className="mt-8 font-extrabold tracking-[-0.035em] leading-[1.05] text-[44px] sm:text-6xl xl:text-[76px]">
            <span className="block text-[#0b1b4d] dark:text-white">{t("One Platform.", "একটি প্ল্যাটফর্ম।")}</span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-600 to-blue-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
              {t("Every Solution.", "সব সমাধান।")}
            </span>
          </h1>

          <p className="mt-8 max-w-[460px] text-lg sm:text-xl leading-relaxed text-[#3b4766] dark:text-gray-300">
            {t(
              "Tell us what you need. BriizZ connects you with the right people, expertise, and solutions to make it happen.",
              "আপনার কী প্রয়োজন বলুন। BriizZ আপনাকে সঠিক মানুষ, দক্ষতা ও সমাধানের সাথে যুক্ত করে।"
            )}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/needs/new"
              className="group inline-flex items-center gap-4 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-[17px] font-semibold shadow-[0_12px_28px_rgba(37,99,235,0.35)] transition-colors"
            >
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              {t("Tell Us What You Need", "আপনার প্রয়োজন জানান")}
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center px-8 py-4 rounded-full border border-blue-200 dark:border-white/20 bg-white/60 dark:bg-white/5 text-[#0b1b4d] dark:text-white text-[17px] font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              {t("Explore Solutions", "সমাধান দেখুন")}
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-2 sm:gap-4 max-w-[500px] text-[13px] sm:text-[15px] text-gray-500 dark:text-gray-400">
            <span className="h-px flex-1 min-w-4 bg-gray-200 dark:bg-white/10" />
            <span className="whitespace-nowrap">{t("Connecting Needs", "প্রয়োজন সংযোগ")}</span>
            <span className="w-1 h-1 rounded-full bg-blue-600" />
            <span>{t("Expertise", "দক্ষতা")}</span>
            <span className="w-1 h-1 rounded-full bg-blue-600" />
            <span>{t("Opportunities", "সুযোগ")}</span>
            <span className="h-px flex-1 min-w-4 bg-gray-200 dark:bg-white/10" />
          </div>
        </motion.div>

        {/* Orbit */}
        <EcosystemOrbit />
      </div>
    </section>
  );
}
