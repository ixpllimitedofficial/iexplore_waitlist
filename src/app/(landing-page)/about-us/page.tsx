import AboutUsFeatures from "@/components/AboutUsPage/AboutUsFeatures";
import AboutUsSection from "@/components/AboutUsPage/AboutUsSection";
import HeroSection from "@/components/AboutUsPage/HeroSection";
import TeamSection from "@/components/AboutUsPage/TeamSection";
import ContactSection from "@/components/LandingPage/ContactSection";
import Footer from "@/components/UI/Footer/Footer";

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <AboutUsFeatures />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default page;
