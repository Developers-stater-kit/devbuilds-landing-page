import React from 'react'
import { Button } from '@/components/ui/button'
import Card1 from './components/card1'
import Card2 from './components/card2'
import Card3 from './components/card3'
import Card4 from './components/card4'
import Card5 from './components/card5'
import Card6 from './components/card6'

export default function BentoSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
      
      {/* Box 1: UI Design */}
      <div className="flex flex-col items-center justify-between p-2 border-b-2 border-dashed md:border-r-2 hover:bg-zinc-50/50 dark:hover:bg-white/2 transition-colors min-h-[300px] relative overflow-hidden group">
       <Card1/>
      </div>

      {/* Box 2: Custom Solutions */}
      <div className="flex flex-col items-center justify-between p-2 border-b-2 border-dashed lg:border-r-2 hover:bg-zinc-50/50 dark:hover:bg-white/2 transition-colors min-h-[300px] relative overflow-hidden group">
        <Card2/>
      </div>

      {/* Box 3: Launch Ready Templates */}
      <div className="flex flex-col justify-between p-2 border-b-2 border-dashed md:col-span-2 lg:col-span-2 hover:bg-zinc-50/50 dark:hover:bg-white/2 transition-colors min-h-[300px] overflow-hidden group">
        <Card3/>
      </div>

      {/* Box 4: Quote */}
      <div className="flex flex-col items-center justify-center p-2 border-b-2 border-dashed md:col-span-2 lg:border-b-0 lg:border-r-2 hover:bg-zinc-50/50 dark:hover:bg-white/2 transition-colors min-h-[300px]">
        <Card4/>
      </div>

      {/* Box 5: Web Design */}
      <div className="flex flex-col items-center p-2 justify-between border-b-2 border-dashed md:border-b-0 md:border-r-2 hover:bg-zinc-50/50 dark:hover:bg-white/2 transition-colors min-h-[300px] relative group">
        <Card5/>
      </div>

      {/* Box 6: Web Development */}
      <div className="flex flex-col items-center p-2 justify-between border-dashed lg:col-span-1 hover:bg-zinc-50/50 dark:hover:bg-white/2 transition-colors min-h-[300px] relative group">
        <Card6/>
      </div>

    </div>
  )
}

