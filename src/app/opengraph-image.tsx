import { ImageResponse } from "next/og";

export const alt = "Anjum Ulazim — AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f7f5ef",
        color: "#17212c",
        padding: "70px 84px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", fontSize: 42, fontWeight: 800 }}>
          AU<span style={{ color: "#2959e8" }}>.</span>
        </div>
        <div style={{ fontSize: 20, letterSpacing: 3, color: "#596470" }}>
          AI ENGINEER
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.05 }}>
          Building AI systems
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1.05,
            color: "#2959e8",
          }}
        >
          that work in the wild.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          borderTop: "2px solid #d6d9d6",
          paddingTop: 24,
          fontSize: 22,
        }}
      >
        <span>Anjum Ulazim</span>
        <span>linkedin.com/in/anjumulazim</span>
      </div>
    </div>,
    size,
  );
}
