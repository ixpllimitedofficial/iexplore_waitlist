"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Scale, Shield, Cookie, Users, Building, Lock, Eye, Phone, Search, Home, Trash2 } from "lucide-react";
import iExploreTextLogo from "@/assets/svg/NavbarSvg/iExploreTextLogoSvg.svg";

interface LegalNavbarProps {
  active: string;
}

const legalPages = [
  { href: "/legal/privacy-policy", label: "Privacy Policy", icon: Shield },
  { href: "/legal/terms-of-use", label: "Terms of Use", icon: Scale },
  { href: "/legal/cookie-policy", label: "Cookie Policy", icon: Cookie },
  { href: "/legal/community-guidelines", label: "Community Guidelines", icon: Users },
  { href: "/legal/vendor-policy", label: "Vendor Policy", icon: Building },
  { href: "/legal/data-protection", label: "Data Protection", icon: Lock },
  { href: "/legal/account-deletion", label: "Account Deletion", icon: Trash2 },
  { href: "/legal/accessibility", label: "Accessibility", icon: Eye },
  { href: "/legal/contact", label: "Contact & Legal", icon: Phone },
];

const LegalNavbar = ({ active }: LegalNavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPages = legalPages.filter(page =>
    page.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Header with Search */}
      <header className="fixed top-0 left-0 right-0 bg-black border-b border-gold-500/20 z-50">
        <div className="px-4 md:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Image src={iExploreTextLogo} alt="iExploreTextLogo" height={40} />
              </Link>
              <span className="text-[#666] text-sm hidden sm:block">Legal Center</span>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#666]" />
                <input
                  type="text"
                  placeholder="Search legal documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-brandDarkNeutral border border-[#333] rounded-lg text-[#F2F1E8] placeholder-[#666] focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/20 text-sm"
                />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#F2F1E8] hover:text-gold-500 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#666]" />
              <input
                type="text"
                placeholder="Search legal documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-brandDarkNeutral border border-[#333] rounded-lg text-[#F2F1E8] placeholder-[#666] focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/20 text-sm"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[120px] left-0 right-0 bg-black border-b border-gold-500/20 z-40 md:hidden max-h-[calc(100vh-120px)] overflow-y-auto">
          <nav className="px-4 py-4">
            <div className="space-y-2">
              {(searchQuery ? filteredPages : legalPages).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    active === item.href
                      ? "bg-gold-500/20 text-gold-500"
                      : "text-[#D1D1D1] hover:bg-gold-500/10 hover:text-gold-500"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
              {searchQuery && filteredPages.length === 0 && (
                <div className="px-3 py-4 text-[#666] text-sm text-center">
                  No legal documents found for "{searchQuery}"
                </div>
              )}
            </div>
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:block fixed left-0 top-[72px] w-[240px] h-[calc(100vh-72px)] bg-black border-r border-gold-500/20 z-30 overflow-y-auto">
        <div className="p-4">
          <h2 className="text-[#666] text-xs uppercase tracking-wider mb-4 px-3">Legal Documents</h2>
          <nav>
            <div className="space-y-1">
              {(searchQuery ? filteredPages : legalPages).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    active === item.href
                      ? "bg-gold-500/20 text-gold-500"
                      : "text-[#D1D1D1] hover:bg-gold-500/10 hover:text-gold-500"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
              {searchQuery && filteredPages.length === 0 && (
                <div className="px-3 py-4 text-[#666] text-sm text-center">
                  No results found for "{searchQuery}"
                </div>
              )}
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default LegalNavbar;