"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import iExploreTextLogo from "@/assets/svg/NavbarSvg/iExploreTextLogoSvg.svg";
import ExploreLogo from "@/assets/svg/NavbarSvg/iExploreLogoSvg.svg";
import HamburgerIconSvg from "@/assets/svg/NavbarSvg/HamburgerIconSvg.svg";
import CloseIconSvg from "@/assets/svg/NavbarSvg/CloseIconSvg.svg";

const MobileNavLP = () => {
  // router
  const router = useRouter();

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
    <header className="absolute top-0 w-screen z-[60] lg:hidden flex items-center justify-between px-10 md:px-16 py-5 bg-transparent">
      {/* logo */}
      <Link href="/">
        <Image src={ExploreLogo} alt="iExploreTextLogo" height={50} />
      </Link>

      {/* hamburger */}
      <Image src={HamburgerIconSvg} alt="HamburgerIconSvg" onClick={showNav} />

      {/* navbar */}
      <nav
        className={`fixed top-0 h-screen w-screen z-[100] bg-white p-28 flex flex-col items-center gap-10 duration-700 ${
          showNavState ? "right-0" : "right-[-100vw]"
        }`}
      >
        {/* to close nav */}
        <div className="absolute top-7 z-[120] cursor-pointer noSelect flex w-[75%] justify-between">
          {/* logo */}
          <Image src={iExploreTextLogo} alt="iExploreTextLogo" />

          {/* to close */}
          <Image src={CloseIconSvg} alt="CloseIconSvg" onClick={showNav} />
        </div>

        <Link
          href="/"
          className="text-[#212121] text-lg font-medium"
          onClick={showNav}
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className="text-[#212121] text-lg font-medium"
          onClick={showNav}
        >
          About Us
        </Link>
        <Link
          href="/"
          className="text-[#212121] text-lg font-medium"
          onClick={showNav}
        >
          User
        </Link>
        <Link
          href="/"
          className="text-[#212121] text-lg font-medium"
          onClick={showNav}
        >
          Vendor
        </Link>
        <Link
          href="/"
          className="text-[#212121] text-lg font-medium"
          onClick={showNav}
        >
          Contact Us
        </Link>

        {/* divider */}
        <div className="border-t-2 border-black w-full"></div>

        <div className="flex flex-col items-center gap-7">
          {/* <Link
            href="/user/onboarding?flow=login"
            onClick={showNav}
            className="text-[#212121] text-lg font-medium"
          >
            Login
          </Link> */}
          <Link
            href="/user/onboarding?flow=signup"
            onClick={showNav}
            className="bg-[#212121] text-[#fff] text-lg px-4 py-2 rounded-xl font-extrabold"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default MobileNavLP;
