import { Database, Cloud, Code, Palette, Server, Lock } from 'lucide-react'

export default function TechStack() {
  const categories = [
    {
      title: 'Frontend',
      icon: Code,
      technologies: [
        { name: 'Next.js 14+', description: 'React framework with App Router' },
        { name: 'React 18', description: 'Modern UI library' },
        { name: 'TypeScript', description: 'Type-safe JavaScript' },
        { name: 'Tailwind CSS', description: 'Utility-first styling' },
      ],
    },
    {
      title: 'Backend & Database',
      icon: Database,
      technologies: [
        { name: 'Node.js', description: 'JavaScript runtime' },
        { name: 'PostgreSQL', description: 'Enterprise database' },
        { name: 'Supabase', description: 'Backend-as-a-Service' },
        { name: 'Prisma', description: 'Next-gen ORM' },
      ],
    },
    {
      title: 'Hosting & Infrastructure',
      icon: Cloud,
      technologies: [
        { name: 'Vercel', description: 'Edge deployment platform' },
        { name: 'AWS', description: 'Enterprise cloud services' },
        { name: 'Microsoft Azure', description: 'Cloud computing' },
        { name: 'Supabase Storage', description: 'File storage & CDN' },
      ],
    },
    {
      title: 'Authentication',
      icon: Lock,
      technologies: [
        { name: 'Supabase Auth', description: 'User authentication' },
        { name: 'NextAuth.js', description: 'OAuth & credentials' },
        { name: 'JWT', description: 'Secure tokens' },
        { name: 'Row Level Security', description: 'Database-level auth' },
      ],
    },
    {
      title: 'APIs & Integration',
      icon: Server,
      technologies: [
        { name: 'Microsoft Graph API', description: 'M365 integration' },
        { name: 'REST APIs', description: 'Standard web APIs' },
        { name: 'OpenAPI/Swagger', description: 'API documentation' },
        { name: 'Postman', description: 'API testing & collections' },
      ],
    },
    {
      title: 'Design & UX',
      icon: Palette,
      technologies: [
        { name: 'Figma', description: 'Design & prototyping' },
        { name: 'Radix UI', description: 'Accessible components' },
        { name: 'Framer Motion', description: 'Animations' },
        { name: 'Lucide Icons', description: 'Icon library' },
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-dark-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Enterprise-Grade <span className="text-primary">Technology Stack</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            The same modern tools and frameworks used by Fortune 500 companies—for every client, every project
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-dark-200/50 border border-dark-300 rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.technologies.map((tech) => (
                  <li key={tech.name} className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">{tech.name}</span>
                    <span className="text-xs text-foreground/60">{tech.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Why This Stack Matters
              </h3>
              <p className="text-foreground/70">
                Every technology we use is chosen for scalability, performance, and maintainability. 
                Your site loads in milliseconds, scales from 10 to 10 million users, and integrates 
                seamlessly with Microsoft Azure or AWS when you need enterprise features.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="text-center bg-dark-200 border border-dark-300 rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-1">90+</div>
                <div className="text-sm text-foreground/60">Lighthouse Score</div>
                <div className="text-xs text-foreground/50 mt-1">Every Project</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
