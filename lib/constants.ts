export interface NavItem {
  label: string;
  href: string;
}

export const NAVIGATION_LINKS: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Rights & Monetization", href: "#rights" },
  { label: "Platforms", href: "#platforms" },
  { label: "Caller Tunes", href: "#caller-tunes" },
  { label: "Contact", href: "#contact" },
];

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: "music" | "video" | "shield" | "phone" | "check" | "folder";
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "music-distribution",
    number: "01",
    title: "Music Distribution",
    description:
      "Deliver eligible releases to leading streaming, download, social, and music platforms with structured metadata.",
    iconName: "music",
  },
  {
    id: "video-channel-services",
    number: "02",
    title: "Video & Channel Services",
    description:
      "Support for eligible music-video and channel workflows, including platform-specific delivery requirements.",
    iconName: "video",
  },
  {
    id: "content-protection",
    number: "03",
    title: "Content Protection",
    description:
      "Rights-support workflows for eligible catalogs and copyright issues affecting distributed music.",
    iconName: "shield",
  },
  {
    id: "caller-tunes",
    number: "04",
    title: "Caller Tunes (CRBT)",
    description:
      "Caller tune delivery support for eligible releases across supported Indian telecom services.",
    iconName: "phone",
  },
  {
    id: "artist-support",
    number: "05",
    title: "Artist Platform Support",
    description:
      "Assistance with eligible artist profile and platform requests across major music services.",
    iconName: "check",
  },
  {
    id: "catalog-management",
    number: "06",
    title: "Catalog Management",
    description:
      "Organize labels, artists, metadata, and release information with a cleaner operational workflow.",
    iconName: "folder",
  },
];

export interface RightsFeature {
  title: string;
  description: string;
}

export const RIGHTS_FEATURES: RightsFeature[] = [
  {
    title: "Copyright Support",
    description:
      "Review and assistance for eligible rights-related distribution issues.",
  },
  {
    title: "Royalty Support",
    description:
      "Help with reporting and payment queries for distributed catalogues.",
  },
  {
    title: "Release Review",
    description:
      "Metadata, artwork, and release-information checks before delivery.",
  },
  {
    title: "Catalog Operations",
    description:
      "Structured support for labels managing multiple artists and releases.",
  },
];

export const CALLER_TUNE_CHECKLIST = [
  "Release and metadata review",
  "Telecom delivery support for eligible content",
  "Direct assistance for status queries",
];

export const ROW_1_PLATFORMS = [
  { name: "Spotify", category: "Global Streaming" },
  { name: "Apple Music", category: "Global Streaming" },
  { name: "YouTube Music", category: "Video & Streaming" },
  { name: "Amazon Music", category: "Hi-Res & Global" },
  { name: "JioSaavn", category: "India & South Asia" },
  { name: "Gaana", category: "Regional & Bollywood" },
  { name: "Wynk Music", category: "Telecom & Streaming" },
  { name: "Instagram / Meta", category: "Social Audio & Reels" },
];

export const ROW_2_PLATFORMS = [
  { name: "TikTok / ByteDance", category: "Short Video" },
  { name: "TIDAL", category: "Audiophile Stream" },
  { name: "Deezer", category: "Global Reach" },
  { name: "Shazam", category: "Music Recognition" },
  { name: "Hungama Music", category: "Indian Regional" },
  { name: "SoundCloud", category: "Discovery & Audio" },
  { name: "Pandora", category: "US Radio & Streaming" },
  { name: "Snapchat", category: "Social Stories & Sounds" },
];

export const DISTRIBUTION_PLATFORMS = [
  ...ROW_1_PLATFORMS,
  ...ROW_2_PLATFORMS,
];

export const AUDIENCE_SUPPORT_TIERS = [
  {
    tag: "FOR ARTISTS",
    title: "Release without complexity.",
    desc: "Single or album delivery with verified metadata, artist profiles, and direct telecom caller tune workflows.",
  },
  {
    tag: "FOR LABELS",
    title: "Manage your catalog at scale.",
    desc: "Multi-artist operations, organized release schedules, prioritized quality checks, and unified distribution tracking.",
  },
  {
    tag: "FOR DISTRIBUTORS",
    title: "Scale your music network.",
    desc: "Seamless ingestion, structured content pipeline, and direct support for digital ecosystem growth.",
  },
  {
    tag: "FOR CATALOG OWNERS",
    title: "Protect and monetize your music assets.",
    desc: "Long-term catalog protection, metadata correction, and comprehensive rights assistance.",
  },
];

export const HERO_HIGHLIGHTS = [
  {
    title: "Independent-first",
    subtitle: "Built for artists & labels",
  },
  {
    title: "Global delivery",
    subtitle: "Major digital platforms",
  },
  {
    title: "Rights support",
    subtitle: "Catalog protection workflows",
  },
  {
    title: "Human support",
    subtitle: "Email & WhatsApp assistance",
  },
];
