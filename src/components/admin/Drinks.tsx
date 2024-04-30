import React from "react";
import Image from "next/image";
import PlusIconSvg from "@/assets/svg/AdminIconsSvg/PlusIconSvg.svg";
import ArrowRightIconSvg from "@/assets/svg/AdminIconsSvg/ArrowRightIconSvg.svg";
import MySpotCard from "../UI/AdminUI/Cards/MySpotCard";
import DrinkCard from "../UI/AdminUI/Cards/DrinkCard";

const Drinks = () => {
  return (
    <section className="px-14 pt-0 mb-10">
      {/* heading */}
      <div className=" flex justify-between">
        <h1 className="text-[22px] md:text-3xl font-bold">Drinks</h1>

        <button className="bg-gold-500 text-[#212121] px-3 py-2 rounded-xl flex justify-around items-center gap-1 font-medium">
          <p className="text-sm md:text-lg">Add Drinks</p>
          <Image src={PlusIconSvg} alt="PlusIconSvg" className="h-[15px]" />
        </button>
      </div>

      {/*  */}
      <div className="mt-5 flex gap-5 overflow-x-scroll no-scrollbar whitespace-nowrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((card) => {
          return <DrinkCard key={card} />;
        })}
      </div>

      <div className="flex justify-center mt-5">
        <button className="bg-gold-500 text-[#212121] px-3 py-2 rounded-xl flex justify-around items-center gap-1 font-medium self-center">
          <p className="text-lg">View all drinks</p>
          <Image
            src={ArrowRightIconSvg}
            alt="ArrowRightIconSvg"
            className="h-[20px]"
          />
        </button>
      </div>
    </section>
  );
};

export default Drinks;
