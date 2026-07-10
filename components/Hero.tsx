import { CountUp } from "./CountUp";
import { CTAButton } from "./CTAButton";
import { Check, Crosshair, Radio } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-65px)] items-center justify-center overflow-hidden border-b border-ow-line1">
      {/* Atmosphere: aurora+vignette / grid / texture — 3 layers */}
      <div className="pointer-events-none absolute inset-0 bg-aurora" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid-soft" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-texture opacity-[0.14] mix-blend-overlay"
        aria-hidden
      />

      {/* Drifting ambient blobs */}
      <div
        aria-hidden
        className="blob-a pointer-events-none absolute left-[12%] top-[18%] h-[340px] w-[340px] rounded-full bg-ow-orange/20 blur-[110px]"
      />
      <div
        aria-hidden
        className="blob-b pointer-events-none absolute bottom-[10%] right-[10%] h-[300px] w-[300px] rounded-full bg-ow-cyan/15 blur-[110px]"
      />

      {/* Product signals: visible on wide screens, framing the headline without competing with it. */}
      <div className="pointer-events-none absolute left-[max(24px,4vw)] top-[23%] hidden w-[210px] rotate-[-2deg] overflow-hidden rounded-ow-1 border border-ow-line2 bg-ow-bg2/75 shadow-[0_18px_50px_-35px_rgba(11,18,32,0.45)] backdrop-blur-md xl:block">
        <div className="flex items-center justify-between border-b border-ow-line1 px-4 py-3 font-hud text-[8px] text-ow-fg4">
          Weekly focus <Radio className="h-3 w-3 text-ow-orange" />
        </div>
        <div className="p-4">
          <div className="text-sm font-semibold text-ow-fg1">Space creation</div>
          <div className="mt-1 font-hud text-[8px] text-ow-orange">Tank blueprint // 04</div>
          <div className="mt-4 space-y-2.5">
            {["Take space with resources", "Track the exit", "Reset before stagger"].map((item, i) => (
              <div key={item} className="flex items-center gap-2 text-[10px] text-ow-fg3">
                <span className={`flex h-4 w-4 items-center justify-center rounded-sm border ${i === 0 ? "border-ow-orange/50 bg-ow-orange/10" : "border-ow-line2"}`}>
                  {i === 0 && <Check className="h-2.5 w-2.5 text-ow-orange" strokeWidth={2.5} />}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-[max(24px,4vw)] top-[58%] hidden w-[224px] rotate-[2deg] overflow-hidden rounded-ow-1 border border-ow-orange/25 bg-ow-bg2/75 shadow-[0_18px_50px_-35px_rgba(249,158,26,0.5)] backdrop-blur-md xl:block">
        <div className="flex items-center gap-2 border-b border-ow-line1 px-4 py-3 font-hud text-[8px] text-ow-fg4">
          <Crosshair className="h-3 w-3 text-ow-orange" /> Coach note // 02:14
        </div>
        <div className="p-4">
          <p className="text-xs font-medium leading-relaxed text-ow-fg1">“You found the right angle. Now hold it two seconds longer before rotating.”</p>
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-ow-line1"><div className="h-full w-[62%] bg-ow-orange" /></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center px-6 py-16 text-center lg:px-12">
        {/* Badge */}
        <div className="mb-8 animate-fadeUp [animation-delay:60ms]">
          <div className="ow-chip inline-flex animate-borderPulse items-center gap-2.5 rounded-ow-1 border border-ow-cyan/45 bg-ow-cyan/[0.05] px-3.5 py-[7px] font-hud text-[11px] tracking-[0.18em] text-ow-cyan">
            <span className="relative inline-flex h-1.5 w-1.5 items-center justify-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-ow-cyan opacity-60" />
              <span className="relative h-1.5 w-1.5 animate-pulseSoft rounded-full bg-ow-cyan shadow-cyanGlow" />
            </span>
            <span>Now Enrolling</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="animate-fadeUp font-display text-[clamp(44px,7vw,104px)] font-bold leading-[0.95] tracking-[-0.045em] text-ow-fg1 [animation-delay:180ms]">
          Stop guessing.
          <br />
          Learn what really works
          <br />
          <span className="text-ow-orange">&amp; finally improve.</span>
        </h1>

        {/* Sub paragraph */}
        <p className="mt-8 max-w-[720px] animate-fadeUp text-[17px] leading-[1.6] text-ow-fg2 [animation-delay:300ms]">
          Join <strong className="font-semibold text-ow-fg1">Kajor</strong> and
          a community of dedicated players for{" "}
          <strong className="font-semibold text-ow-fg1">
            live VOD reviews
          </strong>
          , <strong className="font-semibold text-ow-fg1">group classes</strong>
          , and the structure you need to fix bad habits and reach your goal
          rank.
        </p>

        {/* Highlights */}
        <div className="mt-10 flex w-full max-w-[640px] animate-fadeUp items-stretch [animation-delay:420ms]">
          <Stat value={<CountUp to={1000} />} label="Students taught" />
          <StatDivider />
          <Stat value={<CountUp to={5000} />} label="Hours played" />
          <StatDivider />
          <Stat value={<CountUp to={12} delay={900} duration={1000} />} label="Live events / month" />
        </div>

        {/* CTA */}
        <div className="mt-10 animate-fadeUp [animation-delay:540ms]">
          <CTAButton size="lg" location="hero" />
        </div>
        <p className="mt-4 animate-fadeUp font-hud text-[11px] text-ow-fg3 [animation-delay:600ms]">
          Cancel anytime · Full refund if unsatisfied
        </p>

        <div className="mt-10 grid w-full max-w-[820px] animate-fadeUp grid-cols-1 overflow-hidden rounded-ow-1 border border-ow-line2 bg-ow-bg2/55 text-left backdrop-blur-sm [animation-delay:660ms] sm:grid-cols-3">
          <HeroSignal code="01" title="Learn live" body="Weekly classes with Kajor" />
          <HeroSignal code="02" title="Get reviewed" body="Actionable VOD feedback" />
          <HeroSignal code="03" title="Practice better" body="A mature player community" />
        </div>
      </div>
    </section>
  );
}

function HeroSignal({ code, title, body }: { code: string; title: string; body: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-ow-line1 px-4 py-3.5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <span className="font-display text-sm font-semibold text-ow-orange">{code}</span>
      <span>
        <span className="block text-xs font-semibold text-ow-fg1">{title}</span>
        <span className="mt-0.5 block font-hud text-[7px] text-ow-fg4">{body}</span>
      </span>
    </div>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1.5">
      <div className="font-display text-[32px] font-semibold leading-none tracking-[-0.03em] tabular-nums text-ow-fg1">
        {value}
      </div>
      <div className="font-hud text-[10px] text-ow-fg3">{label}</div>
    </div>
  );
}

function StatDivider() {
  return (
    <div className="relative w-px self-stretch" aria-hidden>
      <span className="hairline-v absolute inset-y-1 left-0 w-px" />
    </div>
  );
}
