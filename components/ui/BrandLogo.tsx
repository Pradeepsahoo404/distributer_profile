import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({
  variant = "light",
  className = "",
  size = "md",
}: BrandLogoProps) {
  const isDark = variant === "dark";

  // Dimensions matching 978x619 (~1.58:1 aspect ratio) of the official transparent logo
  const dimensions =
    size === "lg"
      ? "h-16 sm:h-20 w-[100px] sm:w-[126px]"
      : "h-13 sm:h-15 md:h-16 w-[82px] sm:w-[94px] md:w-[101px]";

  return (
    <Link
      href="/"
      className={`group relative inline-flex items-center focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-2xl transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="Vidhi Music Group - Home"
    >
      {/* If footer (isDark): keep transparent logo as is */}
      {isDark ? (
        <div className={`relative ${dimensions} transition-transform duration-300 group-hover:scale-105`}>
          <Image
            src="/images/vidhi-logo.png"
            alt="Vidhi Music Group"
            fill
            className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] drop-shadow-[0_0_12px_rgba(245,158,11,0.35)]"
            sizes="(max-width: 640px) 85px, (max-width: 768px) 105px, 126px"
            priority
          />
        </div>
      ) : (
        /* Navbar logo: authentic black background version (in dark mode: borderless, seamless integration) */
        <div className="relative h-12 sm:h-13.5 md:h-14 w-[72px] sm:w-[80px] md:w-[84px] rounded-xl overflow-hidden bg-black shadow-md shadow-black/20 ring-1 ring-amber-500/30 group-hover:ring-amber-500/60 group-hover:shadow-amber-500/20 dark:ring-0 dark:shadow-none dark:group-hover:ring-0 transition-all duration-300">
          <Image
            src="/images/vidhi-logo-black.png"
            alt="Vidhi Music Group"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 72px, (max-width: 768px) 80px, 84px"
            priority
          />
        </div>
      )}
    </Link>
  );
}
