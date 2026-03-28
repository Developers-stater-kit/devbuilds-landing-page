import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TypographyH1, TypographyP } from "@/components/Typography/typography";

// ─── Dummy Data ───────────────────────────────────────────────────────────────

const UI_COMPONENTS: {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  preview: string;
}[] = [];

const COMING_SOON_PLACEHOLDERS = [
  { title: "Noise Background", description: "Animated gradient background with noise texture and smooth motion.", tags: ["Background", "Gradient"] },
  { title: "Magnetic Button", description: "A button that follows the cursor with a smooth magnetic pull effect.", tags: ["Button", "Interactive"] },
  { title: "Glowing Card", description: "A card with a radial glow that follows the cursor position.", tags: ["Card", "Glow"] },
  { title: "Text Reveal", description: "Smooth word-by-word text reveal animation triggered on scroll.", tags: ["Typography", "Animation"] },
  { title: "Bento Grid", description: "A responsive bento-style grid layout for showcasing features.", tags: ["Layout", "Grid"] },
  { title: "Marquee", description: "An infinite scrolling marquee for logos, testimonials, or content.", tags: ["Animation", "Scroll"] },
];

// ─── Mini Preview ─────────────────────────────────────────────────────────────

function MiniPreview({ type }: { type: string }) {
  const previews: Record<string, React.ReactNode> = {
    noise: (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,100,150,0.2)_0%,rgba(100,150,255,0.1)_50%,transparent_70%)]" />
        <button className="relative px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white text-xs">
          Start publishing →
        </button>
      </div>
    ),
    magnetic: (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center">
        <button className="px-5 py-2 rounded-full bg-white text-black text-xs font-semibold shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          Hover me
        </button>
      </div>
    ),
    glow: (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-4">
        <div className="w-full h-full rounded-xl border border-white/10 bg-white/5 relative overflow-hidden flex items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl" />
          <span className="text-white/60 text-xs">Card content</span>
        </div>
      </div>
    ),
    text: (
      <div className="w-full h-full bg-zinc-950 flex items-center justify-center px-6">
        <p className="text-white text-sm font-medium text-center leading-relaxed opacity-80">
          Beautiful text reveal animation
        </p>
      </div>
    ),
    bento: (
      <div className="w-full h-full bg-zinc-950 p-3 grid grid-cols-3 grid-rows-2 gap-1.5">
        <div className="col-span-2 rounded-lg bg-white/5 border border-white/10" />
        <div className="row-span-2 rounded-lg bg-white/5 border border-white/10" />
        <div className="rounded-lg bg-white/5 border border-white/10" />
        <div className="rounded-lg bg-white/5 border border-white/10" />
      </div>
    ),
    marquee: (
      <div className="w-full h-full bg-zinc-950 flex items-center overflow-hidden">
        <div className="flex gap-4 animate-[marquee_4s_linear_infinite] whitespace-nowrap">
          {["Logo", "Brand", "Name", "Tag", "Logo", "Brand", "Name", "Tag"].map((t, i) => (
            <span key={i} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs">
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div className="relative w-full aspect-video bg-muted overflow-hidden">
      {previews[type] ?? (
        <div className="w-full h-full flex items-center justify-center bg-muted">
          <span className="text-xs text-muted-foreground font-mono">preview</span>
        </div>
      )}
    </div>
  );
}

// ─── Component Card ───────────────────────────────────────────────────────────

function ComponentCard({ slug, title, description, tags, preview }: typeof UI_COMPONENTS[0]) {
  return (
    <div className="group flex flex-col bg-card text-card-foreground overflow-hidden shadow-sm transition-colors duration-200 border border-dashed border-border rounded-lg">
      <MiniPreview type={preview} />
      <Link
        href={`/templates/ui/${slug}`}
        className="p-4 flex flex-col flex-1 border-t border-border min-h-[142px]"
      >
        <div className="flex items-start justify-between gap-2">
          <span className="text-base font-semibold text-foreground leading-tight">{title}</span>
          <span className="mt-0.5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-foreground flex">
            <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]" />
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mt-1 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-md border border-border bg-muted text-[10px] font-medium text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}

// ─── Coming Soon Card ─────────────────────────────────────────────────────────

function ComingSoonCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
  return (
    <div className="relative rounded-lg border border-dashed border-border overflow-hidden">
      {/* Blurred card content */}
      <div className="pointer-events-none select-none blur-[3px] opacity-50">
        {/* Fake thumbnail */}
        <div className="w-full aspect-video bg-muted flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 opacity-40">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            <span className="text-[10px] font-mono text-muted-foreground">preview</span>
          </div>
        </div>
        {/* Fake body */}
        <div className="p-4 flex flex-col border-t border-border min-h-[142px] bg-card">
          <div className="flex items-start justify-between gap-2">
            <span className="text-base font-semibold text-foreground leading-tight">{title}</span>
            <ArrowUpRight size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mt-1 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-md border border-border bg-muted text-[10px] font-medium text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Coming Soon overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-foreground/60 border border-dashed border-foreground/20 px-4 py-1.5 rounded-full bg-background/70 backdrop-blur-sm">
          Coming Soon
        </span>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function UIComponentsPage() {
  return (
    <div className="w-full space-y-8">

      {/* ── Header ── */}
      <div className="space-y-2 pb-6 border-b border-dashed border-border">
        <TypographyH1 className="bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted-foreground inline-block tracking-tighter pb-2">
          UI Components
        </TypographyH1>
        <TypographyP className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          A growing collection of copy-paste UI components built with Tailwind CSS and Motion. Drop them into any Next.js project.
        </TypographyP>
      </div>

      {/* ── Grid ── */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-2">

          {/* Real components */}
          {UI_COMPONENTS.map((component) => (
            <ComponentCard key={component.slug} {...component} />
          ))}

          {/* Coming soon placeholders — fill remaining slots up to 6 */}
          {COMING_SOON_PLACEHOLDERS.slice(0, Math.max(0, 6 - UI_COMPONENTS.length)).map((placeholder, i) => (
            <ComingSoonCard key={i} {...placeholder} />
          ))}

        </div>
      </div>

    </div>
  );
}