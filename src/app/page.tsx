import Footer from "@/components/MainPage/Footer/Footer";
import AboutSection from "@/components/MainPage/Waitlist/AboutSection";
import HeroSection from "@/components/MainPage/Waitlist/HeroSection";
import JoinWaitlistSection from "@/components/MainPage/Waitlist/JoinWaitlistSection";
import SpotsOnPhoneSection from "@/components/MainPage/Waitlist/SpotsOnPhoneSection";

const page = async () => {
  return (
    <section className="bg-[#0E0E0E] pt-24">
      <HeroSection />
      <SpotsOnPhoneSection />
      <AboutSection />
      <JoinWaitlistSection />
      <Footer />
    </section>
  );
};

export default page;
