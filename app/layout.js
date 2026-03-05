/* =============================================================
   ROOT LAYOUT — app/layout.js
   =============================================================
   The root layout wraps every page in the application.
   - Imports Google Fonts (Geist Sans + Geist Mono)
   - Includes persistent Navbar and Footer
   - Sets global metadata (SEO title & description)
   - Provides dark theme class on <html>
   ============================================================= */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ---- Font Configuration ---- */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ---- SEO Metadata ---- */
export const metadata = {
  title: "YUNG DRIP — Streetwear for the Culture",
  description:
    "Discover stylish everyday wear designed for comfort and confidence. Explore curated outfits, smart recommendations, and effortless fashion for modern lifestyles.",
};

/* ---- Root Layout Component ---- */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Persistent Navbar — visible on all pages */}
        <Navbar />

        {/* Main content area — pushed below navbar, grows to fill viewport */}
        <main className="min-h-screen pt-[70px]">
          {children}
        </main>

        {/* Persistent Footer — visible on all pages */}
        <Footer />
      </body>
    </html>
  );
}
