import Image from "next/image";
import { CalendarDays, Check, PlayCircle, RotateCcw, ShieldCheck } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";

const benefits = [
  {
    icon: CalendarDays,
    title: "12+ live events",
    detail: "Every month",
  },
  {
    icon: PlayCircle,
    title: "Full session archive",
    detail: "Watch on your schedule",
  },
  {
    icon: RotateCcw,
    title: "Month to month",
    detail: "Cancel whenever",
  },
];

const studentAvatars = ["pip", "lively", "aussie3njoyer", "skelemen"];

export function FinalCTA() {
  return (
    <section id="join" className="final-cta-zone section-world relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" aria-hidden />
      <div className="final-cta-zone__flare pointer-events-none absolute inset-0" aria-hidden />

      <div className="site-shell section-block relative">
        <Reveal y={18} className="final-cta-card game-border relative overflow-hidden border">
          <div className="absolute inset-x-0 top-0 z-20 h-[3px] bg-gradient-to-r from-ow-orange via-ow-orangeHot to-ow-cyan" aria-hidden />
          <div className="final-cta-card__angle pointer-events-none absolute right-0 top-0 h-28 w-28" aria-hidden />

          <div className="relative grid lg:grid-cols-[1.18fr_0.82fr]">
            <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16 xl:px-16">
              <div className="inline-flex items-center gap-2.5 border border-ow-orange/30 bg-ow-orange/[0.08] px-3 py-2 font-hud text-[9px] text-ow-orange [clip-path:polygon(6%_0,100%_0,94%_100%,0_100%)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-ow-orange opacity-50" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-ow-orange" />
                </span>
                Enrollment is open
              </div>

              <h2 className="mt-7 max-w-[760px] font-display text-[clamp(43px,5.2vw,76px)] font-bold leading-[0.93] tracking-[-0.05em]">
                A better rank starts with a <span className="text-ow-orange">better process.</span>
              </h2>

              <p className="game-muted mt-7 max-w-[660px] text-[16px] leading-[1.7] sm:text-[17px]">
                Train with Kajor and a serious player community through live learning, direct feedback, and decisions you can repeat when the match gets messy.
              </p>

              <div className="mt-9 grid gap-px overflow-hidden border game-border sm:grid-cols-3">
                {benefits.map(({ icon: Icon, title, detail }) => (
                  <div key={title} className="final-cta-benefit game-fill flex items-start gap-3 px-4 py-4">
                    <Icon className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-ow-orange" strokeWidth={1.8} aria-hidden />
                    <div>
                      <div className="text-[13px] font-semibold leading-tight">{title}</div>
                      <div className="game-muted mt-1 text-[11px] leading-tight">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
                <div className="flex -space-x-2" aria-hidden>
                  {studentAvatars.map((name) => (
                    <Image
                      key={name}
                      src={`/testimonials/avatars/${name}.png`}
                      alt=""
                      width={36}
                      height={36}
                      className="final-cta-avatar h-9 w-9 rounded-full border-2 object-cover"
                    />
                  ))}
                </div>
                <p className="game-muted text-[12px] leading-relaxed">
                  <strong className="font-semibold text-current">1,000+ players taught.</strong> Built for anyone ready to improve deliberately.
                </p>
              </div>
            </div>

            <aside className="final-cta-offer game-border relative flex flex-col border-t p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-10 xl:p-12" aria-label="Academy membership offer">
              <div className="flex items-center justify-between gap-4 border-b game-border pb-4">
                <span className="font-hud text-[8px] text-ow-orange">Academy membership</span>
                <span className="game-muted flex items-center gap-2 font-hud text-[7px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-ow-cyan" />
                  Full access
                </span>
              </div>

              <div className="final-cta-rank-stage relative mx-auto mt-5 aspect-square w-full max-w-[250px]">
                <div className="rank-orbit absolute inset-[4%] rounded-full border border-dashed border-ow-orange/25" aria-hidden />
                <div className="final-rank-backdrop absolute inset-[13%] rounded-full" aria-hidden />
                <div className="absolute inset-[18%] rounded-full bg-ow-orange/20 blur-[52px]" aria-hidden />
                <div className="rank-core absolute inset-[6%]">
                  <Image
                    src="/ranks/grandmaster.png"
                    alt="Grandmaster rank emblem"
                    width={360}
                    height={360}
                    loading="eager"
                    sizes="250px"
                    className="h-full w-full object-contain drop-shadow-[0_22px_28px_rgba(249,158,26,0.3)]"
                  />
                </div>
                <div className="final-rank-caption absolute bottom-[2%] left-1/2 -translate-x-1/2 whitespace-nowrap border px-4 py-2 font-hud text-[7px]">
                  Next division // earned
                </div>
              </div>

              <div className="mt-4 border-t game-border pt-6">
                <div className="flex items-end gap-2">
                  <span className="font-display text-[46px] font-bold leading-none tracking-[-0.05em]">$14.99</span>
                  <span className="game-muted pb-1 text-sm">/ month</span>
                </div>
                <div className="game-muted mt-2 flex items-center gap-2 text-[12px]">
                  <Check className="h-3.5 w-3.5 text-ow-orange" aria-hidden /> Everything included. No tiers or contracts.
                </div>

                <div className="mt-6 px-1">
                  <CTAButton size="lg" location="final_cta" className="w-full">Join Karry Academy</CTAButton>
                </div>

                <div className="game-muted mt-5 flex items-center justify-center gap-2 text-center text-[11px] leading-relaxed">
                  <ShieldCheck className="h-4 w-4 flex-shrink-0 text-ow-cyan" strokeWidth={1.8} aria-hidden />
                  Try it for 14 days. Full refund if it is not for you.
                </div>
              </div>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
