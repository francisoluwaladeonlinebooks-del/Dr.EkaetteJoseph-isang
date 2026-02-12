import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Users, Check } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: BarChart3,
      title: "Healthcare Strategy & Transformation",
      description:
        "Comprehensive healthcare transformation initiatives focused on value-based care and operational efficiency.",
      features: [
        "Value transformation initiatives for Medicare populations",
        "Clinical documentation integrity (CDI) programs",
        "Coding program transformation and optimization",
        "Physician fee schedule design and implementation",
      ],
      gradient: "from-primary/10 to-primary/5",
      iconColor: "text-primary",
    },
    {
      icon: Users,
      title: "Training & Professional Development",
      description: "Expert consulting services and professional development programs for healthcare organizations.",
      features: [
        "Healthcare & Management Consulting",
        "Public Speaking and Corporate Training",
        "Executive and Career Development Coaching",
        "Strategic Planning and Change Management",
      ],
      gradient: "from-accent/10 to-accent/5",
      iconColor: "text-accent",
    },
  ]

  return (
    <section className="py-24 lg:py-40 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
        <div className="text-center space-y-6 mb-20 animate-fade-in-up">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground tracking-tight">What I Do</h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed lg:leading-8">
            Specialized healthcare strategy and transformation services designed to improve clinical outcomes, reduce
            costs, and enhance operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group bg-background/50 backdrop-blur-sm"
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${index === 0 ? "from-primary to-primary/50" : "from-accent to-accent/50"}`}
              />

              <CardHeader className="relative pb-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-5 rounded-2xl bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform duration-500`}
                  >
                    <service.icon className={`h-9 w-9 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-3xl font-bold">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-lg lg:text-xl leading-relaxed lg:leading-8">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-5">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 group/item">
                      <div
                        className={`mt-1 p-1 rounded-full ${index === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"} group-hover/item:scale-110 transition-transform flex-shrink-0`}
                      >
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-lg text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up animate-delay-300">
          <Link href="https://calendar.app.google/VWSK6szrzCfvSMn1A" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90 font-semibold px-6 sm:px-10 py-5 sm:py-7 rounded-full text-sm sm:text-lg shadow-xl hover:shadow-secondary/25 transition-all duration-300 hover:scale-105 whitespace-normal text-center leading-snug"
            >
              <span className="hidden sm:inline">Discuss Your Healthcare Transformation Needs</span>
              <span className="sm:hidden">Discuss Healthcare Transformation</span>
              <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
