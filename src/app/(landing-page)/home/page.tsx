import HeroSection from "@/components/MainPage/Home/HeroSection";
import FAQ from "@/components/MainPage/FAQ";
import Discover from "@/components/MainPage/Home/Discover";
import JoinWaitlistFooter from "@/components/MainPage/JoinWaitlistFooter";
import AboutCEO from "@/components/MainPage/Home/AboutCEO";

const page = async () => {
  return (
    <section className="">
      <HeroSection />
      <Discover />
      <AboutCEO />
      <FAQ />
      <JoinWaitlistFooter />
    </section>
  );
};

export default page;
