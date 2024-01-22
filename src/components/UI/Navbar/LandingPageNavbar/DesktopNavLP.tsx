"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ExploreLogo from "@/assets/svg/NavbarSvg/iExploreLogoSvg.svg";

const DesktopNavLP = () => {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 w-screen z-50 hidden lg:flex items-center justify-between px-20 pt-6 bg-transparent ">
      <Link href="/">
        <Image
          src={ExploreLogo}
          alt="iExploreLogo.png"
          height={65}
          width={65}
        />
      </Link>

      <nav className="flex items-center gap-16">
        <Link
          href="/"
          className={`text-[#E1BD8A] text-xl ${
            pathname === "/" ? "font-medium border-b-2 border-[#E1BD8A]" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className={`text-[#E1BD8A] text-xl ${
            pathname === "/about-us" ? "font-medium border-b-2 border-[#E1BD8A]" : ""
          }`}
        >
          About Us
        </Link>
        <Link
          href="/user"
          className={`text-[#E1BD8A] text-xl ${
            pathname === "/user" ? "font-medium border-b-2 border-[#E1BD8A]" : ""
          }`}
        >
          User
        </Link>
        <Link
          href="/vendor"
          className={`text-[#E1BD8A] text-xl ${
            pathname === "/vendor" ? "font-medium border-b-2 border-[#E1BD8A]" : ""
          }`}
        >
          Vendor
        </Link>
        <Link
          href="/contact-us"
          className={`text-[#E1BD8A] text-xl ${
            pathname === "/contact-us" ? "font-medium border-b-2 border-[#E1BD8A]" : ""
          }`}
        >
          Contact Us
        </Link>
      </nav>

      <nav className="flex items-center gap-7">
        <Link
          href="/new-home/onboarding?flow=signup"
          className="bg-[#E1BD8A] text-[#212121] text-lg px-4 py-2 rounded-xl font-bold"
        >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default DesktopNavLP;
