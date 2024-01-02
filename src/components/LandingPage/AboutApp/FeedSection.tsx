import Image from "next/image";
import AboutAppLightYellowBg from "@/assets/img/LandingPage/AboutAppLightYellowBg.png";
import FeedPhoneImage from "@/assets/img/LandingPage/FeedPhoneImage.png";
import SpotDetailsTextIcon from "@/assets/svg/LandingPageSvg/SpotDetailsTextIcon.svg";

const FeedSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${AboutAppLightYellowBg.src})` }}
      className="relative flex items-center justify-between gap-10 px-10 h-[520px] w-[90vw] bg-no-repeat bg-cover bg-center my-10 mx-auto rounded-3xl overflow-hidden"
    >
      {/* phone image */}
      <Image
        src={FeedPhoneImage}
        alt="FeedPhoneImage"
        className="relative bottom-[-230px] hidden lg:block"
      />

      {/*  */}
      <div className="w-[45%]">
        {" "}
        <div>
          <Image src={SpotDetailsTextIcon} alt="SpotDetailsTextIcon" />
          <h1 className="font-bold text-3xl text-black">Feed</h1>
        </div>
        <p className="md:text-lg lg:text-2xl mt-8 text-black">
          Share and view post by friends using the iExplore app at different
          spots and events.
        </p>
      </div>
    </section>
  );
};

export default FeedSection;
