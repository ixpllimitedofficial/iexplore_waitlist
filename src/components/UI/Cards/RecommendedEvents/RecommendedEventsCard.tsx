import Link from "next/link";
import Image from "next/image";
import RecommendationsImageCard from "./RecommendedEventsImagesCard";

import BookmarkIcon from "@/assets/svg/BookmarkIcon.svg";
import TimeIcon from "@/assets/svg/RecommendedEventsSvg/TimeIconSvg.svg";
import TicketIcon from "@/assets/svg/RecommendedEventsSvg/TicketIconSvg.svg";
import DateIcon from "@/assets/svg/RecommendedEventsSvg/DateIconSvg.svg";
import LocationIcon from "@/assets/svg/RecommendedEventsSvg/LocationIconSvg.svg";

const RecommendedEventsCard = () => {
  return (
    <div className="bg-brandDarkNeutral mt-7 py-8 px-5 md:p-10 w-[90vw] mx-auto rounded-3xl">
      <div className="flex items-center justify-between ">
        <p className="font-medium text-[22px] md:text-2xl text-gold-500">
          Amapiano Beach Party
        </p>

        <Image src={BookmarkIcon} alt="bookmark" height={30} />
      </div>

      <div className="mt-7 flex gap-2 overflow-x-scroll no-scrollbar whitespace-nowrap">
        {[1, 2, 3, 4, 5].map((card) => {
          return <RecommendationsImageCard key={card} />;
        })}
      </div>

      <p className="mt-5 text-xl md:text-[22px] leading-relaxed text-[#F9D9AD]">
        Get ready for a day of non-stop music, beachfront bliss, and
        unforgettable moments that’ll have you dancing with pure joy. Join us at
        the Amapiano Beach Party and let the good times roll!
      </p>

      {/* location mini details */}
      <div className="mt-7 flex flex-wrap gap-4">
        {/* date */}
        <div className="flex gap-2 border-2 rounded-full border-gold-500 px-5 py-3">
          <Image src={DateIcon} alt="Date icon" height={25} />
          <p className="text-lg md:text-xl text-[#F9D9AD] ">
            Friday 15th October
          </p>
        </div>

        {/* time */}
        <div className="flex gap-2 border-2 rounded-full border-gold-500 px-5 py-3">
          <Image src={TimeIcon} alt="TimeIcon" height={25} />
          <p className="text-lg md:text-xl text-[#F9D9AD] ">7:00pm</p>
        </div>

        {/* ticket policy */}
        <div className="flex gap-2 border-2 w-auto rounded-full border-gold-500 px-5 py-3">
          <Image src={TicketIcon} alt="TicketIcon" height={25} />
          <p className="text-lg md:text-xl text-[#F9D9AD] ">Free</p>
        </div>

        {/* location */}
        <div className="flex gap-2 border-2 w-auto rounded-full border-gold-500 px-5 py-3">
          <Image src={LocationIcon} alt="LocationIcon" height={25} />
          <p className="text-lg md:text-xl text-[#F9D9AD] ">
            Wave beach, Elegushi, Lagos
          </p>
        </div>
      </div>

      {/* location full details button */}
      <Link href="/user/spot-details">
        <p className="mt-14 text-lg md:text-xl text-[#F9D9AD] underline text-center">
          Location details
        </p>
      </Link>
    </div>
  );
};

export default RecommendedEventsCard;
