import Footer from "@/components/MainPage/Footer/Footer";
import AboutSection from "@/components/MainPage/Waitlist/AboutSection";
import HeroSection from "@/components/MainPage/Waitlist/HeroSection";
import JoinWaitlistSection from "@/components/MainPage/Waitlist/JoinWaitlistSection";
import SpotsOnPhoneSection from "@/components/MainPage/Waitlist/SpotsOnPhoneSection";
import MainDesktopAndMobileNav from "@/components/MainPage/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";

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
