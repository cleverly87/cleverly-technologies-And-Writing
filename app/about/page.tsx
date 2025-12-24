import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, Target, Heart, Zap, Users, TrendingUp } from 'lucide-react'
import ProfileImage from '@/components/ProfileImage'

export const metadata: Metadata = {
  title: 'About Us | Clever Technologies & Writing',
  description: 'Learn about our mission to democratize enterprise-grade technology and meet Andrew Cleverly, the founder committed to building Fortune 500-quality solutions for businesses of all sizes.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section with Diagonal Split */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                About CTW
              </span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Democratizing enterprise-grade technology, one business at a time
            </p>
          </div>
        </div>
      </section>

      {/* Company Mission - Unique Card Layout */}
      <section className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-dark-100 border border-dark-300 rounded-3xl p-12 shadow-2xl">
              <Target className="w-16 h-16 text-primary mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                To democratize enterprise-grade technology by making Fortune 500-quality development 
                accessible to small businesses and startups at fair prices.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="text-foreground/70">
                    <strong className="text-foreground">No Compromise on Quality:</strong> Every client receives enterprise-grade architecture
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div className="text-foreground/70">
                    <strong className="text-foreground">Transparent Pricing:</strong> Clear, itemized quotes for every project
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div className="text-foreground/70">
                    <strong className="text-foreground">Future-Proof Development:</strong> Build it right once, scale seamlessly
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group relative bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="absolute top-4 right-4 w-12 h-12 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">What Makes Us Different</h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  We refuse to use WordPress or legacy platforms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Same tools used by Airbnb, Netflix, and Uber
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Seamless Microsoft Azure, AWS, Vercel, and Supabase integration
                </li>
              </ul>
            </div>

            <div className="group relative bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 rounded-2xl p-8 hover:border-secondary/50 transition-all duration-300">
              <div className="absolute top-4 right-4 w-12 h-12 bg-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
              <Heart className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-3">{"Why \"Clever Technologies & Writing\""}</h3>
              <p className="text-foreground/70">
                {"The name reflects our dual expertise - cutting-edge technology development paired with exceptional technical writing. We don't just build applications; we document them properly."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section - Unique Bento-style Layout */}
      <section className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Meet <span className="text-primary">Andrew Cleverly</span>
          </h2>
          <p className="text-xl text-foreground/70">Founder & Lead Developer</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Large Featured Card */}
          <div className="lg:col-span-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500" />
            <div className="relative bg-dark-100 border border-dark-300 rounded-3xl p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <ProfileImage />
                
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">Professional Background</h3>
                  <div className="space-y-4 text-foreground/70">
                    <p>
                      <strong className="text-primary">5+ years</strong> of experience in complex systems and requirements, working closely with clients for accurate transition and building
                    </p>
                    <p>
                      <strong className="text-secondary">Specialized</strong> in API documentation and developer experience
                    </p>
                    <p>
                      Worked with clients ranging from solo founders to enterprise teams, delivering enterprise-grade 
                      solutions that scale. I look at the purpose and the business lifecycle, understanding its value and trying to get the best for you from it.
                    </p>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary">Next.js Expert</span>
                    <span className="px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-sm text-secondary">TypeScript</span>
                    <span className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm text-accent">API Documentation</span>
                    <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary">Microsoft Graph</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/30 rounded-2xl p-6">
              <Users className="w-10 h-10 text-primary mb-3" />
              <h4 className="text-xl font-bold mb-2">Client-First Approach</h4>
              <p className="text-sm text-foreground/70">
                Direct access to expertise. No sales teams, no middlemen. Just honest communication and quality work.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/30 rounded-2xl p-6">
              <TrendingUp className="w-10 h-10 text-secondary mb-3" />
              <h4 className="text-xl font-bold mb-2">Business Focus</h4>
              <p className="text-sm text-foreground/70">
                Understanding P&L, ROI, and business metrics - not just code. Technology that drives real business value.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="mt-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-xl" />
          <div className="relative bg-dark-100 border border-dark-300 rounded-3xl p-12 text-center">
            <div className="text-6xl text-primary/20 mb-4">{"\""}</div>
            <p className="text-2xl font-medium text-foreground/90 italic max-w-4xl mx-auto leading-relaxed">
              {"I started CTW because I was tired of seeing small businesses being sold WordPress sites when they deserved enterprise-grade solutions. Every business, regardless of size, should have access to the same quality technology that powers the world's largest companies."}
            </p>
            <p className="mt-6 text-primary font-semibold">— Andrew Cleverly, Founder</p>
          </div>
        </div>
      </section>

      {/* Values Grid - Unique Layout */}
      <section className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Technical Excellence',
              description: 'Enterprise-grade architecture, modern tools, clean code, and best practices in every project.',
              color: 'primary',
              icon: '⚡'
            },
            {
              title: 'Transparent Communication',
              description: 'Clear pricing, honest timelines, regular updates, and technical explanations in plain English.',
              color: 'secondary',
              icon: '💬'
            },
            {
              title: 'Long-Term Partnership',
              description: 'We build relationships, not just websites. Your success is our success.',
              color: 'accent',
              icon: '🤝'
            },
            {
              title: 'Education-First',
              description: 'Empower clients to understand their technology, not lock them in with complexity.',
              color: 'primary',
              icon: '📚'
            },
            {
              title: 'Innovation',
              description: 'Always learning, always improving, always adopting the best modern tools available.',
              color: 'secondary',
              icon: '🚀'
            },
            {
              title: 'Integrity',
              description: 'We recommend what is best for your business, even if it means less revenue for us.',
              color: 'accent',
              icon: '✨'
            },
          ].map((value, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                value.color === 'primary' ? 'bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/30 hover:border-primary/50' :
                value.color === 'secondary' ? 'bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/30 hover:border-secondary/50' :
                'bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/30 hover:border-accent/50'
              }`}
            >
              <div className={`absolute top-4 right-4 w-16 h-16 rounded-full blur-xl group-hover:blur-2xl transition-all ${
                value.color === 'primary' ? 'bg-primary/10' :
                value.color === 'secondary' ? 'bg-secondary/10' :
                'bg-accent/10'
              }`} />
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-foreground/70 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
