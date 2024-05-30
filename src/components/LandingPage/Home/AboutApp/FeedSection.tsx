import Image from "next/image";
import AboutAppGoldBg from "@/assets/img/LandingPage/AboutAppGoldBg.png";
import FeedPhoneImage from "@/assets/img/LandingPage/FeedPhoneImage.png";
import ExploreTextIxon from "@/assets/svg/LandingPageSvg/ExploreTextIxon.svg";

const FeedSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${AboutAppGoldBg.src})` }}
      className="relative flex flex-col md:flex-row-reverse items-center justify-around gap-10 p-10 h-[600px] md:h-[350px] lg:h-[450px] w-[90%] md:w-[85vw] lg:w-[80vw] mx-auto bg-no-repeat bg-cover bg-center my-10 rounded-3xl overflow-hidden"
    >
      {/*  */}
      <div className="md:w-[45%] flex flex-col gap-3">
        <div>
          <Image src={ExploreTextIxon} alt="ExploreTextIxon" />
          <h1 className="font-bold text-2xl md:text-3xl text-black">Feed</h1>
          <p className="text-lg lg:text-xl text-black font-bold italic leading-snug">
            (Find out what is new).
          </p>
        </div>

        <p className="text-lg lg:text-xl text-black font-medium leading-snug">
          Stay connected and updated while you plan to join the buzz  at the
          places you love.
        </p>
      </div>

      {/* phone image */}
      <Image
        src={FeedPhoneImage}
        alt="FeedPhoneImage"
        className="relative h-[700px] md:h-[500px] lg:h-[750px] w-auto md:bottom-[-150px] lg:bottom-[-230px]"
      />
    </section>
  );
};

export default FeedSection;
