import AboutApp from "@/components/LandingPage/Home/AboutApp";
import GetApp from "@/components/LandingPage/Home/GetApp";
import HeroSection from "@/components/LandingPage/Home/HeroSection";
import ContactSection from "@/components/LandingPage/Home/ContactSection";
import Footer from "@/components/UI/Footer/Footer";
import NavbarLP from "@/components/UI/Navbar/LandingPageNavbar/NavbarLP";
const page = () => {
  return (
    <>
      <HeroSection />
      <AboutApp />
      <GetApp />
      <ContactSection />
      <Footer />
    </>
  );
};

export default page;
