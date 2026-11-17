import type { Metadata } from "next"

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | oxbird`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description, url: path, siteName: "oxbird", type: "website" },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  }
}
