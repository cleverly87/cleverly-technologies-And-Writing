'use client'

import { useState } from 'react'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder, Psych-Skills',
      content: 'Andrew built us an enterprise-grade platform that would have cost £100k+ with an agency. The custom admin dashboard, booking system, and blog are exactly what we needed. Load times are incredible, and we can scale effortlessly.',
      rating: 5,
      project: 'Full-Stack Web Application',
    },
    {
      name: 'James Cooper',
      role: 'CTO, TechStart Labs',
      content: 'The API documentation Andrew created cut our developer onboarding time from 2 weeks to less than 4 hours. Clear, comprehensive, and the interactive portal is a game-changer. Best investment we made this year.',
      rating: 5,
      project: 'API Documentation',
    },
    {
      name: 'Emily Richardson',
      role: 'Director, GreenLeaf Consulting',
      content: 'We were stuck with a slow WordPress site that cost us customers. Andrew rebuilt our site with Next.js—it\'s 10x faster, looks stunning, and we can finally scale. The Microsoft 365 integration saves us hours every week.',
      rating: 5,
      project: 'WordPress Migration',
    },
  ]

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Real results from real businesses who chose enterprise-grade
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-dark-200/50 border border-dark-300 rounded-lg p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="pt-6 border-t border-dark-300">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-foreground/60">{testimonial.role}</div>
                <div className="mt-2 inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                  {testimonial.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
