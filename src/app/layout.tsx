import "@styles/global.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cookie Croquis",
  description:
    "A minimal starter for building applications with Next.js, TypeScript, and TailwindCSS.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className}`}>{children}</body>
    </html>
  );
}
