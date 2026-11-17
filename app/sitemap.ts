import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

const routes = ["", "/services", "/yelp-ads", "/results", "/about", "/pricing", "/contact"]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }))
}
