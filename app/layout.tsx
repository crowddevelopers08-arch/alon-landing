import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/component/white";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alon Skin Asthetics",
  description: "Doctor-Led Hair Loss Treatment & Hair Restoration in Chennai | Anlon Clinic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${outfit.variable} antialiased`}
      >
        <AnimatedBackground >
        {children}
        </AnimatedBackground>
      </body>
    </html>
  );
}
