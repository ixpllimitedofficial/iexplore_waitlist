"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import DrinkImage from "@/assets/img/UserWebappImages/DrinkImage.png";
import BookmarkIcon from "@/assets/svg/BookmarkIcon.svg";
import { Button } from "@/components/UI/button";

const DrinkCard = () => {
  const router = useRouter();

  const handleClick = () => {
    alert("Drink claimed");
  };

  return (
    <div
      className="relative bg-[#4D4D4D66] px-2 py-3 rounded-3xl flex flex-col"
    >
      {/* badge */}
      <h1 className="absolute bg-gold-500 text-black px-4 py-1 rounded-3xl right-7 top-7 font-bold">
        Free
      </h1>

      <div className="w-full h-[200px] overflow-hidden rounded-3xl">
        <Image
          src={DrinkImage}
          alt="drink image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between mt-4 mb-1 px-2">
        <p className="text-xl font-bold">Johnnie Walker Black Label</p>

        <Image src={BookmarkIcon} alt="BookmarkIcon" height={25} />
      </div>

      <div className="px-2 flex items-center my-1">
        <p className="text-xl font-bold">N232,000</p>
        <p className="pl-2 text-lg text-[#D1D1D1]">Available at Club Quilox</p>
      </div>

      <Button
        className="bg-gold-500 hover:bg-white transition duration-200 text-[#322016] px-10 py-5 rounded-3xl font-bold text-lg mt-3"
        onClick={handleClick}
      >
        Claim drink
      </Button>
    </div>
  );
};

export default DrinkCard;
