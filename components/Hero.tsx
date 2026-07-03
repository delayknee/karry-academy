import { CTAButton } from "./CTAButton";

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

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center px-6 py-16 text-center lg:px-12">
        {/* Badge */}
        <div className="mb-8 animate-fadeUp [animation-delay:60ms]">
          <div className="inline-flex animate-borderPulse items-center gap-2.5 rounded-ow-1 border border-ow-cyan/45 bg-ow-cyan/[0.05] px-3 py-[7px] font-hud text-[11px] tracking-[0.18em] text-ow-cyan">
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
          <Stat value="1,000+" label="Students taught" />
          <StatDivider />
          <Stat value="5,000+" label="Hours played" />
          <StatDivider />
          <Stat value="12+" label="Live events / month" />
        </div>

        {/* CTA */}
        <div className="mt-10 animate-fadeUp [animation-delay:540ms]">
          <CTAButton size="lg" location="hero" />
        </div>
        <p className="mt-4 animate-fadeUp font-hud text-[11px] text-ow-fg3 [animation-delay:600ms]">
          Cancel anytime · Full refund if unsatisfied
        </p>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
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
