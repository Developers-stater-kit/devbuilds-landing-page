import React from 'react';
import type { Metadata } from "next";
import { SectionWrapper } from '@/components/landingpage/container';
import { TypographyH1 } from '@/components/Typography/typography';
import { Tag } from '@/components/Typography/utils';
import { Sparkles, ArrowLeft, Paintbrush } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: "Templates - Coming Soon",
  description:
    "Launch-ready landing page templates for SaaS, restaurants, AI products and more. Just customize and go live.",
};

export default function TemplatesPage() {
  return (
    <SectionWrapper borders={{ left: true, right: true }}>
      <div className="mt-38 mb-12 flex flex-col items-center text-center gap-8 px-4 relative z-10 w-full py-10">
        <div className="relative group">
          {/* The pulsing shadow layer */}
          <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30 rounded-3xl blur-xl animate-pulse group-hover:bg-primary/30 transition-all duration-500" />

          {/* The main icon box */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-card border border-border shadow-md flex items-center justify-center overflow-hidden">
            <Paintbrush className="w-10 h-10 sm:w-14 sm:h-14 text-primary animate-pulse transition-transform duration-700 group-hover:scale-110" />
            <Sparkles className="absolute top-4 right-4 w-4 h-4 sm:w-5 sm:h-5 text-amber-500 animate-spin-slow opacity-80" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Tag>Coming Soon</Tag>
          <TypographyH1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold tracking-tight leading-[1.1] max-w-3xl">
            Working hard on it.<br />
            <span className="text-muted-foreground mt-3 inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-balance">
              Templates will go live soon.
            </span>
          </TypographyH1>
        </div>

        <Link href="/" className="mt-6 sm:mt-10">
          <Button size="lg" className="h-14 px-8 rounded-full text-base font-semibold group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/20 hover:shadow-primary/40 text-black bg-primary hover:bg-primary/90">
            <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
            Return to Homepage
          </Button>
        </Link>

      </div>
    </SectionWrapper>
  );
}
