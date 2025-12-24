import type { Metadata } from 'next'
import { Cloud, Database, Code, Palette, Server, Lock, Zap, Globe, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Technology Stack | Clever Technologies & Writing',
  description: 'Enterprise-grade technology stack powering every project. Modern, scalable tools used by Fortune 500 companies, explained for business owners.',
}

export default function TechStackPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-4">
            The same enterprise-grade tools used by Airbnb, Netflix, and Uber - explained simply.
          </p>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {"You don't need to understand the technical details. We handle that. This page shows you what makes your project enterprise-grade."}
          </p>
        </div>
      </section>

      {/* Architecture Flows */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Project Architectures</h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          {"Different projects need different setups. Here's how we structure yours based on your needs."}
        </p>

        <div className="space-y-16">
          {/* Marketing Site Architecture */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl blur-xl" />
            <div className="relative bg-dark-100 border border-primary/30 rounded-3xl p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Professional Marketing Sites</h3>
                  <p className="text-foreground/70">Fast, SEO-optimized, easy to update</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-foreground/60">Starting at</div>
                  <div className="text-2xl font-bold text-primary">£3K-8K</div>
                </div>
              </div>

              {/* Flow Diagram */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-dark-200 border border-primary/30 rounded-xl p-6 text-center">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-3" />
                  <div className="font-bold mb-2">Your Website</div>
                  <div className="text-sm text-foreground/60">Built with Next.js & React</div>
                </div>
                
                <div className="flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-primary/50" />
                </div>

                <div className="bg-dark-200 border border-primary/30 rounded-xl p-6 text-center">
                  <Database className="w-12 h-12 text-secondary mx-auto mb-3" />
                  <div className="font-bold mb-2">Content Storage</div>
                  <div className="text-sm text-foreground/60">Headless CMS or Supabase</div>
                </div>

                <div className="flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-primary/50" />
                </div>

                <div className="bg-dark-200 border border-primary/30 rounded-xl p-6 text-center">
                  <Cloud className="w-12 h-12 text-accent mx-auto mb-3" />
                  <div className="font-bold mb-2">Hosting</div>
                  <div className="text-sm text-foreground/60">Vercel Global CDN</div>
                </div>
              </div>

              {/* What this means */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3">What This Means for Your Business:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Lightning Fast:</strong> Pages load in under 2 seconds worldwide
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Easy Updates:</strong> Change content without touching code
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Always Online:</strong> 99.99% uptime guarantee
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Layers */}
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-xs text-foreground/50 mb-2">CODE MANAGED BY</div>
                  <div className="font-semibold">CTW</div>
                  <div className="text-xs text-foreground/60">Full control & updates</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-foreground/50 mb-2">DEPLOYMENT</div>
                  <div className="font-semibold">Automated</div>
                  <div className="text-xs text-foreground/60">Instant updates</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-foreground/50 mb-2">INFRASTRUCTURE COST</div>
                  <div className="font-semibold">£0-20/month</div>
                  <div className="text-xs text-foreground/60">Paid to Vercel/host</div>
                </div>
              </div>
            </div>
          </div>

          {/* Full-Stack Architecture */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-3xl blur-xl" />
            <div className="relative bg-dark-100 border border-secondary/30 rounded-3xl p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Full-Stack Web Applications</h3>
                  <p className="text-foreground/70">Custom dashboards, user authentication, complex features</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-foreground/60">Starting at</div>
                  <div className="text-2xl font-bold text-secondary">£11K-23K</div>
                </div>
              </div>

              {/* Flow Diagram */}
              <div className="space-y-4 mb-8">
                {/* Frontend Layer */}
                <div className="bg-dark-200 border border-secondary/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Code className="w-8 h-8 text-secondary mr-3" />
                      <div>
                        <div className="font-bold">Frontend Layer</div>
                        <div className="text-sm text-foreground/60">What users see and interact with</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-3 text-sm">
                    <div className="bg-dark-300/50 rounded-lg p-3 text-center">
                      <div className="font-semibold">Next.js 14</div>
                      <div className="text-xs text-foreground/60">Framework</div>
                    </div>
                    <div className="bg-dark-300/50 rounded-lg p-3 text-center">
                      <div className="font-semibold">React 18</div>
                      <div className="text-xs text-foreground/60">UI Library</div>
                    </div>
                    <div className="bg-dark-300/50 rounded-lg p-3 text-center">
                      <div className="font-semibold">TypeScript</div>
                      <div className="text-xs text-foreground/60">Type Safety</div>
                    </div>
                    <div className="bg-dark-300/50 rounded-lg p-3 text-center">
                      <div className="font-semibold">Tailwind CSS</div>
                      <div className="text-xs text-foreground/60">Styling</div>
                    </div>
                  </div>
                </div>

                {/* Backend/Database Layer */}
                <div className="bg-dark-200 border border-secondary/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Database className="w-8 h-8 text-primary mr-3" />
                      <div>
                        <div className="font-bold">Backend & Database Layer</div>
                        <div className="text-sm text-foreground/60">Data storage, user management, business logic</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-dark-300/50 rounded-lg p-3 text-center">
                      <div className="font-semibold">Supabase</div>
                      <div className="text-xs text-foreground/60">Backend Platform</div>
                    </div>
                    <div className="bg-dark-300/50 rounded-lg p-3 text-center">
                      <div className="font-semibold">PostgreSQL</div>
                      <div className="text-xs text-foreground/60">Database</div>
                    </div>
                    <div className="bg-dark-300/50 rounded-lg p-3 text-center">
                      <div className="font-semibold">Authentication</div>
                      <div className="text-xs text-foreground/60">User Security</div>
                    </div>
                  </div>
                </div>

                {/* Hosting & Infrastructure */}
                <div className="bg-dark-200 border border-secondary/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Cloud className="w-8 h-8 text-accent mr-3" />
                      <div>
                        <div className="font-bold">Hosting & Infrastructure</div>
                        <div className="text-sm text-foreground/60">Where everything runs</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-4 gap-3 text-sm">
                    <div className="bg-dark-300/50 rounded-lg p-3 text-center">
                      <div className="font-semibold">Vercel</div>
                      <div className="text-xs text-foreground/60">Frontend Hosting</div>
                    </div>
                    <div className="bg-dark-300/50 rounded-lg p-3 text-center">
                      <div className="font-semibold">Supabase Cloud</div>
                      <div className="text-xs text-foreground/60">Database Hosting</div>
                    </div>
                    <div className="bg-dark-300/50 rounded-lg p-3 text-center">
                      <div className="font-semibold">AWS/Azure</div>
                      <div className="text-xs text-foreground/60">Enterprise Scale</div>
                    </div>
                    <div className="bg-dark-300/50 rounded-lg p-3 text-center">
                      <div className="font-semibold">Global CDN</div>
                      <div className="text-xs text-foreground/60">Fast Worldwide</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What this means */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3">What This Means for Your Business:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Scales Automatically:</strong> Handles 10 users or 10,000 without issues
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Secure by Default:</strong> Enterprise-grade authentication and data protection
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Enterprise Ready:</strong> Can migrate to Azure/AWS when you need to
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Management */}
              <div className="mt-6 grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-xs text-foreground/50 mb-2">CODE MANAGED BY</div>
                  <div className="font-semibold">CTW</div>
                  <div className="text-xs text-foreground/60">Full control</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-foreground/50 mb-2">UPDATES</div>
                  <div className="font-semibold">Continuous</div>
                  <div className="text-xs text-foreground/60">Always improving</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-foreground/50 mb-2">SCALING</div>
                  <div className="font-semibold">Automatic</div>
                  <div className="text-xs text-foreground/60">Pay as you grow</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-foreground/50 mb-2">OPERATIONAL COSTS</div>
                  <div className="font-semibold">£20-200+/mo</div>
                  <div className="text-xs text-foreground/60">Paid to providers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16 bg-dark-100">
        <h2 className="text-4xl font-bold text-center mb-12">The Tools We Use (Explained Simply)</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Code,
              title: 'Frontend Development',
              description: 'What users see and click on',
              tools: [
                { name: 'Next.js 14', what: 'Makes websites fast and SEO-friendly' },
                { name: 'React 18', what: 'Creates smooth, app-like experiences' },
                { name: 'TypeScript', what: 'Prevents bugs before they happen' },
                { name: 'Tailwind CSS', what: 'Makes sites look professional' }
              ]
            },
            {
              icon: Database,
              title: 'Backend & Database',
              description: 'Where your data lives securely',
              tools: [
                { name: 'Supabase', what: 'Handles users, data, and security' },
                { name: 'PostgreSQL', what: 'Enterprise database (same as banks use)' },
                { name: 'Prisma', what: 'Makes database updates safe' }
              ]
            },
            {
              icon: Cloud,
              title: 'Hosting & Infrastructure',
              description: 'Where your site lives online',
              tools: [
                { name: 'Vercel', what: 'Hosts sites globally with instant updates' },
                { name: 'AWS', what: 'Enterprise cloud when you need to scale' },
                { name: 'Azure', what: 'Microsoft cloud for business integrations' }
              ]
            },
            {
              icon: Lock,
              title: 'Authentication & Security',
              description: 'Keeping users and data safe',
              tools: [
                { name: 'Supabase Auth', what: 'Secure user login and management' },
                { name: 'NextAuth.js', what: 'OAuth (Google, Microsoft login)' },
                { name: 'Row Level Security', what: 'Users only see their own data' }
              ]
            },
            {
              icon: Server,
              title: 'APIs & Integrations',
              description: 'Connecting to other services',
              tools: [
                { name: 'Microsoft Graph', what: 'Connect to Office 365 & Teams' },
                { name: 'REST APIs', what: 'Standard way to connect services' },
                { name: 'Webhooks', what: 'Real-time updates from other apps' }
              ]
            },
            {
              icon: Zap,
              title: 'Performance & Monitoring',
              description: 'Making sure everything works',
              tools: [
                { name: 'Vercel Analytics', what: 'See how fast your site is' },
                { name: 'Sentry', what: 'Catch errors before users notice' },
                { name: 'Lighthouse', what: 'Ensures 90+ performance scores' }
              ]
            }
          ].map((category, index) => (
            <div key={index} className="bg-dark-200/50 border border-dark-300 rounded-2xl p-6 hover:border-primary/50 transition-all">
              <category.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-sm text-foreground/60 mb-4">{category.description}</p>
              <div className="space-y-3">
                {category.tools.map((tool, i) => (
                  <div key={i} className="bg-dark-300/30 rounded-lg p-3">
                    <div className="font-semibold text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-foreground/60">{tool.what}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why This Matters */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Enterprise-Grade Tools Matter</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Future-Proof Investment</h3>
                <p className="text-foreground/70">
                  {"When you're ready to scale from 100 to 100,000 users, your foundation is already built. No expensive rebuilds. No starting over."}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Lower Long-Term Costs</h3>
                <p className="text-foreground/70">
                  Modern tools cost less to run and maintain than legacy systems. You save money while getting better performance.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Competitive Advantage</h3>
                <p className="text-foreground/70">
                  Your site loads faster, works better, and scales easier than competitors using WordPress or outdated platforms.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-foreground/70 mb-6">
              See how these tools work together in a real project
            </p>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl hover:scale-105 transition-transform"
            >
              View Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
