"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIconSvg from "@/assets/svg/AdminIconsSvg/NavbarIcons/HomeIconSvg.svg";

const DashboardDesktopBar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:col-span-2 sticky overflow-y-scroll no-scrollbar top-0 h-screen py-5 lg:flex flex-col items-center gap-8">
      <nav className="flex flex-col gap-3 w-4/5">
        {/* home */}
        <Link
          href="/user"
          className={`${
            pathname === "/user"
              ? "bg-gold-500 text-brandDark px-3 rounded-xl"
              : "text-[#B0B0B0]"
          } font-bold pl-3 py-2 flex items-center gap-2`}
        >
          <Image src={HomeIconSvg} alt="Home icon" />
          <p>Home</p>
        </Link>

        {/* explore */}
        <Link
          href="/user/explore"
          className={`${
            pathname === "/user/explore"
              ? "bg-gold-500 text-brandDark px-3 rounded-xl"
              : "text-[#B0B0B0]"
          } font-bold pl-3 py-2 flex items-center gap-2`}
        >
          <Image src={HomeIconSvg} alt="Home icon" />
          <p>Explore</p>
        </Link>

        {/* feed */}
        <Link
          href="/user/feed"
          className={`${
            pathname === "/user/feed"
              ? "bg-gold-500 text-brandDark px-3 rounded-xl"
              : "text-[#B0B0B0]"
          } font-bold pl-3 py-2 flex items-center gap-2`}
        >
          <Image src={HomeIconSvg} alt="Home icon" />
          <p>Feed</p>
        </Link>

        {/* drinks */}
        <Link
          href="/user/drinks"
          className={`${
            pathname === "/user/drinks"
              ? "bg-gold-500 text-brandDark px-3 rounded-xl"
              : "text-[#B0B0B0]"
          } font-bold pl-3 py-2 flex items-center gap-2`}
        >
          <Image src={HomeIconSvg} alt="Home icon" />
          <p>Drinks</p>
        </Link>
      </nav>
    </div>
  );
};

export default DashboardDesktopBar;
