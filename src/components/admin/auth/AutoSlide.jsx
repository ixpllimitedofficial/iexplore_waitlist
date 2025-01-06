"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import AdminOnboarding from "@/assets/img/AdminOnboarding.png";
import style from "../../vendor-components/page.module.css"

const AutoSlideCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: AdminOnboarding,
      text: "Manage location data and spot overview easily",
    },
    {
      image:AdminOnboarding,
      text: "Manage location data and spot overview easily",
    },
    {
      image: AdminOnboarding,
      text: "Manage location data and spot overview easily",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full">
      {/* Slides */}
      <div className="carousel w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item w-full relative ${
              index === activeIndex ? "block" : "hidden"
            }`}
          >
            {/* Use Next.js Image */}
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover"
              layout="responsive" // Ensures proper image responsiveness
            />
            <div className={`${style.wrapperOverlay}`}></div>
            {/* Text Overlay */}
            <div className="absolute bottom-16 left-4 right-4 bg-black/50 text-white py-4 md:px-6 rounded-lg">
              <p className={`${style.edit} text-2xl font-extrabold`}>
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Indicator */}
      <div
        className={`${style.indicator} absolute md:left-0 md:right-0 flex flex-wrap justify-end md:justify-center gap-2 z-50`}
      >
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-1 w-5 rounded-full transition-all ${
              index === activeIndex ? "bg-gold-500" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlideCarousel;
