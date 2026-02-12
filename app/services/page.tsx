"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Users,
  FileText,
  Shield,
  Target,
  GraduationCap,
  TrendingUp,
  Heart,
  Building2,
  Lightbulb,
  BarChart3,
  Zap,
  Rocket,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Clinical Documentation Improvement (CDI) Consulting",
    icon: FileText,
    color: "primary",
    description: "Comprehensive CDI program assessment, redesign, and optimization for healthcare organizations.",
    items: [
      "CDI program assessment & redesign",
      "Clinical validation audits (concurrent & retrospective)",
      "Query compliance review + provider education",
      "DRG accuracy auditing (MS-DRG, APR-DRG, AP-DRG)",
      "Documentation specificity workshops for physicians, IMGs + APPs",
      "SOI/ROM, CC/MCC capture optimization",
      "CDI workflow optimization & productivity improvement",
      "CDI technology evaluation (AI/NLP tools, EHR workflows, automation)",
    ],
  },
  {
    id: 2,
    title: "DRG, Coding & Revenue Integrity Consulting",
    icon: BarChart3,
    color: "secondary",
    description: "Revenue cycle optimization and coding accuracy improvement for financial performance.",
    items: [
      "DRG validation and revenue leakage analysis",
      "MS-DRG restructuring for financial accuracy",
      "Revenue cycle operational assessment (IP & OP)",
      "Coding quality audits (ICD-10-CM, PCS)",
      "Pre-bill DRG review program design",
      "Denials prevention (clinical validation, coding, medical necessity)",
      "Clinical documentation + coding alignment strategy",
      "CDI–Coding integration framework for health systems",
    ],
  },
  {
    id: 3,
    title: "Medicare Advantage (MA) & Risk Adjustment Advisory",
    icon: Shield,
    color: "primary",
    description: "Strategic support for risk adjustment optimization and Medicare Advantage compliance.",
    items: [
      "HCC/RAF improvement strategy",
      "MA risk adjustment documentation & coding audits",
      "Provider education on HCC specificity & chronic condition capture",
      "Suspecting model assessment and workflow integration",
      "MA Stars quality measure optimization",
      "MA compliance review (OIG, CMS, RADV)",
      "Risk-bearing entity support: ACO REACH, MSSP, MA plans, IPAs",
    ],
  },
  {
    id: 4,
    title: "Value-Based Care & Alternative Payment Model Consulting",
    icon: Heart,
    color: "secondary",
    description: "Readiness assessments and operational optimization for value-based care transformation.",
    items: [
      "VBC readiness assessments for hospitals & provider groups",
      "Chronic condition documentation improvement for VBC contracts",
      "Quality metric gap analysis (HEDIS, Stars, MIPS)",
      "Population health clinical quality improvement",
      "Care model redesign for risk-bearing organizations",
      "Operational optimization for ACOs, CINs, and health systems",
      "Utilization management review (LOS, readmissions, avoidable admissions)",
    ],
  },
  {
    id: 5,
    title: "Health Insurance & Payer Operations Advisory",
    icon: Building2,
    color: "primary",
    description: "Payer-side consulting for claims accuracy, medical policy, and provider collaboration.",
    items: [
      "Medical policy & coverage criteria interpretation",
      "Claims accuracy & payment integrity program support",
      "Pre-authorization and clinical review redesign",
      "Payer reimbursement analytics and trend reporting",
      "Clinical appeals / peer-to-peer review preparation",
      "Provider–payer collaboration strategy to reduce abrasion",
      "Benefit design + utilization analysis for commercial & MA plans",
    ],
  },
  {
    id: 6,
    title: "Hospital Financial Performance & Revenue Optimization",
    icon: TrendingUp,
    color: "secondary",
    description: "Executive-level financial reporting and documentation-driven revenue improvement.",
    items: [
      "Executive reporting on documentation-related financial impact",
      "DRG shift modeling, revenue forecasting, RAF impact calculation",
      "Pre/post intervention analysis for CDI & coding initiatives",
      "CFO-ready dashboards for quality + finance integration",
      "Revenue integrity audit & workflow design",
      "Diagnosis capture programs for high-value service lines",
    ],
  },
  {
    id: 7,
    title: "CMS Innovation & ACCESS Model Advisory",
    icon: Target,
    color: "primary",
    description: "Expert guidance on CMS ACCESS Model readiness and ACO optimization strategies.",
    items: [
      "ACCESS Model readiness assessment for health systems",
      "Common ACO pitfalls & mitigation strategies",
      "Quality, attribution, risk stratification, and population targeting review",
      "Documentation-driven care optimization for ACCESS benchmarks",
      "Strategy briefing for executives on payment transformation",
      "ACCESS reporting workflows & physician documentation alignment",
      "Training for clinical teams on care categories & financial levers",
    ],
  },
  {
    id: 8,
    title: "AI, Data Science, & Clinical Technology Consulting",
    icon: Zap,
    color: "secondary",
    description: "Clinical validation and implementation support for AI-powered healthcare solutions.",
    items: [
      "AI-powered CDI/CDS model clinical validation",
      "Chart review pipelines for training LLM/NLP models",
      "EHR workflow optimization (Epic, Cerner)",
      "Tech implementation support for CDI, coding, and revenue solutions",
      "Product feedback loops & clinical feature prioritization",
      "Data quality, annotation, and clinical accuracy review",
    ],
  },
  {
    id: 9,
    title: "Leadership Training & Workforce Upskilling",
    icon: GraduationCap,
    color: "primary",
    description: "Comprehensive training programs for clinical and administrative healthcare teams.",
    items: [
      "Clinical documentation bootcamps for IMGs & RNs",
      "Physician engagement + documentation coaching",
      "Training for CDI, coding, and RA analysts",
      "Cross-functional education (clinical, HIM, finance, IT)",
      "Executive briefings on revenue cycle strategy, MA risk, and compliance",
    ],
  },
  {
    id: 10,
    title: "Strategic Advisory for Startups & Health Tech Companies",
    icon: Rocket,
    color: "secondary",
    description: "Clinical expertise and go-to-market strategy for healthcare technology innovators.",
    items: [
      "Product-market fit analysis in CDI/RAC/MA spaces",
      "Clinical SME support for model development & validation",
      "GTM messaging for physician-facing or payer-facing products",
      "Clinical workflow design and integration strategy",
      "Advisory board support, white papers, and SME insights",
    ],
  },
]

