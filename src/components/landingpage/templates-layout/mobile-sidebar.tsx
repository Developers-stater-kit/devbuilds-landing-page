"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, LayoutGrid } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { GroupedTemplates } from "./sidebar-nav";

interface MobileSidebarProps {
  grouped: GroupedTemplates;
}

export function MobileSidebar({ grouped }: MobileSidebarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const categories = Object.keys(grouped);
  const [openCategories, setOpenCategories] = useState<string[]>([
    categories[0],
  ]);

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button suppressHydrationWarning className="md:hidden fixed top-24 left-4 flex items-center gap-2.5 px-5 py-2 rounded-full bg-foreground text-background shadow-2xl z-80 animate-in slide-in-from-bottom-10 duration-500 text-[10px] font-bold tracking-wide border border-border/50 transition-all">
          <LayoutGrid className="w-3 h-3" />
          <span>Browse Templates</span>
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0 border-r border-dashed">
        <SheetHeader className="p-6 border-b border-dashed text-left">
          <SheetTitle>Templates Menu</SheetTitle>
        </SheetHeader>

        <div className="overflow-y-auto h-full p-6 pb-24">

          {/* ── Templates Super Category ── */}
          <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/40 px-2 mb-3">
            Templates
          </h3>

          {Object.keys(grouped).length === 0 ? (
            <p className="text-[10px] opacity-30 font-semibold uppercase tracking-widest text-foreground/40 ml-4 mb-6">
              Coming Soon
            </p>
          ) : Object.entries(grouped).map(([category, templates]) => {
            const isOpen = openCategories.includes(category);
            return (
              <div key={category} className="mb-1 ml-2">
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between py-2  text-sm font-medium border-b border-dashed border-foreground/10 capitalize hover:text-foreground transition-colors"
                >
                  <span>{category}</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 text-foreground/40 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="grid grid-flow-row auto-rows-max text-sm gap-0.5 mt-1 mb-2 ">
                    {templates.map((template) => {
                      const href = `/templates/${template.slug}`;
                      const isActive = pathname === href;
                      return (
                        <Link
                          key={template.slug}
                          href={href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 hover:opacity-60 transition-opacity",
                            isActive
                              ? "font-medium text-foreground bg-muted"
                              : "text-muted-foreground"
                          )}
                        >
                          {template.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* ── UI Components Super Category ── */}
          <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/40 mt-6 mb-3 px-2">
            UI - Components
          </h3>
          <p className="text-[10px] opacity-30 font-semibold uppercase tracking-widest text-foreground/40 ml-4">
            Coming Soon
          </p>

        </div>
      </SheetContent>
    </Sheet>
  );
}