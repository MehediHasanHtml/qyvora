"use client";

import * as React from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/site";


export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`New project · ${data.get("name") ?? ""}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name") ?? ""}\nEmail: ${data.get("email") ?? ""}\nCompany: ${data.get("company") ?? ""}\n ""}\n\n${data.get("message") ?? ""}`,
    );
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-success/30 bg-success/5 p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-success" />
        <h3 className="mt-4 font-display text-xl font-semibold">Your mail client is opening</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          If nothing happened, email me directly at{" "}
          <a className="font-medium text-foreground underline" href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>
          . I reply within 12 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-border bg-surface p-7 sm:p-9">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Your name</Label>
          <Input className="p-3 h-auto" id="name" name="name" required autoComplete="name" placeholder="Jane Founder" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work email</Label>
          <Input className="p-3 h-auto" id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company / project</Label>
        <Input className="p-3 h-auto" id="company" name="company" placeholder="Claude AI · pre-seed agent platform" />
      </div>



      <div className="space-y-2">
        <Label htmlFor="message">Tell me about your project</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="What are you building, what's the timeline, and what does success look like?"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          By submitting you agree to receive a reply from {siteConfig.founder.name} within 12 hours.
        </p>
        <Button type="submit" variant="gradient" size="lg">
          Send message <Send className="size-4" />
        </Button>
      </div>

      <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
        <Mail className="size-3.5" />
        Or email{" "}
        <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-foreground underline-offset-4 hover:underline">
          {siteConfig.contact.email}
        </a>
      </div>
    </form>
  );
}
