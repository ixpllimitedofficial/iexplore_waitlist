import Link from "next/link";
import Image from "next/image";
import ExploreLogo from "@/assets/svg/NavbarSvg/iExploreLogoSvg.svg";

const DesktopNavLP = () => {
  return (
    <header className="absolute top-0 w-screen z-50 hidden lg:flex items-center justify-between px-20 pt-8 bg-transparent ">
      <Link href="/">
        <Image
          src={ExploreLogo}
          alt="iExploreLogo.png"
          height={65}
          width={65}
        />
      </Link>

      <nav className="flex items-center gap-20">
        <Link
          href="/"
          className="text-[#E1BD8A] text-xl font-medium border-b-2 border-[#E1BD8A]"
        >
          Home
        </Link>
        <Link href="/" className="text-[#E1BD8A] text-xl font-light">
          About Us
        </Link>
        <Link href="/" className="text-[#E1BD8A] text-xl font-light">
          User
        </Link>
        <Link href="/" className="text-[#E1BD8A] text-xl font-light">
          Vendor
        </Link>
        <Link href="/" className="text-[#E1BD8A] text-xl font-light">
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default DesktopNavLP;
