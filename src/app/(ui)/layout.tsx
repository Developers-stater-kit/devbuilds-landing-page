import { getTemplatesForSidebar } from "@/lib/strapi";
import { SidebarNav, GroupedTemplates } from "@/components/landingpage/templates-layout/sidebar-nav";
import { MobileSidebar } from "@/components/landingpage/templates-layout/mobile-sidebar";
import React from "react";
import { SectionWrapper } from "@/components/landingpage/container";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const templates = await getTemplatesForSidebar();

  // Group by category, default to 'General' if no category is assigned
  const grouped = templates.reduce((acc, t) => {
    const cat = t.category || "General";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push({ title: t.title, slug: t.slug });
    return acc;
  }, {} as GroupedTemplates);

  return (
    <SectionWrapper borders={{ left: true, right: true }}>
      <div className="container mx-auto md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 px-4 md:px-6 mt-14 mb-16 pt-20 min-h-screen">
        <aside className="-ml-2 hidden w-full shrink-0 md:block border-r-2 border-dashed border-border">
          <div className="sticky top-20 pr-6 h-fit max-h-[calc(100vh-6rem)] overflow-y-auto pb-10">
            <SidebarNav grouped={grouped} />
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="relative lg:gap-10">
          <MobileSidebar grouped={grouped} />
          <div className="w-full min-w-0">
            {children}
          </div>
        </main>
      </div>
    </SectionWrapper>
  );
}
