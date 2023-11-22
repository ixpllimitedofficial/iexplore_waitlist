import Image from "next/image";
import ExploreLogo from "@/assets/img/iExploreLogo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-20 py-4 bg-[#FDF0DF] ">
      <Image src={ExploreLogo} alt="iExploreLogo.png" height={60} width={60} />

      <nav className="flex items-center gap-10">
        <Link href="/" className="text-[#212121]">
          Home
        </Link>
        <Link href="/" className="text-[#212121]">
          Explore
        </Link>
        <Link href="/" className="text-[#212121]">
          Saved
        </Link>
        <Link href="/" className="text-[#212121]">
          Feed
        </Link>
        <Link href="/" className="text-[#212121]">
          Drinks
        </Link>
      </nav>

      <nav className="flex items-center gap-7">
        <Link href="/onboarding?flow=login" className="text-[#212121]">
          Login
        </Link>
        <Link
          href="/onboarding?flow=signup"
          className="bg-[#212121] text-[#E1BD8A] px-4 py-2 rounded-xl font-extrabold"
        >
          Signup
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
