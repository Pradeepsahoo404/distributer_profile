"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
  MessageSquare,
  ExternalLink,
  Music,
  Video,
  Image as ImageIcon,
  Layers,
} from "lucide-react";
import {
  ContactInquiry,
  InquiryType,
  buildContactInquiryMessage,
  createWhatsAppUrl,
  WHATSAPP_CONFIG,
  InfringementType,
  InfringementReportData,
  buildInfringementNoticeMessage,
} from "@/lib/whatsapp";
import SectionBadge from "@/components/ui/SectionBadge";
import CustomDropdown from "@/components/ui/CustomDropdown";
import { motion } from "framer-motion";

const INQUIRY_OPTIONS: InquiryType[] = [
  "Music Distribution",
  "Rights Management",
  "Content Protection",
  "Video Services",
  "Caller Tunes (CRBT)",
  "Catalog Management",
  "Artist Support",
  "Other",
];

const INFRINGEMENT_TYPES: { id: InfringementType; label: string; icon: React.ElementType }[] = [
  { id: "Audio", label: "Audio", icon: Music },
  { id: "Video", label: "Video", icon: Video },
  { id: "Artwork", label: "Artwork", icon: ImageIcon },
  { id: "Audio/Video/Artwork", label: "All / Multiple", icon: Layers },
];

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"inquiry" | "infringement">("inquiry");

  // Sync hash routing (e.g. #infringement automatically activates infringement tab)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkHash = () => {
        if (window.location.hash === "#infringement") {
          setActiveTab("infringement");
        } else if (window.location.hash === "#contact") {
          setActiveTab("inquiry");
        }
      };
      checkHash();
      window.addEventListener("hashchange", checkHash);
      return () => window.removeEventListener("hashchange", checkHash);
    }
  }, []);

  // --- General Inquiry State ---
  const [inquiryData, setInquiryData] = useState<ContactInquiry>({
    name: "",
    email: "",
    phone: "",
    company: "",
    interestedIn: "Music Distribution",
    message: "",
  });
  const [inquiryErrors, setInquiryErrors] = useState<Partial<Record<keyof ContactInquiry, string>>>({});
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryWhatsAppUrl, setInquiryWhatsAppUrl] = useState("");

  const validateInquiry = (): boolean => {
    const errs: Partial<Record<keyof ContactInquiry, string>> = {};
    if (!inquiryData.name.trim()) errs.name = "Full name is required.";
    if (!inquiryData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiryData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!inquiryData.phone.trim()) {
      errs.phone = "Phone or WhatsApp number is required.";
    } else if (inquiryData.phone.trim().length < 8) {
      errs.phone = "Please enter a valid phone number.";
    }
    if (!inquiryData.message.trim()) {
      errs.message = "Please enter a brief message or inquiry summary.";
    }
    setInquiryErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInquiry()) return;

    const messageText = buildContactInquiryMessage(inquiryData);
    const url = createWhatsAppUrl(messageText);
    setInquiryWhatsAppUrl(url);
    setInquirySubmitted(true);
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // --- Infringement Notice State ---
  const [infringementData, setInfringementData] = useState<InfringementReportData>({
    infringementLink: "",
    originalLink: "",
    infringementType: "Audio",
    message: "",
    reporterName: "",
    reporterContact: "",
  });
  const [infringementErrors, setInfringementErrors] = useState<Partial<Record<keyof InfringementReportData, string>>>({});
  const [infringementSubmitted, setInfringementSubmitted] = useState(false);
  const [infringementWhatsAppUrl, setInfringementWhatsAppUrl] = useState("");

  const validateInfringement = (): boolean => {
    const errs: Partial<Record<keyof InfringementReportData, string>> = {};
    if (!infringementData.infringementLink.trim()) {
      errs.infringementLink = "Please provide the link distributed by Vidhi Music Group.";
    } else if (!/^https?:\/\//i.test(infringementData.infringementLink.trim())) {
      errs.infringementLink = "Please include a valid URL (starting with http:// or https://).";
    }

    if (!infringementData.originalLink.trim()) {
      errs.originalLink = "Please provide the original reference link or channel URL.";
    } else if (!/^https?:\/\//i.test(infringementData.originalLink.trim())) {
      errs.originalLink = "Please include a valid URL (starting with http:// or https://).";
    }

    if (!infringementData.message.trim()) {
      errs.message = "Please describe the claim, ownership or timestamps.";
    } else if (infringementData.message.trim().length < 15) {
      errs.message = "Please provide at least 15 characters of detail.";
    }

    setInfringementErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInfringementSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInfringement()) return;

    const messageText = buildInfringementNoticeMessage(infringementData);
    const url = createWhatsAppUrl(messageText);
    setInfringementWhatsAppUrl(url);
    setInfringementSubmitted(true);
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="contact"
      className="relative -mt-8 sm:-mt-12 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] z-20 py-16 sm:py-20 lg:py-28 bg-[#FAFAFA] dark:bg-[#0c0c0f] border-t border-slate-200/80 dark:border-zinc-800/80 shadow-xl shadow-slate-900/5 transition-colors duration-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sleek Segmented Pill Switcher between Inquiry and Infringement */}
        <div className="flex items-center justify-center mb-10 sm:mb-14">
          <div className="relative inline-flex p-1.5 rounded-2xl bg-slate-200/70 dark:bg-zinc-900/90 border border-slate-300/70 dark:border-zinc-800 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("inquiry")}
              className={`relative z-10 inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-200 cursor-pointer select-none ${
                activeTab === "inquiry"
                  ? "text-white"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <MessageSquare className={`w-4 h-4 transition-colors ${activeTab === "inquiry" ? "text-white" : "text-amber-600 dark:text-amber-400"}`} />
              <span>General Inquiry</span>
              {activeTab === "inquiry" && (
                <motion.div
                  layoutId="activeContactTab"
                  className="absolute inset-0 bg-amber-600 rounded-xl shadow-md shadow-amber-600/30 -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("infringement")}
              className={`relative z-10 inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-200 cursor-pointer select-none ${
                activeTab === "infringement"
                  ? "text-white"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <ShieldAlert className={`w-4 h-4 transition-colors ${activeTab === "infringement" ? "text-white" : "text-amber-600 dark:text-amber-400"}`} />
              <span>Report Infringement</span>
              {activeTab === "infringement" && (
                <motion.div
                  layoutId="activeContactTab"
                  className="absolute inset-0 bg-amber-600 rounded-xl shadow-md shadow-amber-600/30 -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Context dynamically changes based on active tab */}
          <div className="lg:col-span-5">
            {activeTab === "inquiry" ? (
              <>
                <div className="mb-5">
                  <SectionBadge label="Direct Inquiries" />
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight mb-4 sm:mb-5">
                  Let&apos;s build your <br className="hidden sm:inline" />
                  <span className="text-amber-600 dark:text-amber-400">music footprint.</span>
                </h2>
                <p className="text-slate-600 dark:text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  Fill out your details to generate a formatted inquiry. Our
                  operations team handles distribution, catalog transfers, and
                  rights queries directly over WhatsApp and email.
                </p>
              </>
            ) : (
              <>
                <div className="mb-5">
                  <SectionBadge label="Content Protection & Copyright" />
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight mb-4 sm:mb-5">
                  Notice of <br className="hidden sm:inline" />
                  <span className="text-amber-600 dark:text-amber-400">Infringement.</span>
                </h2>
                <p className="text-slate-600 dark:text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                  Vidhi Music Group maintains a strict policy regarding intellectual property
                  and copyright authenticity. If you believe any track, video, or artwork
                  distributed through our services infringes your rights, submit the details below.
                </p>
              </>
            )}

            {/* Direct Contact details (Shared on both tabs) */}
            <div className="space-y-4 sm:space-y-5 border-t border-slate-200 dark:border-zinc-800 pt-6 sm:pt-8">
              <div>
                <span className="block text-xs font-extrabold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                  Direct WhatsApp & Phone
                </span>
                <a
                  href={`tel:${WHATSAPP_CONFIG.displayPhone.replace(/\s+/g, "")}`}
                  className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  {WHATSAPP_CONFIG.displayPhone}
                </a>
              </div>

              <div>
                <span className="block text-xs font-extrabold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                  Operations & Inquiries Email
                </span>
                <a
                  href={`mailto:${WHATSAPP_CONFIG.email}`}
                  className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  {WHATSAPP_CONFIG.displayEmail}
                </a>
              </div>

              <div>
                <span className="block text-xs font-extrabold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                  Head Office Address
                </span>
                <span className="text-sm font-semibold text-slate-800 dark:text-zinc-200">
                  {WHATSAPP_CONFIG.address}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 pt-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <span>Zero spam guarantee. Fast response within 24 hours.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Container */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white dark:bg-[#121216] rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-zinc-800/90 shadow-sm transition-all">
              {/* TAB 1: GENERAL INQUIRY FORM */}
              {activeTab === "inquiry" && (
                !inquirySubmitted ? (
                  <form onSubmit={handleInquirySubmit} noValidate className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
                        >
                          Full Name <span className="text-amber-600">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={inquiryData.name}
                          onChange={(e) =>
                            setInquiryData({ ...inquiryData, name: e.target.value })
                          }
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 dark:bg-zinc-900/90 dark:text-white dark:placeholder-zinc-500 ${
                            inquiryErrors.name
                              ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                              : "border-slate-200 dark:border-zinc-700 focus:border-amber-500 focus:ring-amber-100 dark:focus:ring-amber-500/20"
                          }`}
                        />
                        {inquiryErrors.name && (
                          <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{inquiryErrors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
                        >
                          Email Address <span className="text-amber-600">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={inquiryData.email}
                          onChange={(e) =>
                            setInquiryData({ ...inquiryData, email: e.target.value })
                          }
                          placeholder="you@recordlabel.com"
                          className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 dark:bg-zinc-900/90 dark:text-white dark:placeholder-zinc-500 ${
                            inquiryErrors.email
                              ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                              : "border-slate-200 dark:border-zinc-700 focus:border-amber-500 focus:ring-amber-100 dark:focus:ring-amber-500/20"
                          }`}
                        />
                        {inquiryErrors.email && (
                          <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{inquiryErrors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
                        >
                          Phone / WhatsApp <span className="text-amber-600">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={inquiryData.phone}
                          onChange={(e) =>
                            setInquiryData({ ...inquiryData, phone: e.target.value })
                          }
                          placeholder="+91 62071 01375"
                          className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 dark:bg-zinc-900/90 dark:text-white dark:placeholder-zinc-500 ${
                            inquiryErrors.phone
                              ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                              : "border-slate-200 dark:border-zinc-700 focus:border-amber-500 focus:ring-amber-100 dark:focus:ring-amber-500/20"
                          }`}
                        />
                        {inquiryErrors.phone && (
                          <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{inquiryErrors.phone}</span>
                          </p>
                        )}
                      </div>

                      {/* Company / Label */}
                      <div>
                        <label
                          htmlFor="contact-company"
                          className="block text-xs font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
                        >
                          Artist / Label Name <span className="text-slate-400 text-[11px] font-normal lowercase">(optional)</span>
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          value={inquiryData.company}
                          onChange={(e) =>
                            setInquiryData({ ...inquiryData, company: e.target.value })
                          }
                          placeholder="e.g. Sonic Wave Records"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 text-sm font-medium focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 dark:focus:ring-amber-500/20 dark:bg-zinc-900/90 dark:text-white dark:placeholder-zinc-500"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type Custom Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                        I am interested in <span className="text-amber-600">*</span>
                      </label>
                      <CustomDropdown
                        options={INQUIRY_OPTIONS}
                        value={inquiryData.interestedIn}
                        onChange={(val) =>
                          setInquiryData({ ...inquiryData, interestedIn: val })
                        }
                      />
                    </div>

                    {/* Message Area */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
                      >
                        Message / Catalog Details <span className="text-amber-600">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        value={inquiryData.message}
                        onChange={(e) =>
                          setInquiryData({ ...inquiryData, message: e.target.value })
                        }
                        placeholder="Tell us about your catalogue size, upcoming release dates, or specific services needed..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 resize-none dark:bg-zinc-900/90 dark:text-white dark:placeholder-zinc-500 ${
                          inquiryErrors.message
                            ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                            : "border-slate-200 dark:border-zinc-700 focus:border-amber-500 focus:ring-amber-100 dark:focus:ring-amber-500/20"
                        }`}
                      />
                      {inquiryErrors.message && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{inquiryErrors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-700 active:scale-95 shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40 transition-all duration-200 text-sm sm:text-base cursor-pointer"
                    >
                      <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out pointer-events-none" />
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5 relative z-10" />
                      <span className="relative z-10">Send via WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-center text-slate-500 dark:text-zinc-500">
                      Redirects directly to WhatsApp with your pre-filled inquiry.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-amber-600/15 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                      Inquiry Ready to Send!
                    </h3>
                    <p className="text-slate-600 dark:text-zinc-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                      Your message has been compiled. If WhatsApp did not open automatically, click the button below to connect with our operations team.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={inquiryWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-700 transition-all shadow-md shadow-amber-600/20 text-sm"
                      >
                        <span>Open WhatsApp</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <button
                        type="button"
                        onClick={() => setInquirySubmitted(false)}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors text-sm border border-slate-200 dark:border-zinc-700"
                      >
                        Edit Details
                      </button>
                    </div>
                  </div>
                )
              )}

              {/* TAB 2: INFRINGEMENT NOTICE FORM */}
              {activeTab === "infringement" && (
                !infringementSubmitted ? (
                  <form onSubmit={handleInfringementSubmit} noValidate className="space-y-4 sm:space-y-5">
                    {/* Field 1: Infringement Link */}
                    <div>
                      <label
                        htmlFor="infringement-link"
                        className="block text-xs font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
                      >
                        Infringement Link (Distributed By Vidhi Music Group) <span className="text-amber-600">*</span>
                      </label>
                      <input
                        id="infringement-link"
                        type="url"
                        value={infringementData.infringementLink}
                        onChange={(e) =>
                          setInfringementData({ ...infringementData, infringementLink: e.target.value })
                        }
                        placeholder="e.g. https://open.spotify.com/track/... or YouTube link"
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 dark:bg-zinc-900/90 dark:text-white dark:placeholder-zinc-500 ${
                          infringementErrors.infringementLink
                            ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                            : "border-slate-200 dark:border-zinc-700 focus:border-amber-500 focus:ring-amber-100 dark:focus:ring-amber-500/20"
                        }`}
                      />
                      {infringementErrors.infringementLink && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{infringementErrors.infringementLink}</span>
                        </p>
                      )}
                    </div>

                    {/* Field 2: Original Link */}
                    <div>
                      <label
                        htmlFor="original-link"
                        className="block text-xs font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
                      >
                        Original Link (From Original Channel Or Platform) <span className="text-amber-600">*</span>
                      </label>
                      <input
                        id="original-link"
                        type="url"
                        value={infringementData.originalLink}
                        onChange={(e) =>
                          setInfringementData({ ...infringementData, originalLink: e.target.value })
                        }
                        placeholder="e.g. https://youtube.com/watch?v=... or Official Channel link"
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 dark:bg-zinc-900/90 dark:text-white dark:placeholder-zinc-500 ${
                          infringementErrors.originalLink
                            ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                            : "border-slate-200 dark:border-zinc-700 focus:border-amber-500 focus:ring-amber-100 dark:focus:ring-amber-500/20"
                        }`}
                      />
                      {infringementErrors.originalLink && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{infringementErrors.originalLink}</span>
                        </p>
                      )}
                    </div>

                    {/* Field 3: Infringement Type Selectable Buttons */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                        Infringement Type <span className="text-amber-600">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {INFRINGEMENT_TYPES.map((type) => {
                          const Icon = type.icon;
                          const isSelected = infringementData.infringementType === type.id;
                          return (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() =>
                                setInfringementData({ ...infringementData, infringementType: type.id })
                              }
                              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-bold transition-all duration-200 select-none cursor-pointer ${
                                isSelected
                                  ? "bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-600/20"
                                  : "bg-slate-50 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-zinc-700/80 hover:border-amber-300 dark:hover:border-amber-500/40"
                              }`}
                            >
                              <Icon className={`w-3.5 h-3.5 mb-1 ${isSelected ? "text-white" : "text-amber-600 dark:text-amber-400"}`} />
                              <span>{type.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Field 4: Message / Details */}
                    <div>
                      <label
                        htmlFor="infringement-message"
                        className="block text-xs font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider mb-2"
                      >
                        Message / Claim Details <span className="text-amber-600">*</span>
                      </label>
                      <textarea
                        id="infringement-message"
                        rows={3}
                        value={infringementData.message}
                        onChange={(e) =>
                          setInfringementData({ ...infringementData, message: e.target.value })
                        }
                        placeholder="Detail the track name, label ownership, copyright registration, or timestamps of infringement..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 resize-none dark:bg-zinc-900/90 dark:text-white dark:placeholder-zinc-500 ${
                          infringementErrors.message
                            ? "border-rose-400 focus:ring-rose-200 bg-rose-50/20"
                            : "border-slate-200 dark:border-zinc-700 focus:border-amber-500 focus:ring-amber-100 dark:focus:ring-amber-500/20"
                        }`}
                      />
                      {infringementErrors.message && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{infringementErrors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Optional Submitter Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div>
                        <label
                          htmlFor="reporter-name"
                          className="block text-xs font-bold text-slate-600 dark:text-zinc-400 uppercase tracking-wider mb-1"
                        >
                          Claimant Name <span className="text-slate-400 text-[10px] lowercase font-normal">(optional)</span>
                        </label>
                        <input
                          id="reporter-name"
                          type="text"
                          value={infringementData.reporterName}
                          onChange={(e) =>
                            setInfringementData({ ...infringementData, reporterName: e.target.value })
                          }
                          placeholder="Your name or organization"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 text-sm font-medium focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 dark:focus:ring-amber-500/20 dark:bg-zinc-900/90 dark:text-white dark:placeholder-zinc-500"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="reporter-contact"
                          className="block text-xs font-bold text-slate-600 dark:text-zinc-400 uppercase tracking-wider mb-1"
                        >
                          Contact Email / Phone <span className="text-slate-400 text-[10px] lowercase font-normal">(optional)</span>
                        </label>
                        <input
                          id="reporter-contact"
                          type="text"
                          value={infringementData.reporterContact}
                          onChange={(e) =>
                            setInfringementData({ ...infringementData, reporterContact: e.target.value })
                          }
                          placeholder="you@email.com or +91..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 text-sm font-medium focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 dark:focus:ring-amber-500/20 dark:bg-zinc-900/90 dark:text-white dark:placeholder-zinc-500"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-700 active:scale-95 shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40 transition-all duration-200 text-sm sm:text-base cursor-pointer"
                      >
                        <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out pointer-events-none" />
                        <ShieldAlert className="w-4 h-4 transition-transform group-hover:scale-110 relative z-10" />
                        <span className="relative z-10">Submit Infringement Notice</span>
                      </button>
                      <p className="text-[11px] text-center text-slate-500 dark:text-zinc-500 mt-2">
                        Notice will be securely dispatched to Vidhi Music Group Rights Desk via WhatsApp.
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-amber-600/15 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                      Notice Prepared Successfully!
                    </h3>
                    <p className="text-slate-600 dark:text-zinc-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                      Your infringement notice has been formatted. If WhatsApp did not open automatically, click the button below to reach our rights team.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={infringementWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-700 transition-all shadow-md shadow-amber-600/20 text-sm"
                      >
                        <span>Open WhatsApp</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <button
                        type="button"
                        onClick={() => setInfringementSubmitted(false)}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors text-sm border border-slate-200 dark:border-zinc-700"
                      >
                        Submit Another Notice
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
