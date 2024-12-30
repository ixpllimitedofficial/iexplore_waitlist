"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface SliderGalleryProps {
  images: {
    src: string | StaticImageData;
    alt: string;
    height: number;
    width: number;
  }[];
}

const SliderGallery: React.FC<SliderGalleryProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [isThumbsInitialized, setIsThumbsInitialized] = useState(false);

  useEffect(() => {
    if (thumbsSwiper) {
      setIsThumbsInitialized(true);
    }
  }, [thumbsSwiper]);

  if (!images || images.length === 0) {
    return <div>No images to display.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Slider */}
      {isThumbsInitialized && (
        <div className="w-full">
          <Swiper navigation thumbs={{ swiper: thumbsSwiper }} className="mb-4">
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                {typeof image.src === "string" ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={30}
                    className="w-full h-52 rounded-lg object-cover"
                  />
                ) : (
                  <Image
                    src={image.src.src}
                    alt={image.alt}
                    width={800}
                    height={30}
                    className="w-full h-52 rounded-lg object-cover"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      {/* Thumbnails */}
      <div className="w-full">
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          spaceBetween={10}
          watchSlidesProgress
          className="cursor-pointer"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              {typeof image.src === "string" ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={100}
                  height={64}
                  className="w-[50px] h-[50px] rounded-md border border-gray-300 object-cover"
                />
              ) : (
                <Image
                  src={image.src.src}
                  alt={image.alt}
                  width={100}
                  height={64}
                  className="w-[50px] h-[50px] rounded-md border border-gray-300 object-cover"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderGallery;
