import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arz (The Ultimate Mapping Solution)",
  icons: {
    icon: "/arz.png",
    shortcut: "/arz.png",
    apple: "/arz.png"
  },
  description:
    "Leading GIS and Remote Sensing agency transforming spatial data into actionable insights. Expert solutions for mapping, analysis, and geospatial intelligence.",
  keywords:
    "GIS, Remote Sensing, Spatial Analysis, Mapping, Geospatial, Satellite Imagery, Geographic Information Systems, Arz, spatial analysis, mapping, geospatial, satellite imagery, geographic information systems",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
