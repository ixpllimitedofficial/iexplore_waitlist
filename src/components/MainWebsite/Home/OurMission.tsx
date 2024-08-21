import * as React from "react";

import { Card, CardContent } from "@/components/UI/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/UI/carousel";

import { anton } from "@/app/fonts";
import Image from "next/image";

import OurPurposeImage from "@/assets/img/MainWebsite/OurPurposeImage.png";
import OurMissionImage from "@/assets/img/MainWebsite/OurMissionImage.png";
import OurVisionImage from "@/assets/img/MainWebsite/OurVisionImage.png";

const OurMission = () => {
  return (
    <Carousel
      className="py-8 md:py-12 relative md:w-[60%] mx-auto"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="">
        <CarouselItem className="grid grid-cols-2 items-center md:gap-5">
          <div className="relative col-span-full lg:col-span-1">
            <Image
              src={OurPurposeImage}
              alt="OurPurposeImage"
              className="w-[85%] h-auto md:h-[500px] md:w-auto mx-auto"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-3 col-span-full lg:col-span-1 text-center lg:text-left">
            <h3 className={`text-5xl ${anton.className} `}>
              OUR <span className="text-gold-500">PURPOSE</span>
            </h3>
            <p className="text-[#D1D1D1] text-lg w-4/5">
              We exist to bridge the gap between explorers and the city’s
              nightlife businesses. 
            </p>
          </div>
        </CarouselItem>

        <CarouselItem className=" grid grid-cols-2 items-center gap-7 md:gap-5">
          <div className="relative col-span-full lg:col-span-1">
            <Image
              src={OurMissionImage}
              alt="OurMissionImage"
              className="mt-14 md:mt-0 w-[85%] h-auto md:h-[500px] md:w-auto mx-auto"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-3 col-span-full lg:col-span-1 text-center lg:text-left">
            <h3 className={`text-5xl ${anton.className} `}>
              OUR <span className="text-gold-500">MISSON</span>
            </h3>
            <p className="text-[#D1D1D1] text-lg w-4/5 md:w-full">
              To build and sustain a vibrant nightlife ecosystem where explorers
              and vendors are empowered  to seamlessly connect to the pulse of
              the city’s nightlife
            </p>
          </div>
        </CarouselItem>

        <CarouselItem className="grid grid-cols-2 items-center gap-7 md:gap-5">
          <div className="relative col-span-full lg:col-span-1">
            <Image
              src={OurVisionImage}
              alt="OurVisionImage"
              className="mt-14 md:mt-0 w-[85%] h-auto md:h-[500px] md:w-auto mx-auto"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-3 col-span-full lg:col-span-1 text-center lg:text-left">
            <h3 className={`text-5xl ${anton.className} `}>
              OUR <span className="text-gold-500">VISION</span>
            </h3>
            <p className="text-[#D1D1D1] text-lg w-4/5 md:w-full">
              To be the ultimate nightlife companion and go-to nightlife guide,
              sparking unforgettable adventures where explorers discover,
              connect, and experience the vibrant pulse of the night.
            </p>
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious className="bg-gold-500 text-black h-12 w-12 left-3 top-[37%] md:-left-12 md:top-1/2" />
      <CarouselNext className="bg-gold-500 text-black h-12 w-12 right-5 top-[37%] md:-right-12 md:top-1/2" />
    </Carousel>
  );
};

export default OurMission;
