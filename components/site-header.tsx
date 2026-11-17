"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, Phone, X } from "lucide-react"
import { OxbirdWordmark } from "@/components/bird-mark"
import { ButtonLink } from "@/components/button-link"
import { primaryNav, siteConfig, emailCta } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  useEffect(() => {
    const update = () => setCompact((current) => (current ? window.scrollY > 8 : window.scrollY > 24))
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300",
        compact ? "border-border/60 bg-background/50" : "border-transparent bg-background/25",
      )}
    >
      <div
        className={cn(
          "container-site flex items-center justify-between gap-6 transition-[height] duration-300",
          compact ? "h-12" : "h-18",
        )}
      >
        <Link href="/" aria-label="oxbird home" className="shrink-0 rounded-md transition-transform duration-300">
          <OxbirdWordmark className={cn("transition-all duration-300", compact ? "h-5 w-[88px]" : "h-6 w-[105px]")} />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors duration-200 after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:bg-primary after:transition-transform after:duration-200 hover:text-ink hover:after:scale-x-100",
                isActive(item.href) ? "text-ink after:scale-x-100" : "text-muted-foreground after:scale-x-0",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={siteConfig.phone.href}
            className="flex items-center gap-2 rounded-md text-[15px] font-medium text-ink transition-colors hover:text-primary xl:flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            <span className="hidden xl:inline">{siteConfig.phone.display}</span>
            <span className="xl:hidden">Call us</span>
          </a>
          <ButtonLink href={emailCta.href} size="sm">
            {emailCta.label}
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-12 items-center justify-center rounded-lg text-ink lg:hidden"
        >
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-border bg-background lg:hidden">
        <div className="container-site flex flex-col gap-4 pb-6 pt-3">
          <nav aria-label="Mobile" className="flex flex-col">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex min-h-12 items-center border-b border-border text-base font-medium",
                  isActive(item.href) ? "text-primary" : "text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink href={emailCta.href} className="w-full">
            {emailCta.label}
          </ButtonLink>
          <ButtonLink href={siteConfig.phone.href} variant="outline" className="w-full">
            <Phone className="size-4" aria-hidden="true" />
            Call {siteConfig.phone.display}
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}
