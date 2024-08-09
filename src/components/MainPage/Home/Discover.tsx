import { anton } from "@/app/fonts";
import Image from "next/image";
import DiscoverExploreConnect from "../Vendor/DiscoverExploreConnect";
import HomeDiscoverImage1 from "@/assets/img/MainWebsite/HomeDiscoverImage1.png";
import HomeDiscoverImage2 from "@/assets/img/MainWebsite/HomeDiscoverImage2.png";

import HomeDiscoverDrinks2 from "@/assets/img/MainWebsite/HomeDiscoverDrinks2.png";
import HomeDiscoverFeeds2 from "@/assets/img/MainWebsite/HomeDiscoverFeeds2.png";

const Discover = () => {
  return (
    <section className="md:mb-32">
      <div className="mt-10">
        <DiscoverExploreConnect />
      </div>

      <p className="text-lg text-[#D1D1D1] text-center px-5 md:w-3/4 mx-auto my-10 md:my-16">
        Discover the hottest spots around you and plan epic nights out while
        staying in the loop with exciting updates from events around you. Enjoy
        exclusive benefits when you order your favorite drink at your go-to
        venues, and share updates from the coolest places around to keep your
        night lively and connected all on iExplore.
      </p>

      {/* SATISFY YOUR INNER EXPLORER */}
      <div className="md:h-[500px] md:px-24 flex flex-col md:flex-row relative">
        <Image
          src={HomeDiscoverImage1}
          alt="HomeDiscoverImage1"
          className="w-full md:h-[400px] md:w-auto"
        />

        <div className="bg-[#0E0E0E] py-10 px-5 md:pl-1 md:w-[45%] md:absolute right-28 -bottom-10 md:text-right">
          <h3
            className={`text-[#F2F1E8] text-4xl md:text-6xl ${anton.className} `}
          >
            SATISFY YOUR INNER <span className="text-gold-500"> EXPLORER</span>
          </h3>
          <p className="md:pl-8 mt-3 text-lg text-[#D1D1D1]">
            Never miss a beat. Stay in the know with detailed information on
            working hours, location, capacity, guidelines, security and
            up-coming events at selected venues of interest.
          </p>
        </div>
      </div>

      {/* DRINKS AND FEEDS */}
      <div className=" grid grid-cols-2 my-2 md:my-24 md:px-24 gap-10">
        {/* drinks */}
        <div className="col-span-full md:col-span-1 flex flex-col md:flex-row gap-5">
          <Image
            src={HomeDiscoverDrinks2}
            alt="HomeDiscoverDrinks2"
            className="w-[85%] h-auto mx-auto md:h-[300px] md:w-auto"
          />

          <div className="pt-5 md:pt-20 px-7">
            <h3 className={`text-[#F2F1E8] text-4xl ${anton.className} `}>
              DRINKS
            </h3>
            <p className="mt-3 text-[#D1D1D1]">
              Earn points while you spend. Seamlessly connect with friends over
              drinks at the best spot in your city and earn convertible points
              while you spend.
            </p>
          </div>
        </div>

        {/* feeds */}
        <div className="col-span-full md:col-span-1 flex flex-col md:flex-row gap-5">
          <Image
            src={HomeDiscoverFeeds2}
            alt="HomeDiscoverFeeds2"
            className="w-[85%] h-auto mx-auto md:h-[300px] md:w-auto"
          />

          <div className="pt-5 md:pt-20 px-7">
            <h3 className={`text-[#F2F1E8] text-4xl ${anton.className} `}>
              FEEDS
            </h3>
            <p className="mt-3 text-[#D1D1D1]">
              Find out what is new. Stay connected and updated while you plan to
              join the buzz at the places you love.
            </p>
          </div>
        </div>
      </div>

      {/* GET INFORMATION OF THE BEST LOCATIONS  */}
      <div className="md:h-[500px] md:px-24 flex flex-col-reverse md:flex-row relative mt-10 md:mt-28 justify-end ">
        <div className="bg-[#0E0E0E] py-10 px-5 md:pr-1 md:w-[45%] md:absolute left-28 -bottom-10">
          <h3
            className={`text-[#F2F1E8] text-4xl md:text-6xl ${anton.className} md:pr-5`}
          >
            GET INFORMATION OF THE{" "}
            <span className="text-gold-500"> BEST LOCATIONS</span>
          </h3>
          <p className="md:w-[90%] mt-3 text-lg text-[#D1D1D1]">
            Never miss a beat. Stay in the know with detailed information on
            working hours, location, capacity, guidelines, security and
            up-coming events at selected venues of interest.
          </p>
        </div>

        <Image
          src={HomeDiscoverImage2}
          alt="HomeDiscoverImage2"
          className="w-full md:h-[400px] md:w-auto"
        />
      </div>
    </section>
  );
};

export default Discover;
