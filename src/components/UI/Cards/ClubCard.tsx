"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import ClubImage from "@/assets/img/ClubImage.png";
import BookmarkIcon from "@/assets/svg/BookmarkIcon.svg";

const ClubCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/user/spot-details");
  };

  return (
    <div onClick={() => handleClick()} className="bg-[#333333] p-2 rounded-3xl">
      <Image src={ClubImage} alt="club image" />

      <div className="flex items-center justify-between mt-4 mb-2 px-2">
        <h1 className="text-xl">Club Quilox</h1>

        <Image src={BookmarkIcon} alt="bookmark" height={20} />
      </div>

      <div className="text-base text-[#999999] flex mb-3 px-2">
        <p>Club & Bar</p>
        <p className="mx-2">|</p>
        <p>7pm-4am</p>
      </div>
    </div>
  );
};

export default ClubCard;
