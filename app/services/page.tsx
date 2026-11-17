import { ButtonLink, TextLink } from "@/components/button-link"
import { CtaSection } from "@/components/cta-section"
import { CreativeGallery } from "@/components/creative-gallery"
import { PlatformLogo } from "@/components/platform-logo"
import { PageIntro, SectionHeading } from "@/components/section-heading"
import { YelpFeature } from "@/components/yelp-feature"
import { Reveal } from "@/components/reveal"
import { pageMetadata } from "@/lib/page-metadata"
import { emailCta, pricing, processStages } from "@/lib/site-config"

export const metadata = pageMetadata(
  "Services",
  "Google Ads, Meta, Microsoft Ads and LinkedIn advertising management with tracking and creative. You work directly with our owner, Daniel.",
  "/services",
)

const googleTypes = ["Search", "Performance Max", "Demand Gen", "Display", "YouTube"]

const channels = [
  {
    name: "Meta",
    title: "Creative and campaigns that work together.",
    body: "We manage Facebook and Instagram advertising with attention to the audience, creative and response. The work can support lead generation or ecommerce, depending on the business.",
  },
  {
    name: "Microsoft Ads",
    title: "Additional search coverage where it fits.",
    body: "Microsoft Ads management can extend search coverage to audiences using Bing and its partner network when the account economics support it.",
  },
  {
    name: "LinkedIn",
    title: "Reach a relevant professional audience.",
    body: "LinkedIn Ads management helps suitable B2B campaigns reach professional audiences by role, industry and company context.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="container-site pb-16 pt-12 md:pb-20 md:pt-20">
        <PageIntro
          eyebrow="Our services"
          title="Advertising management across search and social."
          intro="We manage campaigns, tracking and creative with your business goals in view. You work directly with our owner, Daniel, who personally manages your ads."
        >
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <ButtonLink href={emailCta.href}>{emailCta.label}</ButtonLink>
            <ButtonLink href="/pricing" variant="outline">
              View pricing
            </ButtonLink>
          </div>
        </PageIntro>
      </section>

      <section aria-labelledby="google-title" className="border-y border-border bg-card">
        <div className="container-site grid gap-10 py-16 md:py-24 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-7">
            <p className="eyebrow flex items-center gap-2">
              <PlatformLogo platform="Google Ads" size={18} />
              Google Ads
            </p>
            <h2
              id="google-title"
              className="text-balance text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-[48px]"
            >
              {"Reach people when they're looking."}
            </h2>
            <p className="max-w-xl text-pretty text-[17px] leading-relaxed text-muted-foreground md:text-lg">
              We manage Google Ads around the searches, audiences and actions that matter to your business. Search is a
              core part of the work; the wider campaign mix can include Performance Max, Demand Gen, Display and YouTube
              when the account and goals support it.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-ink">
              Conversion tracking and call measurement help us understand what the traffic becomes.
            </p>
          </div>
          <ul className="flex flex-col self-end lg:col-span-5" aria-label="Google campaign types we work with">
            {googleTypes.map((t, i) => (
              <Reveal key={t} delay={i * 60}>
                <li className="flex items-baseline justify-between border-b border-border py-4 text-lg font-semibold text-ink first:border-t-2 first:border-t-ink">
                  {t}
                  <span className="text-sm font-medium text-muted-foreground">{i === 0 ? "Core" : "When it fits"}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Other paid channels" className="container-site py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {channels.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <div className="flex flex-col gap-3 border-t-2 border-ink pt-5">
                <p className="eyebrow flex items-center gap-2">
                  <PlatformLogo platform={c.name} size={18} />
                  {c.name}
                </p>
                <h2 className="text-balance text-2xl font-bold leading-snug tracking-[-0.015em] text-ink">{c.title}</h2>
                <p className="text-base leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <YelpFeature
        title="Local discovery, with partner management."
        body="As a Yelp partner, we help businesses review their Yelp advertising opportunity and manage the program."
      />

      <section aria-labelledby="process-title" className="container-site py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              id="process-title"
              title="How we manage the account."
              intro="A continuous cycle that repeats as the account learns."
            />
          </Reveal>
          <ol className="flex flex-col lg:col-span-8">
            {processStages.map((s, i) => (
              <Reveal key={s.stage} delay={i * 70}>
                <li className="grid gap-2 border-b border-border py-6 first:border-t-2 first:border-t-ink sm:grid-cols-[10rem_1fr] sm:gap-8">
                  <span className="text-xl font-bold text-ink">{s.stage}</span>
                  <span className="text-[17px] leading-relaxed text-muted-foreground">{s.body}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="creative-title" className="border-t border-border bg-card">
        <div className="container-site flex flex-col gap-10 py-16 md:py-24">
          <Reveal>
            <SectionHeading
              id="creative-title"
              title="Creative built for the campaign."
              intro="We bring copy, images, display assets and video into the work when the campaign calls for them."
            />
          </Reveal>
          <CreativeGallery />
        </div>
      </section>

      <section aria-labelledby="onboarding-title" className="container-site py-16 md:py-24">
        <Reveal>
          <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 md:p-10 lg:grid-cols-12">
            <div className="flex flex-col gap-4 lg:col-span-7">
              <h2 id="onboarding-title" className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-ink md:text-[36px]">
                A clear start.
              </h2>
              <p className="text-pretty text-[17px] leading-relaxed text-muted-foreground">
                Our one-time onboarding covers market research, account setup, ads, reporting, technical integrations,
                conversion tracking and a kickoff meeting.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:col-span-5 lg:items-end lg:text-right">
              <p className="text-[40px] font-bold leading-none tracking-[-0.03em] text-ink tabular-nums">
                {pricing.onboarding.price}
              </p>
              <p className="text-[15px] text-muted-foreground">One-time onboarding. {pricing.onboarding.turnaround}</p>
              <TextLink href="/pricing">View pricing</TextLink>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaSection
        title="Let's discuss your account."
        body="Bring your current campaigns, questions or goals. We'll talk through the work and whether oxbird is a good fit."
      />
    </>
  )
}
