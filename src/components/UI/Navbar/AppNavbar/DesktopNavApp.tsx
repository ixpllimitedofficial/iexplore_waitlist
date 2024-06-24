"use client";

import Image from "next/image";
import ExploreLogo from "@/assets/svg/NavbarSvg/iExploreLogoSvg.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import ProfileDropdownMenu from "../../UserUI/Cards/ProfileDropdownMenu";

const DesktopNavApp = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-screen z-[100] hidden lg:flex items-center justify-between px-20 py-4 bg-gold-500 ">
      <Link href="/user/home" className="shadow-xl">
        <Image
          src={ExploreLogo}
          alt="iExploreLogo.png"
          height={60}
          width={60}
        />
      </Link>

      {pathname !== "/user" && (
        <nav className="flex items-center gap-10">
          <Link
            href="/user/home"
            className="text-[#212121] text-lg font-medium"
          >
            Home
          </Link>
          <Link
            href="/user/home"
            className="text-[#212121] text-lg font-medium"
          >
            Explore
          </Link>
          <Link
            href="/user/home"
            className="text-[#212121] text-lg font-medium"
          >
            Saved
          </Link>
          <Link
            href="/user/home"
            className="text-[#212121] text-lg font-medium"
          >
            Feed
          </Link>
          <Link
            href="/user/home"
            className="text-[#212121] text-lg font-medium"
          >
            Drinks
          </Link>
        </nav>
      )}

      {pathname !== "/user" && <ProfileDropdownMenu />}
    </header>
  );
};

export default DesktopNavApp;
