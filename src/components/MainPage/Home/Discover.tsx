import { anton } from "@/app/fonts";
import Image from "next/image";
import DiscoverExploreConnect from "../Vendor/DiscoverExploreConnect";
import HomeDiscoverImage1 from "@/assets/img/MainWebsite/HomeDiscoverImage1.png";
import HomeDiscoverImage2 from "@/assets/img/MainWebsite/HomeDiscoverImage2.png";

import HomeDiscoverDrinks2 from "@/assets/img/MainWebsite/HomeDiscoverDrinks2.png";
import HomeDiscoverFeeds2 from "@/assets/img/MainWebsite/HomeDiscoverFeeds2.png";

const Discover = () => {
  return (
    <section className="mb-32">
      <div className="mt-10">
        <DiscoverExploreConnect />
      </div>

      <p className="text-lg text-[#D1D1D1] text-center w-3/4 mx-auto my-16">
        Discover the hottest spots around you and plan epic nights out while
        staying in the loop with exciting updates from events around you. Enjoy
        exclusive benefits when you order your favorite drink at your go-to
        venues, and share updates from the coolest places around to keep your
        night lively and connected all on iExplore.
      </p>

      {/* SATISFY YOUR INNER EXPLORER */}
      <div className="h-[500px] px-24 flex relative">
        <Image
          src={HomeDiscoverImage1}
          alt="HomeDiscoverImage1"
          className="h-[400px] w-auto"
        />

        <div className="bg-[#0E0E0E] py-10 pl-1 w-[45%] absolute right-28 -bottom-10 text-right">
          <h3 className={`text-[#F2F1E8] text-6xl ${anton.className} `}>
            SATISFY YOUR INNER <span className="text-gold-500"> EXPLORER</span>
          </h3>
          <p className="pl-8 mt-3 text-lg text-[#D1D1D1]">
            Never miss a beat. Stay in the know with detailed information on
            working hours, location, capacity, guidelines, security and
            up-coming events at selected venues of interest.
          </p>
        </div>
      </div>

      {/* DRINKS AND FEEDS */}
      <div className="grid grid-cols-2 my-24 px-24 gap-10">
        {/* drinks */}
        <div className="flex gap-5">
          <Image
            src={HomeDiscoverDrinks2}
            alt="HomeDiscoverDrinks2"
            className="h-[300px] w-auto"
          />

          <div className="pt-20">
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
        <div className="flex gap-5">
          <Image
            src={HomeDiscoverFeeds2}
            alt="HomeDiscoverFeeds2"
            className="h-[300px] w-auto"
          />

          <div className="pt-20">
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
      <div className="h-[500px] px-24 mt-28 flex justify-end relative">
        <div className="bg-[#0E0E0E] py-10 pr-1 w-[45%] absolute left-28 -bottom-10">
          <h3 className={`text-[#F2F1E8] text-6xl ${anton.className} pr-5`}>
            GET INFORMATION OF THE{" "}
            <span className="text-gold-500"> BEST LOCATIONS</span>
          </h3>
          <p className="w-[90%] mt-3 text-lg text-[#D1D1D1]">
            Never miss a beat. Stay in the know with detailed information on
            working hours, location, capacity, guidelines, security and
            up-coming events at selected venues of interest.
          </p>
        </div>

        <Image
          src={HomeDiscoverImage2}
          alt="HomeDiscoverImage2"
          className="h-[400px] w-auto"
        />
      </div>
    </section>
  );
};

export default Discover;
