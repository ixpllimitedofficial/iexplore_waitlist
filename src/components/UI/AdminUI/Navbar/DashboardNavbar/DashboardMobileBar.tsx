"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import iExploreTextLogo from "@/assets/svg/NavbarSvg/iExploreTextLogoSvg.svg";
import ExploreLogo from "@/assets/svg/NavbarSvg/iExploreLogoSvg.svg";
import DashboardMenuIcon from "@/assets/svg/AdminIconsSvg/DashboardMenuIcon.svg";
import CloseIconSvg from "@/assets/svg/AdminIconsSvg/CloseIconSvg.svg";

import HomeIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/HomeIconSvg.svg";
import UsersIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/UsersIconSvg.svg";
import VendorsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/VendorsIconSvg.svg";
import ContentIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/ContentIconSvg.svg";
import ReferralIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/ReferralIconSvg.svg";
import NotificationsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/NotificationsIconSvg.svg";
import AnalyticsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/AnalyticsIconSvg.svg";
import SettingsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/SettingsIconSvg.svg";
import SupportIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/SupportIconSvg.svg";
import DropdownMenuTest from "../../Cards/DropdownMenuTest";

const DashboardMobileBar = () => {
  // router
  const router = useRouter();

  const pathname = usePathname();

  // whether to show nav or not's state and function
  const [showNavState, setshowNavState] = useState<boolean>(false);
  const showNav = () => {
    setshowNavState(!showNavState);
  };

  useEffect(() => {
    // Disables Background Scrolling whilst the navbar is open
    if (showNavState == true) {
      document.body.style.overflow = "hidden";
    } else {
      // Unsets Background Scrolling to use when navbar is closed
      document.body.style.overflow = "unset";
    }
  }, [showNavState]);

  return (
    <header className="fixed top-0 w-screen z-50 lg:hidden flex items-center justify-between px-6 py-5 bg-gold-500">
      {/* hamburger */}
      <Image
        src={DashboardMenuIcon}
        alt="DashboardMenuIcon"
        onClick={showNav}
      />

      {/* logo */}
      {/* <Link href="/admin/"> */}
      <Image src={ExploreLogo} alt="ExploreLogo" height={50} width={50} />
      {/* </Link> */}

      <DropdownMenuTest />

      {/* navbar */}
      <nav
        className={`fixed top-0 h-screen w-screen z-[100] bg-[#3C3C3C] px-10 pt-14 pb-28 flex flex-col items-center gap-8 duration-700 ${
          showNavState ? "left-0" : "left-[-100vw]"
        }`}
      >
        {/* to close nav */}
        <div className="absolute top-5 z-[120] cursor-pointer noSelect flex w-[80%] justify-between">
          {/* logo */}
          <Image src={ExploreLogo} alt="ExploreLogo" height={50} width={50} />

          {/* to close */}
          <Image src={CloseIconSvg} alt="CloseIconSvg" onClick={showNav} />
        </div>

        <div className="mt-14 flex flex-col gap-5 overflow-y-scroll no-scrollbar w-full">
          {/* Dashboard */}
          <Link
            href="/admin/dashboard"
            onClick={showNav}
            className={`${
              pathname === "/admin/dashboard"
                ? "font-bold bg-gold-800 px-3 rounded-xl mr-auto"
                : "font-normal"
            } text-gold-500 pl-3 py-2 flex items-center gap-2`}
          >
            <Image src={HomeIconSvg} alt="Home icon" />
            <p>Dashboard</p>
          </Link>

          {/* divider */}
          <div className="border-t-2 border-[#e0e0e042] flex-grow"></div>

          {/* user */}
          <Link
            href="/admin/dashboard/user-management"
            onClick={showNav}
            className={`${
              pathname.includes("user-management")
                ? "font-bold bg-gold-800 px-3 rounded-xl mr-auto"
                : "font-normal"
            } text-gold-500 pl-3 py-2 flex items-center gap-2`}
          >
            <Image src={UsersIconSvg} alt="Users icon" />
            <p>User Management</p>
          </Link>

          {/* vendor */}
          <Link
            href="/admin/dashboard/vendor-management"
            onClick={showNav}
            className={`${
              pathname.includes("vendor-management")
                ? "font-bold bg-gold-800 px-3 rounded-xl mr-auto"
                : "font-normal"
            } text-gold-500 pl-3 py-2 flex items-center gap-2`}
          >
            <Image src={VendorsIconSvg} alt="VendorsIcon" />
            <p>Vendor Management</p>
          </Link>

          {/* content */}
          <Link
            href="/admin/dashboard/content-moderation"
            onClick={showNav}
            className={`${
              pathname.includes("content-moderation")
                ? "font-bold bg-gold-800 px-3 rounded-xl mr-auto"
                : "font-normal"
            } text-gold-500 pl-3 py-2 flex items-center gap-2`}
          >
            <Image src={ContentIconSvg} alt="ContentIconSvg" />
            <p>Content Moderation</p>
          </Link>

          {/* Referral */}
          <Link
            href="/admin/dashboard/referral"
            onClick={showNav}
            className={`${
              pathname.includes("referral")
                ? "font-bold bg-gold-800 px-3 rounded-xl mr-auto"
                : "font-normal"
            } text-gold-500 pl-3 py-2 flex items-center gap-2`}
          >
            <Image src={ReferralIconSvg} alt="ReferralIconSvg" />
            <p>Referral Management</p>
          </Link>

          {/* divider */}
          <div className="border-t-2 border-[#e0e0e042] flex-grow"></div>

          {/* Notifications */}
          <Link
            href="/admin/dashboard/notifications"
            onClick={showNav}
            className={`${
              pathname.includes("notifications")
                ? "font-bold bg-gold-800 px-3 rounded-xl mr-auto"
                : "font-normal"
            } text-gold-500 pl-3 py-2 flex items-center gap-2`}
          >
            <Image src={NotificationsIconSvg} alt="Notifcations icon" />
            <p>Notifications</p>
          </Link>

          {/* Analytic & Reporting */}
          <Link
            href="/admin/dashboard/orders"
            onClick={showNav}
            className={`${
              pathname.includes("orders")
                ? "font-bold bg-gold-800 px-3 rounded-xl mr-auto"
                : "font-normal"
            } text-gold-500 pl-3 py-2 flex items-center gap-2`}
          >
            <Image src={AnalyticsIconSvg} alt="Analytics icon" />
            <p>Orders</p>
          </Link>

          {/* divider */}
          <div className="border-t-2 border-[#e0e0e042] flex-grow"></div>

          {/* Settings */}
          <Link
            href="/admin/dashboard/settings"
            onClick={showNav}
            className={`${
              pathname.includes("settings")
                ? "font-bold bg-gold-800  rounded-xl"
                : "font-normal"
            } text-gold-500 pl-3 py-2 flex items-center gap-2`}
          >
            <Image src={SettingsIconSvg} alt="settings icon" />
            <p>Settings</p>
          </Link>

          {/* Support */}
          <Link
            href="/admin/dashboard/support"
            onClick={showNav}
            className={`${
              pathname.includes("support")
                ? "font-bold bg-gold-800  rounded-xl"
                : "font-normal"
            } text-gold-500 pl-3 py-2 flex items-center gap-2`}
          >
            <Image src={SupportIconSvg} alt="support icon" />
            <p>Support & Help desk</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default DashboardMobileBar;
