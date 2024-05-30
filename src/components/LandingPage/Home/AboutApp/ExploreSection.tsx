import Image from "next/image";
import AboutAppGoldBg from "@/assets/img/LandingPage/AboutAppGoldBg.png";
import ExplorePhoneImage from "@/assets/img/LandingPage/ExplorePhoneImage.png";
import ExploreTextIxon from "@/assets/svg/LandingPageSvg/ExploreTextIxon.svg";

const ExploreSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${AboutAppGoldBg.src})` }}
      className="relative flex flex-col md:flex-row items-center justify-around gap-10 p-10 h-[600px] md:h-[350px] lg:h-[450px] w-[90vw] lg:w-[80vw] mx-auto bg-no-repeat bg-cover bg-center my-10 rounded-3xl overflow-hidden"
    >
      <div className="md:w-[45%] flex flex-col gap-3">
        <div>
          <Image src={ExploreTextIxon} alt="ExploreTextIxon" />
          <h1 className="font-bold text-2xl md:text-3xl text-black">Explore</h1>
          <p className="text-lg lg:text-xl text-black font-bold italic leading-snug">
            (Satisfy the adventurer in you)
          </p>
        </div>
        <p className="text-lg lg:text-xl text-black font-medium leading-snug">
          As you journey the hottest spots for an experience to fill your soul,
          you uncover  hidden gems in your city’s vibrant nightlife scene .
        </p>
      </div>

      {/* phone image */}
      <Image
        src={ExplorePhoneImage}
        alt="ExplorePhoneImage"
        className="relative h-[700px] md:h-[500px] lg:h-[750px] w-auto md:bottom-[-120px] lg:bottom-[-230px]"
      />
    </section>
  );
};

export default ExploreSection;
