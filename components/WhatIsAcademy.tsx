"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";
import { trackVideoPlay } from "@/lib/analytics";

const YOUTUBE_ID = "Zn7aRS9AmKw";

export function WhatIsAcademy() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="about"
      className="academy-intro section-world relative overflow-hidden bg-ow-bg1"
    >
      <div aria-hidden className="pointer-events-none absolute -left-44 top-14 h-[460px] w-[460px] rounded-full bg-ow-cyan/[0.08] blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute right-[-12%] top-[-20%] h-[540px] w-[540px] rounded-full bg-ow-orange/[0.12] blur-[130px]" />
      <div aria-hidden className="blueprint-swoop pointer-events-none absolute inset-y-0 right-0 w-[54%] opacity-60" />
      <div className="site-shell section-block relative">
      <Reveal>
        <SectionMarker n={1} title="What is Karry Academy" />
      </Reveal>

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal as="h2" delay={60} className="max-w-[560px] font-display text-[36px] font-bold leading-[1.02] tracking-[-0.035em] text-ow-fg1 lg:text-[48px]">
            A live, collaborative community built specifically for{" "}
            <span className="text-ow-orange">analytical players</span> who want
            to understand Overwatch at a deeper level.
          </Reveal>
          <Reveal as="p" delay={120} className="mt-6 max-w-[520px] text-[17px] leading-[1.6] text-ow-fg2">
            Every week, we take advanced game theory and transform it into{" "}
            <strong className="font-semibold text-ow-fg1">
              actionable ranked blueprints
            </strong>
            .
          </Reveal>
          <Reveal delay={160} className="mt-10">
            <CTAButton size="lg" location="about" />
          </Reveal>
        </div>

        <Reveal delay={120} y={18} className="academy-video overflow-hidden rounded-[20px] border border-ow-line2 bg-ow-bg2 shadow-[0_28px_80px_-46px_rgba(37,99,235,0.5)]">
          <div className="video-tile relative flex aspect-video items-center justify-center">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                title="Meet Coach Kajor"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <>
                <Image
                  src="/intro-poster.jpg"
                  alt="What is The Karry Academy — video preview"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
                {/* Darken the poster so HUD labels and the play button stay legible */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/70 via-[#0B1220]/30 to-[#0B1220]/70"
                />
                <div className="video-tile-grid absolute inset-0 opacity-30" />
                <span className="absolute left-3 top-3 font-hud text-[11px] text-ow-orange">
                  INTROREC // Karry Academy
                </span>
                <span className="absolute right-3 top-3 font-hud text-[11px] text-ow-fg3">
                  03:24
                </span>
                <span className="absolute bottom-3 left-3 font-hud text-[10px] tracking-[0.18em] text-ow-fg4">
                  ◆ 01 / 01
                </span>

                <button
                  type="button"
                  onClick={() => {
                    trackVideoPlay();
                    setPlaying(true);
                  }}
                  aria-label="Play intro video"
                  className="group relative flex h-[88px] w-[88px] items-center justify-center rounded-full text-[#0B1220] outline-none transition-transform duration-200 ease-smooth active:scale-[0.97]"
                >
                  {/* Shadowed fill isolated onto a pseudo-layer so the shadow isn't re-painted every hover frame */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full bg-ow-orange shadow-[0_0_48px_rgba(249,158,26,0.4)] transition-transform duration-200 ease-smooth group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-full bg-ow-orange opacity-60 transition-transform duration-500 ease-smooth group-hover:scale-[1.18] group-hover:opacity-0"
                  />
                  <Play className="relative h-8 w-8 translate-x-[2px] fill-current transition-transform duration-200 ease-smooth group-active:scale-90" strokeWidth={0} />
                </button>
              </>
            )}
          </div>
          <div className="flex items-center justify-between gap-5 border-t border-ow-line1 px-5 py-5">
            <div>
              <div className="font-display text-xl font-semibold tracking-[-0.02em] text-ow-fg1">
                Meet your improvement system
              </div>
              <div className="mt-1 font-hud text-[9px] text-ow-fg3">
                1 min watch // start here
              </div>
            </div>
            <span className="rounded-full border border-ow-cyan/25 bg-ow-cyan/[0.06] px-3 py-1.5 font-hud text-[8px] text-ow-cyan">Orientation</span>
          </div>
        </Reveal>
      </div>
      </div>
    </section>
  );
}
