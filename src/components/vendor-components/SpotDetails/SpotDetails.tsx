import React from "react";
import Image from "next/image";
import StopWatch from "@/assets/svg/VendorSvg/stop-watch.png";
import LocationStar from "@/assets/svg/VendorSvg/location-star-01.svg";
import LocationShare from "@/assets/svg/VendorSvg/location-share-01.png";
import FrameOne from "@/assets/img/VendorPage/Frame 19704.png";
import FrameTwo from "@/assets/img/VendorPage/Frame 20027.png";
import FrameThree from "@/assets/img/VendorPage/Frame 20031.png";
import FrameFour from "@/assets/img/VendorPage/Frame 20032.png";
import FrameFive from "@/assets/img/VendorPage/Frame 20027 (1).png";
import FrameSix from "@/assets/img/VendorPage/Frame 20031 (1).png";
import FrameSeven from "@/assets/img/VendorPage/Frame 20032 (1).png";

import GallerySlide from "@/components/vendor-components/GallerySlide";

const slides = [
  { src: FrameOne, alt: "frame one" },
  { src: FrameTwo, alt: "frame two" },
  { src: FrameThree, alt: "frame three" },
  { src: FrameFour, alt: "frame four" },
  { src: FrameFive, alt: "frame five" },
  { src: FrameSix, alt: "frame six" },
];


const SpotDetails = () => {
  return (
    <section className="mt-8">
      {/* images */}
      <GallerySlide slides={slides}/>

      {/* details */}
      <div className="mt-7">
        <p className=" font-bold text-2xl">About</p>

        <div className="mt-2 grid grid-cols-3 gap-20">
          <p className="text-lg col-span-2">
            Maxx beach bar, where sun, sand, and sea come together to create the
            ultimate beach bar experience. Nestled along the pristine coastline,
            our bar offers a laid-back atmosphere where you can unwind with a
            refreshing cocktail in hand, savor fresh, locally-sourced bites, and
            enjoy the soothing sounds of the ocean. Whether you're here to catch
            the sunset, dance under the stars, or simply relax with friends, MBB
            is your go-to destination for unforgettable moments by the water.
            Come as you are, and let the beach be your backdrop for good times
            and great vibes.
          </p>

          <div className="col-span-1 flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <Image src={LocationStar} alt="location" width={30} height={30} />
              <p className="text-lg font-semibold">
                873 Ozumba Mbadiwe Ave, Victoria Island 106104, Lagos
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Image
                src={StopWatch}
                alt="location share"
                width={30}
                height={30}
              />
              <p className="text-lg font-bold">4pm - 11pm</p>
            </div>

            <div className="bg-gold-500 py-1 px-5 rounded-3xl font-bold text-brandDark self-start flex gap-3 items-center">
              <Image
                src={LocationShare}
                alt="stop watch"
                width={30}
                height={30}
              />
              <p>Share spot</p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <p className=" font-bold text-2xl">Contact</p>
          <p className="text-lg col-span-2">Website: www.maxxabeachbar.com</p>
          <p className="text-lg col-span-2">Call: +234 901 234 5678</p>
        </div>
      </div>
    </section>
  );
};

export default SpotDetails;
