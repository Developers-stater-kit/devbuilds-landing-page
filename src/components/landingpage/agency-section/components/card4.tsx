import React from 'react'

export default function Card4() {
  return (
    <div className='w-full h-full p-6 md:p-8 bg-background rounded-xl relative overflow-hidden group flex flex-col justify-between'>
        {/* Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-amber-500/10 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

        {/* Faded Background DEVBUILDS Text */}
        <div className="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-8 select-none pointer-events-none opacity-[0.03] dark:opacity-[0.02] transform transition-transform duration-1000">
            <h1 className="text-[8rem] md:text-[11rem] xl:text-[14rem] font-sans font-medium leading-none tracking-tighter">
                Devbuilds
            </h1>
        </div>

        {/* Abstract Web Elements in Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-end">
            
            {/* Wireframe Window */}
            <div className="absolute bg-foreground/10 top-[10%] right-[-5%] lg:right-[15%] w-48 h-32 border border-foreground/5 rounded-lg p-2 flex flex-col gap-2 rotate-[12deg] opacity-40 dark:opacity-15 group-hover:-translate-y-2 group-hover:rotate-[15deg] transition-all duration-700 delay-100">
                <div className="w-full h-3 flex items-center gap-1 border-b border-foreground/5 pb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/25" />
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                </div>
                <div className="w-full flex-1 border border-dashed border-foreground/5 rounded bg-foreground/10" />
            </div>

            {/* Wireframe Mobile Window */}
            <div className="absolute top-[25%] right-[10%] lg:right-[2%] w-16 h-28 border border-foreground/30 bg-foreground/10 backdrop-blur-sm rounded-lg p-1.5 flex flex-col gap-2 -rotate-[6deg] group-hover:-translate-y-3 group-hover:translate-x-2  opacity-40 dark:opacity-15 group-hover:-rotate-[2deg] transition-all duration-700">
                <div className="w-full h-2 rounded bg-foreground/20" />
                <div className="w-full flex-1 border border-dashed border-foreground/5 rounded bg-foreground/15" />
            </div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
            {/* Main Typography Quote */}
            <div className="max-w-[85%] lg:max-w-[65%] mt-2 md:mt-4">
                <h2 className="text-2xl md:text-3xl font-medium text-foreground leading-[1.2] lg:leading-[1.1] tracking-tight">
                    We build <span className="text-amber-500 italic">products</span> that scale,<span className="text-amber-500 italic">systems</span> and <span className="text-amber-500 italic">experiences</span> that convert.
                </h2>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2.5 w-max px-3.5 py-1.5 bg-foreground/5 border border-foreground/10 rounded-full backdrop-blur-sm group-hover:bg-foreground/10 transition-colors duration-300">
                <div className="relative flex items-center justify-center w-2.5 h-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-xs md:text-sm font-medium text-foreground/90 tracking-wide">Available for new projects</span>
            </div>
        </div>
    </div>
  )
}