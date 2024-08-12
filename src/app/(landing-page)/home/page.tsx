import HeroSection from "@/components/MainPage/Home/HeroSection";
import FAQ from "@/components/MainPage/FAQ";
import Discover from "@/components/MainPage/Home/Discover";
import JoinWaitlistFooter from "@/components/MainPage/JoinWaitlistFooter";
import AboutCEO from "@/components/MainPage/Home/AboutCEO";
import ExploreTheExperience from "@/components/MainPage/Home/ExploreTheExperience";
import OurPartners from "@/components/MainPage/Home/OurPartners";
import OurMission from "@/components/MainPage/Home/OurMission";
import MainDesktopAndMobileNav from "@/components/MainPage/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import Footer from "@/components/MainPage/Footer/Footer";
import BlogsAndUpdates from "@/components/MainPage/Home/BlogsAndUpdates";

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
      <Footer />;
    </>
  );
};

export default page;
