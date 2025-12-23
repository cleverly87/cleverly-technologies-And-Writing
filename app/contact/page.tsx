'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', projectType: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Let's Build Together
            </span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Ready to start your project? Get in touch and let's discuss how we can help your business grow.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-foreground/70 mb-8">
                Have a project in mind? Fill out the form and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:hello@ctw.tech" className="text-foreground/70 hover:text-primary transition-colors">
                    hello@ctw.tech
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <a href="tel:+447000000000" className="text-foreground/70 hover:text-secondary transition-colors">
                    +44 (0) 7000 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Location</div>
                  <p className="text-foreground/70">
                    United Kingdom<br />
                    Remote & On-site
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-primary/5 border border-primary/30 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                <span className="font-semibold">Quick Response</span>
              </div>
              <p className="text-sm text-foreground/70">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>

            {/* What to Expect */}
            <div className="bg-dark-100 border border-dark-300 rounded-xl p-6">
              <h3 className="font-bold mb-4">What to Expect</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-bold">1</span>
                  </div>
                  <p className="text-foreground/70">Initial consultation call to discuss your needs</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-secondary text-xs font-bold">2</span>
                  </div>
                  <p className="text-foreground/70">Detailed proposal with timeline and pricing</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <span className="text-accent text-xs font-bold">3</span>
                  </div>
                  <p className="text-foreground/70">Project kickoff and regular updates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-3xl blur-xl" />
              
              <div className="relative bg-dark-100 border border-primary/30 rounded-3xl p-8 md:p-12">
                {submitStatus === 'success' && (
                  <div className="mb-6 bg-primary/20 border border-primary/50 rounded-xl p-4 flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <p className="text-sm">
                      <strong>Message sent successfully!</strong> We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-xl focus:outline-none focus:border-primary transition-colors"
                        placeholder="Andrew Cleverly"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-xl focus:outline-none focus:border-primary transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  {/* Company and Project Type Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-xl focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your Company Ltd"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold mb-2">
                        Project Type <span className="text-primary">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-xl focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="">Select a project type</option>
                        <option value="marketing-site">Marketing Website</option>
                        <option value="full-stack-app">Full-Stack Application</option>
                        <option value="api-documentation">API Documentation</option>
                        <option value="business-app">Business Application</option>
                        <option value="ctw-platform">CTW Integration Platform</option>
                        <option value="consultation">Consultation / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Project Details <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-xl focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  {/* Budget Indicator */}
                  <div className="bg-dark-200/50 border border-dark-300 rounded-xl p-4">
                    <h4 className="font-semibold text-sm mb-2">Typical Project Budgets</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                      <div>
                        <div className="text-foreground/60">Marketing Sites</div>
                        <div className="font-semibold text-primary">£3K-8K</div>
                      </div>
                      <div>
                        <div className="text-foreground/60">Full-Stack Apps</div>
                        <div className="font-semibold text-secondary">£11K-23K+</div>
                      </div>
                      <div>
                        <div className="text-foreground/60">API Docs (Single)</div>
                        <div className="font-semibold text-accent">£5K-12K</div>
                      </div>
                      <div>
                        <div className="text-foreground/60">Hourly Rate</div>
                        <div className="font-semibold text-primary">£85-120/hr</div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-foreground/60">
                    By submitting this form, you agree to our privacy policy. We'll only use your information to respond to your inquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alternative Contact Methods */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/30 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Prefer a Different Way?</h2>
          <p className="text-foreground/70 mb-6">
            We're flexible. Reach out however works best for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:hello@ctw.tech"
              className="inline-flex items-center px-6 py-3 bg-dark-200 border border-dark-300 rounded-xl hover:border-primary/50 transition-all font-semibold"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us Directly
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center px-6 py-3 bg-dark-200 border border-dark-300 rounded-xl hover:border-secondary/50 transition-all font-semibold"
            >
              View Pricing First
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
