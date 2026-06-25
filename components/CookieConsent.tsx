"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { cn } from "@/lib/utils";

const GA_MEASUREMENT_ID = "G-QTLYVJZH01";
const STORAGE_KEY = "ka-cookie-consent";

type Consent = "unset" | "accepted" | "rejected";

function readConsent(): Consent {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "rejected" ? v : "unset";
  } catch {
    return "unset";
  }
}

/**
 * Drop the Google cookies (_ga, _ga_*, _gid, _gat…) gtag already set on the
 * current domain. Called on reject before reload so nothing lingers.
 */
function clearGoogleCookies() {
  const expire = "=; Max-Age=0; path=/";
  const host = location.hostname;
  const domains = ["", host, `.${host}`];
  document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((name) => /^_ga|^_gid$|^_gat/.test(name))
    .forEach((name) => {
      domains.forEach((d) => {
        document.cookie = name + expire + (d ? `; domain=${d}` : "");
      });
    });
}

/**
 * US-style opt-out cookie banner.
 *
 * Google analytics (GA + GTM) run by default — when the visitor ignores the
 * banner or clicks "Accept". Only "Reject" stops tracking: it clears the GA
 * cookies and reloads, after which the render gate keeps gtag from loading at
 * all (the stored choice is "rejected"). The choice is remembered in
 * localStorage; ignoring keeps tracking on and shows the banner again next
 * visit.
 */
export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>("unset");
  // GA is gated on this so we never inject gtag before localStorage is read —
  // otherwise a rejected visitor's afterInteractive script slips in on reload.
  const [ready, setReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setReady(true);
    if (stored === "unset") setShowBanner(true);
  }, []);

  const decide = (choice: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* private mode — fall back to in-memory only */
    }
    if (choice === "rejected") {
      // gtag.js already loaded this page; clearing its cookies and reloading is
      // the clean way to strip the injected script + preload link. The render
      // gate keeps it off afterwards since the stored choice is now "rejected".
      clearGoogleCookies();
      window.location.reload();
      return;
    }
    setConsent(choice);
    setShowBanner(false);
  };

  return (
    <>
      {ready && consent !== "rejected" && (
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      )}

      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookie notice"
          className="animate-fadeUp fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-[520px]"
        >
          <div className="rounded-ow-2 border border-ow-line1 bg-ow-bg2 p-4 shadow-glow sm:p-5">
            <div className="font-hud text-[10px] text-ow-orange">
              Cookie Notice
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-ow-fg2">
              We use cookies for anonymous analytics to understand how the site
              is used and to keep improving your experience.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => decide("accepted")}
                className={cn(
                  "btn-flat inline-flex h-9 select-none items-center justify-center rounded-[6px] bg-ow-orange px-4",
                  "font-display text-[12.5px] font-semibold text-[#0b1220] outline-none",
                )}
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => decide("rejected")}
                className={cn(
                  "inline-flex h-9 select-none items-center justify-center rounded-[6px] border border-ow-line2 px-4",
                  "font-display text-[12.5px] font-semibold text-ow-fg1 outline-none",
                  "transition-colors hover:bg-ow-bg3",
                )}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
