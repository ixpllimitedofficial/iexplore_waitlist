"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import iExploreTextLogo from "@/assets/svg/NavbarSvg/iExploreTextLogoSvg.svg";
import HamburgerIconSvg from "@/assets/svg/NavbarSvg/HamburgerIconSvg.svg";
import CloseIconSvg from "@/assets/svg/NavbarSvg/CloseIconSvg.svg";

const MobileNavApp = () => {
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
    <header className="fixed top-0 w-screen z-50 lg:hidden flex items-center justify-between px-10 py-5 bg-[#E1BD8A]">
      {/* logo */}
      <Link href="/admin/">
        <Image src={iExploreTextLogo} alt="iExploreTextLogo" />
      </Link>

      {/* hamburger */}
      {/* <Image src={HamburgerIconSvg} alt="HamburgerIconSvg" onClick={showNav} /> */}
      {/* <nav className="flex items-center gap-7"> */}
      <p className="bg-[#fff] text-[#212121] text-base px-4 py-2 rounded-xl font-bold">
        Please log in!
      </p>

      {/* navbar */}
      <nav
        className={`fixed top-0 h-screen w-screen z-[100] bg-[#E1BD8A] p-28 flex flex-col items-center gap-8 duration-700 ${
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

        <Link
          href="/"
          className="text-[#212121] text-lg font-medium"
          onClick={showNav}
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-[#212121] text-lg font-medium"
          onClick={showNav}
        >
          Explore
        </Link>
        <Link
          href="/"
          className="text-[#212121] text-lg font-medium"
          onClick={showNav}
        >
          Saved
        </Link>
        <Link
          href="/"
          className="text-[#212121] text-lg font-medium"
          onClick={showNav}
        >
          Feed
        </Link>
        <Link
          href="/"
          className="text-[#212121] text-lg font-medium"
          onClick={showNav}
        >
          Drinks
        </Link>

        {/* divider */}
        <div className="border-t-2 border-black w-full"></div>

        <div className="flex flex-col items-center gap-7">
          <Link
            href="/user/onboarding?flow=login"
            onClick={showNav}
            className="text-[#212121] text-lg font-medium"
          >
            Login
          </Link>
          <Link
            href="/user/onboarding?flow=signup"
            onClick={showNav}
            className="bg-[#212121] text-[#E1BD8A] text-lg px-4 py-2 rounded-xl font-extrabold"
          >
            Signup
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default MobileNavApp;
