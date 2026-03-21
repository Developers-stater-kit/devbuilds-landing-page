"use client"

import { Toaster } from "sonner"
import { useTheme } from "next-themes"

export function ToasterProvider() {
  const { theme } = useTheme()
  return (
    <Toaster
      richColors
      position="top-right"
      duration={2000}
      theme={theme as "light" | "dark" | "system"}
    />
  )
}