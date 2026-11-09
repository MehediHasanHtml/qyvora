import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const title = "Terms and Conditions";
const description = "The terms that apply to using the Qyvora Studio website and to how project engagements are agreed.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/terms" });

const body = `These terms apply to your use of the Qyvora Studio website. By using the site you agree to them. If you do not agree, please do not use the site.

## About this website

This website is operated by Qyvora Studio, a digital product agency based in ${siteConfig.base.city}, ${siteConfig.base.country}. You can contact us at [${siteConfig.contact.email}](mailto:${siteConfig.contact.email}).

## Information on this site

We work to keep the content accurate and up to date. Articles, guides and answers on this site are general information, not professional, legal, financial or medical advice for your specific situation. Timelines and costs described on the site are typical examples, not quotes.

## Projects and services

Submitting an inquiry does not create a contract. Any project or service is governed only by a written proposal or agreement accepted by both parties, which sets out the scope, price, payment schedule, ownership of work and other terms. If anything in that agreement differs from this website, the agreement applies.

## Portfolio projects

Projects shown on this site were designed or built by the Qyvora Studio team. Each project is labeled to show whether it is client work, an internal project, a self initiated project or a concept. Third party names, websites and trademarks shown in project screenshots belong to their respective owners.

## Intellectual property

The design, text, graphics and code of this website belong to Qyvora Studio unless stated otherwise. You may share links to our pages and quote short passages with attribution. You may not copy the site or its content for commercial use without permission.

## Acceptable use

Please do not misuse the website, including by attempting to gain unauthorized access, interfering with its operation, submitting spam through forms, or using automated tools to scrape it in a way that harms its performance.

## External links

The site links to external websites, including live project previews. We are not responsible for the content or availability of websites we do not control.

## Limitation of liability

The website is provided as it is. To the extent permitted by law, Qyvora Studio is not liable for any loss arising from your use of the website or reliance on its general information. Nothing in these terms limits liability that cannot be limited by law.

## Privacy

How we handle personal information is explained in our [Privacy Policy](/privacy-policy).

## Changes

We may update these terms from time to time. The date at the top of this page shows when they last changed.`;

export default function TermsPage() {
  return <LegalPage title={title} description={description} path="/terms" updated="2026-11-09" body={body} />;
}
