import Image from "next/image";
import { anton } from "@/app/fonts";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";

import DesktopApp from "@/assets/img/MainWebsite/DesktopApp.png";
import VendorImages from "@/assets/img/MainWebsite/VendorImages.png";

import DiscoverExploreConnect from "./DiscoverExploreConnect";

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col gap-5 items-center text-center">
        <h1 className={`text-gold-500 text-7xl ${anton.className} w-[80%]`}>
          BECOME A VENDOR AND ATTRACT MORE GUESTS WITH IEXPLORE TODAY
        </h1>
        <p className="text-lg w-[55%]">
          Join the nightlife revolution! Transform your venue into a nightlife
          hotspot, connect with thrill-seekers and boost your business
          engagement with iExplore vendor.
        </p>

        <div className="flex items-center gap-4">
          <Button className="bg-gold-500 hover:bg-gold-600 text-[#322016] px-10 py-6 rounded-3xl font-bold text-base">
            Get Started
          </Button>

          <Button className="bg-[#4D4D4D] hover:bg-[#4D4D4D] text-[#F6F6F6] px-10 py-6 rounded-3xl font-bold text-base">
            Learn More
          </Button>
        </div>

        {/* <Image src={DesktopApp} alt="DesktopApp" className="mt-5" /> */}
      </section>

      <div className="relative w-full">
        <Image src={DesktopApp} alt="DesktopApp" className="mt-5 w-full" />

        <DiscoverExploreConnect />
      </div>

      <Image src={VendorImages} alt="VendorImages" className="w-full mt-5" />
    </>
  );
};

export default HeroSection;
