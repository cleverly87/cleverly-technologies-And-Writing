import Link from 'next/link'
import { Code2, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const navigation = {
    services: [
      { name: 'Web Development', href: '/services#web-development' },
      { name: 'API Documentation', href: '/services#api-documentation' },
      { name: 'CTW Integration Platform', href: '/services#ctw-platform' },
      { name: 'Business Applications', href: '/services#business-apps' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Tech Stack', href: '/tech-stack' },
    ],
    resources: [
      { name: 'Case Studies', href: '/portfolio#case-studies' },
      { name: 'FAQ', href: '/#faq' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  }

  return (
    <footer className="bg-dark-100 border-t border-dark-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">
                <span className="text-primary">Clever</span>
                <span className="text-foreground"> Technologies & Writing</span>
              </span>
            </Link>
            <p className="text-sm leading-6 text-foreground/70 max-w-md">
              Enterprise-grade web development and API documentation for businesses of all sizes. 
              No WordPress. No compromises. Just modern, scalable solutions.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:hello@ctw.dev" className="text-foreground/70 hover:text-primary">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-foreground/70 hover:text-primary">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-foreground/70 hover:text-primary">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-foreground/70 hover:text-primary">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-foreground/70 hover:text-primary">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-dark-300 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div className="max-w-2xl">
              <h4 className="text-sm font-semibold text-foreground mb-2">Legal & Compliance</h4>
              <p className="text-xs leading-5 text-foreground/60">
                We assist clients in navigating EU privacy regulations (GDPR), cookie laws, and analytics tracking compliance. 
                All projects are built with privacy-first principles and regulatory compliance in mind.
              </p>
            </div>
          </div>
          <p className="text-xs leading-5 text-foreground/50">
            &copy; {new Date().getFullYear()} Clever Technologies & Writing. All rights reserved. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
