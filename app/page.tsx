import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Services } from "@/components/sections/services";
import { AiStartup } from "@/components/sections/ai-startup";
import { RealEstate } from "@/components/sections/real-estate";
import { Process } from "@/components/sections/process";
import { Portfolio } from "@/components/sections/portfolio";
import { SeoAeo } from "@/components/sections/seo-aeo";
import { WhyChoose } from "@/components/sections/why-choose";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Services />
      <AiStartup />
      <RealEstate />
      <Process />
      <Portfolio />
      <SeoAeo />
      <WhyChoose />
      <FAQ />
      <FinalCTA />
    </>
  );
}
