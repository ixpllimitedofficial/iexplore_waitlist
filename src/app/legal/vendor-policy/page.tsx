import React from "react";
import LegalFooter from "../LegalFooter";
import LegalNavbar from "../LegalNavbar";

const VendorPolicy = () => (
  <>
    <LegalNavbar active="/legal/vendor-policy" />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-8 py-4 md:ml-[240px] pt-[140px] md:pt-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-gold-500 text-2xl md:text-4xl font-bold mb-2">Vendor Policy</h1>
          <p className="text-[#B0B0B0] text-sm">Last updated: September 23, 2025</p>
        </header>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <div className="bg-gold-500/10 p-6 rounded-lg border border-gold-500/30">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gold-500">Welcome, Venue Partners</h2>
              <p className="text-sm md:text-base leading-relaxed">
                iExplore connects your nightlife venue with enthusiastic customers across Nigeria. This Vendor Policy outlines the terms, responsibilities, and best practices for venue partners on our platform.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">1. Eligibility Requirements</h2>
            <div className="space-y-4">
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-medium mb-2 text-green-400">To join iExplore as a vendor, you must:</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                  <li>Operate a legitimate nightlife business (bar, club, lounge, restaurant)</li>
                  <li>Hold all required local licenses and permits</li>
                  <li>Comply with Nigerian health and safety regulations</li>
                  <li>Provide accurate business registration information</li>
                  <li>Have appropriate insurance coverage</li>
                  <li>Meet minimum age requirements (21+ for alcohol-serving venues)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">2. Account Setup and Verification</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-2 text-gold-500">Required Documentation</h3>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li>Business registration certificate (CAC)</li>
                <li>Valid liquor license (if applicable)</li>
                <li>Tax identification number</li>
                <li>Venue photos and accurate description</li>
                <li>Contact information for primary manager</li>
                <li>Bank account details for payments</li>
              </ul>

              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                <h3 className="text-lg font-medium mb-2 text-blue-400">Verification Process</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  Our team reviews all vendor applications within 5-7 business days. We may request additional documentation or conduct a site visit for verification.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">3. Listing Standards</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-medium mb-2 text-green-400">✓ Required Information</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Accurate venue name and location</li>
                  <li>Current operating hours</li>
                  <li>High-quality photos</li>
                  <li>Pricing information</li>
                  <li>Capacity and amenities</li>
                  <li>Dress code requirements</li>
                  <li>Contact information</li>
                </ul>
              </div>

              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h3 className="text-lg font-medium mb-2 text-red-400">✗ Prohibited Content</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>False or misleading information</li>
                  <li>Inappropriate or offensive images</li>
                  <li>Discriminatory policies</li>
                  <li>Illegal services or activities</li>
                  <li>Copyright infringement</li>
                  <li>Spam or excessive promotion</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">4. Booking and Reservation Management</h2>
            <div className="space-y-4">
              <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/30">
                <h3 className="text-lg font-medium mb-2 text-gold-500">Your Responsibilities</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                  <li>Respond to booking requests within 24 hours</li>
                  <li>Maintain accurate availability calendars</li>
                  <li>Honor confirmed reservations</li>
                  <li>Provide excellent customer service</li>
                  <li>Communicate changes or cancellations promptly</li>
                  <li>Follow up with customers for feedback</li>
                </ul>
              </div>

              <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/30">
                <h3 className="text-lg font-medium mb-2 text-orange-400">Cancellation Policy</h3>
                <p className="text-sm md:text-base text-[#D1D1D1] mb-2">
                  Vendors may set their own cancellation policies, but must:
                </p>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Clearly state cancellation terms</li>
                  <li>Apply policies fairly and consistently</li>
                  <li>Provide reasonable notice for venue-initiated cancellations</li>
                  <li>Offer appropriate compensation for last-minute changes</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">5. Commission and Payment Terms</h2>
            <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
              <h3 className="text-lg font-medium mb-2 text-blue-400">Commission Structure</h3>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li><strong>Standard Commission:</strong> 10% of confirmed bookings</li>
                <li><strong>Premium Features:</strong> Additional fees for promoted listings</li>
                <li><strong>Payment Schedule:</strong> Monthly payments within 15 days</li>
                <li><strong>Minimum Payout:</strong> ₦10,000 per payment cycle</li>
                <li><strong>Tax Responsibilities:</strong> Vendors responsible for applicable taxes</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">6. Quality Standards</h2>
            <div className="space-y-4">
              <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                <h3 className="text-lg font-medium mb-2 text-yellow-400">Performance Metrics</h3>
                <p className="text-sm md:text-base text-[#D1D1D1] mb-2">
                  We monitor vendor performance through:
                </p>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Customer ratings and reviews</li>
                  <li>Response time to inquiries</li>
                  <li>Booking confirmation rates</li>
                  <li>Cancellation frequency</li>
                  <li>Compliance with platform policies</li>
                </ul>
              </div>

              <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                <h3 className="text-lg font-medium mb-2 text-purple-400">Consequences for Poor Performance</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Reduced visibility in search results</li>
                  <li>Warning notices and improvement plans</li>
                  <li>Temporary suspension of new bookings</li>
                  <li>Account termination for severe violations</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">7. Marketing and Promotion</h2>
            <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
              <h3 className="text-lg font-medium mb-2 text-green-400">What We Provide</h3>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li>Listing on the iExplore platform and mobile app</li>
                <li>Access to customer discovery tools</li>
                <li>Analytics and performance insights</li>
                <li>Customer communication system</li>
                <li>Optional promotional features</li>
                <li>Support from our vendor success team</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">8. Legal Compliance</h2>
            <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
              <h3 className="text-lg font-medium mb-2 text-red-400">Vendor Obligations</h3>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li>Maintain all required business licenses</li>
                <li>Comply with local health and safety regulations</li>
                <li>Follow alcohol service laws and age restrictions</li>
                <li>Implement appropriate security measures</li>
                <li>Handle customer data responsibly</li>
                <li>Report any legal issues or incidents promptly</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">9. Support and Resources</h2>
            <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/30">
              <p className="text-sm md:text-base text-[#F2F1E8]">
                <strong>Vendor Support Team</strong><br/>
                IXPL Limited<br/>
                Email: <a href="mailto:vendors@iexploreonline.com" className="text-gold-500 hover:underline">vendors@iexploreonline.com</a><br/>
                Phone: +234 (0) 123 456 7890
              </p>
            </div>
          </section>

          <div className="bg-gold-500/5 p-6 rounded-lg border border-gold-500/20 mt-8">
            <h3 className="text-lg font-semibold mb-2 text-gold-500">Partner Success</h3>
            <p className="text-sm md:text-base text-[#D1D1D1]">
              We're committed to helping your venue succeed on iExplore. Together, we'll create amazing nightlife experiences for customers across Nigeria.
            </p>
          </div>
        </div>
      </div>
    </main>
    <LegalFooter />
  </>
);

export default VendorPolicy;