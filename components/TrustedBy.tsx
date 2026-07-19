"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, BadgeCheck, Quote, TrendingUp } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

type Testimonial = {
  name: string;
  avatar: string;
  from?: string;
  to: string;
  label: string;
  body: string;
  faceit?: boolean;
};

const testimonials: Testimonial[] = [
  {
    name: "Lively",
    avatar: "/testimonials/avatars/lively.png",
    from: "Diamond",
    to: "Grandmaster",
    label: "First time GM",
    body: "Kajor pointed out things such as timing, awareness, and even swinging with distance, all things i didnt see when I reviewed myself, and all were very beneficial. I hit grandmaster for the first time yesterday after implementing key points around timing, and trying to swing with distance as much as possible. Thank you very much Kajor 👍",
  },
  {
    name: "Aussie3njoyer",
    avatar: "/testimonials/avatars/aussie3njoyer.png",
    from: "Diamond",
    to: "Master",
    label: "D2 → M4 in days",
    body: "Ive had 2 sessions now 1 as tank 1 as dps, and both have been day and night climbed tank d2-m4 in a couple days and my dps has gone from m5-m2 in one day hes really clear with getting his points across. Also making the tips easy to apply in game we talked about expensive positioning, timing of off angles and more thanks a lot Kajor 100% recommend.",
  },
  {
    name: "Skelemen",
    avatar: "/testimonials/avatars/skelemen.png",
    from: "Master",
    to: "Grandmaster",
    label: "M4 → GM5 in one month",
    body: "I got coached 1 month ago and i literally went from master 4 to gm 5, other than that Kajor is very polite, explains things calmly and well. 10/10 would recommend",
  },
  {
    name: "Pip",
    avatar: "/testimonials/avatars/pip.png",
    from: "Gold",
    to: "Diamond",
    label: "Gold → Diamond 2",
    body: "I mean since my raffle and the rapid review, I've gone from scraping by in plat 4 sometimes dropping to gold all the way to diamond 2",
  },
  {
    name: "Ca5h",
    avatar: "/testimonials/avatars/ca5h.png",
    from: "Diamond",
    to: "Grandmaster",
    label: "Low Diamond → GM",
    body: "GOAT OF VOD REVIEWS MADE ME GM FROM LOW DIAMOND",
  },
  {
    name: "Lotus",
    avatar: "/testimonials/avatars/lotus.png",
    to: "Grandmaster",
    label: "GM4 // Faceit Expert",
    faceit: true,
    body: "For context to anyone reading, I am a GM4 player, and scrim in Faceit's Expert/Advanced league. The Karry Academy is one of the best coaching services for its price. For $15 a month, Kajor makes a personal connection with all of the players he coaches. He brings players up to speak and vod them, giving active feedback on how to improve in future games, not just the current map you are spectating. This is not just a coaching place. This is a community.",
  },
  {
    name: "Swiffle",
    avatar: "/testimonials/avatars/swiffle.png",
    from: "Diamond",
    to: "Master",
    label: "D5 → M4 after one session",
    body: "I came to him in an emergency, being a former GM1 player to being hardstuck in Diamond 4, it seemed all hope was lost, until Kajor spoke his wisdom to me. After just one session my rank skyrocketed. His advice, his coaching, his calming voice of reason, led me to keep almost 100% winrate afterwards. Good coach 👍",
  },
  {
    name: "FL1cK3r",
    avatar: "/testimonials/avatars/fl1ck3r.png",
    to: "Platinum",
    label: "Came for coaching, stayed for community",
    body: "Joined the Academy with the intent to simply try it out for a little then cancel my subscription. I am happy to say, however, that turned out to not be the case. I am not only improving at the game, but also enjoying being part of a community with a genuine interest in learning. Interacting with the Academy has become one of the highlights of my days and weeks.",
  },
  {
    name: "Zawny",
    avatar: "/testimonials/avatars/zawny.png",
    to: "Master",
    label: "Clear feedback, serious community",
    body: "Great server overall. Had a VOD review done and it was very good, pointed out my main mistakes and explained everything clearly, actually helped me a lot. On top of that there's a place to discuss with people who are into the same stuff and work through your problems together.",
  },
];

function rankAsset(label: string) {
  const rank = label.toLowerCase();
  if (rank.includes("grandmaster") || rank.includes("gm")) return "/testimonials/ranks/grandmaster.webp";
  if (rank.includes("master")) return "/testimonials/ranks/master.webp";
  if (rank.includes("diamond")) return "/testimonials/ranks/diamond.webp";
  if (rank.includes("platinum") || rank.includes("plat")) return "/testimonials/ranks/platinum.webp";
  return "/testimonials/ranks/gold.webp";
}

