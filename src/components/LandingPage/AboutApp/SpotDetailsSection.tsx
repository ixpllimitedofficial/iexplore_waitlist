import Image from "next/image";

import AboutAppLightYellowBg from "@/assets/img/LandingPage/AboutAppLightYellowBg.png";
import SpotDetailsPhoneImage from "@/assets/img/LandingPage/SpotDetailsPhoneImage.png";

const SpotDetailsSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${AboutAppLightYellowBg.src})` }}
      className="relative flex items-center justify-between gap-52 px-10 h-[520px] w-[90vw] bg-no-repeat bg-cover bg-center my-10 mx-auto rounded-3xl overflow-hidden"
    >
      {/* phone image */}
      <Image
        src={SpotDetailsPhoneImage}
        alt="SpotDetailsPhoneImage"
        className="relative bottom-[-230px] hidden lg:block"
      />

      {/*  */}
      <div className="">
        <h1 className="font-bold text-3xl text-black">Spot Details</h1>
        <p className="md:text-lg lg:text-2xl mt-8 text-black">
          Get accurate details about the spot you’re interested on going which
          also includes directions to your desired spot.
        </p>
      </div>
    </section>
  );
};

export default SpotDetailsSection;
