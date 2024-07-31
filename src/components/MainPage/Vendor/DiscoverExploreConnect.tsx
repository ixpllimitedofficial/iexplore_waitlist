"use client";

import * as React from "react";
import { anton } from "@/app/fonts";
import Image from "next/image";
import Autoscroll from "embla-carousel-auto-scroll";

import { Card, CardContent } from "@/components/UI/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/UI/carousel";
import { start } from "repl";

const DiscoverExploreConnect = () => {
  const plugin = React.useRef(Autoscroll());

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full my-14 absolute bottom-12"
    >
      <CarouselContent>
        {[
          { name: "DISCOVER", id: 1 },
          { name: "-", id: 2 },
          { name: "CONNECT", id: 3 },
          { name: "-", id: 4 },
          { name: "EXPLORE", id: 5 },
          { name: "-", id: 6 },
          { name: "DISCOVER", id: 7 },
          { name: "-", id: 8 },
          { name: "CONNECT", id: 9 },
          { name: "-", id: 10 },
          { name: "EXPLORE", id: 11 },
          { name: "-", id: 12 },
        ].map((item: any) => (
          <CarouselItem
            key={item.id}
            className="md:basis-1/6 flex items-center justify-center p-6"
          >
            <h1 className={`text-[#F2F1E8] text-7xl ${anton.className}`}>
              {item.name}
            </h1>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default DiscoverExploreConnect;
