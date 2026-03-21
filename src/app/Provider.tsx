import { LayoutContainer } from "@/components/landingpage/container";
import { ToasterProvider } from "@/components/toast-provider";
import { ThemeProvider } from "next-themes";
import React from "react";

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContainer classname="border-x-2 border-dashed">
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {children}
        <ToasterProvider/>
      </ThemeProvider>
    </LayoutContainer>
  );
}

export default AppProvider;
