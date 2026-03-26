import React from "react";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyH3 } from "../Typography/typography";
import { Cursive, Tag } from "../Typography/utils";
import { Play, Star } from "lucide-react";
import Link from "next/link";
import { FaApple, FaAws, FaDribbble, FaGithub, FaSlack } from "react-icons/fa";
import { SiBetterauth, SiNextdotjs, SiNotion, SiPrisma, SiStripe, SiSupabase, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";

export function CTASection() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start relative border-2 border-dashed dark:border-white/10 rounded-xl bg-background overflow-hidden p-10 md:p-14 lg:p-20 transition-colors duration-500">
      {/* Soft gradient background matching reference image with light/dark adaptive blending */}
      <div className="absolute top-[-30%] right-[0%] w-[60%] h-[70%] bg-amber-200 dark:bg-[#FF9800] rounded-full blur-[120px] pointer-events-none opacity-70 mix-blend-multiply dark:mix-blend-screen transition-colors duration-500" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[80%] bg-pink-300 dark:bg-[#ec4899] rounded-full blur-[120px] pointer-events-none opacity-60 dark:opacity-80 mix-blend-multiply dark:mix-blend-screen transition-colors duration-500" />
      <div className="absolute bottom-[-50%] left-[5%] w-[50%] h-[60%] bg-blue-300 dark:bg-[#3981f6] rounded-full blur-[120px] pointer-events-none opacity-60 mix-blend-multiply dark:mix-blend-screen transition-colors duration-500" />

      <div className="relative z-10 mx-auto flex flex-col justify-center items-center text-center">
        <Tag>What are you waiting for?</Tag>
        <TypographyH2 className="font-medium text-zinc-900 dark:text-white leading-tight tracking-tight transition-colors duration-500">
          Beautiful pages. Ready before lunch.
        </TypographyH2>
        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-200 max-w-md xl:max-w-2xl transition-colors duration-500">
          Pick a template, make it yours, go live today. No designer needed. No dev setup required. Just pick and ship.
        </p>
        <Button
          className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 rounded-full px-8 py-6 mt-3 text-base font-semibold transition-all shadow-lg dark:shadow-none"
          asChild
        >
          <Link href="/contact">
            Browse Templates →
          </Link>
        </Button>
      </div>
    </div>
  );
}

