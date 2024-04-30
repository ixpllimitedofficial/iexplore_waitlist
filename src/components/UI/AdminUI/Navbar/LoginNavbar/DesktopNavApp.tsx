import Image from "next/image";
import ExploreLogo from "@/assets/svg/NavbarSvg/iExploreLogoSvg.svg";
import Link from "next/link";

const DesktopNavApp = () => {
  return (
    <header className="fixed top-0 w-screen z-50 hidden lg:flex items-center justify-between px-14 py-4 bg-brandGold ">
      <Link href="/admin/">
        <Image
          src={ExploreLogo}
          alt="iExploreLogo.png"
          height={60}
          width={60}
        />
      </Link>
    </header>
  );
};

export default DesktopNavApp;
