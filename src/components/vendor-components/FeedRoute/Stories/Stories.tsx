"use client"
import Image from "next/image";
import StoryImg from "@/assets/img/UserWebappImages/StoryImg.png";
import { useRouter, useSearchParams } from "next/navigation";

const Stories = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/vendor-Home/feed/1");
  };
  return (
    <div className="ml-5 flex gap-8 overflow-x-scroll no-scrollbar whitespace-nowrap">
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ].map((card) => {
        return (
          <div
            onClick={handleClick}
            key={card}
            className="w-[200px] cursor-pointer"
          >
            <div className="flex flex-col items-center gap-1">
              <Image src={StoryImg} alt="StoryImg" className="" />
              <p className="text-lg">Melissa</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
