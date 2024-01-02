import AboutApp from "@/components/LandingPage/AboutApp";
import GetApp from "@/components/LandingPage/GetApp";
import HeroSection from "@/components/LandingPage/HeroSection";
import Footer from "@/components/UI/Footer/Footer";

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutApp />
      <GetApp />
      <Footer />
    </>
  );
};

export default page;
