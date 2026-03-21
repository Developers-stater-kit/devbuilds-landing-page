import React from 'react'
import { MousePointer2, LayoutTemplate } from 'lucide-react'

export default function Card5() {
  return (
    <div className='w-full h-full flex flex-col justify-end p-4 md:p-6 bg-background rounded-xl relative overflow-hidden group'>
        {/* Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[50%] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

        {/* Illustration Area */}
        <div className="absolute top-0 left-0 w-full h-[60%] flex items-center justify-center translate-y-2">
            
            {/* Desktop Window Background */}
            <div className="absolute z-0 top-4 left-1/2 -translate-x-[25%] w-48 h-28 bg-background backdrop-blur-md border border-foreground/10 rounded-lg shadow-2xl flex flex-col overflow-hidden group-hover:translate-y-4 transition-transform duration-500">
                {/* App Bar */}
                <div className="w-full h-4 bg-foreground/5 flex items-center px-1.5 gap-1 border-b border-foreground/5">
                    <div className="w-1 h-1 rounded-full bg-foreground/20" />
                    <div className="w-1 h-1 rounded-full bg-foreground/20" />
                    <div className="w-1 h-1 rounded-full bg-foreground/20" />
                    <div className="mx-auto w-12 h-0.5 bg-foreground/10 rounded-full" />
                </div>
                {/* Desktop Content Area */}
                <div className="flex-1 w-full bg-foreground/2 p-2 flex flex-col gap-2 relative items-center justify-center">
                    
                    {/* Image Mock Placeholder */}
                    <div className="w-24 h-14 bg-foreground/5 rounded flex items-end justify-center overflow-hidden pb-1 relative border border-foreground/5">
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                        {/* Mountains */}
                        <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-amber-500/60 translate-x-2" />
                        <div className="w-0 h-0 border-l-[14px] border-r-[14px] border-b-[24px] border-l-transparent border-r-transparent border-b-amber-500/80 -translate-x-2 z-10" />
                    </div>

                    {/* Floating Layout Icon Box */}
                    <div className="absolute top-4 left-4 w-6 h-6 bg-background border border-foreground/10 rounded overflow-hidden flex items-center justify-center shadow-lg group-hover:-translate-y-1 transition-transform duration-500 delay-100">
                        <LayoutTemplate size={12} className="opacity-50 text-foreground" />
                    </div>

                    {/* Cursor & Tag */}
                    <div className="absolute bottom-2 right-6 flex items-center gap-1 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500 delay-75 z-20">
                        <MousePointer2 className="w-3 h-3 text-foreground fill-blue-500 -rotate-12 drop-shadow-md" />
                        <div className="px-1.5 py-0.5 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-[0.45rem] font-bold text-white tracking-widest leading-none">DEVBUILDS</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Window Foreground */}
            <div className="absolute z-10 bottom-2 left-1/3 -translate-x-[90%] w-20 h-32 bg-background backdrop-blur-xl border border-foreground/10 rounded-lg shadow-2xl flex flex-col overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                {/* Mobile App Bar */}
                <div className="w-full h-3 bg-foreground/5 flex items-center px-1.5 justify-between border-b border-foreground/5">
                    <div className="w-1 h-1 rounded-full bg-foreground/20" />
                    <div className="w-4 h-0.5 bg-foreground/10 rounded-full" />
                </div>
                {/* Mobile Content Area */}
                <div className="flex-1 w-full bg-foreground/2 p-1.5 flex flex-col gap-1.5">
                    {/* Header placeholder */}
                    <div className="w-full h-4 bg-foreground/5 rounded-sm border border-foreground/5 flex items-center justify-between px-1">
                        <div className="w-1.5 h-1.5 rounded-sm bg-foreground/10" />
                        <div className="w-4 h-0.5 bg-foreground/10 rounded-full" />
                    </div>
                    {/* Mobile Image Mock */}
                    <div className="w-full h-12 bg-foreground/5 rounded-sm flex items-end justify-center overflow-hidden pb-0.5 relative border border-foreground/5">
                        <div className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                        {/* Mountains */}
                        <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-amber-500/60 translate-x-1" />
                        <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[18px] border-l-transparent border-r-transparent border-b-amber-500/80 -translate-x-1 z-10" />
                    </div>
                    {/* Text Placeholders */}
                    <div className="flex flex-col gap-1">
                       <div className="w-3/4 h-0.5 bg-foreground/10 rounded-full mt-1" />
                       <div className="w-1/2 h-0.5 bg-foreground/10 rounded-full" />
                    </div>
                </div>
            </div>

        </div>

        {/* Text Section */}
        <div className="mt-4 relative z-30 pt-32">
            <h3 className="text-lg font-bold mb-1 text-foreground">Web Design</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
                Modern interfaces with clear structure and scalable components built for growth.
            </p>
        </div>
    </div>
  )
}

