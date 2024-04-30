"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import MySpotCardImage from "@/assets/img/AdminPageImages/MySpotCardImage.png";
import StarIconSvg from "@/assets/svg/AdminIconsSvg/StarIconSvg.svg";
import ArrowRightIconSvg from "@/assets/svg/AdminIconsSvg/ArrowRightIconSvg.svg";

const MySpotCard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/admin");
  };

  return (
    <div
      //   onClick={() => handleClick()}
      className="bg-[#333333] flex gap-5 p-4 rounded-3xl"
    >
      {/* image */}
      <div>
        <Image
          src={MySpotCardImage}
          alt="MySpotCardImage"
          className="rounded-3xl"
        />

        <div className="flex items-center justify-between mt-4 mb-2 px-2">
          <h1 className="text-[22px]">4.0 Rating (634)</h1>
        </div>

        <div className="text-base md:text-lg text-[#999999] flex justify-between mb-3">
          {[1, 2, 3, 4, 5].map((star) => {
            return (
              <Image
                key={star}
                src={StarIconSvg}
                alt="StarIconSvg"
                height={25}
              />
            );
          })}
        </div>
      </div>

      {/* details */}
      <div>
        <p className="bg-[#6F6F6F] text-white px-4 py-2 rounded-xl">
          Open - High Traffic
        </p>

        <div className="my-4">
          <p className="text-2xl font-bold">Club Maxx</p>
          <p className="text-[#999999]">Club & Bar | Lekki</p>
          <p className="text-[#999999]">Time: 5pm - 4am </p>
        </div>

        <button className="bg-gold-500 text-[#212121] p-2 rounded-xl flex justify-around items-center gap-1 font-medium">
          <p className="text-base">More info</p>
          <Image
            src={ArrowRightIconSvg}
            alt="ArrowRightIconSvg"
            className="h-[15px]"
          />
        </button>
      </div>
    </div>
  );
};

export default MySpotCard;
