'use client'

export function ExpertiseSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                My Expertise
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed lg:leading-8">
                I provide fractional executive leadership and strategic advisory services focused on healthcare financing, cost management, and regulatory compliance within alternative payment and value-based care models. I help payer, provider, and health technology organizations optimize performance across Medicare Advantage, ACOs, and population health programs by aligning clinical strategy, operations, analytics, and governance to support sustainable financial and quality outcomes.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed lg:leading-8">
                I specialize in audit readiness and compliance management, designing documentation integrity, regulatory governance, and monitoring frameworks that support CMS, RADV, and NCQA requirements. I continuously track and analyze policy and regulatory changes, assess operational and financial impact, and deliver clear reporting and guidance to executive leadership. This proactive approach ensures organizations remain compliant, audit-ready, and strategically positioned as payment models, regulations, and healthcare financing policies continue to evolve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
