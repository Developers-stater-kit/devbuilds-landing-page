import React from "react";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyH3 } from "../Typography/typography";
import { Cursive, Tag } from "../Typography/utils";
import { Play, Star } from "lucide-react";

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
          Let's build something people actually want.
        </TypographyH2>
        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-200 max-w-md xl:max-w-xl transition-colors duration-500">
          From first line of code to live product — DevBuilds has every piece.
        </p>
        <Button
          className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 rounded-full px-8 py-6 mt-3 text-base font-semibold transition-all shadow-lg dark:shadow-none"
          asChild
        >
          <a href="https://github.com/devbuilds/saas-template" target="_blank" rel="noopener noreferrer">
            Get Started Free
          </a>
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
          Your Next <br/>Product <Cursive classname="inline-block text-amber-600">Starts Here.</Cursive>
        </TypographyH2>
        <p className="text-muted-foreground text-sm md:text-base max-w-[420px] leading-relaxed">
          Got an idea, a business, or a product that needs to exist? We're the team that makes it happen.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <Button variant="outline" className="rounded-xl border-border bg-background/50 hover:bg-foreground/5 text-foreground transition-colors h-11 px-5">
            Start Your Project
          </Button>
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
              "We built DvKit because we were tired of spending day one on configuration instead of building. That same obsession with speed is what we bring to every client project."
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
