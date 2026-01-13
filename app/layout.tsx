import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { DevotionalProvider } from "@/context/devotional-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LifeStages | Fielder Church",
  description: "Your daily devotional companion from Fielder Church",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className={inter.className}>
        <DevotionalProvider>{children}</DevotionalProvider>
      </body>
    </html>
  )
}
