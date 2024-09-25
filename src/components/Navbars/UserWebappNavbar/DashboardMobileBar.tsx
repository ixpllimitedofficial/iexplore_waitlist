"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import HomeSvg from "@/assets/svg/UserIconsSvg/HomeIcon.svg";
import ActiveMobileHomeIcon from "@/assets/svg/UserIconsSvg/ActiveMobileHomeIcon.svg";

import ExploreIcon from "@/assets/svg/UserIconsSvg/ExploreIcon.svg";
import ActiveMobileExploreIcon from "@/assets/svg/UserIconsSvg/ActiveMobileExploreIcon.svg";

import FeedIcon from "@/assets/svg/UserIconsSvg/FeedIcon.svg";
import ActiveMobileFeedIcon from "@/assets/svg/UserIconsSvg/ActiveMobileFeedIcon.svg";

import DrinksIcon from "@/assets/svg/UserIconsSvg/DrinksIcon.svg";
import ActiveMobileDrinksIcon from "@/assets/svg/UserIconsSvg/ActiveMobileDrinksIcon.svg";

const DashboardDesktopBar = () => {
  const pathname = usePathname();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full flex items-center gap-8 border-r-2 border-[#4D4D4D66] bg-brandDark z-50 py-4">
      <nav className="flex justify-around gap-3 w-full">
        {/* home */}
        <Link
          href="/user"
          className={`${
            pathname === "/user" ? "text-gold-500" : "text-[#B0B0B0]"
          } text-lg font-bold flex flex-col items-center gap-1`}
        >
          {pathname === "/user" ? (
            <Image src={ActiveMobileHomeIcon} alt="ActiveMobileHomeIcon" height={32} />
          ) : (
            <Image src={HomeSvg} alt="Home icon" />
          )}
          <p>Home</p>
        </Link>

        {/* explore */}
        <Link
          href="/user/explore"
          className={`${
            pathname.includes("explore") ? "text-gold-500" : "text-[#B0B0B0]"
          } text-lg font-bold flex flex-col items-center gap-1`}
        >
          {pathname.includes("explore") ? (
            <Image
              src={ActiveMobileExploreIcon}
              alt="ActiveMobileExploreIcon" height={32}
            />
          ) : (
            <Image src={ExploreIcon} alt="ExploreIcon" />
          )}
          <p>Explore</p>
        </Link>

        {/* feed */}
        <Link
          href="/user/feed"
          className={`${
            pathname.includes("feed") ? "text-gold-500" : "text-[#B0B0B0]"
          } text-lg font-bold flex flex-col items-center gap-1`}
        >
          {pathname.includes("feed") ? (
            <Image src={ActiveMobileFeedIcon} alt="ActiveMobileFeedIcon" height={32} />
          ) : (
            <Image src={FeedIcon} alt="FeedIcon" />
          )}
          <p>Feed</p>
        </Link>

        {/* drinks */}
        <Link
          href="/user/drinks"
          className={`${
            pathname.includes("drinks") ? "text-gold-500" : "text-[#B0B0B0]"
          } text-lg font-bold flex flex-col items-center gap-1`}
        >
          {pathname.includes("drinks") ? (
            <Image src={ActiveMobileDrinksIcon} alt="ActiveMobileDrinksIcon" height={32} />
          ) : (
            <Image src={DrinksIcon} alt="DrinksIcon" />
          )}
          <p>Drinks</p>
        </Link>

        {/* drinks */}
        {/* <Link
          href="/user/profile"
          className={`${
            pathname.includes("profile")
              ? "bg-gold-500 text-brandDark px-3 rounded-xl"
              : "text-[#B0B0B0]"
          } text-lg font-bold py-2 flex items-center gap-2`}
        >
          <Image src={ProfileIcon} alt="profile icon" />
          <p>Profile</p>
        </Link> */}
      </nav>
    </div>
  );
};

export default DashboardDesktopBar;
