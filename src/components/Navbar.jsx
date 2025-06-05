"use client"

import { useState, useEffect } from "react"
import { Menu, X, Brain } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-400" />
            <span className="text-white text-xl font-bold tracking-wide">Ivarintelligence</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm tracking-wide uppercase"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm tracking-wide uppercase"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm tracking-wide uppercase"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm tracking-wide uppercase"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm tracking-wide uppercase"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm tracking-wide uppercase"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm tracking-wide uppercase"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm tracking-wide uppercase"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm tracking-wide uppercase"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm tracking-wide uppercase"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
