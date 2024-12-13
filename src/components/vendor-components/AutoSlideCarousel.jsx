"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import OnboardingBgImage from "@/assets/img/OnboardingBgImage.png";
import OnboardingImage2 from "@/assets/img/OnboardingBgImage2.png";
import style from "./page.module.css";

const AutoSlideCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: OnboardingBgImage,
      text: "Connect with places made for you to have fun",
    },
    {
      image: OnboardingImage2,
      text: "Manage location data and spot overview easily",
    },
    {
      image: OnboardingBgImage,
      text: "Connect More with new places made for you to have fun",
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
            <div className="absolute bottom-10 left-2 right-2 bg-black/50 text-white py-2">
              <p className={`${style.edit} text-2xl  font-extrabold`}>
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Indicator */}
      <div
        className={`${style.indicator} absolute left-2 right-0 flex justify-center gap-2 z-50`}
      >
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-1 w-10 rounded-full transition-all ${
              index === activeIndex ? "bg-gold-500" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlideCarousel;
