"use client";

import * as React from "react";

import { anton } from "@/app/fonts";
import Autoscroll from "embla-carousel-auto-scroll";

import Image from "next/image";
import ExploreExperienceImg from "@/assets/img/MainWebsite/ExploreExperienceImg.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/UI/carousel";

const ExploreTheExperience = () => {
  const plugin = React.useRef(Autoscroll({ speed: 3 }));

  return (
    <section className="bg-gold-500 py-10 md:py-14">
      <h3 className={`text-[#0E1111] text-5xl text-center ${anton.className} `}>
        EXPLORE THE EXPERIENCE!
      </h3>

      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="mt-5"
      >
        <CarouselContent className="relative">
          {Array.from({ length: 7 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/3"
            >
              <Image
                src={ExploreExperienceImg}
                alt="ExploreExperienceImg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ExploreTheExperience;
