import { TypographyH2, TypographyP } from "@/components/Typography/typography";
import { Tag } from "@/components/Typography/utils";
import { Highlighter } from "@/components/ui/highlighter";
import { TemplateCard } from "@/components/landingpage/templet-section/templet-card";
import { getFeaturedTemplates, extractTextFromBlocks } from "@/lib/strapi";

export default async function TempletSection() {
  const templates = await getFeaturedTemplates();
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

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
          {templates.map((template) => {
            // Ensure thumbnail URL is absolute if it's a relative path starting with /
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
        </div>
      </div>
    </div>
  );
}
