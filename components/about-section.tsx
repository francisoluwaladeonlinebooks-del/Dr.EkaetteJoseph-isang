import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-24 lg:py-40 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-muted/50 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-blob" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          <div className="relative group animate-fade-in-up hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition duration-500" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image
                src="/images/dr-ekaette-office.jpg"
                alt="Dr. Ekaette Joseph-Isang in her office"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 bg-secondary/80 p-3 sm:p-4 rounded-xl backdrop-blur-md border border-white/20 shadow-lg animate-fade-in-up animate-delay-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-full shrink-0">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Transforming Healthcare</p>
                    <p className="text-xs font-medium text-white/90">One Organization at a Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="space-y-8 sm:space-y-10 animate-fade-in-up animate-delay-200">
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3">
                My Expertise
                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              </h3>
              <div className="space-y-5 sm:space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed lg:leading-8 text-justify">
                  I provide fractional executive leadership and strategic advisory services focused on healthcare financing, cost management, and regulatory compliance within alternative payment and value-based care models. I help payer, provider, and health technology organizations optimize performance across Medicare Advantage, ACOs, and population health programs by aligning clinical strategy, operations, analytics, and governance to support sustainable financial and quality outcomes.
                </p>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed lg:leading-8 text-justify">
                  I specialize in audit readiness and compliance management, designing documentation integrity, regulatory governance, and monitoring frameworks that support CMS, RADV, and NCQA requirements. I continuously track and analyze policy and regulatory changes, assess operational and financial impact, and deliver clear reporting and guidance to executive leadership. This proactive approach ensures organizations remain compliant, audit-ready, and strategically positioned as payment models, regulations, and healthcare financing policies continue to evolve.
                </p>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 lg:pt-10">
              <Link href="/experience">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 font-bold px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                >
                  Learn More About My Experience
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
