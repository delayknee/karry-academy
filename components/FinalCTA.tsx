import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-ow-line1">
      <div className="pointer-events-none absolute inset-0 bg-aurora" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid-soft" aria-hidden />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-6 py-24 text-center lg:px-12 lg:py-[140px]">
        <Reveal as="h2" className="max-w-[820px] font-display text-[44px] font-bold leading-[0.95] tracking-[-0.04em] text-ow-fg1 lg:text-[72px]">
          Ready to stop <span className="text-ow-orange">guessing</span>?
        </Reveal>
        <Reveal as="p" delay={80} className="mt-6 max-w-[560px] text-[17px] leading-[1.6] text-ow-fg2">
          Join the Academy, submit your first VOD, and find out exactly what
          has been keeping you hardstuck.
        </Reveal>
        <Reveal delay={140} className="mt-10">
          <CTAButton size="lg" location="final_cta" />
        </Reveal>
        <Reveal as="p" delay={200} className="mt-4 font-hud text-[11px] text-ow-fg3">
          $14.99/month · Cancel anytime · 14-day full refund
        </Reveal>
      </div>
    </section>
  );
}
