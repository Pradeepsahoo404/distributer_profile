import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vidhimusicgroup.in"),
  title: "Vidhi Music Group — Music Distribution, Rights & Catalog Management",
  description:
    "Vidhi Music Group (headed by Rishi Singh). Deliver releases to 150+ global streaming platforms, protect catalog rights, configure Caller Tunes (CRBT), and monetize music worldwide.",
  keywords: [
    "Vidhi Music Group",
    "Rishi Singh",
    "music distribution",
    "caller tunes",
    "CRBT",
    "catalog management",
    "rights monetization",
    "record label distribution",
    "artist services",
    "India music distribution",
    "Bihar music distributor",
  ],
  authors: [{ name: "Rishi Singh - Vidhi Music Group" }],
  creator: "Vidhi Music Group",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vidhimusicgroup.in",
    title: "Vidhi Music Group — Music Distribution, Rights & Catalog Services",
    description:
      "Deliver your music across Spotify, Apple Music, JioSaavn, Gaana, Instagram, YouTube and telecom caller tunes with unified rights protection.",
    siteName: "Vidhi Music Group",
    images: [
      {
        url: "/images/vidhi-logo.png",
        width: 978,
        height: 619,
        alt: "Vidhi Music Group Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidhi Music Group — Modern Music Distribution",
    description:
      "Your Music. Everywhere It Matters. Global streaming, Indian telecom caller tunes, and complete catalog protection.",
    images: ["/images/vidhi-logo.png"],
  },
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark preload font-sans antialiased scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var stored = localStorage.getItem('vidhi-theme');
                if (stored === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  // Default to dark mode
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
              setTimeout(function() {
                document.documentElement.classList.remove('preload');
              }, 100);
            })()`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAFAFA] dark:bg-[#08080A] text-[#09090B] dark:text-[#F4F4F5] selection:bg-amber-500 selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
