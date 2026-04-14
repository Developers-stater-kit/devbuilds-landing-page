"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface GroupedTemplates {
  [category: string]: { title: string; id: string }[];
}

interface SidebarNavProps {
  grouped: GroupedTemplates;
  className?: string;
}

export function SidebarNav({ grouped, className }: SidebarNavProps) {
  const pathname = usePathname();
  const categories = Object.keys(grouped);
  
  // Automatically open the first category found in the data
  const [openCategories, setOpenCategories] = useState<string[]>([
    categories[0] || "",
  ]);

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className={cn("w-full", className)}>
      {/* --- TEMPLATES SECTION --- */}
      <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/40 px-2 mb-3">
        Templates
      </h3>

      {categories.length === 0 ? (
        <p className="text-[10px] opacity-30 font-semibold uppercase tracking-widest text-foreground/40 ml-4 mb-6">
          No Templates Found
        </p>
      ) : (
        Object.entries(grouped).map(([category, templates]) => {
          const isOpen = openCategories.includes(category);
          return (
            <div key={category} className="mb-1 ml-2">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between py-2 px-2 text-sm font-medium border-b border-dashed border-foreground/10 capitalize hover:text-foreground transition-colors"
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
                <div className="grid grid-flow-row auto-rows-max text-sm gap-0.5 mt-1 mb-2 ml-4">
                  {templates.map((template) => {
                    const href = `/templates/${template.id}`;
                    const isActive = pathname === href;
                    
                    return (
                      <Link
                        key={template.id}
                        href={href}
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
        })
      )}

      {/* --- UI COMPONENTS (STATIC PLACEHOLDER) --- */}
      <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/40 mt-6 mb-3 px-2 ">
        UI - Components
      </h3>
      <p className="text-[10px] opacity-30 font-semibold uppercase tracking-widest text-foreground/40 ml-4 ">
        COMING SOON
      </p>
    </div>
  );
}