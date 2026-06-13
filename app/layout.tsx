import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-QTLYVJZH01";

const siteUrl = "https://karryacademy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Karry Academy — Overwatch Coaching Community",
    template: "%s | Karry Academy",
  },
  description:
    "Improve in Overwatch with Kajor, a top 1% coach. Join Karry Academy — a private community with weekly classes, VOD reviews, and access to a top coach. $14.99/month.",
  keywords: [
    "Overwatch coaching",
    "Overwatch 2 coaching",
    "Karry Academy",
    "Kajor",
    "Overwatch improvement",
    "Overwatch community",
    "rank up Overwatch",
    "Overwatch VOD review",
  ],
  authors: [{ name: "Kajor" }],
  creator: "Kajor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Karry Academy",
    title: "Karry Academy — Overwatch Coaching Community",
    description:
      "Improve in Overwatch with Kajor, a top 1% coach. Weekly classes, VOD reviews, and a mature community. $14.99/month.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karry Academy — Overwatch Coaching Community",
    description:
      "Improve in Overwatch with Kajor, a top 1% coach. Weekly classes, VOD reviews, and a mature community.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFBFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1220" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'){t='light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
