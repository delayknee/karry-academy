import Image from "next/image";
import { TrendingUp } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

type Msg = {
  initial: string;
  /** Drop a public asset path here when the student's approved avatar is available. */
  avatar?: string;
  name: string;
  ts: string;
  body: string;
  /** Rank improvement to highlight — `from` optional for "reached X" stories. */
  gain?: { from?: string; to: string; tiers?: number };
  color: string;
};

const messages: Msg[] = [
  {
    initial: "T",
    name: "thrasshrr",
    ts: "4/27/2025",
    body: "After 4 sessions with @Kajor, I went from being in low gold placements to hitting diamond. Just to double check my rank, about a few weeks ago I got on a hardstuck plat 5 account, and hit d5 in less than 35 games with only a handful of losses.",
    gain: { from: "Gold", to: "Diamond", tiers: 2 },
    color: "#6FB7FF",
  },
  {
    initial: "S",
    name: "Skelemen",
    ts: "11/15/2024",
    body: "i got coached 1 month ago and i literally went from master 4 to gm 5. other than that, Kajor is very polite, explains things calmly and well. 10/10 would recommend",
    gain: { from: "Master 4", to: "GM 5", tiers: 1 },
    color: "#F25A5A",
  },
  {
    initial: "A",
    name: "Aussie3njoyer",
    ts: "1/5/2026",
    body: "Ive had 2 sessions now 1 as tank 1 as dps, and both have been day and night — climbed tank d2-m4 in a couple days and my dps has gone from m5-m2 in one day. Hes really clear with getting his points across. Also making the tips easy to apply in game. Thanks a lot Kajor, 100% recommend.",
    gain: { from: "Diamond 2", to: "Master 4", tiers: 1 },
    color: "#C99CFF",
  },
  {
    initial: "L",
    name: "Lively",
    ts: "9/13/2025",
    body: "I'd highly reccommend. i decided to get a session when i was high diamond, playing widow and soldier. Kajor pointed out things such as timing, awareness, and even swinging with distance — all things i didnt see when i reviewed myself, and all were very beneficial. I hit grandmaster for the first time yesterday. Thankyou very much Kajor 👍",
    gain: { from: "Diamond", to: "Grandmaster", tiers: 2 },
    color: "#F25A5A",
  },
  {
    initial: "Y",
    name: "yeetadog",
    ts: "8/8/2024",
    body: "good coach, pointed out mistakes i was making that i might not have realised i was making, gave me a nice comprehensible and easy list of things to keep me in mind. big help in ranking back up to masters, easily worth the price",
    gain: { to: "Masters" },
    color: "#C99CFF",
  },
  {
    initial: "M",
    name: "mars",
    ts: "12/30/2024",
    body: "super insightful, the amount of useful actionable advice i was provided with shocked me compared to previous coaches that offered nowhere near the same value even with sessions four times as long. definitely recommending kajor to anybody looking for coaching",
    color: "#6FB7FF",
  },
  {
    initial: "M",
    name: "MoonDragons",
    ts: "3/29/2025",
    body: "I came to the session feeling confused and uncertain about some key aspects of my hero's gameplay loop and macro-strategy. I left feeling like the path to improvement was clear. It felt like he quickly understood what I was looking to get out of the session and was happy to cater to my specific needs. 100% worth it.",
    color: "#36C4A7",
  },
  {
    initial: "P",
    name: "PayMeInWaffles",
    ts: "3/10/2025",
    body: "Amazing coach, pointed out mistakes I didn't even know I made. Was able to make me think about where to position and how to use my abilities to their maximum value. Wasn't toxic about it either — it felt like I was actually learning",
    color: "#6FB7FF",
  },
  {
    initial: "H",
    name: "Hexx",
    ts: "4/8/2024",
    body: "Coaching pointed out issues I would not have noticed in 100's of hours of gameplay if I never decided to get coaching. It's completely flipped my perspective on playing Tracer. My uptime and overall stats have skyrocketed.",
    color: "#36C4A7",
  },
];

type TierStyle = {
  lightBg: string;
  lightFg: string;
  darkBg: string;
  darkFg: string;
};

const TIER_STYLES: Record<string, TierStyle> = {
  // diamond
  "#6FB7FF": { lightBg: "#DCEAFF", lightFg: "#1E5BA8", darkBg: "#1F3A6B", darkFg: "#A8C5EA" },
  // master
  "#C99CFF": { lightBg: "#EAE0FF", lightFg: "#553D8A", darkBg: "#352856", darkFg: "#C2B0E8" },
  // grandmaster
  "#F25A5A": { lightBg: "#FCDDDD", lightFg: "#9C2A32", darkBg: "#5A2026", darkFg: "#ECAFAF" },
  // platinum
  "#36C4A7": { lightBg: "#D6EFE7", lightFg: "#1F6651", darkBg: "#1F4640", darkFg: "#9FCEBF" },
};

const FALLBACK_TIER: TierStyle = {
  lightBg: "#EEF2F6",
  lightFg: "#3C4656",
  darkBg: "#1E2A44",
  darkFg: "#C4CCDA",
};

function tierVars(tier: TierStyle) {
  return {
    "--tier-light-bg": tier.lightBg,
    "--tier-light-fg": tier.lightFg,
    "--tier-dark-bg": tier.darkBg,
    "--tier-dark-fg": tier.darkFg,
  } as React.CSSProperties;
}

