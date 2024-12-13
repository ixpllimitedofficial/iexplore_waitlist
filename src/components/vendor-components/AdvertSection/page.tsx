"use client";
import React from "react";
import Image from "next/image";
import AdvertImage from "@/assets/img/VendorPage/advertImage.png";
import FireSvg from "@/assets/svg/VendorSvg/fireSvg.svg";
import Button from "@/components/UI/Button/AppButton";

const AdvertSection = () => {
  return (
    <div className={`h-40 md:h-64 w-full my-9 bg-black rounded-lg`}>
      <Image
        src={AdvertImage}
        alt="advert image"
        className="absolute h-40 md:h-64 w-[50%] right-6 object-cover rounded-lg"
      />
      <div className="relative p-2 md:p-10 w-full">
        <div className="mt-1 md:mt-5 flex gap-2 items-center md:mb-2">
          <h1 className="text-lg md:text-4xl font-bold">Clubb Max is Opened</h1>
          <Image src={FireSvg} alt="fire svg"/>
        </div>
        <p className="text-[#B0B0B0] text-sm w-[80%] md:text-lg md:mb-3 md:w-[50%]">
          Mainland hottes bar and lounge is here. get the best lagos mainland
          nightlife and experience at club max.
        </p>
        <Button btnText="Visit Spot" className="rounded-full !p-2 md:!p-3" />
      </div>
    </div>
  );
};
export default AdvertSection;
