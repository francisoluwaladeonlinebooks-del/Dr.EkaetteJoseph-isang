"use client"

import type React from "react"

import { useState, useEffect } from "react"
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

    // If reCAPTCHA site key is provided via NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    // attempt to get a token and include it in the request body.
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    let recaptchaToken: string | undefined
    if (siteKey) {
      try {
        const grecaptcha = (window as any).grecaptcha
        if (!grecaptcha) {
          throw new Error("reCAPTCHA not loaded")
        }
        await new Promise((resolve) => grecaptcha.ready(resolve))
        recaptchaToken = await grecaptcha.execute(siteKey, { action: "subscribe" })
      } catch (rcErr) {
        console.error("reCAPTCHA error:", rcErr)
        setError("reCAPTCHA verification failed. Please try again.")
        setIsSubmitting(false)
        return
      }
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, recaptchaToken }),
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

  // Inject reCAPTCHA script when a site key is available.
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
    if (!siteKey) return

    const id = `recaptcha-script-${siteKey}`
    if (document.getElementById(id)) return

    const script = document.createElement("script")
    script.id = id
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // keep script for the session; no cleanup needed normally
    }
  }, [])

  return (
    <footer className="bg-gradient-to-br from-secondary via-secondary to-secondary/95 text-secondary-foreground border-t border-secondary/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 sm:gap-16 md:gap-20 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-black text-white mb-1 whitespace-nowrap">
                Dr. Ekaette Joseph-Isang
              </h2>
              <p className="text-secondary-foreground/80 font-semibold whitespace-nowrap">Healthcare Strategy Executive</p>
            </div>
            <div className="space-y-3 text-sm">
              <a
                href="tel:770-572-1066"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-accent transition-all duration-300 group hover:translate-x-1"
              >
                <Phone className="h-5 w-5 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <span className="font-medium">770-572-1066</span>
              </a>
              <a
                href="mailto:ejosephisang@ritebridge.com"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-accent transition-all duration-300 group hover:translate-x-1"
              >
                <Mail className="h-5 w-5 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                <span className="font-medium">ejosephisang@ritebridge.com</span>
              </a>
              <div className="flex items-start gap-3 text-secondary-foreground/80 group">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 group-hover:text-accent transition-colors" />
                <span className="text-sm font-medium">996 E New Circle Rd, Lexington KY 40505</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
              <Link
                href="https://www.linkedin.com/in/ejisang"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-secondary-foreground/60 hover:text-accent bg-secondary-foreground/5 hover:bg-accent/10 rounded-lg transition-all duration-300 group hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://web.facebook.com/RiteBridge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-secondary-foreground/60 hover:text-accent bg-secondary-foreground/5 hover:bg-accent/10 rounded-lg transition-all duration-300 group hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@ritebridgeconsultants"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-secondary-foreground/60 hover:text-accent bg-secondary-foreground/5 hover:bg-accent/10 rounded-lg transition-all duration-300 group hover:scale-110"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="https://ritebridge.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-secondary-foreground/60 hover:text-accent bg-secondary-foreground/5 hover:bg-accent/10 rounded-lg transition-all duration-300 group hover:scale-110"
              >
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="text-secondary-foreground/80 hover:text-accent font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/organizations"
                  className="text-secondary-foreground/80 hover:text-accent font-medium transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Healthcare Strategy
                </Link>
              </li>
              <li>
                <Link href="/coaching" className="text-secondary-foreground/80 hover:text-accent font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  Executive Coaching
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-secondary-foreground/80 hover:text-accent font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  Training Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-5">
            <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/blog" className="text-secondary-foreground/80 hover:text-accent font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-foreground/80 hover:text-accent font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-secondary-foreground/80 hover:text-accent font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-secondary-foreground/80 hover:text-accent font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-5">
            <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/terms" className="text-secondary-foreground/80 hover:text-accent font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-secondary-foreground/80 hover:text-accent font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-secondary-foreground/80 hover:text-accent font-medium transition-all duration-300 hover:translate-x-1 inline-block">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Stay Connected</h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">Get exclusive healthcare strategy insights delivered to your inbox.</p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-accent animate-fade-in bg-accent/10 px-4 py-3 rounded-lg">
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm font-semibold">Successfully subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 h-11 text-sm rounded-lg"
                />
                {error && <p className="text-red-300 text-xs font-semibold">{error}</p>}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-accent to-accent/80 hover:shadow-lg hover:shadow-accent/30 text-accent-foreground font-bold h-11 text-sm rounded-lg transition-all duration-300 hover:scale-105"
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

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 my-8 lg:my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="text-sm text-secondary-foreground/60 font-medium">
            © {new Date().getFullYear()} Dr. Ekaette Joseph-Isang. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/terms" className="text-secondary-foreground/60 hover:text-accent font-medium transition-all duration-300 hover:translate-y-px">
              Terms
            </Link>
            <div className="w-px h-4 bg-secondary-foreground/20" />
            <Link href="/privacy" className="text-secondary-foreground/60 hover:text-accent font-medium transition-all duration-300 hover:translate-y-px">
              Privacy
            </Link>
            <div className="w-px h-4 bg-secondary-foreground/20" />
            <Link href="/cookies" className="text-secondary-foreground/60 hover:text-accent font-medium transition-all duration-300 hover:translate-y-px">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
