"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { GroupedTemplates } from "./sidebar-nav";

interface MobileSidebarProps {
  grouped: GroupedTemplates;
}

export function MobileSidebar({ grouped }: MobileSidebarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden fixed top-22 left-4 flex items-center gap-2.5 px-6 py-3 rounded-full bg-foreground text-background shadow-2xl z-80 animate-in slide-in-from-bottom-10 duration-500 font-medium text-xs tracking-wide border border-border/50 hover:scale-105 active:scale-95 transition-all">
          <LayoutGrid className="w-4 h-4" />
          <span>Browse Templates</span>
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0 border-r border-dashed">
        <SheetHeader className="p-6 border-b border-dashed text-left">
          <SheetTitle>Templates Menu</SheetTitle>
        </SheetHeader>
        <div className="overflow-y-auto h-full p-6 pb-24">
          <nav className="space-y-8">
            {Object.entries(grouped).map(([category, templates]) => (
              <div key={category} className="space-y-3">
                <h4 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                  {category}
                </h4>
                <div className="flex flex-col space-y-1 mt-2">
                  {templates.map((template) => {
                    const href = `/templates/${template.slug}`;
                    const isActive = pathname === href;

                    return (
                      <Link
                        key={template.slug}
                        href={href}
                        onClick={() => setOpen(false)}
                        className={`text-sm px-3 py-2 rounded-md transition-all duration-200 ${isActive
                            ? "bg-amber-500/10 text-amber-500 font-medium"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                      >
                        {template.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
