import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Matej Bendík — Full-stack developer and product builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const portrait = await readFile(
    join(process.cwd(), "public/images/matej-bendik-portrait.jpg"),
    "base64",
  );

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          fontSize: 24,
          letterSpacing: "-0.02em",
        }}
      >
        <img
          alt=""
          src={`data:image/jpeg;base64,${portrait}`}
          width={80}
          height={80}
          style={{
            borderRadius: "50%",
            border: "1px solid #d4d4d0",
            objectFit: "cover",
            objectPosition: "center 20%",
          }}
        />
        <span>Matej Bendík / Slovakia</span>
      </div>
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
