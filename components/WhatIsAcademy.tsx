"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const YOUTUBE_ID = "Zn7aRS9AmKw";

export function WhatIsAcademy() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="about"
      className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-[120px]"
    >
      <Reveal>
        <SectionMarker n={1} title="What is Karry Academy" />
      </Reveal>

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal as="h2" delay={60} className="max-w-[520px] font-display text-[44px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[64px]">
            A private community with live weekly classes, coaching VODs and
            access to a <span className="text-ow-orange">top coach</span>.
          </Reveal>
          <Reveal delay={160} className="mt-10">
            <CTAButton size="lg" />
          </Reveal>
        </div>

        <Reveal delay={120} y={18} className="overflow-hidden rounded-ow-2 border border-ow-line2 bg-ow-bg2 shadow-[0_4px_12px_rgba(11,18,32,0.06)]">
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
                <div className="video-tile-grid absolute inset-0 opacity-50" />
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
                  onClick={() => setPlaying(true)}
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
          <div className="border-t border-ow-line1 px-5 py-5">
            <div className="font-display text-xl font-semibold tracking-[-0.02em] text-ow-fg1">
              Meet Coach Kajor
            </div>
            <div className="mt-1 font-hud text-[11px] text-ow-fg3">
              3 min watch · free
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
