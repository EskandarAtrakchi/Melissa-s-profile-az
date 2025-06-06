import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Melissa Cantero - Professional Profile",
  description: "Professional profile and resume of Melissa Cantero",
  icons: {
    icon: "https://cvgwebobjstore.blob.core.windows.net/cvgmedia/web-assets/transforms/_1500xAUTO_crop_center-center_85_none/117432/cv-new-logo-clear-space-white.webp",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
