import type { Metadata } from 'next'
import { FileText, AlertTriangle, CheckCircle2, Scale, CreditCard, Ban } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Clever Technologies & Writing',
  description: 'Terms and conditions for using our web development and API documentation services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Scale className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-xl text-foreground/70 text-center max-w-2xl mx-auto">
            The legal agreement between you and Clever Technologies & Writing for our services.
          </p>
          <p className="text-sm text-foreground/50 text-center mt-4">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-8">
        <div className="bg-accent/10 border-2 border-accent/50 rounded-xl p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Important Legal Notice</h3>
              <p className="text-foreground/70 text-sm">
                These Terms of Service constitute a legally binding agreement. By engaging our services, you agree 
                to these terms. Please read carefully and seek legal advice if needed before proceeding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="prose prose-invert max-w-none space-y-12">
          
          {/* Agreement to Terms */}
          <div>
            <h2 className="text-3xl font-bold mb-6">1. Agreement to Terms</h2>
            <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
              <p className="text-foreground/70 mb-4">
                These Terms of Service ("Terms") govern your use of services provided by Clever Technologies & Writing 
                ("CTW", "we", "us", or "our"). By engaging our services, accessing our website, or signing a project 
                agreement, you ("Client", "you") agree to be bound by these Terms.
              </p>
              <p className="text-foreground/70">
                <strong>Effective Date:</strong> These Terms become effective upon your acceptance (verbal, written, 
                or implied through engagement) and remain in force throughout the service relationship.
              </p>
            </div>
          </div>

          {/* Services Description */}
          <div>
            <h2 className="text-3xl font-bold mb-6">2. Services Provided</h2>
            <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6 space-y-4">
              <p className="text-foreground/70">
                CTW provides the following services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                <li><strong>Web Development:</strong> Custom websites, web applications, full-stack solutions (£3K-23K+)</li>
                <li><strong>API Documentation:</strong> Technical writing, developer portals, integration guides (£5K-25K+)</li>
                <li><strong>CTW Integration Platform:</strong> SaaS platform for generating complete API documentation from raw business documentation (pricing TBA)</li>
                <li><strong>Business Applications:</strong> Custom software solutions for business operations</li>
                <li><strong>Consulting Services:</strong> Technical advisory, architecture design (£85-120/hour)</li>
              </ul>
              <p className="text-foreground/70 mt-4">
                <strong>Scope of Work:</strong> Specific deliverables, timelines, and pricing are defined in individual 
                project agreements or proposals. These Terms apply to all services unless explicitly modified in writing.
              </p>
            </div>
          </div>

          {/* Project Process */}
          <div>
            <h2 className="text-3xl font-bold mb-6">3. Project Process</h2>
            <div className="space-y-4">
              <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">3.1 Discovery & Proposal</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li>Initial consultation to understand your requirements (free, no obligation)</li>
                  <li>Detailed written proposal including scope, timeline, milestones, and pricing</li>
                  <li>Proposal valid for 30 days unless otherwise stated</li>
                  <li>Changes to scope require written amendment and may affect pricing/timeline</li>
                </ul>
              </div>

              <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">3.2 Agreement & Deposit</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li>Project commences upon signed agreement and receipt of deposit</li>
                  <li>Standard deposit: 50% of total project cost (minimum £500)</li>
                  <li>Deposits are non-refundable once work begins</li>
                  <li>For hourly projects: minimum 10-hour advance payment or monthly retainer</li>
                </ul>
              </div>

              <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">3.3 Development & Communication</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li>Regular progress updates via email or project management tools</li>
                  <li>Client review checkpoints at agreed milestones</li>
                  <li>Reasonable revisions included within scope (typically 2 rounds per milestone)</li>
                  <li>Additional revisions beyond scope billed at £85-120/hour</li>
                </ul>
              </div>

              <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">3.4 Delivery & Acceptance</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li>Client has 7 business days to review and request changes</li>
                  <li>Final payment due upon project completion and acceptance</li>
                  <li>Acceptance deemed if no response within review period</li>
                  <li>Deployment occurs after final payment unless otherwise agreed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <CreditCard className="w-8 h-8 text-primary mr-3" />
              4. Payment Terms
            </h2>
            <div className="bg-primary/5 border border-primary/30 rounded-xl p-6 space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-2">4.1 Pricing & Invoicing</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li>All prices quoted in British Pounds Sterling (£) unless otherwise stated</li>
                  <li>Fixed-price projects: Total cost specified in proposal</li>
                  <li>Hourly projects: Tracked and invoiced weekly/monthly at £85-120/hour</li>
                  <li>Invoices issued via email with detailed breakdown</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">4.2 Payment Schedule</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li><strong>Deposit:</strong> 50% upfront (due before work begins)</li>
                  <li><strong>Milestones:</strong> Payment per agreed schedule (if applicable)</li>
                  <li><strong>Final Payment:</strong> 50% due upon project completion</li>
                  <li><strong>Payment Due:</strong> Within 14 days of invoice date</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">4.3 Late Payment</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li>Late fees: 5% of invoice amount after 14 days</li>
                  <li>Additional 2% per month thereafter (or maximum permitted by law)</li>
                  <li>Work may be suspended if payment is 30+ days overdue</li>
                  <li>Collection costs and legal fees added to overdue balances</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">4.4 Additional Costs</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li><strong>Third-Party Services:</strong> Hosting, domains, APIs, licenses (billed separately or reimbursed)</li>
                  <li><strong>Scope Changes:</strong> Additional features beyond original scope billed at hourly rate</li>
                  <li><strong>Rush Projects:</strong> Expedited delivery (shorter timeline) may incur 25-50% premium</li>
                  <li><strong>Travel:</strong> On-site work requires prior approval and expense reimbursement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Client Responsibilities */}
          <div>
            <h2 className="text-3xl font-bold mb-6">5. Client Responsibilities</h2>
            <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
              <p className="text-foreground/70 mb-4">
                To ensure successful project delivery, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                <li>Provide accurate, complete information and requirements</li>
                <li>Supply all necessary content, assets, credentials, and access in a timely manner</li>
                <li>Respond to requests for feedback within agreed timeframes (typically 3-5 business days)</li>
                <li>Designate a single point of contact for project communications</li>
                <li>Ensure you have rights to all materials provided (content, images, logos, etc.)</li>
                <li>Review deliverables and provide clear, consolidated feedback</li>
                <li>Make timely payments per agreed schedule</li>
              </ul>
              <p className="text-foreground/70 mt-4">
                <strong>Delays:</strong> Project timelines may be extended if client responsibilities are not met. 
                Extended delays (30+ days) may result in project re-scoping or cancellation.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-3xl font-bold mb-6">6. Intellectual Property Rights</h2>
            <div className="space-y-4">
              <div className="bg-secondary/5 border border-secondary/30 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">6.1 Ownership of Deliverables</h3>
                <p className="text-foreground/70 mb-3">
                  <strong>Upon full payment:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li>You own the final custom code and designs created specifically for your project</li>
                  <li>You receive a perpetual, worldwide license to use the deliverables</li>
                  <li>We retain the right to use project as portfolio case study (unless confidential)</li>
                </ul>
              </div>

              <div className="bg-secondary/5 border border-secondary/30 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">6.2 CTW Retained Rights</h3>
                <p className="text-foreground/70 mb-3">
                  We retain ownership of:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li><strong>Pre-existing IP:</strong> Frameworks, libraries, reusable components, methodologies</li>
                  <li><strong>Third-Party Software:</strong> Open-source libraries, licensed tools (e.g., Next.js, React)</li>
                  <li><strong>General Knowledge:</strong> Techniques, processes, and experience gained</li>
                </ul>
                <p className="text-foreground/70 mt-3">
                  You receive licenses to use these components as part of your project but cannot resell or 
                  redistribute them independently.
                </p>
              </div>

              <div className="bg-secondary/5 border border-secondary/30 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">6.3 Client-Provided Materials</h3>
                <p className="text-foreground/70">
                  You retain ownership of all content, logos, trademarks, and materials you provide. You grant us 
                  a limited license to use these materials solely for delivering your project. You warrant that you 
                  have the legal right to provide all materials and that their use will not infringe third-party rights.
                </p>
              </div>
            </div>
          </div>

          {/* Confidentiality */}
          <div>
            <h2 className="text-3xl font-bold mb-6">7. Confidentiality</h2>
            <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
              <p className="text-foreground/70 mb-4">
                Both parties agree to maintain confidentiality of sensitive information shared during the project:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                <li><strong>Confidential Information:</strong> Business strategies, technical data, customer lists, proprietary processes</li>
                <li><strong>Exceptions:</strong> Information that is public, independently developed, or legally required to be disclosed</li>
                <li><strong>Duration:</strong> Confidentiality obligations survive for 3 years after project completion</li>
                <li><strong>NDA:</strong> Separate Non-Disclosure Agreements available upon request for sensitive projects</li>
              </ul>
            </div>
          </div>

          {/* Warranties & Limitations */}
          <div>
            <h2 className="text-3xl font-bold mb-6">8. Warranties & Disclaimers</h2>
            <div className="space-y-4">
              <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">8.1 Our Warranties</h3>
                <p className="text-foreground/70 mb-3">We warrant that:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li>Services will be performed with professional skill and care</li>
                  <li>Work will materially conform to agreed specifications</li>
                  <li>We have the right to provide the services</li>
                  <li>Deliverables will be free from malicious code at time of delivery</li>
                </ul>
              </div>

              <div className="bg-accent/10 border border-accent/50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Ban className="w-6 h-6 text-accent mr-2" />
                  8.2 Disclaimer of Warranties
                </h3>
                <p className="text-foreground/70 mb-3">
                  <strong>EXCEPT AS EXPRESSLY STATED ABOVE:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4 text-sm">
                  <li>Services are provided "AS IS" without warranties of any kind</li>
                  <li>We do not guarantee uninterrupted, error-free, or secure operation</li>
                  <li>We do not warrant specific business results, rankings, or traffic</li>
                  <li>Third-party services (hosting, APIs) are subject to provider terms</li>
                  <li>Open-source software is provided under respective licenses without warranty</li>
                </ul>
              </div>

              <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">8.3 Support & Maintenance</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li><strong>Bug Fixes:</strong> 30 days of free bug fixes for critical issues post-launch</li>
                  <li><strong>Minor Issues:</strong> 60 days for non-critical bugs affecting functionality</li>
                  <li><strong>Ongoing Support:</strong> Available via monthly retainer or hourly rates after warranty period</li>
                  <li><strong>Updates:</strong> Framework/security updates not included unless under maintenance agreement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-3xl font-bold mb-6">9. Limitation of Liability</h2>
            <div className="bg-accent/10 border-2 border-accent/50 rounded-xl p-6">
              <p className="text-foreground/70 mb-4">
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
              </p>
              <ul className="list-disc list-inside space-y-3 text-foreground/70 ml-4">
                <li><strong>Total Liability Cap:</strong> Our total liability for any claims arising from services shall not exceed 
                the total fees paid by you for the specific project giving rise to the claim</li>
                <li><strong>Indirect Damages:</strong> We are not liable for indirect, incidental, consequential, special, or punitive 
                damages including lost profits, revenue, data, or business opportunities</li>
                <li><strong>Third-Party Actions:</strong> Not liable for damages caused by third-party services, hosting providers, 
                or client's misuse of deliverables</li>
                <li><strong>Time Limit:</strong> Claims must be brought within 12 months of the event giving rise to the claim</li>
              </ul>
              <p className="text-foreground/70 mt-4 text-sm">
                <strong>Exceptions:</strong> Liability limitations do not apply to fraud, willful misconduct, death/personal injury, 
                or where prohibited by law.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-3xl font-bold mb-6">10. Termination</h2>
            <div className="space-y-4">
              <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">10.1 Termination by Client</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li>You may terminate with 14 days' written notice</li>
                  <li>You pay for all work completed plus 25% of remaining balance (kill fee)</li>
                  <li>Deposits are non-refundable</li>
                  <li>You receive deliverables completed to date upon payment</li>
                </ul>
              </div>

              <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">10.2 Termination by CTW</h3>
                <p className="text-foreground/70 mb-3">We may terminate immediately if:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li>Payment is 30+ days overdue</li>
                  <li>You breach these Terms and fail to cure within 7 days of notice</li>
                  <li>You provide false information or engage in fraudulent conduct</li>
                  <li>Continuing the project would violate law or ethical standards</li>
                </ul>
                <p className="text-foreground/70 mt-3">
                  Upon termination by CTW due to client breach, all fees become immediately due and no refunds are provided.
                </p>
              </div>

              <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">10.3 Effect of Termination</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 ml-4">
                  <li>All outstanding invoices become immediately due</li>
                  <li>Client access to development systems is revoked</li>
                  <li>IP rights transfer only for work fully paid</li>
                  <li>Confidentiality and IP provisions survive termination</li>
                </ul>
              </div>
            </div>
          </div>

          {/* General Terms */}
          <div>
            <h2 className="text-3xl font-bold mb-6">11. General Provisions</h2>
            <div className="bg-dark-100/50 border border-dark-300 rounded-xl p-6 space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-2">11.1 Governing Law</h3>
                <p className="text-foreground/70">
                  These Terms are governed by the laws of England and Wales. Disputes shall be subject to the 
                  exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">11.2 Dispute Resolution</h3>
                <p className="text-foreground/70">
                  Before initiating legal action, parties agree to attempt good-faith negotiation for 30 days. 
                  If unresolved, parties may pursue mediation before litigation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">11.3 Entire Agreement</h3>
                <p className="text-foreground/70">
                  These Terms, together with project-specific proposals and agreements, constitute the entire 
                  agreement and supersede all prior negotiations and understandings.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">11.4 Amendments</h3>
                <p className="text-foreground/70">
                  We may update these Terms with 30 days' notice. Continued use after changes constitutes acceptance. 
                  Project-specific amendments require written agreement by both parties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">11.5 Assignment</h3>
                <p className="text-foreground/70">
                  You may not assign or transfer your rights without our written consent. We may assign to affiliates 
                  or in connection with a business transfer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">11.6 Severability</h3>
                <p className="text-foreground/70">
                  If any provision is found invalid or unenforceable, it shall be modified to the minimum extent necessary, 
                  and remaining provisions remain in full force.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">11.7 Force Majeure</h3>
                <p className="text-foreground/70">
                  Neither party is liable for delays caused by circumstances beyond reasonable control (natural disasters, 
                  pandemics, war, government actions, etc.).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">11.8 Independent Contractors</h3>
                <p className="text-foreground/70">
                  The parties are independent contractors. Nothing creates a partnership, employment, or agency relationship.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8 text-center">
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-foreground/70 mb-6">
              If you have questions or need clarification about these Terms of Service, please contact us before 
              engaging our services:
            </p>
            <div className="space-y-2 text-foreground/70">
              <p><strong>Email:</strong> hello@ctw.tech</p>
              <p><strong>Response Time:</strong> Within 2 business days</p>
            </div>
            <p className="text-sm text-foreground/60 mt-6">
              For custom contract terms or enterprise agreements, please discuss during initial consultation.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}
