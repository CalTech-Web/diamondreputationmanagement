import { ImageResponse } from "next/og";

export const runtime = "edge";

const WIDTH = 1200;
const HEIGHT = 630;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") || "Online Reputation Management").slice(0, 120);
  const eyebrow = (searchParams.get("eyebrow") || "Diamond Reputation Management").slice(0, 80);

  return new ImageResponse(
    (
      <div
        style={{
          width: WIDTH,
          height: HEIGHT,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0b1220 0%, #111827 55%, #1e2a4a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            D
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 26, fontWeight: 700 }}>Diamond Reputation Management</span>
            <span style={{ fontSize: 16, letterSpacing: 4, color: "#93c5fd", textTransform: "uppercase" }}>
              Reputation Specialists Since 2011
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 20, fontWeight: 600, color: "#93c5fd", textTransform: "uppercase", letterSpacing: 3 }}>
            {eyebrow}
          </span>
          <span style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.1, marginTop: 18, maxWidth: 1000 }}>
            {title}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 22, color: "#cbd5e1" }}>
          <span>diamondreputationmanagement.com</span>
          <span style={{ color: "#34d399", fontWeight: 700 }}>Free 48-hour analysis</span>
        </div>
      </div>
    ),
    { width: WIDTH, height: HEIGHT }
  );
}
