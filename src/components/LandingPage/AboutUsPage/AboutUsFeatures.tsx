import Image from "next/image";
import ExploreIconSvg from "@/assets/svg/LandingPageSvg/AboutUsPage/ExploreIconSvg.svg";
import SearchIconSvg from "@/assets/svg/LandingPageSvg/AboutUsPage/SearchIconSvg.svg";
import DrinksIconSvg from "@/assets/svg/LandingPageSvg/AboutUsPage/DrinksIconSvg.svg";
import PhoneIconSvg from "@/assets/svg/LandingPageSvg/AboutUsPage/PhoneIconSvg.svg";

const AboutUsFeatures = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-10 px-10 py-16 rounded-3xl mt-14 w-[90vw] mx-auto bg-white">
      <div className="flex flex-col items-center text-center gap-5">
        <Image src={ExploreIconSvg} alt="ExploreIconSvg" />
        <p className="text-black text-xl font-bold">Discover spots & events close to you with ease</p>
      </div>
      <div className="flex flex-col items-center text-center gap-5">
        <Image src={SearchIconSvg} alt="SearchIconSvg" />
        <p className="text-black text-xl font-bold">Get necessary info concerning the spot/event of your choice</p>
      </div>
      <div className="flex flex-col items-center text-center gap-5">
        <Image src={DrinksIconSvg} alt="DrinksIconSvg" />
        <p className="text-black text-xl font-bold">Book and buy drinks at your favorite spots</p>
      </div>
      <div className="flex flex-col items-center text-center gap-5">
        <Image src={PhoneIconSvg} alt="PhoneIconSvg" />
        <p className="text-black text-xl font-bold">Post & view videos from different spots & events on your feed</p>
      </div>
    </section>
  );
};

export default AboutUsFeatures;
