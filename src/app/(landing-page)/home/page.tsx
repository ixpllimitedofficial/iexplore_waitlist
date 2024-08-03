import HeroSection from "@/components/MainPage/Home/HeroSection";
import FAQ from "@/components/MainPage/FAQ";
import GetStarted from "@/components/MainPage/Vendor/GetStarted";
import Discover from "@/components/MainPage/Home/Discover";

const page = async () => {
  return (
    <section className="">
      <HeroSection />
      <Discover />
      <FAQ />
      <GetStarted />
    </section>
  );
};

export default page;
