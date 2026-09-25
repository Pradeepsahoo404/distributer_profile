"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface CustomDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  id?: string;
}

export default function CustomDropdown({
  options,
  value,
  onChange,
  id,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-slate-200/90 dark:border-zinc-700 bg-white dark:bg-zinc-900/90 text-slate-800 dark:text-zinc-100 text-sm font-medium hover:border-amber-300 dark:hover:border-amber-500/50 hover:bg-slate-50/50 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-amber-100 dark:focus:ring-amber-500/20 focus:border-amber-500 shadow-2xs transition-all duration-200 cursor-pointer"
      >
        <span>{value || "Select Service"}</span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 dark:text-zinc-500 transition-transform duration-200 ${isOpen ? "rotate-180 text-amber-600 dark:text-amber-400" : ""
            }`}
        />
      </button>

      {/* Dropdown Menu Popup */}
      {isOpen && (
        <div
          role="listbox"
          tabIndex={-1}
          className="absolute left-0 right-0 z-50 mt-1.5 max-h-60 overflow-y-auto rounded-2xl bg-white/95 dark:bg-[#15151a]/95 backdrop-blur-xl border border-slate-200 dark:border-zinc-800 shadow-xl shadow-slate-900/10 dark:shadow-black/60 p-1.5 focus:outline-none animate-in fade-in zoom-in-95 duration-150"
        >
          {options.map((option) => {
            const isSelected = option === value;
            return (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left cursor-pointer ${isSelected
                    ? "bg-amber-600 text-white font-semibold shadow-xs"
                    : "text-slate-700 dark:text-zinc-200 hover:bg-amber-50/80 dark:hover:bg-zinc-800/80 hover:text-amber-800 dark:hover:text-amber-300"
                  }`}
              >
                <span>{option}</span>
                {isSelected && (
                  <Check className="w-4 h-4 text-white stroke-[2.5]" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
