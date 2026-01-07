import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Po-Kay Bowls | Fresh Hawaiian Poke Bowls in Galloway, NJ",
  description: "Fresh, Hawaiian-inspired poke bowls made with bold flavors and high-quality ingredients. Order online or visit us at 68 West Jimmie Leeds Road, Galloway, NJ.",
  keywords: "poke bowls, Galloway NJ, Hawaiian poke, fresh seafood bowls, South Jersey, healthy bowls, build your own poke",
  openGraph: {
    title: "Po-Kay Bowls | Fresh Hawaiian Poke Bowls in Galloway, NJ",
    description: "Fresh, Hawaiian-inspired poke bowls made with bold flavors and high-quality ingredients.",
    type: "website",
    locale: "en_US",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
