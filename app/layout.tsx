import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { AnimationSettingsProvider } from "@/context/AnimationContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/effects/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090c" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://zakiuhh.vercel.app"),
  title: "Zaki Ul Hassan — Vanilla Web Dev, Video Editor & Graphic Designer",
  description:
    "Personal portfolio of Zaki Ul Hassan — BCS student at COMSATS Islamabad (Wah Campus), building zero-dependency browser-native tools, creative video media, and AI integrations.",
  keywords: [
    "Zaki Ul Hassan",
    "Vanilla Web Developer",
    "Zero Dependency JavaScript",
    "COMSATS University Islamabad",
    "Video Editor",
    "Graphic Designer",
    "AI Tools Integration",
  ],
  authors: [{ name: "Zaki Ul Hassan", url: "https://github.com/zakiuhh" }],
  openGraph: {
    title: "Zaki Ul Hassan — Developer Portfolio",
    description:
      "Crafting zero-dependency web software, developer motion media, and AI integrations.",
    type: "website",
    locale: "en_US",
    siteName: "Zaki Ul Hassan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaki Ul Hassan — Portfolio",
    description: "Vanilla Web Developer & Creative Designer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg-base text-text-main selection:bg-accent selection:text-black min-h-screen flex flex-col justify-between transition-colors duration-250 overflow-x-hidden w-full`}
      >
        <ThemeProvider>
          <AnimationSettingsProvider>
            <SmoothScroll>
              <CustomCursor />
              <Navbar />
              <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
              <Footer />
            </SmoothScroll>
          </AnimationSettingsProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
