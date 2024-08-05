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

import OurPurposeImage from "@/assets/img/MainWebsite/OurPurposeImage1.png";

const OurMission = () => {
  return (
    <section className="w-[60%] mx-auto">
      <Carousel
        className="py-20 relative"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="mx-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="grid grid-cols-2 items-center">
              <div className="relative">
                <Image
                  src={OurPurposeImage}
                  alt="OurPurposeImage"
                  className="mx-auto"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className={` text-5xl ${anton.className} `}>OUR PURPOSE</h3>
                <p className="text-[#D1D1D1] text-lg">
                  We exist to bridge the gap between explorers and the city’s
                  nightlife businesses.
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-gold-500 text-black h-12 w-12" />
        <CarouselNext className="bg-gold-500 text-black h-12 w-12" />
      </Carousel>
    </section>
  );
};

export default OurMission;
