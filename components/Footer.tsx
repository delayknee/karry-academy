import { CTAButton } from "./CTAButton";
import { Wordmark } from "./Logo";

const exploreLinks = [
  { label: "The academy", href: "#about" },
  { label: "The method", href: "#included" },
  { label: "Rank climbs", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="section-world relative overflow-hidden bg-ow-bg1">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(249,158,26,0.07),transparent_28%),radial-gradient(circle_at_92%_100%,rgb(var(--ow-accent-rgb)/0.04),transparent_26%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.14] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]"
      />
      <div
        aria-hidden
        className="site-shell absolute inset-x-0 top-0 flex items-center gap-3"
      >
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-ow-fg1/15 to-ow-fg1/15" />
        <span className="h-3 w-[2px] rotate-[18deg] bg-ow-orange shadow-[0_0_12px_rgba(249,158,26,0.35)]" />
        <span className="h-px flex-1 bg-gradient-to-r from-ow-fg1/15 via-ow-fg1/15 to-transparent" />
      </div>

      <div className="site-shell relative pb-7 pt-14 sm:pt-16 lg:pt-20">
        <div className="grid gap-12 pb-14 sm:pb-16 lg:grid-cols-[1.35fr_0.65fr_0.8fr] lg:gap-20 lg:pb-20">
          <div>
            <a
              href="#"
              aria-label="Karry Academy — back to top"
              className="inline-flex rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ow-orange focus-visible:ring-offset-4 focus-visible:ring-offset-ow-bg1"
            >
              <Wordmark size={28} />
            </a>
            <p className="mt-6 max-w-[460px] text-[16px] leading-[1.7] text-ow-fg3 sm:text-[17px]">
              Serious Overwatch coaching for players who want to understand the
              game, own their decisions, and climb with a system.
            </p>
          </div>

          <nav aria-label="Explore Karry Academy">
            <p className="font-hud text-[9px] text-ow-orange">Explore</p>
            <ul className="mt-6 space-y-3.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-ow-fg2 outline-none transition-colors duration-200 hover:text-ow-fg0 focus-visible:text-ow-fg0"
                  >
                    <span className="h-px w-0 bg-ow-orange transition-[width] duration-200 group-hover:w-3 group-focus-visible:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:justify-self-end">
            <p className="font-hud text-[9px] text-ow-fg4">Next queue // 01</p>
            <p className="mt-6 max-w-[240px] font-display text-3xl font-bold uppercase leading-[0.95] tracking-[-0.045em] text-ow-fg1">
              Climb with intent.
            </p>
            <CTAButton size="md" location="footer" className="mt-7">
              Join the academy
            </CTAButton>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-ow-line1 pt-6 text-xs text-ow-fg4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Karry Academy</p>
          <p className="sm:text-right">
            Independent Overwatch 2 coaching · Coached by Kajor
          </p>
        </div>
      </div>
    </footer>
  );
}
