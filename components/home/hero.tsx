import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { ButtonLink } from "@/components/button-link"
import { PortraitPanel } from "@/components/portrait-panel"
import { PlatformLogo } from "@/components/platform-logo"
import { callCta, emailCta, platforms, resultsCta, yelpBadge } from "@/lib/site-config"

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-ink-panel">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_77%_23%,rgba(96,175,109,0.2),transparent_38%),radial-gradient(circle_at_14%_76%,rgba(72,125,91,0.12),transparent_36%),linear-gradient(135deg,#0b1914,#10261e)]" />
      <div className="container-site relative grid min-h-[calc(100svh-4.5rem)] items-center gap-12 pb-0 pt-14 md:pt-20 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-7 lg:col-span-7">
          <p className="eyebrow text-[#8fd099]">Paid advertising management</p>
          <h1
            id="hero-title"
            className="text-balance font-heading text-[42px] font-bold leading-[1.06] tracking-[-0.035em] text-ink-panel-foreground md:text-[64px] xl:text-[72px]"
          >
            Paid advertising. Personally managed.
          </h1>
          <div className="flex max-w-[36rem] flex-col gap-4 text-[17px] leading-relaxed text-ink-panel-muted md:text-[19px]">
            <p>
              Oxbird manages Google Ads, Meta and Yelp campaigns with attention to your budget, tracking and lead
              quality.
            </p>
            <p className="text-ink-panel-foreground">
              Your campaigns are personally managed by Daniel, oxbird&apos;s owner. He&apos;s also your direct
              contact.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={emailCta.href}>{emailCta.label}</ButtonLink>
            <ButtonLink href={resultsCta.href} variant="outline-light">
              {resultsCta.label}
            </ButtonLink>
          </div>

          <div className="flex flex-col gap-3 border-t border-ink-panel-foreground/15 pb-8 pt-6 sm:flex-row sm:items-center sm:gap-5 md:pb-10">
            <Link
              href="/yelp-ads"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-panel px-3 py-1.5 text-sm font-semibold text-ink-panel-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Image src={yelpBadge.src || "/placeholder.svg"} alt="" aria-hidden="true" width={24} height={24} className="size-6" />
              Yelp Advertising Partner
            </Link>
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2" aria-label="Advertising platforms we manage">
              {platforms
                .filter((p) => p !== "Yelp")
                .map((p) => (
                  <li key={p} className="flex items-center gap-1.5 text-sm font-medium text-ink-panel-muted">
                    <PlatformLogo platform={p} size={16} />
                    {p}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <figure className="flex h-full flex-col justify-end gap-3 lg:col-span-5">
          <PortraitPanel
            priority
            className="aspect-[4/5] w-full max-w-md self-center sm:max-w-sm lg:max-w-none"
            sizes="(min-width: 1024px) 480px, (min-width: 640px) 384px, 90vw"
          />
          <figcaption className="pb-6 text-sm text-ink-panel-muted">
            <span className="font-semibold text-ink-panel-foreground">Daniel</span> · Owner, oxbird
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
