import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Globe, ArrowRight, MapPin, MessageSquare, Youtube, Facebook } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ContactSection() {
  const services = [
    "Healthcare Strategy & Transformation",
    "Clinical Documentation Integrity",
    "Value-Based Care Implementation",
    "Executive Coaching & Training",
  ]

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-2">
            <MessageSquare className="h-4 w-4" />
            Let's Connect
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your healthcare organization? Let's work together to drive meaningful change and improve
            patient outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up animate-delay-100">
            <Card className="border-none shadow-xl bg-gradient-to-br from-card to-muted/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              <CardHeader>
                <CardTitle className="text-2xl">Professional Services</CardTitle>
                <CardDescription className="text-base">Specialized healthcare transformation services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Connect With Me</CardTitle>
                <CardDescription className="text-base">Multiple ways to get in touch</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <a
                  href="mailto:ejosephisang@ritebridge.com"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors group cursor-pointer"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-muted-foreground">Email</p>
                    <p className="text-lg text-foreground font-medium">ejosephisang@ritebridge.com</p>
                  </div>
                </a>

                <a
                  href="tel:770-572-1066"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors group cursor-pointer"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="h-5 w-5 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-muted-foreground">Phone</p>
                    <p className="text-lg text-foreground font-medium">770-572-1066</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors group cursor-pointer">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="h-5 w-5 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-muted-foreground">Office</p>
                    <p className="text-lg text-foreground font-medium">996 E New Circle Rd, Lexington KY 40505</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <Link
                    href="https://www.linkedin.com/in/ejisang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all hover:shadow-md group"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-medium">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://web.facebook.com/RiteBridge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all hover:shadow-md group"
                  >
                    <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-medium">Facebook</span>
                  </Link>
                  <Link
                    href="https://www.youtube.com/@ritebridgeconsultants"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all hover:shadow-md group"
                  >
                    <Youtube className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-medium">YouTube</span>
                  </Link>
                  <Link
                    href="https://ritebridge.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-all hover:shadow-md group"
                  >
                    <Globe className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-medium">Website</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4 pt-4">
              <a
                href="https://calendar.app.google/VWSK6szrzCfvSMn1A"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  size="lg"
                  className="w-full bg-accent text-white hover:bg-accent/90 font-semibold py-7 text-lg rounded-xl shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-1"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right content - Professional image */}
          <div className="relative animate-scale-in animate-delay-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[2rem] rotate-6 opacity-20 blur-xl animate-pulse" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-8 ring-white">
              <Image
                src="/images/dr-ekaette-pink-blazer.jpg"
                alt="Dr. Ekaette Joseph-Isang - Professional Portrait"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />

              <a
                href="https://calendar.app.google/VWSK6szrzCfvSMn1A"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 bg-secondary/85 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-xl border border-white/30 shadow-2xl animate-fade-in-up animate-delay-500 hover:bg-secondary/95 transition-colors cursor-pointer block"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-white/90 text-xs sm:text-sm font-medium mb-1">Ready to start?</p>
                    <p className="text-white font-bold text-base sm:text-xl leading-tight">{"Let's transform healthcare together"}</p>
                  </div>
                  <div className="h-9 w-9 sm:h-10 sm:w-10 bg-white rounded-full flex items-center justify-center shadow-lg shrink-0 hover:scale-110 transition-transform">
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
