import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, TrendingUp, Users, Award, Target, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-primary to-secondary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">20+ Years of Healthcare Excellence</h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                A proven track record of driving transformation, improving quality outcomes, and delivering measurable
                results across diverse healthcare organizations.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://calendar.app.google/VWSK6szrzCfvSMn1A" target="_blank" rel="noopener noreferrer">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-primary rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition duration-500" />
              <Image
                src="/images/dr-ekaette-office.jpg"
                alt="Dr. Ekaette Joseph-Isang"
                width={500}
                height={600}
                className="relative rounded-2xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements Highlights</h2>
            <p className="text-xl text-muted-foreground">Measurable impact across healthcare organizations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">25%</h3>
              <p className="text-muted-foreground">Average Revenue Increase</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">40%</h3>
              <p className="text-muted-foreground">Quality Metrics Improvement</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
              <p className="text-muted-foreground">Organizations Transformed</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">100%</h3>
              <p className="text-muted-foreground">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-xl text-muted-foreground">Leadership roles across healthcare strategy and operations</p>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">Principal Consultant</CardTitle>
                    <CardDescription className="text-lg">RiteBridge Consultants · Full-time</CardDescription>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Apr 2024 - Present</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Enterprise strategy advisor for payers, providers, and healthcare technology organizations. Led transformation initiatives across value-based care, risk adjustment, CDI, and health IT, with measurable impact on Medicare Advantage outcomes and revenue protection.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Enterprise Strategy</Badge>
                  <Badge variant="secondary">Value-Based Care</Badge>
                  <Badge variant="secondary">CDI</Badge>
                  <Badge variant="secondary">Risk Adjustment</Badge>
                  <Badge variant="secondary">Digital Innovation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">Sr Director, Transformation</CardTitle>
                    <CardDescription className="text-lg">Honest Medical Group · Full-time</CardDescription>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Aug 2022 - Apr 2024</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Led enterprise transformation across multi-site healthcare organization, aligning clinical strategy, value-based care performance, and CDI. Drove physician engagement and system-wide adoption of performance-driven workflows.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Enterprise Transformation</Badge>
                  <Badge variant="secondary">Clinical Documentation</Badge>
                  <Badge variant="secondary">Value-Based Care</Badge>
                  <Badge variant="secondary">Strategic Leadership</Badge>
                  <Badge variant="secondary">Change Management</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">Managing Consultant, Healthcare Strategy - Payer Provider Solutions</CardTitle>
                    <CardDescription className="text-lg">Guidehouse · Full-time</CardDescription>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Feb 2021 - Aug 2022</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Payer-provider strategy consultant leading value-based care adoption and payment model innovation. Developed Medicare Stars strategy for Fortune 50 health plan (5M members) and generated $2.3M in physician fee schedule savings.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Payer-Provider Strategy</Badge>
                  <Badge variant="secondary">Value-Based Care</Badge>
                  <Badge variant="secondary">Medicare Strategy</Badge>
                  <Badge variant="secondary">Digital Transformation</Badge>
                  <Badge variant="secondary">Analytics</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">QM Clinical Reviewer</CardTitle>
                    <CardDescription className="text-lg">Anthem, Inc.</CardDescription>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Sep 2017 - Jan 2021</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Transformed Medicare population health management through clinical documentation improvement and risk adjustment expertise. Identified and managed high-utilizers while improving care adherence and reducing hospital admissions.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Clinical Documentation</Badge>
                  <Badge variant="secondary">Risk Adjustment</Badge>
                  <Badge variant="secondary">Population Health</Badge>
                  <Badge variant="secondary">HEDIS</Badge>
                  <Badge variant="secondary">Value-Based Care</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">Informatics Fellow / Population Health Fellow</CardTitle>
                    <CardDescription className="text-lg">Council of State and Territorial Epidemiologists</CardDescription>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Sep 2014 - Sep 2017</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">CDC-funded informatics fellow bridging public health and hospital systems. Launched first Informatics Work Group (30 members) and led projects resulting in publications and conference presentations.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Population Health</Badge>
                  <Badge variant="secondary">Informatics</Badge>
                  <Badge variant="secondary">Strategic Leadership</Badge>
                  <Badge variant="secondary">Training</Badge>
                  <Badge variant="secondary">Leadership</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">Informatics/CDIS/HIM Consultant</CardTitle>
                    <CardDescription className="text-lg">Public Health Informatics Consultants (pHICON)</CardDescription>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Mar 2012 - Sep 2017</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Lead CDI and DRG auditor across multiple healthcare facilities. Provided EHR training and consultancy for Epic, Cerner, Meditech and other systems, supporting EHR optimization and clinical workflow redesign.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">CDI Auditing</Badge>
                  <Badge variant="secondary">EHR Systems</Badge>
                  <Badge variant="secondary">Clinical Workflows</Badge>
                  <Badge variant="secondary">Training</Badge>
                  <Badge variant="secondary">Leadership</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">CDI Specialist</CardTitle>
                    <CardDescription className="text-lg">Freelance</CardDescription>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Mar 2010 - Sep 2017</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Auditing</Badge>
                  <Badge variant="secondary">Interpersonal Skills</Badge>
                  <Badge variant="secondary">Training</Badge>
                  <Badge variant="secondary">Oral Communication</Badge>
                  <Badge variant="secondary">Leadership</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">Internal Medicine Physician - UUTH</CardTitle>
                    <CardDescription className="text-lg">University of Uyo · Full-time</CardDescription>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Aug 2006 - Dec 2008</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Interpersonal Skills</Badge>
                  <Badge variant="secondary">Leadership</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Specialization</h2>
            <p className="text-xl text-muted-foreground">Deep expertise across critical healthcare domains</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare Strategy",
                desc: "Strategic planning, organizational transformation, and performance optimization",
              },
              {
                title: "Value-Based Care",
                desc: "VBC implementation, quality measures, risk adjustment, and population health",
              },
              {
                title: "Clinical Documentation",
                desc: "CDI programs, physician education, quality metrics, and compliance",
              },
              {
                title: "Quality Management",
                desc: "Quality improvement, regulatory compliance, and accreditation support",
              },
              {
                title: "Operations Consulting",
                desc: "Workflow optimization, process improvement, and technology integration",
              },
              {
                title: "Executive Leadership",
                desc: "Leadership development, strategic thinking, and performance management",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="text-center border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Leverage This Experience?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's discuss how my proven track record can help transform your healthcare organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="rounded-full">
              <a href="https://calendar.app.google/VWSK6szrzCfvSMn1A" target="_blank" rel="noopener noreferrer">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent rounded-full"
              asChild
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
