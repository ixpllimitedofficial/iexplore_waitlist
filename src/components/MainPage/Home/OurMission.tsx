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

const OurMission = () => {
  // <section className="md:w-[60%] mx-auto">
  return (
    <Carousel
      className="py-20 relative md:w-[60%] mx-auto"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="md:mx-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="grid grid-cols-2 items-center gap-5">
            <div className="relative col-span-full md:col-span-1">
              <Image
                src={OurPurposeImage}
                alt="OurPurposeImage"
                className="md:h-[500px] w-auto mx-auto"
              />
            </div>
            <div className="mt-10 md:mt-0 flex flex-col gap-3 col-span-full md:col-span-1 text-center md:text-left">
              <h3 className={`text-5xl ${anton.className} `}>
                OUR <span className="text-gold-500">PURPOSE</span>
              </h3>
              <p className="text-[#D1D1D1] text-lg w-4/5">
                We exist to bridge the gap between explorers and the city’s
                nightlife businesses.
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-gold-500 text-black h-12 w-12 left-3 top-[37%] md:-left-12 md:top-1/2" />
      <CarouselNext className="bg-gold-500 text-black h-12 w-12 right-5 top-[37%] md:-right-12 md:top-1/2" />
    </Carousel>
  );
  {
    /* </section> */
  }
};

export default OurMission;