function RankEmblem({ label, color, compact = false }: { label: string; color: string; compact?: boolean }) {
  return (
    <div className={`flex flex-col items-center ${compact ? "gap-1" : "gap-2"}`}>
      <div
        className={`${compact ? "h-8 w-8" : "h-14 w-14"} relative flex rotate-45 items-center justify-center border bg-ow-bg2 shadow-[0_0_28px_-10px_currentColor]`}
        style={{ borderColor: color, color }}
        aria-hidden
      >
        <div className={`${compact ? "h-4 w-4" : "h-7 w-7"} -rotate-45 rounded-full border-2 border-current opacity-90`} />
        <span className="absolute inset-[4px] border border-current opacity-25" />
      </div>
      {!compact && <span className="font-hud text-[8px] text-ow-fg3">{label}</span>}
    </div>
  );
}

function Message({ m, featured = false }: { m: Msg; featured?: boolean }) {
  const tier = TIER_STYLES[m.color] ?? FALLBACK_TIER;
  return (
    <div className={`h-full rounded-ow-1 border bg-ow-bg2 shadow-[0_1px_2px_rgba(11,18,32,0.04)] ${featured ? "border-ow-orange/40 p-7 sm:p-8" : "border-ow-line2 p-6"}`}>
      <div className="flex items-center gap-3.5">
        <div className="relative">
          {m.avatar ? (
            <Image
              src={m.avatar}
              alt=""
              width={featured ? 48 : 44}
              height={featured ? 48 : 44}
              className={`${featured ? "h-12 w-12" : "h-11 w-11"} rounded-full border border-ow-line2 object-cover shadow-sm`}
            />
          ) : (
            <div
              className={`${featured ? "h-12 w-12" : "h-11 w-11"} tier-avatar flex flex-shrink-0 items-center justify-center rounded-full border border-white/10 font-display text-base font-semibold shadow-sm`}
              style={tierVars(tier)}
            >
              {m.initial}
            </div>
          )}
          <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-ow-bg2 bg-emerald-400" />
        </div>
        <div className="min-w-0">
          <div className="text-[15px] font-semibold leading-tight text-ow-fg1">
            {m.name}
          </div>
          <div className="mt-1 font-hud text-[10px] text-ow-fg4">{m.ts}</div>
        </div>
      </div>
      <p className={`${featured ? "mt-6 text-[17px]" : "mt-4 text-[15px]"} leading-[1.65] text-ow-fg2`}>
        &ldquo;{m.body}&rdquo;
      </p>
      {m.gain && (
        <div className="mt-5 flex items-center justify-between gap-4 border-t border-ow-line1 pt-4">
          <div>
            <div className="flex items-center gap-1.5 font-hud text-[8px] text-ow-fg4"><TrendingUp className="h-3 w-3 text-ow-orange" /> Verified climb</div>
            <div className="mt-1 text-sm font-semibold text-ow-fg1">{m.gain.from ? `${m.gain.from} → ${m.gain.to}` : `Reached ${m.gain.to}`}</div>
          </div>
          <RankEmblem label={m.gain.to} color={m.color} compact />
        </div>
      )}
    </div>
  );
}

export function TrustedBy() {
  const featured = messages.slice(0, 2);
  const rest = messages.slice(2);

  return (
    <section
      id="testimonials"
      className="border-t border-ow-line1 bg-ow-bg0 px-6 py-24 lg:px-12 lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <SectionMarker n={6} title="The results — self-reported, unedited" />
        </Reveal>

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <Reveal as="h2" delay={60} className="max-w-[720px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
              Real students, <span className="text-ow-orange">real rank climbs</span>.
            </Reveal>
            <Reveal as="p" delay={100} className="mt-6 max-w-[680px] text-[17px] leading-[1.6] text-ow-fg2">
              Trusted by <strong className="font-semibold text-ow-fg1">1,000+ students</strong> — here is what happens when theory finally turns into wins.
            </Reveal>
          </div>

          <Reveal delay={130} y={12} className="overflow-hidden rounded-ow-1 border border-ow-line2 bg-ow-bg2 px-6 py-5">
            <div className="mb-5 text-center font-hud text-[8px] text-ow-fg4">The climb is possible</div>
            <div className="flex items-center gap-3 sm:gap-5">
              {[
                ["Gold", "#D9A93C"],
                ["Diamond", "#6FB7FF"],
                ["Master", "#C99CFF"],
                ["Grandmaster", "#F25A5A"],
              ].map(([rank, color], i) => (
                <div key={rank} className="contents">
                  <RankEmblem label={rank} color={color} />
                  {i < 3 && <span className="mb-5 h-px w-4 bg-gradient-to-r from-ow-line2 to-ow-orange/50 sm:w-8" aria-hidden />}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {featured.map((m, i) => (
            <Reveal key={m.name} delay={120 + i * 70} y={14}>
              <Message m={m} featured />
            </Reveal>
          ))}
        </div>

        <div className="mt-5 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {rest.map((m, i) => (
            <Reveal
              key={m.name}
              delay={Math.min(i, 6) * 40}
              y={10}
              className="mb-5 break-inside-avoid"
            >
              <Message m={m} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="mt-14 flex justify-center">
          <CTAButton size="lg" location="trusted_by" />
        </Reveal>
      </div>
    </section>
  );
}
