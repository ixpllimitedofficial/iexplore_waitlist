import Image from "next/image";

import AboutAppYellowBg from "@/assets/img/LandingPage/AboutAppYellowBg.png";
import DrinksPhoneImage from "@/assets/img/LandingPage/DrinksPhoneImage.png";

const DrinksSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${AboutAppYellowBg.src})` }}
      className="relative flex items-center justify-between gap-52 px-10 h-[520px] w-[90vw] bg-no-repeat bg-cover bg-center my-10 mx-auto rounded-3xl overflow-hidden"
    >
      <div className="">
        <h1 className="font-bold text-3xl text-black">Drinks</h1>
        <p className="md:text-lg lg:text-2xl mt-8 text-black">
          Book and get your preferred drinks at chosen the spot chosen by you
          with ease.
        </p>
      </div>

      {/* phone image */}
      <Image
        src={DrinksPhoneImage}
        alt="DrinksPhoneImage"
        className="relative bottom-[-230px] hidden lg:block"
      />
    </section>
  );
};

export default DrinksSection;
