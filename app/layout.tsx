import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-KJ4CMGF5QB";

export const metadata: Metadata = {
  metadataBase: new URL("https://buzzyai.video"),
  title:
    "Buzzy AI Video - Your AI Director | Pro Video Engine for Everyone",
  description:
    "Buzzy AI Video aggregates Seedance, Kling, Runway, Veo and more into one pro engine, with storyboard, multi-angle camera control and real-time relighting so anyone can direct 4K cinematic shorts, animations and music videos.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  keywords: [
    "AI video generator",
    "AI director",
    "text to video",
    "image to video",
    "cinematic AI video",
    "storyboard generator",
    "AI short film maker",
    "multi-model AI video platform",
    "AI animation",
    "AI music video",
  ],
  authors: [{ name: "Buzzy AI Video" }],
  openGraph: {
    title: "Buzzy AI Video - Your AI Director",
    description:
      "Multi-model aggregation plus cinematic creative tools. Direct 4K AI videos in your browser.",
    type: "website",
    url: "https://buzzyai.video",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
