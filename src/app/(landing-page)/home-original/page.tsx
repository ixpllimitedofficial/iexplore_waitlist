import MainDesktopAndMobileNav from "@/components/MainWebsite/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";
import HeroSection from "@/components/MainWebsite/Waitlist/HeroSection";
import SpotsOnPhoneSection from "@/components/MainWebsite/Waitlist/SpotsOnPhoneSection";
import AboutSection from "@/components/MainWebsite/Waitlist/AboutSection";
import JoinWaitlistSection from "@/components/MainWebsite/Waitlist/JoinWaitlistSection";
import Footer from "@/components/MainWebsite/Footer";

const page = async () => {
  return (
    <>
      <section className="pt-16 md:pt-24">
        <MainDesktopAndMobileNav />
        <HeroSection />
        <SpotsOnPhoneSection />
        <AboutSection />
        <JoinWaitlistSection />
        <Footer />
      </section>
    </>
  );
};

export default page;