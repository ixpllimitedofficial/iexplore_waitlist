"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import iExploreTextLogo from "@/assets/svg/NavbarSvg/iExploreTextLogoSvg.svg";
import HamburgerIconSvg from "@/assets/svg/NavbarSvg/HamburgerIconSvg.svg";
import CloseIconSvg from "@/assets/svg/NavbarSvg/CloseIconSvg.svg";

const MobileNav = () => {
  // router
  const router = useRouter();

  // whether to show nav or not's state and function
  const [showNavState, setshowNavState] = useState<boolean>(false);
  const showNav = () => {
    setshowNavState(!showNavState);
  };

  return (
    <header className="lg:hidden flex items-center justify-between px-10 py-5 bg-[#E1BD8A]">
      {/* logo */}
      <Image src={iExploreTextLogo} alt="iExploreTextLogo" />

      {/* hamburger */}
      <Image src={HamburgerIconSvg} alt="HamburgerIconSvg" onClick={showNav} />

      {/* navbar */}
      <nav
        className={`fixed top-0 h-screen w-screen z-[100] bg-[#E1BD8A] p-28 flex flex-col items-center gap-10 duration-700 ${
          showNavState ? "right-0" : "right-[-100vw]"
        }`}
      >
        {/* to close nav */}
        <div className="absolute top-5 z-[120] cursor-pointer noSelect flex w-[80%] justify-between">
          {/* logo */}
          <Image src={iExploreTextLogo} alt="iExploreTextLogo" />

          {/* to close */}
          <Image src={CloseIconSvg} alt="CloseIconSvg" onClick={showNav} />
        </div>

        <Link href="/" className="text-[#212121] text-[18px] font-medium">
          Home
        </Link>
        <Link href="/" className="text-[#212121] text-[18px] font-medium">
          Explore
        </Link>
        <Link href="/" className="text-[#212121] text-[18px] font-medium">
          Saved
        </Link>
        <Link href="/" className="text-[#212121] text-[18px] font-medium">
          Feed
        </Link>
        <Link href="/" className="text-[#212121] text-[18px] font-medium">
          Drinks
        </Link>

        {/* divider */}
        <div className="border-t-2 border-black w-full"></div>

        <div className="flex flex-col items-center gap-7">
          <Link
            href="/onboarding?flow=login"
            className="text-[#212121] text-[18px] font-medium"
          >
            Login
          </Link>
          <Link
            href="/onboarding?flow=signup"
            className="bg-[#212121] text-[#E1BD8A] text-[18px] px-4 py-2 rounded-xl font-extrabold"
          >
            Signup
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default MobileNav;
