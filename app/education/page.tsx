import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Education & Credentials</h1>
              <p className="text-2xl mb-8 text-primary-foreground/90">
                Holding credentials including MD, MBA, MPH, CPHQ, CDIP, and PAHM - a comprehensive educational foundation combining medical expertise, business acumen, and public health knowledge to drive healthcare transformation.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Discuss Collaboration</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/design-mode/EXL09486.JPG.jpeg"
                alt="Dr. Ekaette Joseph-Isang"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Degrees */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Academic Degrees</h2>
            <p className="text-2xl text-muted-foreground">Advanced degrees from prestigious institutions</p>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Doctor of Medicine (MD)</CardTitle>
                      <CardDescription className="text-xl">Medical School</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    Medical Degree
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive medical education providing deep understanding of clinical practice, patient care, and
                  healthcare delivery systems. Foundation for clinical expertise in healthcare strategy and quality
                  improvement.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Clinical Medicine</Badge>
                  <Badge variant="outline">Patient Care</Badge>
                  <Badge variant="outline">Healthcare Systems</Badge>
                  <Badge variant="outline">Medical Ethics</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Master of Business Administration (MBA)</CardTitle>
                      <CardDescription className="text-xl">Business School</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    Business Degree
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Advanced business education focusing on strategic management, healthcare economics, organizational
                  leadership, and financial analysis. Essential for healthcare transformation and operational
                  excellence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Strategic Management</Badge>
                  <Badge variant="outline">Healthcare Economics</Badge>
                  <Badge variant="outline">Leadership</Badge>
                  <Badge variant="outline">Financial Analysis</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Master of Public Health (MPH)</CardTitle>
                      <CardDescription className="text-lg">School of Public Health</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    Public Health Degree
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Specialized education in population health, epidemiology, health policy, and healthcare systems.
                  Critical for understanding value-based care and population health management strategies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Population Health</Badge>
                  <Badge variant="outline">Epidemiology</Badge>
                  <Badge variant="outline">Health Policy</Badge>
                  <Badge variant="outline">Healthcare Systems</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Certifications */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Certifications</h2>
            <p className="text-xl text-muted-foreground">
              Industry-recognized certifications demonstrating specialized expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>CPHQ - Certified Professional in Healthcare Quality</CardTitle>
                    <CardDescription>National Association for Healthcare Quality</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Demonstrates expertise in healthcare quality management, performance improvement, and patient safety
                  initiatives.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Maintained since 2015</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle>CDIP - Certified Documentation Integrity Practitioner</CardTitle>
                    <CardDescription>Association of Clinical Documentation Integrity Specialists</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Specialized certification in clinical documentation integrity, physician education, and quality metric
                  improvement.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Maintained since 2016</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>CCS - Certified Coding Specialist</CardTitle>
                    <CardDescription>American Health Information Management Association</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Expert-level certification in medical coding, ensuring accurate documentation and optimal
                  reimbursement.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Maintained since 2014</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle>CRC - Certified Risk Adjustment Coder</CardTitle>
                    <CardDescription>American Academy of Professional Coders</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Specialized certification in risk adjustment coding for value-based care and Medicare Advantage
                  programs.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Maintained since 2017</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>PAHM - Professional in Aging and Health Management</CardTitle>
                    <CardDescription>National Association of Healthcare Access Management</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Certification focusing on aging population health management and specialized care coordination.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Maintained since 2018</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Continuing Education */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Continuing Education & Development</h2>
            <p className="text-xl text-muted-foreground">
              Commitment to lifelong learning and staying current with industry trends
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Annual Conference Participation</CardTitle>
                <CardDescription>Regular attendance at NAHQ, ACDIS, and AHIMA conferences</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Professional Development</CardTitle>
                <CardDescription>
                  Ongoing education in healthcare technology, AI, and digital transformation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Industry Publications</CardTitle>
                <CardDescription>Regular contributor to healthcare quality and documentation journals</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Leverage This Educational Foundation?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's discuss how my comprehensive educational background can support your healthcare transformation
            initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/experience">View Experience</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
