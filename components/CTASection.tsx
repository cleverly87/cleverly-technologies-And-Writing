import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 border border-primary/30 rounded-2xl px-6 py-16 text-center shadow-2xl sm:px-16">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Ready to Build Something <span className="text-primary">Enterprise-Grade</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-foreground/70">
            Let's discuss your project. Get a free consultation and transparent quote with no obligation. 
            See why businesses are ditching WordPress for modern, scalable solutions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-dark transition-all hover:scale-105"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact?action=schedule"
              className="inline-flex items-center justify-center rounded-md border border-dark-300 bg-dark-200/50 px-6 py-3 text-base font-semibold text-foreground hover:bg-dark-200 transition-colors"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Link>
          </div>
          <div className="mt-10 text-sm text-foreground/60">
            <p>30-minute free consultation • Transparent pricing • No pressure sales</p>
          </div>

          {/* Decorative elements */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.1" />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#10b981" />
                <stop offset={1} stopColor="#3b82f6" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}
