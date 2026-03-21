import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";
import { cn } from "@/lib/utils";

export function TerminalDemo({ className }: { className?: string }) {
  const textClasses = "text-[10px] md:text-[8px] lg:text-[11px] xl:text-[13px] leading-tight";
  return (
    <div
      className={cn(
        "w-full flex-1 min-h-0 rounded-lg border border-foreground/10 dark:border-foreground/20 bg-background dark:bg-background overflow-hidden z-20 flex flex-col mt-2 md:mt-1 lg:mt-3 xl:mt-4 shadow-inner",
        className
      )}
    >
      <div className="flex items-center gap-1 md:gap-0.5 lg:gap-1.5 px-2 py-1.5 md:px-1.5 md:py-1 lg:px-3 lg:py-2 xl:px-4 xl:py-3 border-b border-foreground/10 bg-white/5">
        <span className="h-2 w-2 md:h-1.5 md:w-1.5 lg:h-2.5 lg:w-2.5 rounded-full bg-red-500" />
        <span className="h-2 w-2 md:h-1.5 md:w-1.5 lg:h-2.5 lg:w-2.5 rounded-full bg-yellow-500" />
        <span className="h-2 w-2 md:h-1.5 md:w-1.5 lg:h-2.5 lg:w-2.5 rounded-full bg-green-500" />
      </div>

      <pre className="p-2 md:p-1.5 lg:p-3 xl:p-4 font-mono overflow-y-auto flex-1 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <code className="flex flex-col gap-y-0.5 md:gap-y-px lg:gap-y-1 xl:gap-y-1.5">
          <TypingAnimation delay={0} className={textClasses}>&gt; npx @dvbuilds/kit init</TypingAnimation>
          <AnimatedSpan delay={800} className={cn("text-green-500", textClasses)}>
            ✔ Choose the Framework.
          </AnimatedSpan>
          <AnimatedSpan delay={1000} className={cn("text-green-500", textClasses)}>
            ✔ Choose Database Engine.
          </AnimatedSpan>
          <AnimatedSpan delay={1200} className={cn("text-green-500", textClasses)}>
            ✔ Choose Your Auth Provider
          </AnimatedSpan>
          <AnimatedSpan delay={1400} className={cn("text-amber-500", textClasses)}>
            Generating Plan...
          </AnimatedSpan>
          <AnimatedSpan delay={1800} className={cn("text-green-500", textClasses)}>
            ✔ Installing dependencies.
          </AnimatedSpan>
          <TypingAnimation delay={2200} className={cn("text-muted-foreground", textClasses)}>
            Success! Project initialization completed.
          </TypingAnimation>
        </code>
      </pre>
    </div>
  );
}


export function TerminalDemo2({ className }: { className?: string }) {
  return (
    <Terminal>
      <TypingAnimation delay={0}>&gt; npx @dvbuilds/kit init</TypingAnimation>
      <AnimatedSpan delay={800} className="text-green-500">
        ✔ Choose the Framework.
      </AnimatedSpan>
      <AnimatedSpan delay={1000} className="text-green-500">
        ✔ Choose Database Engine.
      </AnimatedSpan>
      <AnimatedSpan delay={1200} className="text-green-500">
        ✔ Choose Your Auth Provider
      </AnimatedSpan>
      <AnimatedSpan delay={1400} className="text-amber-500">
        Generating Plan...
      </AnimatedSpan>
      <AnimatedSpan delay={1800} className="text-green-500">
        ✔ Installing dependencies.
      </AnimatedSpan>
      <TypingAnimation delay={2200} className="text-muted-foreground">
        Success! Project initialization completed.
      </TypingAnimation>
    </Terminal>
  );
}