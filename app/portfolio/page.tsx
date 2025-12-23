import type { Metadata } from 'next'
import Image from 'next/image'
import { ExternalLink, CheckCircle2, Code, Globe, Zap, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio | Clever Technologies & Writing',
  description: 'Real projects delivering real results. See how we help businesses build enterprise-grade web applications.',
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Real projects. Real results. See how we help businesses build enterprise-grade solutions.
          </p>
        </div>
      </section>

      {/* Featured Project - Psych-Skills */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-3xl blur-xl" />
          
          <div className="relative bg-dark-100 border border-primary/30 rounded-3xl overflow-hidden">
            {/* Project Header */}
            <div className="p-8 md:p-12 border-b border-dark-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
                    Featured Project
                  </div>
                  <h2 className="text-4xl font-bold mb-3">Psych-Skills</h2>
                  <p className="text-xl text-foreground/70">
                    Professional Sports Psychology Practice Platform
                  </p>
                </div>
                <a 
                  href="https://www.psych-skills.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:scale-105 transition-transform"
                >
                  Visit Live Site
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'NextAuth.js', 'Microsoft Graph', 'Vercel'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-dark-200 border border-dark-300 rounded-full text-sm text-foreground/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative bg-dark-200 p-8 md:p-12">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-dark-300 shadow-2xl bg-dark-300">
                <Image
                  src="/psychSkills.png"
                  alt="Psych-Skills Platform Screenshot"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
              {/* The Challenge */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  The Challenge
                </h3>
                <p className="text-foreground/70 mb-4">
                  A sports psychology practice needed a professional platform to manage client bookings, 
                  deliver content, and streamline communications - all while maintaining client confidentiality 
                  and professional standards.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70">Online booking system with availability management</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70">Secure admin dashboard for content management</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70">Automated email workflows and notifications</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70">Professional blog and testimonials</span>
                  </div>
                </div>
              </div>

              {/* The Solution */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                    <span className="text-secondary font-bold">2</span>
                  </div>
                  The Solution
                </h3>
                <p className="text-foreground/70 mb-4">
                  Full-stack application with Next.js for performance, Prisma + Supabase for data management, 
                  NextAuth for secure access, and Microsoft Graph API integration for automated email workflows. 
                  Admin dashboard provides complete control over content and bookings.
                </p>
                <div className="space-y-3">
                  <div className="bg-dark-200/50 rounded-lg p-3">
                    <div className="flex items-center mb-1">
                      <Code className="w-4 h-4 text-primary mr-2" />
                      <span className="font-semibold text-sm">Admin Dashboard</span>
                    </div>
                    <p className="text-xs text-foreground/60">Content management, bookings, and client communications</p>
                  </div>
                  <div className="bg-dark-200/50 rounded-lg p-3">
                    <div className="flex items-center mb-1">
                      <Globe className="w-4 h-4 text-secondary mr-2" />
                      <span className="font-semibold text-sm">Email Automation</span>
                    </div>
                    <p className="text-xs text-foreground/60">Microsoft Graph API for booking confirmations and workflows</p>
                  </div>
                  <div className="bg-dark-200/50 rounded-lg p-3">
                    <div className="flex items-center mb-1">
                      <Zap className="w-4 h-4 text-accent mr-2" />
                      <span className="font-semibold text-sm">Scheduled Tasks</span>
                    </div>
                    <p className="text-xs text-foreground/60">Cron job automation for email monitoring and processing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-t border-dark-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                  <span className="text-accent font-bold">3</span>
                </div>
                The Results
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-foreground/70">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">Automated</div>
                  <div className="text-sm text-foreground/70">Bookings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">Secure</div>
                  <div className="text-sm text-foreground/70">Admin Access</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Email</div>
                  <div className="text-sm text-foreground/70">Automation</div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Key Features Delivered</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Admin dashboard with full content control',
                  'Online booking system with calendar',
                  'Automated email workflows',
                  'Dynamic blog with SEO optimization',
                  'Client testimonials management',
                  'Contact form with threading',
                  'Image upload and cloud storage',
                  'Role-based authentication',
                  'Mobile-responsive design'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Project?</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Whether you need a marketing site, full-stack application, or API documentation, 
            we deliver enterprise-grade solutions tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl hover:scale-105 transition-transform"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-foreground bg-dark-200 border border-dark-300 rounded-xl hover:border-primary/50 transition-all"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
