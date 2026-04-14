import { getTemplateById } from "../action";
import { TypographyH1, TypographyH3, TypographyP } from "@/components/Typography/typography";
import { Github, Globe, Terminal } from "lucide-react";
import Link from "next/link";
import { CopyButton } from "@/components/ui/copy-button";
import { Notfound2 } from "@/app/not-found";
import { div } from "motion/react-client";

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const Result = await getTemplateById(id);
  if (!Result.data) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Notfound2 />
      </div>
    );
  }

  const template = Result.data;
  const thumbUrl = template?.thumbnail;

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500 pb-16">
      <div className="space-y-4">
        <TypographyH1>{template?.title}</TypographyH1>
        {template?.subtitle && (
          <TypographyP className="text-xl text-muted-foreground">
            {template.subtitle}
          </TypographyP>
        )}
      </div>

      {template?.cliCommand && (
        <div className="flex flex-col gap-2">
          <TypographyH3 className="text-sm font-medium text-foreground">Installation</TypographyH3>
          <div className="p-4 bg-muted border border-border rounded-lg inline-flex items-center gap-3 w-full">
            <Terminal size={18} className="text-muted-foreground shrink-0" />
            <code className="text-[10px] md:text-sm font-mono flex-1 text-muted-foreground font-semibold tracking-tight overflow-x-auto">
              {template.cliCommand}
            </code>
            <CopyButton text={template.cliCommand} className="shrink-0" />
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
        {template?.previewUrl && (
          <Link
            href={template.previewUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-amber-600 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm w-[48%] justify-center text-black"
          >
            <Globe size={18} /> Live Preview
          </Link>
        )}
        {template?.githubUrl && (
          <Link
            href={template.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-background border border-input text-foreground rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm w-[48%] justify-center"
          >
            <Github size={18} /> Source Code
          </Link>
        )}
      </div>

      {template?.description && (
        <div className="pt-6 border-t border-border mt-10">
          <span className="text-lg font-semibold block mb-4">About this template</span>
          <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
            {template.description}
          </div>
        </div>
      )}
    </div>
  );
}
