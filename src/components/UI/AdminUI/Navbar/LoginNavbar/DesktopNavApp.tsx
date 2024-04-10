import Image from "next/image";
import ExploreLogo from "@/assets/svg/NavbarSvg/iExploreLogoSvg.svg";
import Link from "next/link";

const DesktopNavApp = () => {
  return (
    <header className="fixed top-0 w-screen z-50 hidden lg:flex items-center justify-between px-14 py-4 bg-[#E1BD8A] ">
      <Link href="/admin/">
        <Image
          src={ExploreLogo}
          alt="iExploreLogo.png"
          height={60}
          width={60}
        />
      </Link>
      {/* 
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
      </nav> */}

      {/* <nav className="flex items-center gap-7"> */}
      <p className="bg-[#fff] text-[#212121] text-lg px-4 py-2 rounded-xl font-bold">
        Welcome, please log in!
      </p>
      {/* </nav> */}
    </header>
  );
};

export default DesktopNavApp;
