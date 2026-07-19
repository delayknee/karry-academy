import Image from "next/image";
import { CountUp } from "./CountUp";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="section-world relative flex min-h-[calc(100vh-65px)] items-center overflow-hidden bg-ow-bg0">
      <div className="pointer-events-none absolute inset-0 bg-aurora" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grid-soft" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-texture opacity-[0.12] mix-blend-overlay" aria-hidden />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] bg-[linear-gradient(135deg,transparent_18%,rgba(249,158,26,0.035)_18%,rgba(249,158,26,0.035)_18.5%,transparent_18.5%,transparent_55%,rgba(59,230,240,0.025)_55%,rgba(59,230,240,0.025)_55.5%,transparent_55.5%)] lg:block" />

      <div className="site-shell relative grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20 xl:grid-cols-2 xl:gap-20">
        <div className="relative z-10">
          <div className="mb-7 animate-fadeUp [animation-delay:60ms]">
            <div className="ow-chip inline-flex animate-borderPulse items-center gap-2.5 rounded-ow-1 border border-ow-cyan/45 bg-ow-cyan/[0.05] px-3.5 py-[7px] font-hud text-[11px] tracking-[0.18em] text-ow-cyan">
              <span className="relative inline-flex h-1.5 w-1.5 items-center justify-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-ow-cyan opacity-60" />
                <span className="relative h-1.5 w-1.5 animate-pulseSoft rounded-full bg-ow-cyan shadow-cyanGlow" />
              </span>
              <span>Karry Method // Enrollment open</span>
            </div>
          </div>

          <h1 className="max-w-[900px] animate-fadeUp font-display text-[clamp(48px,6.3vw,96px)] font-bold leading-[0.92] tracking-[-0.05em] text-ow-fg1 [animation-delay:160ms]">
            Stop guessing.
            <br />
            <span className="text-ow-orange">Start climbing</span>
            <br />
            with a system.
          </h1>

          <p className="mt-7 max-w-[670px] animate-fadeUp text-[17px] leading-[1.65] text-ow-fg2 [animation-delay:260ms]">
            Live VOD reviews, focused group classes, and direct feedback from <strong className="font-semibold text-ow-fg1">Kajor</strong> — built for players who want to understand why they lose and what to change next.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5 animate-fadeUp [animation-delay:360ms]">
            <CTAButton size="lg" location="hero" />
            <span className="font-hud text-[10px] leading-relaxed text-ow-fg3">14-day refund<br />Cancel anytime</span>
          </div>

          <div className="mt-10 flex max-w-[660px] animate-fadeUp items-stretch border-y border-ow-line2 py-5 [animation-delay:440ms]">
            <Stat value={<CountUp to={1000} />} label="Students taught" />
            <StatDivider />
            <Stat value={<CountUp to={5000} />} label="Hours played" />
            <StatDivider />
            <Stat value={<CountUp to={12} delay={900} duration={1000} />} label="Live events / month" />
          </div>
        </div>

        <div className="relative mx-auto aspect-[16/10] w-full max-w-[720px] animate-fadeUp lg:aspect-[10/11] lg:max-w-[680px] [animation-delay:240ms]">
          <div aria-hidden className="hero-visual-glow absolute -inset-8 bg-[radial-gradient(circle_at_64%_43%,rgba(59,230,240,0.24),transparent_32%),radial-gradient(circle_at_45%_68%,rgba(249,158,26,0.22),transparent_38%)] blur-3xl" />

          <div className="hero-visual-frame absolute inset-0 overflow-hidden bg-[#718099] shadow-[0_38px_100px_-36px_rgba(0,0,0,0.72)] [clip-path:polygon(7%_0,100%_0,100%_92%,92%_100%,0_100%,0_8%)]">
            <Image
              src="/overwatch/hero-squad.webp"
              alt="Reinhardt, Mercy, and Tracer from Overwatch"
              fill
              priority
              sizes="(min-width: 1024px) 43vw, 92vw"
              className="hero-squad-image object-cover object-[58%_50%] lg:object-[72%_50%]"
            />

            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,12,23,0.28)_0%,transparent_34%,transparent_56%,rgba(5,12,23,0.94)_100%)]" />
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,230,240,0.16),transparent_24%,transparent_78%,rgba(249,158,26,0.13))] mix-blend-screen" />
            <div aria-hidden className="absolute inset-0 bg-grid-soft opacity-20 mix-blend-overlay" />
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-4 sm:left-6 sm:right-6 sm:top-6">
              <div className="flex items-center gap-2 border border-white/20 bg-[#07111f]/78 px-3 py-2 shadow-[0_12px_28px_-18px_rgba(0,0,0,0.8)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulseSoft rounded-full bg-ow-cyan shadow-cyanGlow" />
                <span className="font-hud text-[8px] tracking-[0.16em] text-white/90">VOD review // live</span>
              </div>
              <div className="hidden border-b border-white/25 pb-1 font-hud text-[8px] tracking-[0.16em] text-white/70 sm:block">Midtown · Teamfight 04</div>
            </div>

            <div aria-hidden className="hero-reticle absolute left-[47%] top-[43%] hidden h-20 w-20 items-center justify-center rounded-full border border-ow-cyan/45 sm:flex lg:left-[50%] lg:top-[46%] lg:h-24 lg:w-24">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap border-l border-ow-orange/70 pl-2 font-hud text-[7px] tracking-[0.14em] text-white/75">Decision window</span>
              <span className="hero-reticle__ring absolute inset-[9%] rounded-full border border-dashed border-ow-cyan/55" />
              <span className="hero-reticle__ring--reverse absolute inset-[25%] rounded-full border border-ow-orange/65" />
              <span className="absolute h-px w-[132%] bg-gradient-to-r from-transparent via-ow-cyan/60 to-transparent" />
              <span className="absolute h-[132%] w-px bg-gradient-to-b from-transparent via-ow-cyan/60 to-transparent" />
              <span className="h-2 w-2 rounded-full border border-ow-cyan bg-[#07111f]/80 shadow-cyanGlow" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-16 sm:px-7 sm:pb-7 lg:px-8 lg:pb-8">
              <div className="mb-2 flex items-center gap-2 font-hud text-[8px] tracking-[0.14em] text-ow-orange">
                <span className="h-px w-6 bg-ow-orange" />
                Kajor&apos;s read // teamfight blueprint
              </div>
              <div className="flex items-end justify-between gap-5 border-t border-white/20 pt-3">
                <div>
                  <div className="font-display text-[clamp(20px,2.4vw,34px)] font-semibold leading-none tracking-[-0.025em] text-white">See the whole fight.</div>
                  <div className="mt-2 font-hud text-[8px] tracking-[0.12em] text-white/65">Positioning → timing → pressure</div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="font-display text-2xl font-bold leading-none text-ow-cyan">01</div>
                  <div className="mt-1 font-hud text-[7px] tracking-[0.12em] text-white/55">Clear correction</div>
                </div>
              </div>
            </div>

            <div aria-hidden className="hero-corner-signal hero-corner-signal--cyan absolute bottom-0 left-0 h-[13%] w-1 bg-gradient-to-t from-ow-cyan via-ow-cyan/60 to-transparent" />
            <div aria-hidden className="hero-corner-signal hero-corner-signal--orange absolute right-0 top-0 h-[16%] w-1 bg-gradient-to-b from-ow-orange via-ow-orange/60 to-transparent" />
          </div>

          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              points="7,0 100,0 100,92 92,100 0,100 0,8"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-1 flex-col gap-1.5 first:items-start last:items-end sm:items-center">
      <div className="font-display text-[28px] font-semibold leading-none tracking-[-0.03em] tabular-nums text-ow-fg1">{value}</div>
      <div className="font-hud text-[8px] text-ow-fg3">{label}</div>
    </div>
  );
}

function StatDivider() {
  return <div className="mx-4 w-px self-stretch bg-ow-line2 sm:mx-6" aria-hidden />;
}
