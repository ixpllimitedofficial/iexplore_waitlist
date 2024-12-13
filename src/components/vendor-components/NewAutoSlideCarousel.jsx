"use client";
import { useState, useEffect } from "react";
import Image from "next/image"; // Import Next.js Image component
import OnboardingBgImage from "@/assets/img/OnboardingBgImage.png";
import OnboardingImage2 from "@/assets/img/OnboardingBgImage2.png";
import styles from './page.module.css';
function NewAutoSlideCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      text: "Connect with places made for you to have fun",
      image: OnboardingImage2,
    },
    {
      text: "Manage location data and spot overview easily",
      image: OnboardingBgImage,
    },
    {
      text: "Connect with places made for you to have fun",
      image: OnboardingImage2,
    },
  ];

  // Auto slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="relative w-full mx-auto">
      {/* Carousel Items */}
      <div className="relative rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.text}
              className="w-full h-[500px] object-cover"
              width={1920} // Add the width
              height={500} // Add the height
            />
            <div className={`${styles.indicator_text}absolute  left-6 bg-opacity-50 text-3xl text-white p-4`}>
              <h3 className="text-xl">{slide.text}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      <div className={` ${styles.indicator} absolute left-1/2 transform -translate-x-1/2 flex space-x-2`}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-10 h-3 rounded-lg ${
              index === activeIndex ? "bg-gold-500" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default NewAutoSlideCarousel;
