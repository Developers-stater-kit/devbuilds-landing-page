import { cn } from '@/lib/utils';
import React from 'react'

function LayoutContainer({ children , classname }: { children: React.ReactNode, classname?: string }) {
    return (
        <div className={cn('relative max-w-[1400px] mx-auto h-fit', classname)}>
            {children}
        </div>
    );
}


function Container({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn('relative w-7xl mx-auto', className)}>
            {children}
        </div>
    );
}

export { LayoutContainer, Container}

