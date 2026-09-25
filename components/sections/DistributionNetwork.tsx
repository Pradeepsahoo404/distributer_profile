"use client";

import React from "react";
import { ROW_1_PLATFORMS, ROW_2_PLATFORMS } from "@/lib/constants";
import { PlatformIcon } from "@/components/ui/PlatformIcons";
import SectionBadge from "@/components/ui/SectionBadge";

// Helper card component keeping the exact UI
function PlatformCard({
  platform,
}: {
  platform: { name: string; category: string };
}) {
  return (
    <div className="w-[190px] sm:w-[220px] flex-shrink-0 group bg-white dark:bg-[#121216] rounded-2xl p-5 border border-slate-200/90 dark:border-zinc-800/90 shadow-2xs hover:shadow-lg hover:shadow-amber-500/10 hover:border-amber-300 dark:hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between items-center text-center cursor-default select-none mx-2 sm:mx-3">
      <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-zinc-800/80 group-hover:bg-amber-600 text-slate-700 dark:text-zinc-300 group-hover:text-white flex items-center justify-center transition-all duration-300 mb-3 shadow-2xs">
        <PlatformIcon name={platform.name} className="w-5 h-5 transition-transform group-hover:scale-110 duration-300" />
      </div>
      <span className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
        {platform.name}
      </span>
      <span className="text-[11px] font-semibold text-slate-400 dark:text-zinc-500 mt-1">
        {platform.category}
      </span>
    </div>
  );
}

export default function DistributionNetwork() {
  const row1Repeated = [
    ...ROW_1_PLATFORMS,
    ...ROW_1_PLATFORMS,
    ...ROW_1_PLATFORMS,
    ...ROW_1_PLATFORMS,
  ];
  const row2Repeated = [
    ...ROW_2_PLATFORMS,
    ...ROW_2_PLATFORMS,
    ...ROW_2_PLATFORMS,
    ...ROW_2_PLATFORMS,
  ];

  return (
    <section
      id="platforms"
      className="relative -mt-8 sm:-mt-12 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] z-20 py-16 sm:py-20 lg:py-28 bg-[#FAFAFA] dark:bg-[#0c0c0f] border-t border-slate-200/80 dark:border-zinc-800/80 shadow-xl shadow-slate-900/5 overflow-hidden transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="mb-4">
          <SectionBadge label="Global Delivery Network" />
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
          One Release. <span className="text-amber-600 dark:text-amber-400">A World of Listeners.</span>
        </h2>

        <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          Deliver your music across leading digital streaming, social media, and
          telecom platforms with synchronized metadata and timely ingestion.
        </p>
      </div>

      {/* Infinite Dual-Direction Marquee Wrapper with Smooth Edge Fade Masks */}
      <div className="relative w-full overflow-hidden py-2 sm:py-4">
        {/* Left & Right Edge Gradient Fades - perfectly matched in light and dark mode */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#FAFAFA] dark:from-[#0c0c0f] via-[#FAFAFA]/80 dark:via-[#0c0c0f]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#FAFAFA] dark:from-[#0c0c0f] via-[#FAFAFA]/80 dark:via-[#0c0c0f]/80 to-transparent z-10" />

        {/* Row 1: Scrolling continuously in the RIGHT direction */}
        <div className="flex py-2.5 sm:py-3 mb-2 sm:mb-3 overflow-hidden">
          <div className="animate-marquee-right py-1">
            {row1Repeated.map((platform, idx) => (
              <PlatformCard
                key={`row1-${platform.name}-${idx}`}
                platform={platform}
              />
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling continuously in the LEFT direction */}
        <div className="flex py-2.5 sm:py-3 overflow-hidden">
          <div className="animate-marquee-left py-1">
            {row2Repeated.map((platform, idx) => (
              <PlatformCard
                key={`row2-${platform.name}-${idx}`}
                platform={platform}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Supporting Disclaimer note */}
      <p className="text-center text-xs text-slate-400 mt-8 px-4">
        All platform logos and trademarks belong to their respective owners. Deliveries are subject to platform compliance guidelines.
      </p>
    </section>
  );
}
