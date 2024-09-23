"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import ProfileDropdownMenu from "@/components/UI/UserUI/Cards/ProfileDropdownMenu";
import iExploreNavLogo from "@/assets/svg/UserIconsSvg/iExploreNavLogo.svg";

const DesktopNavApp = () => {
  const pathname = usePathname();

  return (
    <header className="hidden lg:flex items-center justify-between px-14 py-5">
      <Image src={iExploreNavLogo} alt="iExploreNavLogo" height={35}  />

      <ProfileDropdownMenu />
    </header>
  );
};

export default DesktopNavApp;
