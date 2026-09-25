import React from "react";
import Link from "next/link";
import { Home, MessageSquare } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { createWhatsAppUrl, PRESET_MESSAGES } from "@/lib/whatsapp";

export default function NotFound() {
  const whatsappUrl = createWhatsAppUrl(PRESET_MESSAGES.generalInquiry);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-white via-amber-50/20 to-transparent dark:from-[#08080A] dark:via-[#0c0c10] dark:to-[#08080A] text-slate-900 dark:text-zinc-100 transition-colors duration-400 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[650px] h-[350px] sm:h-[450px] bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Top Navigation Bar */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between relative z-20">
        <BrandLogo variant="light" size="md" />
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </header>

      {/* Main 404 Visual Content matching reference image */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="max-w-2xl w-full text-center relative">
          {/* Top orange subtitle */}
          <p className="text-sm sm:text-base md:text-lg font-bold text-amber-600 dark:text-amber-400 tracking-wide mb-1 sm:mb-2">
            We have a problem.
          </p>

          {/* Massive 404 Typography with Ambient Floating Particles */}
          <div className="relative inline-block my-1 sm:my-2">
            {/* Ambient decorative particles like the reference image */}
            <span className="absolute -top-3 -left-4 w-3 h-3 rounded-full bg-slate-300 dark:bg-white/40 animate-pulse" />
            <span className="absolute top-6 -left-8 w-1.5 h-1.5 rounded-full bg-amber-400/80 animate-ping" />
            <span className="absolute top-2 -right-6 w-3.5 h-3.5 rounded-full bg-slate-300 dark:bg-white/30" />
            <span className="absolute -top-6 right-12 w-2 h-2 rounded-full bg-amber-400/90" />
            <span className="absolute bottom-4 -left-6 w-2.5 h-2.5 rounded-full bg-slate-400/50 dark:bg-white/50" />
            <span className="absolute -bottom-2 -right-4 w-3 h-3 rounded-full bg-amber-500/60 animate-pulse" />
            <span className="absolute top-1/2 -right-10 w-2 h-2 rounded-full bg-slate-400 dark:bg-white/40" />

            <h1 className="text-8xl sm:text-9xl md:text-[11rem] lg:text-[13rem] font-black tracking-tight text-slate-950 dark:text-white leading-none select-none drop-shadow-sm">
              404
            </h1>
          </div>

          {/* "Page not found" Heading in Gold/Amber matching reference image */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-amber-600 dark:text-amber-400 tracking-tight mt-1 mb-4">
            Page not found
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed mb-8 sm:mb-10">
            The page or catalog route you are looking for doesn&apos;t exist or has moved. Return to the main stage or reach out to our team.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-700 active:scale-95 shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40 transition-all duration-200 text-sm sm:text-base cursor-pointer"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out pointer-events-none" />
              <Home className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 relative z-10" />
              <span className="relative z-10">Back to Home</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl font-bold text-slate-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-700 hover:border-amber-300 dark:hover:border-amber-500/50 shadow-2xs hover:shadow-md active:scale-95 transition-all duration-200 text-sm sm:text-base cursor-pointer"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-amber-500/10 dark:bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out pointer-events-none" />
              <MessageSquare className="w-4 h-4 text-amber-500 transition-transform group-hover:scale-110 relative z-10" />
              <span className="relative z-10">Contact Support</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer copyright */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-slate-500 dark:text-zinc-500 border-t border-slate-200/60 dark:border-zinc-800/60 relative z-20">
        <p>© {new Date().getFullYear()} Vidhi Music Group. Independent Music Distribution & Rights Management.</p>
      </footer>
    </div>
  );
}
