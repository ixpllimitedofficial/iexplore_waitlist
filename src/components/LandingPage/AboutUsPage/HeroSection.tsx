import HeroSectionBgImage from "@/assets/img/LandingPage/AboutUsPage/HeroSectionBgImage2.jpeg";
import NavbarLP from "../../UI/Navbar/LandingPageNavbar/NavbarLP";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${HeroSectionBgImage.src})` }}
      className="relative bg-no-repeat bg-cover bg-center overflow-hidden h-[500px] lg:w-auto"
    >
      {" "}
      {/* <Image
        src={HeroSectionBgImage.src}
        alt="Background Image"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50" // Adjust opacity value here
      /> */}
      <NavbarLP />
      <div className="h-full w-full flex items-center justify-center">
        <h1 className="font-bold text-3xl md:text-5xl z-50">
          About<span className="text-gold-500 font-bold">Us</span>
        </h1>
      </div>
      <div className="absolute top-0 left-0 bg-[#000000da] h-full w-full"></div>
    </section>
  );
};

export default HeroSection;
