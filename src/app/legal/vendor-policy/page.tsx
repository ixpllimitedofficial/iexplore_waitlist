import React from "react";
import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import LegalFooter from "../LegalFooter";
import LegalSideNav from "../LegalSideNav";

const VendorPolicy = () => (
  <>
    <MainDesktopAndMobileNav />
    <LegalSideNav active="/legal/vendor-policy" />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-16 py-10 md:ml-[180px] ml-[70px] pt-24">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-gold-500 text-4xl md:text-5xl font-bold mb-6">Vendor Policy</h1>
        <p className="mb-2 text-lg">Effective Date: [Insert Date]</p>
        <p className="mb-2 text-lg">Company: IXPL Limited</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Vendor Registration</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Provide accurate business and contact information</li>
          <li>Maintain up-to-date venue, event, and offer details</li>
          <li>Comply with all applicable laws and regulations</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Content Standards</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>No false, misleading, or offensive content</li>
          <li>Respect intellectual property rights</li>
          <li>Do not post illegal or prohibited material</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Deals, Events, and Promotions</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Honor all listed deals, events, and promotions</li>
          <li>Notify users of changes or cancellations promptly</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Payments and Fees</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Pay applicable fees for advertising or premium features</li>
          <li>Follow secure payment processes</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">5. Vendor Conduct</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Respect users and other vendors</li>
          <li>Do not harass, abuse, or discriminate</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">6. Enforcement</h2>
        <p>Violations may result in suspension, removal, or legal action. We reserve the right to review and moderate vendor activity.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">7. Updates</h2>
        <p>We may update this Vendor Policy as needed. Continued use of iExplore means you accept the latest version.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
        <p>For questions or support:<br/>IXPL Limited<br/>Email: <a href="mailto:vendors@iexploreonline.com" className="text-gold-500 underline">vendors@iexploreonline.com</a></p>
        <hr className="my-8 border-gold-500" />
        <p className="text-lg font-bold">Summary</p>
        <p>Vendors are essential to the iExplore ecosystem. Follow these policies to ensure a positive experience for all.</p>
      </section>
    </main>
    <LegalFooter />
  </>
);

export default VendorPolicy;
