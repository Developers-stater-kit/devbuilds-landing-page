import React from "react";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";

export default function CTASection() {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center px-6 py-12 bg-gradient-to-br from-amber-50 via-white to-background dark:from-background dark:via-background dark:to-background relative">
      {/* Soft background circle for depth */}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-400/20 rounded-full blur-3xl w-[400px] h-[200px] pointer-events-none" />
      <div className="relative z-10 flex flex-col justify-center items-center gap-6 max-w-xl text-center rounded-2xl p-10 shadow-none">
        <div className="inline-block mb-2 px-4 py-1 bg-amber-100/80 dark:bg-amber-500/10 rounded-full text-amber-700 dark:text-amber-400 text-xs uppercase tracking-wide font-semibold">
          Ready to launch?
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-2 leading-tight">
          <span className="whitespace-nowrap">
            <Highlighter action="underline" color="#FF9800">
              Build your next project
            </Highlighter>
          </span>
          {" "}with <span className="text-amber-500">DevKit</span>
        </h2>
        <p className="text-md md:text-lg text-muted-foreground w-2xl mx-auto mb-4">
          Jumpstart your SaaS or product landing with production-grade, beautiful templates. No more busywork—just <span className="text-amber-500 font-semibold">one command</span> to go live.
        </p>
        <div className="flex flex-col md:flex-row gap-3 justify-center mt-2">
          <Button
            asChild
            className="px-8 py-3 text-lg font-semibold bg-amber-500 hover:bg-amber-600 shadow-lg transition"
            size="lg"
          >
            <a href="https://github.com/devbuilds/saas-template" target="_blank" rel="noopener noreferrer">
              Get Started Free
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="px-8 py-3 text-lg font-semibold border-amber-400/80 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/30 transition"
            size="lg"
          >
            <a href="/contact">
              Talk to DevBuilds
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
