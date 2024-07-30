"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ExploreLogo from "@/assets/svg/NavbarSvg/iExploreLogoSvg.svg";

const MainWebsiteDesktopNav = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-screen z-50 hidden lg:flex items-center justify-between px-16 py-4 bg-[#0000004D] backdrop-blur-2xl">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={ExploreLogo}
          alt="iExploreLogo.png"
          height={48}
          width={48}
        />
        <p className="text-xl font-bold">iExplore</p>
      </Link>

      <nav className="flex items-center gap-14 bg-[#F2F1E8] text-[#322016] font-bold p-2 rounded-xl">
        <Link
          href="/"
          className={`px-5 ${
            pathname === "/" ? "bg-gold-500 px-5 py-2 rounded-lg" : ""
          }`}
        >
          Waitlist
        </Link>
        <Link
          href="/home"
          className={`px-5 ${
            pathname === "/home" ? "bg-gold-500 px-5 py-2 rounded-lg" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/vendor"
          className={`px-5 ${
            pathname === "/vendor" ? "bg-gold-500 px-5 py-2 rounded-lg" : ""
          }`}
        >
          Vendor
        </Link>
      </nav>

      <nav className="flex items-center gap-7">
        <Link
          href="/user"
          className="bg-[#F2F1E8] text-[#322016] px-6 py-2 rounded-3xl font-bold"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
};

export default MainWebsiteDesktopNav;
