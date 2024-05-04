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
          height={60}
          width={60}
        />
      </Link>

      <nav className="flex items-center gap-16">
        <Link
          href="/"
          className={`text-gold-500 text-lg ${
            pathname === "/" ? "font-medium border-b-2 border-gold-500" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className={`text-gold-500 text-lg ${
            pathname === "/about-us"
              ? "font-medium border-b-2 border-gold-500"
              : ""
          }`}
        >
          About Us
        </Link>
        <Link
          href="/user"
          className={`text-gold-500 text-lg ${
            pathname === "/user"
              ? "font-medium border-b-2 border-gold-500"
              : ""
          }`}
        >
          Users
        </Link>
        <Link
          href="/vendor"
          className={`text-gold-500 text-lg ${
            pathname === "/vendor"
              ? "font-medium border-b-2 border-gold-500"
              : ""
          }`}
        >
          Vendors
        </Link>
        <Link
          href="/contact-us"
          className={`text-gold-500 text-lg ${
            pathname === "/contact-us"
              ? "font-medium border-b-2 border-gold-500"
              : ""
          }`}
        >
          Contact Us
        </Link>
      </nav>

      <nav className="flex items-center gap-7">
        <Link
          href="/user/onboarding"
          className="bg-gold-500 text-[#212121] text-lg px-4 py-2 rounded-xl font-bold"
        >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default DesktopNavLP;
