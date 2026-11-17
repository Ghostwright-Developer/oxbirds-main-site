"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ArrowUp } from "lucide-react"

export function SiteMotion() {
  const pathname = usePathname()
  const [showTop, setShowTop] = useState(false)
  const resetScrollOnNextRoute = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined" || !("history" in window)) return
    window.history.scrollRestoration = "manual"

    const [entry] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[]
    if (entry?.type === "reload" || entry?.type === "back_forward") {
      window.scrollTo({ top: 0, behavior: "auto" })
    }
  }, [])

  useEffect(() => {
    const handleInternalNavigation = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>("a[href]")
      if (!link || link.target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const destination = new URL(link.href, window.location.href)
      const isNewRoute = destination.origin === window.location.origin && destination.pathname !== window.location.pathname
      resetScrollOnNextRoute.current = isNewRoute && !destination.hash
      if (resetScrollOnNextRoute.current) sessionStorage.setItem("oxbird-reset-scroll", "true")
    }

    document.addEventListener("click", handleInternalNavigation)
    return () => document.removeEventListener("click", handleInternalNavigation)
  }, [])

  useEffect(() => {
    if (resetScrollOnNextRoute.current) {
      const frame = window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "auto" })
        resetScrollOnNextRoute.current = false
      })
      return () => window.cancelAnimationFrame(frame)
    }
  }, [pathname])

  useEffect(() => {
    const update = () => setShowTop(window.scrollY > 600)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-5 z-40 inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-ink shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transform-none ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  )
}
                                                              
