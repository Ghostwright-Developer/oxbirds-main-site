import Image from "next/image"
import { ButtonLink } from "@/components/button-link"
import { Reveal } from "@/components/reveal"
import { yelpBadge } from "@/lib/site-config"

const reviewPoints = ["Your Yelp presence", "Advertising goals", "Budget", "Inquiries and performance"]

export function YelpFeature({
  title = "Yelp Ads management from a Yelp partner.",
  body = "We review your Yelp presence, advertising goals and budget, then manage the advertising with ongoing attention to inquiries and performance.",
}: {
  title?: string
  body?: string
}) {
  return (
    <section aria-labelledby="yelp-title" className="container-site">
      <Reveal className="grid gap-10 overflow-hidden rounded-2xl bg-ink-panel px-6 py-12 md:px-12 md:py-16 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-5 lg:col-span-7">
          <p className="inline-flex w-fit items-center gap-2 rounded-lg border border-ink-panel-foreground/25 px-3 py-1.5 text-sm font-semibold text-ink-panel-foreground">
            <Image src={yelpBadge.src || "/placeholder.svg"} alt="" aria-hidden="true" width={20} height={20} className="size-5" />
            Yelp partner
          </p>
          <h2
            id="yelp-title"
            className="text-balance text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-ink-panel-foreground md:text-[40px]"
          >
            {title}
          </h2>
          <p className="max-w-xl text-pretty text-[17px] leading-relaxed text-ink-panel-muted md:text-lg">{body}</p>
          <div className="pt-2">
            <ButtonLink href="/yelp-ads" variant="light">
              Explore Yelp Ads
            </ButtonLink>
          </div>
        </div>
        <div className="flex flex-col gap-3 self-end lg:col-span-5">
          <p className="text-sm font-semibold text-[#8fcfa6]">What we look at</p>
          <ul className="flex flex-col">
            {reviewPoints.map((point) => (
              <li
                key={point}
                className="border-b border-ink-panel-foreground/15 py-4 text-lg font-medium text-ink-panel-foreground first:border-t"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
