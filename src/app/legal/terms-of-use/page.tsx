import React from "react";
import LegalFooter from "../LegalFooter";
import LegalNavbar from "../LegalNavbar";

const TermsOfUse = () => (
  <>
    <LegalNavbar active="/legal/terms-of-use" />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-8 py-4 md:ml-[240px] pt-[140px] md:pt-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-gold-500 text-2xl md:text-4xl font-bold mb-2">Terms of Use</h1>
          <p className="text-[#B0B0B0] text-sm">Last updated: September 23, 2025</p>
        </header>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">1. Agreement to Terms</h2>
            <p className="text-sm md:text-base leading-relaxed mb-4">
              By accessing and using iExplore, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Use govern your use of our mobile application and all related services provided by IXPL Limited.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">2. Use License</h2>
            <div className="bg-brandDarkNeutral/50 p-4 rounded-lg border border-gold-500/20">
              <p className="text-sm md:text-base leading-relaxed mb-4">
                Permission is granted to temporarily use iExplore for personal, non-commercial transitory viewing only.
              </p>
              <h3 className="text-lg font-medium mb-2 text-gold-500">This license does not include the right to:</h3>
              <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                <li>Modify or copy the app materials</li>
                <li>Use the materials for commercial purposes or public display</li>
                <li>Attempt to reverse engineer the software</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">3. User Account</h2>
            <div className="space-y-4">
              <p className="text-sm md:text-base leading-relaxed text-[#D1D1D1]">
                To access certain features of iExplore, you must create an account. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li>Maintaining the confidentiality of your account information</li>
                <li>All activities that occur under your account</li>
                <li>Immediately notifying us of any unauthorized use</li>
                <li>Providing accurate and current information</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">4. Acceptable Use</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-2 text-gold-500">You agree NOT to use iExplore to:</h3>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li>Violate any applicable laws or regulations</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Share inappropriate, offensive, or illegal content</li>
                <li>Impersonate others or provide false information</li>
                <li>Interfere with the app's operation or security</li>
                <li>Use automated systems to access the service</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">5. Vendor Terms</h2>
            <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/30">
              <p className="text-sm md:text-base leading-relaxed mb-4">
                Vendors using iExplore to promote their nightlife venues agree to additional terms:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li>Provide accurate venue information and availability</li>
                <li>Honor reservations and waitlist commitments</li>
                <li>Comply with local licensing and safety regulations</li>
                <li>Maintain professional standards of service</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">6. Content Ownership</h2>
            <p className="text-sm md:text-base leading-relaxed text-[#D1D1D1] mb-4">
              Content you submit to iExplore remains yours, but you grant us a license to use, display, and distribute it as necessary to provide our services.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-[#D1D1D1]">
              All iExplore branding, design, and core functionality remain the exclusive property of IXPL Limited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">7. Disclaimers</h2>
            <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
              <p className="text-sm md:text-base leading-relaxed text-[#D1D1D1]">
                iExplore is provided "as is" without warranties of any kind. We do not guarantee the accuracy of venue information, availability, or the quality of services provided by third-party vendors.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">8. Limitation of Liability</h2>
            <p className="text-sm md:text-base leading-relaxed text-[#D1D1D1]">
              IXPL Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of iExplore.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">9. Termination</h2>
            <p className="text-sm md:text-base leading-relaxed text-[#D1D1D1]">
              We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms of Use or is harmful to other users or our business.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">10. Contact Information</h2>
            <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/30">
              <p className="text-sm md:text-base text-[#F2F1E8]">
                <strong>Legal Department</strong><br/>
                IXPL Limited<br/>
                Email: <a href="mailto:legal@iexploreonline.com" className="text-gold-500 hover:underline">legal@iexploreonline.com</a>
              </p>
            </div>
          </section>

          <div className="bg-gold-500/5 p-6 rounded-lg border border-gold-500/20 mt-8">
            <h3 className="text-lg font-semibold mb-2 text-gold-500">Remember</h3>
            <p className="text-sm md:text-base text-[#D1D1D1]">
              These terms help create a safe and enjoyable nightlife experience for everyone in the iExplore community.
            </p>
          </div>
        </div>
      </div>
    </main>
    <LegalFooter />
  </>
);

export default TermsOfUse;