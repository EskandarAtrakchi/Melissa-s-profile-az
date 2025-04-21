"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  // Add this to ensure the component is mounted before rendering
  const [mounted, setMounted] = React.useState(false)

  // After mounting, we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <Button variant="outline" size="icon" className="w-9 h-9 rounded-full bg-transparent border-[#ffc107]" />
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="w-9 h-9 rounded-full bg-transparent border-[#ffc107] hover:bg-[#ffc107]/10"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-[#ffc107]" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[#ffc107]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
