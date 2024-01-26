import AboutUsFeatures from "@/components/App/AboutUsPage/AboutUsFeatures";
import AboutUsSection from "@/components/App/AboutUsPage/AboutUsSection";
import HeroSection from "@/components/App/AboutUsPage/HeroSection";
import OurTeamSection from "@/components/App/AboutUsPage/OurTeamSection";
import TeamPhotoSection from "@/components/App/AboutUsPage/TeamPhotoSection";
import ContactSection from "@/components/LandingPage/ContactSection";
import Footer from "@/components/UI/Footer/Footer";

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <AboutUsFeatures />
      <TeamPhotoSection />
      <OurTeamSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default page;
