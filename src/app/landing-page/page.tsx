import AboutApp from "@/components/LandingPage/AboutApp";
import GetApp from "@/components/LandingPage/GetApp";
import HeroSection from "@/components/LandingPage/HeroSection";
import ContactSection from "@/components/LandingPage/ContactSection"
import Footer from "@/components/UI/Footer/Footer";

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
