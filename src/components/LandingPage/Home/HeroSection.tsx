import Image from "next/image";
import LandingPageBgImage from "@/assets/img/LandingPage/LandingPageBgImage.png";
import LandingPageBgImage2 from "@/assets/img/LandingPage/LandingPageBgImage2.jpeg";
import LandingPagePhoneImage from "@/assets/img/LandingPage/LandingPagePhoneImage.png";
import LandingPageSpiralsImage from "@/assets/img/LandingPage/LandingPageSpiralsImage.png";
import AppStoreImage from "@/assets/img/AppStoreImage.png";
import GooglePlayImage from "@/assets/img/GooglePlayImage.png";
import NavbarLP from "../../UI/Navbar/LandingPageNavbar/NavbarLP";

const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${LandingPageBgImage2.src})` }}
      className="relative bg-no-repeat bg-cover bg-center overflow-hidden h-[580px] md:h-[450px] lg:h-auto lg:w-auto"
    >
      <NavbarLP />

      <div className="px-5 md:px-10 lg:px-24 pt-28 lg:pt-0 flex flex-col md:flex-row items-center justify-center md:justify-between gap-5">
        <div className="relative md:bottom-[40px] lg:bottom-[-80px] z-50 text-center md:text-start">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl">
            DISCOVER, CONNECT, & <br />
            <span className="text-gold-500 italic font-bold">ENJOY</span> THE
            BEST NIGHT OUT IN YOUR CITY!
          </h1>
          <p className="md:text-lg lg:text-xl lg:w-[70%] my-2 lg:my-5">
            Download to stay informed on everyday industry moments as they{" "}
            <span className="text-gold-500 font-bold italic">unfold.</span>
          </p>

          <div className="flex justify-center md:justify-normal gap-3 cursor-pointer">
            <Image
              src={AppStoreImage}
              alt="AppStoreImage"
              className="h-8 w-auto lg:h-10"
            />
            <Image
              src={GooglePlayImage}
              alt="GooglePlayImage"
              className="h-8 w-auto lg:h-10"
            />
          </div>
        </div>

        {/* phone image */}
        <Image
          src={LandingPagePhoneImage}
          alt="LandingPagePhoneImage"
          className="relative h-[350px] md:h-[450px] lg:h-[630px] w-auto bottom-[-20px] md:bottom-[5px] lg:bottom-[-180px] z-50"
        />
      </div>

      {/* spiral image */}
      {/* <Image
        src={LandingPageSpiralsImage}
        alt="LandingPageSpiralsImage"
        className="absolute top-0 left-0"
      /> */}
      <div className="absolute top-0 left-0 bg-[#000000da] h-full w-full"></div>
    </section>
  );
};

export default HeroSection;
