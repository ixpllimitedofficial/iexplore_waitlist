"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import iExploreNavLogo from "@/assets/svg/UserIconsSvg/iExploreNavLogo.svg";
import HomeSvg from "@/assets/svg/UserIconsSvg/HomeIcon.svg";
import ActiveHomeSvg from "@/assets/svg/UserIconsSvg/ActiveHomeIcon.svg";

import ExploreIcon from "@/assets/svg/UserIconsSvg/ExploreIcon.svg";
import ActiveExploreIcon from "@/assets/svg/UserIconsSvg/ActiveExploreIcon.svg";

import FeedIcon from "@/assets/svg/UserIconsSvg/FeedIcon.svg";
import ActiveFeedIcon from "@/assets/svg/UserIconsSvg/ActiveFeedIcon.svg";

import DrinksIcon from "@/assets/svg/UserIconsSvg/DrinksIcon.svg";
import ActiveDrinksIcon from "@/assets/svg/UserIconsSvg/ActiveDrinksIcon.svg";

import ProfileIcon from "@/assets/svg/UserIconsSvg/ProfileIcon.svg";
import ActiveProfileIcon from "@/assets/svg/UserIconsSvg/ActiveProfileIcon.svg";

const DashboardDesktopBar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:col-span-2 sticky overflow-y-scroll no-scrollbar top-0 h-screen pt-7 lg:flex flex-col items-center gap-8 border-r-2 border-[#4D4D4D66]">
      <div className="w-4/5 mx-auto">
        <Image src={iExploreNavLogo} alt="iExploreNavLogo" height={35} />
      </div>

      <nav className="flex flex-col gap-3 w-4/5">
        {/* home */}
        <Link
          href="/user"
          className={`${
            pathname === "/user"
              ? "bg-gold-500 text-brandDark px-3 rounded-xl"
              : "text-[#B0B0B0]"
          } text-lg font-bold pl-3 py-2 flex items-center gap-2`}
        >
          {pathname === "/user" ? (
            <Image src={ActiveHomeSvg} alt="ActiveHomeicon" />
          ) : (
            <Image src={HomeSvg} alt="Home icon" />
          )}
          <p>Home</p>
        </Link>

        {/* explore */}
        <Link
          href="/user/explore"
          className={`${
            pathname.includes("explore")
              ? "bg-gold-500 text-brandDark px-3 rounded-xl"
              : "text-[#B0B0B0]"
          } text-lg font-bold pl-3 py-2 flex items-center gap-2`}
        >
          {pathname.includes("explore") ? (
            <Image src={ActiveExploreIcon} alt="ActiveExploreIcon" />
          ) : (
            <Image src={ExploreIcon} alt="ExploreIcon" />
          )}
          <p>Explore</p>
        </Link>

        {/* feed */}
        <Link
          href="/user/feed"
          className={`${
            pathname.includes("feed")
              ? "bg-gold-500 text-brandDark px-3 rounded-xl"
              : "text-[#B0B0B0]"
          } text-lg font-bold pl-3 py-2 flex items-center gap-2`}
        >
          {pathname.includes("feed") ? (
            <Image src={ActiveFeedIcon} alt="ActiveFeedIcon" />
          ) : (
            <Image src={FeedIcon} alt="FeedIcon" />
          )}
          <p>Feed</p>
        </Link>

        {/* drinks */}
        <Link
          href="/user/drinks"
          className={`${
            pathname.includes("drinks")
              ? "bg-gold-500 text-brandDark px-3 rounded-xl"
              : "text-[#B0B0B0]"
          } text-lg font-bold pl-3 py-2 flex items-center gap-2`}
        >
          {pathname.includes("drinks") ? (
            <Image src={ActiveDrinksIcon} alt="ActiveDrinksIcon" />
          ) : (
            <Image src={DrinksIcon} alt="DrinksIcon" />
          )}
          <p>Drinks</p>
        </Link>

        {/* drinks */}
        <Link
          href="/user/profile"
          className={`${
            pathname.includes("profile")
              ? "bg-gold-500 text-brandDark px-3 rounded-xl"
              : "text-[#B0B0B0]"
          } text-lg font-bold pl-3 py-2 flex items-center gap-2`}
        >
          {pathname.includes("profile") ? (
            <Image src={ActiveProfileIcon} alt="ActiveProfileIcon" />
          ) : (
            <Image src={ProfileIcon} alt="ProfileIcon" />
          )}
          <p>Profile</p>
        </Link>
      </nav>
    </div>
  );
};

export default DashboardDesktopBar;
