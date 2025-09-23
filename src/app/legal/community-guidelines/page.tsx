import React from "react";
import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import LegalFooter from "../LegalFooter";
import LegalSideNav from "../LegalSideNav";

const CommunityGuidelines = () => (
  <>
    <MainDesktopAndMobileNav />
    <LegalSideNav active="/legal/community-guidelines" />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-16 py-10 md:ml-[180px] ml-[70px] pt-24">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-gold-500 text-4xl md:text-5xl font-bold mb-6">Community Guidelines</h1>
        <p className="mb-2 text-lg">Effective Date: [Insert Date]</p>
        <p className="mb-2 text-lg">Company: IXPL Limited</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Purpose</h2>
        <p>iExplore is committed to creating a safe, respectful, and enjoyable environment for all users and vendors. These guidelines help maintain a positive community experience.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Respect Others</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Treat all users, vendors, and staff with respect</li>
          <li>No harassment, bullying, or hate speech</li>
          <li>Respect differing opinions and backgrounds</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Share Responsibly</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Post truthful, helpful, and relevant content</li>
          <li>No spam, scams, or misleading information</li>
          <li>Do not share personal or confidential information of others</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Safety First</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Report suspicious or harmful activity</li>
          <li>Do not promote illegal or dangerous behavior</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">5. Vendor Conduct</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Provide accurate information about venues and events</li>
          <li>Honor deals, events, and promotions</li>
          <li>Do not post offensive or misleading content</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">6. Enforcement</h2>
        <p>Violations may result in content removal, account suspension, or termination. Serious violations may be reported to authorities.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">7. Updates</h2>
        <p>We may update these guidelines as needed. Continued use of iExplore means you accept the latest version.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
        <p>For questions or to report violations:<br/>IXPL Limited<br/>Email: <a href="mailto:support@iexploreonline.com" className="text-gold-500 underline">support@iexploreonline.com</a></p>
        <hr className="my-8 border-gold-500" />
        <p className="text-lg font-bold">Summary</p>
        <p>Help us keep iExplore safe, welcoming, and fun for everyone. Respect the community and follow these guidelines at all times.</p>
      </section>
    </main>
    <LegalFooter />
  </>
);

export default CommunityGuidelines;
