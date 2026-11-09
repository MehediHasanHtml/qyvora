/** Contact form options, validation and delivery through Web3Forms. */

/**
 * Web3Forms access key (https://web3forms.com). It is a public key by design:
 * it only lets the form send messages to the inbox it was created for.
 * The free plan accepts submissions from the browser only, so the form posts
 * directly from the client. Override with NEXT_PUBLIC_WEB3FORMS_KEY if needed.
 */
export const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "357de24e-f926-442d-96f3-ef3a39ad66ac";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/** Optional "What do you need?" choices. Links such as /contact?type=healthcare preselect one. */
export const projectTypes = [
  { value: "ai-website", label: "AI powered website" },
  { value: "ai-web-app", label: "AI web application" },
  { value: "ai-saas", label: "AI SaaS product" },
  { value: "ai-chatbot", label: "AI chatbot or agent" },
  { value: "ai-integration", label: "AI integration or automation" },
  { value: "business-website", label: "Business or corporate website" },
  { value: "startup-website", label: "Startup website" },
  { value: "landing-page", label: "Landing page" },
  { value: "redesign", label: "Website redesign or optimization" },
  { value: "web-app", label: "Custom web application or dashboard" },
  { value: "saas", label: "SaaS platform" },
  { value: "mvp", label: "MVP for a startup" },
  { value: "automotive", label: "Car dealership or automotive website" },
  { value: "real-estate", label: "Real estate website" },
  { value: "healthcare", label: "Healthcare or doctor website" },
  { value: "law-firm", label: "Law firm website" },
  { value: "other", label: "Something else" },
] as const;

export type InquiryInput = {
  /** "call" when the visitor came from a "book a call" link. */
  intent: "project" | "call";
  name: string;
  email: string;
  projectType: string;
  message: string;
};

export type InquiryErrors = Partial<Record<keyof InquiryInput, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateInquiry(input: InquiryInput): InquiryErrors {
  const e: InquiryErrors = {};
  if (input.name.trim().length < 2) e.name = "Please enter your name.";
  else if (input.name.length > 100) e.name = "Please keep your name under 100 characters.";
  if (!EMAIL.test(input.email.trim()) || input.email.length > 200) e.email = "Please enter a valid email address.";
  if (input.message.trim().length < 10) e.message = "Please write a short message (at least 10 characters).";
  else if (input.message.length > 5000) e.message = "Please keep your message under 5,000 characters.";
  return e;
}

export type SubmitResult = { ok: true } | { ok: false; reason: "rejected" | "network" };

/** Sends a validated message to Web3Forms, which emails it to the site inbox. */
export async function submitInquiry(input: InquiryInput, botcheck: string): Promise<SubmitResult> {
  const kind = input.intent === "call" ? "Discovery call request" : "New message";
  const need = projectTypes.find((p) => p.value === input.projectType)?.label;
  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: `${kind} from ${input.name.trim()}${need ? `: ${need}` : ""}`,
    from_name: "Qyvora Studio website",
    // Web3Forms rejects the message when its honeypot field is filled in.
    botcheck,
    // Field names below become the labels in the email.
    name: input.name.trim(),
    email: input.email.trim(),
    replyto: input.email.trim(),
    "Looking for": need ?? "Not specified",
    message: input.message.trim(),
  };
  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
    });
    const data = (await res.json().catch(() => ({}))) as { success?: boolean };
    return res.ok && data.success ? { ok: true } : { ok: false, reason: "rejected" };
  } catch {
    return { ok: false, reason: "network" };
  }
}
