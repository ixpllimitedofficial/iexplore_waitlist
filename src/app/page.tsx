import Footer from "@/components/MainPage/Footer/Footer";
import AboutSection from "@/components/MainPage/Waitlist/AboutSection";
import HeroSection from "@/components/MainPage/Waitlist/HeroSection";
import JoinWaitlistSection from "@/components/MainPage/Waitlist/JoinWaitlistSection";
// import MainDesktopAndMobileNav from "@/components/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";

const page = async () => {
  return (
    <section className="bg-[#201D1C] pt-24">
      {/* <MainDesktopAndMobileNav /> */}
      <HeroSection />
      <AboutSection />
      <JoinWaitlistSection />
      <Footer />
    </section>
  );
};

export default page;
