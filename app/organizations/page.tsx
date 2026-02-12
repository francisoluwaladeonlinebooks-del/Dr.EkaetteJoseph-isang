import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Users, TrendingUp, Shield, Target, Zap } from "lucide-react"

export default function HealthcareStrategyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8">Healthcare Strategy & Transformation</h1>
            <p className="text-2xl md:text-3xl text-white/90 leading-relaxed lg:leading-8 mb-10">
              Drive meaningful change in your healthcare organization through strategic transformation and operational excellence. Partner with Dr. Ekaette Joseph-Isang for proven healthcare transformation strategies.
            </p>
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0POpmmqtCOnoWSRqQtmriyEAFkkXrcpIhRMDGVygXPrk42Kmw6b6lVtSUNK36XBKbsKr6EA0vj" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-secondary font-bold px-10 py-7 text-lg">
                Schedule Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Why Healthcare Organizations Choose Dr. Ekaette
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed lg:leading-8">
                Proven expertise in healthcare transformation creates lasting positive change in organizational performance, patient outcomes, and operational efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Value-Based Care Excellence",
                  description:
                    "Transform your organization with proven value-based care strategies that improve patient outcomes while reducing costs.",
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Operational Efficiency",
                  description:
                    "Streamline healthcare operations and project management to maximize productivity and resource utilization.",
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Clinical Documentation Integrity",
                  description:
                    "Implement comprehensive CDI programs that improve accuracy, compliance, and revenue optimization.",
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Risk Adjustment Optimization",
                  description:
                    "Enhance Medicare risk adjustment coding and documentation to maximize appropriate reimbursement.",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Strategic Leadership",
                  description:
                    "Develop healthcare leaders who can navigate complex transformations and drive sustainable change.",
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Measurable Results",
                  description:
                    "Track improvements in quality metrics, cost savings, and operational performance with proven methodologies.",
                },
              ].map((benefit, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Healthcare Transformation Services</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed lg:leading-8">
                Comprehensive solutions tailored to your healthcare organization's unique needs
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50">
                <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white border-b-4 border-primary">
                  <CardTitle className="text-2xl font-bold">Strategic Transformation</CardTitle>
                  <CardDescription className="text-white/80 leading-relaxed">
                    Comprehensive healthcare strategy and transformation initiatives
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">Value-based care implementation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">Medicare population management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">Healthcare operations optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">Strategic planning and change management</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground mb-6 font-medium">
                    <strong>Outcome:</strong> Sustainable cost reductions and improved patient outcomes
                  </p>
                  <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0POpmmqtCOnoWSRqQtmriyEAFkkXrcpIhRMDGVygXPrk42Kmw6b6lVtSUNK36XBKbsKr6EA0vj" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary hover:bg-primary/90 font-bold py-6 text-base">Learn More</Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50">
                <CardHeader className="bg-gradient-to-r from-secondary to-secondary/80 text-white border-b-4 border-secondary">
                  <CardTitle className="text-2xl font-bold">Clinical Documentation Integrity</CardTitle>
                  <CardDescription className="text-white/80 leading-relaxed">Advanced CDI programs and implementation</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">Centralized CDI program development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">Coding accuracy improvement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">Physician engagement strategies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">Compliance and quality assurance</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground mb-6 font-medium">
                    <strong>Proven Results:</strong> 40% improvement in coding accuracy
                  </p>
                  <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0POpmmqtCOnoWSRqQtmriyEAFkkXrcpIhRMDGVygXPrk42Kmw6b6lVtSUNK36XBKbsKr6EA0vj" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" className="w-full font-bold py-6 text-base">
                      Learn More
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50">
                <CardHeader className="bg-gradient-to-r from-accent to-accent/80 text-white border-b-4 border-accent">
                  <CardTitle className="text-2xl font-bold">Healthcare Consulting</CardTitle>
                  <CardDescription className="text-white/80 leading-relaxed">
                    Expert guidance for healthcare management challenges
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">Healthcare management consulting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">Risk adjustment optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">Health information systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">Performance improvement initiatives</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground mb-6 font-medium">
                    <strong>Experience:</strong> 10+ years in healthcare operations
                  </p>
                  <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0POpmmqtCOnoWSRqQtmriyEAFkkXrcpIhRMDGVygXPrk42Kmw6b6lVtSUNK36XBKbsKr6EA0vj" target="_blank" rel="noopener noreferrer">
                    <Button
                      className="w-full border-accent text-white bg-accent hover:bg-accent/90 font-bold py-6 text-base"
                    >
                      Learn More
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50">
                <CardHeader className="bg-gradient-to-r from-primary/80 to-accent text-white border-b-4 border-primary/80">
                  <CardTitle className="text-2xl font-bold">Executive Development</CardTitle>
                  <CardDescription className="text-white/80 leading-relaxed">
                    Leadership coaching and professional development
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary/80 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">Executive and career development coaching</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary/80 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">Public speaking and corporate training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary/80 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">Healthcare leadership development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary/80 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">Strategic planning facilitation</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground mb-6 font-medium">
                    <strong>Focus:</strong> Healthcare executive excellence
                  </p>
                  <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0POpmmqtCOnoWSRqQtmriyEAFkkXrcpIhRMDGVygXPrk42Kmw6b6lVtSUNK36XBKbsKr6EA0vj" target="_blank" rel="noopener noreferrer">
                    <Button
                      className="w-full border-primary/80 text-white bg-primary/80 hover:bg-primary font-bold py-6 text-base"
                    >
                      Learn More
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-16">What Healthcare Organizations Say</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                    "Dr. Ekaette's strategic transformation initiatives saved our organization $2.3M annually while improving our clinical documentation accuracy by 40%. Her expertise is unmatched."
                  </p>
                  <div className="text-left">
                    <p className="font-bold text-foreground">Jennifer Martinez</p>
                    <p className="text-muted-foreground text-sm">Chief Medical Officer, Regional Health System</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                    "The CDI program implementation exceeded our expectations. We've seen significant improvements in coding accuracy and physician engagement across all departments."
                  </p>
                  <div className="text-left">
                    <p className="font-bold text-foreground">Robert Chen</p>
                    <p className="text-muted-foreground text-sm">VP of Operations, Medicare Advantage Plan</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gradient-to-r from-primary via-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Transform Your Healthcare Organization?</h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed lg:leading-8">
            Schedule a consultation to learn how Dr. Ekaette's proven strategies can drive meaningful change and improve patient outcomes in your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0POpmmqtCOnoWSRqQtmriyEAFkkXrcpIhRMDGVygXPrk42Kmw6b6lVtSUNK36XBKbsKr6EA0vj" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-secondary font-bold px-8 py-6 text-lg">
                Schedule Consultation
              </Button>
            </a>
            <Link href="/services">
              <Button
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent font-bold px-8 py-6 text-lg"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
