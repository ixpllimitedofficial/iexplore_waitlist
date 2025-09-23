import React from "react";
import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import LegalFooter from "../LegalFooter";
import LegalSideNav from "../LegalSideNav";

const CookiePolicy = () => (
  <>
    <MainDesktopAndMobileNav />
    <LegalSideNav active="/legal/cookie-policy" />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-16 py-10 md:ml-[180px] ml-[70px] pt-24">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-gold-500 text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
        <p className="mb-2 text-lg">Effective Date: [Insert Date]</p>
        <p className="mb-2 text-lg">Company: IXPL Limited</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies?</h2>
        <p>Cookies are small text files stored on your device when you visit our website or use our app. They help us remember your preferences, keep you logged in, and analyze usage to improve your experience.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Cookies</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Authentication and session management</li>
          <li>Personalization of content and recommendations</li>
          <li>Analytics and usage tracking</li>
          <li>Delivering relevant promotions and updates</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Types of Cookies We Use</h2>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Essential Cookies:</b> Required for basic functionality</li>
          <li><b>Performance Cookies:</b> Help us analyze usage and improve performance</li>
          <li><b>Functional Cookies:</b> Remember your preferences</li>
          <li><b>Advertising Cookies:</b> Deliver relevant ads and promotions</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Managing Cookies</h2>
        <p>You can control cookie preferences in your browser or device settings. Disabling cookies may affect your experience on iExplore.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">5. Third-Party Cookies</h2>
        <p>We may allow partners to set cookies for analytics, advertising, or social media integration. These are subject to their own privacy policies.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">6. Changes to This Policy</h2>
        <p>We may update this Cookie Policy from time to time. We’ll notify you of significant changes via email or in-app notification.</p>
        <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
        <p>For questions about our Cookie Policy:<br/>IXPL Limited<br/>Email: <a href="mailto:privacy@iexploreonline.com" className="text-gold-500 underline">privacy@iexploreonline.com</a></p>
        <hr className="my-8 border-gold-500" />
        <p className="text-lg font-bold">Summary</p>
        <p>Cookies help us deliver a better, more personalized experience. You have control over your cookie settings at any time.</p>
      </section>
    </main>
    <LegalFooter />
  </>
);

export default CookiePolicy;
