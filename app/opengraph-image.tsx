import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alana Motta — Desenvolvedora Front-End";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#02040e",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* grid lines decoration */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,240,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.04) 1px, transparent 1px)",
            backgroundSize: "74px 74px",
          }}
        />

        <div
          style={{
            color: "#00f0ff",
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Portfólio
        </div>

        <div
          style={{
            color: "#ffffff",
            fontSize: 80,
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          Alana Motta
        </div>

        <div
          style={{
            color: "rgba(234,234,234,0.72)",
            fontSize: 32,
            marginBottom: 48,
          }}
        >
          Desenvolvedora Front-End
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["React", "Next.js", "TypeScript", "CSS Modules"].map((tech) => (
            <div
              key={tech}
              style={{
                background: "rgba(0,240,255,0.08)",
                border: "1px solid rgba(0,240,255,0.32)",
                color: "#00f0ff",
                padding: "10px 20px",
                borderRadius: 999,
                fontSize: 18,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 64,
            right: 96,
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "rgba(234,234,234,0.5)",
            fontSize: 16,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#00f0ff",
            }}
          />
          Disponível para CLT/PJ · Curitiba e remoto
        </div>
      </div>
    ),
    { ...size },
  );
}
