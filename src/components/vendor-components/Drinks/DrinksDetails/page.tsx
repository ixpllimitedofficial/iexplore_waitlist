import React from "react";
import { StaticImageData } from "next/image";
import GallerySlide from "@/components/vendor-components/GallerySlide";
import MobileGallerySlider from "@/components/vendor-components/MobileGallerySlider";

interface Slide {
  src: StaticImageData | string;
  alt: string;
}
interface DrinksDetailsProps {
  slides: Slide[];
  images: {
    src: string | StaticImageData;
    alt: string;
    height: number;
    width: number;
  }[];
  description: string;
  title?: string;
  price: string;
  rating: string;
  note: string;
}
const DrinksDetails: React.FC<DrinksDetailsProps> = ({
  slides,
  images,
  description,
  price,
  title,
  rating,
  note,
}) => {
  return (
    <section className="mt-8">
      {" "}
      <div className="hidden md:block">
        <GallerySlide slides={slides} />
      </div>
      <div className="md:hidden mt-12">
        <MobileGallerySlider images={images} />
      </div>
      <p className="md:hidden mt-4 font-bold text-2xl">{title}</p>
      <div className="mt-7">
        {" "}
        <p className="md:font-bold text-xl md:text-2xl">
          Drinks Description
        </p>{" "}
        <p className="my-3 font-semibold hidden md:block">{price}</p>{" "}
        <div className="mt-2 grid grid-cols-3 gap-20">
          {" "}
          <p className="text-lg col-span-full md:col-span-2">
            {description}
          </p>{" "}
          <div className="col-span-1  flex-col gap-5 hidden md:flex">
            {" "}
            <p>
              {" "}
              <span className="text-gold-500 font-semibold">Rating:</span>{" "}
              {rating}{" "}
            </p>{" "}
            <p>
              {" "}
              <span className="text-gold-500 font-semibold">
                Remember:
              </span>{" "}
              {note}{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default DrinksDetails;
