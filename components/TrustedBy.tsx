import { TrendingUp } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

type Msg = {
  initial: string;
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

function Message({ m, index }: { m: Msg; index: number }) {
  const tier = TIER_STYLES[m.color] ?? FALLBACK_TIER;
  return (
    <div className="rounded-ow-1 border border-ow-line2 bg-ow-bg2 px-4 py-4 shadow-[0_1px_2px_rgba(11,18,32,0.04)] transition-[border-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-[1px] hover:border-ow-orange/40 hover:shadow-[0_8px_24px_-12px_rgba(249,158,26,0.35)]">
      <div className="flex items-center gap-3">
        <span className="font-hud text-[10px] text-ow-fg4">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div
          className="tier-avatar flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-display text-base font-semibold"
          style={tierVars(tier)}
        >
          {m.initial}
        </div>
        <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
          <span className="text-sm font-semibold text-ow-fg1">{m.name}</span>
          <span className="font-hud text-[10px] text-ow-fg4">{m.ts}</span>
        </div>
      </div>
      {m.gain && (
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5 border-b border-dashed border-ow-line1 pb-3">
          <span
            className="tier-avatar inline-flex items-center gap-1.5 rounded-full px-2.5 py-[3px] text-[11px] font-semibold"
            style={tierVars(tier)}
          >
            <TrendingUp className="h-3 w-3" strokeWidth={2.5} />
            {m.gain.from ? `${m.gain.from} → ${m.gain.to}` : `Hit ${m.gain.to}`}
          </span>
          {m.gain.tiers && (
            <span className="inline-flex items-center rounded-full border border-ow-orange/40 bg-ow-orange/[0.08] px-2.5 py-[3px] font-hud text-[10px] text-ow-orange">
              +{m.gain.tiers} {m.gain.tiers === 1 ? "tier" : "tiers"}
            </span>
          )}
        </div>
      )}
      <p className="mt-2.5 text-sm leading-[1.5] text-ow-fg2">{m.body}</p>
    </div>
  );
}

export function TrustedBy() {
  return (
    <section
      id="testimonials"
      className="border-t border-ow-line1 bg-ow-bg1 px-6 py-24 lg:px-12 lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <SectionMarker n={6} title="The results — self-reported, unedited" />
        </Reveal>

        <div className="mb-6 flex flex-wrap items-end justify-between gap-6">
          <Reveal as="h2" delay={60} className="max-w-[720px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
            Real students,{" "}
            <span className="text-ow-orange">real rank climbs</span>.
          </Reveal>
        </div>

        <Reveal as="p" delay={100} className="mb-12 max-w-[720px] text-[17px] leading-[1.6] text-ow-fg2">
          Trusted by{" "}
          <strong className="font-semibold text-ow-fg1">1,000+ students</strong>{" "}
          — here is what happens when theory finally turns into wins.
        </Reveal>

        <div className="columns-1 gap-3.5 sm:columns-2 lg:columns-3">
          {messages.map((m, i) => (
            <Reveal
              key={m.name}
              delay={Math.min(i, 9) * 40}
              y={10}
              className="mb-3.5 break-inside-avoid"
            >
              <Message m={m} index={i} />
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
