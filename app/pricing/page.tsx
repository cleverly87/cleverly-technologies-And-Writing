'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, Zap, Calculator, TrendingUp, Clock, Coins } from 'lucide-react'

export default function PricingPage() {
  const [hourlyRate, setHourlyRate] = useState(85)
  const [estimatedHours, setEstimatedHours] = useState(40)
  const [projectType, setProjectType] = useState<'marketing' | 'fullstack'>('marketing')

  const calculateCost = () => {
    return (hourlyRate * estimatedHours).toLocaleString()
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero with Animated Background */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Coins className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Transparent Pricing</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Enterprise Quality.
            </span>
            <br />
            <span className="text-foreground">Fair Prices.</span>
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            No hidden fees. No surprise costs. Just honest pricing for world-class development.
          </p>
        </div>
      </section>

      {/* Interactive Pricing Calculator */}
      <section className="relative mx-auto max-w-4xl px-6 lg:px-8 py-16">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all" />
          
          <div className="relative bg-dark-100 border border-dark-300 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center justify-center mb-8">
              <Calculator className="w-12 h-12 text-primary mr-4" />
              <h2 className="text-3xl font-bold">Project Cost Estimator</h2>
            </div>
            
            <div className="space-y-8">
              {/* Project Type Selector */}
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-4">Project Type</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => {
                      setProjectType('marketing')
                      setEstimatedHours(40)
                    }}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      projectType === 'marketing'
                        ? 'border-primary bg-primary/10'
                        : 'border-dark-300 hover:border-dark-400'
                    }`}
                  >
                    <div className="text-left">
                      <div className="text-xl font-bold mb-2">Marketing Site</div>
                      <div className="text-sm text-foreground/70">Static/Headless CMS</div>
                      <div className="text-2xl font-bold text-primary mt-4">£3K - £8K</div>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => {
                      setProjectType('fullstack')
                      setEstimatedHours(150)
                    }}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      projectType === 'fullstack'
                        ? 'border-secondary bg-secondary/10'
                        : 'border-dark-300 hover:border-dark-400'
                    }`}
                  >
                    <div className="text-left">
                      <div className="text-xl font-bold mb-2">Full-Stack App</div>
                      <div className="text-sm text-foreground/70">Database-Driven</div>
                      <div className="text-2xl font-bold text-secondary mt-4">£11K - £23K</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Hourly Rate Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-foreground/70">Hourly Rate</label>
                  <span className="text-2xl font-bold text-primary">£{hourlyRate}/hr</span>
                </div>
                <input
                  type="range"
                  min="85"
                  max="120"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-dark-300 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-foreground/50 mt-2">
                  <span>Standard (£85)</span>
                  <span>Complex/Urgent (£120)</span>
                </div>
              </div>

              {/* Estimated Hours Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-foreground/70">Estimated Hours</label>
                  <span className="text-2xl font-bold text-secondary">{estimatedHours} hrs</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="10"
                  value={estimatedHours}
                  onChange={(e) => setEstimatedHours(Number(e.target.value))}
                  className="w-full h-2 bg-dark-300 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
              </div>

              {/* Total Calculation */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-30" />
                <div className="relative bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-2xl p-8 text-center">
                  <div className="text-sm text-foreground/70 mb-2">Estimated Project Cost</div>
                  <div className="text-5xl font-bold text-foreground mb-4">
                    £{calculateCost()}
                  </div>
                  <div className="text-sm text-foreground/60">
                    This is an estimate. Final cost depends on project scope and complexity.
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="block w-full py-4 text-center text-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl hover:scale-105 transition-transform duration-300"
              >
                Get Accurate Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Comparison */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Flexible Pricing Models</h2>
        
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Hourly */}
          <div className="group relative bg-dark-100 border border-dark-300 rounded-2xl p-8 hover:border-primary/50 transition-all hover:-translate-y-2">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Hourly Rate</h3>
            <div className="text-4xl font-bold text-primary mb-6">£85-120<span className="text-lg text-foreground/50">/hr</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">Transparent time tracking</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">Detailed invoices</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">Flexible scope</span>
              </li>
            </ul>
            <div className="text-xs text-foreground/50">Best for: Ongoing work & maintenance</div>
          </div>

          {/* Fixed Price */}
          <div className="group relative bg-dark-100 border-2 border-primary rounded-2xl p-8 hover:border-primary/70 transition-all hover:-translate-y-2 shadow-lg shadow-primary/20">
            <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
              POPULAR
            </div>
            <Zap className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Fixed Price</h3>
            <div className="text-4xl font-bold text-primary mb-6">£2K-23K<span className="text-lg text-foreground/50">+</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">Clear scope definition</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">Milestone payments</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">Predictable budget</span>
              </li>
            </ul>
            <div className="text-xs text-foreground/50">Best for: Defined projects</div>
          </div>

          {/* Retainer */}
          <div className="group relative bg-dark-100 border border-dark-300 rounded-2xl p-8 hover:border-secondary/50 transition-all hover:-translate-y-2">
            <TrendingUp className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Monthly Retainer</h3>
            <div className="text-4xl font-bold text-secondary mb-6">£1.6K<span className="text-lg text-foreground/50">/mo</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">20-80 hours/month</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">Priority support</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">Discounted rates</span>
              </li>
            </ul>
            <div className="text-xs text-foreground/50">Best for: Ongoing development</div>
          </div>

          {/* Profit Share */}
          <div className="group relative bg-dark-100 border border-dark-300 rounded-2xl p-8 hover:border-accent/50 transition-all hover:-translate-y-2">
            <div className="absolute top-4 right-4 px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full border border-accent/30">
              STARTUP
            </div>
            <TrendingUp className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-2">Profit Share</h3>
            <div className="text-4xl font-bold text-accent mb-6">30-50%<span className="text-lg text-foreground/50"> off</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">Reduced upfront cost</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">5-15% revenue share</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">Equity option available</span>
              </li>
            </ul>
            <div className="text-xs text-foreground/50">Best for: Viable startups</div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">What You Get</h2>
        <p className="text-center text-foreground/70 mb-12">Every project includes enterprise-grade quality</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Modern Tech Stack', desc: 'Next.js, React, TypeScript, Tailwind CSS', included: true },
            { title: 'Enterprise Architecture', desc: 'Scalable, maintainable, production-ready', included: true },
            { title: 'Responsive Design', desc: 'Perfect on mobile, tablet, and desktop', included: true },
            { title: 'SEO Optimization', desc: '90+ Lighthouse scores, structured data', included: true },
            { title: 'Performance', desc: 'Sub-2-second load times, optimized assets', included: true },
            { title: 'Security', desc: 'Best practices, secure authentication', included: true },
            { title: 'Documentation', desc: 'Clear technical docs and user guides', included: true },
            { title: 'Testing', desc: 'QA testing and bug fixes', included: true },
            { title: 'Deployment', desc: 'Production deployment on Vercel/AWS', included: true },
            { title: 'WordPress', desc: 'We never use legacy platforms', included: false },
            { title: 'Templates', desc: 'No templates - 100% custom code', included: false },
            { title: 'Hidden Fees', desc: 'Transparent pricing always', included: false },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl border ${
                item.included
                  ? 'bg-primary/5 border-primary/30'
                  : 'bg-red-500/5 border-red-500/30'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold">{item.title}</h4>
                {item.included ? (
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                ) : (
                  <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                )}
              </div>
              <p className="text-sm text-foreground/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30" />
          <div className="relative bg-dark-100 border border-dark-300 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Get a detailed, itemized quote for your project. No obligations, no sales pressure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/30"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
