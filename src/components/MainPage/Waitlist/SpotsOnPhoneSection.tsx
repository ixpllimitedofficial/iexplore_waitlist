"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/UI/carousel";
import Phone from "@/assets/img/MainWebsite/Phone.png";
import SpotPhoneCard from "./SpotPhoneCard";

const SpotsOnPhoneSection = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    
    <Carousel
      className="mt-60 mb-96 relative"
      plugins={[plugin.current]}
      opts={{
        loop: true,
      }}
    >
      <Image
        src={Phone}
        alt="Phone"
        className="absolute top-[70%] left-1/2 w-[80vw] max-w-[370px] transform -translate-x-1/2 -translate-y-1/2"
      />

      <CarouselContent className="relative -ml-1">
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem key={index} className="pl-3 md:basis-1/3 xl:basis-1/4">
            <SpotPhoneCard />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SpotsOnPhoneSection;
