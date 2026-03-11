import { ThemeProvider } from "next-themes";
import React from "react";
import { Toaster } from "sonner";

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
      <Toaster richColors position="top-right" duration={2000} />
    </ThemeProvider>
  );
}

export default AppProvider;
