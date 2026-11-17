import { ButtonLink } from "@/components/button-link"
import { ContactForm } from "@/components/contact-form"
import { PortraitPanel } from "@/components/portrait-panel"
import { emailjsServiceId, emailjsTemplateId } from "@/lib/emailjs"
import { pageMetadata } from "@/lib/page-metadata"
import { callCta, contactTopics, siteConfig } from "@/lib/site-config"

export const metadata = pageMetadata(
  "Contact",
  "Send oxbird an inquiry about your advertising. You'll work directly with our owner, Daniel, who personally manages your campaigns.",
  "/contact",
)

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
  const topicParam = params.topic
  const topic = typeof topicParam === "string" ? topicParam : undefined
  const initialMessage = (topic && contactTopics[topic]) ?? ""
  const emailjsPublicKey = process.env.Key ?? ""

  return (
    <section className="container-site pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <div className="flex flex-col gap-5">
            <p className="eyebrow">Contact oxbird</p>
            <h1 className="text-balance text-[36px] font-bold leading-[1.08] tracking-[-0.025em] text-ink md:text-[56px]">
              Tell us about your advertising.
            </h1>
            <p className="max-w-xl text-pretty text-[17px] leading-relaxed text-muted-foreground md:text-[19px]">
              {
                "Share what you're running and what you want to improve. Your message goes directly to Daniel, oxbird's owner and the person who manages your campaigns."
              }
            </p>
          </div>

          <div id="contact-form" className="flex flex-col gap-3 scroll-mt-24">
            <h2 className="text-xl font-bold text-ink">Send an inquiry</h2>
            <ContactForm
              serviceId={emailjsServiceId}
              templateId={emailjsTemplateId}
              publicKey={emailjsPublicKey}
              initialMessage={initialMessage}
            />
            <p className="text-sm text-muted-foreground">
              Prefer to call?{" "}
              <a href={siteConfig.phone.href} className="font-semibold text-ink underline-offset-4 hover:underline">
                {siteConfig.phone.display}
              </a>
              . If the form won&apos;t send, email{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-ink underline-offset-4 hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
          <figure className="flex flex-col gap-3">
            <PortraitPanel className="aspect-[4/5] w-full max-w-[220px]" sizes="220px" />
            <figcaption className="text-sm text-muted-foreground">
              <span className="font-semibold text-ink">Daniel</span> · Owner, oxbird
            </figcaption>
          </figure>

          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-secondary p-5">
            <p className="text-[15px] leading-relaxed text-ink">
              Every inquiry goes directly to Daniel. He personally reviews and manages every account, so you&apos;re
              never routed to someone else.
            </p>
            <ButtonLink href={callCta.href} variant="outline" size="sm" className="w-fit">
              {callCta.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
