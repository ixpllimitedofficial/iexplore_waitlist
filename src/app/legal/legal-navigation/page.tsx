import React from "react";
import Link from "next/link";
import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import LegalFooter from "../LegalFooter";

const legalPages = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms-of-use", label: "Terms of Use" },
  { href: "/legal/cookie-policy", label: "Cookie Policy" },
  { href: "/legal/community-guidelines", label: "Community Guidelines" },
  { href: "/legal/vendor-policy", label: "Vendor Policy" },
  { href: "/legal/data-protection", label: "Data Protection" },
  { href: "/legal/account-deletion", label: "Account Deletion" },
  { href: "/legal/accessibility", label: "Accessibility" },
  { href: "/legal/contact", label: "Contact & Legal Inquiries" },
];

const LegalNavigation = () => (
  <>
    <MainDesktopAndMobileNav />
    <main className="min-h-screen bg-brandDarkNeutral text-[#F2F1E8] px-4 md:px-16 py-10">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-gold-500 text-4xl md:text-5xl font-bold mb-6">Legal & Policy Center</h1>
        <p className="mb-6 text-lg">Welcome to the iExplore Legal Center. Here you can find all our legal documents, policies, and guidelines. Click any page below to view details.</p>
        <nav className="grid gap-4">
          {legalPages.map(page => (
            <Link key={page.href} href={page.href} className="block bg-gold-500 text-brandDark px-6 py-4 rounded-xl font-bold text-lg hover:bg-white transition">
              {page.label}
            </Link>
          ))}
        </nav>
      </section>
    </main>
    <LegalFooter />
  </>
);

export default LegalNavigation;
