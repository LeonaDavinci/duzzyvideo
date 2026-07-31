import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://buzzyai.video"),
  title:
    "BuzzyAI Video - Your AI Director | Pro Video Engine for Everyone",
  description:
    "BuzzyAI Video aggregates Seedance, Kling, Runway, Veo and more into one pro engine, with storyboard, multi-angle camera control and real-time relighting so anyone can direct 4K cinematic shorts, animations and music videos.",
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
  authors: [{ name: "BuzzyAI Video" }],
  openGraph: {
    title: "BuzzyAI Video - Your AI Director",
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
      <body>{children}</body>
    </html>
  );
}
