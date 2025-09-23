import React from "react";
import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import LegalFooter from "../LegalFooter";
import LegalSideNav from "../LegalSideNav";

const ContactLegal = () => (
  <>
    <MainDesktopAndMobileNav />
    <LegalSideNav active="/legal/contact" />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-16 py-10 md:ml-[180px] ml-[70px] pt-24">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-gold-500 text-4xl md:text-5xl font-bold mb-6">Contact & Legal Inquiries</h1>
        <p className="mb-2 text-lg">Effective Date: [Insert Date]</p>
        <p className="mb-2 text-lg">Company: IXPL Limited</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Email: <a href="mailto:support@iexploreonline.com" className="text-gold-500 underline">support@iexploreonline.com</a></li>
          <li>Privacy: <a href="mailto:privacy@iexploreonline.com" className="text-gold-500 underline">privacy@iexploreonline.com</a></li>
          <li>Vendors: <a href="mailto:vendors@iexploreonline.com" className="text-gold-500 underline">vendors@iexploreonline.com</a></li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">Legal Notices</h2>
        <p>For legal inquiries, requests, or complaints, please contact our Data Protection Officer or legal team at the above addresses.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Physical Address</h2>
        <p>[Insert Company Address Here]</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Phone</h2>
        <p>[Insert Company Phone Number Here]</p>
        <hr className="my-8 border-gold-500" />
        <p className="text-lg font-bold">Summary</p>
        <p>We are here to help. Reach out for support, privacy, vendor, or legal inquiries at any time.</p>
      </section>
    </main>
    <LegalFooter />
  </>
);

export default ContactLegal;
