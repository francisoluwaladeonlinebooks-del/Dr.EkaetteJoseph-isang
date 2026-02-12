import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Doctor of Medicine (MD)",
      institution: "University of Calabar",
      period: "2005 - 2012",
      description:
        "Completed comprehensive medical education with focus on clinical practice, patient care, and medical research.",
    },
    {
      degree: "MBA - Healthcare Management",
      institution: "University of Nigeria, Nsukka",
      period: "2014 - 2016",
      description: "Specialized in healthcare management, strategic planning, and healthcare economics.",
    },
    {
      degree: "MPH - Health Policy & Management",
      institution: "Johns Hopkins Bloomberg School of Public Health",
      period: "2016 - 2018",
      description: "Focused on health policy analysis, healthcare systems, and population health management.",
    },
  ]

  const certifications = [
    {
      title: "Master of Public Health (MPH)",
      issuer: "Johns Hopkins Bloomberg School of Public Health",
      year: "2018",
      description: "Advanced degree focused on health policy analysis, healthcare systems, and population health management.",
    },
    {
      title: "Certified Professional in Healthcare Quality (CPHQ)",
      issuer: "National Association for Healthcare Quality",
      year: "2022",
      description:
        "Demonstrates expertise in healthcare quality management, performance improvement, and patient safety methodologies.",
    },
    {
      title: "Certified Clinical Documentation Integrity Practitioner (CDIP)",
      issuer: "American Health Information Management Association",
      year: "2021",
      description: "Advanced expertise in clinical documentation integrity, coding accuracy, and compliance.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive credentials demonstrating expertise across healthcare domains with degrees from prestigious
            institutions and professional certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Column */}
          <div className="space-y-8 animate-fade-in-up animate-delay-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-x-1 group"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-l-lg" />
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary">{edu.degree}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground text-sm">
                      <span className="font-medium text-foreground">{edu.institution}</span>
                      <div className="hidden sm:block w-1 h-1 bg-muted-foreground/30 rounded-full" />
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{edu.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-8 animate-fade-in-up animate-delay-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:translate-x-1 group"
                >
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-r-lg" />
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <CardTitle className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                        {cert.title}
                      </CardTitle>
                      <Badge variant="outline" className="bg-background whitespace-nowrap border-accent/20 text-accent">
                        {cert.year}
                      </Badge>
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">{cert.issuer}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      {cert.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
