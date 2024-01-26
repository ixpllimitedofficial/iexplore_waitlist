import Image from "next/image";
import HeroSectionBgImage from "@/assets/img/LandingPage/AboutUsPage/HeroSectionBgImage.png";
import NavbarLP from "../../UI/Navbar/LandingPageNavbar/NavbarLP";

const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${HeroSectionBgImage.src})` }}
      className="relative flex items-center justify-center bg-no-repeat bg-cover bg-center overflow-hidden h-[500px] lg:w-auto"
    >
      <NavbarLP />

      <h1 className="font-bold text-3xl md:text-5xl">
        About<span className="text-[#E1BD8A] font-bold">Us</span>
      </h1>

      {/* spiral image */}
      {/* <Image
        src={LandingPageSpiralsImage}
        alt="LandingPageSpiralsImage"
        className=" absolute top-0 left-0"
      /> */}
    </section>
  );
};

export default HeroSection;
