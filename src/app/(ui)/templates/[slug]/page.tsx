import { getTemplateBySlug, extractTextFromBlocks } from "@/lib/strapi";
import { notFound } from "next/navigation";
import { TypographyH1, TypographyH3, TypographyP } from "@/components/Typography/typography";
import { Github, Globe, Terminal } from "lucide-react";
import React from "react";
import Link from "next/link";
import { CopyButton } from "@/components/ui/copy-button";
import { marked } from 'marked';

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = await getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  const strapiUrl = process.env.PUBLIC_STRAPI_URL;
  const thumbUrl = template.thumbnail?.url
    ? template.thumbnail.url.startsWith("http")
      ? template.thumbnail.url
      : `${strapiUrl}${template.thumbnail.url}`
    : undefined;

  const subtitle = extractTextFromBlocks(template.subtitle);

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500 pb-16">
      <div className="space-y-4">
        <TypographyH1>{template.title}</TypographyH1>
        {subtitle && (
          <TypographyP className="text-xl text-muted-foreground">
            {subtitle}
          </TypographyP>
        )}
      </div>

      {template.cli_command && (
        <div className="flex flex-col gap-2">
          <TypographyH3 className="text-sm font-medium text-foreground">Installation</TypographyH3>
          <div className="p-4 bg-muted border border-border rounded-lg inline-flex items-center gap-3 w-full">
            <Terminal size={18} className="text-muted-foreground shrink-0" />
            <code className="text-[10px] md:text-sm font-mono flex-1 text-muted-foreground font-semibold tracking-tight overflow-x-auto">
              {template.cli_command}
            </code>
            <CopyButton text={template.cli_command} className="shrink-0" />
          </div>
        </div>
      )}

      {thumbUrl && (
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-border bg-muted shadow-sm max-w-5xl mt-8">
          <img
            src={thumbUrl}
            alt={template.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-row gap-4 items-center justify-stretch">
        {template.preview_url && (
          <Link
            href={template.preview_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-amber-600 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm w-[48%] justify-center text-black"
          >
            <Globe size={18} /> Live Preview
          </Link>
        )}
        {template.github_url && (
          <Link
            href={template.github_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-background border border-input text-foreground rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm w-[48%] justify-center"
          >
            <Github size={18} /> Source Code
          </Link>
        )}
      </div>

      {/* {template.description && (
        <div className="pt-6 border-t border-border mt-10">
          <span className="text-lg font-semibold block mb-4">About this template</span>
          <div
            className="prose prose-zinc dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{
              __html: marked(
                template.description
                  .replace(/\\n/g, '\n')  // convert literal \n to real newlines
                  .replace(/\\`/g, '`')   // fix escaped backticks
              )
            }}
          />
        </div>
      )} */}
    </div>
  );
}
