import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const title = "Privacy Policy";
const description = "How Qyvora Studio collects, uses and protects personal information submitted through this website.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/privacy-policy" });

const body = `This policy explains what personal information Qyvora Studio collects through this website, why we collect it, and the choices you have. We keep it short and specific to how this site actually works.

## Who we are

Qyvora Studio is a digital product agency based in ${siteConfig.base.city}, ${siteConfig.base.country}. For any privacy question or request, email [${siteConfig.contact.email}](mailto:${siteConfig.contact.email}).

## Information we collect

**When you submit the contact form**, we receive your name, email address, the type of project if you choose one, and the message you write.

**When you email us**, we receive your email address and anything you include in the message.

**Analytics, only with your consent.** If you accept analytics cookies, Google Analytics collects information about how you use the site, such as pages viewed, approximate location, device and browser type, and referring website. If you decline, Google Analytics does not load.

**Technical logs.** Our hosting provider automatically processes basic request information, such as IP address and browser type, to deliver the site and protect it from abuse.

## How we use it

- To reply to your inquiry and discuss your project
- To prepare proposals and, if we work together, to deliver the project
- To understand which pages are useful and improve the website, if you consented to analytics
- To keep the website secure and prevent spam

We do not sell your personal information, and we do not use it for advertising.

## Legal basis

Where data protection laws such as the GDPR or UK GDPR apply, we rely on your request and our legitimate interest in responding to business inquiries, on steps taken before entering a contract, and on your consent for analytics.

## Service providers

We use a small number of trusted providers to run this website:

- **Vercel** hosts the website and processes technical request logs.
- **Web3Forms** receives inquiry form submissions and forwards them to our inbox.
- **Google** provides our email inbox and, only with your consent, Google Analytics.

These providers may process data outside your country, including in the United States. They are required to protect it under their own terms and applicable law.

## Cookies and local storage

This site stores two small preferences in your browser: your theme choice and your analytics consent choice. These are needed for the site to remember your settings. Google Analytics cookies are only set if you accept them. You can change your choice at any time with the Cookie settings link in the footer.

## How long we keep it

We keep inquiry details for up to 24 months so we can follow up on conversations, unless you ask us to delete them sooner. If you become a client, project records are kept for as long as needed for the project and for legal and accounting requirements.

## Your rights

Depending on where you live, you may have the right to access, correct, delete or receive a copy of your personal information, to object to or restrict certain processing, and to withdraw consent. To make a request, email [${siteConfig.contact.email}](mailto:${siteConfig.contact.email}). You may also complain to your local data protection authority.

## Children

This website is intended for businesses and is not directed at children.

## Changes

We will update this page if our practices change and revise the date at the top.`;

export default function PrivacyPage() {
  return <LegalPage title={title} description={description} path="/privacy-policy" updated="2026-11-09" body={body} />;
}
