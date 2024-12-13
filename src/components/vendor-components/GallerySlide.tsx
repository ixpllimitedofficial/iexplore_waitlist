"use client";
import { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import ArrowRight from "@/assets/svg/ArrowButtonRight.svg"
import AppBtn from "@/components/UI/Button/NewAppButton";
// Define the type for the slides prop
interface Slide {
  src: string | StaticImageData;
  alt: string;
}

interface GallerySlideProps {
  slides: Slide[];
}

const GallerySlide: React.FC<GallerySlideProps> = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState<number>(1);

  const setCurrentSlide = (index: number) => {
    setSlideIndex(index);
  };
  const handlePrevSlide = () => {
    setSlideIndex((prev) => (prev === 1 ? slides.length : prev - 1));
  };

  const handleNextSlide = () => {
    setSlideIndex((prev) => (prev === slides.length ? 1 : prev + 1));
  };

  return (
    <div className="grid grid-cols-2 gap-5 h-[450px]">
      {/* Main Image Section */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${slideIndex === index + 1 ? "block" : "hidden"}`}
        >
          <Image
            src={typeof slide.src === "string" ? slide.src : slide.src.src}
            alt={slide.alt}
            width={400}
            height={500}
            className="w-full h-[450px] object-cover overflow-hidden rounded-lg"
          />
        </div>
      ))}

      {/* Thumbnails Section */}
      <div className="grid grid-cols-3 gap-4">
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-[180px]">
            <Image
              src={typeof slide.src === "string" ? slide.src : slide.src.src}
              alt={slide.alt}
              width={100}
              height={100}
              className={`w-full h-full object-cover rounded-lg cursor-pointer opacity-60 hover:opacity-100 ${
                slideIndex === index + 1
                  ? "opacity-100 border-2 border-gold-500"
                  : ""
              }`}
              onClick={() => setCurrentSlide(index + 1)}
            />
          </div>
        ))}
        <div className="flex justify-between items-center col-span-full -mt-3">
          <div className="flex gap-3 items-center">
            <p className="bg-[#4D4D4D66] p-3 rounded-full font-bold text-lg text-[#B0B0B0]">
              +12
            </p>
            <button className="bg-[#4D4D4D66] p-2 px-4 rounded-full font-bold text-lg text-[#B0B0B0]">
              View all photoes
            </button>
          </div>
          <div className="flex items-center gap-3">
            <AppBtn btnText="Prev" leftIcon={ArrowLeft} handleClick={handlePrevSlide}/>
            <AppBtn
              btnText="Next"
              rightIcon={ArrowRight}
              handleClick={handleNextSlide}
              className="flex gap-2 items-center hover:text-brandDark"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySlide;
