"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Aditya Kwatra</h1>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-4">
              {["about", "skills", "experience", "projects", "education", "contact"].map((item) => (
                <Button key={item} variant="ghost" onClick={() => scrollToSection(item)} className="capitalize">
                  {item}
                </Button>
              ))}
            </nav>
            <ModeToggle />
          </div>

          <div className="flex md:hidden items-center space-x-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["about", "skills", "experience", "projects", "education", "contact"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                onClick={() => scrollToSection(item)}
                className="w-full justify-start capitalize"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
