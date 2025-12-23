'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 animate-gradient" />
      
      {/* Radial glow effects */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="block text-foreground">Enterprise-Grade</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                Web Development
              </span>
              <span className="block text-foreground/80 text-4xl md:text-5xl mt-2">
                For Every Business
              </span>
            </h1>
            
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0">
              Fortune 500 quality. Small business prices. We build custom web applications with 
              <span className="text-primary font-semibold"> Next.js</span>,
              <span className="text-secondary font-semibold"> React</span>, and
              <span className="text-accent font-semibold"> TypeScript</span> - 
              the same tools used by Airbnb, Netflix, and Uber.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-primary-dark rounded-lg shadow-lg shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transition-all duration-300"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-foreground bg-dark-200 border border-dark-300 rounded-lg hover:bg-dark-300 hover:border-primary/50 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-foreground/60">
              <div>
                <div className="text-2xl font-bold text-primary">5+</div>
                <div>Years Experience</div>
              </div>
              <div className="w-px h-12 bg-dark-300" />
              <div>
                <div className="text-2xl font-bold text-secondary">90+</div>
                <div>Lighthouse Scores</div>
              </div>
              <div className="w-px h-12 bg-dark-300" />
              <div>
                <div className="text-2xl font-bold text-accent">£85-120</div>
                <div>Transparent Pricing</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Image/Visual */}
          <div className="relative">
            {/* Glowing card effect */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative bg-dark-100 border border-dark-300 rounded-2xl p-8 shadow-2xl">
                {/* Code editor mockup */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 pb-4 border-b border-dark-300">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-4 text-xs text-foreground/50 font-mono">app/page.tsx</span>
                  </div>
                  
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-accent">import</div>
                    <div className="text-foreground/70 pl-4">
                      <span className="text-secondary">{'{'}</span>
                      <span className="text-primary"> Next.js</span>
                      <span className="text-secondary">{','}</span>
                    </div>
                    <div className="text-foreground/70 pl-4">
                      <span className="text-primary"> React</span>
                      <span className="text-secondary">{','}</span>
                    </div>
                    <div className="text-foreground/70 pl-4">
                      <span className="text-primary"> TypeScript</span>
                    </div>
                    <div className="text-foreground/70 pl-4">
                      <span className="text-secondary">{'}'}</span>
                      <span className="text-accent"> from </span>
                      <span className="text-green-400">&apos;enterprise-stack&apos;</span>
                    </div>
                    
                    <div className="pt-4">
                      <div className="text-accent">export default function</div>
                      <div className="text-primary pl-4">YourBusiness()</div>
                      <div className="text-secondary pl-4">{'{'}</div>
                      <div className="pl-8 text-foreground/70">
                        <span className="text-accent">return</span>
                        <span className="text-primary"> success</span>
                        <span className="text-secondary">;</span>
                      </div>
                      <div className="text-secondary pl-4">{'}'}</div>
                    </div>
                  </div>
                  
                  {/* Animated typing indicator */}
                  <div className="flex items-center space-x-1 pt-4">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-100" />
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200" />
                    <span className="ml-2 text-xs text-foreground/50">Building your future...</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating tech badges */}
            <div className="absolute -top-6 -right-6 bg-dark-100 border border-primary/30 rounded-lg px-4 py-2 shadow-lg shadow-primary/20 animate-float">
              <div className="text-xs text-foreground/60">Next.js 14</div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-dark-100 border border-secondary/30 rounded-lg px-4 py-2 shadow-lg shadow-secondary/20 animate-float delay-500">
              <div className="text-xs text-foreground/60">TypeScript</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </section>
  )
}
