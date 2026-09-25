"use client";

import React from "react";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import { WHATSAPP_CONFIG, createWhatsAppUrl, PRESET_MESSAGES } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";

export default function MainCTA() {
  const ctaUrl = createWhatsAppUrl(PRESET_MESSAGES.getStarted);

  return (
    <section className="relative -mt-8 sm:-mt-12 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] z-20 py-16 sm:py-24 bg-white dark:bg-[#08080A] border-t border-slate-200/80 dark:border-zinc-800/80 shadow-xl shadow-slate-900/5 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-amber-600 via-amber-600 to-yellow-700 p-7 sm:p-14 lg:p-16 text-center text-white shadow-2xl shadow-amber-600/30"
        >
          {/* Subtle decorative mesh blur */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none" />

          {/* Bespoke Gradient Badge with Audio Equalizer */}
          <div className="mb-6 flex justify-center">
            <SectionBadge label="Ready When You Are" variant="gradient" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-2xl mx-auto leading-tight mb-4">
            Ready to release with Vidhi Music Group?
          </h2>

          {/* Subtitle */}
          <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Tell us about your artist, label or catalogue. Rishi Singh and our
            operations team will review your requirements and guide you through the next step.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 mb-8">
            <a
              href="#contact"
              className="relative w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-amber-900 bg-white hover:bg-slate-50 active:scale-95 shadow-lg shadow-black/15 hover:shadow-black/25 transition-all duration-200 group text-sm sm:text-base overflow-hidden text-center"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-amber-50/50 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
              <span className="relative flex items-center justify-center">
                <span>Contact Vidhi Music Group</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1.5" />
              </span>
            </a>

            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-white bg-amber-500/35 hover:bg-amber-500/50 border border-white/25 active:scale-95 backdrop-blur-md hover:border-white/40 shadow-sm transition-all duration-200 text-sm sm:text-base group text-center"
            >
              <MessageCircle className="w-4 h-4 text-amber-200 transition-transform group-hover:scale-110" />
              <span>Instant WhatsApp</span>
            </a>
          </div>

          {/* Quick contact strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-white/90">
            <a
              href={`tel:${WHATSAPP_CONFIG.displayPhone.replace(/\s+/g, "")}`}
              className="hover:underline flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{WHATSAPP_CONFIG.displayPhone}</span>
            </a>
            <span className="hidden sm:inline text-white/50">•</span>
            <a
              href={`mailto:${WHATSAPP_CONFIG.email}`}
              className="hover:underline flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{WHATSAPP_CONFIG.displayEmail}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
