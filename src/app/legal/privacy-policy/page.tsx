import React from "react";
import LegalFooter from "../LegalFooter";
import LegalNavbar from "../LegalNavbar";

const PrivacyPolicy = () => (
  <>
    <LegalNavbar active="/legal/privacy-policy" />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-8 py-4 md:ml-[240px] pt-[140px] md:pt-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-gold-500 text-2xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-[#B0B0B0] text-sm">Last updated: September 23, 2025</p>
        </header>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">1. Introduction</h2>
            <p className="text-sm md:text-base leading-relaxed mb-4">
              Welcome to iExplore, your ultimate nightlife companion. At IXPL Limited, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, share, and protect your personal information when you use our mobile app and related services.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              By using iExplore, you agree to the terms of this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2 text-gold-500">Information You Provide</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Name, email address, phone number</li>
                  <li>Birthday and gender (optional)</li>
                  <li>Location data</li>
                  <li>Social media handles (if linked)</li>
                  <li>Vendor registration info (business name, address, spot details, etc.)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-gold-500">Automatically Collected Data</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Device information (model, OS, IP address)</li>
                  <li>Location data (with your permission)</li>
                  <li>App usage data, time and duration of sessions</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-gold-500">Third-Party Data</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  Information from partners, vendors, or social media platforms
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
              <li>Provide, maintain, and improve the iExplore app</li>
              <li>Personalize user experience and recommendations</li>
              <li>Help you discover clubs, lounges, bars and nightlife spots near you</li>
              <li>Manage waitlists, bookings, and event notifications</li>
              <li>Communicate with you (newsletters, updates, promotions)</li>
              <li>Enable location-based services</li>
              <li>Analyze usage trends to improve our offerings</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">4. Legal Basis for Processing</h2>
            <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
              <li>Your consent</li>
              <li>Performance of a contract</li>
              <li>Legal obligations</li>
              <li>Legitimate interest</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">5. Sharing Your Information</h2>
            <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
              <li>Vendors and nightlife partners</li>
              <li>Service providers</li>
              <li>Law enforcement or regulators</li>
              <li>Affiliates or acquirers</li>
            </ul>
            <p className="text-sm md:text-base mt-2 font-medium text-gold-500">
              We do not sell your personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">6. Data Security</h2>
            <p className="text-sm md:text-base leading-relaxed text-[#D1D1D1]">
              We implement SSL encryption, secure servers, access control, and periodic security reviews. No system is 100% secure; use strong passwords and protect your device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">7. Your Rights</h2>
            <div className="bg-brandDarkNeutral/50 p-4 rounded-lg border border-gold-500/20">
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li>Access, correct, or delete your data</li>
                <li>Object to or restrict processing</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with Nigeria's Data Protection Commission</li>
              </ul>
              <div className="mt-4 p-3 bg-red-500/10 rounded border border-red-500/30">
                <p className="text-sm font-medium text-red-400 mb-2">Account Deletion</p>
                <p className="text-sm text-[#D1D1D1]">
                  To permanently delete your account and all associated data, visit our dedicated{" "}
                  <a href="/legal/account-deletion" className="text-gold-500 hover:underline font-medium">
                    Account Deletion page
                  </a>{" "}
                  for step-by-step instructions and important information.
                </p>
              </div>
              <p className="mt-4 text-sm">
                Contact: <a href="mailto:privacy@iexploreonline.com" className="text-gold-500 hover:underline">privacy@iexploreonline.com</a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">8. Data Retention</h2>
            <p className="text-sm md:text-base leading-relaxed text-[#D1D1D1]">
              We retain your personal data only as long as necessary for the purpose it was collected, to comply with legal obligations, and to resolve disputes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">9. Children's Privacy</h2>
            <p className="text-sm md:text-base leading-relaxed text-[#D1D1D1]">
              Our platform is not intended for users under 18. We do not knowingly collect personal data from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">10. Contact Us</h2>
            <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/30">
              <p className="text-sm md:text-base text-[#F2F1E8]">
                <strong>Data Protection Officer</strong><br/>
                IXPL Limited<br/>
                Email: <a href="mailto:privacy@iexploreonline.com" className="text-gold-500 hover:underline">privacy@iexploreonline.com</a>
              </p>
            </div>
          </section>

          <div className="bg-gold-500/5 p-6 rounded-lg border border-gold-500/20 mt-8">
            <h3 className="text-lg font-semibold mb-2 text-gold-500">Summary</h3>
            <p className="text-sm md:text-base text-[#D1D1D1]">
              We respect your privacy and commit to safeguarding your data. Whether you're an explorer or a vendor, your trust in iExplore is what powers our ecosystem.
            </p>
          </div>
        </div>
      </div>
    </main>
    <LegalFooter />
  </>
);

export default PrivacyPolicy;