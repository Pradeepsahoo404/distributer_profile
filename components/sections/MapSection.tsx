"use client";

import React from "react";
import { Navigation } from "lucide-react";
import { WHATSAPP_CONFIG } from "@/lib/whatsapp";
import SectionBadge from "@/components/ui/SectionBadge";

export default function MapSection() {
  return (
    <section className="relative -mt-8 sm:-mt-12 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] z-20 py-16 bg-white dark:bg-[#08080A] border-t border-slate-200/80 dark:border-zinc-800/80 shadow-xl shadow-slate-900/5 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.2rem] overflow-hidden bg-[#08080A] border border-[#26241e] p-8 sm:p-12 text-white shadow-2xl shadow-amber-950/15">
          {/* Background grid pattern & ambient pulse */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-md">
              <div className="mb-4">
                <SectionBadge label="Headquarters & Distribution Hub" variant="dark" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-2">
                Rooted in Bihar. <br className="hidden sm:inline" />
                <span className="text-amber-400">Connected Globally.</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Operating direct catalog delivery infrastructure, telecom CRBT
                routing, and digital licensing across domestic and worldwide
                territories. Led by Rishi Singh.
              </p>
            </div>

            {/* Location details card */}
            <div className="bg-[#121214]/90 border border-[#26241e] rounded-2xl p-6 w-full md:w-auto min-w-[280px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center">
                  <Navigation className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Operational Base
                  </span>
                  <span className="text-sm font-bold text-white">
                    {WHATSAPP_CONFIG.address}
                  </span>
                </div>
              </div>
              <p className="text-xs text-amber-400/90 font-medium mt-1">
                Founder / Contact: {WHATSAPP_CONFIG.contactPerson} ({WHATSAPP_CONFIG.displayPhone})
              </p>
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-amber-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                <span>Telecom & Streaming Ingestion Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
