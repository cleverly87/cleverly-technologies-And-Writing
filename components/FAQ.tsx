'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Why don\'t you use WordPress?',
      answer: 'WordPress is outdated technology that creates technical debt. We build with modern, enterprise-grade tools (Next.js, React, TypeScript) that are faster, more secure, and infinitely more scalable. Your business deserves better than a platform from 2003.',
    },
    {
      question: 'How much does a custom website cost?',
      answer: 'Professional marketing sites start at £2,000-5,000. Full-stack web applications with custom admin dashboards, databases, and advanced features range from £11,000-23,000+. We provide transparent, itemized quotes so you know exactly what you\'re paying for.',
    },
    {
      question: 'What makes your development "enterprise-grade"?',
      answer: 'We use the exact same technology stack as companies like Airbnb, Netflix, and Uber: Next.js for frontend, PostgreSQL/Supabase for databases, TypeScript for type safety, and Vercel for edge deployment. You get Fortune 500 quality regardless of your business size.',
    },
    {
      question: 'Can you migrate my existing WordPress site?',
      answer: 'Absolutely! We specialize in WordPress migrations to modern Next.js applications. You\'ll see dramatically faster load times (often 10x improvement), better SEO, lower hosting costs, and a site that\'s actually maintainable. Most migrations take 4-8 weeks.',
    },
    {
      question: 'Do you offer payment plans or financing?',
      answer: 'Yes! We offer multiple payment options: fixed-price with milestone payments (30/40/30 split), hourly rates (£85-120/hour), monthly retainers, and profit-sharing partnerships for viable startups with limited initial capital.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Professional marketing sites: 3-6 weeks. Full-stack applications: 3-6 months depending on complexity. API documentation: 4-12 weeks. We provide detailed timelines with clear milestones in every project proposal.',
    },
    {
      question: 'What is the CTW Integration Platform?',
      answer: 'Our proprietary SaaS tool that automates API documentation. Upload your OpenAPI/Swagger files or Postman collections, and it generates full documentation portals, auto-generates SDKs in multiple languages, and validates your APIs. It\'s designed to get developers integrated in hours, not weeks.',
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes! We offer maintenance retainers starting at £500/month, emergency support at £150/hour with same-day response, and ongoing feature development. Every project includes post-launch support to ensure everything runs smoothly.',
    },
  ]

  return (
    <section id="faq" className="py-20 lg:py-28 bg-dark-100">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Everything you need to know about working with CTW
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-dark-200/50 border border-dark-300 rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
