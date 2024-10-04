import type { Metadata } from "next";
import "./globals.css";
import { harmonyOs } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Portixel",
  description: "The web3 AI-powered portfolio creation and workflow ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${harmonyOs.className} antialiased`}>{children}</body>
    </html>
  );
}
