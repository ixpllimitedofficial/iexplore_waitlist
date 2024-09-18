import Image from "next/image";
import { anton } from "@/app/fonts";
import { Button } from "@/components/UI/button";

import DesktopApp from "@/assets/img/MainWebsite/DesktopApp3.png";
import VendorImages from "@/assets/img/MainWebsite/VendorImages.png";

import DiscoverExploreConnect from "./DiscoverExploreConnect";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section
        className="flex flex-col gap-5 items-center text-center px-2"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000"
      >
        <h1
          className={`text-gold-500 text-5xl md:text-6xl ${anton.className} md:w-[85%] lg:w-[70%]`}
        >
          BECOME A VENDOR AND ATTRACT MORE GUESTS WITH IEXPLORE TODAY
        </h1>
        <p className="md:text-xl text-[#F6F6F6] md:w-4/5 lg:w-[55%]">
          Join the night-life revolution! Transform your venue into a nightlife
          hotspot, connect with thrill-seekers and boost your business
          engagement with iExplore vendor.
        </p>

        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/">
            <Button className="bg-gold-500 transition duration-200 hover:bg-white text-[#322016] px-7 py-5 md:px-10 md:py-6 rounded-3xl font-bold md:text-base">
              Join Waitlist
            </Button>
          </Link>

          <Link href="/about-us">
            <Button className="bg-[#4D4D4D] transition duration-200 hover:bg-[#2b2a2a] text-[#F6F6F6] px-7 py-5 md:px-10 md:py-6 rounded-3xl font-bold md:text-base">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      <div className="relative w-full mt-10 lg:mt-16">
        <Image
          src={DesktopApp}
          alt="DesktopApp"
          className="mt-5 w-[95%] md:w-[60%] mx-auto"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="2000"
        />

        <div className="absolute bottom-2 md:bottom-7 w-full">
          <DiscoverExploreConnect />
        </div>
      </div>

      <Image
        src={VendorImages}
        alt="VendorImages"
        className="hidden md:block w-full"
      />
    </>
  );
};

export default HeroSection;
