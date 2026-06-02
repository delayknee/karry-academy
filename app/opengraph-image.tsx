import { ImageResponse } from "next/og";
import { KARRY_ICON_DATA_URL } from "./_karry-icon";

export const runtime = "edge";
export const alt = "Karry Academy — Overwatch Coaching Community";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(weight: 500 | 600 | 700, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=Geist:wght@${weight}&text=${encodeURIComponent(
    text,
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );
  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) return await response.arrayBuffer();
  }
  throw new Error(`Failed to load Geist ${weight}`);
}

export default async function Image() {
  const glyphs =
    "Improve in Overwatch with Kajor.KarryAcademyNow EnrollingTop 1%Coach1,000+Students5,000+HoursGet Access for $14.99/Month→/·";

  const [geist500, geist600, geist700] = await Promise.all([
    loadGoogleFont(500, glyphs),
    loadGoogleFont(600, glyphs),
    loadGoogleFont(700, glyphs),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: "#FAFBFC",
          fontFamily: "Geist",
          color: "#0B1220",
        }}
      >
        {/* Background — SVG aurora (reliable in Satori) + grid overlay */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <defs>
            <radialGradient id="bloom" cx="50%" cy="58%" r="55%">
              <stop offset="0%" stopColor="#F99E1A" stopOpacity="0.22" />
              <stop offset="40%" stopColor="#F99E1A" stopOpacity="0.08" />
              <stop offset="75%" stopColor="#F99E1A" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="warmTL" cx="18%" cy="26%" r="36%">
              <stop offset="0%" stopColor="#F99E1A" stopOpacity="0.12" />
              <stop offset="75%" stopColor="#F99E1A" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="warmBR" cx="86%" cy="78%" r="38%">
              <stop offset="0%" stopColor="#FFB340" stopOpacity="0.12" />
              <stop offset="75%" stopColor="#FFB340" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="blueL" cx="4%" cy="84%" r="36%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.12" />
              <stop offset="70%" stopColor="#2563EB" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="blueR" cx="96%" cy="10%" r="32%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.09" />
              <stop offset="70%" stopColor="#2563EB" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="vignette" cx="50%" cy="50%" r="75%">
              <stop offset="55%" stopColor="#FAFBFC" stopOpacity="0" />
              <stop offset="100%" stopColor="#FAFBFC" stopOpacity="0.85" />
            </radialGradient>
          </defs>
          <rect width="1200" height="630" fill="url(#bloom)" />
          <rect width="1200" height="630" fill="url(#warmTL)" />
          <rect width="1200" height="630" fill="url(#warmBR)" />
          <rect width="1200" height="630" fill="url(#blueL)" />
          <rect width="1200" height="630" fill="url(#blueR)" />
          <rect width="1200" height="630" fill="url(#vignette)" />
        </svg>

        {/* Content frame */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "56px 64px",
          }}
        >
          {/* Wordmark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 32,
              letterSpacing: "-0.03em",
              color: "#0B1220",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={KARRY_ICON_DATA_URL}
              alt=""
              width={36}
              height={36}
              style={{ marginRight: 14 }}
            />
            <span style={{ fontWeight: 700 }}>Karry</span>
            <span
              style={{
                margin: "0 8px",
                color: "#F99E1A",
                fontWeight: 700,
              }}
            >
              /
            </span>
            <span style={{ fontWeight: 500 }}>Academy</span>
          </div>

          {/* Hero block — centered vertically */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
              marginTop: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 96,
                  fontWeight: 700,
                  letterSpacing: "-0.045em",
                  lineHeight: 0.92,
                  color: "#0B1220",
                }}
              >
                Improve in Overwatch
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 96,
                  fontWeight: 700,
                  letterSpacing: "-0.045em",
                  lineHeight: 0.92,
                  color: "#F99E1A",
                }}
              >
                with Kajor.
              </div>
            </div>

            <div
              style={{
                marginTop: 28,
                display: "flex",
                fontSize: 30,
                fontWeight: 500,
                color: "#3C4656",
                letterSpacing: "-0.01em",
              }}
            >
              A top 1% coach · 1,000+ students taught · 5,000+ hours played
            </div>
          </div>

          {/* Footer — stats row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 40,
              paddingTop: 26,
              borderTop: "1px solid rgba(11,18,32,0.10)",
            }}
          >
            <Stat value="Top 1%" label="COACH" />
            <Divider />
            <Stat value="1,000+" label="STUDENTS" />
            <Divider />
            <Stat value="5,000+" label="HOURS" />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geist500, weight: 500, style: "normal" },
        { name: "Geist", data: geist600, weight: 600, style: "normal" },
        { name: "Geist", data: geist700, weight: 700, style: "normal" },
      ],
    },
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div
        style={{
          fontSize: 44,
          fontWeight: 700,
          color: "#0B1220",
          letterSpacing: "-0.025em",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: "#3C4656",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        display: "flex",
        width: 1,
        height: 56,
        background: "rgba(11,18,32,0.14)",
      }}
    />
  );
}
