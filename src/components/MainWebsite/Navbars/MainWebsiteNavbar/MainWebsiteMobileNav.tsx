"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import iExploreTextLogo from "@/assets/svg/NavbarSvg/iExploreTextLogoSvg.svg";
import iExploreLogoSvg from "@/assets/svg/NavbarSvg/iExploreLogoSvg.svg";
import HamburgerIconSvg from "@/assets/svg/NavbarSvg/HamburgerIconSvg.svg";
import CloseIconSvg from "@/assets/svg/NavbarSvg/CloseIconSvg.svg";

import { anton } from "@/app/fonts";

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
    <header className="fixed top-0 w-full z-[60] lg:hidden flex items-center justify-between bg-transparent">
      <div
        className={`${
          showNavState ? "bg-brandDark" : "bg-[#0000004D] backdrop-blur-2xl"
        } px-7 py-5 flex items-center justify-between w-full`}
      >
        {/* logo */}
        <Link href="/">
          <Image src={iExploreTextLogo} alt="iExploreTextLogo" height={40} />
        </Link>

        {/* hamburger */}
        <Image
          src={showNavState ? CloseIconSvg : HamburgerIconSvg}
          alt="HamburgerIconSvg"
          onClick={showNav}
          className="duration-1000"
        />
      </div>

      {/* navbar */}
      <nav
        className={`-z-50 fixed top-0 h-screen w-screen bg-brandDark px-8 pt-10 flex flex-col gap-8 duration-1000 ${
          showNavState ? "top-16 left-0" : "top-[-150vh] left-0"
        }`}
      >
        <Link
          href="/"
          className={`text-[#f2f1e8] text-3xl ${anton.className} `}
          onClick={showNav}
        >
          Waitlist
        </Link>

        <Link
          href="/home"
          className={`text-[#f2f1e8] text-3xl ${anton.className} `}
          onClick={showNav}
        >
          Home
        </Link>

        <Link
          href="/vendor"
          className={`text-[#f2f1e8] text-3xl ${anton.className} `}
          onClick={showNav}
        >
          Vendor
        </Link>

        <Link
          href="/about-us"
          className={`text-[#f2f1e8] text-3xl ${anton.className} `}
          onClick={showNav}
        >
          About Us
        </Link>

        <Link
          href="/blogs"
          className={`text-[#f2f1e8] text-3xl ${anton.className} `}
          onClick={showNav}
        >
          Blog & Updates
        </Link>

        <Link
          href="/contact-us"
          className={`text-[#f2f1e8] text-3xl ${anton.className} `}
          onClick={showNav}
        >
          Contact Us
        </Link>

        {/* divider */}
        {/* <div className="border-t-2 border-[#F2F1E8] w-full"></div> */}

        {/* <div className="flex flex-col items-center gap-7"> */}
        <Link
          href="/"
          onClick={showNav}
          className="bg-gold-500 text-[#322016] text-center px-4 py-2 rounded-3xl font-bold"
        >
          Join Waitlist
        </Link>
        {/* </div> */}
      </nav>
    </header>
  );
};

export default MainWebsiteMobileNav;
