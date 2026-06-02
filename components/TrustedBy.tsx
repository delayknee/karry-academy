import { CTAButton } from "./CTAButton";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

type Msg = {
  initial: string;
  name: string;
  ts: string;
  body: string;
  rx: [string, number][];
  color: string;
};

const messages: Msg[] = [
  {
    initial: "T",
    name: "thrasshrr",
    ts: "4/27/2025",
    body: "After 4 sessions with @Kajor, I went from being in low gold placements to hitting diamond. Just to double check my rank, about a few weeks ago I got on a hardstuck plat 5 account, and hit d5 in less than 35 games with only a handful of losses.",
    rx: [],
    color: "#6FB7FF",
  },
  {
    initial: "A",
    name: "Aussie3njoyer",
    ts: "1/5/2026",
    body: "Ive had 2 sessions now 1 as tank 1 as dps, and both have been day and night — climbed tank d2-m4 in a couple days and my dps has gone from m5-m2 in one day. Hes really clear with getting his points across. Also making the tips easy to apply in game — we talked about expensive positioning, timing of off angles and more. Thanks a lot Kajor, 100% recommend.",
    rx: [["🥹", 1]],
    color: "#C99CFF",
  },
  {
    initial: "S",
    name: "Skelemen",
    ts: "11/15/2024",
    body: "i got coached 1 month ago and i literally went from master 4 to gm 5. other than that, Kajor is very polite, explains things calmly and well. 10/10 would recommend",
    rx: [],
    color: "#F25A5A",
  },
  {
    initial: "L",
    name: "Lively",
    ts: "9/13/2025",
    body: "I'd highly reccommend. i decided to get a session when i was high diamond, playing widow and soldier. Kajor pointed out things such as timing, awareness, and even swinging with distance — all things i didnt see when i reviewed myself, and all were very beneficial. I hit grandmaster for the first time yesterday. Thankyou very much Kajor 👍",
    rx: [],
    color: "#F25A5A",
  },
  {
    initial: "Y",
    name: "yeetadog",
    ts: "8/8/2024",
    body: "good coach, pointed out mistakes i was making that i might not have realised i was making, gave me a nice comprehensible and easy list of things to keep me in mind. big help in ranking back up to masters, easily worth the price",
    rx: [],
    color: "#C99CFF",
  },
  {
    initial: "M",
    name: "mars",
    ts: "12/30/2024",
    body: "super insightful, the amount of useful actionable advice i was provided with shocked me compared to previous coaches that offered nowhere near the same value even with sessions four times as long. definitely recommending kajor to anybody looking for coaching",
    rx: [],
    color: "#6FB7FF",
  },
  {
    initial: "M",
    name: "MoonDragons",
    ts: "3/29/2025",
    body: "I came to the session feeling confused and uncertain about some key aspects of my hero's gameplay loop and macro-strategy. I left feeling like the path to improvement was clear. It felt like he quickly understood what I was looking to get out of the session and was happy to cater to my specific needs. 100% worth it.",
    rx: [],
    color: "#36C4A7",
  },
  {
    initial: "M",
    name: "MadilineCrashCars",
    ts: "2/24/2025",
    body: "really insightful coaching session, kajor explained himself well and was able to help diagnose common problems. his coaching is so worth the price and it is very high quality. if you are thinking about getting coaching from kajor i would highly reccomend him",
    rx: [],
    color: "#C99CFF",
  },
  {
    initial: "P",
    name: "PayMeInWaffles",
    ts: "3/10/2025",
    body: "Amazing coach, pointed out mistakes I didn't even know I made. Was able to make me think about where to position and how to use my abilities to their maximum value. Wasn't toxic about it either — it felt like I was actually learning",
    rx: [],
    color: "#6FB7FF",
  },
  {
    initial: "H",
    name: "Hexx",
    ts: "4/8/2024",
    body: "Coaching pointed out issues I would not have noticed in 100's of hours of gameplay if I never decided to get coaching. It's completely flipped my perspective on playing Tracer. My uptime and overall stats have skyrocketed.",
    rx: [],
    color: "#36C4A7",
  },
  {
    initial: "G",
    name: "GL",
    ts: "6/10/2023",
    body: "1 hour tracer otp coaching. Kajor was very surgical and efficient in teaching — targeting crucial mistakes that were made consistently. He opened my eyes to various macro and micro aspects of play and was objective. Kajor could also simplify concepts well, making his coaching easy to absorb. Awesome coach",
    rx: [],
    color: "#F25A5A",
  },
  {
    initial: "E",
    name: "eggsbenny",
    ts: "3/11/2025",
    body: "cool guy, good coaching. made sure not to overwhelm me with principles to work on so i can focus on certain points first and maximise coaching value from that specific session. will definitely be getting more soon",
    rx: [],
    color: "#6FB7FF",
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

function Message({ m }: { m: Msg }) {
  const tier = TIER_STYLES[m.color] ?? FALLBACK_TIER;
  return (
    <div className="grid grid-cols-[40px_1fr] gap-3 rounded-ow-1 border border-ow-line2 bg-ow-bg2 px-4 py-4 shadow-[0_1px_2px_rgba(11,18,32,0.04)] transition-[border-color,transform,box-shadow] duration-200 ease-out hover:-translate-y-[1px] hover:border-ow-orange/40 hover:shadow-[0_8px_24px_-12px_rgba(249,158,26,0.35)]">
      <div
        className="tier-avatar flex h-10 w-10 items-center justify-center rounded-full font-display text-base font-semibold"
        style={
          {
            "--tier-light-bg": tier.lightBg,
            "--tier-light-fg": tier.lightFg,
            "--tier-dark-bg": tier.darkBg,
            "--tier-dark-fg": tier.darkFg,
          } as React.CSSProperties
        }
      >
        {m.initial}
      </div>
      <div className="min-w-0">
        <div className="mb-1.5 flex flex-wrap items-baseline gap-2.5">
          <span className="text-sm font-semibold text-ow-fg1">{m.name}</span>
          <span className="font-hud text-[10px] text-ow-fg4">{m.ts}</span>
        </div>
        <p className="text-sm leading-[1.5] text-ow-fg2">{m.body}</p>
        {m.rx.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {m.rx.map(([e, n], i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-ow-orange/30 bg-ow-orange/[0.08] px-2 py-[2px] text-[11px] text-ow-orange"
              >
                <span>{e}</span>
                <span className="font-semibold">{n}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function TrustedBy() {
  return (
    <section
      id="testimonials"
      className="border-t border-ow-line1 bg-ow-bg0 px-6 py-24 lg:px-12 lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <SectionMarker n={4} title="Student reviews" />
        </Reveal>

        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <Reveal as="h2" delay={60} className="max-w-[720px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
            Trusted by{" "}
            <span className="text-ow-orange">1,000+</span> students.
          </Reveal>
        </div>

        <div className="columns-1 gap-3.5 sm:columns-2 lg:columns-3">
          {messages.map((m, i) => (
            <Reveal
              key={i}
              delay={Math.min(i, 9) * 40}
              y={10}
              className="mb-3.5 break-inside-avoid"
            >
              <Message m={m} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="mt-14 flex justify-center">
          <CTAButton size="lg" />
        </Reveal>
      </div>
    </section>
  );
}
