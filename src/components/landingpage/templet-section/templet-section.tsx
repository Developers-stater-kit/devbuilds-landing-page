import { TypographyH2, TypographyP } from "@/components/Typography/typography";
import { Tag } from "@/components/Typography/utils";
import { Highlighter } from "@/components/ui/highlighter";
import { TemplateCard } from "@/components/landingpage/templet-section/templet-card";
import { getFeaturedTemplates, extractTextFromBlocks } from "@/lib/strapi";

export default async function TempletSection() {
  const templates = await getFeaturedTemplates();
  const strapiUrl = process.env.PUBLIC_STRAPI_URL || "http://localhost:1337";

  const DUMMY_TEMPLATES = [
    {
      slug: "dummy-ecommerce",
      title: "E-Commerce Starter",
      description: "A full-featured e-commerce storefront built with Next.js and Stripe.",
    },
    {
      slug: "dummy-saas-dashboard",
      title: "SaaS Dashboard",
      description: "A clean SaaS dashboard with analytics, billing, and user management.",
    },
    {
      slug: "dummy-blog",
      title: "Blog & CMS",
      description: "A minimal blog starter with MDX support and dark mode out of the box.",
    },
  ];

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

          {/* Real templates from API */}
          {templates.map((template) => {
            const thumbUrl = template.thumbnail?.url
              ? template.thumbnail.url.startsWith("http")
                ? template.thumbnail.url
                : `${strapiUrl}${template.thumbnail.url}`
              : undefined;
            return (
              <TemplateCard
                key={template.slug}
                slug={template.slug}
                title={template.title}
                description={extractTextFromBlocks(template.subtitle)}
                thumbnail={thumbUrl ? { type: "image" as const, src: thumbUrl } : undefined}
                deployedUrl={template.preview_url ? template.preview_url : undefined}
                sourceUrl={template.github_url ? template.github_url : undefined}
                installCommand={template.cli_command ? template.cli_command : undefined}
              />
            );
          })}

          {/* Dummy blurred coming soon cards */}
          {DUMMY_TEMPLATES.slice(0, Math.max(0, 3 - templates.length)).map((dummy) => (
            <div key={dummy.slug} className="relative">
              <div className="pointer-events-none select-none opacity-50 blur-[2px]">
                <TemplateCard
                  slug={dummy.slug}
                  title={dummy.title}
                  description={dummy.description}
                />
              </div>
              {/* Coming Soon overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground/50 border border-dashed border-foreground/20 px-4 py-1.5 rounded-full bg-background/60 backdrop-blur-sm">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
