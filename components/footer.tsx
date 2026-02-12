"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Linkedin, MapPin, Phone, Mail, Globe, Youtube, CheckCircle, Loader2 } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubscribed(true)
        setEmail("")
      } else {
        setError(data.error || "Failed to subscribe")
      }
    } catch (err) {
      console.error("Subscription error:", err)
      setError("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-lg sm:text-xl font-semibold whitespace-nowrap overflow-hidden">
              Dr.<span className="font-medium text-background"> Ekaette Joseph-Isang</span>
            </div>
            <div className="space-y-3 text-base">
              <a
                href="tel:770-572-1066"
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>770-572-1066</span>
              </a>
              <a
                href="mailto:ejosephisang@ritebridge.com"
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>ejosephisang@ritebridge.com</span>
              </a>
              <div className="flex items-start gap-2 text-secondary-foreground/80">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>996 E New Circle Rd, Lexington KY 40505</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-3">
              <Link
                href="https://www.linkedin.com/in/ejisang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://web.facebook.com/RiteBridge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@ritebridgeconsultants"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-accent transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="https://ritebridge.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-accent transition-colors"
              >
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 lg:pl-4">
            <h3 className="text-xl font-semibold">Services</h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/services" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/organizations"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  Healthcare Strategy
                </Link>
              </li>
              <li>
                <Link href="/coaching" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  Executive Coaching
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  Training Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Resources</h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/blog" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  Experience
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Stay Connected</h3>
            <p className="text-secondary-foreground/80 text-base leading-relaxed">Subscribe to receive healthcare strategy insights.</p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-accent animate-fade-in">
                <CheckCircle className="h-5 w-5" />
                <span className="text-base">Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/60 h-10 text-base"
                />
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-10 text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-4 pt-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="text-base text-secondary-foreground/60 whitespace-nowrap">
              © 2026 Dr. Ekaette Joseph-Isang. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-base">
              <Link href="/terms" className="text-secondary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-secondary-foreground/60 hover:text-accent transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
