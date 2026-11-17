// EmailJS service and template IDs are not secret; they only route the
// request. The public key is read server-side from process.env.Key and
// passed into the client form as a prop in app/contact/page.tsx.
export const emailjsServiceId = "oxbird-sender"
export const emailjsTemplateId = "template_eq20sql"
