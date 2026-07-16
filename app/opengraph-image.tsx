import { ImageResponse } from "next/og";

export const alt = "Matej Bendík — Full-stack developer and product builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f7f7f5",
        color: "#111",
        padding: "64px",
        border: "1px solid #111",
      }}
    >
      <div style={{ display: "flex", fontSize: 24, letterSpacing: "-0.02em" }}>Matej Bendík / Slovakia</div>
      <div style={{ display: "flex", maxWidth: 980, fontSize: 82, lineHeight: 0.96, letterSpacing: "-0.055em", fontWeight: 700 }}>
        I build and ship useful internet products.
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20 }}>
        <span>Full-stack developer</span><span>matejbendik.com</span>
      </div>
    </div>,
    size,
  );
}
