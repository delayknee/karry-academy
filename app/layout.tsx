import type { Metadata, Viewport } from "next";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const siteUrl = "https://karryacademy.com";
const siteTitle =
  "Stop Guessing. Start Climbing With a System. | Karry Academy";
const siteDescription =
  "Live Overwatch VOD reviews, focused group classes, and direct feedback from Kajor—built to help you understand why you lose and what to change next.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Karry Academy",
  },
  description: siteDescription,
  applicationName: "Karry Academy",
  alternates: {
    canonical: "/",
  },
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
  publisher: "Karry Academy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Karry Academy",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
