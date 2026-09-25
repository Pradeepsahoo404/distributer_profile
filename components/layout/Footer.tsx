import React from "react";
import { WHATSAPP_CONFIG } from "@/lib/whatsapp";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative -mt-8 sm:-mt-12 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] z-30 bg-[#08080A] text-white border-t border-[#26241e] shadow-2xl shadow-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
          {/* Brand Info with Custom Logo */}
          <div className="sm:col-span-2 md:col-span-6 lg:col-span-5">
            <div className="mb-4">
              <BrandLogo variant="dark" size="lg" />
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
              Independent music distribution, rights management, and caller tune
              services for visionary artists and record labels. Powered by
              Vidhi Music Group.
            </p>
            <div className="text-xs text-amber-400/90 font-semibold tracking-wide">
              Contact: {WHATSAPP_CONFIG.contactPerson}
            </div>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-xs font-extrabold text-slate-300 uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Music Distribution
                </a>
              </li>
              <li>
                <a
                  href="#rights"
                  className="hover:text-amber-400 transition-colors"
                >
                  Rights Support
                </a>
              </li>
              <li>
                <a
                  href="#caller-tunes"
                  className="hover:text-amber-400 transition-colors"
                >
                  Caller Tunes
                </a>
              </li>
              <li>
                <a
                  href="#platforms"
                  className="hover:text-amber-400 transition-colors"
                >
                  Digital Platforms
                </a>
              </li>
              <li>
                <a
                  href="#infringement"
                  className="hover:text-amber-400 transition-colors"
                >
                  Report Infringement
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-xs font-extrabold text-slate-300 uppercase tracking-widest mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li>
                <a
                  href={`mailto:${WHATSAPP_CONFIG.email}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {WHATSAPP_CONFIG.displayEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${WHATSAPP_CONFIG.displayPhone.replace(/\s+/g, "")}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {WHATSAPP_CONFIG.displayPhone}
                </a>
              </li>
              <li className="text-slate-400">
                {WHATSAPP_CONFIG.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Vidhi Music Group. Managed by Rishi Singh. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-medium">
            <span>vidhimusicgroup.in</span>
            <span>•</span>
            <span>Made for independent music</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
