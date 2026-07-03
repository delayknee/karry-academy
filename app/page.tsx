import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatIsAcademy } from "@/components/WhatIsAcademy";
import { WhyRanked } from "@/components/WhyRanked";
import { ForPlayers } from "@/components/ForPlayers";
import { WhatsIncluded } from "@/components/WhatsIncluded";
import { WeekInAcademy } from "@/components/WeekInAcademy";
import { TrustedBy } from "@/components/TrustedBy";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
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
    sameAs: "https://karryacademy.com",
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
        <WhyRanked />
        <WhatsIncluded />
        <ForPlayers />
        <WeekInAcademy />
        <TrustedBy />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
