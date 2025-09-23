import React from "react";
import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import LegalFooter from "../LegalFooter";
import LegalSideNav from "../LegalSideNav";

const DataProtection = () => (
  <>
    <MainDesktopAndMobileNav />
    <LegalSideNav active="/legal/data-protection" />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-16 py-10 md:ml-[180px] ml-[70px] pt-24">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-gold-500 text-4xl md:text-5xl font-bold mb-6">Data Protection Policy</h1>
        <p className="mb-2 text-lg">Effective Date: [Insert Date]</p>
        <p className="mb-2 text-lg">Company: IXPL Limited</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Commitment to Data Protection</h2>
        <p>IXPL Limited is committed to protecting your personal data in accordance with Nigeria’s Data Protection Regulation and international standards.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Data Collection and Use</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>We collect only necessary personal data</li>
          <li>Data is used for providing, improving, and securing our services</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Security</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>SSL encryption and secure servers</li>
          <li>Access controls and authentication</li>
          <li>Periodic security reviews</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Subject Rights</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Access, correct, or delete your data</li>
          <li>Object to or restrict processing</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Transfers</h2>
        <p>International transfers are protected by adequate safeguards, including encryption and contractual clauses.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Breach Notification</h2>
        <p>We will notify affected users and authorities promptly in the event of a data breach.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
        <p>For data protection inquiries:<br/>IXPL Limited<br/>Email: <a href="mailto:privacy@iexploreonline.com" className="text-gold-500 underline">privacy@iexploreonline.com</a></p>
        <hr className="my-8 border-gold-500" />
        <p className="text-lg font-bold">Summary</p>
        <p>Your data is protected and handled with care. You have rights and control over your personal information at all times.</p>
      </section>
    </main>
    <LegalFooter />
  </>
);

export default DataProtection;
