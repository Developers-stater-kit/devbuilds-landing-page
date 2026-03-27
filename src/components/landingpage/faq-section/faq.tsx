"use client";

import { TypographyH2, TypographyP } from "@/components/Typography/typography";
import { Tag, Cursive } from "@/components/Typography/utils";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly is DevBuilds?",
    answer:
      "DevBuilds is a dev agency that also ships open source tools and templates. We build products for founders, provide launch-ready landing page templates, and maintain DevKit — a free CLI tool that scaffolds your entire dev stack in minutes.",
  },
  {
    question: "What is DevKit and is it really free?",
    answer:
      "Yes, completely free and open source forever. DevKit is a CLI tool that sets up your Next.js project with Drizzle ORM and BetterAuth fully configured in under 4 minutes. No paywalls, no premium tiers.",
  },
  {
    question: "How fast can you deliver an MVP?",
    answer:
      "Depends on scope but most MVPs are delivered in 2-4 weeks. We move faster than most agencies because we use our own tooling to skip the setup phase entirely.",
  },
  {
    question: "Can I customize a template myself or do you do it for me?",
    answer:
      "Both. Free templates come with source code you can customize yourself. If you want us to customize and deploy it for you, just reach out and we'll give you a quote.",
  },
  {
    question: "What tech stack do you build with?",
    answer:
      "We use the latest and most reliable web technologies for all our projects, such as React and Next.js, but we're flexible and can adapt to client preferences as needed.",
  },
  {
    question: "How do I start a project with DevBuilds?",
    answer:
      'Hit the "Start a Project" button anywhere on the site, fill out a short form about your idea and budget, and we\'ll get back to you within 24 hours.',
  },
  {
    question: "Do I need coding knowledge to use your templates?",
    answer:
      "Basic knowledge helps for customization but we also offer a done-for-you customization service if you don't want to touch the code yourself.",
  },
  {
    question: "Can I contribute to Devkit Cli?",
    answer:
      "Absolutely. DevKit is open source on GitHub. PRs, issues, and feature suggestions are all welcome. Check the repo and the contributing guide to get started.",
  },
];

export default function FaqSection() {
  return (
    <div
      className="w-full flex flex-col justify-start items-center gap-16"
      id="faq"
    >
      {/* ── Header ── */}
      <div className="flex flex-col justify-center items-center text-center mt-16">
        <Tag>Got Questions?</Tag>
        <TypographyH2 className="font-medium mb-2">
          The stuff people <Cursive classname="inline-block">always</Cursive>{" "}
          ask.
        </TypographyH2>
        <TypographyP className="text-center px-4 lg:px-0 lg:text-lg text-muted-foreground leading-relaxed">
          Here are the questions most founders and developers ask before getting
          started.
        </TypographyP>
      </div>

      {/* ── Accordion ── */}
      <div className="w-full border-t-2 border-dashed ">
        <div className="max-w-2xl mx-auto py-4 flex flex-col gap-3 px-2 border-x-2 border-dashed">
          <Accordion type="single" collapsible className="flex flex-col gap-3 border-none">
            {faqs.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-border rounded-2xl bg-card px-5 shadow-sm hover:border-border/80 transition-colors duration-150 data-[state=open]:border-border"
              >
                <AccordionTrigger className="text-sm font-medium text-foreground py-4 hover:no-underline [&>svg]:hidden [&>*:last-child]:hidden">
                  <span className="flex-1 text-left">{item.question}</span>
                  <span className="ml-4 shrink-0 text-muted-foreground text-xl leading-none">
                    +
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
