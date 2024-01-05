import Image from "next/image";
import DesktopNavLP from "../UI/Navbar/LandingPageNavbar/DesktopNavLP";
import LandingPageBgImage from "@/assets/img/LandingPage/LandingPageBgImage.png";
import LandingPagePhoneImage from "@/assets/img/LandingPage/LandingPagePhoneImage.png";
import LandingPageSpiralsImage from "@/assets/img/LandingPage/LandingPageSpiralsImage.png";
import AppStoreImage from "@/assets/img/AppStoreImage.png";
import GooglePlayImage from "@/assets/img/GooglePlayImage.png";
import NavbarLP from "../UI/Navbar/LandingPageNavbar/NavbarLP";

const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${LandingPageBgImage.src})` }}
      className="relative flex flex-col md:flex-row items-center justify-center md:justify-between bg-no-repeat bg-cover bg-center overflow-hidden h-[580px] w-screen md:h-[450px] lg:h-auto lg:w-auto"
    >
      <NavbarLP />
      <div className="relative lg:left-5 bottom-[-100px] md:bottom-[-50px] lg:bottom-[-80px] z-50 w-[90vw] md:w-[50%] md:mx-auto text-center md:text-start">
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl">
          FIND SOMETHING <br />
          <span className="text-[#E1BD8A] italic font-bold">GREAT</span> TO DO
        </h1>
        <p className="md:text-lg lg:text-2xl w-[90%] mx-auto md:mx-0 lg:w-[70%] my-2 lg:my-8">
          Download and enjoy our app with your friends with{" "}
          <span className="font-bold italic">ease!</span>
        </p>

        <div className="flex justify-center md:justify-normal gap-3 cursor-pointer">
          <Image
            src={AppStoreImage}
            alt="AppStoreImage"
            className="h-8 w-auto md:h-10 lg:h-14"
          />
          <Image
            src={GooglePlayImage}
            alt="GooglePlayImage"
            className="h-8 w-auto md:h-10 lg:h-14"
          />
        </div>
      </div>

      {/* phone image */}
      <Image
        src={LandingPagePhoneImage}
        alt="LandingPagePhoneImage"
        className="relative h-[370px] md:h-[450px] lg:h-[770px] w-auto bottom-[-140px] md:bottom-[-120px] lg:bottom-[-250px] md:mr-8 lg:mr-12"
      />

      {/* spiral image */}
      <Image
        src={LandingPageSpiralsImage}
        alt="LandingPageSpiralsImage"
        className=" absolute top-0 left-0"
      />
    </section>
  );
};

export default HeroSection;
