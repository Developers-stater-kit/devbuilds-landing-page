import { cn } from '@/lib/utils';
import React from 'react'
import { ScalesContainer } from "@/components/ui/scales";

function LayoutContainer({ children , classname }: { children: React.ReactNode, classname?: string }) {
    return (
        <div className={cn('relative max-w-[1400px] mx-auto h-fit', classname)}>
            {children}
        </div>
    );
}


function Container({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn('relative w-full lg:min-w-4xl xl:w-7xl mx-auto p-2 md:p-0', className)}>
            {children}
        </div>
    );
}

interface SectionWrapperProps {
  children: React.ReactNode;
  containerClassName?: string;
  innerClassName?: string;
  borders?: {
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
  };
}

function SectionWrapper({
  children,
  containerClassName,
  innerClassName,
  borders = { left: true, right: true },
}: SectionWrapperProps) {
  const borderClass = cn(
    borders.top && "border-t-2",
    borders.bottom && "border-b-2",
    borders.left && "border-l-2",
    borders.right && "border-r-2",
    "border-dashed"
  );

  return (
    <ScalesContainer
      orientation="diagonal"
      size={12}
      containerClassName={cn(
        "w-full flex items-center justify-center flex-col",
        containerClassName
      )}
    >
      <Container className={cn(borderClass, "overflow-hidden")}>
        <div
          className={cn(
            "relative h-fit flex flex-col gap-3 items-center justify-center bg-background w-full",
            innerClassName
          )}
        >
          {children}
        </div>
      </Container>
    </ScalesContainer>
  );
}

export { LayoutContainer, Container, SectionWrapper}

