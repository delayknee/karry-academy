import {
  ButtonFlat,
  ButtonGhost,
  ButtonGlow,
  ButtonHUD,
} from "@/components/ButtonVariants";

export default function ButtonsPage() {
  return (
    <main className="min-h-screen bg-ow-bg0 px-6 py-16 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[880px]">
        <header className="mb-16">
          <div className="font-hud text-[11px] text-ow-orange">
            Button exploration
          </div>
          <h1 className="mt-3 font-display text-[48px] font-bold leading-[0.95] tracking-[-0.03em] text-ow-fg1">
            Four directions,
            <br />
            <span className="text-ow-fg3">one call to action.</span>
          </h1>
          <p className="mt-6 max-w-[560px] text-[15px] leading-[1.65] text-ow-fg2">
            Same copy, same link, four different design languages. Hover and
            click each to feel the micro-interactions — that's where most of
            the craft lives. Pick one (or mix-and-match for different
            contexts).
          </p>
        </header>

        <div className="space-y-14">
          <Variant
            letter="A"
            title="Flat (Linear / Vercel)"
            notes={[
              "Solid orange, 8px radius, hairline top inset, short orange-tinted shadow",
              "Hover: brightens to orangeHot + arrow nudges 3px",
              "Press: scale(0.97) in 70ms — subtle but felt",
              "Reads: premium SaaS, restrained, confident",
            ]}
          >
            <ButtonFlat />
          </Variant>

          <Variant
            letter="B"
            title="HUD / tactical precision"
            notes={[
              "2px radius (hard edges), 1px orange border, corner brackets + left tick mark",
              "Hover: fills orange, text flips dark, corner brackets grow from 8px to 12px, soft orange glow emerges",
              "Press: scale(0.97) in 70ms",
              "Reads: Destiny 2 / Apex Legends UI — gamer-premium, matches your existing font-hud aesthetic",
            ]}
          >
            <ButtonHUD />
          </Variant>

          <Variant
            letter="C"
            title="Ghost → solid on hover"
            notes={[
              "Transparent bg, 1.5px orange border, orange text at rest",
              "Hover: smoothly fills with orange (240ms), text flips dark, small glow appears below",
              "Press: scale(0.97)",
              "Reads: patient and confident. Apple / Anthropic / high-end subscription CTA pattern",
            ]}
          >
            <ButtonGhost />
          </Variant>

          <Variant
            letter="D"
            title="Soft-glow modern"
            notes={[
              "Flat solid orange, 8px radius",
              "Two-layer orange-tinted shadow below — reads as light emitting from under the button, not a generic gray drop shadow",
              "Hover: brightens + glow expands outward",
              "Press: scale(0.97) + glow tightens to tiny contact",
              "Reads: Arc browser / premium hardware — buttons that feel like LEDs",
            ]}
          >
            <ButtonGlow />
          </Variant>
        </div>

        <footer className="mt-24 border-t border-ow-line1 pt-8 font-hud text-[11px] text-ow-fg4">
          Tell me which letter and I'll roll it out across the landing page.
        </footer>
      </div>
    </main>
  );
}

function Variant({
  letter,
  title,
  notes,
  children,
}: {
  letter: string;
  title: string;
  notes: string[];
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-8 lg:grid-cols-[200px_1fr] lg:gap-12">
      <div>
        <div className="font-display text-[60px] font-bold leading-none tracking-[-0.04em] text-ow-fg4">
          {letter}
        </div>
        <div className="mt-3 font-display text-[17px] font-semibold tracking-[-0.01em] text-ow-fg1">
          {title}
        </div>
      </div>
      <div>
        <div className="flex min-h-[96px] items-center rounded-[10px] border border-ow-line1 bg-ow-bg1/40 px-8 py-10">
          {children}
        </div>
        <ul className="mt-4 space-y-1.5 text-[13px] leading-[1.6] text-ow-fg3">
          {notes.map((n) => (
            <li key={n} className="flex gap-2.5">
              <span className="mt-2 h-px w-2 shrink-0 bg-ow-fg4" aria-hidden />
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
