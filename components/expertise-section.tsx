'use client'

export function ExpertiseSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                My Expertise
              </h2>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 sm:p-6 md:p-8">
                <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed text-justify">
                  I provide <span className="font-semibold text-primary">fractional executive leadership and strategic advisory services</span> focused on <span className="font-semibold text-primary">healthcare financing</span>, <span className="font-semibold text-primary">cost management</span>, and <span className="font-semibold text-primary">regulatory compliance</span> within alternative payment and value-based care models. I help payer, provider, and health technology organizations optimize performance across <span className="font-semibold text-primary">Medicare Advantage</span>, <span className="font-semibold text-primary">ACOs</span>, and <span className="font-semibold text-primary">population health programs</span> by aligning clinical strategy, operations, analytics, and governance to support sustainable financial and quality outcomes.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/10 rounded-lg p-4 sm:p-6 md:p-8">
                <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed text-justify">
                  I specialize in <span className="font-semibold text-accent">audit readiness and compliance management</span>, designing <span className="font-semibold text-accent">documentation integrity</span>, <span className="font-semibold text-accent">regulatory governance</span>, and <span className="font-semibold text-accent">monitoring frameworks</span> that support <span className="font-semibold text-accent">CMS, RADV, and NCQA requirements</span>. I continuously track and analyze policy and regulatory changes, assess operational and financial impact, and deliver clear reporting and guidance to executive leadership. This proactive approach ensures organizations remain compliant, audit-ready, and strategically positioned as payment models, regulations, and healthcare financing policies continue to evolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
