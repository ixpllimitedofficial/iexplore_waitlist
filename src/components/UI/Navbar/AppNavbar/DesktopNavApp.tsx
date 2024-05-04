import Image from "next/image";
import ExploreLogo from "@/assets/svg/NavbarSvg/iExploreLogoSvg.svg";
import Link from "next/link";

const DesktopNavApp = () => {
  return (
    <header className="fixed top-0 w-screen z-50 hidden lg:flex items-center justify-between px-20 py-4 bg-gold-600 ">
      <Link href="/user/">
        <Image
          src={ExploreLogo}
          alt="iExploreLogo.png"
          height={60}
          width={60}
        />
      </Link>

      {1 > 2 && (
        <nav className="flex items-center gap-10">
          <Link href="/user/" className="text-[#212121] text-lg font-medium">
            Home
          </Link>
          <Link href="/user/" className="text-[#212121] text-lg font-medium">
            Explore
          </Link>
          <Link href="/user/" className="text-[#212121] text-lg font-medium">
            Saved
          </Link>
          <Link href="/user/" className="text-[#212121] text-lg font-medium">
            Feed
          </Link>
          <Link href="/user/" className="text-[#212121] text-lg font-medium">
            Drinks
          </Link>
        </nav>
      )}

      {1 > 2 && (
        <nav className="flex items-center gap-7">
          <Link
            href="/user/onboarding?flow=login"
            className="text-[#212121] text-lg font-medium"
          >
            Login
          </Link>
          <Link
            href="/user/onboarding?flow=signup"
            className="bg-[#212121] text-gold-500 text-lg px-4 py-2 rounded-xl font-extrabold"
          >
            Signup
          </Link>
        </nav>
      )}
    </header>
  );
};

export default DesktopNavApp;
