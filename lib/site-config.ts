// Public facts only: brand, contact, pricing, navigation, results,
// testimonials and media. Every route reads from here so prices, links and
// figures stay identical across the site.

export const siteConfig = {
  name: "oxbird",
  url: "https://oxbird.com",
  phone: {
    display: "(928) 275-1316",
    href: "tel:+19282751316",
  },
  email: "daniel@oxbird.com",
} as const

// The primary action sitewide: send an inquiry through the Contact page
// form. Navigation, service CTAs, pricing CTAs and the final page CTA all
// route here.
export const emailCta = {
  label: "Send an inquiry",
  href: "/contact#contact-form",
}

export const onboardingCta = {
  label: "Ask about onboarding",
  href: "/contact?topic=onboarding#contact-form",
}

export const resultsCta = {
  label: "See campaign results",
  href: "/results",
}

export const yelpCta = {
  label: "Ask about Yelp Ads",
  href: "/contact?topic=yelp#contact-form",
}

export const callCta = {
  label: "Call oxbird",
  href: siteConfig.phone.href,
}

export const tierCta = {
  grow: {
    label: "Ask about Grow",
    href: "/contact?topic=grow#contact-form",
  },
  dominate: {
    label: "Ask about Dominate",
    href: "/contact?topic=dominate#contact-form",
  },
}

// Editable message starters prefilled into the Contact form's message field
// based on the ?topic= query param a CTA links with. The visitor can edit
// or clear this text before sending.
export const contactTopics: Record<string, string> = {
  onboarding: "I'd like to ask about onboarding.\n\nBusiness website:\nCurrent advertising channels:\nGoals:",
  yelp: "I'd like to discuss Yelp Ads management for my business.\n\nCurrent Yelp presence:\nBudget:\nGoals:",
  grow: "I'd like to discuss the Grow plan (up to $5,000/month in ad spend).\n\nBusiness website:\nCurrent advertising channels:\nGoals:",
  dominate:
    "I'd like to discuss the Dominate plan (up to $10,000/month in ad spend).\n\nBusiness website:\nCurrent advertising channels:\nGoals:",
}

export const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Yelp Ads", href: "/yelp-ads" },
  { label: "Results", href: "/results" },
  { label: "Our story", href: "/about" },
  { label: "Pricing", href: "/pricing" },
] as const

export const footerNav = [...primaryNav, { label: "Contact", href: "/contact" }] as const

export const platforms = ["Google Ads", "Meta", "Microsoft Ads", "LinkedIn", "Yelp"] as const

export const pricing = {
  onboarding: {
    price: "$495",
    inclusions: [
      "Market research",
      "Account setup",
      "Text, image and video ads",
      "Reporting dashboard",
      "Technical integrations",
      "Conversion tracking",
      "Kickoff meeting",
    ],
    turnaround: "Typical 14-day turnaround.",
  },
  tiers: [
    {
      id: "grow",
      name: "Grow",
      price: "$495",
      threshold: "Up to $5,000/month in ad spend",
    },
    {
      id: "dominate",
      name: "Dominate",
      price: "$695",
      threshold: "Up to $10,000/month in ad spend",
    },
  ],
  sharedInclusions: [
    "Weekly optimization",
    "Creative asset refresh",
    "Daily monitoring",
    "Ongoing correspondence",
    "Monthly written performance update",
  ],
  custom: "Above $10,000/month in ad spend? We'll provide a custom quote.",
} as const

export const terms = "No long-term contracts; cancel anytime."

// Each case links a reported figure to its evidence screenshot. sourceCaption
// states only what the image shows; narrative explains what changed.
export const results = [
  {
    id: "engraving",
    stat: "42%",
    label: "lower cost per lead",
    platform: "Google Ads",
    descriptor: "Nationwide industrial engraving",
    heading: "42% lower cost per lead.",
    narrative:
      "After management began, campaigns were refined over 90 days. Reported cost per lead fell 42%. The accompanying chart shows the cost trend.",
    short: "Campaign refinement over 90 days.",
    image: {
      src: "/images/cases/case_engraving.png",
      alt: "Google Ads campaign chart showing cost per conversion declining after a point marked \"Began Managing.\"",
    },
    sourceCaption: "The chart marks when management began and shows cost per conversion declining afterward.",
  },
  {
    id: "barber",
    stat: "59%",
    label: "more website leads",
    platform: "Meta Ads",
    descriptor: "Multi-location barber shop",
    heading: "59% more website leads.",
    narrative:
      "After taking over the account, we revised the advertising strategy and creative. Reported website leads rose 58.82% while cost per lead fell 18.74% over the same period.",
    short: "Revised strategy and creative.",
    image: {
      src: "/images/cases/case_barber.png",
      alt: "Meta Ads results panel showing website leads up 58.82% and cost per lead down 18.74%.",
    },
    sourceCaption: "Website leads rose 58.82% while cost per lead fell 18.74% over the same period.",
  },
  {
    id: "barn",
    stat: "88%",
    label: "lower cost per conversion",
    platform: "Google Ads",
    descriptor: "Vintage barn builder",
    heading: "Cost per conversion fell 88% from September to November.",
    narrative:
      "Cost per conversion fell from $1,006.73 in September to $119.19 in November. Conversion volume remained low, with 1, 5 and 4 conversions across those months.",
    short: "Cost per conversion fell from September to November.",
    image: {
      src: "/images/cases/case_barn.png",
      alt: "Monthly campaign table showing cost per conversion falling from $1,006.73 in September to $119.19 in November.",
    },
    sourceCaption: "Cost per conversion: $1,006.73 (September) → $185.19 (October) → $119.19 (November).",
  },
  {
    id: "dental",
    stat: "79%",
    label: "more conversions",
    platform: "Google Ads",
    descriptor: "Dental clinic in Houston, TX",
    heading: "79% more conversions, without increasing the ad budget.",
    narrative:
      "We improved the landing page to help more visitors reach the clinic. The reported conversion comparison shows an increase from 86 to 154 across the two periods shown, a 79.07% increase, without a corresponding increase in the advertising budget.",
    short: "Landing-page improvements without increasing spend.",
    image: {
      src: "/images/cases/case_dental.png",
      alt: "Campaign comparison table showing conversions increasing from 86 to 154, a 79.07% increase.",
    },
    sourceCaption: "Conversions rose from 86 to 154 across the two periods shown, a 79.07% increase.",
  },
  {
    id: "attorney",
    stat: "2×",
    label: "lead volume",
    platform: "Google Ads",
    descriptor: "New York personal injury attorney",
    heading: "Reported outcome: lead volume doubled after six weeks.",
    narrative:
      "The account's reported outcome was doubled lead volume after six weeks. Shown here, conversion rate rose from 10.71% to 20.87% while cost per conversion fell from $272.65 to $172.42; the table does not show lead counts.",
    short: "Account optimization over several weeks.",
    image: {
      src: "/images/cases/case_attorney.png",
      alt: "Monthly table showing conversion rate rising from 10.71% to 20.87% and cost per conversion falling from $272.65 to $172.42.",
    },
    sourceCaption: "Conversion rate rose from 10.71% to 20.87%; cost per conversion fell from $272.65 to $172.42.",
  },
  {
    id: "cleaning",
    stat: "56%",
    label: "lower cost per lead",
    platform: "Google Ads",
    descriptor: "Commercial cleaning company",
    heading: "56% lower cost per lead within a month of taking over.",
    narrative:
      "We took over this account at the end of September. By the end of October, the monthly table shows reported cost per conversion falling from $156.91 to $68.35, a reduction of about 56%.",
    short: "Cost per lead fell within one month of taking over.",
    image: {
      src: "/images/cases/case_cleaning.png",
      alt: "Monthly table showing cost per conversion falling from $156.91 in September to $68.35 in October.",
    },
    sourceCaption: "Cost per conversion: $156.91 (September) → $68.35 (October).",
  },
] as const

