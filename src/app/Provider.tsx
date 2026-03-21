import { LayoutContainer } from "@/components/landingpage/container";
import { ThemeProvider } from "next-themes";
import React from "react";
import { Toaster } from "sonner";

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer classname="border-x-2 border-dashed">
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {children}
        <Toaster richColors position="top-right" duration={2000} />
      </ThemeProvider>
    </LayoutContainer>
  );
}

export default AppProvider;
