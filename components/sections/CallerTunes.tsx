"use client";

import React from "react";
import { Check, Music2, ArrowRight } from "lucide-react";
import { CALLER_TUNE_CHECKLIST } from "@/lib/constants";
import { motion } from "framer-motion";
import { createWhatsAppUrl, PRESET_MESSAGES } from "@/lib/whatsapp";
import SectionBadge from "@/components/ui/SectionBadge";

export default function CallerTunes() {
  const crbtUrl = createWhatsAppUrl(PRESET_MESSAGES.callerTunes);

  return (
    <section
      id="caller-tunes"
      className="relative -mt-8 sm:-mt-12 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] z-20 py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#08080A] border-t border-slate-200/80 dark:border-zinc-800/80 shadow-xl shadow-slate-900/5 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Heading & Elevated Checklist */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start w-full"
          >
            {/* Bespoke Audio Spectrum Section Badge */}
            <div className="mb-5 sm:mb-6">
              <SectionBadge label="Caller Tunes & CRBT" />
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight mb-4 sm:mb-5">
              Take your music <br className="hidden sm:inline" />
              <span className="text-amber-600 dark:text-amber-400">beyond streaming.</span>
            </h2>

            <p className="text-slate-600 dark:text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
              For eligible releases, <strong className="text-slate-900 dark:text-white">Vidhi Music Group</strong> can assist with caller-tune delivery
              workflows for supported Indian telecom networks.
            </p>

            {/* 3 Checklist Bars */}
            <div className="w-full space-y-3 sm:space-y-3.5 mb-7 sm:mb-8">
              {CALLER_TUNE_CHECKLIST.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="w-full flex items-center gap-3 sm:gap-3.5 px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-white dark:bg-[#121216] border border-slate-200/90 dark:border-zinc-800/90 shadow-2xs hover:border-amber-300 dark:hover:border-amber-500/40 hover:shadow-md hover:bg-slate-50/50 dark:hover:bg-zinc-800/40 transition-all duration-200"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xs shadow-2xs">
                    <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                  </span>
                  <span className="text-xs sm:text-base font-semibold text-slate-800 dark:text-zinc-200">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Animated CTA Button */}
            <a
              href={crbtUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-700 active:scale-95 shadow-md shadow-amber-600/20 hover:shadow-amber-600/35 transition-all duration-200 group overflow-hidden text-center text-sm sm:text-base"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
              <span className="relative flex items-center gap-2">
                <span>Inquire CRBT Setup</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </motion.div>

          {/* Right Column: Device Frame / Card matching Screenshot 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center w-full"
          >
            <div className="w-full max-w-lg rounded-[2.2rem] bg-slate-950 p-4 sm:p-5 shadow-2xl shadow-amber-950/15 ring-1 ring-zinc-800">
              <div className="rounded-[1.5rem] bg-white dark:bg-[#121216] p-8 sm:p-12 text-center border border-slate-100 dark:border-zinc-800 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[340px]">
                {/* Music Icon */}
                <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6 shadow-2xs">
                  <Music2 className="w-7 h-7 stroke-[2.2]" />
                </div>

                {/* Card Headline */}
                <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                  Music that follows your audience.
                </h3>

                {/* Subtitle list */}
                <p className="text-slate-500 dark:text-zinc-400 font-semibold text-sm sm:text-base tracking-wide">
                  Streaming • Social • Caller Tunes
                </p>

                {/* Telecom badging indicator */}
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800 w-full flex items-center justify-center gap-3 text-xs text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-widest">
                  <span className="text-slate-600 dark:text-zinc-300">Jio</span>
                  <span>•</span>
                  <span className="text-slate-600 dark:text-zinc-300">Airtel</span>
                  <span>•</span>
                  <span className="text-slate-600 dark:text-zinc-300">VI</span>
                  <span>•</span>
                  <span className="text-slate-600 dark:text-zinc-300">BSNL</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
