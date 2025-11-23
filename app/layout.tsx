import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Agentic Studio",
  description: "Design bold digital experiences with an agentic workflow.",
  metadataBase: new URL("https://agentic-c5417bf9.vercel.app"),
  openGraph: {
    title: "Agentic Studio",
    description: "Design bold digital experiences with an agentic workflow.",
    url: "https://agentic-c5417bf9.vercel.app",
    siteName: "Agentic Studio",
    images: [
      {
        url: "/assets/og-agentic-studio.svg",
        width: 1200,
        height: 630,
        alt: "Agentic Studio website preview (vector)"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Studio",
    description: "Design bold digital experiences with an agentic workflow.",
    creator: "@agenticstudio"
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
