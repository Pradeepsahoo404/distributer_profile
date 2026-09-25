"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { HERO_HIGHLIGHTS } from "@/lib/constants";
import { createWhatsAppUrl, PRESET_MESSAGES } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";
import TypewriterText from "@/components/ui/TypewriterText";

export default function Hero() {
  const distributeUrl = createWhatsAppUrl(PRESET_MESSAGES.distributeNow);

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-amber-50/20 to-transparent dark:from-[#08080A] dark:via-[#0d0d12] dark:to-transparent">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[450px] bg-gradient-to-tr from-amber-200/30 via-yellow-200/20 to-orange-200/20 dark:from-amber-500/15 dark:via-yellow-500/10 dark:to-orange-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start w-full"
          >
            {/* Bespoke Audio Spectrum Section Badge */}
            <div className="mb-5 sm:mb-6">
              <SectionBadge label="Music Distribution for Artists & Labels" />
            </div>

            {/* Main Headline with dynamic typing effect */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.15] mb-5 sm:mb-6 min-h-[105px] sm:min-h-[140px] lg:min-h-[160px] w-full">
              <span>Your music.</span>
              <br />
              <TypewriterText
                phrases={[
                  "Everywhere it matters.",
                  "Across 150+ Platforms.",
                  "Protected & Monetized.",
                  "With Telecom Caller Tunes.",
                ]}
              />
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-zinc-300 max-w-xl leading-relaxed mb-7 sm:mb-8">
              <strong className="text-slate-900 dark:text-white font-bold">Vidhi Music Group</strong> helps independent artists and labels distribute releases,
              manage catalogues and build a professional digital music presence
              from one trusted partner.
            </p>

            {/* Responsive Animated Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href={distributeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-700 active:scale-95 shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40 transition-all duration-200 group overflow-hidden text-center text-sm sm:text-base"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
                <span className="relative flex items-center justify-center gap-2">
                  <span>Start Distributing</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl font-bold text-slate-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 border border-slate-200/90 dark:border-zinc-700/80 hover:border-amber-300 dark:hover:border-amber-500/50 shadow-2xs hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-center text-sm sm:text-base"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Explore Services</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Device Mockup / Catalog Overview Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full"
          >
            {/* Tablet frame container */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none rounded-[1.8rem] sm:rounded-[2rem] bg-slate-950 p-3 sm:p-4 shadow-2xl shadow-amber-950/20 ring-1 ring-slate-900/5 dark:ring-amber-500/20">
              {/* Screen Area */}
              <div className="relative rounded-[1.3rem] sm:rounded-[1.4rem] bg-white dark:bg-[#111116] p-4 sm:p-6 lg:p-7 overflow-hidden border border-slate-100 dark:border-zinc-800 flex flex-col justify-between min-h-[300px] sm:min-h-[340px]">
                {/* Window Dots & Label */}
                <div>
                  <div className="flex items-center gap-1.5 mb-4 sm:mb-5">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-300 dark:bg-zinc-700" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-300 dark:bg-zinc-700" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-slate-300 dark:bg-zinc-700" />
                  </div>

                  <p className="text-[10px] sm:text-[11px] font-bold tracking-widest text-amber-600 dark:text-amber-400 uppercase mb-1">
                    VIDHI MUSIC GROUP • CATALOG OVERVIEW
                  </p>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Your music business, organized.
                  </h3>
                </div>

                {/* Growth Curve Chart Graphic */}
                <div className="my-4 sm:my-6 relative h-24 sm:h-28 w-full flex items-end">
                  <svg
                    viewBox="0 0 400 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="curveFill"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,90 Q 150,15 400,20 L 400,120 L 0,120 Z"
                      fill="url(#curveFill)"
                    />
                    <path
                      d="M 0,90 Q 150,15 400,20"
                      stroke="#d97706"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-3 pt-2">
                  <div className="bg-slate-50 dark:bg-zinc-900/90 border border-slate-100 dark:border-zinc-800 rounded-xl p-2 sm:p-2.5 text-center">
                    <span className="block text-[11px] sm:text-sm font-bold text-slate-900 dark:text-white">
                      Global
                    </span>
                    <span className="block text-[9px] sm:text-[10px] text-slate-500 dark:text-zinc-400 font-medium mt-0.5">
                      Distribution
                    </span>
                  </div>
                  <div className="bg-slate-50 dark:bg-zinc-900/90 border border-slate-100 dark:border-zinc-800 rounded-xl p-2 sm:p-2.5 text-center">
                    <span className="block text-[11px] sm:text-sm font-bold text-slate-900 dark:text-white">
                      Direct
                    </span>
                    <span className="block text-[9px] sm:text-[10px] text-slate-500 dark:text-zinc-400 font-medium mt-0.5">
                      Support
                    </span>
                  </div>
                  <div className="bg-slate-50 dark:bg-zinc-900/90 border border-slate-100 dark:border-zinc-800 rounded-xl p-2 sm:p-2.5 text-center">
                    <span className="block text-[11px] sm:text-sm font-bold text-slate-900 dark:text-white">
                      Clear
                    </span>
                    <span className="block text-[9px] sm:text-[10px] text-slate-500 dark:text-zinc-400 font-medium mt-0.5">
                      Reporting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-slate-200/80 dark:border-zinc-800/80"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 dark:divide-zinc-800/80">
            {HERO_HIGHLIGHTS.map((item, idx) => (
              <div
                key={item.title}
                className={`${idx % 2 !== 0 && idx !== 0 ? "pl-2 sm:pl-4" : ""
                  } ${idx > 1 ? "pt-3 sm:pt-0" : ""} flex flex-col justify-center`}
              >
                <h4 className="text-xs sm:text-base font-bold text-slate-900 dark:text-zinc-100 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-sm text-slate-500 dark:text-zinc-400 mt-0.5 sm:mt-1">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
