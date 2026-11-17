import Link from "next/link"
import { OxbirdWordmark } from "@/components/bird-mark"
import { PlatformLogo } from "@/components/platform-logo"
import { footerNav, platforms, siteConfig } from "@/lib/site-config"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative isolate overflow-hidden bg-ink-panel">
      <div aria-hidden="true" className="dark-panel-radial pointer-events-none absolute inset-0" />
      <div className="container-site relative grid gap-10 py-14 md:grid-cols-12">
        <div className="flex flex-col gap-4 md:col-span-5">
          <OxbirdWordmark tone="inverted" />
          <p className="max-w-sm text-[15px] leading-relaxed text-ink-panel-muted">
            Paid advertising management across search and social.
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2" aria-label="Advertising platforms we manage">
            {platforms.map((p) => (
              <li key={p} className="flex items-center gap-1.5 text-sm text-ink-panel-muted">
                <PlatformLogo platform={p} size={16} />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-1 md:col-span-3">
          <h2 className="mb-2 text-sm font-semibold text-ink-panel-foreground">Site</h2>
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-1.5 text-[15px] text-ink-panel-muted transition-colors hover:text-ink-panel-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-1 md:col-span-4">
          <h2 className="mb-2 text-sm font-semibold text-ink-panel-foreground">Contact</h2>
          <a
            href={siteConfig.phone.href}
            className="py-1.5 text-[15px] text-ink-panel-muted hover:text-ink-panel-foreground"
          >
            {siteConfig.phone.display}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="py-1.5 text-[15px] text-ink-panel-muted hover:text-ink-panel-foreground"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
      <div className="relative border-t border-ink-panel-foreground/15">
        <div className="container-site py-6 text-sm text-ink-panel-muted">
          {"© "}
          {year} oxbird
        </div>
      </div>
    </footer>
  )
}
