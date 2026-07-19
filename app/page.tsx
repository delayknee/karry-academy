import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatIsAcademy } from "@/components/WhatIsAcademy";
import { FightDecoder } from "@/components/FightDecoder";
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
  name: "Stop Guessing. Start Climbing With a System.",
  description:
    "Live Overwatch VOD reviews, focused group classes, and direct feedback from Kajor—built to help players understand why they lose and what to change next.",
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
        <FightDecoder />
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
