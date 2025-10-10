import React from "react";
import LegalFooter from "../LegalFooter";
import LegalNavbar from "../LegalNavbar";

const DataProtection = () => (
  <>
    <LegalNavbar active="/legal/data-protection" />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-8 py-4 md:ml-[240px] pt-[140px] md:pt-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-gold-500 text-2xl md:text-4xl font-bold mb-2">Data Protection</h1>
          <p className="text-[#B0B0B0] text-sm">Last updated: September 23, 2025</p>
        </header>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <div className="bg-gold-500/10 p-6 rounded-lg border border-gold-500/30">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gold-500">Our Commitment to Data Protection</h2>
              <p className="text-sm md:text-base leading-relaxed">
                At iExplore (IXPL Limited), we are committed to protecting your personal data in compliance with Nigeria's Data Protection Regulation (NDPR) and international best practices. This page details our data protection measures and your rights.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">1. Legal Framework</h2>
            <div className="space-y-4">
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                <h3 className="text-lg font-medium mb-2 text-blue-400">Applicable Laws</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                  <li>Nigeria Data Protection Regulation (NDPR) 2019</li>
                  <li>Nigerian Constitution (Right to Privacy)</li>
                  <li>Nigerian Communications Act 2003</li>
                  <li>Cybercrimes (Prohibition, Prevention, etc.) Act 2015</li>
                  <li>International best practices and standards</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">2. Data Protection Principles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-medium mb-2 text-green-400">Lawfulness & Fairness</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  We process your data only with your consent or other legal basis, in a fair and transparent manner.
                </p>
              </div>

              <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                <h3 className="text-lg font-medium mb-2 text-purple-400">Purpose Limitation</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  Your data is collected for specific, explicit, and legitimate purposes only.
                </p>
              </div>

              <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/30">
                <h3 className="text-lg font-medium mb-2 text-orange-400">Data Minimization</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  We collect only the minimum data necessary for our stated purposes.
                </p>
              </div>

              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h3 className="text-lg font-medium mb-2 text-red-400">Accuracy</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  We maintain accurate and up-to-date personal data records.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">3. Technical Security Measures</h2>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-medium mb-2 text-gold-500">Encryption</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>AES-256 encryption for data at rest</li>
                  <li>TLS 1.3 for data in transit</li>
                  <li>End-to-end encryption for sensitive communications</li>
                  <li>Encrypted database backups</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-medium mb-2 text-gold-500">Access Controls</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Multi-factor authentication for all staff</li>
                  <li>Role-based access controls</li>
                  <li>Regular access reviews and audits</li>
                  <li>Secure API authentication</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-medium mb-2 text-gold-500">Infrastructure Security</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Secure cloud hosting with certified providers</li>
                  <li>Regular security updates and patches</li>
                  <li>Intrusion detection and prevention systems</li>
                  <li>Automated security monitoring</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">4. Your Data Rights Under NDPR</h2>
            <div className="space-y-4">
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                <h3 className="text-lg font-medium mb-2 text-blue-400">Right of Access</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  You can request access to your personal data and information about how it's processed.
                </p>
              </div>

              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-medium mb-2 text-green-400">Right to Rectification</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  You can request correction of inaccurate or incomplete personal data.
                </p>
              </div>

              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h3 className="text-lg font-medium mb-2 text-red-400">Right to Erasure</h3>
                <p className="text-sm md:text-base text-[#D1D1D1] mb-3">
                  You can request deletion of your personal data under certain circumstances.
                </p>
                <p className="text-sm text-[#D1D1D1]">
                  For complete account deletion instructions, visit our{" "}
                  <a href="/legal/account-deletion" className="text-gold-500 hover:underline font-medium">
                    Account Deletion page
                  </a>.
                </p>
              </div>

              <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                <h3 className="text-lg font-medium mb-2 text-purple-400">Right to Data Portability</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  You can request your data in a portable format to transfer to another service.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">5. Data Breach Response</h2>
            <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
              <h3 className="text-lg font-medium mb-2 text-red-400">Our Response Plan</h3>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li><strong>Detection:</strong> Continuous monitoring for security incidents</li>
                <li><strong>Assessment:</strong> Immediate evaluation of breach scope and impact</li>
                <li><strong>Containment:</strong> Quick action to limit further exposure</li>
                <li><strong>Notification:</strong> NITDA notification within 72 hours</li>
                <li><strong>User Communication:</strong> Affected users notified within 72 hours</li>
                <li><strong>Remediation:</strong> Implementation of corrective measures</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">6. Data Transfers</h2>
            <div className="space-y-4">
              <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                <h3 className="text-lg font-medium mb-2 text-yellow-400">International Transfers</h3>
                <p className="text-sm md:text-base text-[#D1D1D1] mb-2">
                  When we transfer data outside Nigeria, we ensure adequate protection through:
                </p>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Adequacy decisions by NITDA</li>
                  <li>Standard contractual clauses</li>
                  <li>Binding corporate rules</li>
                  <li>Explicit user consent</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">7. Staff Training and Awareness</h2>
            <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
              <h3 className="text-lg font-medium mb-2 text-green-400">Our Commitment</h3>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li>Mandatory data protection training for all employees</li>
                <li>Regular updates on privacy laws and best practices</li>
                <li>Clear data handling procedures and guidelines</li>
                <li>Regular audits and compliance assessments</li>
                <li>Incident response training and drills</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">8. Contact Our Data Protection Officer</h2>
            <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/30">
              <p className="text-sm md:text-base text-[#F2F1E8]">
                <strong>Data Protection Officer</strong><br/>
                IXPL Limited<br/>
                Email: <a href="mailto:dpo@iexploreonline.com" className="text-gold-500 hover:underline">dpo@iexploreonline.com</a><br/>
                Phone: +234 (0) 123 456 7890<br/>
                Address: [Company Address], Nigeria
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">9. Regulatory Authority</h2>
            <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
              <p className="text-sm md:text-base text-[#F2F1E8] mb-2">
                <strong>Nigeria Information Technology Development Agency (NITDA)</strong>
              </p>
              <p className="text-sm md:text-base text-[#D1D1D1]">
                If you have concerns about our data processing, you can file a complaint with NITDA, the supervisory authority for data protection in Nigeria.
              </p>
            </div>
          </section>

          <div className="bg-gold-500/5 p-6 rounded-lg border border-gold-500/20 mt-8">
            <h3 className="text-lg font-semibold mb-2 text-gold-500">Data Protection by Design</h3>
            <p className="text-sm md:text-base text-[#D1D1D1]">
              Privacy and data protection are built into every aspect of iExplore, from initial design to ongoing operations. Your trust is our foundation.
            </p>
          </div>
        </div>
      </div>
    </main>
    <LegalFooter />
  </>
);

export default DataProtection;