import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";

export function TerminalDemo({ className }: { className?: string }) {
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
