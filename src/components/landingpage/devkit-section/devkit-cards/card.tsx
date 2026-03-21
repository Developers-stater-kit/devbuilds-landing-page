import { Card } from '@/components/ui/card';
import React from 'react';

interface PointsCardProps {
  icon: React.ReactNode;
  heading: string;
  description: string;
}

export default function PointsCard({ icon, heading, description }: PointsCardProps) {
  return (
    <Card className="cursor-pointer flex flex-row items-center gap-3 
      bg-linear-to-br from-card to-background 
      dark:from-card dark:to-background 
      p-3 rounded-xl w-[80%] 
      border border-card 
      bg-clip-padding 
      transition-all duration-300 relative overflow-hidden group 
      hover:ring-2 hover:border-amber-400/50 hover:scale-[1.03]">
      {/* Icon Container */}
      <div className="
        flex items-center justify-center h-8 w-8 rounded-lg
        bg-black/5 dark:bg-white/10
        border border-black/10 dark:border-white/20
        text-neutral-600 dark:text-neutral-300 text-lg shrink-0
        transition-all duration-300
        group-hover:bg-amber-400/20 dark:group-hover:bg-amber-100/20
        group-hover:text-amber-600 dark:group-hover:text-amber-500
        group-hover:scale-110
      ">
        {icon}
      </div>
      {/* Content */}
      <div className="space-y-1 flex-1">
        <h3 className="
          text-[15px] font-semibold 
          text-neutral-800 dark:text-white
          tracking-tight leading-snug 
          transition-colors duration-300 
          group-hover:text-amber-700 dark:group-hover:text-amber-300
        ">
          {heading}
        </h3>
        <p className="
          text-[10px] 
          text-neutral-500 dark:text-neutral-400 
          leading-snug font-medium max-w-md 
          transition-colors duration-300 
          group-hover:text-amber-800/80 dark:group-hover:text-amber-100/80
        ">
          {description}
        </p>
      </div>
    </Card>
  );
}