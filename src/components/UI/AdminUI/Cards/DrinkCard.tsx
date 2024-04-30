"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import DrinkCardImage from "@/assets/img/AdminPageImages/DrinkCardImage.png";
import StarIconSvg from "@/assets/svg/AdminIconsSvg/StarIconSvg.svg";
import ArrowRightIconSvg from "@/assets/svg/AdminIconsSvg/ArrowRightIconSvg.svg";

const DrinkCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/admin");
  };

  return (
    <div
      //   onClick={() => handleClick()}
      className="bg-[#333333] p-4 rounded-3xl"
    >
      {/* image */}
      <Image
        src={DrinkCardImage}
        alt="DrinkCardImage"
        className="rounded-3xl"
      />

      <div className="text-xl font-bold mt-3">
        Martell Davido Limited Edition XO
      </div>

      <div className="flex gap-3 items-center my-3">
        <div className="text-base md:text-lg text-[#999999] flex  gap-1">
          {[1, 2, 3, 4, 5].map((star) => {
            return (
              <Image
                key={star}
                src={StarIconSvg}
                alt="StarIconSvg"
                height={20}
              />
            );
          })}
        </div>

        <p className="text-[#999999]">4.0 (90 Reviews) </p>
      </div>

      <p className="text-gold-500 text-xl font-bold">NGN 232,000.00</p>
    </div>
  );
};

export default DrinkCard;
