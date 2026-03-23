import React from 'react';
import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/landingpage/container';

export const metadata: Metadata = {
  title: "About Us | DevBuilds",
  description: "Learn about Debojeet and why DevBuilds was started to bridge world-class aesthetics with high-performance engineering.",
};

import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from '@/components/Typography/typography';
import { ArrowRight, Code2, Layers, PenTool, Database, Bot, Workflow, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { CTA2 } from '@/components/landingpage/cta';
import { Tag } from '@/components/Typography/utils';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="mx-auto min-h-screen">
      {/* Hero Section */}
      <SectionWrapper borders={{ left: true, right: true }}>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 py-20 mt-20  px-4 md:px-8 w-full max-w-5xl mx-auto">
          <div className="w-full md:w-2/3 flex flex-col gap-2">
            <Tag>About Us</Tag>
            <TypographyH1 className="text-5xl md:text-6xl lg:text-[5rem] font-medium tracking-tight leading-[1.1]">
              I'm Debojeet.<br />
              <span className="text-muted-foreground text-3xl md:text-4xl lg:text-[2.5rem] mt-2 block leading-snug">
                Founder & Full-Stack Developer.
              </span>
            </TypographyH1>
            <Link href="https://debojeet.in" target='_blank' className='flex justify-start items-center gap-0 group text-foreground/50'>
              <Button variant={"link"} className='text-xl text-foreground/50 p-0'>debojeet.in </Button>
              <ArrowRight className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={24} />
            </Link>
          </div>

          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-4xl overflow-hidden border-8 border-background shadow-2xl ring-1 ring-border mt-4 md:mt-0 rotate-3 transition-transform hover:rotate-0 duration-500">
              <img
                src="https://wsrv.nl/?url=https://cdn.hyrecruitai.com/website-assets/images/2fc213ad-b99c-4d8d-8f15-2d9c43c45290-debojeet.jpg"
                alt="Debojeet"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* The Story */}
      <SectionWrapper borders={{ left: true, right: true, top: true }}>
        <div className="max-w-5xl mx-auto py-24 px-4 md:px-8 flex flex-col gap-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <div className="flex flex-col items-center md:items-start gap-2 mb-2">
            <Tag>Origin Story</Tag>
            <TypographyH2 className="text-foreground text-3xl md:text-4xl">Why I Started This Agency.</TypographyH2>
          </div>
          <p>
            With years of experience as a full-stack developer, I realized that building great products isn't just about code—it's about solving real business problems beautifully.
          </p>
          <p>
            I started DevBuilds to bridge the gap between world-class aesthetics and high-performance engineering. I have the technical skills, the design obsession, and the absolute drive to build premium web experiences from scratch.
          </p>
          <p>
            My goal is simple: to help businesses bring their ambitious ideas to life, scale their vision into reality, and grow together. Let's build something exceptional.
          </p>
        </div>
      </SectionWrapper>

      {/* Services We Provide */}
      <SectionWrapper borders={{ left: true, right: true, top: true }}>
        <div className="max-w-5xl mx-auto py-24 px-4 md:px-8 w-full">
          <div className="flex flex-col items-center md:items-start gap-2 mb-14">
            <Tag>Services</Tag>
            <TypographyH2 className="text-center md:text-left text-3xl md:text-4xl text-foreground">Expertise & Offerings.</TypographyH2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 pb-10 rounded-3xl bg-card border border-border flex flex-col gap-6 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                <Code2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Web Design & Development</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">End-to-end creation of highly aesthetic, robust, and scalable web applications built natively with modern frameworks from pixel-perfect designs.</p>
            </div>

            <div className="p-8 pb-10 rounded-3xl bg-card border border-border flex flex-col gap-6 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Workflow className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Custom Solutions</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">Tailored backend architectures, automation scaffolding, and internal workflows explicitly crafted to solve unique business bottlenecks.</p>
            </div>

            <div className="p-8 pb-10 rounded-3xl bg-card border border-border flex flex-col gap-6 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground leading-tight">Launch-Ready Templates</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">High-converting templates and premium landing pages for businesses, helping founders go live instantly and scale effortlessly.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* The Stack */}
      <SectionWrapper borders={{ left: true, right: true, top: true }}>
        <div className="max-w-5xl mx-auto py-24 px-4 md:px-8 w-full">
          <div className="flex flex-col items-center md:items-start gap-2 mb-14">
            <Tag>Stack</Tag>
            <TypographyH2 className="text-center md:text-left text-3xl md:text-4xl text-foreground">Tools of the Trade</TypographyH2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col gap-6 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-border/50">
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-semibold">Core Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-6">
                <TechBadge>Next.js</TechBadge>
                <TechBadge>React</TechBadge>
                <TechBadge>Drizzle ORM</TechBadge>
                <TechBadge>BetterAuth</TechBadge>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-border/50">
              <div className="flex items-center gap-3">
                <Bot className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl font-semibold">AI & Automation</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-6">
                <TechBadge>Antigravity</TechBadge>
                <TechBadge>Claude</TechBadge>
                <TechBadge>n8n</TechBadge>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-border/50">
              <div className="flex items-center gap-3">
                <PenTool className="w-6 h-6 text-pink-500" />
                <h3 className="text-xl font-semibold">Design</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-6">
                <TechBadge>Stitch</TechBadge>
                <TechBadge>Figma</TechBadge>
                <TechBadge>Tailwind CSS</TechBadge>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper borders={{ left: true, right: true, top: true }} innerClassName="my-0">
        <div className="p-2">
          <CTA2 />
        </div>
      </SectionWrapper>
    </div>
  );
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3.5 py-1.5 bg-background border border-border rounded-xl text-sm font-medium text-foreground shadow-sm">
      {children}
    </span>
  );
}