export const testimonials = [
  {
    quote: "Great firm that helped double my ROAS in 1 month.",
    name: "Omayya Atout",
    role: "Founder",
    company: "Songlorious",
    image: "/images/testimonial-omayya-atout.png",
  },
  {
    quote: "oxbird has provided our company with outstanding service! They are responsive and get the job done.",
    name: "Elijah Lee",
    role: "Business Development Manager",
    company: "Harbinger Marketing",
    image: "/images/testimonial-elijah-lee.png",
  },
  {
    quote: "Between a high influx of call volume, to an increase of walk-ins, our business has grown.",
    name: "Danny Anderson",
    role: "Shop Manager",
    company: "Downtown Paint & Body",
    image: "/images/testimonial-danny-anderson.png",
  },
] as const

export const adVideos = [
  {
    title: "Be seen. Be successful.",
    youtubeId: "kBXHYRgnxQg",
    poster: "/images/posters/kBXHYRgnxQg.jpg",
    format: "Video ad",
  },
  {
    title: "Custom Touch",
    youtubeId: "bgxtIJBuToM",
    poster: "/images/posters/bgxtIJBuToM.jpg",
    format: "Video ad",
  },
] as const

export const adCreatives = [
  {
    title: "Remarketing",
    src: "/images/ads/remarketing-336x280.gif",
    alt: "Animated 336 by 280 pixel remarketing display ad",
    industry: "Remarketing banner",
  },
  {
    title: "Auto dealership",
    src: "/images/ads/auto-dealer-336x280.gif",
    alt: "Animated 336 by 280 pixel display ad for a vehicle dealership",
    industry: "Automotive banner",
  },
  {
    title: "Real estate",
    src: "/images/ads/real-estate-336x280.gif",
    alt: "Animated 336 by 280 pixel display ad for a real estate listing",
    industry: "Real estate banner",
  },
] as const

export const managementPoints = [
  {
    title: "Find wasted spend",
    body: "We review search terms, targeting and campaign structure to identify spending that isn't serving the account.",
  },
  {
    title: "Check lead quality",
    body: "We look beyond the platform's conversion count to the calls, forms and inquiries your business receives.",
  },
  {
    title: "Improve with purpose",
    body: "We refine budgets, bidding, ads and creative against account history and the response we're seeing.",
  },
] as const

export const processStages = [
  { stage: "Monitor", body: "We watch spend, delivery and account health." },
  { stage: "Diagnose", body: "We review targeting, traffic, tracking and lead quality together." },
  { stage: "Act", body: "We make changes with account history and business goals in view." },
  { stage: "Validate", body: "We check the response to those changes before deciding what comes next." },
  {
    stage: "Report",
    body: "We explain performance and our next steps through reporting and a monthly written update.",
  },
] as const

// A real client dashboard, with the client's details left visible on the
// chrome (business name, URL) but anonymized by the client's own request
// where noted in the caption. No fabricated figures.
export const dashboardExample = {
  image: {
    src: "/images/dashboard-sunridge.png",
    alt: "Looker Studio dashboard showing impressions, clicks, cost, leads, cost per lead and conversion rate, daily performance, campaign performance, leads by landing page, leads by location, monthly performance and search term performance.",
  },
  caption: "Example dashboard with client details anonymized for display.",
} as const

export const yelpBadge = {
  src: "/images/badges/yelp-advertising-partner.png",
  alt: "Yelp Advertising Partner badge",
} as const

export const storyVideo = {
  src: "/videos/my-story.mp4",
  poster: "/images/my-story-poster.jpg",
} as const
