import Image from "next/image";
import ExploreLogo from "@/assets/svg/NavbarSvg/iExploreTextLogoSvg.svg";
import Link from "next/link";

interface Props {
  title: string;
}
const NewDesktopNavApp: React.FC<Props> = ({ title }) => {
  return (
    <header className="fixed top-0 w-screen z-50 flex items-center gap-6 md:px-10 px-20 py-4 bg-brandDarkNeutral ">
      <Link href="/vendor-Home/" className="shadow-xl">
        <Image
          src={ExploreLogo}
          alt="iExploreLogo.png"
          height={150}
          width={150}
        />
      </Link>
      <div className="flex justify-center align-top items-center gap-2">
        <div className="w-[5px] h-[5px] bg-white rounded-xl"></div>
        <p className="text-gold-500 font-bold text-lg">{title}</p>
      </div>
    </header>
  );
};

export default NewDesktopNavApp;
