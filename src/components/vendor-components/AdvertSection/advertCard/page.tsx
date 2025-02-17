import React from "react";
import StoryImg from "@/assets/img/UserWebappImages/StoryImg.png";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface AdvertProps {
  profileImg: StaticImageData | string;
  title?: string;
  status?: string;
  duration?: string;
  time_remaining?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleBoost?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isExpired?: boolean;
  isBoostAd?: boolean;
  isRemoveAd?: boolean;
}
const Page: React.FC<AdvertProps> = ({
  profileImg,
  title,
  status,
  duration,
  time_remaining,
  handleClick,
  handleBoost,
  handleDelete,
  isExpired,
  isBoostAd,
  isRemoveAd,
}) => {
  return (
    <div
      className={`bg-[#4D4D4D4D] p-5 rounded-lg ${
        isExpired ? "opacity-40" : ""
      }`}
    >
      <div className="flex gap-5 items-center">
        <Image src={profileImg} alt="story image" />
        <div>
          <h1 className="text-xl md:text-2xl font-bold mb-3">{title}</h1>
          <p className="text-sm">Status: {status}</p>
          <p className="text-sm">Duration: {duration}</p>
          <p className="text-sm">Time remaining: {time_remaining}</p>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="bg-gold-500 w-full mt-3 py-2 rounded-3xl text-brandDark"
      >
        View add details
      </button>
      {isBoostAd && (
        <button
          onClick={handleBoost}
          className="bg-[#0E0E0E] w-full mt-3 py-2 rounded-3xl text-gold-500 border-2 border-gold-500"
        >
          Boost ad
        </button>
      )}
      {isRemoveAd && (
        <button
          onClick={handleDelete}
          className="bg-[#E50000] w-full mt-3 py-2 rounded-3xl text-white"
        >
          Remove ad
        </button>
      )}
    </div>
  );
};

export default Page;
