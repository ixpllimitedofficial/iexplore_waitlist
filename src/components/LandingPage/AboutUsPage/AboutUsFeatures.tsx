import Image from "next/image";
import ExploreIconSvg from "@/assets/svg/LandingPageSvg/AboutUsPage/ExploreIconSvg.svg";
import SearchIconSvg from "@/assets/svg/LandingPageSvg/AboutUsPage/SearchIconSvg.svg";
import DrinksIconSvg from "@/assets/svg/LandingPageSvg/AboutUsPage/DrinksIconSvg.svg";
import PhoneIconSvg from "@/assets/svg/LandingPageSvg/AboutUsPage/PhoneIconSvg.svg";

const AboutUsFeatures = () => {
  return (
    <section className="flex flex-col md:flex-wrap lg:flex-nowrap md:flex-row justify-between md:justify-around lg:justify-between gap-10 px-10 py-16 rounded-3xl mt-14 w-[90vw] mx-auto bg-gold-500">
      <div className="flex flex-col items-center text-center gap-5 md:w-[30%] lg:w-auto">
        <Image src={ExploreIconSvg} alt="ExploreIconSvg" />
        <p className="text-black text-lg font-bold">
          Uncover the best nightlife spot around you
        </p>
      </div>
      <div className="flex flex-col items-center text-center gap-5 md:w-[30%] lg:w-auto">
        <Image src={SearchIconSvg} alt="SearchIconSvg" />
        <p className="text-black text-lg font-bold">
          Plan the perfect night out as you stay informed with all activities
          happening around you.
        </p>
      </div>
      <div className="flex flex-col items-center text-center gap-5 md:w-[30%] lg:w-auto">
        <Image src={DrinksIconSvg} alt="DrinksIconSvg" />
        <p className="text-black text-lg font-bold">
          Order your favorite drink at your favorite spot and enjoy exclusive
          benefits.
        </p>
      </div>
      <div className="flex flex-col items-center text-center gap-5 md:w-[30%] lg:w-auto">
        <Image src={PhoneIconSvg} alt="PhoneIconSvg" />
        <p className="text-black text-lg font-bold">
          Post and view updates from different spots around you
        </p>
      </div>
    </section>
  );
};

export default AboutUsFeatures;
