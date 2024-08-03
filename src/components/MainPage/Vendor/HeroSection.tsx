import Image from "next/image";
import { anton } from "@/app/fonts";
import { Button } from "@/components/UI/button";

import DesktopApp from "@/assets/img/MainWebsite/DesktopApp.png";
import VendorImages from "@/assets/img/MainWebsite/VendorImages.png";

import DiscoverExploreConnect from "./DiscoverExploreConnect";

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col gap-5 items-center text-center">
        <h1 className={`text-gold-500 text-6xl ${anton.className} w-[70%]`}>
          BECOME A VENDOR AND ATTRACT MORE GUESTS WITH IEXPLORE TODAY
        </h1>
          <p className="text-lg text-[#F6F6F6] w-[55%]">
          Join the nightlife revolution! Transform your venue into a nightlife
          hotspot, connect with thrill-seekers and boost your business
          engagement with iExplore vendor.
        </p>

        <div className="flex items-center gap-4">
          <Button className="bg-gold-500 transition duration-200 hover:bg-white text-[#322016] px-10 py-6 rounded-3xl font-bold text-base">
            Get Started
          </Button>

          <Button className="bg-[#4D4D4D] transition duration-200 hover:bg-[#2b2a2a] text-[#F6F6F6] px-10 py-6 rounded-3xl font-bold text-base">
            Learn More
          </Button>
        </div>
      </section>

      <div className="relative w-full mt-16">
        <Image src={DesktopApp} alt="DesktopApp" className="mt-5 w-full" />

        <div className="absolute bottom-14 w-full">
          <DiscoverExploreConnect />
        </div>
      </div>

      <Image src={VendorImages} alt="VendorImages" className="w-full" />
    </>
  );
};

export default HeroSection;
