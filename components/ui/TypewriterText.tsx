"use client";

import React, { useState, useEffect } from "react";

interface TypewriterTextProps {
  phrases?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

const DEFAULT_PHRASES = [
  "Everywhere it matters.",
  "Across 150+ Platforms.",
  "Protected & Monetized.",
  "With Telecom Caller Tunes.",
];

export default function TypewriterText({
  phrases = DEFAULT_PHRASES,
  typingSpeed = 90,
  deletingSpeed = 45,
  delayBetween = 2200,
}: TypewriterTextProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = phrases[currentPhraseIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), delayBetween);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(fullText.slice(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    currentPhraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    delayBetween,
  ]);

  return (
    <span className="inline-flex items-baseline">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500">
        {currentText}
      </span>
      <span className="inline-block w-[3px] h-[0.9em] ml-1 bg-amber-600 animate-pulse rounded-sm align-baseline" />
    </span>
  );
}
