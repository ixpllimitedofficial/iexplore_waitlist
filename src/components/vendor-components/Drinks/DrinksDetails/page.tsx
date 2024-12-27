import React from "react";
import { StaticImageData } from "next/image";
import GallerySlide from "@/components/vendor-components/GallerySlide";

interface Slide {
  src: StaticImageData | string;
  alt: string;
}
interface DrinksDetailsProps {
  slides: Slide[];
  description: string;
  price: string;
  rating: string;
  note: string;
}
const DrinksDetails: React.FC<DrinksDetailsProps> = ({
  slides,
  description,
  price,
  rating,
  note,
}) => {
  return (
    <section className="mt-8">
      {" "}
      {/* images */} <GallerySlide slides={slides} /> {/* details */}{" "}
      <div className="mt-7">
        {" "}
        <p className="font-bold text-2xl">Drinks Description</p>{" "}
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
