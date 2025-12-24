import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  title: 'Clever Technologies & Writing | Enterprise-Grade Web Development & API Documentation',
  description: 'Expert full-stack web development and API documentation services. We build enterprise-grade applications with Next.js, React, TypeScript, and Supabase for businesses of all sizes.',
  keywords: 'web development, API documentation, Next.js developer, technical writing, custom web applications, enterprise development, UK developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
