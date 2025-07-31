import type React from "react";
import "@styles/global.css";
import type { Metadata } from "next";
import { Roboto_Mono, Inter } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cookie Croquis - Modern Next.js Starter",
  description:
    "A minimal, modern starter for building applications with Next.js 15, TypeScript, and TailwindCSS. Get started quickly with best practices built-in.",
  keywords: [
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "React",
    "Starter Template",
  ],
  authors: [{ name: "Razano26" }],
  openGraph: {
    title: "Cookie Croquis - Modern Next.js Starter",
    description:
      "A minimal, modern starter for building applications with Next.js 15, TypeScript, and TailwindCSS.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="font-sans antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
