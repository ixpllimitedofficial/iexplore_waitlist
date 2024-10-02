import TopSearchBar from "@/components/user/ProfileRoute/TopSearchBar";
import Image from "next/image";
import Link from "next/link";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import SavedLocations from "@/components/user/ProfileRoute/SavedLocations";
import SavedDrinks from "@/components/user/ProfileRoute/SavedDrinks";

const page = () => {
  return (
    <>
      <div className="px-5 mb-6 flex items-center">
        <Link href="/user/profile">
          <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
        </Link>

        <div className="flex justify-center items-center gap-3 w-full">
          <p className=" font-bold text-3xl">Saved</p>
        </div>
      </div>

      <TopSearchBar />

      <SavedDrinks />
    </>
  );
};

export default page;