function Rank({ label, muted = false }: { label: string; muted?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1.5 ${muted ? "opacity-55 grayscale-[0.35]" : ""}`}>
      <Image
        src={rankAsset(label)}
        alt={`${label} rank`}
        width={92}
        height={92}
        className="h-16 w-16 object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.32)] sm:h-[76px] sm:w-[76px]"
      />
      <span className="font-hud text-[7px] text-ow-fg3">{label}</span>
    </div>
  );
}

export function TrustedBy() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section id="testimonials" className="proof-zone section-world relative overflow-hidden">
      <div aria-hidden className="proof-zone__glow proof-zone__glow--one pointer-events-none absolute" />
      <div aria-hidden className="proof-zone__glow proof-zone__glow--two pointer-events-none absolute" />
      <div aria-hidden className="proof-zone__mesh pointer-events-none absolute inset-0" />
      <div className="site-shell section-block relative">
        <Reveal>
          <SectionMarker n={6} title="Player proof // In their own words" />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.66fr] lg:items-end">
          <div>
            <Reveal as="h2" delay={60} className="max-w-[790px] font-display text-[42px] font-bold leading-[0.96] tracking-[-0.04em] text-ow-fg1 lg:text-[64px]">
              Different ranks. Same <span className="text-ow-orange">moment of clarity</span>.
            </Reveal>
          </div>
          <Reveal as="p" delay={100} className="max-w-[500px] text-[16px] leading-[1.7] text-ow-fg2 lg:pb-1">
            Pick a player to read their story. These are student-reported results, lightly trimmed for length and paired with their real Academy profiles.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
          <Reveal delay={130} y={18}>
            <article key={current.name} className="testimonial-stage relative flex min-h-[520px] flex-col overflow-hidden rounded-[24px] border border-ow-line2 bg-ow-bg2/70 p-7 shadow-[0_35px_100px_-50px_rgba(59,230,240,0.28)] backdrop-blur-xl sm:p-10">
              <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ow-orange/10 blur-[80px]" />
              <div className="relative flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-ow-cyan/25 bg-ow-cyan/[0.08] px-3 py-1.5 font-hud text-[8px] text-ow-cyan">
                  <BadgeCheck className="h-3.5 w-3.5" /> Student story // {String(active + 1).padStart(2, "0")}
                </span>
                <Quote className="h-9 w-9 text-ow-orange/45" strokeWidth={1.3} />
              </div>

              <blockquote className="testimonial-copy relative mb-10 mt-10 max-w-[880px] font-display text-[clamp(24px,3vw,39px)] font-medium leading-[1.2] tracking-[-0.025em] text-ow-fg1 sm:mb-12">
                “{current.body}”
              </blockquote>

              <div className="relative mt-auto grid gap-7 border-t border-ow-line2 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
                <div className="flex items-center gap-4">
                  <Image src={current.avatar} alt="" width={64} height={64} className="h-14 w-14 rounded-full border border-ow-line2 object-cover shadow-[0_10px_28px_rgba(0,0,0,0.2)]" />
                  <div>
                    <div className="flex items-center gap-2 text-lg font-semibold text-ow-fg1">
                      {current.name}
                      {current.faceit && <Image src="/testimonials/faceit.png" alt="Faceit" width={18} height={18} className="h-4 w-4 object-contain" />}
                    </div>
                    <div className="mt-1 flex items-center gap-2 font-hud text-[8px] text-ow-orange"><TrendingUp className="h-3.5 w-3.5" />{current.label}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:justify-end">
                  {current.from && <Rank label={current.from} muted />}
                  {current.from && (
                    <span aria-hidden className="flex h-16 items-center sm:h-[76px]">
                      <ArrowRight className="h-5 w-5 text-ow-orange" />
                    </span>
                  )}
                  <Rank label={current.to} />
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={170} y={18} className="rounded-[24px] border border-ow-line2 bg-ow-bg2/50 p-3 backdrop-blur-xl">
            <div className="px-3 pb-3 pt-2 font-hud text-[8px] text-ow-fg3">Choose a student // {testimonials.length} stories</div>
            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-pressed={active === index}
                  onClick={() => setActive(index)}
                  className={`testimonial-selector group flex items-center gap-3 rounded-[14px] border p-3 text-left outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ow-orange ${active === index ? "border-ow-orange/45 bg-ow-orange/[0.11] shadow-[0_12px_32px_-22px_rgba(249,158,26,0.75)]" : "border-transparent bg-ow-bg2/70 hover:translate-x-1 hover:border-ow-line2 hover:bg-ow-bg3"}`}
                >
                  <Image src={item.avatar} alt="" width={44} height={44} className="h-11 w-11 flex-shrink-0 rounded-full border border-ow-line2 object-cover" />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-ow-fg1">{item.name}</span>
                    <span className="mt-1 block truncate font-hud text-[7px] text-ow-fg3">{item.label}</span>
                  </span>
                  <Image src={rankAsset(item.to)} alt="" width={34} height={34} className="h-9 w-9 object-contain opacity-80 transition-transform duration-300 group-hover:scale-110" />
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={90} className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[18px] border border-ow-line2 bg-ow-bg2/65 px-6 py-5 sm:flex-row">
          <div className="flex items-center gap-3 text-sm text-ow-fg2">
            <span className="flex -space-x-2">
              {testimonials.slice(0, 4).map((item) => <Image key={item.name} src={item.avatar} alt="" width={32} height={32} className="h-8 w-8 rounded-full border-2 border-ow-bg0 object-cover" />)}
            </span>
            <span><strong className="font-semibold text-ow-fg1">1,000+ players taught.</strong> Your next replay can be the one that clicks.</span>
          </div>
          <CTAButton size="lg" location="trusted_by" />
        </Reveal>
      </div>
    </section>
  );
}
