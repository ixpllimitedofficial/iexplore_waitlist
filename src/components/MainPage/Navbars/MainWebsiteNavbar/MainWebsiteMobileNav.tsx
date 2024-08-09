"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import iExploreTextLogo from "@/assets/svg/NavbarSvg/iExploreTextLogoSvg.svg";
import iExploreLogoSvg from "@/assets/svg/NavbarSvg/iExploreLogoSvg.svg";
import HamburgerIconSvg from "@/assets/svg/NavbarSvg/HamburgerIconSvg.svg";
import CloseIconSvg from "@/assets/svg/NavbarSvg/CloseIconSvg.svg";

const MainWebsiteMobileNav = () => {
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
    <header className="absolute top-0 w-full z-[60] lg:hidden flex items-center justify-between px-7 md:px-16 py-5 bg-transparent">
      {/* logo */}
      <Link href="/">
        <Image src={iExploreTextLogo} alt="iExploreTextLogo" height={40} />
      </Link>

      {/* hamburger */}
      <Image src={HamburgerIconSvg} alt="HamburgerIconSvg" onClick={showNav} />

      {/* navbar */}
      <nav
        className={`fixed top-0 h-screen w-screen z-[100] bg-brandDark p-28 flex flex-col items-center gap-10 duration-700 ${
          showNavState ? "right-0" : "right-[-100vw]"
        }`}
      >
        {/* to close nav */}
        <div className="absolute top-7 z-[120] cursor-pointer noSelect flex w-[75%] justify-between">
          {/* logo */}
          <Image src={iExploreLogoSvg} alt="iExploreLogoSvg" height={50} />

          {/* to close */}
          <Image src={CloseIconSvg} alt="CloseIconSvg" onClick={showNav} />
        </div>

        <Link
          href="/"
          className="text-[#f2f1e8] text-lg font-medium"
          onClick={showNav}
        >
          Waitlist
        </Link>
        <Link
          href="/home"
          className="text-[#f2f1e8] text-lg font-medium"
          onClick={showNav}
        >
          Home
        </Link>
        <Link
          href="/vendor"
          className="text-[#f2f1e8] text-lg font-medium"
          onClick={showNav}
        >
          Vendor
        </Link>

        {/* divider */}
        <div className="border-t-2 border-[#F2F1E8] w-full"></div>

        <div className="flex flex-col items-center gap-7">
          <Link
            href="/user"
            onClick={showNav}
            className="bg-[#F2F1E8] text-[#322016] text-lg px-4 py-2 rounded-xl font-extrabold"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default MainWebsiteMobileNav;
