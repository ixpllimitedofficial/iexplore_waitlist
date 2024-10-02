"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import DrinkImage from "@/assets/img/UserWebappImages/DrinkImage.png";
import BookmarkIcon from "@/assets/svg/BookmarkIcon.svg";
import { Button } from "@/components/UI/button";

const SavedDrinksCard = () => {
  const router = useRouter();

  const handleClick = () => {
    alert("Drink claimed");
  };

  return (
    <div className="relative bg-[#4D4D4D66] px-2 py-3 rounded-3xl flex flex-col">
      <div className="w-full h-[200px] overflow-hidden rounded-3xl">
        <Image
          src={DrinkImage}
          alt="drink image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between mt-4 mb-1 px-2">
        <p className="text-xl font-bold">Johnnie walker Black Label</p>
      </div>

      <div className="px-2 flex items-center my-1">
        <p className="pl-2 text-lg text-[#D1D1D1]">Ikeja | 11pm - 4am</p>
      </div>

      <Button className="bg-gold-500 hover:bg-white transition duration-200 text-[#322016] px-10 py-5 rounded-3xl font-bold text-lg mt-4">
        View drink
      </Button>

      <Button className="bg-transparent hover:bg-transparent text-gold-500 transition duration-200 px-10 py-5 rounded-3xl font-bold text-lg mt-2">
        Remove drink
      </Button>
    </div>
  );
};

export default SavedDrinksCard;
