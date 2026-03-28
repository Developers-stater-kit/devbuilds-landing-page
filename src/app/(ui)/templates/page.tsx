import { TypographyH1, TypographyP } from "@/components/Typography/typography";
import { ArrowRight, Code2, Crown, Sparkles, Package } from "lucide-react";


export default async function TemplatesIndexPage() {
  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-24 md:px-4">

      {/* ── Hero Section ── */}
      <div className="space-y-6">
        <TypographyH1 className="bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted-foreground inline-block tracking-tighter pb-2">
          Ready-to-Launch Package
        </TypographyH1>
        <TypographyP className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Launch your next idea instantly with our suite of production-ready templates.
          Choose from free open-source starters or unlock our premium, high-conversion applications.
        </TypographyP>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">

        {/* Free Card */}
        <div className="group relative rounded-2xl border-2 border-dashed border-foreground/10 bg-white/2 hover:bg-white/4 transition-all duration-300 p-6 flex flex-col gap-4 overflow-hidden cursor-pointer">
          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-500/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-zinc-500/40 transition-colors duration-500" />


          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-foreground/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
            <Package className="w-5 h-5 text-foreground/70 group-hover:scale-120 transition-all duration-200" />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-foreground/40 uppercase tracking-widest">Free</span>
            <h3 className="text-xl font-semibold text-foreground">Starter Templates & UI</h3>
            <p className="text-sm text-foreground/50 leading-relaxed mt-1">
              Open-source templates and UI components to kickstart your next project. Free forever, production-ready from day one.
            </p>
          </div>

          {/* Badge */}
          <div className="mt-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 border border-foreground/10 rounded-full px-3 py-1">
              ✦ Free forever
            </span>
          </div>
        </div>

        {/* Premium Card */}
        <div className="group relative rounded-2xl hover:bg-white/4 duration-300 p-6 flex flex-col gap-4 overflow-hidden bg-card border-2 border-amber-500/20 transition-all hover:border-amber-500/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.08)] cursor-pointer">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-amber-500/25 transition-colors duration-500" />

          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-foreground/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
            <Crown className="w-5 h-5 text-foreground/70 group-hover:scale-120 transition-all duration-200 group-hover:text-amber-600" />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-foreground/40 uppercase tracking-widest">Premium</span>
            <h3 className="text-xl font-semibold text-foreground">Pro Templates & UI Kits</h3>
            <p className="text-sm text-foreground/50 leading-relaxed mt-1">
              High-conversion, business-grade templates and advanced UI kits built to take your product to the next level.
            </p>
          </div>

          {/* Badge */}
          <div className="mt-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 border border-foreground/10 rounded-full px-3 py-1">
              ✦ Premium access
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
