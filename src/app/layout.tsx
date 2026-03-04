import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "YungDrip | Streetwear for the Bold",
    template: "%s | YungDrip",
  },
  description:
    "YungDrip (YD) — Bold streetwear built for confident, driven youth. Premium oversized fits, luxury minimalism, raw street energy.",
  keywords: ["YungDrip", "YD", "streetwear", "urban fashion", "luxury streetwear", "oversized fits"],
  authors: [{ name: "YungDrip" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "YungDrip",
    title: "YungDrip | Streetwear for the Bold",
    description:
      "Bold streetwear built for confident, driven youth. Premium oversized fits, luxury minimalism, raw street energy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "YungDrip | Streetwear for the Bold",
    description: "Bold streetwear built for confident, driven youth.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
