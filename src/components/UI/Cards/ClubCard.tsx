"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import ClubImage from "@/assets/img/ClubImage.png";
import BookmarkIcon from "@/assets/svg/BookmarkIcon.svg";

const ClubCard = () => {
  const router = useRouter();

  const handleClick = () => {
    // router.push("/user/spot-details");
  };

  return (
    <div
      onClick={() => handleClick()}
      className="bg-[#4D4D4D66] p-2 rounded-3xl flex flex-col"
    >
      <div className="w-[320px] h-[200px] overflow-hidden rounded-3xl">
        <Image
          src={ClubImage}
          alt="club image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between mt-4 mb-2 px-2">
        <h1 className="text-xl font-bold">Club Quilox</h1>

        <Image src={BookmarkIcon} alt="bookmark" height={20} />
      </div>

      <div className="text-base text-brandDark bg-gold-500 flex gap-2 mb-3 py-1 px-5 rounded-2xl self-start">
        <p className="font-bold">Awolowo Rd</p>
        <p>11pm - 4am</p>
      </div>
    </div>
  );
};

export default ClubCard;
