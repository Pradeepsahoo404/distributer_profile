"use client";

import React from "react";
import { ArrowRight, ShieldCheck, DollarSign, FileCheck, Layers } from "lucide-react";
import { RIGHTS_FEATURES } from "@/lib/constants";
import { createWhatsAppUrl, PRESET_MESSAGES } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";

const rightIcons = [ShieldCheck, DollarSign, FileCheck, Layers];

export default function RightsMonetization() {
  const talkUrl = createWhatsAppUrl(PRESET_MESSAGES.rightsMonetization);

  return (
    <section
      id="rights"
      className="relative -mt-8 sm:-mt-12 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] z-20 py-16 sm:py-24 lg:py-32 bg-[#08080A] text-white border-t border-[#26241e] shadow-2xl shadow-black/50 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-amber-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-64 sm:w-80 h-64 sm:h-80 bg-yellow-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Heading & Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start w-full"
          >
            {/* Bespoke Dark Badge with Audio Spectrum */}
            <div className="mb-5 sm:mb-6">
              <SectionBadge label="Rights & Monetization" variant="dark" />
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6">
              Protect the catalog. <br />
              <span className="text-amber-400">Track the business.</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              <strong className="text-white">Vidhi Music Group</strong> supports rights-aware music distribution with practical
              catalog review, copyright issue handling, and transparent royalty-support workflows.
            </p>

            {/* Animated CTA Button */}
            <a
              href={talkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-500 active:scale-95 shadow-lg shadow-amber-600/30 hover:shadow-amber-500/50 transition-all duration-200 group overflow-hidden text-center text-sm sm:text-base"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
              <span className="relative flex items-center">
                <span>Talk to Vidhi Music Group</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1.5" />
              </span>
            </a>
          </motion.div>

          {/* Right Column: 2x2 Dark Grid Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {RIGHTS_FEATURES.map((feature, idx) => {
              const Icon = rightIcons[idx % rightIcons.length];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-[#121214]/90 backdrop-blur-sm border border-[#26241e] rounded-2xl p-5 sm:p-7 hover:border-amber-500/50 hover:bg-[#18181b] transition-all duration-200 flex flex-col justify-between shadow-lg shadow-black/20"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-amber-950/80 border border-amber-700/50 text-amber-400 flex items-center justify-center mb-4 shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
