"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import iExploreLogoSvg from "@/assets/svg/AdminIconsSvg/iExploreLogoSvg.svg";
import HomeIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/HomeIconSvg.svg";
import UsersIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/UsersIconSvg.svg";
import VendorsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/VendorsIconSvg.svg";
import ContentIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/ContentIconSvg.svg";
import ReferralIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/ReferralIconSvg.svg";
import NotificationsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/NotificationsIconSvg.svg";
import AnalyticsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/AnalyticsIconSvg.svg";
import SettingsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/SettingsIconSvg.svg";
import SupportIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/SupportIconSvg.svg";

const DashboardDesktopBar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden bg-[#3C3C3C] lg:col-span-2 sticky overflow-y-scroll no-scrollbar top-0 h-screen pt-5 lg:flex flex-col items-center gap-8">
      {/* home icon */}
      <Link href="/admin">
        <Image src={iExploreLogoSvg} alt="logo" height={70} />
      </Link>

      {/* first part of nav */}
      <nav className="flex flex-col gap-4 justify-center w-[80%]">
        {/* Dashboard */}
        <Link
          href="/admin/dashboard"
          className={`${
            pathname === "/admin/dashboard"
              ? "font-bold bg-[#F7D0984D] px-3 rounded-xl"
              : "font-normal"
          } text-[#F7D098] pl-3 py-2 flex items-center gap-2`}
        >
          <Image src={HomeIconSvg} alt="Home icon" />
          <p>Dashboard</p>
        </Link>

        {/* divider */}
        <div className="border-t-2 border-[#e0e0e042] flex-grow"></div>

        {/* user */}
        <Link
          href="/admin/dashboard/user-management"
          className={`${
            pathname.includes("user-management")
              ? "font-bold bg-[#F7D0984D] px-3 rounded-xl"
              : "font-normal"
          } text-[#F7D098] pl-3 py-2 flex items-center gap-2`}
        >
          <Image src={UsersIconSvg} alt="Users icon" />
          <p>User Management</p>
        </Link>

        {/* vendor */}
        <Link
          href="/admin/dashboard/vendor-management"
          className={`${
            pathname.includes("vendor-management")
              ? "font-bold bg-[#F7D0984D] px-3 rounded-xl"
              : "font-normal"
          } text-[#F7D098] pl-3 py-2 flex items-center gap-2`}
        >
          <Image src={VendorsIconSvg} alt="VendorsIcon" />
          <p>Vendor Management</p>
        </Link>

        {/* content */}
        <Link
          href="/admin/dashboard/content-moderation"
          className={`${
            pathname.includes("content-moderation")
              ? "font-bold bg-[#F7D0984D] px-3 rounded-xl"
              : "font-normal"
          } text-[#F7D098] pl-3 py-2 flex items-center gap-2`}
        >
          <Image src={ContentIconSvg} alt="ContentIconSvg" />
          <p>Content Moderation</p>
        </Link>

        {/* Referral */}
        <Link
          href="/admin/dashboard/referral"
          className={`${
            pathname.includes("referral")
              ? "font-bold bg-[#F7D0984D] px-3 rounded-xl"
              : "font-normal"
          } text-[#F7D098] pl-3 py-2 flex items-center gap-2`}
        >
          <Image src={ReferralIconSvg} alt="ReferralIconSvg" />
          <p>Referral Management</p>
        </Link>

        {/* divider */}
        <div className="border-t-2 border-[#e0e0e042] flex-grow"></div>

        {/* Notifications */}
        <Link
          href="/admin/dashboard/notifications"
          className={`${
            pathname.includes("notifications")
              ? "font-bold bg-[#F7D0984D] px-3 rounded-xl"
              : "font-normal"
          } text-[#F7D098] pl-3 py-2 flex items-center gap-2`}
        >
          <Image src={NotificationsIconSvg} alt="Notifcations icon" />
          <p>Notifications</p>
        </Link>

        {/* Analytic & Reporting */}
        <Link
          href="/admin/dashboard/analytics"
          className={`${
            pathname.includes("analytics")
              ? "font-bold bg-[#F7D0984D] px-3 rounded-xl"
              : "font-normal"
          } text-[#F7D098] pl-3 py-2 flex items-center gap-2`}
        >
          <Image src={AnalyticsIconSvg} alt="Analytics icon" />
          <p>Analytic & Reporting</p>
        </Link>

        {/* divider */}
        <div className="border-t-2 border-[#e0e0e042] flex-grow"></div>

        {/* Settings */}
        <Link
          href="/admin/dashboard/profile"
          className={`${
            pathname.includes("settings")
              ? "font-bold bg-[#F7D0984D]  rounded-xl"
              : "font-normal"
          } text-[#F7D098] pl-3 py-2 flex items-center gap-2`}
        >
          <Image src={SettingsIconSvg} alt="settings icon" />
          <p>Settings</p>
        </Link>

        {/* Support */}
        <Link
          href="/admin/dashboard/support"
          className={`${
            pathname.includes("support")
              ? "font-bold bg-[#F7D0984D]  rounded-xl"
              : "font-normal"
          } text-[#F7D098] pl-3 py-2 flex items-center gap-2`}
        >
          <Image src={SupportIconSvg} alt="support icon" />
          <p>Support & Help desk</p>
        </Link>
      </nav>
    </div>
  );
};

export default DashboardDesktopBar;
