import HeroSection from "@/components/MainPage/Home/HeroSection";
import FAQ from "@/components/MainPage/FAQ";
import Discover from "@/components/MainPage/Home/Discover";
import JoinWaitlistFooter from "@/components/MainPage/JoinWaitlistFooter";
import AboutCEO from "@/components/MainPage/Home/AboutCEO";
import ExploreTheExperience from "@/components/MainPage/Home/ExploreTheExperience";
import NewsAndUpdates from "@/components/MainPage/Home/NewsAndUpdates";
import OurPartners from "@/components/MainPage/Home/OurPartners";
import OurMission from "@/components/MainPage/Home/OurMission";

const page = async () => {
  return (
    <section className="">
      <HeroSection />
      <Discover />
      <AboutCEO />
      <OurMission />
      <ExploreTheExperience />
      <NewsAndUpdates />
      <FAQ />
      <OurPartners />
      <JoinWaitlistFooter />
    </section>
  );
};

export default page;
