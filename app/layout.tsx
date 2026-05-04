import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingActions, Footer, Header, LoadingScreen, ThemeCursor } from "@/components/site-shell";
import { company } from "@/lib/site-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asapfenceandgate.com"),
  title: {
    default: "Fence Company Bradenton FL | ASAP Fence & Gates",
    template: "%s | ASAP Fence & Gates"
  },
  description:
    "Premium fence and gate installation in Bradenton, Sarasota, Manatee County, Charlotte County, Palmetto, Lakewood Ranch, Orlando area, and nearby Florida communities.",
  keywords: [
    "Fence Company Bradenton FL",
    "Fence Installation Bradenton",
    "Vinyl Fence Installation Florida",
    "Gate Installation Bradenton",
    "Commercial Fence Company Florida",
    "Fence Repair Bradenton"
  ],
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png"
      }
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  },
  openGraph: {
    title: "ASAP Fence & Gates",
    description: "Florida fence and gate installation for homeowners, property managers, and contractors.",
    url: "https://asapfenceandgate.com",
    siteName: company.name,
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "ASAP Fence & Gates logo"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <ThemeCursor />
      </body>
    </html>
  );
}
