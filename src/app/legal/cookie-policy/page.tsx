import React from "react";
import LegalFooter from "../LegalFooter";
import LegalNavbar from "../LegalNavbar";

const CookiePolicy = () => (
  <>
    <LegalNavbar active="/legal/cookie-policy" />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-8 py-4 md:ml-[240px] pt-[140px] md:pt-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-gold-500 text-2xl md:text-4xl font-bold mb-2">Cookie Policy</h1>
          <p className="text-[#B0B0B0] text-sm">Last updated: September 23, 2025</p>
        </header>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">1. What Are Cookies?</h2>
            <p className="text-sm md:text-base leading-relaxed mb-4">
              Cookies are small text files that are stored on your device when you visit our website or use our mobile app. They help us provide you with a better experience by remembering your preferences and improving our services.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              iExplore uses cookies and similar technologies to enhance your nightlife discovery experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">2. Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div className="bg-brandDarkNeutral/50 p-4 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-medium mb-2 text-gold-500">Essential Cookies</h3>
                <p className="text-sm md:text-base text-[#D1D1D1] mb-2">
                  Required for basic app functionality and security.
                </p>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Authentication and login sessions</li>
                  <li>Shopping cart and booking functionality</li>
                  <li>Security and fraud prevention</li>
                  <li>Load balancing and performance</li>
                </ul>
              </div>

              <div className="bg-brandDarkNeutral/50 p-4 rounded-lg border border-blue-500/20">
                <h3 className="text-lg font-medium mb-2 text-blue-400">Analytics Cookies</h3>
                <p className="text-sm md:text-base text-[#D1D1D1] mb-2">
                  Help us understand how you use iExplore to improve our services.
                </p>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Page views and user interactions</li>
                  <li>Popular venues and features</li>
                  <li>Error tracking and debugging</li>
                  <li>Performance optimization</li>
                </ul>
              </div>

              <div className="bg-brandDarkNeutral/50 p-4 rounded-lg border border-purple-500/20">
                <h3 className="text-lg font-medium mb-2 text-purple-400">Preference Cookies</h3>
                <p className="text-sm md:text-base text-[#D1D1D1] mb-2">
                  Remember your settings and personalize your experience.
                </p>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Language and region preferences</li>
                  <li>Theme and display settings</li>
                  <li>Saved venue favorites</li>
                  <li>Notification preferences</li>
                </ul>
              </div>

              <div className="bg-brandDarkNeutral/50 p-4 rounded-lg border border-green-500/20">
                <h3 className="text-lg font-medium mb-2 text-green-400">Marketing Cookies</h3>
                <p className="text-sm md:text-base text-[#D1D1D1] mb-2">
                  Deliver relevant promotions and content based on your interests.
                </p>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Personalized venue recommendations</li>
                  <li>Targeted event promotions</li>
                  <li>Social media integration</li>
                  <li>Advertising effectiveness</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">3. How We Use Cookies</h2>
            <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
              <li>Keep you logged in to your iExplore account</li>
              <li>Remember your location preferences for venue recommendations</li>
              <li>Analyze which nightlife spots are most popular</li>
              <li>Improve app performance and loading times</li>
              <li>Personalize content and recommendations</li>
              <li>Prevent fraud and ensure security</li>
              <li>Measure the effectiveness of our marketing campaigns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">4. Third-Party Cookies</h2>
            <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/30">
              <p className="text-sm md:text-base leading-relaxed mb-4 text-[#D1D1D1]">
                We may allow trusted third-party services to place cookies on your device:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li><strong>Google Analytics:</strong> Website and app usage analytics</li>
                <li><strong>Social Media:</strong> Facebook, Instagram login and sharing</li>
                <li><strong>Payment Processors:</strong> Secure transaction processing</li>
                <li><strong>Map Services:</strong> Location and navigation features</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">5. Managing Your Cookie Preferences</h2>
            <div className="space-y-4">
              <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/30">
                <h3 className="text-lg font-medium mb-2 text-gold-500">In-App Controls</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  Access your cookie preferences through Settings → Privacy → Cookie Preferences in the iExplore app.
                </p>
              </div>

              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                <h3 className="text-lg font-medium mb-2 text-blue-400">Browser Settings</h3>
                <p className="text-sm md:text-base text-[#D1D1D1] mb-2">
                  Most browsers allow you to control cookies through their settings:
                </p>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Block all cookies</li>
                  <li>Allow only first-party cookies</li>
                  <li>Delete existing cookies</li>
                  <li>Receive notifications when cookies are set</li>
                </ul>
              </div>

              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h3 className="text-lg font-medium mb-2 text-red-400">Important Note</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  Disabling certain cookies may limit iExplore's functionality, including login, personalized recommendations, and venue booking features.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">6. Cookie Retention</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-brandDarkNeutral/50 p-4 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-medium mb-2 text-gold-500">Session Cookies</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  Automatically deleted when you close the app or browser.
                </p>
              </div>
              <div className="bg-brandDarkNeutral/50 p-4 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-medium mb-2 text-gold-500">Persistent Cookies</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  Remain on your device for a set period (typically 30 days to 2 years).
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">7. Updates to This Policy</h2>
            <p className="text-sm md:text-base leading-relaxed text-[#D1D1D1]">
              We may update this Cookie Policy periodically to reflect changes in our practices or applicable laws. We'll notify you of significant changes through the app or via email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">8. Contact Us</h2>
            <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/30">
              <p className="text-sm md:text-base text-[#F2F1E8]">
                <strong>Privacy Team</strong><br/>
                IXPL Limited<br/>
                Email: <a href="mailto:privacy@iexploreonline.com" className="text-gold-500 hover:underline">privacy@iexploreonline.com</a>
              </p>
            </div>
          </section>

          <div className="bg-gold-500/5 p-6 rounded-lg border border-gold-500/20 mt-8">
            <h3 className="text-lg font-semibold mb-2 text-gold-500">Your Choice</h3>
            <p className="text-sm md:text-base text-[#D1D1D1]">
              We believe in transparency and giving you control over your data. Use our cookie settings to customize your iExplore experience.
            </p>
          </div>
        </div>
      </div>
    </main>
    <LegalFooter />
  </>
);

export default CookiePolicy;