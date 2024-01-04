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
      className="relative flex items-center justify-around bg-no-repeat bg-cover bg-center overflow-hidden"
    >
      <NavbarLP />
      <div className="relative bottom-[-80px] z-50">
        <h1 className="font-bold text-2xl md:text-5xl lg:text-6xl">
          FIND SOMETHING <br />
          <span className="text-[#E1BD8A] italic font-bold">GREAT</span> TO DO
        </h1>
        <p className="md:text-lg lg:text-2xl lg:w-[70%] my-2 lg:my-8">
          Download and enjoy our app with your friends with{" "}
          <span className="font-bold italic">ease!</span>
        </p>

        <div className="flex gap-3 cursor-pointer">
          <Image
            src={AppStoreImage}
            alt="AppStoreImage"
            className="h-8 w-auto md:h-14"
          />
          <Image
            src={GooglePlayImage}
            alt="GooglePlayImage"
            className="h-8 w-auto md:h-14"
          />
        </div>
      </div>

      {/* phone image */}
      <Image
        src={LandingPagePhoneImage}
        alt="LandingPagePhoneImage"
        className="hidden lg:block relative bottom-[-250px]"
      />

      {/* spiral image */}
      <Image
        src={LandingPageSpiralsImage}
        alt="LandingPageSpiralsImage"
        className="hidden lg:block absolute top-0 left-0"
      />
    </section>
  );
};

export default HeroSection;
