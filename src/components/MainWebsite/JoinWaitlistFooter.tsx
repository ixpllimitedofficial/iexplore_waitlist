"use client";

import * as React from "react";

import { anton } from "@/app/fonts";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/UI/carousel";

const JoinWaitlistFooter = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  return (
    <section className="bg-[#F4EBCD] px-2 md:px-10 py-4">
      <div className="flex items-center justify-between gap-5">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true,
          }}
          orientation="vertical"
        >
          <CarouselContent className="-mt-1 h-[80px] md:h-[70px]">
            {[
              { name: "BE PART OF THE EXPERIENCE!", id: 1 },
              { name: "JOIN THE WAITLIST NOW", id: 2 },
            ].map((item: any) => (
              <CarouselItem key={item.id} className="p-3">
                <h3 className={`text-[#322016] text-3xl md:text-5xl lg:text-6xl ${anton.className}`}>
                  {item.name}
                </h3>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Link
          href="/"
          className="bg-[#0E1111] hover:bg-[#0E1111] text-[#F4EBCD] h-16 w-16 md:h-auto md:w-auto p-3 md:p-6 rounded-full font-extrabold"
        >
          <ArrowRightIcon className="h-10 w-10 md:h-16 md:w-16 text-white transition-transform duration-200" />
        </Link>
      </div>
    </section>
  );
};

export default JoinWaitlistFooter;
