"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  GraduationCap,
  Award,
  Briefcase,
  Heart,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Youtube,
  Globe,
  Loader2,
} from "lucide-react"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          organization: "",
          role: "",
          service: "",
          message: "",
        })
      } else {
        setError(data.error || "Failed to send message")
      }
    } catch (err) {
      console.error("Contact form error:", err)
      setError("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const credentials = [
    { abbr: "MD", full: "Doctor of Medicine" },
    { abbr: "MBA", full: "Master of Business Administration" },
    { abbr: "MPH", full: "Master of Public Health" },
    { abbr: "CPHQ", full: "Certified Professional in Healthcare Quality" },
    { abbr: "CDIP", full: "Certified Documentation Integrity Practitioner" },
    { abbr: "CCS", full: "Certified Coding Specialist" },
    { abbr: "CRC", full: "Certified Risk Adjustment Coder" },
  ]

  const highlights = [
    {
      icon: Briefcase,
      title: "Healthcare Executive",
      description: "CEO, RiteBridge Consulting & Champions Coaching",
    },
    {
      icon: Award,
      title: "Industry Expert",
      description: "Value-based care and clinical documentation integrity specialist",
    },
    {
      icon: GraduationCap,
      title: "Educator",
      description: "Healthcare leadership trainer and executive coach",
    },
    {
      icon: Heart,
      title: "Mission-Driven",
      description: "Improving healthcare outcomes through strategic transformation",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-white py-24 overflow-hidden min-h-[60vh] flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-pulse-slow">
              <Sparkles className="h-4 w-4 text-accent animate-spin-slow" />
              <span className="text-sm font-medium">Healthcare Executive</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">About Dr. Ekaette Joseph-Isang</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
              Training & Professional Development
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div
                className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              >
                <div className="relative aspect-[4/5] max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-accent rounded-3xl blur-2xl opacity-40 animate-float" />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                    <Image
                      src="/images/whatsapp-20image-202025-12-05-20at-2012-imgupscaler.jpg"
                      alt="Dr. Ekaette Joseph-Isang"
                      width={400}
                      height={500}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div
                className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Dr. Ekaette Joseph-Isang <span className="text-primary">MD, MBA, MPH, CPHQ</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Dr. Ekaette Joseph-Isang is a distinguished healthcare executive with extensive experience in
                  value-based care transformation, clinical documentation integrity, and healthcare operations. As the
                  CEO of RiteBridge Consulting and Champions Coaching, she brings a unique combination of clinical
                  expertise and business acumen to healthcare organizations.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With credentials spanning medicine, business, and public health, Dr. Ekaette has helped numerous
                  healthcare organizations improve clinical outcomes, optimize revenue cycles, and successfully
                  transition to value-based care models.
                </p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {credentials.map((cred, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors cursor-default"
                    >
                      {cred.abbr}
                    </Badge>
                  ))}
                </div>

                <Link href="https://calendar.app.google/VWSK6szrzCfvSMn1A" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background"
                >
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your healthcare organization? Let's discuss how we can work together.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:ejosephisang@ritebridge.com"
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">ejosephisang@ritebridge.com</p>
                      </div>
                    </a>

                    <a
                      href="tel:770-572-1066"
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">770-572-1066</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="font-medium">996 E New Circle Rd, Lexington KY 40505</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold mb-4">Connect With Me</h4>
                  <div className="flex gap-4">
                    <Link
                      href="https://www.linkedin.com/in/ejisang"
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://web.facebook.com/RiteBridge"
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://www.youtube.com/@ritebridgeconsultants"
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Youtube className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://ritebridge.com"
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Globe className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              {isSubmitted ? (
                <Card className="border-2 border-primary/20 shadow-xl">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="mx-auto h-16 w-16 mb-6 text-accent" />
                    <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                    <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                      Your message has been sent successfully. I'll respond within 24-48 hours.
                    </p>
                    <Link href="/services">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-full"
                      >
                        Explore Services
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-2 border-primary/20 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and I'll get back to you within 24-48 hours.
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-base font-medium">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className="mt-2 rounded-lg"
                            placeholder="First name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-base font-medium">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            className="mt-2 rounded-lg"
                            placeholder="Last name"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-base font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-2 rounded-lg"
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-base font-medium">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-2 rounded-lg"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <Label htmlFor="service" className="text-base font-medium">
                          Service Interest
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger className="mt-2 rounded-lg">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cdi">CDI Consulting</SelectItem>
                            <SelectItem value="vbc">Value-Based Care</SelectItem>
                            <SelectItem value="revenue">Revenue Integrity</SelectItem>
                            <SelectItem value="training">Leadership Training</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="message" className="text-base font-medium">
                            Message *
                          </Label>
                          {formData.message && (
                            <span className={`text-sm ${formData.message.length < 10 ? "text-red-500" : "text-green-600"}`}>
                              {formData.message.length}/10 characters minimum
                            </span>
                          )}
                        </div>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className={`mt-2 min-h-[120px] rounded-lg ${formData.message && formData.message.length < 10 ? "border-red-500" : ""}`}
                          placeholder="Tell us about your needs..."
                          required
                        />
                        {formData.message && formData.message.length < 10 && (
                          <p className="text-red-500 text-sm mt-1">Message must be at least 10 characters</p>
                        )}
                      </div>

                      {error && <p className="text-red-500 text-sm">{error}</p>}

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "SUBMIT"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Healthcare Organization?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can optimize your operations, improve quality outcomes, and drive sustainable growth.
          </p>
          <Link href="https://calendar.app.google/VWSK6szrzCfvSMn1A" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 shadow-lg"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
