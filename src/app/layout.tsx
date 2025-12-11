import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghosal Group - Worldwide Distribution & Advertising",
  description: "India's Leading Music Platform. Official distribution, advertising, and event management wing of Ghosal Group.",
  openGraph: {
    title: "Ghosal Group - Shyam Surma CineVerse",
    description: "Empowering artists and brands with global distribution and advertising solutions.",
    url: "https://ghosalgroup.com", // Replace with actual URL
    siteName: "Ghosal Group",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public/
        width: 1200,
        height: 630,
        alt: "Ghosal Group Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghosal Group",
    description: "Worldwide Distribution & Advertising.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${greatVibes.variable} antialiased`}
      >
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
