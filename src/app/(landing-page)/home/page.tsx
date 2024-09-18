import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import HeroSection from "@/components/MainWebsite/Home/HeroSection";
import UserFAQ from "@/components/MainWebsite/UsersFAQ";
import Discover from "@/components/MainWebsite/Home/Discover";
import JoinWaitlistFooter from "@/components/MainWebsite/JoinWaitlistFooter";
import AboutCEO from "@/components/MainWebsite/Home/AboutCEO";
import ExploreTheExperience from "@/components/MainWebsite/Home/ExploreTheExperience";
import OurPartners from "@/components/MainWebsite/Home/OurPartners";
import OurMission from "@/components/MainWebsite/Home/OurMission";
import Footer from "@/components/MainWebsite/Footer";
import BlogsAndUpdates from "@/components/MainWebsite/Home/BlogsAndUpdates";

const page = async () => {
  return (
    <>
      <MainDesktopAndMobileNav />
      <HeroSection />
      <Discover />
      <AboutCEO />
      <OurMission />
      <ExploreTheExperience />
      <BlogsAndUpdates />
      <UserFAQ />
      <OurPartners />
      <JoinWaitlistFooter />
      <Footer />
    </>
  );
};

export default page;
