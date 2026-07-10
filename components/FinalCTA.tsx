import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";
import { ArrowRight, BookOpenCheck, Upload, Crosshair } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-ow-line1">
      <div className="pointer-events-none absolute inset-0 bg-aurora" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid-soft" aria-hidden />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-6 py-24 text-center lg:px-12 lg:py-[140px]">
        <Reveal className="mb-8 inline-flex items-center gap-2 rounded-ow-1 border border-ow-orange/30 bg-ow-orange/[0.07] px-3.5 py-2 font-hud text-[9px] text-ow-orange">
          Your first week starts with one clear objective
        </Reveal>
        <Reveal as="h2" className="max-w-[820px] font-display text-[44px] font-bold leading-[0.95] tracking-[-0.04em] text-ow-fg1 lg:text-[72px]">
          Stop hoping the next game will be <span className="text-ow-orange">different</span>.
        </Reveal>
        <Reveal as="p" delay={80} className="mt-6 max-w-[560px] text-[17px] leading-[1.6] text-ow-fg2">
          Build a repeatable improvement loop with real feedback, deliberate practice, and a community that takes progress seriously.
        </Reveal>

        <Reveal delay={110} y={14} className="mt-10 grid w-full max-w-[900px] gap-2 rounded-ow-1 border border-ow-line2 bg-ow-bg2/60 p-2 text-left backdrop-blur-sm sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
          <FirstStep Icon={BookOpenCheck} number="01" title="Choose a lesson" note="Start with your role and rank" />
          <ArrowRight className="hidden h-4 w-4 text-ow-orange/60 sm:block" aria-hidden />
          <FirstStep Icon={Upload} number="02" title="Submit a replay" note="Show the decisions you make" />
          <ArrowRight className="hidden h-4 w-4 text-ow-orange/60 sm:block" aria-hidden />
          <FirstStep Icon={Crosshair} number="03" title="Get one clear focus" note="Take it into your next queue" />
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

function FirstStep({ Icon, number, title, note }: { Icon: typeof BookOpenCheck; number: string; title: string; note: string }) {
  return (
    <div className="flex items-center gap-3 rounded-ow-1 border border-transparent px-4 py-3">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-ow-1 border border-ow-orange/30 bg-ow-orange/[0.08] text-ow-orange">
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </span>
      <span>
        <span className="font-hud text-[7px] text-ow-fg4">Step {number}</span>
        <span className="mt-0.5 block text-xs font-semibold text-ow-fg1">{title}</span>
        <span className="mt-0.5 block text-[10px] text-ow-fg3">{note}</span>
      </span>
    </div>
  );
}
