import FAQ from "@/components/MainPage/FAQ";
import Footer from "@/components/MainPage/Footer/Footer";
import AboutVendor from "@/components/MainPage/Vendor/AboutVendor";
import HeroSection from "@/components/MainPage/Vendor/HeroSection";

const page = async () => {
  return (
    <section className="pt-36">
      <HeroSection />
      <AboutVendor />
      <FAQ />
      {/* <Footer /> */}
    </section>
  );
};

export default page;
