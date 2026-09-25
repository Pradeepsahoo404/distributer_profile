/**
 * Centralized WhatsApp Redirection & Message Builder
 * Follows Master Prompt rules: No backend API, safe URL encoding, centralized phone configuration
 */

export const WHATSAPP_CONFIG = {
  // Configured business WhatsApp & contact details
  contactPerson: "Rishi Singh",
  companyName: "Vidhi Music Group",
  phoneNumber: "916207101375",
  displayPhone: "+91 62071 01375",
  email: "info@vidhimusicgroup.in",
  displayEmail: "info@vidhimusicgroup.in",
  address: "Samastipur, Bihar, India",
};

export type InquiryType =
  | "Music Distribution"
  | "Rights Management"
  | "Content Protection"
  | "Video Services"
  | "Caller Tunes (CRBT)"
  | "Catalog Management"
  | "Artist Support"
  | "Other";

export interface ContactInquiry {
  name: string;
  email: string;
  phone: string;
  company?: string;
  interestedIn: string;
  message: string;
}

/**
 * Predefined intent-based WhatsApp messages
 */
export const PRESET_MESSAGES = {
  getStarted:
    "Hi Vidhi Music Group, I'm interested in getting started with your music distribution services. Please share more details.",
  distributeNow:
    "Hi Vidhi Music Group, I would like to distribute my music. Please guide me through the onboarding process.",
  rightsMonetization:
    "Hi Vidhi Music Group, I would like to know more about your rights management and monetization services.",
  callerTunes:
    "Hi Vidhi Music Group, I would like to inquire about Caller Tunes (CRBT) distribution for my catalog.",
  generalInquiry:
    "Hi Vidhi Music Group team, I would like to learn more about your platform and artist distribution services.",
};

/**
 * Creates a formatted WhatsApp message from a contact form submission
 */
export function buildContactInquiryMessage(data: ContactInquiry): string {
  return `Hello Vidhi Music Group Team,

I would like to make an inquiry regarding your music distribution platform.

• Name: ${data.name}
• Email: ${data.email}
• Phone: ${data.phone}
• Company / Label: ${data.company || "Individual / Independent"}
• Interested In: ${data.interestedIn}

Message:
${data.message}

Looking forward to connecting!`;
}

/**
 * Creates a formatted WhatsApp message for an infringement claim
 */
export type InfringementType = "Audio" | "Video" | "Artwork" | "Audio/Video/Artwork";

export interface InfringementReportData {
  infringementLink: string;
  originalLink: string;
  infringementType: InfringementType;
  message: string;
  reporterName?: string;
  reporterContact?: string;
}

export function buildInfringementNoticeMessage(data: InfringementReportData): string {
  return `*URGENT: CONTENT INFRINGEMENT NOTICE*
To: Vidhi Music Group Operations & Rights Team

• *Infringement Link (Distributed by Vidhi Music Group):*
${data.infringementLink}

• *Original Link (From Original Channel Or Platform):*
${data.originalLink}

• *Infringement Type:* ${data.infringementType}

• *Message / Details:*
${data.message}
${data.reporterName ? `\n• *Claimant Name:* ${data.reporterName}` : ""}
${data.reporterContact ? `• *Claimant Contact:* ${data.reporterContact}` : ""}

Please verify and take necessary copyright review/takedown action.`;
}

/**
 * Generates an openable WhatsApp URL with safely encoded message
 */
export function createWhatsAppUrl(messageText: string, customPhone?: string): string {
  const phone = customPhone || WHATSAPP_CONFIG.phoneNumber;
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${phone}?text=${encodedText}`;
}

