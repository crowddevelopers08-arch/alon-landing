import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/component/white";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anlon Skin Asthetics",
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
      <head>
        {/* Google Tag Manager - Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MJKNGR65');
            `,
          }}
        />

        {/* Google Ads Configuration and Phone Conversion Function */}
        <Script
          id="google-ads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Google Ads Phone Number Configuration
              gtag('config', 'AW-17927701020/ADBwCJy9s_wbEJyEzORC', {
                'phone_conversion_number': '9500653243'
              });

              // Phone Number Click to Call Conversion Function
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-17927701020/QgA9CJ-9s_wbEJyEzORC',
                    'value': 1.0,
                    'currency': 'INR',
                    'event_callback': callback
                });
                return false;
              }

              // Make function globally available
              window.gtag_report_conversion = gtag_report_conversion;
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${outfit.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MJKNGR65"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        
        <AnimatedBackground>
          {children}
        </AnimatedBackground>
      </body>
    </html>
  );
}