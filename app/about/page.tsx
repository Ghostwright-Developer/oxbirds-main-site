import { ButtonLink } from "@/components/button-link"
import { CtaSection } from "@/components/cta-section"
import { Reveal } from "@/components/reveal"
import { pageMetadata } from "@/lib/page-metadata"
import { emailCta, storyVideo } from "@/lib/site-config"

export const metadata = pageMetadata(
  "How oxbird began",
    "The story behind oxbird and Daniel's path from managing paid advertising for a growing service-based business to founding the agency.",
  "/about",
)

const chapters = [
  {
    title: "Learning through business growth",
    body: "Daniel began in online marketing with a service-based company in California. As the company expanded into markets across the country, paid advertising became an important part of reaching each new market.",
  },
  {
    title: "Managing across brands",
    body: "That experience led to work across multiple brands, with paid media becoming his focus. He later joined a larger, fast-growing organization and took on broader responsibilities.",
  },
  {
    title: "Starting oxbird",
    body: "Daniel founded oxbird to keep advertising management close to the person responsible for the work. That experience still shapes the careful attention given to budgets, tracking, lead quality and the next campaign decision.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="container-site pb-10 pt-12 md:pb-12 md:pt-20">
        <div className="flex max-w-3xl flex-col gap-5">
          <p className="eyebrow">Our story</p>
          <h1 className="text-balance text-[36px] font-semibold leading-[1.08] tracking-[-0.025em] text-ink md:text-[56px]">
            How oxbird began
          </h1>
          <p className="text-pretty text-[17px] leading-relaxed text-muted-foreground md:text-[19px]">
            oxbird grew from Daniel&apos;s experience managing paid advertising for a growing service-based business,
            then managing campaigns across multiple brands and working at a larger organization. The video tells that
            story in his own words.
          </p>
        </div>
      </section>

      <section aria-labelledby="story-video-title" className="container-site pb-16 md:pb-24">
        <Reveal className="mx-auto flex max-w-5xl flex-col gap-5">
          <h2 id="story-video-title" className="text-balance text-[28px] font-semibold tracking-[-0.02em] text-ink md:text-[34px]">
            The story behind oxbird
          </h2>
          <video
            controls
            preload="metadata"
            playsInline
            poster="/images/my-story-poster.jpg"
            className="aspect-video w-full rounded-2xl border border-border bg-ink"
          >
            <source src={storyVideo.src} type="video/mp4" />
            Your browser does not support the video element.
          </video>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Daniel describes the business experience that led him to paid advertising and, eventually, to founding oxbird.
          </p>
        </Reveal>
      </section>

      <section aria-label="Daniel's path to oxbird" className="border-y border-border bg-card">
        <div className="container-site py-16 md:py-24">
          <div className="flex flex-col">
            {chapters.map((chapter, i) => (
              <Reveal key={chapter.title} delay={i * 80}>
                <article className="grid gap-3 border-b border-border py-8 first:border-t-2 first:border-t-ink md:grid-cols-12 md:gap-8 md:py-10">
                  <h2 className="text-balance text-2xl font-semibold leading-snug tracking-[-0.015em] text-ink md:col-span-5 md:text-[28px]">
                    {chapter.title}
                  </h2>
                  <p className="max-w-xl text-pretty text-[17px] leading-relaxed text-muted-foreground md:col-span-7">
                    {chapter.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16 md:py-20">
        <Reveal className="flex max-w-2xl flex-col items-start gap-5">
          <h2 className="text-balance text-[28px] font-semibold tracking-[-0.02em] text-ink md:text-[34px]">
            How that experience shapes the work today
          </h2>
          <p className="text-[17px] leading-relaxed text-muted-foreground">
            Campaign decisions stay connected to the business receiving the inquiries. Daniel personally manages the
            work and remains the direct point of contact.
          </p>
          <ButtonLink href={emailCta.href}>{emailCta.label}</ButtonLink>
        </Reveal>
      </section>

      <CtaSection title="Ready to discuss your advertising" showCall={false} />
    </>
  )
}
