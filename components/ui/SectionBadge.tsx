"use client";

import React from "react";

interface SectionBadgeProps {
  label: string;
  variant?: "light" | "dark" | "gradient";
  className?: string;
}

export default function SectionBadge({
  label,
  variant = "light",
  className = "",
}: SectionBadgeProps) {
  const isDark = variant === "dark";
  const isGradient = variant === "gradient";

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full backdrop-blur-md transition-all duration-300 ${isGradient
          ? "bg-white/20 border border-white/30 text-white shadow-xs"
          : isDark
            ? "bg-stone-900/90 border border-amber-500/30 text-amber-300 shadow-sm shadow-amber-950/40"
            : "bg-white/95 dark:bg-stone-900/90 border border-amber-200/90 dark:border-amber-500/30 text-amber-950 dark:text-amber-300 shadow-sm shadow-amber-500/10 hover:border-amber-400 dark:hover:border-amber-400/50"
        } ${className}`}
    >
      {/* Animated Mini Audio Equalizer Spectrum */}
      <span className="flex items-center gap-[2.5px] h-3 px-0.5" aria-hidden="true">
        <span
          className={`w-[2.5px] rounded-full animate-pulse ${isGradient
              ? "bg-white"
              : isDark
                ? "bg-amber-400"
                : "bg-amber-600 dark:bg-amber-400"
            }`}
          style={{ height: "65%", animationDuration: "1.1s" }}
        />
        <span
          className={`w-[2.5px] rounded-full animate-pulse ${isGradient
              ? "bg-white"
              : isDark
                ? "bg-amber-300"
                : "bg-amber-500 dark:bg-amber-300"
            }`}
          style={{ height: "100%", animationDuration: "0.8s" }}
        />
        <span
          className={`w-[2.5px] rounded-full animate-pulse ${isGradient
              ? "bg-white"
              : isDark
                ? "bg-amber-400"
                : "bg-amber-600 dark:bg-amber-400"
            }`}
          style={{ height: "45%", animationDuration: "1.3s" }}
        />
      </span>

      {/* Badge Text with Editorial Styling */}
      <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase">
        {label}
      </span>
    </div>
  );
}
