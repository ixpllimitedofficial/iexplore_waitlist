import React from "react";
import Link from "next/link";

const legalPages = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms-of-use", label: "Terms of Use" },
  { href: "/legal/cookie-policy", label: "Cookie Policy" },
  { href: "/legal/community-guidelines", label: "Community Guidelines" },
  { href: "/legal/vendor-policy", label: "Vendor Policy" },
  { href: "/legal/data-protection", label: "Data Protection" },
  { href: "/legal/accessibility", label: "Accessibility" },
  { href: "/legal/contact", label: "Contact & Legal" },
];

const LegalSideNav = ({ active }: { active?: string }) => (
  <nav className="fixed left-0 top-20 bottom-0 w-[70px] md:w-[180px] bg-brandDarkNeutral border-r border-gold-500 flex flex-col items-center py-8 z-30 overflow-y-auto">
    <div className="mb-8 flex flex-col items-center gap-2">
      <span className="text-gold-500 font-extrabold text-xl md:text-2xl tracking-tight">IXPL</span>
      <span className="text-xs text-[#F2F1E8] md:block hidden">Legal</span>
    </div>
    <ul className="flex flex-col gap-2 w-full px-2">
      {legalPages.map(page => (
        <li key={page.href}>
          <Link
            href={page.href}
            className={`block rounded-lg px-2 py-2 md:px-4 md:py-2 text-xs md:text-sm font-medium transition-all duration-150 hover:bg-gold-500 hover:text-brandDarkNeutral ${active === page.href ? "bg-gold-500 text-brandDarkNeutral" : "text-[#F2F1E8]"}`}
          >
            {page.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default LegalSideNav;