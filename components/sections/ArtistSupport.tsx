"use client";

import React from "react";
import { AUDIENCE_SUPPORT_TIERS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import SectionBadge from "@/components/ui/SectionBadge";

export default function ArtistSupport() {
  return (
    <section className="relative -mt-8 sm:-mt-12 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] z-20 py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#08080A] border-t border-slate-200/80 dark:border-zinc-800/80 shadow-xl shadow-slate-900/5 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="mb-4">
            <SectionBadge label="Ecosystem Solutions" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight mt-3">
            Tailored infrastructure <br className="hidden sm:inline" />
            <span className="text-amber-600 dark:text-amber-400">for every music stakeholder.</span>
          </h2>
          <p className="text-slate-600 dark:text-zinc-300 text-sm sm:text-base lg:text-lg mt-3 sm:mt-4 leading-relaxed">
            Whether you are launching your debut single or managing multi-artist
            catalogs, <strong className="text-slate-900 dark:text-white">Vidhi Music Group</strong> (led by Rishi Singh) gives you direct leverage across the digital music
            supply chain.
          </p>
        </div>

        {/* Editorial split rows */}
        <div className="divide-y divide-slate-200 dark:divide-zinc-800 border-y border-slate-200 dark:border-zinc-800">
          {AUDIENCE_SUPPORT_TIERS.map((tier, idx) => {
            const inquiryUrl = createWhatsAppUrl(
              `Hi Vidhi Music Group, I am inquiring regarding your solutions for ${tier.tag.replace(
                "FOR ",
                ""
              )}.`
            );

            return (
              <motion.div
                key={tier.tag}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-start lg:items-baseline group"
              >
                <div className="lg:col-span-3">
                  <span className="inline-block px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-zinc-800/80 text-slate-800 dark:text-zinc-200 text-xs font-bold tracking-wider uppercase group-hover:bg-amber-50 dark:group-hover:bg-amber-500/10 group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors shadow-2xs">
                    {tier.tag}
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {tier.title}
                  </h3>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                <div className="lg:col-span-1 flex justify-start lg:justify-end">
                  <a
                    href={inquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-300 dark:border-zinc-700 flex items-center justify-center text-slate-600 dark:text-zinc-300 group-hover:border-amber-600 dark:group-hover:border-amber-500 group-hover:bg-amber-600 group-hover:text-white dark:group-hover:text-black group-hover:scale-110 active:scale-95 transition-all duration-200 shadow-2xs"
                    aria-label={`Inquire about ${tier.tag}`}
                  >
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
