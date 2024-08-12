import FAQ from "@/components/MainPage/FAQ";
import Footer from "@/components/MainPage/Footer/Footer";
import AboutVendor from "@/components/MainPage/Vendor/AboutVendor";
import GetStarted from "@/components/MainPage/Vendor/GetStarted";
import HeroSection from "@/components/MainPage/Vendor/HeroSection";
import MainDesktopAndMobileNav from "@/components/MainPage/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";

const page = async () => {
  return (
    <>
      <MainDesktopAndMobileNav />
      <section className="pt-24 md:pt-36">
        <HeroSection />
        <AboutVendor />
        <FAQ />
        <GetStarted />
      </section>
      <Footer />
    </>
  );
};

export default page;
