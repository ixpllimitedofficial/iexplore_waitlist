import React from "react";
import LegalFooter from "../LegalFooter";
import LegalNavbar from "../LegalNavbar";

const CommunityGuidelines = () => (
  <>
    <LegalNavbar active="/legal/community-guidelines" />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-8 py-4 md:ml-[240px] pt-[140px] md:pt-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-gold-500 text-2xl md:text-4xl font-bold mb-2">Community Guidelines</h1>
          <p className="text-[#B0B0B0] text-sm">Last updated: September 23, 2025</p>
        </header>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <div className="bg-gold-500/10 p-6 rounded-lg border border-gold-500/30">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gold-500">Welcome to the iExplore Community</h2>
              <p className="text-sm md:text-base leading-relaxed">
                iExplore connects nightlife enthusiasts with amazing venues across Nigeria. Our community guidelines ensure everyone has a safe, fun, and respectful experience while discovering the best nightlife spots.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">1. Respect and Safety First</h2>
            <div className="space-y-4">
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-medium mb-2 text-green-400">✓ Do This</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Treat all community members with respect and kindness</li>
                  <li>Be inclusive and welcoming to newcomers</li>
                  <li>Share honest, helpful reviews and recommendations</li>
                  <li>Report inappropriate behavior or content</li>
                  <li>Follow local laws and venue rules</li>
                </ul>
              </div>

              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h3 className="text-lg font-medium mb-2 text-red-400">✗ Don't Do This</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Harass, bully, or discriminate against other users</li>
                  <li>Share personal information without consent</li>
                  <li>Post threatening or violent content</li>
                  <li>Use hate speech or offensive language</li>
                  <li>Engage in any illegal activities</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">2. Content Standards</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-2 text-gold-500">Reviews and Photos</h3>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li>Share genuine experiences and honest opinions</li>
                <li>Post appropriate photos that represent the venue accurately</li>
                <li>Avoid fake reviews or coordinated review manipulation</li>
                <li>Respect photography policies of venues</li>
                <li>Don't post images of people without their permission</li>
              </ul>

              <h3 className="text-lg font-medium mb-2 mt-6 text-gold-500">Profile Information</h3>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li>Use your real name or an appropriate nickname</li>
                <li>Upload a genuine profile photo (no nudity or offensive images)</li>
                <li>Keep your bio fun but respectful</li>
                <li>Don't impersonate others or create fake accounts</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">3. Venue Interactions</h2>
            <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
              <h3 className="text-lg font-medium mb-2 text-blue-400">Bookings and Reservations</h3>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li>Honor your reservations and arrive on time</li>
                <li>Cancel bookings in advance if plans change</li>
                <li>Be respectful to venue staff and other patrons</li>
                <li>Follow dress codes and entry requirements</li>
                <li>Don't make fake bookings or no-shows repeatedly</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">4. Privacy and Personal Information</h2>
            <div className="space-y-4">
              <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/30">
                <h3 className="text-lg font-medium mb-2 text-orange-400">Protect Yourself</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Don't share personal details like phone numbers or addresses publicly</li>
                  <li>Be cautious when meeting people from the app</li>
                  <li>Use iExplore's messaging system for initial conversations</li>
                  <li>Trust your instincts and report suspicious behavior</li>
                </ul>
              </div>

              <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                <h3 className="text-lg font-medium mb-2 text-purple-400">Respect Others' Privacy</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Don't take photos of people without permission</li>
                  <li>Respect confidentiality of private events</li>
                  <li>Don't share screenshots of private conversations</li>
                  <li>Ask before tagging others in posts or photos</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">5. Commercial Activity</h2>
            <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
              <p className="text-sm md:text-base leading-relaxed mb-4 text-[#D1D1D1]">
                iExplore is for discovering and enjoying nightlife, not unauthorized commercial activities:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li>Don't use the platform for unauthorized promotions or advertising</li>
                <li>Vendors must use official vendor accounts for business activities</li>
                <li>No ticket scalping or unauthorized event sales</li>
                <li>Don't spam users with promotional messages</li>
                <li>Report fake promotions or scams</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">6. Reporting and Enforcement</h2>
            <div className="space-y-4">
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h3 className="text-lg font-medium mb-2 text-red-400">How to Report</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Use the report button on profiles, posts, or messages</li>
                  <li>Contact support at <a href="mailto:support@iexploreonline.com" className="text-gold-500 hover:underline">support@iexploreonline.com</a></li>
                  <li>Provide specific details about the violation</li>
                  <li>Include screenshots if helpful (but respect privacy)</li>
                </ul>
              </div>

              <div className="bg-gray-500/10 p-4 rounded-lg border border-gray-500/30">
                <h3 className="text-lg font-medium mb-2 text-gray-300">Consequences</h3>
                <p className="text-sm md:text-base text-[#D1D1D1] mb-2">
                  Violations may result in:
                </p>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Warning or educational message</li>
                  <li>Content removal</li>
                  <li>Temporary account suspension</li>
                  <li>Permanent account ban</li>
                  <li>Legal action for serious violations</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">7. Age Requirements</h2>
            <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/30">
              <p className="text-sm md:text-base leading-relaxed text-[#D1D1D1]">
                iExplore is intended for users 18 years and older. Many venues featured on our platform serve alcohol and have age restrictions. Users must comply with local laws regarding age limits for nightlife venues.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">8. Contact Our Community Team</h2>
            <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/30">
              <p className="text-sm md:text-base text-[#F2F1E8]">
                <strong>Community Support</strong><br/>
                IXPL Limited<br/>
                Email: <a href="mailto:community@iexploreonline.com" className="text-gold-500 hover:underline">community@iexploreonline.com</a>
              </p>
            </div>
          </section>

          <div className="bg-gold-500/5 p-6 rounded-lg border border-gold-500/20 mt-8">
            <h3 className="text-lg font-semibold mb-2 text-gold-500">Building Community Together</h3>
            <p className="text-sm md:text-base text-[#D1D1D1]">
              These guidelines help us maintain a vibrant, safe, and fun community where everyone can discover amazing nightlife experiences. Thank you for being part of iExplore!
            </p>
          </div>
        </div>
      </div>
    </main>
    <LegalFooter />
  </>
);

export default CommunityGuidelines;