import Image from "next/image";
import ExploreLogo from "@/assets/svg/NavbarSvg/iExploreLogoSvg.svg";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <header className="fixed top-0 w-screen z-50 hidden lg:flex items-center justify-between px-20 py-4 bg-[#E1BD8A] ">
      <Image src={ExploreLogo} alt="iExploreLogo.png" height={60} width={60} />

      <nav className="flex items-center gap-10">
        <Link href="/" className="text-[#212121] text-[18px] font-medium">
          Home
        </Link>
        <Link href="/" className="text-[#212121] text-[18px] font-medium">
          Explore
        </Link>
        <Link href="/" className="text-[#212121] text-[18px] font-medium">
          Saved
        </Link>
        <Link href="/" className="text-[#212121] text-[18px] font-medium">
          Feed
        </Link>
        <Link href="/" className="text-[#212121] text-[18px] font-medium">
          Drinks
        </Link>
      </nav>

      <nav className="flex items-center gap-7">
        <Link href="/onboarding?flow=login" className="text-[#212121] text-[18px] font-medium">
          Login
        </Link>
        <Link
          href="/onboarding?flow=signup"
          className="bg-[#212121] text-[#E1BD8A] text-[18px] px-4 py-2 rounded-xl font-extrabold"
        >
          Signup
        </Link>
      </nav>
    </header>
  );
};

export default DesktopNav;
