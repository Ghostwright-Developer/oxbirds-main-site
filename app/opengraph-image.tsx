import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "oxbird — Paid advertising. Personally managed."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/images/oxbird-logo.png"))
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        backgroundImage:
          "radial-gradient(circle at 80% 0%, rgba(96,175,109,0.22), transparent 42%), radial-gradient(circle at 10% 80%, rgba(72,125,91,0.14), transparent 42%), linear-gradient(160deg, #0b1914 0%, #0d1b15 45%, #112419 100%)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoSrc} width={300} height={94} alt="" />
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 76, fontWeight: 700, color: "#f4f7f5", letterSpacing: -2, lineHeight: 1.05 }}>
          Paid advertising. Personally managed.
        </div>
        <div style={{ fontSize: 30, color: "#b9c4bd" }}>Google Ads · Meta · Microsoft Ads · LinkedIn · Yelp</div>
      </div>
    </div>,
    size,
  )
}
