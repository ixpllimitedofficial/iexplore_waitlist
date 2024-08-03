"use client";

import * as React from "react";

import { anton } from "@/app/fonts";
import { Button } from "@/components/UI/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/UI/carousel";

import GetStartedImg1 from "@/assets/img/MainWebsite/GetStartedImg1.png";
import GetStartedImg2 from "@/assets/img/MainWebsite/GetStartedImg2.png";
import GetStartedImg3 from "@/assets/img/MainWebsite/GetStartedImg3.png";
import GetStartedImg4 from "@/assets/img/MainWebsite/GetStartedImg4.png";
import Image from "next/image";

const GetStarted = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  return (
    <>
      <section className="bg-gold-500 p-48 relative">
      <Image src={GetStartedImg1} alt="GetStartedImg1" className="absolute left-20 top-24 -z-9" />
      <Image src={GetStartedImg2} alt="GetStartedImg2" className="absolute right-14 top-20" />
      <Image src={GetStartedImg3} alt="GetStartedImg3" className="absolute bottom-20 left-36" />
      <Image src={GetStartedImg4} alt="GetStartedImg4" className="absolute right-44 bottom-24" />


        <div className="flex flex-col items-center gap-5 text-center">
          <h3 className={`text-[#322016] text-6xl ${anton.className}`}>
            ELEVATE YOUR BUSINESS <br /> EXPERIENCE WITH <br /> IEXPLORE VENDOR
            NOW
          </h3>
          <Button className="bg-white transition duration-300 hover:bg-[#322016] hover:text-white text-[#322016] text-lg px-7 py-6 rounded-3xl font-extrabold mx-auto mt-3">
            Get Started
          </Button>
        </div>
      </section>

      <section className="bg-[#F4EBCD] px-10 py-4">
        <div className="flex items-center justify-between gap-5">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              loop: true,
            }}
            orientation="vertical"
          >
            <CarouselContent className="-mt-1 h-[80px]">
              {[
                { name: "BE PART OF THE EXPERIENCE!", id: 1 },
                { name: "JOIN THE WAITLIST NOW", id: 2 },
              ].map((item: any) => (
                <CarouselItem key={item.id} className="p-3">
                  <h3 className={`text-[#322016] text-6xl ${anton.className}`}>
                    {item.name}
                  </h3>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Link
            href="/"
            className="bg-[#0E1111] hover:bg-[#0E1111] text-[#F4EBCD] h-auto w-auto p-6 rounded-full font-extrabold"
          >
            <ArrowRightIcon className="h-16 w-16 shrink-0 text-white transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
