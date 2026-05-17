"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, type Faq } from "@/lib/faqs";

export function FAQ({
  items,
  title = "Answers, before you ask",
  eyebrow = "FAQ",
  description = "Everything founders and marketing leads ask before kicking off a project.",
}: {
  items?: readonly Faq[];
  title?: string;
  eyebrow?: string;
  description?: string;
}) {
  const data = items ?? faqs;
  return (
    <Section id="faq" className="relative">
      <Container size="lg">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />

        <Accordion
          multiple={false}
          defaultValue={["item-0"]}
          className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface"
        >
          {data.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border-b border-border last:border-b-0 px-2 sm:px-3"
            >
              <AccordionTrigger className="font-display text-left text-base font-medium sm:text-lg px-4 py-5 hover:bg-surface-2/50 rounded-2xl hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 text-muted-foreground leading-relaxed text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
