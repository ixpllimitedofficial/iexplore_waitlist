import AboutSection from "@/components/MainPage/Waitlist/AboutSection";
import HeroSection from "@/components/MainPage/Waitlist/HeroSection";
import JoinWaitlistSection from "@/components/MainPage/Waitlist/JoinWaitlistSection";
// import MainDesktopAndMobileNav from "@/components/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";

const page = async () => {
  return (
    <section className="bg-[#201D1C] py-24">
      {/* <MainDesktopAndMobileNav /> */}
      <HeroSection />
      <AboutSection />
      <JoinWaitlistSection />
    </section>
  );
};

export default page;
