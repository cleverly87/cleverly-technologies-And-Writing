import type { Metadata } from 'next'
import { Shield, Mail, Database, Lock, Eye, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Clever Technologies & Writing',
  description: 'How we collect, use, and protect your personal information in compliance with UK GDPR.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-foreground/70 text-center max-w-2xl mx-auto">
            Your privacy matters. Here's how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-foreground/50 text-center mt-4">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-8">
        <div className="prose prose-invert max-w-none">
          
          {/* Introduction */}
          <div className="bg-dark-100 border border-primary/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Eye className="w-6 h-6 text-primary mr-3" />
              Introduction
            </h2>
            <p className="text-foreground/70 mb-4">
              Clever Technologies & Writing (&ldquo;CTW&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website or use our services.
            </p>
            <p className="text-foreground/70">
              <strong>Data Controller:</strong> Clever Technologies & Writing<br />
              <strong>Contact:</strong> hello@ctw.tech<br />
              <strong>Location:</strong> United Kingdom
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Database className="w-8 h-8 text-secondary mr-3" />
              Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">1. Information You Provide Directly</h3>
                <p className="text-foreground/70 mb-3">
                  When you contact us through our website or engage our services, you may provide:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li><strong>Contact Information:</strong> Name, email address, company name</li>
                  <li><strong>Project Information:</strong> Project type, requirements, budget information</li>
                  <li><strong>Communication Data:</strong> Messages, emails, and correspondence with us</li>
                  <li><strong>Payment Information:</strong> Billing details (processed through secure third-party payment processors)</li>
                </ul>
              </div>

              <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">2. Information Collected Automatically</h3>
                <p className="text-foreground/70 mb-3">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li><strong>Log Data:</strong> IP address, browser type, operating system, pages viewed</li>
                  <li><strong>Device Information:</strong> Device type, screen resolution, referring URLs</li>
                  <li><strong>Analytics Data:</strong> Page performance, user interactions (via Vercel Analytics)</li>
                  <li><strong>Cookies:</strong> Essential cookies for website functionality (see Cookie Policy below)</li>
                </ul>
              </div>

              <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">3. Information from Third Parties</h3>
                <p className="text-foreground/70">
                  We may receive information from:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70">
                  <li>Professional referrals and recommendations</li>
                  <li>Public business directories and LinkedIn profiles (for B2B outreach)</li>
                  <li>Payment processors confirming transaction completion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">How We Use Your Information</h2>
            
            <div className="bg-primary/5 border border-primary/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Legal Basis for Processing (UK GDPR)</h3>
              <p className="text-foreground/70 mb-3">
                We process your personal data under the following lawful bases:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li><strong>Contract Performance:</strong> To provide services you've requested</li>
                <li><strong>Legitimate Interests:</strong> To improve our services and communicate about our business</li>
                <li><strong>Consent:</strong> Where you've given explicit permission (e.g., marketing emails)</li>
                <li><strong>Legal Obligation:</strong> To comply with tax, accounting, and legal requirements</li>
              </ul>
            </div>

            <div className="space-y-4 text-foreground/70">
              <p><strong>We use your information to:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver web development, API documentation, and related services</li>
                <li>Process payments and maintain financial records</li>
                <li>Send project updates, invoices, and service-related communications</li>
                <li>Improve our website performance and user experience</li>
                <li>Analyze usage trends and optimize our services</li>
                <li>Comply with legal obligations and prevent fraud</li>
                <li>Send occasional marketing communications (with your consent, opt-out available)</li>
              </ul>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">How We Share Your Information</h2>
            
            <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
              <p className="text-foreground/70 mb-4">
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="list-disc list-inside space-y-3 text-foreground/70">
                <li><strong>Service Providers:</strong> Hosting (Vercel), email (Microsoft Graph API), analytics (Vercel Analytics), payment processors</li>
                <li><strong>Professional Advisors:</strong> Accountants, solicitors, auditors (when necessary)</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
              </ul>
              <p className="text-foreground/70 mt-4">
                All third-party providers are vetted for GDPR compliance and data protection standards.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Lock className="w-8 h-8 text-accent mr-3" />
              Data Security
            </h2>
            
            <div className="bg-accent/5 border border-accent/30 rounded-xl p-6">
              <p className="text-foreground/70 mb-4">
                We implement appropriate technical and organizational measures to protect your data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Encrypted databases with restricted access</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Password-protected admin systems with role-based access</li>
                <li>Secure cloud infrastructure (Vercel, Supabase, AWS/Azure)</li>
                <li>Regular backups with encrypted storage</li>
              </ul>
              <p className="text-foreground/70 mt-4 text-sm italic">
                No method of transmission over the internet is 100% secure. While we strive to protect your 
                information, we cannot guarantee absolute security.
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Clock className="w-8 h-8 text-primary mr-3" />
              Data Retention
            </h2>
            
            <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
              <p className="text-foreground/70 mb-4">
                We retain your personal data only as long as necessary:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li><strong>Contact Form Submissions:</strong> 2 years from last contact (unless active project)</li>
                <li><strong>Client Project Data:</strong> Duration of project + 6 years (UK tax/legal requirements)</li>
                <li><strong>Financial Records:</strong> 6 years (UK legal requirement)</li>
                <li><strong>Marketing Consent:</strong> Until you withdraw consent or 3 years of inactivity</li>
                <li><strong>Website Analytics:</strong> 12 months (anonymized after 6 months)</li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Your Rights Under UK GDPR</h2>
            
            <div className="bg-secondary/5 border border-secondary/30 rounded-xl p-6">
              <p className="text-foreground/70 mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-3 text-foreground/70">
                <li><strong>Right to Access:</strong> Request a copy of your personal data we hold</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
                <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing or optional processing</li>
                <li><strong>Right to Lodge a Complaint:</strong> File a complaint with the ICO (UK supervisory authority)</li>
              </ul>
              <p className="text-foreground/70 mt-4">
                <strong>To exercise your rights, contact us at:</strong> hello@ctw.tech<br />
                We will respond within 30 days of receiving your request.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Cookie Policy</h2>
            
            <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
              <p className="text-foreground/70 mb-4">
                We use minimal cookies necessary for website functionality:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li><strong>Essential Cookies:</strong> Required for website operation (e.g., security, session management)</li>
                <li><strong>Analytics Cookies:</strong> Vercel Analytics (privacy-focused, no personal identification)</li>
              </ul>
              <p className="text-foreground/70 mt-4">
                We do not use advertising or tracking cookies. Analytics are anonymized and privacy-respecting.
              </p>
            </div>
          </div>

          {/* International Transfers */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">International Data Transfers</h2>
            
            <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
              <p className="text-foreground/70 mb-4">
                Our hosting and service providers may process data outside the UK/EEA:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li><strong>Vercel (USA):</strong> Compliant with EU-US Data Privacy Framework</li>
                <li><strong>Supabase:</strong> EU-region hosting available, GDPR compliant</li>
                <li><strong>Microsoft (Azure/Graph API):</strong> EU data residency options, GDPR compliant</li>
              </ul>
              <p className="text-foreground/70 mt-4">
                All international transfers are protected by appropriate safeguards (Standard Contractual Clauses, 
                adequacy decisions, or equivalent protections).
              </p>
            </div>
          </div>

          {/* Children&apos;s Privacy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Children&apos;s Privacy</h2>
            
            <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
              <p className="text-foreground/70">
                Our services are directed at businesses and professionals. We do not knowingly collect personal 
                information from individuals under 18 years of age. If you believe we have collected information 
                from a minor, please contact us immediately at hello@ctw.tech.
              </p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Changes to This Policy</h2>
            
            <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
              <p className="text-foreground/70">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal 
                requirements. We will notify you of significant changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 mt-3">
                <li>Updating the &ldquo;Last Updated&rdquo; date at the top of this policy</li>
                <li>Sending an email notification to active clients</li>
                <li>Displaying a prominent notice on our website</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8 text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h2>
            <p className="text-foreground/70 mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle 
              your personal data, please contact us:
            </p>
            <div className="space-y-2 text-foreground/70">
              <p><strong>Email:</strong> hello@ctw.tech</p>
              <p><strong>Data Protection Officer:</strong> Andrew Cleverly</p>
              <p><strong>Response Time:</strong> Within 30 days</p>
            </div>
            <p className="text-sm text-foreground/60 mt-6">
              You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) 
              at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ico.org.uk</a>
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}
