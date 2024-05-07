import Image from "next/image";
import AboutAppYellowBg from "@/assets/img/LandingPage/AboutAppYellowBg.png";
import DrinksPhoneImage from "@/assets/img/LandingPage/DrinksPhoneImage.png";
import ExploreTextIxon from "@/assets/svg/LandingPageSvg/ExploreTextIxon.svg";

const DrinksSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${AboutAppYellowBg.src})` }}
      className="relative flex flex-col md:flex-row items-center justify-between gap-10 p-10 h-[600px] md:h-[350px] lg:h-[520px] w-[90%] md:w-[85vw] mx-auto bg-no-repeat bg-cover bg-center my-10 rounded-3xl overflow-hidden"
    >
      <div className="md:w-[45%] flex flex-col gap-1">
        <div>
          <Image src={ExploreTextIxon} alt="ExploreTextIxon" />
          <h1 className="font-bold text-2xl md:text-3xl text-black">Drinks</h1>
        </div>
        <p className="text-lg lg:text-xl text-black font-medium leading-snug">
          Book and get your preferred drinks at the spot chosen by you with
          ease.
        </p>
      </div>

      {/* phone image */}
      <Image
        src={DrinksPhoneImage}
        alt="DrinksPhoneImage"
        className="relative h-[700px] md:h-[500px] lg:h-[800px] w-auto md:bottom-[-150px] lg:bottom-[-230px]"
      />
    </section>
  );
};

export default DrinksSection;
