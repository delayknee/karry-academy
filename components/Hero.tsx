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
        <h1 className="animate-fadeUp font-display text-[clamp(60px,9vw,132px)] font-bold leading-[0.92] tracking-[-0.045em] text-ow-fg1 [animation-delay:180ms]">
          Improve in Overwatch
          <br />
          <span className="text-ow-orange">with Kajor.</span>
        </h1>

        {/* Sub paragraph */}
        <p className="mt-8 max-w-[720px] animate-fadeUp text-[17px] leading-[1.6] text-ow-fg2 [animation-delay:300ms]">
          A top 1% coach with over{" "}
          <strong className="font-semibold text-ow-fg1">
            1,000 students taught
          </strong>{" "}
          and{" "}
          <strong className="font-semibold text-ow-fg1">
            5,000+ hours played
          </strong>
          .
        </p>

        {/* Highlights */}
        <div className="mt-10 flex w-full max-w-[640px] animate-fadeUp items-stretch [animation-delay:420ms]">
          <Stat value="Private" label="Community" />
          <StatDivider />
          <Stat value="Live" label="Lessons" />
          <StatDivider />
          <Stat value="Direct" label="Access to Kajor" />
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
