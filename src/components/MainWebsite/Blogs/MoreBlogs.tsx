import { anton } from "@/app/fonts";
import Image from "next/image";
import { Button } from "@/components/UI/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import NewsImg from "@/assets/img/MainWebsite/NewsImg.png";
import LineSvg from "@/assets/svg/MainWebsite/LineSvg.svg";

const MoreBlogs = () => {
  return (
    <section className="bg-[#F2F1E8] px-5 py-7 md:px-14 md:py-10">
      <div className="flex items-center justify-between text-center md:text-left gap-3">
        <p className="text-black text-lg font-bold">More posts for you</p>
        <Image src={LineSvg} alt="LineSvg " className="hidden md:block md:w-3/5" />
      </div>

      <div className="mt-5 md:mt-8 grid grid-cols-6 gap-10">
        {[1, 2, 3].map((item) => {
          return (
            <div
              key={item} 
              className="col-span-full md:col-span-3 lg:col-span-2 flex flex-col gap-2"
            >
              <Image src={NewsImg} alt="NewsImg" className="w-full" />
              <p className="text-black font-bold text-xl mt-1">
                A Night Out in Lagos: Your Ultimate Guide to Unforgettable
                Experiences
              </p>
              <p className="text-black">
                A night out in Lagos is more than just an evening, it’s a
                journey through a city bursting with energy and creativity.
                Start your adventure with a dinner at one of the city’s eclectic
                restaurants, followed by a visit to a trendy bar or lounge...
              </p>
              <Button className="mr-auto mt-2 text-[#F2F1E8] bg-[#0E0E0E] transition duration-100 hover:bg-[#E1B141] hover:text-[#0E0E0E] px-4 py-6 rounded-xl font-bold text-base">
                Read More <ArrowRightIcon className="ml-1 h-6 w-6" />
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MoreBlogs;
