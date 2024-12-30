import React from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";
import Header from "@/components/vendor-components/MiniHeader/Header";
import DrinksDetials from "@/components/vendor-components/Drinks/DrinksDetails/page";
import FrameOne from "@/assets/img/VendorPage/Frame 19704.png";
import FrameTwo from "@/assets/img/VendorPage/Frame 20027.png";
import FrameThree from "@/assets/img/VendorPage/Frame 20031.png";
import FrameFour from "@/assets/img/VendorPage/Frame 20032.png";
import FrameFive from "@/assets/img/VendorPage/Frame 20027 (1).png";
import FrameSix from "@/assets/img/VendorPage/Frame 20031 (1).png";

const slides = [
  { src: FrameOne, alt: "frame one", height: 50, width: 800 },
  { src: FrameTwo, alt: "frame two", height: 50, width: 800 },
  { src: FrameThree, alt: "frame three", height: 50, width: 800 },
  { src: FrameFour, alt: "frame four", height: 50, width: 800 },
  { src: FrameFive, alt: "frame five", height: 50, width: 800 },
  { src: FrameSix, alt: "frame six", height: 50, width: 800 },
];
const description = `Maxx beach bar, where sun, sand, and sea come together to create the ultimate beach bar experience. Nestled along the pristine coastline, our bar offers a laid-back atmosphere where you can unwind with a refreshing cocktail in hand, savor fresh, locally-sourced bites, and enjoy the soothing sounds of the ocean. Whether you're here to catch the sunset, dance under the stars, or simply relax with friends, MBB is your go-to destination for unforgettable moments by the water. Come as you are, and let the beach be your backdrop for good times and great vibes.`;
const price = "N232,000.00";
const rating = "4.5 (90 Raters)";
const note =
  "You have 24 hours to get your drinks at this location after you claim it online";
const title = "Johnnie Walker Black Label";
const Page = () => {
  return (
    <>
      <Header title="Drinks" className="hidden md:block" />
      <section className="px-3 md:px-7 py-6">
        <div className="hidden md:flex items-center">
          <Link href="/vendor-Home/drinks">
            <Image src={ArrowLeft} alt="ArrowLeft" className="justify-start" />
          </Link>

          <div className="flex justify-center items-center gap-3 w-full">
            <p className=" font-bold text-3xl">Johnnie Walker Black Label</p>
          </div>
        </div>

        <DrinksDetials
          slides={slides}
          images={slides}
          description={description}
          price={price}
          rating={rating}
          note={note}
          title={title}
        />
      </section>
    </>
  );
};
export default Page;
