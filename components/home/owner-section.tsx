import { TextLink } from "@/components/button-link"
import { PortraitPanel } from "@/components/portrait-panel"
import { Reveal } from "@/components/reveal"

export function OwnerSection() {
  return (
    <section aria-labelledby="owner-title" className="container-site py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-4">
          <PortraitPanel
            className="aspect-square w-full max-w-xs md:max-w-none"
            sizes="(min-width: 768px) 360px, 320px"
            position="50% 18%"
          />
        </Reveal>
        <Reveal delay={120} className="md:col-span-8 lg:col-span-7">
          <div className="flex flex-col gap-5">
            <p className="eyebrow">Our story</p>
            <h2
              id="owner-title"
              className="text-balance text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-ink md:text-[40px]"
            >
              Built from real campaign experience.
            </h2>
            <p className="max-w-xl text-pretty text-[17px] leading-relaxed text-muted-foreground md:text-lg">
              {
                "Daniel's path into paid advertising began with a service-based business, long before he founded oxbird. That background still shapes how your account is managed."
              }
            </p>
            <TextLink href="/about">Watch the story behind oxbird</TextLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
