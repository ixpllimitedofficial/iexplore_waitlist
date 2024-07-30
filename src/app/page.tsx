import HeroSection from "@/components/MainPage/Waitlist/HeroSection";
// import MainDesktopAndMobileNav from "@/components/Navbars/MainWebsiteNavbar/MainDesktopAndMobileNav";

const page = async () => {
  return (
    <section className="bg-[#201D1C] py-24">
      {/* <MainDesktopAndMobileNav /> */}
      <HeroSection />
    </section>
  );
};

export default page;
