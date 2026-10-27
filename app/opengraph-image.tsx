import { ImageResponse } from "next/og";

export const alt = "Abhishek A. — Software Engineer (Backend)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#263B50",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#D8C69A",
            letterSpacing: 4,
          }}
        >
          INTERNAL MEMO · RE: ENGINEERING
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            color: "#F5F3ED",
            marginTop: 24,
            lineHeight: 1.1,
          }}
        >
          Abhishek A.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#F5F3ED",
            opacity: 0.8,
            marginTop: 14,
          }}
        >
          Software Engineer — Backend
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#D8C69A", marginTop: 48 }}>
          Building reliable software, one system at a time.
        </div>
      </div>
    ),
    size,
  );
}
