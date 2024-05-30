import Image from "next/image";
import AboutAppGoldBg from "@/assets/img/LandingPage/AboutAppGoldBg.png";
import DrinksPhoneImage from "@/assets/img/LandingPage/DrinksPhoneImage.png";
import ExploreTextIxon from "@/assets/svg/LandingPageSvg/ExploreTextIxon.svg";

const DrinksSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${AboutAppGoldBg.src})` }}
      className="relative flex flex-col md:flex-row items-center justify-around gap-10 p-10 h-[600px] md:h-[350px] lg:h-[450px] w-[90%] md:w-[85vw] lg:w-[80vw] mx-auto bg-no-repeat bg-cover bg-center my-10 rounded-3xl overflow-hidden"
      
    >
      <div className="md:w-[45%] flex flex-col gap-3">
        <div>
          <Image src={ExploreTextIxon} alt="ExploreTextIxon" />
          <h1 className="font-bold text-2xl md:text-3xl text-black">Drinks</h1>
          <p className="text-lg lg:text-xl text-black font-bold italic leading-snug">
            (Earn points while you spend).
          </p>
        </div>
        <p className="text-lg lg:text-xl text-black font-medium leading-snug">
          Seamlessly connect with friends over drinks at the best spots in your
          city and earn convertible points while you spend.
        </p>
      </div>

      {/* phone image */}
      <Image
        src={DrinksPhoneImage}
        alt="DrinksPhoneImage"
        className="relative h-[700px] md:h-[500px] lg:h-[750px] w-auto md:bottom-[-150px] lg:bottom-[-230px]"
      />
    </section>
  );
};

export default DrinksSection;
