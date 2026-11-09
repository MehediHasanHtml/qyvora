import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import {
  AiDevelopment,
  Expertise,
  FeaturedProjects,
  HomeFaq,
  Industries,
  Process,
  Services,
  Testimonials,
  WhyQyvora,
} from "@/components/home/sections";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, graph, ids, webPageSchema } from "@/lib/schema";
import { homeFaqs } from "@/lib/content/home";

const title = "Qyvora Studio | AI Development and Digital Product Agency";
const description =
  "Qyvora Studio builds AI powered websites, intelligent web applications and scalable SaaS platforms for startups and ambitious businesses worldwide.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/", absoluteTitle: true });

export default function HomePage() {
  return (
    <>
      <Hero />
      <Expertise />
      <Services />
      <Industries />
      <AiDevelopment />
      <FeaturedProjects />
      <WhyQyvora />
      <Process />
      <Testimonials />
      <HomeFaq />
      <CtaBand />
      <JsonLd
        data={graph(
          webPageSchema({ path: "/", name: title, description, hasBreadcrumb: false, about: ids.organization }),
          faqSchema("/", homeFaqs),
        )}
      />
    </>
  );
}
