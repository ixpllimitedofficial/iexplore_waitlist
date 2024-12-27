"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import iExploreTextLogo from "@/assets/svg/NavbarSvg/iExploreTextLogoSvg.svg";
import ExploreLogo from "@/assets/svg/NavbarSvg/iExploreLogoSvg.svg";
import DashboardMenuIcon from "@/assets/svg/AdminIconsSvg/DashboardMenuIcon.svg";
import HamburgerIcon from "@/assets/svg/NavbarSvg/HamburgerIconSvg.svg";
import CloseIconSvg from "@/assets/svg/AdminIconsSvg/CloseIconSvg.svg";

import HomeIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/HomeIconSvg.svg";
import UsersIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/icons8-shop-48.png";
import VendorsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/VendorsIconSvg.svg";
import ContentIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/ContentIconSvg.svg";
import ReferralIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/ReferralIconSvg.svg";
import NotificationsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/NotificationsIconSvg.svg";
import AnalyticsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/AnalyticsIconSvg.svg";
import SettingsIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/SettingsIconSvg.svg";
import SupportIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/SupportIconSvg.svg";
import ProfileDropdownMenu from "../../Cards/ProfileDropdownMenu";
import LogoutLogo from "@/assets/img/icons8-logout-48.png";
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

const NewDashboardMobileBar = () => {
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
    <header className="fixed top-0 w-screen z-50 lg:hidden flex items-center justify-between px-6 py-5 bg-brandDark">
      {/* hamburger */}
      <Image src={HamburgerIcon} alt="DashboardMenuIcon" onClick={showNav} />

      {/* logo */}
      {/* <Link href="/admin/"> */}
      <div className="flex gap-1 items-center mx-auto">
        <Image
          src={iExploreTextLogo}
          alt="ExploreLogo"
          height={150}
          width={150}
        />
        {/* </Link> */}
        <p className="font-bold text-lg flex items-center gap-1 text-gold-500">
          <span className="text-white">.</span>Vendor
        </p>
      </div>
      {/* navbar */}
      <nav
        className={`fixed top-[14%] h-screen w-[60%] z-[100] bg-[#3C3C3C] px-5 pt-8 pb-28 flex flex-col items-center gap-8 duration-700 ${
          showNavState ? "left-0" : "left-[-150vw]"
        }`}
      >
        <div className="mt-1 flex flex-col gap-5 overflow-y-scroll no-scrollbar w-full">
          {/* Dashboard */}
          <Link
            href="/vendor-Home/dashboard"
            onClick={showNav}
            className={`${
              pathname === "/vendor-Home/dashboard"
                ? "bg-gold-500 text-brandDark px-3 rounded-3xl"
                : "text-[#B0B0B0]"
            }text-lg font-bold pl-3 py-2 flex items-center gap-2`}
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
            onClick={showNav}
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
          onClick={showNav}
          className={`${
            pathname.includes("drinks")
              ? "bg-gold-500 text-brandDark px-3 rounded-3xl"
              : "text-[#B0B0B0]"
          }text-lg font-bold pl-3 py-2 flex items-center gap-2 text-[#B0B0B0]`}
        >
          {pathname.includes("/vendor-Home/drinks") || pathname.includes("/vendor-Home/drinks/") ? (
            <Image src={ActiveDrinksIcon} alt="Users icon" className="w-7 h-7" />
          ) : (
            <Image src={DrinksIcon} alt="Users icon" className="w-7 h-7" />
          )}
          <p>Drinks</p>
        </Link>

          {/* feed */}
          <Link
            href="/vendor-Home/feed"
            onClick={showNav}
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
            onClick={showNav}
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
            onClick={showNav}
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

          {/*signout */}
          <button className="w-[100%] mt-3  p-2 px-6 bg-[#E50000] rounded-full flex items-center justify-start gap-1 font-bold text-lg">
            <Image src={LogoutLogo} className="w-6 h-6" alt="" /> Sign Out
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NewDashboardMobileBar;
