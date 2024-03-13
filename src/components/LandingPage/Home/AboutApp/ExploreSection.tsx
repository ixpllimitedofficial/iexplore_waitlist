import Image from "next/image";
import AboutAppYellowBg from "@/assets/img/LandingPage/AboutAppYellowBg.png";
import ExplorePhoneImage from "@/assets/img/LandingPage/ExplorePhoneImage.png";
import ExploreTextIxon from "@/assets/svg/LandingPageSvg/ExploreTextIxon.svg";

const ExploreSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${AboutAppYellowBg.src})` }}
      className="relative flex flex-col md:flex-row items-center justify-between gap-10 px-10 h-[600px] md:h-[350px] lg:h-[520px] w-[90%] md:w-[90vw] mx-auto bg-no-repeat bg-cover bg-center my-10 rounded-3xl overflow-hidden pt-10"
    >
      <div className="md:w-[45%]">
        <div>
          <Image src={ExploreTextIxon} alt="ExploreTextIxon" />
          <h1 className="font-bold text-3xl text-black">Explore</h1>
        </div>
        <p className="text-lg lg:text-2xl mt-5 text-black">
          Fuel your inner adventurer by exploring hidden spots and places that
          makes you explore and relax at different spots suggested to you based
          on your preference
        </p>
      </div>

      {/* phone image */}
      <Image
        src={ExplorePhoneImage}
        alt="ExplorePhoneImage"
        className="relative h-[600px] lg:h-auto w-auto md:bottom-[-150px] lg:bottom-[-230px]"
      />
    </section>
  );
};

export default ExploreSection;
