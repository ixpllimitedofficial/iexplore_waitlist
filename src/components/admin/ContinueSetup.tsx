import React from "react";
import CancelIconSvg from "@/assets/svg/AdminIconsSvg/CancelIconSvg.svg";
import StoreIconSvg from "@/assets/svg/AdminIconsSvg/StoreIconSvg.svg";
import DrinkIconSvg from "@/assets/svg/AdminIconsSvg/DrinkIconSvg.svg";

import Image from "next/image";

const ContinueSetup = () => {
  return (
    <div className="bg-brandDarkNeutral w-[50%] mt-5 ml-10 h-[350px] p-5 rounded-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-[22px] md:text-2xl font-bold">
          Continue business set up
        </h1>

        <Image src={CancelIconSvg} alt="CancelIconSvg" className="h-[25px]" />
      </div>

      <div className="flex gap-2 items-center mt-5">
        <Image
          src={StoreIconSvg}
          alt="StoreIconSvg"
          className="h-[25px] bg-[#DEDEDE]"
        />

        <div>
          <p className="font-bold text-xl">Setup business operations</p>
          <p className=" text-base text-[#999999]">
            Add more information about your business
          </p>
        </div>
      </div>

      <div className="flex gap-2 items-center mt-5">
        <Image
          src={DrinkIconSvg}
          alt="DrinkIconSvg"
          className="h-[25px] bg-[#DEDEDE]"
        />

        <div>
          <p className="font-bold text-xl">Update your drinks catalogue</p>
          <p className=" text-base text-[#999999]">
            Add different types of drink you have available
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContinueSetup;
