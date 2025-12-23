import Link from 'next/link'
import { Globe, FileText, Boxes, Wrench, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Web Application Development',
      description: 'Full-stack custom web applications with enterprise-grade tech: Next.js, React, TypeScript, Tailwind, PostgreSQL, Supabase.',
      features: [
        'Professional marketing sites (£3,000-8,000)',
        'Dynamic web applications (£11,000-23,000+)',
        'Custom admin dashboards & CMS',
        'E-commerce & booking systems',
      ],
      cta: 'Explore Web Development',
      href: '/services#web-development',
      color: 'primary',
    },
    {
      icon: FileText,
      title: 'API Documentation & Technical Writing',
      description: 'Expert API documentation that gets developers integrated in hours, not weeks. OpenAPI/Swagger specs, developer portals, SDK documentation.',
      features: [
        'API reference documentation',
        'OpenAPI/Swagger specifications',
        'Developer portal implementation',
        'Documentation-as-Code (DocOps)',
      ],
      cta: 'Learn About API Docs',
      href: '/services#api-documentation',
      color: 'secondary',
    },
    {
      icon: Boxes,
      title: 'CTW Integration Platform',
      description: 'Proprietary SaaS tool for automated API documentation (Coming Soon - Development Underway). Upload specs, get full documentation portals and auto-generated SDKs.',
      features: [
        'Automated API documentation cleaning',
        'Full-scale documentation portals',
        'Multi-language SDK generation',
        'API validation & checking',
      ],
      cta: 'Learn More (Coming Soon)',
      href: '/services#ctw-platform',
      color: 'accent',
    },
    {
      icon: Wrench,
      title: 'Standalone Business Applications',
      description: 'Custom business applications tailored to your needs. Internal tools, CRMs, dashboards, API connectors, and workflow automation.',
      features: [
        'Internal tools & automation',
        'CRM & project management',
        'Data dashboards & analytics',
        'Integration middleware',
      ],
      cta: 'View Business Apps',
      href: '/services#business-apps',
      color: 'primary',
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Comprehensive solutions from custom web applications to technical documentation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-dark-200/50 border border-dark-300 rounded-lg p-8 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-lg transition-colors ${
                  service.color === 'primary' ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' :
                  service.color === 'secondary' ? 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white' :
                  'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white'
                }`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-foreground/70 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-sm text-foreground/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-light group"
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-dark transition-all hover:scale-105"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
