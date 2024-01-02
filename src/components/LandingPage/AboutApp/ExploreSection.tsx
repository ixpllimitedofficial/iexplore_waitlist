import Image from "next/image";
import AboutAppYellowBg from "@/assets/img/LandingPage/AboutAppYellowBg.png";
import ExplorePhoneImage from "@/assets/img/LandingPage/ExplorePhoneImage.png";
import ExploreTextIxon from "@/assets/svg/LandingPageSvg/ExploreTextIxon.svg"

const ExploreSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${AboutAppYellowBg.src})` }}
      className="relative flex items-center justify-between gap-10 px-10 h-[520px] w-[90vw] bg-no-repeat bg-cover bg-center my-10 mx-auto rounded-3xl overflow-hidden"
    >
      <div className="w-[45%]">
        <div>
          <Image
            src={ExploreTextIxon}
            alt="ExploreTextIxon"
          />
          <h1 className="font-bold text-3xl text-black">Explore</h1>
        </div>
        <p className="md:text-lg lg:text-2xl mt-8 text-black">
          Fuel your inner adventurer by exploring hidden spots and places that
          makes you explore and relax at different spots suggested to you based
          on your preference
        </p>
      </div>

      {/* phone image */}
      <Image
        src={ExplorePhoneImage}
        alt="ExplorePhoneImage"
        className="relative bottom-[-230px] hidden lg:block"
      />
    </section>
  );
};

export default ExploreSection;
