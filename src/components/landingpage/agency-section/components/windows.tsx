import {    cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, LayoutGrid, Lock, Plus, Share } from "lucide-react"

interface BrowserMockupProps {
  children: React.ReactNode
  url?: string
  className?: string
}

export function BrowserMockup({ children, url = "devbuilds.in", className }: BrowserMockupProps) {
  return (
    <div className={cn("rounded-xl border border-border bg-foreground/5 overflow-hidden shadow-xl z-40", className)}>
      
      {/* ── Browser bar ── */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-foreground/10 border-b border-border">
        
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
        </div>

        {/* Nav arrows */}
        <div className="flex items-center gap-1 text-foreground/40">
          <ChevronLeft size={12} />
          <ChevronRight size={12} />
        </div>

        {/* URL bar */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-1.5 bg-foreground/10 rounded-md px-3 py-0.5 text-[8px] text-foreground/50 w-fit min-w-[140px] justify-center">
            <Lock size={10} />
            {url}
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1.5 text-foreground/40">
          <Share size={10} />
          <Plus size={10} />
          <LayoutGrid size={10} />
        </div>
      </div>

      {/* ── Content area ── */}
      <div className="w-full">
        {children}
      </div>

    </div>
  )
}