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
import InsightsIcon from "@mui/icons-material/Insights";
import GallerySlide from "@/components/vendor-components/GallerySlide";
import MobileGallerySlider from "@/components/vendor-components/MobileGallerySlider";
import RatingStarIcon from "@/assets/svg/VendorSvg/star.svg";
import Link from "next/link";

const convertTo12HourFormat = (time) => {
  if (!time) {
    return "";
  }
  const [hour, minute, second] = time.split(":");
  const hourNumber = parseInt(hour, 10);
  const ampm = hourNumber >= 12 ? "PM" : "AM";
  const adjustedHour = hourNumber % 12 || 12; // Convert 0 to 12 for midnight
  return `${adjustedHour}:${minute} ${ampm}`;
};
const slides = [
  { src: FrameOne, alt: "frame one", height: 50, width: 800 },
  { src: FrameTwo, alt: "frame two", height: 50, width: 800 },
  { src: FrameThree, alt: "frame three", height: 50, width: 800 },
  { src: FrameFour, alt: "frame four", height: 50, width: 800 },
  { src: FrameFive, alt: "frame five", height: 50, width: 800 },
  { src: FrameSix, alt: "frame six", height: 50, width: 800 },
];
interface spotProps {
  showInsight: boolean;
  singleInfo: {
    name?: string;
    description?: string;
    location?: string;
    opening_time?: string;
    closing_time?: string;
    rating?: number;
  };
}

const SpotDetails: React.FC<spotProps> = ({ showInsight, singleInfo }) => {
  return (
    <section className="mt-8">
      {/* images */}
      <div className="hidden md:block">
        <GallerySlide slides={slides} />
      </div>
      <div className="md:hidden">
        <MobileGallerySlider images={slides} />
      </div>
      {showInsight && (
        <Link href="/vendor-Home/profile/insight">
          <p className="md:w-[30%] my-5 mx-auto bg-gold-500 text-center text-brandDark py-3 rounded-3xl flex gap-2 font-bold items-center justify-center cursor-pointer">
            <InsightsIcon />
            Spot insight
          </p>
        </Link>
      )}
      <div className="mt-5 flex justify-center items-center gap-3 w-full md:hidden">
        <p className=" font-bold text-3xl">{singleInfo?.name}</p>
        <div className="bg-gold-500 py-1 px-3 rounded-3xl font-bold text-brandDark flex gap-1">
          <Image src={RatingStarIcon} alt="rating icons" />
          4.5
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-2 md:hidden">
        <div className="flex gap-3 items-center">
          <Image src={LocationStar} alt="location" width={30} height={30} />
          <p className="text-sm font-semibold">{singleInfo?.location}</p>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={StopWatch} alt="location share" width={30} height={30} />
          <p className="text-sm font-bold">
            {convertTo12HourFormat(singleInfo?.opening_time)} -{" "}
            {convertTo12HourFormat(singleInfo?.closing_time)}
          </p>
        </div>
      </div>
      {/* details */}
      <div className="mt-7">
        <p className=" font-bold text-2xl">About</p>

        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-20">
          <p className="text-lg col-span-2">{singleInfo?.description}</p>

          <div className="hidden col-span-1 md:flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <Image src={LocationStar} alt="location" width={30} height={30} />
              <p className="text-lg font-semibold">{singleInfo?.location}</p>
            </div>
            <div className="flex gap-3 items-center">
              <Image
                src={StopWatch}
                alt="location share"
                width={30}
                height={30}
              />
              <p className="text-lg font-bold">
                {convertTo12HourFormat(singleInfo?.opening_time)} -{" "}
                {convertTo12HourFormat(singleInfo?.closing_time)}
              </p>
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
