"use client";

import HomeImage from "@/assets/img/HomeImage.png";
import AppButton from "@/components/UI/Button/AppButton";

const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${HomeImage.src})` }}
      className="relative flex items-center justify-center h-[250px] md:h-[400px] lg:h-[600px] w-[90vw] md:w-[85vw] lg:w-[80vw] mx-auto mb-10 rounded-3xl bg-no-repeat bg-cover bg-center "
    >
      <div className="absolute w-[70%] bottom-5 md:bottom-10 lg:bottom-16 flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-center">
          FIND SOMETHING <br /> <span className="text-[#E1BD8A] italic">GREAT</span> TO
          DO
        </h1>

        <AppButton
          btnText="Find an event"
          className="relative mt-3 lg:mt-5 text-sm md:text-base"
          handleClick={() => alert("Find event!")}
        />

        <h1></h1>
      </div>
    </section>
  );
};

export default HeroSection;
