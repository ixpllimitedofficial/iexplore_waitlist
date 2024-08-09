import Image from "next/image";
import { anton } from "@/app/fonts";
import { Button } from "@/components/UI/button";

import DesktopApp from "@/assets/img/MainWebsite/DesktopApp3.png";
import VendorImages from "@/assets/img/MainWebsite/VendorImages.png";

import DiscoverExploreConnect from "./DiscoverExploreConnect";

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col gap-3 items-center text-center px-4">
        <h1 className={`text-gold-500 text-5xl md:text-7xl ${anton.className} md:w-[70%]`}>
          BECOME A VENDOR AND ATTRACT MORE GUESTS WITH IEXPLORE TODAY
        </h1>
          <p className="md:text-lg text-[#F6F6F6] md:w-[55%]">
          Join the nightlife revolution! Transform your venue into a nightlife
          hotspot, connect with thrill-seekers and boost your business
          engagement with iExplore vendor.
        </p>

        <div className="flex items-center gap-2 md:gap-4">
          <Button className="bg-gold-500 transition duration-200 hover:bg-white text-[#322016] px-6 md:px-10 py-6 rounded-3xl font-bold text-base">
            Get Started
          </Button>

          <Button className="bg-[#4D4D4D] transition duration-200 hover:bg-[#2b2a2a] text-[#F6F6F6] px-6 md:px-10 py-6 rounded-3xl font-bold text-base">
            Learn More
          </Button>
        </div>
      </section>

      <div className="relative w-full mt-10 md:mt-16">
        <Image src={DesktopApp} alt="DesktopApp" className="mt-5 w-[95%] md:w-[60%] mx-auto" />

        <div className="absolute -bottom-5 md:bottom-14 w-full">
          <DiscoverExploreConnect />
        </div>
      </div>

      <Image src={VendorImages} alt="VendorImages" className="hidden md:block w-full" />
    </>
  );
};

export default HeroSection;
