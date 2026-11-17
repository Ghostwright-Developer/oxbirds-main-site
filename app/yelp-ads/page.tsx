import Image from "next/image"
import { Phone } from "lucide-react"
import { ButtonLink } from "@/components/button-link"
import { CtaSection } from "@/components/cta-section"
import { FaqList } from "@/components/faq-list"
import { SectionHeading } from "@/components/section-heading"
import { pageMetadata } from "@/lib/page-metadata"
import { callCta, yelpBadge, yelpCta } from "@/lib/site-config"

export const metadata = pageMetadata(
  "Yelp Ads",
  "Yelp advertising managed by oxbird, a Yelp partner. We review your Yelp presence, goals and budget, then manage the program.",
  "/yelp-ads",
)

const inclusions = [
  "Business-profile and advertising review",
  "Category, service-area and budget review",
  "Campaign setup or takeover",
  "Photo, copy and profile recommendations",
  "Inquiry and performance review",
  "Ongoing communication about changes and next steps",
]

const faqs = [
  {
    q: "Can we work with you if we're already advertising on Yelp?",
    a: "Yes. We can review the existing advertising and discuss management with you.",
  },
  {
    q: "Can you manage Yelp alongside our other advertising?",
    a: "Yes. We can discuss Yelp alongside Google Ads, Meta and other channels within the scope of our work.",
  },
  {
    q: "Does the partnership guarantee more leads?",
    a: "No. Results depend on the business, competition, budget and response to the advertising.",
  },
  {
    q: "Can advertising management change our reviews or rating?",
    a: "Advertising management does not control Yelp reviews or ratings.",
  },
  {
    q: "How do we start?",
    a: "Contact us with your business name, current Yelp presence and advertising goals.",
  },
]

export default function YelpAdsPage() {
  return (
    <>
      <section className="container-site pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="grid gap-10 overflow-hidden rounded-2xl bg-ink-panel px-6 py-12 md:px-12 md:py-20">
          <div className="flex max-w-3xl flex-col gap-6">
            <p className="inline-flex w-fit items-center gap-2 rounded-lg border border-ink-panel-foreground/25 px-3 py-1.5 text-sm font-semibold text-ink-panel-foreground">
              <Image
                src={yelpBadge.src || "/placeholder.svg"}
                alt={yelpBadge.alt}
                width={22}
                height={22}
                className="size-[22px]"
              />
              Yelp Advertising Partner
            </p>
            <h1 className="text-balance text-[36px] font-bold leading-[1.08] tracking-[-0.025em] text-ink-panel-foreground md:text-[56px]">
              Yelp advertising, managed by oxbird.
            </h1>
            <p className="max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-panel-muted md:text-[19px]">
              We help businesses evaluate their Yelp advertising, set up or take over the program, and review the
              inquiries and costs that follow. You work directly with our owner, Daniel, who personally manages your
              ads.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <ButtonLink href={yelpCta.href} variant="light">
                {yelpCta.label}
              </ButtonLink>
              <ButtonLink href={callCta.href} variant="outline-light">
                <Phone className="size-4" aria-hidden="true" />
                {callCta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="start-title" className="container-site pb-16 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeading
            id="start-title"
            className="lg:col-span-5"
            title="Start with your business, not a preset budget."
            intro="We review your category, service area, Yelp presence, competition and goals before recommending an approach. The quality of the inquiries and how your business handles them matter alongside the advertising numbers."
          />
          <div className="flex flex-col gap-5 lg:col-span-6 lg:col-start-7">
            <h2 className="text-xl font-bold text-ink">What our management includes.</h2>
            <ul className="flex flex-col border-t-2 border-ink">
              {inclusions.map((item) => (
                <li key={item} className="border-b border-border py-4 text-[17px] font-medium text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="picture-title" className="border-y border-border bg-secondary">
        <div className="container-site py-16 md:py-20">
          <SectionHeading
            id="picture-title"
            title="A channel within the wider advertising picture."
            intro="We can discuss Yelp on its own or alongside your other paid advertising. We review the cost and usefulness of the inquiries to help guide the next decision."
          />
        </div>
      </section>

      <section aria-labelledby="yelp-faq-title" className="container-site py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionHeading
            id="yelp-faq-title"
            className="lg:col-span-4"
            title="Questions about working with a Yelp partner."
          />
          <div className="lg:col-span-8">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <CtaSection
        title="Let's talk about your Yelp advertising."
        body="Tell us what you're running today and what you want to improve."
        primary={yelpCta}
      />
    </>
  )
}
