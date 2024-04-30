import HeroSectionBgImage from "@/assets/img/LandingPage/AboutUsPage/HeroSectionBgImage.png";
import NavbarLP from "../../UI/Navbar/LandingPageNavbar/NavbarLP";

const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${HeroSectionBgImage.src})` }}
      className="relative bg-no-repeat bg-cover bg-center overflow-hidden h-[500px] lg:w-auto"
    >
      <NavbarLP />

      <div className="h-full w-full flex items-center justify-center">
        <h1 className="font-bold text-3xl md:text-5xl">
          About<span className="text-gold-500 font-bold">Us</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
