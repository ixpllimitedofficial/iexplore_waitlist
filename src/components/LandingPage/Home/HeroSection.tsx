import Image from "next/image";
import LandingPageBgImage from "@/assets/img/LandingPage/LandingPageBgImage.png";
import LandingPagePhoneImage from "@/assets/img/LandingPage/LandingPagePhoneImage.png";
import LandingPageSpiralsImage from "@/assets/img/LandingPage/LandingPageSpiralsImage.png";
import AppStoreImage from "@/assets/img/AppStoreImage.png";
import GooglePlayImage from "@/assets/img/GooglePlayImage.png";
import NavbarLP from "../../UI/Navbar/LandingPageNavbar/NavbarLP";

const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${LandingPageBgImage.src})` }}
      className="relative bg-no-repeat bg-cover bg-center overflow-hidden h-[580px] md:h-[450px] lg:h-auto lg:w-auto"
    >
      <NavbarLP />

      <div className="px-24 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="relative lg:bottom-[-80px] z-50 text-center md:text-start">
          <h1 className="font-bold text-3xl md:text-5xl">
            FIND SOMETHING <br />
            <span className="text-[#E1BD8A] italic font-bold">GREAT</span> TO DO
          </h1>
          <p className="md:text-lg lg:text-xl w-[90%] mx-auto md:mx-0 lg:w-[70%] my-2 lg:my-5">
            Download and enjoy our app with your friends with{" "}
            <span className="font-bold italic">ease!</span>
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
          className="relative h-[370px] md:h-[450px] lg:h-[630px] w-auto bottom-[-140px] md:bottom-[-120px] lg:bottom-[-180px] z-50"
        />
      </div>

      {/* spiral image */}
      <Image
        src={LandingPageSpiralsImage}
        alt="LandingPageSpiralsImage"
        className="absolute top-0 left-0"
      />
    </section>
  );
};

export default HeroSection;
