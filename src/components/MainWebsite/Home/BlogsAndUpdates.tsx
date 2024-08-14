import { anton } from "@/app/fonts";
import Image from "next/image";
import { Button } from "@/components/UI/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import NewsImg from "@/assets/img/MainWebsite/NewsImg.png";

const BlogsAndUpdates = () => {
  return (
    <section className="px-5 pt-10 md:pt-14">
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-3">
        {/* <h3
          className={`text-[#F2F1E8] text-5xl md:text-6xl mt-3 md:mt-0 ${anton.className} `}
        >
          BLOG <span className="text-gold-500">& UPDATES</span>
        </h3> */}
        <h3
          className={`text-[#F2F1E8] text-5xl md:text-6xl mt-3 md:mt-0 ${anton.className} `}
        >
          BLOG & UPDATES
        </h3>
        <p className="text-[#D1D1D1] text-lg md:w-[60%]">
          Explore our articles to discover more about the vibrant nightlife
          scene. Stay updated with the latest events and be inspired by
          incredible stories from iconic venues and the creative minds shaping
          the nightlife experience.
        </p>
      </div>

      <div className="mt-8 md:mt-14 grid grid-cols-3 gap-10">
        {[1, 2, 3].map((item) => {
          return (
            <div
              key={item}
              className="col-span-full md:col-span-1 flex flex-col gap-2"
            >
              <Image src={NewsImg} alt="NewsImg" className="w-full" />
              <p className="text-white font-bold text-xl mt-1">
                A Night Out in Lagos: Your Ultimate Guide to Unforgettable
                Experiences
              </p>
              <p className="text-[#D1D1D1]">
                A night out in Lagos is more than just an evening, it’s a
                journey through a city bursting with energy and creativity.
                Start your adventure with a dinner at one of the city’s eclectic
                restaurants, followed by a visit to a trendy bar or lounge...
              </p>
              <Button className="mr-auto mt-2 bg-[#F2F1E8] text-[#322016] transition duration-100 hover:bg-[#E1B141] px-4 py-6 rounded-xl font-bold text-base">
                Read More <ArrowRightIcon className="ml-1 h-6 w-6" />
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogsAndUpdates;
