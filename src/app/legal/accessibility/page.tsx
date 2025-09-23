import React from "react";
import LegalFooter from "../LegalFooter";
import LegalNavbar from "../LegalNavbar";

const Accessibility = () => (
  <>
    <LegalNavbar active="/legal/accessibility" />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-8 py-4 md:ml-[240px] pt-[140px] md:pt-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-gold-500 text-2xl md:text-4xl font-bold mb-2">Accessibility Statement</h1>
          <p className="text-[#B0B0B0] text-sm">Last updated: September 23, 2025</p>
        </header>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <div className="bg-gold-500/10 p-6 rounded-lg border border-gold-500/30">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gold-500">Our Commitment to Accessibility</h2>
              <p className="text-sm md:text-base leading-relaxed">
                iExplore is committed to ensuring digital accessibility for people with disabilities. We continually improve user experience for everyone and apply relevant accessibility standards to make nightlife discovery inclusive for all.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">1. Accessibility Standards</h2>
            <div className="space-y-4">
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                <h3 className="text-lg font-medium mb-2 text-blue-400">Guidelines We Follow</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                  <li>Web Content Accessibility Guidelines (WCAG) 2.1</li>
                  <li>Section 508 Standards (US Federal Accessibility)</li>
                  <li>European EN 301 549 Standard</li>
                  <li>Mobile Accessibility Guidelines</li>
                  <li>International accessibility best practices</li>
                </ul>
              </div>

              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-medium mb-2 text-green-400">Conformance Level</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  iExplore aims to conform to WCAG 2.1 Level AA standards. We regularly audit our platform and address accessibility issues as part of our ongoing development process.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">2. Accessibility Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                <h3 className="text-lg font-medium mb-2 text-purple-400">Visual Accessibility</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>High contrast color schemes</li>
                  <li>Scalable fonts and UI elements</li>
                  <li>Alternative text for images</li>
                  <li>Clear visual hierarchy</li>
                  <li>Focus indicators for navigation</li>
                </ul>
              </div>

              <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/30">
                <h3 className="text-lg font-medium mb-2 text-orange-400">Motor Accessibility</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Keyboard navigation support</li>
                  <li>Large touch targets (44px minimum)</li>
                  <li>Gesture alternatives</li>
                  <li>Timeout extensions</li>
                  <li>Voice control compatibility</li>
                </ul>
              </div>

              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h3 className="text-lg font-medium mb-2 text-red-400">Cognitive Accessibility</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Simple, clear language</li>
                  <li>Consistent navigation patterns</li>
                  <li>Error prevention and recovery</li>
                  <li>Progress indicators</li>
                  <li>Context-sensitive help</li>
                </ul>
              </div>

              <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                <h3 className="text-lg font-medium mb-2 text-yellow-400">Auditory Accessibility</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Visual alternatives to audio</li>
                  <li>Captions for video content</li>
                  <li>Volume controls</li>
                  <li>No auto-playing audio</li>
                  <li>Hearing aid compatibility</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">3. Assistive Technology Support</h2>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-medium mb-2 text-gold-500">Screen Readers</h3>
                <p className="text-sm md:text-base text-[#D1D1D1] mb-2">
                  iExplore is compatible with popular screen readers:
                </p>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>NVDA (Windows)</li>
                  <li>JAWS (Windows)</li>
                  <li>VoiceOver (iOS/macOS)</li>
                  <li>TalkBack (Android)</li>
                  <li>ORCA (Linux)</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-medium mb-2 text-gold-500">Voice Control</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  Our platform supports voice control software like Dragon NaturallySpeaking and built-in voice assistants on mobile devices.
                </p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg border border-gold-500/20">
                <h3 className="text-lg font-medium mb-2 text-gold-500">Switch Navigation</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  Users can navigate iExplore using switch devices and alternative input methods through standard accessibility APIs.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">4. Mobile App Accessibility</h2>
            <div className="space-y-4">
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                <h3 className="text-lg font-medium mb-2 text-blue-400">iOS Features</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>VoiceOver screen reader support</li>
                  <li>Dynamic Type for text scaling</li>
                  <li>Voice Control navigation</li>
                  <li>Reduce Motion preferences</li>
                  <li>High contrast and color filters</li>
                </ul>
              </div>

              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                <h3 className="text-lg font-medium mb-2 text-green-400">Android Features</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>TalkBack screen reader support</li>
                  <li>Font size and display scaling</li>
                  <li>Voice Access commands</li>
                  <li>Switch Access for external switches</li>
                  <li>Color correction and high contrast</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">5. Venue Accessibility Information</h2>
            <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/30">
              <h3 className="text-lg font-medium mb-2 text-gold-500">What We Provide</h3>
              <p className="text-sm md:text-base text-[#D1D1D1] mb-2">
                We encourage venue partners to provide accessibility information:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li>Wheelchair accessibility status</li>
                <li>Accessible parking availability</li>
                <li>Accessible restroom facilities</li>
                <li>Audio loop systems for hearing aids</li>
                <li>Service animal policies</li>
                <li>Staff assistance availability</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">6. Known Limitations</h2>
            <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
              <h3 className="text-lg font-medium mb-2 text-red-400">Areas for Improvement</h3>
              <p className="text-sm md:text-base text-[#D1D1D1] mb-2">
                We're actively working to address these limitations:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li>Some third-party embedded content may not meet full accessibility standards</li>
                <li>Complex interactive maps may require keyboard navigation alternatives</li>
                <li>Some venue-uploaded content may lack proper alternative text</li>
                <li>Video content may not always include captions</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">7. Testing and Feedback</h2>
            <div className="space-y-4">
              <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                <h3 className="text-lg font-medium mb-2 text-purple-400">Our Testing Process</h3>
                <ul className="list-disc list-inside text-sm md:text-base space-y-1 text-[#D1D1D1]">
                  <li>Automated accessibility testing tools</li>
                  <li>Manual testing with assistive technologies</li>
                  <li>User testing with people with disabilities</li>
                  <li>Regular accessibility audits</li>
                  <li>Continuous monitoring and improvement</li>
                </ul>
              </div>

              <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/30">
                <h3 className="text-lg font-medium mb-2 text-orange-400">We Welcome Your Feedback</h3>
                <p className="text-sm md:text-base text-[#D1D1D1]">
                  If you encounter accessibility barriers while using iExplore, please let us know. Your feedback helps us improve the experience for everyone.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">8. Contact Us for Accessibility Support</h2>
            <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/30">
              <p className="text-sm md:text-base text-[#F2F1E8] mb-4">
                <strong>Accessibility Team</strong><br/>
                IXPL Limited
              </p>
              <div className="space-y-2">
                <p className="text-sm md:text-base">
                  <strong>Email:</strong> <a href="mailto:accessibility@iexploreonline.com" className="text-gold-500 hover:underline">accessibility@iexploreonline.com</a>
                </p>
                <p className="text-sm md:text-base">
                  <strong>Phone:</strong> +234 (0) 123 456 7890
                </p>
                <p className="text-sm md:text-base">
                  <strong>Response Time:</strong> We aim to respond within 2 business days
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#F2F1E8]">9. Ongoing Improvements</h2>
            <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
              <h3 className="text-lg font-medium mb-2 text-green-400">Our Roadmap</h3>
              <ul className="list-disc list-inside text-sm md:text-base space-y-2 text-[#D1D1D1]">
                <li>Enhanced keyboard navigation shortcuts</li>
                <li>Improved screen reader announcements</li>
                <li>Better color contrast options</li>
                <li>Advanced voice control features</li>
                <li>Accessibility preference memory</li>
                <li>More comprehensive venue accessibility data</li>
              </ul>
            </div>
          </section>

          <div className="bg-gold-500/5 p-6 rounded-lg border border-gold-500/20 mt-8">
            <h3 className="text-lg font-semibold mb-2 text-gold-500">Accessibility is a Journey</h3>
            <p className="text-sm md:text-base text-[#D1D1D1]">
              We view accessibility as an ongoing commitment, not a destination. Together, we're building a more inclusive nightlife discovery experience for everyone.
            </p>
          </div>
        </div>
      </div>
    </main>
    <LegalFooter />
  </>
);

export default Accessibility;