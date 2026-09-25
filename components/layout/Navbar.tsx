"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { createWhatsAppUrl, PRESET_MESSAGES } from "@/lib/whatsapp";
import BrandLogo from "@/components/ui/BrandLogo";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open (lock both html and body)
  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const yOffset = -80;
        const y =
          target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const getStartedUrl = createWhatsAppUrl(PRESET_MESSAGES.getStarted);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${mobileMenuOpen || isScrolled
            ? "bg-white/95 dark:bg-[#08080A]/95 backdrop-blur-xl shadow-sm border-b border-slate-200/90 dark:border-zinc-800/80 py-2.5 sm:py-3"
            : "bg-white/80 dark:bg-[#08080A]/80 md:bg-white/60 md:dark:bg-[#08080A]/70 backdrop-blur-md py-3 sm:py-4 border-b border-slate-200/50 dark:border-zinc-800/60"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Custom Brand Logo */}
            <BrandLogo variant="light" />

            {/* Desktop Navigation */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center space-x-1 lg:space-x-1.5"
            >
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors rounded-full hover:bg-amber-50/70 dark:hover:bg-zinc-800/60"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-2.5 lg:gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-amber-400 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-800 hover:border-amber-300 dark:hover:border-amber-500/40 rounded-xl shadow-xs active:scale-95 transition-all duration-200"
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-500" />
                <span>Inquire</span>
              </a>

              <a
                href={getStartedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 active:scale-95 rounded-xl shadow-md shadow-amber-600/25 hover:shadow-amber-600/40 transition-all duration-200 group overflow-hidden"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
                <span className="relative flex items-center gap-1.5">
                  <span>Get Started</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>

              {/* Theme Switch Button placed right after Get Started */}
              <ThemeToggle />
            </div>

            {/* Mobile Controls (Theme Toggle + Menu Toggle) */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-slate-700 dark:text-zinc-200 hover:text-slate-950 dark:hover:text-white bg-slate-100/80 dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 stroke-[2.5]" />
                ) : (
                  <Menu className="w-5 h-5 stroke-[2.5]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Navigation with Theme Support */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-x-0 top-[65px] bottom-0 z-40 bg-white dark:bg-[#0a0a0d] md:hidden flex flex-col justify-between px-6 py-8 overflow-y-auto animate-in fade-in duration-150"
        >
          {/* Mobile Links */}
          <div className="flex flex-col space-y-1 divide-y divide-slate-100 dark:divide-zinc-800">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 py-4 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-slate-400 dark:text-zinc-500" />
              </a>
            ))}
          </div>

          {/* Mobile Action CTAs */}
          <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-slate-100 dark:border-zinc-800">
            <a
              href={getStartedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 px-6 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-700 transition shadow-md shadow-amber-600/20 active:scale-95 text-base"
            >
              Get Started via WhatsApp
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full text-center py-4 px-6 rounded-xl font-bold text-slate-800 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800/80 hover:bg-slate-200 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-700 transition active:scale-95 text-base"
            >
              Leave Direct Inquiry
            </a>
          </div>
        </div>
      )}
    </>
  );
}
