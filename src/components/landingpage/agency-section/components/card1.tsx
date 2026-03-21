import React from 'react'
import { MousePointer2, Type } from 'lucide-react'

export default function Card1() {
  return (
    <div className='w-full h-full flex flex-col justify-end p-4 md:p-6 bg-background rounded-xl relative overflow-hidden group'>
      {/* Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[50%] bg-blue-500/20 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-amber-500/20 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

      {/* Illustration Area */}
      <div className="absolute top-0 left-0 w-full h-[60%] flex items-center justify-center translate-y-2">

        {/* Top Panel (Typography Aa) */}
        <div className="absolute z-0 top-6 left-1/2 -translate-x-[60%] w-16 h-12 bg-background backdrop-blur-md border border-white/10 rounded-lg shadow-2xl flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-500 delay-100">
          <span className="font-serif text-xl font-bold text-foreground tracking-tighter shadow-sm">Aa</span>
          <div className="absolute top-1 right-1 flex gap-0.5 opacity-50">
            <Type size={8} className="text-foreground" />
          </div>
        </div>

        {/* Center Panel (Main Code/Component Block) */}
        <div className="absolute z-10 w-36 h-20 top-14 left-1/2 -translate-x-1/2 bg-background backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl flex flex-col items-center justify-center group-hover:-translate-y-1 transition-transform duration-500">
          <div className="w-full flex items-center px-2 py-1.5 border-b border-white/5">
            <div className="flex gap-1 opacity-40">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center w-full p-2 relative">
            <div className="absolute inset-0 m-2 border border-dashed border-amber-500/40 rounded flex items-center justify-center bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors duration-500">
              <span className="text-[0.55rem] font-bold tracking-widest text-foreground/90">DEVBUILDS</span>
            </div>
            {/* Cursor pointing at the selection */}
            <MousePointer2 className="absolute -bottom-4 -left-1 w-4 h-4 text-foreground fill-amber-500 -rotate-12 drop-shadow-xl z-50 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        {/* Left Panel (Color Palette) */}
        <div className="absolute z-20 left-4 xl:left-10 top-12 w-10 bg-background backdrop-blur-md border border-white/10 rounded-md shadow-xl p-1.5 flex flex-wrap gap-1 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 delay-75">
          <div className="w-full h-1 bg-foreground/10 rounded-full mb-0.5" />
          <div className="w-2.5 h-2.5 rounded-sm bg-blue-600 ring-1 ring-white/20" />
          <div className="w-2.5 h-2.5 rounded-sm bg-blue-500" />
          <div className="w-2.5 h-2.5 rounded-sm bg-amber-600" />
          <div className="w-2.5 h-2.5 rounded-sm bg-amber-500" />
          <div className="w-2.5 h-2.5 rounded-sm bg-zinc-100" />
          <div className="w-2.5 h-2.5 rounded-sm bg-zinc-800" />
        </div>

        {/* Right Panel (Settings/Sliders) */}
        <div className="absolute z-0 top-14 right-4 xl:right-8 w-12 bg-background backdrop-blur-md border border-white/10 rounded-lg shadow-xl p-1.5 flex flex-col gap-[0.35rem] group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500">
          <div className="w-full h-1 bg-foreground/10 rounded-full" />
          <div className="flex items-center justify-between opacity-80 pt-0.5">
            <div className="w-1.5 h-1.5 rounded bg-blue-500/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
            <div className="w-1.5 h-1.5 bg-foreground/20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
          </div>
          <div className="w-full flex-col gap-1.5 flex mt-0.5 opacity-60">
            <div className="w-full h-0.5 bg-foreground/10 rounded-full relative">
              <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-foreground shadow-[0_0_2px_rgba(255,255,255,0.8)]" />
            </div>
            <div className="w-full h-0.5 bg-foreground/10 rounded-full relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-foreground shadow-[0_0_2px_rgba(255,255,255,0.8)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-4 relative z-30 pt-32">
        <h3 className="text-lg font-bold mb-1">Brand Design</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          We craft clear, memorable brand systems that feel consistent across every touchpoint and build trust.
        </p>
      </div>
    </div>
  )
}

