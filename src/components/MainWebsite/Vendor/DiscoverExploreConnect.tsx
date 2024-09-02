"use client";

import * as React from "react";
import { anton } from "@/app/fonts";
import Autoscroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/UI/carousel";

const DiscoverExploreConnect = () => {
  const plugin = React.useRef(Autoscroll({ speed: 3 }));

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
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
          { name: "DISCOVER", id: 13 },
          { name: "-", id: 14 },
          { name: "CONNECT", id: 15 },
          { name: "-", id: 16 },
          { name: "EXPLORE", id: 17 },
          { name: "-", id: 18 },
        ].map((item: any) => (
          <CarouselItem
            key={item.id}
            className="basis-1/3 md:basis-1/6 flex items-center justify-center"
          >
            <h1 className={`text-[#F2F1E8] text-5xl ${anton.className}`}>
              {item.name}
            </h1>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default DiscoverExploreConnect;
