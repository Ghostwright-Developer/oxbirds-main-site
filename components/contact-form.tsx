"use client"

import { useId, useRef, useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import emailjs from "@emailjs/browser"
import { siteConfig } from "@/lib/site-config"

type FieldKey = "name" | "email" | "website" | "message"
type FieldErrors = Partial<Record<FieldKey, string>>

const MAX = { name: 100, email: 254, website: 300, message: 5000, source: 500 } as const

function normalizeMessage(value: string) {
  return value.replace(/\r\n/g, "\n").replace(/\r/g, "\n")
}

function isValidEmail(value: string) {
  return !/[\r\n]/.test(value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function ContactForm({
  serviceId,
  templateId,
  publicKey,
  initialMessage = "",
}: {
  serviceId: string
  templateId: string
  publicKey: string
  initialMessage?: string
}) {
  const router = useRouter()
  const sendingRef = useRef(false)
  const nameId = useId()
  const emailId = useId()
  const websiteId = useId()
  const messageId = useId()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [message, setMessage] = useState(initialMessage)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle")

  function validate(): FieldErrors {
    const next: FieldErrors = {}
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedWebsite = website.trim()
    const trimmedMessage = normalizeMessage(message).trim()

    if (!trimmedName) next.name = "Enter your name."
    else if (trimmedName.length > MAX.name) next.name = `Keep your name under ${MAX.name} characters.`

    if (!trimmedEmail) next.email = "Enter your email address."
    else if (trimmedEmail.length > MAX.email || !isValidEmail(trimmedEmail)) next.email = "Enter a valid email address."

    if (trimmedWebsite.length > MAX.website) next.website = `Keep your website under ${MAX.website} characters.`

    if (!trimmedMessage) next.message = "Tell us what you'd like to improve."
    else if (trimmedMessage.length > MAX.message) next.message = `Keep your message under ${MAX.message} characters.`

    return next
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sendingRef.current) return

    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const order: FieldKey[] = ["name", "email", "website", "message"]
      const ids: Record<FieldKey, string> = { name: nameId, email: emailId, website: websiteId, message: messageId }
      const firstInvalid = order.find((key) => nextErrors[key])
      if (firstInvalid) document.getElementById(ids[firstInvalid])?.focus()
      return
    }

    sendingRef.current = true
    setStatus("pending")

    const sourcePage =
      typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}`.slice(0, MAX.source) : ""

    const params = {
      from_name: name.trim(),
      from_email: email.trim(),
      business_website: website.trim(),
      message: normalizeMessage(message).trim(),
      source_page: sourcePage,
    }

    try {
      if (!publicKey) throw new Error("EmailJS public key is not configured.")
      await emailjs.send(serviceId, templateId, params, { publicKey })
      setStatus("success")
      setName("")
      setEmail("")
      setWebsite("")
      setMessage("")
      setErrors({})
      router.push("/thank-you")
    } catch {
      setStatus("error")
    } finally {
      sendingRef.current = false
    }
  }

  const pending = status === "pending"

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={nameId} className="text-sm font-semibold text-ink">
            Your name <span className="font-normal text-muted-foreground">· Required</span>
          </label>
          <input
            id={nameId}
            name="from_name"
            type="text"
            required
            autoComplete="name"
            maxLength={MAX.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={pending}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${nameId}-error` : undefined}
            className="h-12 rounded-[10px] border border-input bg-card px-4 text-base text-ink placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-60"
          />
          {errors.name && (
            <p id={`${nameId}-error`} className="text-sm text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={emailId} className="text-sm font-semibold text-ink">
            Email address <span className="font-normal text-muted-foreground">· Required</span>
          </label>
          <input
            id={emailId}
            name="from_email"
            type="email"
            required
            autoComplete="email"
            maxLength={MAX.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={pending}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${emailId}-error` : undefined}
            className="h-12 rounded-[10px] border border-input bg-card px-4 text-base text-ink placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-60"
          />
          {errors.email && (
            <p id={`${emailId}-error`} className="text-sm text-destructive">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={websiteId} className="text-sm font-semibold text-ink">
          Business website <span className="font-normal text-muted-foreground">· Optional</span>
        </label>
        <input
          id={websiteId}
          name="business_website"
          type="text"
          inputMode="url"
          autoComplete="url"
          maxLength={MAX.website}
          placeholder="yourbusiness.com"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          disabled={pending}
          aria-invalid={Boolean(errors.website)}
          aria-describedby={errors.website ? `${websiteId}-error` : undefined}
          className="h-12 rounded-[10px] border border-input bg-card px-4 text-base text-ink placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-60"
        />
        {errors.website && (
          <p id={`${websiteId}-error`} className="text-sm text-destructive">
            {errors.website}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={messageId} className="text-sm font-semibold text-ink">
          What would you like to improve <span className="font-normal text-muted-foreground">· Required</span>
        </label>
        <textarea
          id={messageId}
          name="message"
          required
          rows={5}
          maxLength={MAX.message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={pending}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${messageId}-error ${messageId}-help` : `${messageId}-help`}
          className="min-h-40 rounded-[10px] border border-input bg-card px-4 py-3 text-base leading-relaxed text-ink placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-60"
        />
        <p id={`${messageId}-help`} className="text-sm text-muted-foreground">
          Include your current advertising channels, budget and goals.
        </p>
        {errors.message && (
          <p id={`${messageId}-error`} className="text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-12 w-fit items-center justify-center gap-2 rounded-[10px] bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors duration-150 hover:bg-[#4b9a5a] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? "Sending…" : "Send an inquiry"}
        </button>
        <p className="text-sm text-muted-foreground">
          {"Prefer your own email app? Email "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-semibold text-ink underline underline-offset-4 hover:text-primary"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </div>

      <div aria-live="polite" className="sr-only">
        {pending ? "Sending your message." : ""}
      </div>

      {status === "success" && (
        <p role="status" className="rounded-[10px] bg-accent px-4 py-3 text-[15px] font-medium text-accent-foreground">
          {"Your message has been sent. You can also reach oxbird at "}
          <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">
            {siteConfig.email}
          </a>
          .
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="rounded-[10px] bg-destructive/10 px-4 py-3 text-[15px] font-medium text-destructive">
          {"Your message could not be sent. Please try again, or email "}
          <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">
            {siteConfig.email}
          </a>
          {" directly."}
        </p>
      )}
    </form>
  )
}