export default function ServicesPage() {
  const [expandedCards, setExpandedCards] = useState<number[]>([])

  const toggleCard = (id: number) => {
    setExpandedCards((prev) => (prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">Our Services</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Comprehensive healthcare consulting and professional development services
            </p>
          </div>
        </div>
      </section>

      {/* Core Services - 10 Service Categories */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-blob" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10 animate-blob animation-delay-2000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Lightbulb className="h-4 w-4" />
              Comprehensive Solutions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Service Offerings</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of healthcare consulting and professional development services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon
              const isExpanded = expandedCards.includes(service.id)
              const colorClass = service.color === "primary" ? "primary" : "secondary"

              return (
                <Card
                  key={service.id}
                  className={`border-2 hover:border-${colorClass} transition-all duration-300 hover:shadow-xl glass-card animate-fade-in-up group cursor-pointer`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => toggleCard(service.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-14 h-14 bg-${colorClass}/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-${colorClass}/20 transition-colors duration-300 group-hover:scale-110`}
                      >
                        <Icon className={`h-7 w-7 text-${colorClass}`} />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {service.id < 10 ? `0${service.id}` : service.id}
                      </Badge>
                    </div>
                    <CardTitle className={`group-hover:text-${colorClass} transition-colors text-xl`}>
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div
                      className={`space-y-2 overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      {service.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <CheckCircle className={`h-4 w-4 text-${colorClass} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div
                      className={`flex items-center justify-between mt-4 pt-4 border-t ${isExpanded ? "" : "border-transparent"}`}
                    >
                      <span className={`text-sm font-medium text-${colorClass}`}>
                        {isExpanded ? "Click to collapse" : "Click to expand"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className={`h-5 w-5 text-${colorClass}`} />
                      ) : (
                        <ChevronDown className={`h-5 w-5 text-${colorClass}`} />
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Access Links */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Quick Access</h2>
            <p className="text-muted-foreground">Explore specialized service categories</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <Link href="/organizations" className="group">
              <div className="p-6 rounded-2xl bg-background border-2 hover:border-primary transition-all duration-300 hover:shadow-lg text-center min-w-48">
                <Users className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold group-hover:text-primary transition-colors text-nowrap">
                  Organizational Solutions
                </h3>
              </div>
            </Link>
            <Link href="/coaching" className="group">
              <div className="p-6 rounded-2xl bg-background border-2 hover:border-secondary transition-all duration-300 hover:shadow-lg text-center">
                <Target className="h-8 w-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold group-hover:text-secondary transition-colors text-nowrap">Individual Coaching</h3>
              </div>
            </Link>
            <Link href="/training" className="group">
              <div className="p-6 rounded-2xl bg-background border-2 hover:border-primary transition-all duration-300 hover:shadow-lg text-center">
                <GraduationCap className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold group-hover:text-primary transition-colors">Online Training</h3>
              </div>
            </Link>
            <Link href="/certification" className="group">
              <div className="p-6 rounded-2xl bg-background border-2 hover:border-secondary transition-all duration-300 hover:shadow-lg text-center">
                <Shield className="h-8 w-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold group-hover:text-secondary transition-colors">Certification</h3>
              </div>
            </Link>
            <Link href="/assessment" className="group">
              <div className="p-6 rounded-2xl bg-background border-2 hover:border-primary transition-all duration-300 hover:shadow-lg text-center">
                <FileText className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold group-hover:text-primary transition-colors">Assessment</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Credentials</h2>
            <p className="text-xl text-muted-foreground">Certified expertise across multiple healthcare domains</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { badge: "MD", title: "Doctor of Medicine" },
              { badge: "MBA", title: "Master of Business Administration" },
              { badge: "MPH", title: "Master of Public Health" },
              { badge: "CPHQ", title: "Certified Professional in Healthcare Quality" },
              { badge: "CDIP", title: "Certified Documentation Integrity Practitioner" },
              { badge: "PAHM", title: "Physician Advisor, Healthcare Management" },
            ].map((cred, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-background border hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Badge
                  variant="secondary"
                  className="text-lg px-6 py-3 mb-4 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  {cred.badge}
                </Badge>
                <p className="text-sm text-muted-foreground">{cred.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary animate-gradient" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white animate-fade-in-up">
            Ready to Transform Your Healthcare Organization?
          </h2>
          <p className="text-xl mb-8 text-white/90 animate-fade-in-up animate-delay-100">
            Let's discuss how we can optimize your operations, improve quality outcomes, and drive sustainable growth
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-200">
            <a href="https://calendar.app.google/VWSK6szrzCfvSMn1A" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-accent text-white hover:bg-accent/90 font-semibold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link href="/experience">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold px-8 py-6 text-lg rounded-full bg-transparent transition-all duration-300 hover:scale-105"
              >
                View Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
