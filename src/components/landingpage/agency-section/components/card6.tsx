import React from 'react'
import { Type, Code2 } from 'lucide-react'

export default function Card6() {
  return (
    <div className='w-full h-full flex flex-col justify-end p-4 md:p-6 bg-background rounded-xl relative overflow-hidden group'>
        {/* Glow */}
        <div className="absolute top-[-10%] right-[-20%] w-[70%] h-[60%] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[60%] h-[50%] bg-amber-500/10 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

        {/* Illustration Area */}
        <div className="absolute top-0 left-0 w-full h-[60%] flex items-center justify-center translate-y-2">
            
            {/* Background IDE Mockup */}
            <div className="absolute z-0 w-[120%] h-[120%] bg-background border border-border/50 rounded-lg flex overflow-hidden opacity-20">
                {/* Sidebar */}
                <div className="w-[20%] h-full border-r border-foreground/20 flex flex-col p-2 gap-2">
                    <div className="w-1/2 h-1 bg-foreground/10 rounded-full mb-2" />
                    <div className="w-3/4 h-1 bg-foreground/10 rounded-full" />
                    <div className="w-2/3 h-1 bg-foreground/10 rounded-full" />
                </div>
                {/* Main Canvas Area */}
                <div className="flex-1 flex flex-col">
                    {/* Top Bar */}
                    <div className="w-full h-6 border-b border-foreground/20 flex items-center justify-between px-4">
                        <div className="w-16 h-1 bg-foreground/10 rounded-full" />
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded bg-foreground/10" />
                            <div className="w-2 h-2 rounded bg-foreground/10" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Central Container (Clean constraints) */}
            <div className="relative w-full h-full flex items-center justify-center">

                {/* Center DevBuilds Window (Stationary) */}
                <div className="z-30 w-40 h-24 bg-background backdrop-blur-xl border border-foreground/10 rounded-[0.5rem] shadow-xl group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden transition-all duration-500 relative">
                    <div className="w-full h-4 bg-foreground/5 flex items-center px-1.5 gap-1 border-b border-foreground/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 w-full bg-foreground/2 p-2 flex items-center justify-center">
                        <div className="absolute inset-0 m-2 border border-dashed border-amber-500/40 rounded flex items-center justify-center bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors duration-500">
                            <span className="text-[0.6rem] font-bold tracking-widest text-foreground/90">DEVBUILDS</span>
                        </div>
                    </div>
                </div>

                {/* Top Right Typography Aa */}
                <div className="absolute z-20 top-[15%] right-[10%] w-12 h-10 bg-background backdrop-blur-md border border-foreground/10 rounded-md shadow-xl flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                    <span className="font-serif text-lg font-bold text-foreground">Aa</span>
                    <Type size={8} className="absolute top-1 right-1 opacity-50 text-foreground" />
                </div>

                {/* Top Left Color System */}
                <div className="absolute z-20 top-[25%] left-[10%] w-10 bg-background backdrop-blur-md border border-foreground/10 rounded-md shadow-xl p-1.5 flex flex-col gap-1 group-hover:-translate-y-1 transition-transform duration-500 delay-100">
                    <div className="grid grid-cols-2 gap-1 mt-0.5">
                        <div className="w-3 h-3 rounded-sm bg-blue-600" />
                        <div className="w-3 h-3 rounded-sm bg-blue-400" />
                        <div className="w-3 h-3 rounded-sm bg-amber-600" />
                        <div className="w-3 h-3 rounded-sm bg-amber-400" />
                    </div>
                </div>

                {/* Bottom Right Sliders */}
                <div className="absolute z-20 bottom-[20%] right-[10%] w-12 bg-background backdrop-blur-md border border-foreground/10 rounded-md shadow-xl p-1.5 flex flex-col gap-1.5 group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                    <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded bg-blue-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    </div>
                    <div className="w-full h-0.5 bg-foreground/10 rounded-full relative mt-0.5">
                        <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-foreground" />
                    </div>
                    <div className="w-full h-0.5 bg-foreground/10 rounded-full relative mt-0.5">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-foreground" />
                    </div>
                </div>

                {/* Bottom Left HTML Tag */}
                <div className="absolute z-40 bottom-[15%] left-[8%] px-1.5 py-0.5 bg-background border border-foreground/20 rounded flex items-center shadow-md group-hover:-translate-y-1 transition-transform duration-500 delay-100">
                    <Code2 size={8} className="text-blue-400 mr-1" />
                    <span className="text-[0.45rem] font-mono text-blue-400">&lt;div&gt;</span>
                </div>
            </div>
        </div>

        {/* Text Section */}
        <div className="mt-4 relative z-30 pt-32">
            <h3 className="text-lg font-bold mb-1 text-foreground">Web Development</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
                Web applications that are responsive, and scalable. Clean and production-ready code.
            </p>
        </div>
    </div>
  )
}