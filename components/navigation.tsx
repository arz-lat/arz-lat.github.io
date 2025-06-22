"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, MapPin } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-60 h-60 rounded-lg flex items-center justify-center">
              <Image
                src="/arz.png"
                alt="Company Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              {/* <MapPin className="h-6 w-6 text-white" /> */}
            </div>
            {/* <span className="text-2xl font-bold text-gray-900">Arz</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-emerald-600 hover:-translate-y-0.5 ${pathname === item.href ? "text-emerald-600 border-b-2 border-emerald-600 pb-1" : "text-gray-700"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button with animation */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600 transition-all duration-300 hover:scale-110"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with slide animation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-emerald-600 hover:translate-x-2 ${pathname === item.href ? "text-emerald-600" : "text-gray-700"
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-emerald-600 hover:bg-emerald-700 w-fit transform hover:scale-105 transition-all duration-200">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
