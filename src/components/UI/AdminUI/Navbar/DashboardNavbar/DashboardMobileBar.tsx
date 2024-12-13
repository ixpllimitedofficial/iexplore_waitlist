"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import iExploreTextLogo from "@/assets/svg/NavbarSvg/iExploreTextLogoSvg.svg";
import ExploreMobileIconSvg from "@/assets/svg/NavbarSvg/ExploreMobileIconSvg.svg";
import DashboardMenuIcon from "@/assets/svg/AdminIconsSvg/DashboardMenuIcon.svg";
import HomeIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/HomeIconSvg.svg";
import UsersIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/UsersIconSvg.svg";
import VendorsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/VendorsIconSvg.svg";
import ContentIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/ContentIconSvg.svg";
import ReferralIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/ReferralIconSvg.svg";
import NotificationsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/NotificationsIconSvg.svg";
import AnalyticsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/AnalyticsIconSvg.svg";
import SettingsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/SettingsIconSvg.svg";
import SupportIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/SupportIconSvg.svg";
import ProfileDropdownMenu from "../../Cards/ProfileDropdownMenu";

const DashboardMobileBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [showNavState, setshowNavState] = useState(false);

  const showNav = () => setshowNavState(!showNavState);

  useEffect(() => {
    document.body.style.overflow = showNavState ? "hidden" : "unset";
  }, [showNavState]);

  return (
    <header className="fixed top-0 w-screen z-50 lg:hidden flex items-center px-6 py-5 bg-black gap-20">
      {/* Hamburger Icon */}
      <Image
        src={DashboardMenuIcon}
        alt="DashboardMenuIcon"
        onClick={showNav}
        className="h-6 w-6 cursor-pointer"
      />

      {/* Logo */}
      <Image
        src={ExploreMobileIconSvg}
        alt="Explore Mobile Icon"
        className="h-8 w-auto"
        priority
      />

      <ProfileDropdownMenu />

      {/* Sidebar Navigation */}
      <nav
        className={`fixed top-14 left-0 h-screen w-74 bg-[#222121] z-[100] px-6  pb-6 flex flex-col gap-6 text-white duration-300 ${showNavState ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Close Button */}
        {/* <Image
          src={DashboardMenuIcon}
          alt="Close Icon"
          onClick={showNav}
          className="h-6 w-6 cursor-pointer self-end"
        /> */}

        {/* Navigation Links */}
        <div className="flex flex-col gap-5 overflow-y-scroll no-scrollbar py-5">
          {/* Dashboard */}
          <NavLink
            href="/admin/dashboard"
            pathname={pathname}
            icon={HomeIconSvg}
            label="Dashboard"
          />

          {/* User Management */}
          <NavLink
            href="/admin/user-management"
            pathname={pathname}
            icon={UsersIconSvg}
            label="User Management"
          />

          {/* Vendor Management */}
          <NavLink
            href="/admin/vendor-management"
            pathname={pathname}
            icon={VendorsIconSvg}
            label="Vendor Management"
          />

          {/* Content Moderation */}
          <NavLink
            href="/admin/content-moderation"
            pathname={pathname}
            icon={ContentIconSvg}
            label="Content Moderation"
          />

          {/* Referral Management */}
          <NavLink
            href="/admin/referral"
            pathname={pathname}
            icon={ReferralIconSvg}
            label="Referral Management"
          />

          {/* Notifications */}
          <NavLink
            href="/admin/notifications"
            pathname={pathname}
            icon={NotificationsIconSvg}
            label="Notifications"
          />

          {/* Orders */}
          <NavLink
            href="/admin/orders"
            pathname={pathname}
            icon={AnalyticsIconSvg}
            label="Orders"
          />

          {/* Settings */}
          <NavLink
            href="/admin/settings"
            pathname={pathname}
            icon={SettingsIconSvg}
            label="Settings"
          />

          {/* Support */}
          <NavLink
            href="/admin/support"
            pathname={pathname}
            icon={SupportIconSvg}
            label="Support & Help Desk"
          />
        </div>
      </nav>
    </header>
  );
};

// Helper Component for NavLinks
const NavLink = ({ href, pathname, icon, label }: any) => {
  const isActive = pathname.includes(href);
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg ${isActive ? "bg-yellow-500 font-bold" : "hover:bg-gray-700"
        }`}
    >
      <Image src={icon} alt={`${label} icon`} className="h-5 w-5" />
      <p>{label}</p>
    </Link>
  );
};

export default DashboardMobileBar;
