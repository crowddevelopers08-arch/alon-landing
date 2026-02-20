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

    icons: {
    icon: [
      { url: "/fav-icon.png", sizes: "any" },
      { url: "/fav-icon.png", sizes: "16x16", type: "image/png" },
      { url: "/fav-icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/fav-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/fav-icon.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/fav-icon.png", sizes: "512x512", type: "image/png" },
    ],
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
        className={`${geistSans.variable} ${outfit.variable} antialiased`}
      >
        <AnimatedBackground >
        {children}
        </AnimatedBackground>
      </body>
    </html>
  );
}
