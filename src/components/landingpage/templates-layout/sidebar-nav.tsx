"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface GroupedTemplates {
  [category: string]: { title: string; slug: string }[];
}

interface SidebarNavProps {
  grouped: GroupedTemplates;
  className?: string;
}

export function SidebarNav({ grouped, className }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <div className={cn("w-full", className)}>
      {Object.entries(grouped).map(([category, templates]) => (
        <div key={category} className="pb-4">
          <h4 className="py-2 text-sm font-medium border-b border-dashed border-opacity-10 capitalize">
            {category}
          </h4>
          <div className="grid grid-flow-row auto-rows-max text-sm gap-0.5 mt-2">
            {templates.map((template) => {
              const href = `/templates/${template.slug}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={template.slug}
                  href={href}
                  className={cn(
                    "group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 hover:opacity-60",
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
        </div>
      ))}
    </div>
  );
}
