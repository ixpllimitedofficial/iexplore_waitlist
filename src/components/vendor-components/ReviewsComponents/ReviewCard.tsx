"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/UI/button";
import ProfileImage from "@/assets/img/UserWebappImages/ProfileImage.png";
import {Input} from "@/components/UI/input";

const ReviewCard = () => {
  const router = useRouter();

  const handleClick = () => {
    alert("Drink claimed");
  };

  return (
    <div className="relative py-3 rounded-3xl flex flex-col">
      <div className="flex gap-2">
        <div className="">
          <Image
            src={ProfileImage}
            alt="drink image"
            className="w-[200px] h-[50px] object-contain"
          />
        </div>
        <div className="">
          <p className="text-lg font-semibold">Victor Adewale</p>
          <p className="text-sm text-[#B0B0B0] my-2">August 2024</p>
          <p className="text-sm">
            Best place to enjoy nightlife in Lagos. Sound is perfect security is
            on point and there was no problem with finding a parking space. Got
            to see and had some premium drinks there, definitely can’t wait to
            be back here.
          </p>
          <Input type="text" placeholder="Reply" className="mt-2 rounded-full bg-[#4D4D4D] placeholder:text-white"/>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
