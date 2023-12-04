import Image from "next/image";
import ExploreLogo from "@/assets/img/iExploreLogo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-20 py-4 bg-[#FDF0DF] ">
      <Image src={ExploreLogo} alt="iExploreLogo.png" height={60} width={60} />

      <nav className="flex items-center gap-10">
        <Link href="/" className="text-[#212121] text-xl">
          Home
        </Link>
        <Link href="/" className="text-[#212121] text-xl">
          Explore
        </Link>
        <Link href="/" className="text-[#212121] text-xl">
          Saved
        </Link>
        <Link href="/" className="text-[#212121] text-xl">
          Feed
        </Link>
        <Link href="/" className="text-[#212121] text-xl">
          Drinks
        </Link>
      </nav>

      <nav className="flex items-center gap-7">
        <Link href="/onboarding?flow=login" className="text-[#212121] text-xl">
          Login
        </Link>
        <Link
          href="/onboarding?flow=signup"
          className="bg-[#212121] text-[#E1BD8A] text-xl px-4 py-2 rounded-xl font-extrabold"
        >
          Signup
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
