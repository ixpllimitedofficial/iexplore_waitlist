"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/UI/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/UI/carousel";

import PhoneCard from "@/assets/img/MainWebsite/PhoneCard.png";
import Phone from "@/assets/img/MainWebsite/Phone.png";

const SpotsOnPhoneSection = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      className="mt-60 mb-96 relative"
      plugins={[plugin.current]}
      opts={{
        loop: true,
      }}
        // onMouseEnter={plugin.current.stop}
      //   onMouseLeave={plugin.current.reset}
    >
      <Image
        src={Phone}
        alt="Phone"
        // className="absolute top-[70%] left-1/2 w-[370px] transform -translate-x-1/2 -translate-y-1/2"
        className="absolute top-[70%] left-1/2 w-[90%] max-w-[370px] transform -translate-x-1/2 -translate-y-1/2"
      />
      {/* <CarouselContent className="-ml-1">
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/4">
            <Image
              src={PhoneCard}
              alt="PhoneCard"
              className="w-[300px] h-auto"
            />
          </CarouselItem>
        ))}
      </CarouselContent> */}
      <CarouselContent className="relative -ml-1">
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
            <Image
              src={PhoneCard}
              alt="PhoneCard"
              className="w-[80%] max-w-[300px] h-auto mx-auto"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default SpotsOnPhoneSection;
