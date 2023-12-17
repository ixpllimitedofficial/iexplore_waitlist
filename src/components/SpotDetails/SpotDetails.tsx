import Image from "next/image";
import ShareIcon from "@/assets/svg/SpotDetailsSvg/ShareIconSvg.svg";
import BookmarkIcon from "@/assets/svg/SpotDetailsSvg/BookmarkIconSvg.svg";

import SpotDetailsImage from "@/assets/img/SpotDetails/SpotDetailsImage.png";
import SpotFeatures from "./SpotFeatures";
import Clubs from "../Home/Clubs/Clubs";
import GetDirections from "./GetDirections";
import SpotRatings from "./SpotRatings";
import Reviews from "./Reviews";
import Contribute from "./Contribute";

const SpotDetails = () => {
  return (
    <section className="p-10">
      {/* title and icons */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-[#E1BD8A] text-3xl font-bold w-[90vw] mx-auto">
          Club Quilox
        </h1>

        <div className="flex gap-2">
          <Image src={ShareIcon} alt="ShareIcon" height={45} />
          <Image src={BookmarkIcon} alt="BookmarkIcon" height={45} />
        </div>
      </div>

      {/* images */}
      <div className="flex gap-5 overflow-x-scroll no-scrollbar whitespace-nowrap">
        <Image src={SpotDetailsImage} alt="SpotDetailsImage" height={400} />
        <Image src={SpotDetailsImage} alt="SpotDetailsImage" height={400} />
        <Image src={SpotDetailsImage} alt="SpotDetailsImage" height={400} />
      </div>

      {/*  */}
      <p className="mt-5 text-[26px] leading-relaxed w-[70%]">
        Located at the heart of Lagos is the King of entertainment and nightlife
        in the city. Experience the thrill of Lagos nightlife here.
      </p>

      {/* location */}
      <div className="border-t-2 border-[#F9D9AD] mt-5 flex items-center justify-between">
        <p className="mt-5 text-2xl w-[30%]">
          873 Ozumba Mbadiwe Ave, Victoria Island 106104, Lagos
        </p>

        <div className="text-right">
          <p className="text-2xl">Open now</p>
          <p className="text-xl text-[#E1BD8A]">6:00pm - 4:00am</p>
        </div>
      </div>

      {/* spot features */}
      <SpotFeatures />

      {/* get directions */}
      <GetDirections />

      {/* ratings */}
      <SpotRatings />

      {/* reviews */}
      <Reviews />

      {/* contribute */}
      <Contribute />

      {/* clubs */}
      <Clubs />
    </section>
  );
};

export default SpotDetails;
