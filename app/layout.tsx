import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-KJ4CMGF5QB";

export const metadata: Metadata = {
  metadataBase: new URL("https://buzzyai.video"),
  applicationName: "buzzy",
  // Every subpage title picks up the standalone brand token "buzzy".
  title: {
    default: "Buzzy AI Video - Director | Buzzy : Your  Pro Video Engine ",
    template: "%s | buzzy",
  },
  description:
    "Buzzy is a pro AI video engine: Buzzy AI Video aggregates Seedance, Kling, Runway, Veo and more into one canvas, with storyboard, multi-angle camera control and real-time relighting so anyone can direct 4K cinematic shorts, animations and music videos.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  keywords: [
    "buzzy",
    "buzzy AI",
    "buzzy video",
    "buzzy AI video",
    "buzzy AI video generator",
    "buzzy director canvas",
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
  authors: [{ name: "buzzy" }],
  openGraph: {
    title: "Buzzy AI Video - Your AI Director",
    description:
      "Buzzy is the multi-model AI video engine where you storyboard, direct the camera and relight shots in one canvas, then export 4K films in your browser.",
    type: "website",
    url: "https://buzzyai.video",
    siteName: "buzzy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buzzy AI Video - Your AI Director",
    description:
      "Buzzy aggregates Seedance, Kling, Runway and Veo, so you can direct a consistent 4K AI film from a single storyboard canvas.",
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
