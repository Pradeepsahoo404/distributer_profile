"use client";

import React from "react";
import {
  Music,
  Video,
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
  FolderKanban,
  ArrowRight,
} from "lucide-react";
import { SERVICES_DATA } from "@/lib/constants";
import { motion } from "framer-motion";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import SectionBadge from "@/components/ui/SectionBadge";

const iconMap = {
  music: Music,
  video: Video,
  shield: ShieldCheck,
  phone: PhoneCall,
  check: CheckCircle2,
  folder: FolderKanban,
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative -mt-8 sm:-mt-12 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] z-20 py-16 sm:py-20 lg:py-28 bg-[#FAFAFA] dark:bg-[#0c0c0f] border-t border-slate-200/80 dark:border-zinc-800/80 shadow-xl shadow-slate-900/5 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <SectionBadge label="What We Do" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight"
          >
            Everything your catalog needs <br className="hidden sm:inline" />
            <span className="text-amber-600 dark:text-amber-400">to move forward.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base lg:text-lg mt-3 sm:mt-5 leading-relaxed"
          >
            Distribution and artist services designed for independent music
            businesses—from release delivery to rights and platform support.
          </motion.p>
        </div>

        {/* 6 Grid Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = iconMap[service.iconName];
            const inquiryUrl = createWhatsAppUrl(
              `Hi Vidhi Music Group, I'm interested in learning more about your ${service.title} services.`
            );

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white dark:bg-[#121216] rounded-3xl p-6 sm:p-9 border border-slate-200/90 dark:border-zinc-800/90 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-300 dark:hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Index number and Icon */}
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <span className="text-sm font-extrabold tracking-widest text-amber-600 dark:text-amber-400 font-mono">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-50/80 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center transition-all group-hover:bg-amber-600 group-hover:text-white dark:group-hover:text-black group-hover:rotate-6 duration-300 shadow-2xs">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 sm:mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Micro Action link with animation */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
                  <a
                    href={inquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-all gap-1.5 group-hover:translate-x-1"
                  >
                    <span>Inquire this service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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
