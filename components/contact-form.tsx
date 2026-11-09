"use client";

import * as React from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, Send } from "lucide-react";
import { projectTypes, submitInquiry, validateInquiry, type InquiryErrors, type InquiryInput } from "@/lib/contact";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const empty: InquiryInput = { intent: "project", name: "", email: "", projectType: "", message: "" };
const fieldOrder: (keyof InquiryInput)[] = ["name", "email", "message"];

export function ContactForm({ email }: { email: string }) {
  const [values, setValues] = React.useState<InquiryInput>(empty);
  const [errors, setErrors] = React.useState<InquiryErrors>({});
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMessage, setErrorMessage] = React.useState("");
  const startedAt = React.useRef<number>(0);
  const formRef = React.useRef<HTMLFormElement>(null);
  const statusRef = React.useRef<HTMLDivElement>(null);

  // Prefill from links such as /contact?type=real-estate or /contact?intent=call
  React.useEffect(() => {
    startedAt.current = Date.now();
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const intent = params.get("intent");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- URL params are only available in the browser
    setValues((v) => ({
      ...v,
      intent: intent === "call" ? "call" : v.intent,
      projectType: type && projectTypes.some((p) => p.value === type) ? type : v.projectType,
    }));
  }, []);

  function update<K extends keyof InquiryInput>(key: K, value: InquiryInput[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const found = validateInquiry(values);
    setErrors(found);
    const first = fieldOrder.find((k) => found[k]);
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    const showSuccess = () => {
      setStatus("success");
      window.scrollTo({ top: (formRef.current?.getBoundingClientRect().top ?? 0) + window.scrollY - 120, behavior: "smooth" });
    };

    // Spam checks: a hidden honeypot field and a minimum time on the form.
    // Bots see a normal success screen, but nothing is sent.
    const fax = (formRef.current?.elements.namedItem("fax") as HTMLInputElement | null)?.value ?? "";
    if (fax || Date.now() - startedAt.current < 3000) {
      showSuccess();
      return;
    }

    const result = await submitInquiry(values, fax);
    if (result.ok) {
      track("generate_lead", { form: "contact", intent: values.intent, project_type: values.projectType || "none" });
      showSuccess();
      return;
    }
    setErrorMessage(
      result.reason === "network"
        ? "We could not send your message. Please check your connection and try again."
        : "Something went wrong while sending your message.",
    );
    setStatus("error");
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (status === "success") {
    const firstName = values.name.trim().split(/\s+/)[0];
    return (
      <div role="status" className="rounded-2xl border border-success/40 bg-surface p-8 sm:p-10">
        <CheckCircle2 aria-hidden className="size-10 text-success" />
        <h2 className="heading mt-5 text-[1.75rem] leading-tight text-fg">Thanks, {firstName}. We got your message.</h2>
        <p className="mt-4 leading-relaxed text-muted">
          We will reply within one business day to <strong className="text-fg">{values.email}</strong>.
        </p>
        <Link href="/projects" className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-fg hover:text-accent-text">
          Explore our projects <ArrowRight aria-hidden className="size-3.5" />
        </Link>
      </div>
    );
  }

  const submitting = status === "submitting";
  const isCall = values.intent === "call";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-surface p-6 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" error={errors.name}>
          <input type="text" autoComplete="name" value={values.name} onChange={(e) => update("name", e.target.value)} />
        </Field>
        <Field label="Email" name="email" error={errors.email}>
          <input type="email" autoComplete="email" inputMode="email" value={values.email} onChange={(e) => update("email", e.target.value)} />
        </Field>
        <Field label="What do you need?" name="projectType" optional className="sm:col-span-2">
          <select value={values.projectType} onChange={(e) => update("projectType", e.target.value)}>
            <option value="">Choose one</option>
            {projectTypes.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Message" name="message" error={errors.message} className="sm:col-span-2">
          <textarea
            rows={5}
            placeholder={isCall ? "What would you like to talk about on the call?" : "Tell us a little about your project."}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </Field>
      </div>

      {/* Honeypot: hidden from people, tempting for bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Fax number
          <input type="text" name="fax" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="assertive" className="outline-none">
        {status === "error" ? (
          <div className="mt-6 flex gap-3 rounded-xl border border-danger/40 bg-danger/10 p-4 text-sm">
            <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0 text-danger" />
            <p className="text-fg">
              {errorMessage} You can also email us at{" "}
              <a href={`mailto:${email}`} className="font-medium underline underline-offset-2">
                {email}
              </a>
              .
            </p>
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full btn-aurora px-7 text-[0.95rem] font-medium disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 aria-hidden className="size-4 animate-spin" /> Sending
          </>
        ) : (
          <>
            {isCall ? "Request a Call" : "Send Message"} <Send aria-hidden className="size-4" />
          </>
        )}
      </button>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        We only use your details to reply. See our{" "}
        <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-fg">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  optional,
  className,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactElement<React.InputHTMLAttributes<HTMLElement>>;
}) {
  const id = `field-${name}`;
  const control = React.cloneElement(children, {
    id,
    name,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
    "aria-required": optional ? undefined : true,
    className: cn(
      "mt-2 block w-full rounded-lg border bg-bg px-3.5 py-3 text-[0.95rem] text-fg placeholder:text-muted/70 transition-colors focus:outline-none focus-visible:outline-none focus:border-accent-text",
      error ? "border-danger" : "border-line-strong hover:border-fg/25",
    ),
  });
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium text-fg">
        {label}
        {optional ? <span className="ml-1.5 font-normal text-muted">(optional)</span> : null}
      </label>
      {control}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
