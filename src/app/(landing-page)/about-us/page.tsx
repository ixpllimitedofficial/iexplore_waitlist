import AboutUsFeatures from "@/components/AboutUsPage/AboutUsFeatures";
import AboutUsSection from "@/components/AboutUsPage/AboutUsSection";
import HeroSection from "@/components/AboutUsPage/HeroSection";
import OurTeamSection from "@/components/AboutUsPage/OurTeamSection";
import TeamPhotoSection from "@/components/AboutUsPage/TeamPhotoSection";
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
