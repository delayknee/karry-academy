import { ImageResponse } from "next/og";

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
            <svg
              width={36}
              height={42}
              viewBox="0 0 75 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: 14 }}
            >
              <path
                d="M2.70591 86.8117C1.72684 86.8117 0.917284 86.8117 0.0078125 86.8117C0.0078125 72.7477 0.0078125 58.8413 0.0078125 44.8077C0.534423 44.7813 1.04227 44.7339 1.55016 44.7337C15.4936 44.7297 29.4369 44.74 43.3803 44.711C44.4037 44.7088 45.0726 44.9492 45.6948 45.8416C54.9706 59.1462 64.2889 72.4211 73.5945 85.705C73.8194 86.0259 74.0136 86.3684 74.3169 86.8518C62.8852 86.8518 51.6657 86.8518 40.3371 86.8518C38.6081 84.3953 36.8194 81.8625 35.0397 79.3234C32.5192 75.7275 29.9833 72.1419 27.5048 68.5171C26.9201 67.662 26.2906 67.2863 25.2212 67.3037C21.2405 67.3686 17.2581 67.3296 13.0532 67.3296C12.9137 68.9915 13.0024 70.6118 12.9861 72.2244C12.9701 73.806 12.9826 75.388 12.9826 76.9698C12.9826 78.6102 12.9826 80.2506 12.9826 81.891C12.9826 83.4652 12.9826 85.0394 12.9826 86.8118C9.52218 86.8118 6.1988 86.8118 2.70591 86.8117ZM13.805 48.9723C13.5953 48.7418 13.3855 48.5113 13.0749 48.17C13.0749 53.6061 13.0749 58.8276 13.0749 64.0766C16.8231 64.0766 20.469 64.0766 24.3714 64.0766C20.8068 58.9863 17.3701 54.0785 13.805 48.9723Z"
                fill="#0E1522"
              />
              <path
                d="M29.8134 14.9112C32.7459 10.7305 35.6397 6.6763 38.4509 2.56561C39.577 0.918988 41.0709 0.0683177 43.0056 0.0389493C46.4036 -0.0127027 49.8029 0.0148406 53.2017 0.0179322C53.2937 0.0179965 53.3856 0.117458 53.5892 0.235017C53.2797 0.771395 52.9874 1.32667 52.651 1.85392C46.1924 11.9797 39.7277 22.1016 33.2683 32.2269C32.9857 32.67 32.7157 33.125 32.4847 33.5964C32.1223 34.3361 32.2886 35.0337 32.9706 35.4385C33.6119 35.8192 34.3456 35.779 34.8955 35.1699C35.2066 34.8252 35.4563 34.4212 35.7079 34.0274C42.3318 23.6597 48.9815 13.3084 55.5465 2.90351C56.7348 1.02015 58.2458 0.0802968 60.4265 0.0726756C64.7628 0.0575406 69.099 0.0209805 73.4354 6.35318e-06C73.5971 -0.000766578 73.7594 0.0691119 74.0753 0.141202C73.8178 0.584452 73.6234 0.983113 73.3723 1.3421C64.2031 14.4488 55.021 27.5465 45.8713 40.6667C45.2096 41.6155 44.5271 42.0481 43.3092 42.0445C29.4771 42.0045 15.6449 42.0315 1.8128 42.0405C1.24111 42.0409 0.669416 42.0405 0 42.0405C0 27.9879 0 14.1289 0 0.0605247C0.800371 0.0605247 1.54445 0.0604818 2.28853 0.0605462C4.98466 0.0607824 7.68079 0.0504563 10.3768 0.0652262C11.988 0.0740496 12.6225 0.59364 12.8315 2.17122C12.9541 3.09647 12.9572 4.04188 12.9582 4.97827C12.9673 14.2389 12.9645 23.4995 12.9662 32.7601C12.9663 33.2288 12.8556 33.7435 13.0124 34.1544C13.2034 34.655 13.5388 35.2972 13.9675 35.4551C14.3995 35.6141 15.1341 35.3981 15.5343 35.0869C16.0697 34.6705 16.4296 34.0173 16.8324 33.443C21.1391 27.3029 25.4394 21.1583 29.8134 14.9112Z"
                fill="#F9AF15"
              />
            </svg>
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
