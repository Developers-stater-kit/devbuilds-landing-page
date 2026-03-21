import { TypographyH2, TypographyP } from "@/components/Typography/typography";
import { Tag } from "@/components/Typography/utils";
import { Highlighter } from "@/components/ui/highlighter";
import React from "react";
import { TemplateCard } from "@/components/landingpage/templet-section/templet-card";

const templates = [
  {
    slug: "saas-starter",
    title: "SaaS Starter",
    description:
      "A clean, conversion-focused landing page for your SaaS product.",
    thumbnail: {
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    },
    deployedUrl: "https://saas-template.devbuilds.in",
    sourceUrl: "https://github.com/devbuilds/saas-template",
    installCommand: "npx @dvbuilds/kit init --template saas",
  },
  {
    slug: "restaurant-pro",
    title: "Restaurant Pro",
    description: "Premium landing page for restaurants and cafes.",
    // thumbnail: { type: "video" as const, src: "/templates/restaurant.mp4" },
    deployedUrl: "https://restaurant.devbuilds.in",
  },
  {
    slug: "ai-product",
    title: "AI Product",
    description: "Bold landing page built for AI tools and products.",
  },
];

export default function TempletSection() {
  return (
    <div className="w-full h-fit pb-2 flex flex-col justify-start items-center pt-20 gap-16">
      {/* ── Header ── */}
      <div className="flex flex-col justify-center items-center">
        <Tag>Become Launch Ready</Tag>
        <TypographyH2 className="font-medium">
          Beautiful{" "}
          <Highlighter action="underline" color="#FF9800">
            templates.
          </Highlighter>{" "}
          Ready to go live.
        </TypographyH2>
        <TypographyP className="pt-2 text-center px-2 md:px-0 md:w-xl lg:w-2xl">
          Handcrafted, production-ready landing pages—designed to help you launch faster and look your best, without any hassle.
        </TypographyP>
      </div>

      {/* ── Templets Grid ── */}
      <div className="w-full border-t-2 border-dashed">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-border divide-dashed gap-2 lg:gap-0 px-2 pt-2">
          {templates.map((template) => (
            <TemplateCard
              key={template.slug}
              slug={template.slug}
              title={template.title}
              description={template.description}
              //   thumbnail={template.thumbnail}
              deployedUrl={template.deployedUrl}
              sourceUrl={template.sourceUrl}
              installCommand={template.installCommand}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
