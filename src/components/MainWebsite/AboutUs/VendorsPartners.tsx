import Image from "next/image";
import { anton } from "@/app/fonts";
import HotBox from "@/assets/img/MainWebsite/AboutUs/HotBox.png";
import FlyingFish from "@/assets/img/MainWebsite/AboutUs/FlyingFish.png";
import ClubQuilox from "@/assets/img/MainWebsite/AboutUs/ClubQuilox.png";
import StageLagos from "@/assets/img/MainWebsite/AboutUs/StageLagos.png";
import Link from "next/link";

const BulletPointSvg = (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4" cy="4" r="4" fill="#322016" />
  </svg>
);

const VendorsPartners = () => {
  return (
    <>
      <section className="mt-16">
        <div className="flex flex-col justify-center gap-3">
          <h1
            className={`text-gold-500 text-4xl md:text-6xl ${anton.className} text-center`}
          >
            VENDORS & PARTNERS
          </h1>
          <p className="text-lg md:w-3/5 mx-auto text-center">
            We partner with the best locations to make you have the best time
            and provide the best experience where ever you are.
          </p>
        </div>

        {/* Hot box */}
        <div className="border-t-2 border-[#979797] w-full mt-5"></div>

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-12 my-5">
          <div className="bg-gold-500 text-brandDark px-4 py-2 rounded-3xl flex items-center gap-2">
            {BulletPointSvg}
            <p className="font-semibold">Vendor</p>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xl md:text-2xl">Hot Box, Lagos</p>

            <Image src={HotBox} alt="HotBox" className="h-[100px] w-auto" />
          </div>
        </div>

        {/* Flying fish */}
        <div className="border-t-2 border-[#979797] w-full mt-5"></div>

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-12 my-5">
          <div className="bg-gold-500 text-brandDark px-4 py-2 rounded-3xl flex items-center gap-2">
            {BulletPointSvg}
            <p className="font-semibold">Vendor</p>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xl md:text-2xl">Flying Fish</p>

            <Image
              src={FlyingFish}
              alt="FlyingFish"
              className="h-[100px] w-auto"
            />
          </div>
        </div>

        {/* divider */}
        <div className="border-t-2 border-[#979797] w-full mt-5"></div>

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-12 my-5">
          <div className="bg-gold-500 text-brandDark px-4 py-2 rounded-3xl flex items-center gap-2">
            {BulletPointSvg}
            <p className="font-semibold">Vendor</p>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xl md:text-2xl">Club Quilox</p>

            <Image
              src={ClubQuilox}
              alt="ClubQuilox"
              className="h-[100px] w-auto"
            />
          </div>
        </div>

        {/* divider */}
        <div className="border-t-2 border-[#979797] w-full mt-5"></div>

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-12 my-5">
          <div className="bg-gold-500 text-brandDark px-4 py-2 rounded-3xl flex items-center gap-2">
            {BulletPointSvg}
            <p className="font-semibold">Vendor</p>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xl md:text-2xl">Stage Lagos</p>

            <Image
              src={StageLagos}
              alt="StageLagos"
              className="h-[100px] w-auto"
            />
          </div>
        </div>

        {/* divider */}
        <div className="border-t-2 border-[#979797] w-full mt-5 mb-10"></div>
      </section>

      <div className="flex justify-center mb-16">
        <Link
          href="/all-vendors"
          className="bg-gold-500 text-brandDark px-4 py-2 rounded-3xl mx-auto font-bold"
        >
          View all vendors
        </Link>
      </div>
    </>
  );
};

export default VendorsPartners;
