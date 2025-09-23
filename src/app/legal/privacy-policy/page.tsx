import React from "react";
import MainDesktopAndMobileNav from "@/compon        <p>We respect your privacy and commit to safeguarding your data. Whether you're an explorer or a vendor, your trust in iExplore is what powers our ecosystem.</p>
      </section>
    </main>
    <LegalFooter />
  </>
);ainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import LegalFooter from "../LegalFooter";
import LegalSideNav from "../LegalSideNav";

const PrivacyPolicy = () => (
  <>
    <MainDesktopAndMobileNav />
    <LegalSideNav active="/legal/privacy-policy" />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-16 py-10 md:ml-[180px] ml-[70px] pt-24">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-gold-500 text-4xl md:text-5xl font-bold mb-6">iExplore Privacy Policy</h1>
        <p className="mb-2 text-lg">Effective Date: [Insert Date]</p>
        <p className="mb-2 text-lg">Company: IXPL Limited</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
        <p>Welcome to iExplore, your ultimate nightlife companion. At IXPL Limited, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, share, and protect your personal information when you use our mobile app and related services. By using iExplore, you agree to the terms of this policy.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Information You Provide:</b> Name, email address, phone number, birthday, gender (optional), location data, social media handles (if linked), vendor registration info (business name, address, spot details, etc.)</li>
          <li><b>Automatically Collected Data:</b> Device information (model, OS, IP address), location data (with your permission), app usage data, time and duration of sessions</li>
          <li><b>Third-Party Data:</b> Information from partners, vendors, or social media platforms</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Provide, maintain, and improve the iExplore app</li>
          <li>Personalize user experience and recommendations</li>
          <li>Help you discover clubs, lounges, bars and nightlife spots near you</li>
          <li>Manage waitlists, bookings, and event notifications</li>
          <li>Communicate with you (newsletters, updates, promotions)</li>
          <li>Enable location-based services</li>
          <li>Analyze usage trends to improve our offerings</li>
          <li>Comply with legal obligations</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Legal Basis for Processing</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Your consent</li>
          <li>Performance of a contract</li>
          <li>Legal obligations</li>
          <li>Legitimate interest</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">5. Sharing Your Information</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Vendors and nightlife partners</li>
          <li>Service Providers</li>
          <li>Law enforcement or regulators</li>
          <li>Affiliates or acquirers</li>
          <li>We do not sell your personal data</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">6. Cookies and Tracking</h2>
        <p>We may use cookies or similar technologies to keep you logged in, analyze user behavior, and deliver relevant promotions. You can control cookie preferences in your device or browser settings.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Storage and International Transfers</h2>
        <p>Your data may be stored on servers located in Nigeria or other countries. We ensure protection through encryption, access controls, and standard contractual clauses.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">8. Your Rights</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Access, correct, or delete your data</li>
          <li>Object to or restrict processing</li>
          <li>Withdraw consent at any time</li>
          <li>Lodge a complaint with Nigeria’s Data Protection Commission</li>
        </ul>
        <p>Contact: <a href="mailto:privacy@iexploreonline.com" className="text-gold-500 underline">privacy@iexploreonline.com</a></p>
        <h2 className="text-2xl font-bold mt-8 mb-4">9. Security of Your Data</h2>
        <p>We implement SSL encryption, secure servers, access control, and periodic security reviews. No system is 100% secure; use strong passwords and protect your device.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">10. Children’s Privacy</h2>
        <p>Our platform is not intended for users under 18. We do not knowingly collect personal data from children.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">11. Data Retention</h2>
        <p>We retain your personal data only as long as necessary for the purpose it was collected, to comply with legal obligations, and to resolve disputes.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">12. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We’ll notify you via email or in-app notification if significant changes occur.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">13. Contact Us</h2>
        <p>Data Protection Officer<br/>IXPL Limited<br/>Email: <a href="mailto:privacy@iexploreonline.com" className="text-gold-500 underline">privacy@iexploreonline.com</a><br/>Address: [Insert Address]</p>
        <hr className="my-8 border-gold-500" />
        <p className="text-lg font-bold">Summary</p>
        <p>We respect your privacy and commit to safeguarding your data. Whether you’re an explorer or a vendor, your trust in iExplore is what powers our ecosystem.</p>
      </section>
    </main>
    <LegalFooter />
  </>
);

export default PrivacyPolicy;