export function CTA2() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-background p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 group">

      {/* Background Orbs (Matching Bento Grid Style) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-amber-500/10 rounded-full blur-[100px] transition-all duration-700 group-hover:bg-amber-500/20" />
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-orange-500/5 rounded-full blur-[80px]" />
      </div>

      {/* Left Content */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-start text-left">
        <TypographyH2 className="text-3xl md:text-5xl font-medium text-foreground tracking-tight leading-[1.15] mb-2">
          Your Next <br />Product <Cursive classname="inline-block text-amber-600">Starts Here.</Cursive>
        </TypographyH2>
        <p className="text-muted-foreground text-sm md:text-base max-w-[420px] leading-relaxed">
          Got an idea, a business, or a product that needs to exist? We're the team that makes it happen.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <Link href="/contact">
            <Button variant="outline" className="rounded-xl border-border bg-background/50 hover:bg-foreground/5 text-foreground transition-colors h-11 px-5">
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Content (Testimonial Card) */}
      <div className="relative z-10 w-full lg:w-1/2 flex justify-end">
        <div className="w-full  bg-card/60 backdrop-blur-xl  rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden group-hover:border-amber-500/20 transition-colors duration-500">

          {/* Subtle Inner Card Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[40px] pointer-events-none" />

          <div className="relative z-10">
            {/* <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div> */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 font-light">
              "We started DevBuilds because we believed great products shouldn't be held back by slow teams, endless back-and-forth, or bloated timelines. You have an idea. We have the skills. Let's just build it."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 overflow-hidden border border-amber-500/20 shrink-0">
                <img
                  src="https://wsrv.nl/?url=https://cdn.hyrecruitai.com/website-assets/images/2fc213ad-b99c-4d8d-8f15-2d9c43c45290-debojeet.jpg"
                  alt="Debojeet"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground tracking-wide">Debojeet</span>
                <span className="text-[10px] text-muted-foreground tracking-wider uppercase mt-0.5">Founder of DevBuilds</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


export function CTA3() {
  return (
    <div className="relative w-full overflow-hidden px-6 py-24 flex flex-col items-center justify-center">

      {/* Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,color-mix(in_srgb,var(--foreground)_6%,transparent)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none" />
      {/* Concentric Rings */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] opacity-70 pointer-events-none flex items-center justify-center">
        <div className="relative w-full h-full animate-[spin_60s_linear_infinite]">
          {/* Ring 1 - Outer */}
          <div className="absolute inset-[10%] rounded-full border border-foreground/30">

            {/* Top Left - GitHub */}
            <div className="absolute top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2">
              <div className="animate-[spin_60s_linear_infinite_reverse]">
                <div className="w-12 h-12 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border rounded-xl flex items-center justify-center shadow-2xl">
                  <FaGithub className="text-black dark:text-white w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Top Right - Vercel */}
            <div className="absolute top-[14.6%] left-[85.4%] -translate-x-1/2 -translate-y-1/2">
              <div className="animate-[spin_60s_linear_infinite_reverse]">
                <div className="w-12 h-12 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border rounded-xl flex items-center justify-center shadow-2xl">
                  <SiVercel className="text-black dark:text-white w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Bottom Left - Stripe */}
            <div className="absolute top-[85.4%] left-[14.6%] -translate-x-1/2 -translate-y-1/2">
              <div className="animate-[spin_60s_linear_infinite_reverse]">
                <div className="w-12 h-12 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border rounded-xl flex items-center justify-center shadow-2xl">
                  <SiStripe className="text-black dark:text-white w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Bottom Right - Next.js */}
            <div className="absolute top-[85.4%] left-[85.4%] -translate-x-1/2 -translate-y-1/2">
              <div className="animate-[spin_60s_linear_infinite_reverse]">
                <div className="w-12 h-12 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border rounded-xl flex items-center justify-center shadow-2xl">
                  <SiNextdotjs className="text-black dark:text-white w-5 h-5" />
                </div>
              </div>
            </div>

          </div>

          {/* Ring 2 */}
          <div className="absolute inset-[22%] rounded-full border border-foreground/40">

            {/* Tailwind */}
            <div className="absolute top-[50%] right-0 translate-x-1/2 -translate-y-1/2">
              <div className="animate-[spin_60s_linear_infinite_reverse]">
                <div className="w-14 h-14 bg-white/80 dark:bg-zinc-900/80 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl">
                  <SiTailwindcss className="text-black dark:text-white w-6 h-6" />
                </div>
              </div>
            </div>

            {/* TypeScript */}
            <div className="absolute bottom-[8%] left-[24%] -translate-x-1/2 translate-y-1/2">
              <div className="animate-[spin_60s_linear_infinite_reverse]">
                <div className="w-12 h-12 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center shadow-2xl">
                  <SiTypescript className="text-black dark:text-white w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Prisma */}
            <div className="absolute top-[8%] left-[24%] -translate-x-1/2 -translate-y-1/2">
              <div className="animate-[spin_60s_linear_infinite_reverse]">
                <div className="w-12 h-12 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center shadow-2xl">
                  <SiPrisma className="text-black dark:text-white w-5 h-5" />
                </div>
              </div>
            </div>

          </div>

          {/* Ring 3 */}
          <div className="absolute inset-[33%] rounded-full border border-foreground/60 bg-white/1">

            {/* Supabase - Bottom */}
            <div className="absolute bottom-[3%] left-[50%] -translate-x-1/2 translate-y-1/2">
              <div className="animate-[spin_60s_linear_infinite_reverse]">
                <div className="w-16 h-16 bg-white/80 dark:bg-zinc-900/80 border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(99,91,255,0.15)]">
                  <SiSupabase className="text-black dark:text-white w-6 h-6" />
                </div>
              </div>
            </div>

            {/* BetterAuth - Top Left */}
            <div className="absolute top-[3%] left-[25%] -translate-x-1/2 -translate-y-1/2">
              <div className="animate-[spin_60s_linear_infinite_reverse]">
                <div className="w-16 h-16 bg-white/80 dark:bg-zinc-900/80 border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(99,91,255,0.15)]">
                  <SiBetterauth className="text-black dark:text-white w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Stripe - Top Right */}
            <div className="absolute top-[3%] left-[75%] -translate-x-1/2 -translate-y-1/2">
              <div className="animate-[spin_60s_linear_infinite_reverse]">
                <div className="w-16 h-16 bg-white/80 dark:bg-zinc-900/80 border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(99,91,255,0.15)]">
                  <SiStripe className="text-black dark:text-white w-6 h-6" />
                </div>
              </div>
            </div>

          </div>

          {/* Ring 4 - Inner */}
          <div className="absolute inset-[44%] rounded-full border border-foreground/60 bg-white/2 shadow-[0_0_80px_rgba(255,255,255,0.05)_inset]" />
        </div>
      </div>

      {/* CTA Content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-16">
        <TypographyH2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
          Built with the stack <br/>you already love
        </TypographyH2>

        <Link href="/contact">
          <Button className="bg-foreground text-background hover:bg-foreground rounded-full px-8 py-6 mt-4 md:mt-6 text-sm md:text-base font-semibold transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] hover:-translate-y-1">
            Let's Build Together
          </Button>
        </Link>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 w-full h-[250px] bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}