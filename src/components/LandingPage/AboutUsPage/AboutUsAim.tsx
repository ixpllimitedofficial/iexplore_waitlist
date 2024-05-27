import Image from "next/image";
import ExploreIconSvg from "@/assets/svg/LandingPageSvg/AboutUsPage/ExploreIconSvg.svg";
import SearchIconSvg from "@/assets/svg/LandingPageSvg/AboutUsPage/SearchIconSvg.svg";
import DrinksIconSvg from "@/assets/svg/LandingPageSvg/AboutUsPage/DrinksIconSvg.svg";
import PhoneIconSvg from "@/assets/svg/LandingPageSvg/AboutUsPage/PhoneIconSvg.svg";

const AboutUsAim = () => {
  return (
    <section className="flex flex-col justify-between md:justify-around lg:justify-between gap-10 px-10 py-12 rounded-3xl mt-14 w-[90vw] mx-auto bg-gold-500">
      <div className="flex flex-col items-center text-center gap-2">
        <h1 className="text-black underline text-3xl font-bold">
          OUR VISION:
        </h1>
        <p className="text-black text-2xl font-semibold w-3/4">
          To be the ultimate nightlife companion, destination and trusted
          authority for explorers to discover, connect and experience the
          nightlife.
        </p>
      </div>

      <div className="flex flex-col items-center text-center gap-2">
        <h1 className="text-black underline text-3xl font-bold">
          OUR MISSION:
        </h1>
        <p className="text-black text-2xl font-semibold w-3/4">
          To build and sustain a vibrant nightlife ecosystem where explorers and
          vendors are empowered  to seamlessly connect to the pulse of the
          city’s nightlife.
        </p>
      </div>

      <div className="flex flex-col items-center text-center gap-2">
        <h1 className="text-black underline text-3xl font-bold">
          OUR PURPOSE:
        </h1>
        <p className="text-black text-2xl font-semibold w-3/4">
          We exist to bridge the gap between explorers and the city’s nightlife
          businesses.
        </p>
      </div>
    </section>
  );
};

export default AboutUsAim;
