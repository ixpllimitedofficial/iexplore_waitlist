import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import HeroSection from "@/components/MainWebsite/Home/HeroSection";
import FAQ from "@/components/MainWebsite/FAQ";
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
      <section className="">
        <HeroSection />
        <Discover />
        <AboutCEO />
        <OurMission />
        <ExploreTheExperience />
        <BlogsAndUpdates />
        <FAQ />
        <OurPartners />
        <JoinWaitlistFooter />
      </section>
      <Footer />
    </>
  );
};

export default page;
