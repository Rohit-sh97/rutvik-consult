"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Meet Shamal", href: "/meet-shamal"},
    { name: "Meet Rutvik", href: "/meet-rutvik" },
    { name: "Programs", href: "/programs" },
    { name: "Feedback", href: "/feedback" },
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-green-500" />
            <span className="text-xl font-bold text-gray-900">
              Rutvik <span className="text-green-500">Nutrition</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-500 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/book-session">
              <Button className="bg-green-500 hover:bg-green-600 text-white">Book Session</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-500 font-medium transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/book-session" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-green-500 hover:bg-green-600 text-white w-full mt-2">Book Session</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
