import React, { useId } from "react";

/** BriizZ "B" mark: two lobes, a left spike, growth bars and a rising arrow. */
export default function BriizzLogoMark({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-top`} x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="55%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id={`${id}-bottom`} x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id={`${id}-spike`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
        <linearGradient id={`${id}-arrow`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      {/* top lobe */}
      <path d="M24 6 H66 C84 6 90 24 78 36 L64 43 L29 22 Q22 17 24 6 Z" fill={`url(#${id}-top)`} />
      {/* bottom lobe */}
      <path d="M58 58 L80 46 C97 58 95 90 70 93 H46 Z" fill={`url(#${id}-bottom)`} />
      {/* left spike */}
      <path d="M8 92 C18 72 30 54 46 40 L44 53 C32 63 22 77 18 92 Z" fill={`url(#${id}-spike)`} />
      {/* growth bars */}
      <rect x="27" y="77" width="6" height="15" fill="#2563eb" />
      <rect x="36" y="71" width="6" height="21" fill="#2563eb" />
      <rect x="45" y="66" width="6" height="26" fill="#3b82f6" />
      {/* rising arrow, with a gap stroke so it cuts through the shapes */}
      <path
        d="M10 90 C36 70 58 60 84 24"
        fill="none"
        strokeWidth="10"
        strokeLinecap="round"
        className="stroke-white dark:stroke-[#0d1530]"
      />
      <path d="M10 90 C36 70 58 60 84 24" fill="none" stroke={`url(#${id}-arrow)`} strokeWidth="5" strokeLinecap="round" />
      <polygon points="95,8 75,17 90,32" fill="#2563eb" />
    </svg>
  );
}
