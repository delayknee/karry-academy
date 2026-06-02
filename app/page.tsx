import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatIsAcademy } from "@/components/WhatIsAcademy";
import { ForPlayers } from "@/components/ForPlayers";
import { WhatsIncluded } from "@/components/WhatsIncluded";
import { TrustedBy } from "@/components/TrustedBy";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Karry Academy — Overwatch Coaching Community",
  description:
    "A private community with live weekly classes, coaching VODs and access to Kajor, a top 1% Overwatch coach.",
  provider: {
    "@type": "Organization",
    name: "Karry Academy",
    sameAs: "https://karry-academy.vercel.app",
  },
  offers: {
    "@type": "Offer",
    price: "14.99",
    priceCurrency: "USD",
    category: "Subscription",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <WhatIsAcademy />
        <ForPlayers />
        <WhatsIncluded />
        <TrustedBy />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
