import { anton } from "@/app/fonts";
import Image from "next/image";
import DiscoverExploreConnect from "../Vendor/DiscoverExploreConnect";
import HomeDiscoverImage1 from "@/assets/img/MainWebsite/HomeDiscoverImage1.png";
import HomeDiscoverImage2 from "@/assets/img/MainWebsite/HomeDiscoverImage2.png";

import HomeDiscoverDrinks from "@/assets/img/MainWebsite/HomeDiscoverDrinks.png";
import HomeDiscoverSpotDetails from "@/assets/img/MainWebsite/HomeDiscoverSpotDetails.png";

const Discover = () => {
  return (
    <section className="md:mb-32">
      <div className="mt-8">
        <DiscoverExploreConnect />
      </div>

      <p
        className="text-lg text-[#D1D1D1] text-center px-5 md:w-4/5 lg:w-3/4 mx-auto my-8"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        Discover the hottest spots around you and plan epic nights out while
        staying in the loop with exciting updates from events around you. Enjoy
        exclusive benefits when you order your favorite drink at your go-to
        venues, and share updates from the coolest places around to keep your
        night lively and connected all on iExplore.
      </p>

      {/* SATISFY YOUR INNER EXPLORER */}
      <div className="md:h-[500px] lg:px-24 flex flex-col md:flex-row relative">
        <Image
          src={HomeDiscoverImage1}
          alt="HomeDiscoverImage1"
          className="w-full md:h-[300px] md:w-auto lg:h-[400px]"
        />

        <div
          className="bg-[#0E0E0E] py-10 px-5 md:pl-1 md:w-4/5 lg:w-[45%] md:absolute right-0 lg:right-28 bottom-16 lg:bottom-10 md:text-right"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3
            className={`text-[#F2F1E8] text-4xl md:text-5xl lg:text-6xl ${anton.className} `}
          >
            SATISFY YOUR INNER EXPLORER
          </h3>
          <p className="md:pl-8 mt-3 md:text-lg text-[#D1D1D1]">
            Never miss a beat. Stay in the know with detailed information on
            working hours, location, capacity, guidelines, security and
            up-coming events at selected venues of interest.
          </p>
        </div>
      </div>

      {/* DRINKS AND FEEDS */}
      <div className=" grid grid-cols-2 my-2 md:px-10 lg:my-10 lg:px-24 gap-10">
        {/* drinks */}
        <div className="col-span-full lg:col-span-1 flex flex-col md:flex-row items-center gap-5">
          <Image
            src={HomeDiscoverDrinks}
            alt="HomeDiscoverDrinks"
            className="w-[85%] h-auto mx-auto md:h-[300px] md:w-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          />

          <div
            className="px-7"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <h3
              className={`text-[#F2F1E8] text-4xl md:text-[42px] mt-2 ${anton.className} `}
            >
              DRINKS
            </h3>
            <p className="mt-1 text-[#D1D1D1] md:text-lg">
              Earn points while you spend. Seamlessly connect with friends over
              drinks at the best spot in your city and earn convertible points
              while you spend.
            </p>
          </div>
        </div>

        {/* spot details */}
        <div className="col-span-full lg:col-span-1 flex flex-col md:flex-row items-center gap-5">
          <Image
            src={HomeDiscoverSpotDetails}
            alt="HomeDiscoverSpotDetails"
            className="w-[85%] h-auto mx-auto md:h-[300px] md:w-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          />

          {/* <div className="pt-5 md:pt-14 px-7"> */}
          <div
            className="px-7"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <h3
              className={`text-[#F2F1E8] text-4xl md:text-[42px] mt-2 ${anton.className} `}
            >
              SPOT DETAILS
            </h3>
            <p className="mt-1 text-[#D1D1D1] md:text-lg">
              Get information and reviews on your favourite hangout spots and
              locations. See what’s new there and get information on everything
              you need to have a good time.
            </p>
          </div>
        </div>
      </div>

      {/* GET INFORMATION OF THE BEST LOCATIONS  */}
      <div className="md:h-[500px] lg:px-24 flex flex-col-reverse md:flex-row relative mt-16 lg:mt-20 justify-end">
        <div
          className="bg-[#0E0E0E] py-7 px-5 md:pr-1 md:w-4/5 lg:w-[45%] md:absolute left-0 lg:left-28 bottom-10"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h3
            className={`text-[#F2F1E8] text-4xl md:text-5xl lg:text-6xl ${anton.className} md:pr-5`}
          >
            {/* <span className="text-gold-500">GET INFORMATION </span>OF THE BEST
            LOCATIONS */}
            GET INFORMATION OF THE BEST LOCATIONS
          </h3>
          <p className="md:w-[90%] mt-3 md:text-lg text-[#D1D1D1]">
            Never miss a beat. Stay in the know with detailed information on
            working hours, location, capacity, guidelines, security and
            up-coming events at selected venues of interest.
          </p>
        </div>

        <Image
          src={HomeDiscoverImage2}
          alt="HomeDiscoverImage2"
          className="w-full md:h-[300px] md:w-auto lg:h-[400px]"
        />
      </div>
    </section>
  );
};

export default Discover;
