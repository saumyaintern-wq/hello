import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/shared/SmoothScrollProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Nitisetu AI — Detect, Understand, Predict Political Narratives",
  description:
    "Nitisetu AI connects social signals, editorial coverage, narrative clustering, influence mapping, and crisis detection into a single operator-first SaaS product.",
  keywords: [
    "political intelligence",
    "narrative tracking",
    "sentiment analysis",
    "influence mapping",
    "crisis detection",
    "political AI",
    "KedarSetu",
  ],
  authors: [{ name: "Nitisetu AI" }],
  openGraph: {
    title: "Nitisetu AI — Detect, Understand, Predict Political Narratives",
    description:
      "Real-time political narrative intelligence for operators, campaign teams, and reputation monitoring desks.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitisetu AI",
    description:
      "Real-time political narrative intelligence. Detect. Understand. Predict.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}