import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Youssef Shaaban | Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative Gradients Background */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(91, 46, 255, 0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(255, 107, 53, 0.15)",
            filter: "blur(80px)",
          }}
        />

        {/* Floating Glass Container for Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "180px",
            height: "180px",
            borderRadius: "40px",
            background: "rgba(255, 255, 255, 0.03)",
            border: "2px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            marginBottom: "40px",
          }}
        >
          {/* SVG Programmer Icon */}
          <svg
            width="90"
            height="90"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF6B35"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>

        {/* Text Content */}
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            margin: 0,
            display: "flex",
          }}
        >
          YOUSSEF <span style={{ color: "#FF6B35", marginLeft: "16px" }}>SHAABAN</span>
        </h1>
        <p
          style={{
            fontSize: "28px",
            fontWeight: 500,
            color: "#888888",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginTop: "20px",
          }}
        >
          Front-End Developer
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
