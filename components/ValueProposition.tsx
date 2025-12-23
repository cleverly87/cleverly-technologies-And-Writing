import { Shield, Zap, TrendingUp, Coins } from 'lucide-react'

export default function ValueProposition() {
  const values = [
    {
      icon: Shield,
      title: 'No Compromise on Quality',
      description: 'Every client gets enterprise-grade architecture, from solopreneurs to scale-ups. Same tools as Airbnb, Netflix, and Uber.',
    },
    {
      icon: Coins,
      title: 'Transparent Pricing',
      description: 'No hidden costs or surprise fees. Clear, itemized quotes for every project. Know exactly what you\'re paying for.',
    },
    {
      icon: TrendingUp,
      title: 'Future-Proof Development',
      description: 'Build it right once, scale seamlessly when you need to. Seamless Microsoft Azure and AWS integration paths.',
    },
    {
      icon: Zap,
      title: 'Partnership Approach',
      description: 'Profit-sharing models available because we believe in your success. Not just a vendor, but a growth partner.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-dark-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Why Choose <span className="text-primary">Clever Technologies & Writing</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            We democratize enterprise-grade technology by making Fortune 500-quality development 
            accessible to businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="relative group bg-dark-200/50 border border-dark-300 rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <value.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-foreground/70">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-lg px-8 py-6 max-w-3xl mx-auto">
            <p className="text-xl font-semibold text-foreground">
              &ldquo;You deserve better than WordPress. You deserve enterprise-grade. 
              You deserve <span className="text-primary">Clever Technologies & Writing</span>.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
