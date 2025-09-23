import React from "react";
import LegalFooter from "../LegalFooter";
import LegalNavbar from "../LegalNavbar";

const Contact = () => (
  <>
    <LegalNavbar active="/legal/contact" />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-8 py-4 md:ml-[240px] pt-[140px] md:pt-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-gold-500 text-2xl md:text-4xl font-bold mb-2">Contact Legal Team</h1>
          <p className="text-[#B0B0B0] text-sm">Need legal assistance or have questions about our policies?</p>
        </header>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <div className="bg-gold-500/10 p-6 rounded-lg border border-gold-500/30">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gold-500">Legal Contacts</h2>
              <p className="text-sm md:text-base leading-relaxed">
                Our legal team is here to help with questions about our terms, policies, and legal matters. Choose the appropriate contact method based on your inquiry.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">Quick Contact Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/30">
                <h3 className="text-lg font-medium mb-3 text-blue-400">General Legal Inquiries</h3>
                <div className="space-y-2">
                  <p className="text-sm md:text-base">
                    <strong>Email:</strong> <a href="mailto:legal@iexploreonline.com" className="text-gold-500 hover:underline">legal@iexploreonline.com</a>
                  </p>
                  <p className="text-sm md:text-base">
                    <strong>Response Time:</strong> 2-3 business days
                  </p>
                  <p className="text-sm md:text-base text-[#D1D1D1]">
                    For questions about terms of service, contracts, and general legal matters.
                  </p>
                </div>
              </div>

              <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/30">
                <h3 className="text-lg font-medium mb-3 text-purple-400">Privacy & Data Protection</h3>
                <div className="space-y-2">
                  <p className="text-sm md:text-base">
                    <strong>Email:</strong> <a href="mailto:privacy@iexploreonline.com" className="text-gold-500 hover:underline">privacy@iexploreonline.com</a>
                  </p>
                  <p className="text-sm md:text-base">
                    <strong>Response Time:</strong> 1-2 business days
                  </p>
                  <p className="text-sm md:text-base text-[#D1D1D1]">
                    For data protection requests, privacy concerns, and NDPR compliance.
                  </p>
                </div>
              </div>

              <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-medium mb-3 text-green-400">Vendor Legal Support</h3>
                <div className="space-y-2">
                  <p className="text-sm md:text-base">
                    <strong>Email:</strong> <a href="mailto:vendor-legal@iexploreonline.com" className="text-gold-500 hover:underline">vendor-legal@iexploreonline.com</a>
                  </p>
                  <p className="text-sm md:text-base">
                    <strong>Response Time:</strong> 1 business day
                  </p>
                  <p className="text-sm md:text-base text-[#D1D1D1]">
                    For vendor agreement questions, policy clarifications, and partnership legal matters.
                  </p>
                </div>
              </div>

              <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                <h3 className="text-lg font-medium mb-3 text-red-400">Urgent Legal Matters</h3>
                <div className="space-y-2">
                  <p className="text-sm md:text-base">
                    <strong>Phone:</strong> +234 (0) 123 456 7890
                  </p>
                  <p className="text-sm md:text-base">
                    <strong>Available:</strong> Mon-Fri, 9 AM - 6 PM WAT
                  </p>
                  <p className="text-sm md:text-base text-[#D1D1D1]">
                    For urgent legal issues requiring immediate attention.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">Specialized Legal Departments</h2>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-medium mb-2 text-gold-500">Intellectual Property</h3>
                <p className="text-sm md:text-base text-[#D1D1D1] mb-2">
                  <strong>Email:</strong> <a href="mailto:ip@iexploreonline.com" className="text-gold-500 hover:underline">ip@iexploreonline.com</a>
                </p>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  For copyright claims, trademark issues, and intellectual property matters.
                </p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-medium mb-2 text-gold-500">Compliance & Regulatory</h3>
                <p className="text-sm md:text-base text-[#D1D1D1] mb-2">
                  <strong>Email:</strong> <a href="mailto:compliance@iexploreonline.com" className="text-gold-500 hover:underline">compliance@iexploreonline.com</a>
                </p>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  For regulatory compliance, government inquiries, and industry standards.
                </p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-medium mb-2 text-gold-500">Litigation & Disputes</h3>
                <p className="text-sm md:text-base text-[#D1D1D1] mb-2">
                  <strong>Email:</strong> <a href="mailto:litigation@iexploreonline.com" className="text-gold-500 hover:underline">litigation@iexploreonline.com</a>
                </p>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  For legal disputes, litigation matters, and formal legal proceedings.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">Physical Address</h2>
            <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-lg font-medium mb-3 text-blue-400">IXPL Limited Legal Department</h3>
              <div className="space-y-1 text-sm md:text-base text-[#D1D1D1]">
                <p>[Company Address Line 1]</p>
                <p>[Company Address Line 2]</p>
                <p>[City, State] [Postal Code]</p>
                <p>Nigeria</p>
              </div>
              <p className="mt-4 text-sm text-[#B0B0B0]">
                Please note: We prefer email communication for faster response times.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">When Contacting Us</h2>
            <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
              <h3 className="text-lg font-medium mb-2 text-yellow-400">Please Include</h3>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li>Your full name and contact information</li>
                <li>Account email (if you have an iExplore account)</li>
                <li>Clear description of your legal inquiry or concern</li>
                <li>Relevant documentation or reference numbers</li>
                <li>Preferred method and time for response</li>
                <li>Urgency level of your request</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">Response Times</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-medium mb-2 text-green-400">Standard Inquiries</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  2-3 business days for most legal questions and policy clarifications.
                </p>
              </div>

              <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/30">
                <h3 className="text-lg font-medium mb-2 text-orange-400">Priority Matters</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  1 business day for vendor issues and privacy requests.
                </p>
              </div>

              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h3 className="text-lg font-medium mb-2 text-red-400">Urgent Issues</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  Same day response for critical legal matters and security issues.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">Legal Resources</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-brandDarkNeutral/50 rounded-lg border border-gold-500/20">
                <span className="text-sm md:text-base text-[#D1D1D1]">Privacy Policy</span>
                <a href="/legal/privacy-policy" className="text-gold-500 hover:underline text-sm">View →</a>
              </div>
              <div className="flex justify-between items-center p-3 bg-brandDarkNeutral/50 rounded-lg border border-gold-500/20">
                <span className="text-sm md:text-base text-[#D1D1D1]">Terms of Use</span>
                <a href="/legal/terms-of-use" className="text-gold-500 hover:underline text-sm">View →</a>
              </div>
              <div className="flex justify-between items-center p-3 bg-brandDarkNeutral/50 rounded-lg border border-gold-500/20">
                <span className="text-sm md:text-base text-[#D1D1D1]">Vendor Policy</span>
                <a href="/legal/vendor-policy" className="text-gold-500 hover:underline text-sm">View →</a>
              </div>
              <div className="flex justify-between items-center p-3 bg-brandDarkNeutral/50 rounded-lg border border-gold-500/20">
                <span className="text-sm md:text-base text-[#D1D1D1]">Data Protection</span>
                <a href="/legal/data-protection" className="text-gold-500 hover:underline text-sm">View →</a>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">Legal Disclaimer</h2>
            <div className="bg-gray-500/10 p-4 rounded-lg border border-gray-500/30">
              <p className="text-sm md:text-base text-[#D1D1D1]">
                Communication with our legal team does not constitute legal advice and does not create an attorney-client relationship. For personal legal matters, please consult with your own legal counsel.
              </p>
            </div>
          </section>

          <div className="bg-gold-500/5 p-6 rounded-lg border border-gold-500/20 mt-8">
            <h3 className="text-lg font-semibold mb-2 text-gold-500">We're Here to Help</h3>
            <p className="text-sm md:text-base text-[#D1D1D1]">
              Our legal team is committed to transparency and open communication. Don't hesitate to reach out with any questions about our policies or legal matters.
            </p>
          </div>
        </div>
      </div>
    </main>
    <LegalFooter />
  </>
);

export default Contact;