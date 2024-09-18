import VendorFAQ from "@/components/MainWebsite/VendorFAQ";
import Footer from "@/components/MainWebsite/Footer";
import AboutVendor from "@/components/MainWebsite/Vendor/AboutVendor";
import GetStarted from "@/components/MainWebsite/Vendor/GetStarted";
import HeroSection from "@/components/MainWebsite/Vendor/HeroSection";
import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";

const page = async () => {
  return (
    <>
      <MainDesktopAndMobileNav />
      <section className="pt-28 md:pt-32">
        <HeroSection />
        <AboutVendor />
        <VendorFAQ />
        <GetStarted />
      </section>
      <Footer />
    </>
  );
};

export default page;
