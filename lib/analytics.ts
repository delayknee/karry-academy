import { sendGAEvent } from "@next/third-parties/google";

// Centralised GA4 events for the landing page funnel. Keeping the names here
// avoids typos drifting across components and documents what we track.

/** A CTA button leading to the Whop checkout was clicked. */
export const trackCtaClick = (location: string) =>
  sendGAEvent("event", "cta_click", { location });

/** The intro video was started. */
export const trackVideoPlay = () =>
  sendGAEvent("event", "video_play", { video: "intro" });

/** An FAQ item was expanded. */
export const trackFaqOpen = (question: string) =>
  sendGAEvent("event", "faq_open", { question });
