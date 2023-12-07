"use client";

import HomeImage from "@/assets/img/HomeImage.png";
import AppButton from "@/components/UI/Button/AppButton";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${HomeImage.src})` }}
      className="relative flex items-center justify-center h-[600px] w-[85vw] rounded-3xl bg-no-repeat bg-cover bg-center mx-auto mb-10"
    >
      <div className="absolute w-[70%] bottom-16 text-center">
        <h1 className=" font-bold text-7xl text-center">
          FIND SOMETHING <span className="text-[#E1BD8A] italic">GREAT</span> TO
          DO
        </h1>

        <AppButton
          btnText="Find an event"
          className="relative mt-5 text-2xl"
          handleClick={() => alert("Find event!")}
        />
      </div>
    </div>
  );
};

export default HeroSection;
