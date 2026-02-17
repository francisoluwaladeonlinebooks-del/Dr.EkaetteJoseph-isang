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
                      <span>Apr 2024 - Present · 1 yr 11 months</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground text-justify">I work closely with senior leadership teams on enterprise strategy, transformation, and digital innovation across value-based care, population health, risk adjustment, clinical documentation improvement (CDI), and health IT. I serve as a trusted advisor to payers, providers, and healthcare technology organizations, helping align clinical strategy, operating models, and digital platforms to improve performance, scalability, regulatory readiness, and Medicare Advantage outcomes.</p>
                <p className="mb-4 text-muted-foreground text-justify">My work includes leading and advising on enterprise transformation roadmaps tied to growth and value-based outcomes, spanning risk adjustment and CDI strategy across inpatient and outpatient settings, analytics and digital health platform implementations, documentation integrity, and audit preparedness. I guide organizations through vendor evaluation and selection, provider incentive design, quality governance, and performance measurement across CMS Stars, HEDIS, CAHPS, HOS, MRA, encounter data integrity, and RADV readiness—ensuring technology and operational investments deliver measurable enterprise value while protecting revenue.</p>
                <p className="mb-4 text-muted-foreground text-justify">In parallel, I partner with healthcare SaaS and digital health companies on product strategy, customer success, and go-to-market alignment, ensuring solutions meet clinical, operational, and regulatory demands. Known for clarity and fast paced delivery, I bridge strategy and execution, translating clinical insight and data into scalable, population-centered initiatives that drive physician adoption, improve member experience and outcomes, and position organizations for sustained success in an increasingly outcomes-driven healthcare landscape.</p>
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
                      <span>Aug 2022 - Apr 2024 · 1 yr 9 months</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground text-justify">Led enterprise transformation initiatives aligning clinical strategy, value-based care performance, CDI, and compliance across a multi-site healthcare organization. Partnered with executive leadership and physicians to optimize care delivery models, documentation integrity, quality outcomes, and risk performance.</p>
                <p className="mb-4 text-muted-foreground text-justify">Provided strategic oversight for clinical documentation improvement (CDI), regulatory compliance, and audit readiness, translating clinical insight and data into scalable operational and financial impact. Drove physician engagement, change management, and system-wide adoption of performance-driven workflows.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Creativity and Innovation</Badge>
                  <Badge variant="secondary">Documentation Practices</Badge>
                  <Badge variant="secondary">Auditing</Badge>
                  <Badge variant="secondary">CRM</Badge>
                  <Badge variant="secondary">Management</Badge>
                  <Badge variant="secondary">Cross-functional Team Leadership</Badge>
                  <Badge variant="secondary">Clinical Documentation</Badge>
                  <Badge variant="secondary">ICD-10-CM</Badge>
                  <Badge variant="secondary">DRG</Badge>
                  <Badge variant="secondary">Interpersonal Skills</Badge>
                  <Badge variant="secondary">Health Plans</Badge>
                  <Badge variant="secondary">Risk Adjustment</Badge>
                  <Badge variant="secondary">Healthcare Quality</Badge>
                  <Badge variant="secondary">Pay for Performance</Badge>
                  <Badge variant="secondary">Health Informatics</Badge>
                  <Badge variant="secondary">Managed Care</Badge>
                  <Badge variant="secondary">Training</Badge>
                  <Badge variant="secondary">Health Insurance</Badge>
                  <Badge variant="secondary">Population Health Management</Badge>
                  <Badge variant="secondary">Medicare/Medicaid Reimbursement</Badge>
                  <Badge variant="secondary">Communication</Badge>
                  <Badge variant="secondary">Health Policy</Badge>
                  <Badge variant="secondary">ACOs</Badge>
                  <Badge variant="secondary">ICD-10-PCS</Badge>
                  <Badge variant="secondary">HCC Coding</Badge>
                  <Badge variant="secondary">Oral Communication</Badge>
                  <Badge variant="secondary">Strategic Planning</Badge>
                  <Badge variant="secondary">Leadership</Badge>
                  <Badge variant="secondary">Provider enablement</Badge>
                  <Badge variant="secondary">Value-Based Care</Badge>
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
                      <span>Feb 2021 - Aug 2022 · 1 yr 7 months</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground text-justify">Worked on payer–provider strategy engagements focused on innovative payment models, value-based care adoption, and performance optimization across Medicare and commercial populations. Collaborated on complex, multi-payer initiatives deploying advanced analytics, provider performance tools, and high-risk member stratification, while training and engaging providers to ensure sustained adoption and measurable results.</p>
                <p className="mb-4 text-muted-foreground text-justify">Delivered high-impact outcomes by implementing alternative payment and value-based care models grounded in cost, quality, and utilization analytics. Developed and executed a Medicare Stars strategy for a Fortune 50 health insurance plan serving approximately 5 million members, improving member experience and elevating Star performance. Led market and competitive intelligence analyses that informed strategic growth decisions, including the acquisition of a healthcare startup, contributing to a 25% increase in customer base.</p>
                <p className="mb-4 text-muted-foreground text-justify">Drove operational and financial performance through digital and payment transformation initiatives, including a project that designed RPA processes that automated clinical documentation solutions that reduced provider documentation burden by 25% and saved 10+ hours per week in clinical workflows. Managed the design of a new physician fee schedule, generating $2.3M in annual savings for a major payer while preserving strong provider relationships and minimizing abrasion, in close partnership with executives, clinicians, analytics teams, and technology partners.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">HIPAA</Badge>
                  <Badge variant="secondary">Health Information Systems</Badge>
                  <Badge variant="secondary">Creativity and Innovation</Badge>
                  <Badge variant="secondary">Documentation Practices</Badge>
                  <Badge variant="secondary">Quality Of Care</Badge>
                  <Badge variant="secondary">Auditing</Badge>
                  <Badge variant="secondary">CRM</Badge>
                  <Badge variant="secondary">Management</Badge>
                  <Badge variant="secondary">Medicare</Badge>
                  <Badge variant="secondary">Clinical Documentation</Badge>
                  <Badge variant="secondary">ICD-10-CM</Badge>
                  <Badge variant="secondary">Interpersonal Skills</Badge>
                  <Badge variant="secondary">Risk Adjustment</Badge>
                  <Badge variant="secondary">Healthcare Quality</Badge>
                  <Badge variant="secondary">Health Informatics</Badge>
                  <Badge variant="secondary">Health Information Management</Badge>
                  <Badge variant="secondary">Managed Care</Badge>
                  <Badge variant="secondary">Project Management</Badge>
                  <Badge variant="secondary">Training</Badge>
                  <Badge variant="secondary">Health Insurance</Badge>
                  <Badge variant="secondary">Population Health Management</Badge>
                  <Badge variant="secondary">Health Policy</Badge>
                  <Badge variant="secondary">ACOs</Badge>
                  <Badge variant="secondary">HEDIS</Badge>
                  <Badge variant="secondary">ICD-10-PCS</Badge>
                  <Badge variant="secondary">Oral Communication</Badge>
                  <Badge variant="secondary">Strategic Planning</Badge>
                  <Badge variant="secondary">Payvider strategy</Badge>
                  <Badge variant="secondary">Leadership</Badge>
                  <Badge variant="secondary">Provider enablement</Badge>
                  <Badge variant="secondary">Value-Based Care</Badge>
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
                      <span>Sep 2017 - Jan 2021 · 3 yrs 5 months</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground text-justify">Executed value transformation by leveraging expertise in clinical documentation improvement, HEDIS and risk adjustment to investigate, research, and implement solutions to improve cost-efficient management of Medicare population. In Pareto program, identified and documented the burden of illness for Medicare patients and conducted extensive review of medical information to identify and collate determinants of member health.</p>
                <p className="mb-4 text-muted-foreground text-justify">Identified high utilizers and implemented proactive solutions that slowed chronic disease progression. Ensured that patients had fewer admissions days by ensuring adherence to care plans.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Medicine</Badge>
                  <Badge variant="secondary">Creativity and Innovation</Badge>
                  <Badge variant="secondary">Microsoft Office</Badge>
                  <Badge variant="secondary">CRM</Badge>
                  <Badge variant="secondary">Management</Badge>
                  <Badge variant="secondary">Clinical Documentation</Badge>
                  <Badge variant="secondary">Interpersonal Skills</Badge>
                  <Badge variant="secondary">EMR</Badge>
                  <Badge variant="secondary">Managed Care</Badge>
                  <Badge variant="secondary">Project Management</Badge>
                  <Badge variant="secondary">Training</Badge>
                  <Badge variant="secondary">Process Automation</Badge>
                  <Badge variant="secondary">HCC Coding</Badge>
                  <Badge variant="secondary">Oral Communication</Badge>
                  <Badge variant="secondary">Strategic Planning</Badge>
                  <Badge variant="secondary">Leadership</Badge>
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
                      <span>Sep 2014 - Sep 2017 · 3 yrs 1 month</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground text-justify">Population Health and Applied Informatics Fellow leading cross-sectoral collaborations to bridge governmental public health and hospital systems on a Centers for Disease Control and Prevention (CDC) funded program and administered by the Council of State and Territorial Epidemiologists (CSTE).</p>
                <p className="mb-4 text-muted-foreground text-justify">Provided strategic leadership and direction for informatics in KDPH by launching the first Informatics Work Group comprising 30 members from three organizations. Led informatics projects and provided day-to-day process oversight, directing project scope, engaging stakeholders and delivering results. All project results are either published in journals or presented at conferences with some adapted for use by other public health agencies.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Creativity and Innovation</Badge>
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
                    <CardTitle className="text-xl">Informatics/CDIS/HIM Consultant</CardTitle>
                    <CardDescription className="text-lg">Public Health Informatics Consultants (pHICON)</CardDescription>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Mar 2012 - Sep 2017 · 5 yrs 7 months</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground text-justify">Performed medical chart reviews to facilitate appropriate code assignment. Served as lead CDI and DRG auditor across multiple facilities per contract. Provided consultancy services on electronic health records and clinical documentation management systems.</p>
                <p className="mb-4 text-muted-foreground text-justify">Served as an independent consultant, combining both clinical and Health Information technology expertise to deliver training to physicians, nurses, and ancillary staff on the use of Epic, Cerner, McKesson, Meditech, eClinicalWorks, and Allscripts Electronic Health Records (EHR) systems. Worked with hospital systems to lead EHR transitioning efforts and support EHR optimization processes. Designed and/or redesigned clinical workflows to support physician utilization of EHR.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Creativity and Innovation</Badge>
                  <Badge variant="secondary">Auditing</Badge>
                  <Badge variant="secondary">Interpersonal Skills</Badge>
                  <Badge variant="secondary">Training</Badge>
                  <Badge variant="secondary">Oral Communication</Badge>
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
                      <span>Mar 2010 - Sep 2017 · 7 yrs 7 months</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Georgia, United States</span>
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
                      <span>Aug 2006 - Dec 2008 · 2 yrs 5 months</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Uyo, Akwa Ibom State, Nigeria</span>
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
