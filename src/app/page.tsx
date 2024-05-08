import AboutApp from "@/components/LandingPage/Home/AboutApp";
import GetApp from "@/components/LandingPage/Home/GetApp";
import HeroSection from "@/components/LandingPage/Home/HeroSection";
import ContactSection from "@/components/LandingPage/Home/ContactSection";
import Footer from "@/components/UI/Footer/Footer";

const page = async () => {

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
