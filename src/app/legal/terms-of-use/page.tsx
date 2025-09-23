import React from "react";
import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import LegalFooter from "../LegalFooter";
import LegalSideNav from "../LegalSideNav";

const TermsOfUse = () => (
  <>
    <MainDesktopAndMobileNav />
    <LegalSideNav active="/legal/terms-of-use" />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-16 py-10 md:ml-[180px] ml-[70px] pt-24">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-gold-500 text-4xl md:text-5xl font-bold mb-6">iExplore Terms of Use</h1>
        <p className="mb-2 text-lg">Effective Date: [Insert Date]</p>
        <p className="mb-2 text-lg">Company: IXPL Limited</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>Welcome to iExplore, operated by IXPL Limited ("we", "our", "us"). By accessing or using our mobile app or services, you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our platform.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Description of Services</h2>
        <p>iExplore is a mobile platform designed to help users ("Explorers") discover nightlife venues, events, drinks, and vendors across cities in Nigeria and beyond. The app also enables vendors to showcase their venues and offerings to a broader audience.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">3. User Eligibility</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>You are at least 18 years of age</li>
          <li>You are capable of entering a binding contract</li>
          <li>You will provide accurate and truthful information</li>
          <li>You will not use the platform for any unlawful purposes</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Account Registration</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Maintain confidentiality of login details</li>
          <li>Responsible for all activities under your account</li>
          <li>Notify us immediately of unauthorized use</li>
        </ul>
        <p>We reserve the right to suspend or delete accounts that are inactive, false, or violate our terms.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">5. Vendor Registration & Responsibilities</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Provide accurate business and contact information</li>
          <li>Regularly update drink menus, event info, and location details</li>
          <li>Honor any deals, events, or promos listed</li>
          <li>Not post false, misleading, or offensive content</li>
        </ul>
        <p>We reserve the right to suspend or remove any vendor that violates these terms.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">6. User Conduct</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Do not violate laws or regulations</li>
          <li>Do not upload false, harmful, or misleading content</li>
          <li>Do not interfere with platform services</li>
          <li>Do not use bots or automated systems</li>
          <li>Do not harass or harm others</li>
        </ul>
        <p>Violation may result in termination of your access.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">7. Content and Intellectual Property</h2>
        <p>All content on iExplore is the property of IXPL Limited or its partners and is protected by copyright and trademark laws. You may not copy, modify, distribute, or exploit any content without our written permission.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">8. User-Generated Content</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>You own/control rights to your content</li>
          <li>Your content does not violate third-party rights</li>
          <li>We may use your content for promotional/operational purposes</li>
          <li>We may remove any content at our discretion</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">9. Payments and Transactions</h2>
        <p>[Details about payments, refunds, and transaction security]</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">10. Privacy</h2>
        <p>By using iExplore, you agree to our Privacy Policy, which explains how we collect, use, and protect your personal data.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">11. Location-Based Services</h2>
        <p>With your consent, we may collect and use your geolocation data to recommend venues and events near you. You can disable location tracking in your device settings.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">12. Promotions and Rewards</h2>
        <p>iExplore may offer point-based rewards or promotional campaigns. We reserve the right to modify or discontinue these offers at any time.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">13. Suspension and Termination</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Violation of Terms of Use</li>
          <li>Abuse of platform or users</li>
          <li>Illegal or fraudulent behavior</li>
        </ul>
        <p>Termination may result in loss of access to your account and data.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">14. Disclaimer of Warranties</h2>
        <p>The iExplore platform is provided "as is" and "as available" without warranties of any kind. We do not guarantee error-free operation, accuracy, or reliability of information.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">15. Limitation of Liability</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>No liability for indirect, incidental, or consequential damages</li>
          <li>No liability for losses from use or inability to use the platform</li>
          <li>No liability for interactions/disputes with vendors or users</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">16. Indemnification</h2>
        <p>You agree to indemnify and hold harmless IXPL Limited, its officers, directors, employees, and partners from any claim, demand, or loss resulting from your use of the platform or your breach of these terms.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">17. Governing Law & Jurisdiction</h2>
        <p>These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of Nigerian courts.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">18. Changes to Terms</h2>
        <p>We may update these Terms of Use from time to time. Continued use of the platform after changes are made constitutes your acceptance of the new terms.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">19. Contact Us</h2>
        <p>IXPL Limited<br/>Email: [Insert Email]<br/>Address: [Insert Address]<br/>Phone: [Insert Phone]</p>
        <hr className="my-8 border-gold-500" />
        <p className="text-lg font-bold">Summary</p>
        <p>These terms exist to ensure a safe, secure, and enjoyable experience for all users and vendors on iExplore. By using the platform, you agree to abide by these rules.</p>
      </section>
    </main>
    <LegalFooter />
  </>
);

export default TermsOfUse;
