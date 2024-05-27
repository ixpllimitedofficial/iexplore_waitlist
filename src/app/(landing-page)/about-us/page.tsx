import AboutUsAim from "@/components/LandingPage/AboutUsPage/AboutUsAim";
import AboutUsFeatures from "@/components/LandingPage/AboutUsPage/AboutUsFeatures";
import AboutUsSection from "@/components/LandingPage/AboutUsPage/AboutUsSection";
import HeroSection from "@/components/LandingPage/AboutUsPage/HeroSection";
import OurTeamSection from "@/components/LandingPage/AboutUsPage/OurTeamSection";
import TeamPhotoSection from "@/components/LandingPage/AboutUsPage/TeamPhotoSection";
import ContactSection from "@/components/LandingPage/Home/ContactSection";
import Footer from "@/components/UI/Footer/Footer";

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <AboutUsFeatures />
      <AboutUsAim />
      <TeamPhotoSection />
      <OurTeamSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default page;
