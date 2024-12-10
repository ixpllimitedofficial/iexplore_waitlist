"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import iExploreLogoSvg from "@/assets/svg/NavbarSvg/iExploreTextLogoSvg.svg";
import HomeIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/icons8-home.svg";
import UsersIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/icons8-shop-48.png";
import VendorsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/icons8-user-48.png";
import ContentIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/ContentIconSvg.svg";
import ReferralIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/ReferralIconSvg.svg";
import NotificationsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/icons8-notification.svg";
import AnalyticsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/AnalyticsIconSvg.svg";
import SettingsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/SettingsIconSvg.svg";
import SupportIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/SupportIconSvg.svg";
import FeedIcon from "@/assets/svg/UserIconsSvg/FeedIcon.svg";
import ProfileIcon from "@/assets/svg/UserIconsSvg/ProfileIcon.svg";
import LogoutLogo from "@/assets/img/icons8-logout-48.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";

//vendor icons
import HomeSvg from "@/assets/svg/UserIconsSvg/HomeIcon.svg";
import ActiveHomeSvg from "@/assets/svg/UserIconsSvg/ActiveHomeIcon.svg";

import NewStoreSVG from "@/assets/svg/VendorSvg/NewStoreSVG.svg";

import FeedIcons from "@/assets/svg/UserIconsSvg/FeedIcon.svg";
import ActiveFeedIcon from "@/assets/svg/UserIconsSvg/ActiveFeedIcon.svg";

import DrinksIcon from "@/assets/svg/UserIconsSvg/DrinksIcon.svg";
import ActiveDrinksIcon from "@/assets/svg/UserIconsSvg/ActiveDrinksIcon.svg";

import ProfileIcons from "@/assets/svg/UserIconsSvg/ProfileIcon.svg";
import ActiveProfileIcon from "@/assets/svg/UserIconsSvg/ActiveProfileIcon.svg";

const NewDashboardDesktopBar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden bg-brandDark lg:col-span-2 sticky overflow-y-scroll no-scrollbar top-0 h-screen py-5 space-x-4 lg:flex flex-col items-left gap-8">
      {/* home icon */}
      <Link href="/vendor-Home">
        <Image className="px-5" src={iExploreLogoSvg} alt="logo" height={60} />
      </Link>
      <div className="text-gold-500 font-bold -mt-12 px-16 text-lg mb-5">
        <p>Vendor</p>
      </div>
      {/* first part of nav */}
      <nav className="flex flex-col gap-3 justify-center">
        {/* Dashboard */}
        <Link
          href="/vendor-Home/dashboard"
          className={`${
            pathname === "/vendor-Home/dashboard"
              ? "bg-gold-500 text-brandDark px-3 rounded-3xl"
              : "text-[#B0B0B0]"
          }text-lg font-bold pl-3 py-2 flex items-center gap-2 text-[#B0B0B0]`}
        >
          {pathname === "/vendor-Home/dashboard" ? (
            <Image src={ActiveHomeSvg} alt="ActiveHomeicon" />
          ) : (
            <Image src={HomeSvg} alt="Home icon" />
          )}
          <p>Home</p>
        </Link>
        {/* business */}
        <Link
          href="/vendor-Home/business"
          className={`${
            pathname.includes("business")
              ? "bg-gold-500 text-brandDark px-3 rounded-3xl"
              : "text-[#B0B0B0]"
          }text-lg font-bold pl-3 py-2 flex items-center gap-2 text-[#B0B0B0]`}
        >
          {pathname === "/vendor-Home/business" ? (
            <Image src={NewStoreSVG} alt="Users icon" className="w-7 h-7" />
          ) : (
            <Image src={UsersIconSvg} alt="Users icon" className="w-7 h-7" />
          )}
          <p>Business</p>
        </Link>

        {/* drinks */}
        <Link
          href="/vendor-Home/drinks"
          className={`${
            pathname === "/vendor-Home/drinks"
              ? "bg-gold-500 text-brandDark px-3 rounded-3xl"
              : "text-[#B0B0B0]"
          }text-lg font-bold pl-3 py-2 flex items-center gap-2 text-[#B0B0B0]`}
        >
          {pathname === "/vendor-Home/drinks" ? (
            <Image src={ActiveDrinksIcon} alt="ActiveHomeicon" />
          ) : (
            <Image src={DrinksIcon} alt="Home icon" />
          )}
          <p>Drinks</p>
        </Link>

        {/* feed */}
        <Link
          href="/vendor-Home/feed"
          className={`${
            pathname === "/vendor-Home/feed"
              ? "bg-gold-500 text-brandDark px-3 rounded-3xl"
              : "text-[#B0B0B0]"
          }text-lg font-bold pl-3 py-2 flex items-center gap-2 text-[#B0B0B0]`}
        >
          {pathname === "/vendor-Home/feed" ? (
            <Image src={ActiveFeedIcon} alt="ActiveHomeicon" />
          ) : (
            <Image src={FeedIcons} alt="Home icon" />
          )}
          <p>Feed</p>
        </Link>

        {/* notification */}
        <Link
          href="/vendor-Home/notifications"
          className={`${
            pathname.includes("notifications")
              ? "bg-gold-500 text-brandDark px-3 rounded-3xl"
              : "text-[#B0B0B0]"
          }text-lg font-bold pl-3 py-2 flex items-center gap-2 text-[#B0B0B0]`}
        >
          <Image
            src={NotificationsIconSvg}
            alt="notificationIconSvg"
            className="w-7 h-7"
          />
          <p>Notification</p>
        </Link>

        {/* Profile */}
        <Link
          href="/vendor-Home/profile"
          className={`${
            pathname === "/vendor-Home/profile"
              ? "bg-gold-500 text-brandDark px-3 rounded-3xl"
              : "text-[#B0B0B0]"
          }text-lg font-bold pl-3 py-2 flex items-center gap-2 text-[#B0B0B0]`}
        >
          {pathname === "/vendor-Home/profile" ? (
            <Image src={ActiveProfileIcon} alt="ActiveHomeicon" />
          ) : (
            <Image src={ProfileIcons} alt="Home icon" />
          )}
          <p>Profile</p>
        </Link>
        {/* divider */}
        <div className="border-t-2 border-[#e0e0e042] flex-grow"></div>
        {/*signout */}
        <button className="w-[100%] mt-3  p-3 px-6 bg-[#E50000] rounded-full flex items-center justify-start gap-1 font-bold text-lg">
          <Image src={LogoutLogo} className="w-6 h-6" alt="" /> SignOut
        </button>
      </nav>
    </div>
  );
};

export default NewDashboardDesktopBar;
