"use client";

import HomeImage from "@/assets/img/HomeImage.png";
import LandingPageBgImage2 from "@/assets/img/LandingPage/LandingPageBgImage2.jpeg";
import AppButton from "@/components/UI/Button/AppButton";
import { Button } from "@/components/UI/button";

import { userStore } from "@/store/user";

const HeroSection = () => {
  const logoutUser = userStore((state: any) => state.isUserLoggedin);

  return (
    <section
      style={{ backgroundImage: `url(${LandingPageBgImage2.src})` }}
      className="relative flex items-center justify-center h-[250px] md:h-[400px] lg:h-[600px] w-[90vw] md:w-[85vw] lg:w-[80vw] mx-auto rounded-3xl bg-no-repeat bg-cover bg-center "
    >
      <div className="w-[70%] flex flex-col justify-center items-center gap-10 z-50">
        <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-6xl">
          DISCOVER, CONNECT, & <br />
          <span className="text-gold-500 italic font-bold">ENJOY</span> THE BEST
          NIGHT OUT IN YOUR CITY!
        </h1>

        <Button className="bg-gold-500 hover:bg-gold-500 text-black font-semibold text-lg">
          Find an event
        </Button>
      </div>

      <div className="absolute top-0 left-0 bg-[#00000088] h-full w-full"></div>
    </section>
  );
};

export default HeroSection;
