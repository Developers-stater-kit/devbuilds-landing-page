import React from 'react'
import { Sparkles, ArrowUp, Cog, Database, Code } from 'lucide-react'

export default function Card2() {
  return (
    <div className='w-full h-full flex flex-col justify-end p-4 md:p-6 bg-background rounded-xl relative overflow-hidden group'>
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[50%] bg-emerald-500/15 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
      <div className="absolute bottom-[20%] left-[-20%] w-[50%] h-[50%] bg-violet-500/15 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

      {/* Illustration Area */}
      <div className="absolute top-0 left-0 w-full h-[60%] flex items-center justify-center translate-y-2">

        {/* Floating Element 1 (Top Left) */}
        <div className="absolute z-10 top-8 left-[10%] w-10 h-10 bg-background backdrop-blur-md border border-foreground/10 rounded-xl shadow-xl flex items-center justify-center group-hover:-translate-y-2 group-hover:-translate-x-1 transition-transform duration-500">
          <Cog size={18} className="text-foreground/70" />
        </div>

        {/* Floating Element 2 (Bottom Right) */}
        <div className="absolute z-10 bottom-6 right-[10%] w-12 h-10 bg-background backdrop-blur-md border border-foreground/10 rounded-xl shadow-xl flex items-center justify-center group-hover:translate-y-2 group-hover:translate-x-1 transition-transform duration-500 delay-75">
          <Database size={16} className="text-violet-500 group-hover:scale-110 transition-transform duration-500" />
        </div>

        {/* Floating Element 3 (Top Right) */}
        <div className="absolute z-0 top-12 right-[20%] px-2 py-1 bg-background/50 backdrop-blur-sm border border-foreground/5 rounded-md shadow-sm flex items-center gap-1 group-hover:-translate-y-1 transition-transform duration-500 delay-100">
          <Code size={10} className="text-emerald-500" />
          <div className="w-8 h-1 bg-foreground/20 rounded-full" />
        </div>

        {/* Main Center Component: Input Prompt */}
        <div className="absolute z-30 w-[85%] max-w-[220px] bg-background backdrop-blur-xl border border-foreground/10 rounded-full shadow-2xl p-1.5 flex items-center gap-2 group-hover:-translate-y-1 transition-transform duration-500">
          <div className="w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 ml-0.5">
            <Sparkles size={12} className="text-emerald-500" />
          </div>
          <div className="flex-1 flex items-center overflow-hidden">
            <span className="text-[0.7rem] text-muted-foreground font-mono flex items-center whitespace-nowrap overflow-hidden">
              Tell us what you need<span className="w-1.5 h-3.5 bg-foreground/40 ml-[2px] animate-pulse rounded-[1px]" />
            </span>
          </div>
          <div className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center shrink-0 cursor-pointer shadow-md group-hover:bg-foreground/90 transition-colors">
            <ArrowUp size={14} className="text-background" />
          </div>
        </div>

      </div>

      {/* Text Section */}
      <div className="mt-4 relative z-30 pt-32">
        <h3 className="text-lg font-bold mb-1 text-foreground">Custom Solutions</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Tell us exactly what you need. We engineer personalized web applications to solve your unique business challenges.
        </p>
      </div>
    </div>
  )
}

