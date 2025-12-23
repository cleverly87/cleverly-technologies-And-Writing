import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, FileText, Boxes, Wrench, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | Clever Technologies & Writing',
  description: 'Comprehensive web development and API documentation services. Custom web applications, technical writing, and business solutions built with enterprise-grade technology.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Enterprise-grade solutions for every business need. From custom web applications to comprehensive API documentation.
          </p>
        </div>
      </section>

      {/* Web Development Section */}
      <section id="web-development" className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
              <Globe className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Web Application Development</h2>
            <p className="text-xl text-foreground/70 mb-6">
              Full-stack custom web applications built with the same enterprise-grade technology stack used by Fortune 500 companies.
            </p>
            <p className="text-foreground/70 mb-8">
              Every project uses Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, and Supabase. Whether you need a professional marketing site or a complex web application with custom dashboards, you get the same modern, scalable architecture.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-dark-100 border border-primary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Professional Marketing Sites</h3>
              <div className="text-3xl font-bold text-foreground mb-4">£3,000 - £8,000</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">5-15 pages with responsive design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Headless CMS integration (Contentful, Sanity, Supabase)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Contact forms with email integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Advanced SEO optimization (90+ Lighthouse scores)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Vercel deployment with CDN</span>
                </li>
              </ul>
              <p className="text-sm text-foreground/60">Estimated: 25-60 hours</p>
            </div>

            <div className="bg-dark-100 border border-secondary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Full-Stack Web Applications</h3>
              <div className="text-3xl font-bold text-foreground mb-4">£11,000 - £23,000+</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Custom admin dashboards & CMS</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">PostgreSQL/Supabase database architecture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">User authentication & role-based access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">E-commerce & booking system integrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">API integrations (Microsoft Graph, Stripe, etc.)</span>
                </li>
              </ul>
              <p className="text-sm text-foreground/60">Estimated: 130-195 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section id="api-documentation" className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 bg-dark-100">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-dark-200/50 border border-primary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Single API Documentation</h3>
              <div className="text-3xl font-bold text-foreground mb-4">£5,000 - £12,000</div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Complete API reference documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">OpenAPI/Swagger specification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Code examples in multiple languages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Developer portal setup</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark-200/50 border border-secondary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Multi-API Developer Portal</h3>
              <div className="text-3xl font-bold text-foreground mb-4">£12,000 - £25,000+</div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Multi-API documentation platform</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Interactive API explorer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">SDK generation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">Versioning & changelog management</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 text-secondary mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-4">API Documentation & Technical Writing</h2>
            <p className="text-xl text-foreground/70 mb-6">
              Documentation that gets developers integrated in hours, not weeks. Clear, comprehensive, and actionable.
            </p>
            <p className="text-foreground/70 mb-8">
              Expert API documentation creation with OpenAPI/Swagger specifications, developer portals, SDK documentation, and integration guides. We implement Documentation-as-Code (DocOps) with CI/CD pipelines for automated, always-up-to-date documentation.
            </p>
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-3">Why Our Documentation Works</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Developer-first approach with clear examples</li>
                <li>• Reduced onboarding time from weeks to hours</li>
                <li>• Automated testing and validation</li>
                <li>• Postman collection creation included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTW Platform Section */}
      <section id="ctw-platform" className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-6">
            <Boxes className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold mb-4">CTW Integration Platform</h2>
          <div className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent font-semibold mb-6">
            Coming Soon - Development Underway
          </div>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Our proprietary SaaS tool for automated API documentation generation and SDK creation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Upload Specifications',
              description: 'Swagger/OpenAPI files, Postman collections, or raw API specs'
            },
            {
              title: 'Automated Cleaning',
              description: 'AI-powered optimization and standardization of documentation'
            },
            {
              title: 'Generate Portals',
              description: 'Full-scale documentation portals ready to deploy'
            },
            {
              title: 'Multi-Language SDKs',
              description: 'Auto-generated SDKs in JavaScript, Python, Go, and more'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-dark-100 border border-accent/30 rounded-2xl p-6">
              <div className="text-4xl font-bold text-accent mb-3">{index + 1}</div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/60 mb-4">
            Get notified when CTW Integration Platform launches
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-accent to-accent/80 rounded-lg hover:scale-105 transition-all"
          >
            Join Waitlist
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Business Applications Section */}
      <section id="business-apps" className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 bg-dark-100">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
              <Wrench className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Standalone Business Applications</h2>
            <p className="text-xl text-foreground/70 mb-6">
              Custom business applications tailored to your specific needs and workflows.
            </p>
            <p className="text-foreground/70 mb-8">
              From internal tools to customer-facing applications, we build solutions that streamline your operations and drive business value. Every application is built with scalability, security, and user experience in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Internal Tools',
                items: ['Workflow automation', 'Employee dashboards', 'Reporting systems', 'Data management']
              },
              {
                title: 'CRM & Project Management',
                items: ['Custom CRM solutions', 'Project tracking', 'Team collaboration', 'Client portals']
              },
              {
                title: 'Data & Analytics',
                items: ['Business intelligence dashboards', 'Real-time analytics', 'Data visualization', 'Custom reports']
              },
              {
                title: 'Integration Middleware',
                items: ['API connectors', 'System integrations', 'Data synchronization', 'Automation workflows']
              }
            ].map((category, index) => (
              <div key={index} className="bg-dark-200/50 border border-primary/30 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4 text-primary">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-foreground/70">
                      <span className="text-primary mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Pricing for Business Applications</h3>
          <p className="text-foreground/70 mb-6">
            Business applications are quoted based on scope and complexity. Most projects range from £5,000 to £30,000+.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-primary font-semibold hover:text-primary-light"
          >
            Request a Custom Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-30" />
          <div className="relative bg-dark-100 border border-dark-300 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Get a detailed, itemized quote tailored to your specific needs. No obligations, no sales pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl hover:scale-105 transition-transform duration-300"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-foreground bg-dark-200 border border-dark-300 rounded-xl hover:bg-dark-300 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
