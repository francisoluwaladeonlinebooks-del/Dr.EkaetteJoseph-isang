"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Courses", href: "/courses" },
    { name: "Experience", href: "/experience" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <>
      {/* Top contact bar - Hidden on small mobile, visible on sm+ */}
      <div className="bg-gradient-to-r from-primary via-primary to-secondary/80 text-primary-foreground py-3 px-4 text-sm hidden sm:block transition-all duration-300 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="tel:770-572-1066" className="flex items-center gap-2 hover:text-accent transition-all duration-300 hover:scale-105 group">
              <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
              <span className="font-medium">770-572-1066</span>
            </a>
            <div className="w-px h-4 bg-white/20" />
            <a
              href="mailto:ejosephisang@ritebridge.com"
              className="flex items-center gap-2 hover:text-accent transition-all duration-300 hover:scale-105 group"
            >
              <Mail className="h-4 w-4 group-hover:rotate-12 transition-transform" />
              <span className="font-medium">ejosephisang@ritebridge.com</span>
            </a>
          </div>
          <a href="https://calendar.app.google/VWSK6szrzCfvSMn1A" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2 text-xs font-bold hover:text-accent transition-all duration-300 cursor-pointer bg-white/10 hover:bg-accent/20 px-3 py-1.5 rounded-full group">
              SCHEDULE CONSULTATION <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </div>

      {/* Main navigation - Added glass effect on scroll */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-primary/10 py-3" : "bg-background/50 backdrop-blur-md border-b border-primary/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative text-xl sm:text-2xl font-bold bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform whitespace-nowrap">
                Dr. Ekaette <span className="text-primary">Joseph-Isang</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-foreground px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay - Full screen overlay with animation */}
      <div
        className={`fixed inset-0 z-40 bg-gradient-to-br from-background via-secondary/5 to-background backdrop-blur-xl md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ top: "0" }}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          <button
            className="absolute top-6 right-6 p-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>

          <nav className="flex flex-col items-center space-y-6 text-center">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-bold text-foreground hover:text-primary px-6 py-3 rounded-xl hover:bg-primary/10 transition-all duration-300 transform hover:scale-105"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-4 mt-8 pt-8 border-t border-primary/10 w-full max-w-xs">
            <a
              href="tel:770-572-1066"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary font-medium transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              <span>770-572-1066</span>
            </a>
            <a
              href="mailto:ejosephisang@ritebridge.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary font-medium transition-all duration-300 hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              <span>ejosephisang@ritebridge.com</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
